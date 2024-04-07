import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import PrivateScreens from "./private";
import {useAppSelector} from "../core/hooks/ReduxToolkit";
import LoginScreen from "../screens/LoginScreen";
import {SCREEN_NAMES} from "../core/models/enums";
import CategoryProductsScreen from "../screens/CategoryProductsScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import ProductDetailHeader from "../components/ProductDetailComponent/ProductDetailHeader";
import CategoryProductsHeader from "../components/CategoryProductsComponent/CategoryProductsHeader";
import ProductsFilterScreen from "../screens/ProductsFilterScreen";
import ProductsFilterHeader from "../components/ProductsFilterComponent/ProductsFilterHeader";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {

    const {session} = useAppSelector(state => state.main);

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                {
                    session
                        ?
                        <>
                            <Stack.Screen
                                name="Private"
                                component={PrivateScreens}
                            />
                            <Stack.Screen
                                options={{
                                    headerShown: true,
                                    header: (props: any) => {
                                        return (
                                            <ProductDetailHeader
                                                productId={props.route.params.productId}
                                            />
                                        )
                                    }
                                }}
                                name={SCREEN_NAMES.PRODUCTS_DETAIL}
                                component={ProductDetailScreen}
                            />
                            <Stack.Screen
                                options={{
                                    headerShown: true,
                                    header: (props: any) => {
                                        return (
                                            <CategoryProductsHeader
                                                category={props.route.params.category}
                                            />
                                        )
                                    }
                                }}
                                name={SCREEN_NAMES.CATEGORY_PRODUCTS}
                                component={CategoryProductsScreen}
                            />
                            <Stack.Screen
                                options={{
                                    headerShown: true,
                                    header: (props: any) => <ProductsFilterHeader />
                                }}
                                name={SCREEN_NAMES.PRODUCTS_FILTER}
                                component={ProductsFilterScreen}
                            />
                        </>
                        :
                        <Stack.Screen
                            name={"Login"}
                            component={LoginScreen}
                        />
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;
