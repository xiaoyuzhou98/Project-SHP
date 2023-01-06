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

//搜索商品
/*{
  "category3Id": "61",
  "categoryName": "手机",
  "keyword": "小米",
  "order": "1:desc",
  "pageNo": 1,
  "pageSize": 10,
  "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
  "trademark": "4:小米"
} */
export const reqGetSearchInfo = (body) => {
  return requests.post("/list", body);
};
