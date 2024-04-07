import {FC, ReactNode} from "react";
import {View} from "react-native";

interface MainLayoutModel {
    children: ReactNode,
    background?: string
}

const MainLayout: FC<MainLayoutModel> = (
    {
        children,
        background
    }
) => {
    return (
        <View style={{
            backgroundColor: background || "#fff",
            height: "100%",
            paddingLeft: 16,
            paddingRight: 16
        }}>
            {children}
        </View>
    )
}

export default MainLayout;
