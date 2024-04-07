import {FC, memo} from "react";
import MainLayout from "../../layouts/MainLayout";
import UserInfo from "./UserInfo";
import {useMainSelector} from "../../core/store/selectors";
import LogoutButton from "./LogoutButton";
import {useAppDispatch} from "../../core/hooks/ReduxToolkit";
import {setSession} from "../../core/store/reducers/MainReducer";

export const ProfileComponent: FC = memo(() => {

    const dispatch = useAppDispatch();
    const {session} = useMainSelector();

    const handleLogout = () => {
        dispatch(setSession(null));
    }

    return (
        <MainLayout>
            {
                session
                &&
                <UserInfo
                    avatar={session.image}
                    fullName={`${session.firstName} ${session.lastName}`}
                    gender={session.gender}
                />
            }
            <LogoutButton
                onLogout={handleLogout}
            />
        </MainLayout>
    )
});

ProfileComponent.displayName = "ProfileComponent";
