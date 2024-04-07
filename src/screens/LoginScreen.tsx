import React, {FC, Suspense} from "react";

const LoginComponent = React.lazy(() => import("../components/LoginComponent"));

const LoginScreen: FC = () => {
    return (
        <Suspense fallback={""}>
            <LoginComponent />
        </Suspense>
    )
}

export default LoginScreen;
