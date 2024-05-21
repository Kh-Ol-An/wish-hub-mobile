import { FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthProvider from '@/app/providers/AuthProvider';
import Navigation from '@/app/navigation/Navigation';

const App: FC = () => {
    return (
        <>
            <AuthProvider>
                <SafeAreaProvider>
                    <Navigation />
                </SafeAreaProvider>
            </AuthProvider>

            <StatusBar style="auto" />
        </>
    );
}

export default App;
