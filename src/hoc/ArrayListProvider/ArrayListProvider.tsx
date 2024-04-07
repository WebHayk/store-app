import {FC, ReactNode} from "react";
import {ActivityIndicator, Text, useTheme} from "react-native-paper";
import {Helpers} from "../../core/helpers";

interface ArrayListProviderModel {
    array: any[] | null,
    children: ReactNode,
    emptyLabel: string
}

export const ArrayListProvider: FC<ArrayListProviderModel> = (
    {
        array,
        children,
        emptyLabel
    }
) => {

    const {colors} = useTheme();

    return (
        !Helpers.isNull(array)
        ?
        array?.length
        ?
        children
        :
        <Text>{emptyLabel}</Text>
        :
        <ActivityIndicator
            animating={true}
            color={colors.primary}
        />
    )
}
