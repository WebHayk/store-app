import {MD3LightTheme} from "react-native-paper";

const theme = {
    ...MD3LightTheme,
    roundness: 2 ,
    colors: {
        ...MD3LightTheme.colors,
        primary: '#7867BE',
        secondary: '#1E1D1D',
        outline: "#CACACA",
        tertiary: '#8F8F8F',
        error: '#F34040',
        background: "#FFF",
        scrim: "#F9F9F9"
    },
};

export default theme;
