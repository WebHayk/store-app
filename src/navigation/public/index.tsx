import {FC} from "react";
import {SCREENS_PUBLIC_ROUTES} from "../config";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const PublicScreens: FC = () => {
    return (
        <>
            {
                SCREENS_PUBLIC_ROUTES.map(route => {
                    return (
                        <Stack.Screen
                            key={route.key}
                            name={route.key}
                            component={route.component}
                        />
                    )
                })
            }
        </>
    )
}

export default PublicScreens;
