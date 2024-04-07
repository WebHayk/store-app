import HomeScreen from "../../screens/HomeScreen";
import LoginScreen from "../../screens/LoginScreen";
import {SCREEN_NAMES} from "../../core/models/enums";
import ProfileScreen from "../../screens/ProfileScreen";
import CategoriesScreen from "../../screens/CategoriesScreen";
import CategoryProductsScreen from "../../screens/CategoryProductsScreen";

export const BOTTOM_NAVIGATION_ROUTES = [
    {
        key: SCREEN_NAMES.HOME,
        component: HomeScreen,
        isBack: false,
        isShow: true
    },
    {
        key: SCREEN_NAMES.CATEGORIES,
        component: CategoriesScreen,
        isBack: true,
        isShow: true
    },
    {
        key: SCREEN_NAMES.WISHLIST,
        component: HomeScreen,
        isBack: true,
        isShow: true
    },
    {
        key: SCREEN_NAMES.PROFILE,
        component: ProfileScreen,
        isBack: true,
        isShow: true
    }
];

export const SCREENS_PUBLIC_ROUTES = [
    {
        key: "Log in",
        component: LoginScreen
    }
];
