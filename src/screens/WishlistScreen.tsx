import React, {FC, Suspense} from "react";

const WishlistComponent = React.lazy(() => import("../components/WishlistComponent"));

const WishlistScreen: FC = () => {
    return (
        <Suspense fallback={""}>
            <WishlistComponent/>
        </Suspense>
    )
}

export default WishlistScreen;
