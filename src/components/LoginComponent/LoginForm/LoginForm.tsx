import {ChangeEvent, FC, memo, useState} from "react";
import {Button, TextInput, useTheme} from "react-native-paper";
import {LoginRequestDTOModel} from "../../../core/models/interfaces/dto";
import FormLayout from "../../../layouts/FormLayout";
import {StyleSheet, View} from "react-native";

interface LoginFormModel {
    onSubmit: (values: LoginRequestDTOModel) => Promise<boolean>
}

const initialState = {
    username: "",
    password: ""
};

export const LoginForm: FC<LoginFormModel> = memo((
    {
        onSubmit
    }
) => {

    const {colors} = useTheme();

    const [isLoading, setLoading] = useState<boolean>(false);

    const [values, setValues] = useState<LoginRequestDTOModel>(initialState);

    const handleChange = (
        value: string,
        name: string
    ) => {
        setValues(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    }

    const handleSubmit = async () => {
        setLoading(true);
        let response = await onSubmit(values);
        setLoading(false);
        if (response) {
            setValues(initialState);
        }
    }

    return (
        <>
            <TextInput
                style={styles.input}
                mode={"outlined"}
                label="Username"
                value={values.username}
                onChangeText={text => handleChange(text, "username")}
            />
            <TextInput
                secureTextEntry
                style={{
                    ...styles.input,
                    backgroundColor: colors.background
                }}
                mode={"outlined"}
                label="Password"
                value={values.password}
                onChangeText={text => handleChange(text, "password")}
            />
            <View style={styles.loginButton}>
                <Button
                    loading={isLoading}
                    disabled={!values.username || !values.password}
                    style={{
                        width: "100%"
                    }}
                    mode="contained"
                    onPress={handleSubmit}
                >
                    LOG IN
                </Button>
            </View>
        </>
    )
});

LoginForm.displayName = "LoginForm";

const styles = StyleSheet.create({
    input: {
        width: "100%",
        position: "relative",
        zIndex: 10
    },
    loginButton: {
        position: "absolute",
        bottom: 24,
        width: "100%"
    }
})
