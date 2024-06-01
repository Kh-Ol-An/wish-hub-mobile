import 'react-native-get-random-values';
import CryptoJS from 'crypto-js';
// import { t } from 'i18next';
import { IWish } from '@/app/models/IWish';

export const encryptedData = (data: string, secret: string): string => CryptoJS.AES.encrypt(data, secret).toString();

export const decryptedData = (data: string, secret: string): string => {
    try {
        const decrypted = CryptoJS.AES.decrypt(data, secret).toString(CryptoJS.enc.Utf8);
        if (!decrypted) {
            throw new Error('encryption-error');
            // throw new Error(t('encryption-error'));
        }
        return decrypted;
    } catch (error) {
        return data;
    }
};

export const unencryptedData = (data: string, show: IWish['show']): string => {
    if (!data) {
        return '';
    }

    if (show === 'all' || !process.env.EXPO_PUBLIC_CRYPTO_JS_SECRET) {
        return data;
    }

    return decryptedData(data, process.env.EXPO_PUBLIC_CRYPTO_JS_SECRET);
}
