import {FC, ReactNode} from "react";
import {View} from "react-native";

interface FormLayoutModel {
    children: ReactNode
}

const FormLayout: FC<FormLayoutModel> = (
    {
        children
    }
) => {
    return (
        <View style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "16px"
        }}>
            {children}
        </View>
    )
}

export default FormLayout;
