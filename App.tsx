import AppNavigation from "./src/navigation";
import {Provider as PaperProvider} from 'react-native-paper';
import theme from "./src/core/common/theme";
import {Provider} from "react-redux";
import {persistor, store} from "./src/core/store";
import {PersistGate} from "redux-persist/integration/react";

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate
                loading={null}
                persistor={persistor}
            >
                <PaperProvider theme={theme}>
                    <AppNavigation/>
                </PaperProvider>
            </PersistGate>
        </Provider>
    );
}
