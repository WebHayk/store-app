import {FC, memo, useCallback} from "react";
import {View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import LoginForm from "./LoginForm";
import MainLayout from "../../layouts/MainLayout";
import LoginHeader from "./LoginHeader";
import {LoginRequestDTOModel} from "../../core/models/interfaces/dto";
import {useAppDispatch} from "../../core/hooks/ReduxToolkit";
import {AuthController} from "../../core/controllers/AuthController";
import {useMainSelector} from "../../core/store/selectors";

export const LoginComponent: FC = memo(() => {

    const dispatch = useAppDispatch();

    const handleLoginSubmit = useCallback(async (values: LoginRequestDTOModel) => {
        let {onLogin} = new AuthController(dispatch);
        let response = await onLogin(values);
        return !!response;
    }, []);

    return (
        <MainLayout>
            <SafeAreaView style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%"
            }}>
                <View style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: 24,
                    flex: 1,
                    paddingTop: 40
                }}>
                    <LoginHeader/>
                    <LoginForm
                        onSubmit={handleLoginSubmit}
                    />
                </View>
            </SafeAreaView>
        </MainLayout>
    )
});

LoginComponent.displayName = "LoginComponent";
