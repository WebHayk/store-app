import {FC, useState} from "react";
import {Appbar, TextInput, useTheme} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";
import {StyleSheet} from "react-native";
import SearchIcon from "../../../assets/icons/SearchIcon";
import CloseIcon from "../../../assets/icons/CloseIcon";
import {useAppDispatch} from "../../../core/hooks/ReduxToolkit";
import {setFiltersQuery} from "../../../core/store/reducers/ProductsReducer";
import {useProductsSelector} from "../../../core/store/selectors";
import {TimeoutId} from "@reduxjs/toolkit/dist/query/core/buildMiddleware/types";

let timeoutId: TimeoutId;

export const ProductsFilterHeader: FC = () => {

    const {filters} = useProductsSelector();
    const dispatch = useAppDispatch();
    const {colors} = useTheme();
    const navigation = useNavigation();

    const [query, setQuery] = useState<string>(filters.query || "");
    const [isFocus, setFocus] = useState<boolean>(false);

    const handleBack = () => navigation.goBack();

    const handleFocus = () => setFocus(true);
    const handleBlur = () => setFocus(false);

    const handleClear = () => {
        setQuery("");
        dispatch(setFiltersQuery(""));
    }

    const handleSearch = (text: string) => {
        setQuery(text);
        debounceSearch(text);
    };

    const debounceSearch = (value: string) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            dispatch(setFiltersQuery(value));
        }, 500);
    };

    return (
        <Appbar.Header style={styles.container}>
            <Appbar.BackAction
                onPress={handleBack}
            />
            <TextInput
                left={
                    <TextInput.Icon
                        disabled
                        icon={() => {
                            return (
                                <SearchIcon fill={colors.tertiary}/>
                            )
                        }}
                    />
                }
                right={
                    isFocus
                    &&
                    <TextInput.Icon
                        onPress={handleClear}
                        icon={() => {
                            return (
                                <CloseIcon
                                    fill={colors.tertiary}
                                />
                            )
                        }}
                    />
                }
                onChangeText={handleSearch}
                value={query}
                onBlur={handleBlur}
                onFocus={handleFocus}
                placeholder={isFocus ? "" : "SEARCH"}
                mode={"outlined"}
                placeholderTextColor={colors.tertiary}
                style={{
                    ...styles.productsFilterSearch,
                    backgroundColor: colors.scrim
                }}
            />
        </Appbar.Header>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        marginRight: 16
    },
    productsFilterSearch: {
        flex: 1
    }
})
