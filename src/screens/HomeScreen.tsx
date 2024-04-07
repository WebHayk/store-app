import React, {Suspense} from "react";

const HomeComponent = React.lazy(() => import("../components/HomeComponent"));

const HomeScreen = () => {
    return (
        <Suspense fallback={""}>
            <HomeComponent />
        </Suspense>
    )
}

export default HomeScreen;
