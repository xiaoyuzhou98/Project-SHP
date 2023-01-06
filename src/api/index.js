import requests from "./request";

//三级联动接口
///api/product/getBaseCategoryList  Get
export const reqCategoryList = () => {
  return requests.get("/product/getBaseCategoryList");
};
