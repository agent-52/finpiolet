import api from "../../api/axiosApi";
import type { GetCategoriesResponse } from "./category.types";

export async function getCategories() :Promise<GetCategoriesResponse>{
    const response = await api.get("/category/")
    return response.data
}