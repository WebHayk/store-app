import {ProductModel, ProductsResponseModel} from "../models/interfaces/response";
import $api from "../api";

export class ProductsService {
    static products = async (query: string = ""): Promise<ProductsResponseModel | null> => {
        try {
            let response = await $api.get<ProductsResponseModel>(`/products/search?q=${query}`);
            return response.data;
        } catch (error) {
            alert("Error from the server. Try again.");
            return null;
        }
    }

    static product = async (id: number): Promise<ProductModel | null> => {
        try {
            let response = await $api.get<ProductModel>(`/products/${id}`);
            return response.data;
        } catch (error) {
            alert("Error from the server. Try again.");
            return null;
        }
    }

    static productsCategories = async (): Promise<string[] | null> => {
        try {
            let response = await $api.get<string[]>(`/products/categories`);
            return response.data;
        } catch (error) {
            alert("Error from the server. Try again.");
            return null;
        }
    }

    static productsByCategory = async (
        category: string,
        limit?: number
    ): Promise<ProductsResponseModel | null> => {
        try {
            let response = await $api.get<ProductsResponseModel>(`/products/category/${category}`, {
                params: limit && {
                    limit
                }
            });
            return response.data;
        } catch (error) {
            alert("Error from the server. Try again.");
            return null;
        }
    }
}
