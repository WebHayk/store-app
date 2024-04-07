import React, {FC, Suspense} from "react";

const CategoriesComponent = React.lazy(() => import("../components/CategoriesComponent"));

const CategoriesScreen: FC = () => {
    return (
        <Suspense fallback={""}>
            <CategoriesComponent />
        </Suspense>
    )
}

export default CategoriesScreen;
