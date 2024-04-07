import React, {FC, Suspense} from "react";

const ProductsFilterComponent = React.lazy(() => import("../components/ProductsFilterComponent"));

const ProductsFilterScreen: FC = () => {
    return (
        <Suspense fallback={""}>
            <ProductsFilterComponent/>
        </Suspense>
    )
}

export default ProductsFilterScreen;
