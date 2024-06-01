import axios from 'axios';
import { decryptedData, encryptedData } from "@/app/utils/encryption-data";
import { getAsyncStorage, setAsyncStorage } from "@/app/utils/useAsyncStorage";
// import { t } from 'i18next';
// import { toast } from 'react-toastify';
import myUserApi from '@/app/store/my-user/api';

// Створення екземпляра axios з базовими налаштуваннями
const api = axios.create({
    withCredentials: true,
    baseURL: __DEV__ ? process.env.EXPO_PUBLIC_DEV_API_URL : process.env.EXPO_PUBLIC_API_URL
});

// Додавання токена до заголовків кожного запиту
api.interceptors.request.use(async (config) => {
    const accessToken = await getAsyncStorage('accessToken');
    if (accessToken && process.env.EXPO_PUBLIC_CRYPTO_JS_SECRET) {
        const decryptedAccessToken = decryptedData(accessToken, process.env.EXPO_PUBLIC_CRYPTO_JS_SECRET);
        config.headers.Authorization = `Bearer ${decryptedAccessToken}`;
    }

    return config;
});

// Обробка відповідей сервера
api.interceptors.response.use(
    (config) => config,
    async (error) => {
        const originalRequest = error.config;

        // Якщо помилка 401 і це не повторний запит
        if (error.response.status === 401 && error.config && !error.config._isRetry) {
            originalRequest._isRetry = true;
            try {
                const response = await myUserApi.refresh();

                if (process.env.EXPO_PUBLIC_CRYPTO_JS_SECRET) {
                    const encryptedAccessToken = encryptedData(
                        response.data.accessToken,
                        process.env.EXPO_PUBLIC_CRYPTO_JS_SECRET,
                    );
                    await setAsyncStorage('accessToken', encryptedAccessToken);
                }

                return api.request(originalRequest);
            } catch (error: any) {
                // toast(
                //     error.response?.data?.message || t('alerts.interceptors-api.response.error'),
                //     { type: 'error' },
                // );
                console.log('api catch error: ', error);
            }
        }
        throw error;
    }
);

export default api;
