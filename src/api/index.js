import requests from "./ajax";
import mockRequests from "./mockAjax";

//三级联动接口
///api/product/getBaseCategoryList  Get
export const reqGetCategoryList = () => {
  return requests.get("/product/getBaseCategoryList");
};

//获取banner轮播图
export const reqGetBannerList = () => {
  return mockRequests.get("/banner");
};

//获取floor数据
export const reqGetFloorList = () => {
  return mockRequests.get("/floor");
};
