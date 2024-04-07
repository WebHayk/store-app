import React, {FC, Suspense} from "react";

const ProductDetailComponent = React.lazy(() => import("../components/ProductDetailComponent"));

const ProductDetailScreen: FC = ({route}: any) => {

    const {productId} = route.params;

    return (
        <Suspense fallback={""}>
            <ProductDetailComponent
                productId={productId}
            />
        </Suspense>
    )
}

export default ProductDetailScreen;
