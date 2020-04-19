// 服务器域名
const baseUrl = 'http://127.0.0.1:8000/diancan/';
// 写评论接口
const commentUrl = baseUrl + 'api/comment/write';
// 查询当前用户是否已经购买该书籍并返回评论列表接口
const queryBookUrl = baseUrl + 'api/book/queryBook';
// 获取当前用户已购书籍接口
const getBoughtBooksUrl = baseUrl + 'api/user/getBoughtBooks';
// 兑换书籍接口
const buyBookUrl = baseUrl + 'api/order/buy';

// 登录接口
const loginUrl = baseUrl + 'login';
// 获取菜单接口
const foodListUrl = baseUrl + 'foodList';


module.exports = {
  commentUrl: commentUrl,
  queryBookUrl: queryBookUrl,
  getBoughtBooksUrl: getBoughtBooksUrl,
  buyBookUrl: buyBookUrl,

  loginUrl: loginUrl,
  foodListUrl: foodListUrl,
};
