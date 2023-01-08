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

// 获取商品详情
export const reqGoodInfo = (skuId) => {
  return requests.get(`/item/${skuId}`);
};

// 添加到购物车(对已有物品进行数量改动)
export const reqAddOrUpdateShopCart = (skuId, skuNum) => {
  return requests.post(`/cart/addToCart/${skuId}/${skuNum}`);
};

//获取购物车列表
export const reqGetCartList = () => {
  return requests.get("/cart/cartList");
};
//删除购物车商品
export const reqDeleteCartById = (skuId) => {
  return requests.delete(`cart/deleteCart/${skuId}`);
};

// 切换商品选中状态
export const reqUpdateCheckedById = (skuID,isChecked) => {
  return requests.get(`cart/checkCart/${skuID}/${isChecked}`);
};