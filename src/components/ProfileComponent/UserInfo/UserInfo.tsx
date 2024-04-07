import {FC} from "react";
import {View} from "react-native";
import {Avatar, List, Text, useTheme} from "react-native-paper";

interface UserInfoModel {
    avatar: string,
    fullName: string,
    gender: string
}

export const UserInfo: FC<UserInfoModel> = (
    {
        avatar,
        fullName,
        gender
    }
) => {

    const {colors} = useTheme();

    return (
        <List.Section>
            <List.Item
                title={() => {
                    return (
                        <>
                            <Text
                                style={{
                                    marginBottom: 3
                                }}
                                variant={"bodyMedium"}
                            >
                                {fullName}
                            </Text>
                            <Text
                                style={{
                                    color: colors.outline
                                }}
                                variant={"labelMedium"}
                            >
                                {gender}
                            </Text>
                        </>
                    )
                }}
                left={() => <Avatar.Image
                    size={60}
                    source={{
                        uri: avatar
                    }}
                />}
            />
        </List.Section>
    )
}
