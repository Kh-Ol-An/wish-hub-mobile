import { FC } from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import store from '@/app/store';
import AuthProvider from '@/app/providers/AuthProvider';
import Navigation from '@/app/navigation/Navigation';

const App: FC = () => {
    return (
        <Provider store={store}>
            <AuthProvider>
                <SafeAreaProvider>
                    <Navigation />
                </SafeAreaProvider>
            </AuthProvider>

            <StatusBar style="auto" />
        </Provider>
    );
}

export default App;
