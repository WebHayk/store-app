import React, {FC, Suspense} from "react";

const CategoryProductsComponent = React.lazy(() => import("../components/CategoryProductsComponent"));

const CategoryProductsScreen: FC = ({route}: any) => {

    const {category} = route.params;

    return (
        <Suspense fallback={""}>
            <CategoryProductsComponent
                category={category}
            />
        </Suspense>
    )
}

export default CategoryProductsScreen;
