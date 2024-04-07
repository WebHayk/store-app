import {FC} from "react";
import HomeIcon from "../../assets/icons/HomeIcon";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {useTheme} from "react-native-paper";
import {SCREEN_NAMES} from "../../core/models/enums";
import CategoryIcon from "../../assets/icons/CategoryIcon";
import WishListIcon from "../../assets/icons/WishListIcon";
import ProfileIcon from "../../assets/icons/ProfileIcon";
import HomeScreen from "../../screens/HomeScreen";
import HomeHeader from "../../components/HomeComponent/HomeHeader";
import CategoriesScreen from "../../screens/CategoriesScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import {useProductsSelector} from "../../core/store/selectors";
import WishlistScreen from "../../screens/WishlistScreen";
import CategoriesHeader from "../../components/CategoriesComponent/CategoriesHeader";
import WishlistHeader from "../../components/WishlistComponent/WishlistHeader";
import ProfileHeader from "../../components/ProfileComponent/ProfileHeader";

const Tab = createBottomTabNavigator();

const PrivateScreens: FC = () => {

    const {colors} = useTheme();
    const {wishlist} = useProductsSelector();

    return (
        <Tab.Navigator
            screenOptions={{
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0
                },
                tabBarStyle: {
                    borderTopWidth: 0
                },
                tabBarInactiveTintColor: colors?.outline,
                tabBarActiveTintColor: colors.primary
            }}
            initialRouteName="Home"
        >
            <Tab.Screen
                name={SCREEN_NAMES.HOME}
                component={HomeScreen}
                options={{
                    header: () => <HomeHeader/>,
                    tabBarIcon: props => {
                        let {focused} = props;
                        let data = {
                            fill: focused ? colors.primary : colors.outline
                        };
                        return <HomeIcon {...data} />;
                    },
                    title: SCREEN_NAMES.HOME
                }}
            />
            <Tab.Screen
                name={SCREEN_NAMES.CATEGORIES}
                component={CategoriesScreen}
                options={{
                    header: () => <CategoriesHeader />,
                    tabBarIcon: props => {
                        let {focused} = props;
                        let data = {
                            fill: focused ? colors.primary : colors.outline
                        };
                        return <CategoryIcon {...data} />;
                    },
                    title: SCREEN_NAMES.CATEGORIES
                }}
            />
            <Tab.Screen
                name={SCREEN_NAMES.WISHLIST}
                component={WishlistScreen}
                options={{
                    header: () => <WishlistHeader />,
                    tabBarIcon: props => {
                        let {focused} = props;
                        let data = {
                            fill: focused ? colors.primary : colors.outline
                        };
                        return <WishListIcon {...data} />;
                    },
                    tabBarBadge: wishlist?.length,
                    title: SCREEN_NAMES.WISHLIST
                }}
            />
            <Tab.Screen
                name={SCREEN_NAMES.PROFILE}
                component={ProfileScreen}
                options={{
                    header: () => <ProfileHeader />,
                    tabBarIcon: props => {
                        let {focused} = props;
                        let data = {
                            fill: focused ? colors.primary : colors.outline
                        };
                        return <ProfileIcon {...data} />;
                    },
                    title: SCREEN_NAMES.PROFILE
                }}
            />
        </Tab.Navigator>
    )
}

export default PrivateScreens;
