import {FC, lazy, Suspense} from "react";

const ProfileComponent = lazy(() => import("../components/ProfileComponent"));

const ProfileScreen: FC = () => {
    return (
       <Suspense fallback={""}>
           <ProfileComponent />
       </Suspense>
    )
}

export default ProfileScreen;
