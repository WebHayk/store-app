import {AppDispatchType} from "../models/types";
import {ProductsService} from "../services/ProductsService";
import {
    setCategories,
    setFilteredProducts,
    setProduct,
    setProductsByCategory,
    setProductsByCategoryDetail,
    setWishList
} from "../store/reducers/ProductsReducer";
import {CategoryProductsModel} from "../models/interfaces";
import {ProductsResponseModel} from "../models/interfaces/response";

export class ProductsController {
    private dispatch: AppDispatchType;

    constructor(dispatch: AppDispatchType) {
        this.dispatch = dispatch;
    }

    onProductsGet = async (search: string = ""): Promise<ProductsResponseModel | undefined> => {
        let {dispatch} = this;
        let response = await ProductsService.products(search);
        if (!response) return;
        dispatch(setFilteredProducts(response));
        return response;
    }

    onProductsByCategoryDetailGet = async (
        category: string
    ) => {
        let {dispatch} = this;
        let response = await ProductsService.productsByCategory(category);
        if (!response) return;
        console.log(response)
        dispatch(setProductsByCategoryDetail(response));
    }

    onProductsByCategoryGet = async (
        categories: string[],
        limit: number
    ) => {
        let {dispatch} = this;

        let data: CategoryProductsModel[] = [];

        for (let category of categories) {
            let response = await ProductsService
                .productsByCategory(category, limit);
            if (!response) return;
            let {products} = response;
            let categoryProducts: CategoryProductsModel = {
                category,
                products
            };
            data.push(categoryProducts);
        }

        dispatch(setProductsByCategory(data));
    }

    onProductWished = (
        productId: number,
        wishList: number[]
    ) => {

        let {dispatch} = this;

        let data = [...wishList];

        if (wishList.includes(productId)) {
            data = data.filter(value => value !== productId);
        } else {
            data.push(productId);
        }

        dispatch(setWishList(data));
    }

    onProductGet = async (id: number) => {
        let {dispatch} = this;
        let response = await ProductsService.product(id);
        if (!response) return;
        dispatch(setProduct(response));
    }

    onCategoriesGet = async () => {
        let {dispatch} = this;
        let response = await ProductsService.productsCategories();
        if (!response) return;
        dispatch(setCategories(response));
    }
}
