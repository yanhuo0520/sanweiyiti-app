import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import yinongbao from '@/pages/yinongbao'
import login from '@/pages/login' // 登录
import forgetPasw from '@/pages/forgetPasw' // 忘记密码
import chooseIdentity from '@/pages/chooseIdentity' // 登录 - 选择身份

// 个人中心
import ucenter from '@/pages/ucenter/index' // 登录 - 个人中心
import myInfo from '@/pages/ucenter/myInfo' // 登录 - 个人中心 - 基本资料
import infoChange from '@/pages/ucenter/infoChange' // 登录 - 个人中心 - 基本资料 - 修改
import pasSet from '@/pages/ucenter/pasSet' // 个人中心 - 密码设置
import payPass from '@/pages/ucenter/payPass' // 个人中心 - 密码设置 - 支付密码
import loginPass from '@/pages/ucenter/loginPass' // 个人中心 - 密码设置 - 登录密码
import feedback from '@/pages/ucenter/feedback' // 个人中心 - 意见反馈
import yeji from '@/pages/ucenter/yeji' // 个人中心 - 业绩顾问
import loginPw from '@/pages/ucenter/loginPw' // 个人中心 - 登录令牌

// 消息
import message from '@/pages/message/index' // 消息
import messageDetail from '@/pages/message/detail' // 消息 - 详情

// 生活缴费
import livexpense from '@/pages/livexpense/index' // 生活缴费

// 账号管家
import accountIndex from '@/pages/account/index' // 账号管家
import accouIn from '@/pages/account/accouIn' // 账号管家 - 转入
import accouInResult from '@/pages/account/accouInResult' // 账号管家 - 转入 - 支付结果
import accouInSuccessRedirect from '@/pages/account/accouInSuccessRedirect' // 账号管家 - 转入 - 支付宝支付成功-重定向
import accouInFaileRedirect from '@/pages/account/accouInFaileRedirect' // 账号管家 - 转入 - 支付宝支付失败-重定向
import accouOut from '@/pages/account/accouOut' // 账号管家 - 转出
import accouOutList from '@/pages/account/accouOutList' // 账号管家 - 转出 - 列表
import jiaoyiList from '@/pages/account/jiaoyiList' // 账号管家 - 交易明细
import jiaoyiDetail from '@/pages/account/jiaoyiDetail' // 账号管家 - 交易明细 - 详情
import shouyiList from '@/pages/account/shouyiList' // 账号管家 - 收易明细

// 账号管家 - 银行卡
import applyCard from '@/pages/account/applyCard' // 我的银行卡 -- 添加银行卡
import applyCardDetail from '@/pages/account/applyCardDetail' // 账户管家 - 我的银行卡 - 添加银行卡 - 银行卡信息
import cooCardAcc from '@/pages/account/cooCard' // 我的银行卡
import carDetail from '@/pages/account/carDetail' // 我的银行卡 - 详情

// 账号管家 - 合作社
import cooperativeAcc from '@/pages/account/cooperative' // 我的合作社账户
import myGujin from '@/pages/account/myGujin' // 我的合作社账户 -- 我的股金
import myHuzhu from '@/pages/account/myHuzhu' // 我的合作社账户 -- 我的互助金
import cooProfitAcc from '@/pages/account/cooProfit' // 我的合作社账户--收益明细

// 合作经济
// 群众、社长、申请合作社、申请创建团体、申请加入团体
import joinCooper from '@/pages/hezuo/join' // 登录注册 - 注册 - 入社
import hezuoIndexMass from '@/pages/hezuo/indexMass' // 合作经济-群众
import applyMass from '@/pages/hezuo/applyMass' // 合作经济-群众 - 群众团体 - 创建群众团体
import applymaSel from '@/pages/hezuo/applymaSel' // 合作经济-群众 - 群众团体 - 加入群众团体
import joinMass from '@/pages/hezuo/joinMass' // 合作经济-群众 - 群众团体 - 申请加入群众团体 - 输入
import hezuoIndexPresid from '@/pages/hezuo/indexPresid' // 合作经济-社长

import tiXian from '@/pages/hezuo/tiXian' // 合作经济-提现 - 团长/团员
import tixianList from '@/pages/hezuo/tixianList' // 合作经济-提现 - 列表 - 团长/团员

// 互助金
import huzhuIn from '@/pages/hezuo/huzhuIn' // 合作经济-互助金存入
import huzhuInResult from '@/pages/hezuo/huzhuInResult' // 合作经济-互助金存入 - 结果
import huzhuList from '@/pages/hezuo/huzhuList' // 合作经济-互助金 - 明细
import huzhuDetail from '@/pages/hezuo/huzhuDetail' // 合作经济-互助金 - 明细 - 详情
import huzhuTi from '@/pages/hezuo/huzhuTi' // 合作经济-互助金提取
import huzhudTi from '@/pages/hezuo/huzhudTi' // 合作经济-互助金提取- 定期提取
import huzhuHout from '@/pages/hezuo/huzhuHout' // 合作经济-互助金取出 - 活期 -- 暂已弃用
import huzhuDout from '@/pages/hezuo/huzhuDout' // 合作经济-互助金取出 - 定期 -- 暂已弃用
import huzhuZhuan from '@/pages/hezuo/huzhuZhuan' // 合作经济-互助金取出 - 转账

// 互助金 - 收益提取
import shouyiTi from '@/pages/hezuo/shouyiTi' // 合作经济-互助金 - 收益提取列表
import shouyiOut from '@/pages/hezuo/shouyiOut' // 合作经济-互助金 - 收益提取列表 - 提现申请
import shouyiOutList from '@/pages/hezuo/shouyiOutList' // 合作经济-互助金 - 收益提取列表 - 提现申请 - 列表

// 我要借款
import presidentJie from '@/pages/hezuo/presidentJie' // 合作经济-社长-我要借款
import applyJie from '@/pages/hezuo/applyJie' // 合作经济-社长 - 我要借款 - 申请借款
import jieDetail from '@/pages/hezuo/jieDetail' // 合作经济 - 社长 - 我要借款 - 历史借款 - 借款详情待审批

// 我要还款
import presidentHuan from '@/pages/hezuo/presidentHuan' // 合作经济 - 社长 - 我要还款
import preHuanPlan from '@/pages/hezuo/preHuanPlan' // 合作经济 - 社长 - 我要还款 - 还款计划
import huanDetail from '@/pages/hezuo/huanDetail' // 合作经济 - 社长 - 我要还款 - 还款详情
import advanceHuan from '@/pages/hezuo/advanceHuan' // 合作经济 - 社长 - 我要还款 - 提前还款
import ontimeHuanNull from '@/pages/hezuo/ontimeHuanNull' // 合作经济 - 社长 - 按期还款 - 暂无
import ontimeHuan from '@/pages/hezuo/ontimeHuan' // 合作经济 - 社长 - 我要还款 - 按时还款【多期】
import untimeHuan from '@/pages/hezuo/untimeHuan' // 合作经济 - 社长 - 我要还款 - 按时还款---单期
import huanResult from '@/pages/hezuo/huanResult' // 合作经济 - 社长 - 我要还款 - 提前还款 - 还款成功/失败
import huanSuccess from '@/pages/hezuo/huanSuccess' // 合作经济 - 社长 - 我要还款 - 提前还款 - 还款成功
import huanFaile from '@/pages/hezuo/huanFaile' // 合作经济 - 社长 - 我要还款 - 提前还款 - 还款失败
import huanJilu from '@/pages/hezuo/huanJilu' // 合作经济 - 社长 - 我要还款 - 提前还款 - 还款记录
import huanJiluList from '@/pages/hezuo/huanJiluList' // 合作经济 - 社长 - 我要还款 - 提前还款 - 还款记录 --提前还款列表

// 我要担保
import presidentDan from '@/pages/hezuo/presidentDan' // 合作经济 - 社长 - 我要担保
import danDetail from '@/pages/hezuo/danDetail' // 合作经济 - 社长 - 我要担保 ---担保详情
import danInput from '@/pages/hezuo/danInput' // 合作经济 - 社长 - 我要担保 ---为他担保
import danFang from '@/pages/hezuo/danFang' // 合作经济 - 社长 -  我要担保 - 担保详情 - 为他担保 - 其他资产担保 - 房产
import danChe from '@/pages/hezuo/danChe' // 合作经济 - 社长 -  我要担保 - 担保详情 - 为他担保 - 其他资产担保 - 车产
import danOther from '@/pages/hezuo/danOther' // 合作经济 - 社长 -  我要担保 - 担保详情 - 为他担保 - 其他资产担保 - 其他资产
import historyJie from '@/pages/hezuo/historyJie' // 合作经济 - 社长 - 我要担保 ---历史借款
import danjieDetail from '@/pages/hezuo/danjieDetail' // 合作经济 - 社长 - 我要担保 ---历史借款 --- 借款详情

import hezuoIndexState from '@/pages/hezuo/indexState' // 合作经济-团长
import stateGoodsDetails from '@/pages/hezuo/stateGoodsDetails' // 合作经济-团长 - 商品详情
import indexYuan from '@/pages/hezuo/indexYuan' // 合作经济-团员


// 赏金任务--刘家军
import taskIndex from '@/pages/bountyTask/index'
import taskHall from '@/pages/bountyTask/hall'
import addTask from '@/pages/bountyTask/addTask'
import addStep from '@/pages/bountyTask/addStep'
import taskCenter from '@/pages/bountyTask/ucenter'
import taskList from '@/pages/bountyTask/taskList'
import submitTask from '@/pages/bountyTask/submitTask'
import submitTaskDetail from '@/pages/bountyTask/submitTaskDetail'
import taskDetail from '@/pages/bountyTask/taskDetail'
import verifyTaskList from '@/pages/bountyTask/verifyTaskList'
import taskDetailByVerify from '@/pages/bountyTask/taskDetailByVerify'
import manageTask from '@/pages/bountyTask/manageTask'
import followList from '@/pages/bountyTask/followList'
import helpList from '@/pages/bountyTask/helpList'
import articleDetail from '@/pages/bountyTask/articleDetail'
import withdraw from '@/pages/bountyTask/withdraw'
import billList from '@/pages/bountyTask/billList'
import taskPay from '@/pages/bountyTask/pay'
import editTask from '@/pages/bountyTask/editTask'
import editStep from '@/pages/bountyTask/editStep'
import myComment from '@/pages/bountyTask/myComment'
import billDetail from '@/pages/bountyTask/billDetail'
import depositBillList from '@/pages/bountyTask/depositBillList'
import chooseTaskArea from '@/pages/bountyTask/chooseTaskArea'

// 互助圈子 -刘家军
import mutualCircle from '@/pages/mutualCircle/index'
import addArticle from '@/pages/mutualCircle/addArticle'
import mutualDetail from '@/pages/mutualCircle/articleDetail'
import likeList from '@/pages/mutualCircle/likeList'
import commentList from '@/pages/mutualCircle/commentList'
import mutualUcenter from '@/pages/mutualCircle/ucenter'

// 信用评分 - 龚焕焕
import creditScore from '@/pages/credit/index'
import userCepings from '@/pages/credit/userCeping'
import eachOthers from '@/pages/credit/eachOther'
import eachFlows from '@/pages/credit/eachFlow'
import scoringRecord from '@/pages/credit/scoringRecord'

// 商城--段文静
import shopIndex from '@/pages/shop/index'
import allCate from '@/pages/shop/allCate'
import speedBuy from '@/pages/shop/speedBuy'
import goodsDetails from '@/pages/shop/goodsDetails'
import confirmOrder from '@/pages/shop/confirmOrder'
import shopPay from '@/pages/shop/pay'
import shoppingCart from '@/pages/shop/shoppingCart'
import lookupGoods from '@/pages/shop/lookupGoods'
import personal from '@/pages/shop/ucenter/personal'
import orderMy from '@/pages/shop/ucenter/orderMy'
import orderDetails from '@/pages/shop/ucenter/orderDetails'
import collectMy from '@/pages/shop/ucenter/collect'
import openVip from '@/pages/shop/ucenter/openVip'
import collectAddress from '@/pages/shop/ucenter/collectAddress'
import addEditAddress from '@/pages/shop/ucenter/addEditAddress'
import nongziShop from '@/pages/shop/nongziShop'
import baopinShop from '@/pages/shop/baopinShop'
import youzhiShop from '@/pages/shop/youzhiShop'
import fenxiaoShop from '@/pages/shop/fenxiaoShop'
import gxShop from '@/pages/gxShop'

// 解决tab重复点击报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/yinongbao',
      name: '益农宝',
      component: yinongbao
    },
    {
      path: '/login',
      name: '登录',
      component: login
    },
    {
      path: '/forgetPasw',
      name: '登录 - 忘记密码',
      component: forgetPasw
    },
    {
      path: '/chooseIdentity',
      name: '登录 - 选择身份',
      component: chooseIdentity
    },
    {
      path: '/ucenter',
      name: '登录 - 个人中心',
      component: ucenter
    },
    {
      path: '/myInfo',
      name: '登录 - 个人中心 - 基本资料',
      component: myInfo
    },
		{
		  path: '/infoChange',
		  name: '登录 - 个人中心 - 基本资料 - 修改',
		  component: infoChange
		},
    {
      path: '/pasSet',
      name: '登录 - 密码设置',
      component: pasSet
    },
    {
      path: '/payPass',
      name: '登录 - 密码设置 - 支付密码',
      component: payPass
    },
    {
      path: '/loginPass',
      name: '登录 - 密码设置 - 登录密码',
      component: loginPass
    },
    {
      path: '/feedback',
      name: '个人中心 - 意见反馈',
      component: feedback
    },
    {
      path: '/yeji',
      name: '个人中心 - 业绩顾问',
      component: yeji
    },
    {
      path: '/loginPw',
      name: '个人中心 - 登录令牌',
      component: loginPw
    },
    {
      path: '/message',
      name: '消息',
      component: message
    },
	{
	  path: '/messageDetail',
	  name: '消息 - 详情',
	  component: messageDetail
	},
    {
      path: '/livexpense',
      name: '生活缴费',
      component: livexpense
    },
    {
      path: '/accountIndex',
      name: '账户管家',
      component: accountIndex
    },
    {
      path: '/accouIn',
      name: '账户管家 - 转入',
      component: accouIn
    },
    {
      path: '/accouInResult',
      name: '账户管家 - 转入 - 支付结果',
      component: accouInResult
    },
    {
      path: '/accouInSuccessRedirect',
      name: '账户管家 - 转入 - 支付结果 - 成功 - 重定向',
      component: accouInSuccessRedirect
    },
    {
      path: '/accouInFaileRedirect',
      name: '账户管家 - 转入 - 支付结果 - 失败 - 重定向',
      component: accouInFaileRedirect
    },
    {
      path: '/accouOut',
      name: '账户管家 - 转出',
      component: accouOut
    },
    {
      path: '/accouOutList',
      name: '账户管家 - 转出 - 列表',
      component: accouOutList
    },
    {
      path: '/jiaoyiList',
      name: '账号管家 - 交易明细',
      component: jiaoyiList
    },
    {
      path: '/jiaoyiDetail',
      name: '账号管家 - 交易明细 - 详情',
      component: jiaoyiDetail
    },
    {
      path: '/shouyiList',
      name: '账号管家 - 收易明细',
      component: shouyiList
    },
    {
      path: '/applyCard',
      name: '我的银行卡-添加银行卡',
      component: applyCard
    },
    {
      path: '/applyCardDetail',
      name: '账户管家 - 我的银行卡 - 添加银行卡 - 银行卡信息',
      component: applyCardDetail
    },
    {
      path: '/cooCardAcc',
      name: '我的银行卡',
      component: cooCardAcc
    },
    {
      path: '/carDetail',
      name: '我的银行卡 - 银行卡信息',
      component: carDetail
    },
    {
      path: '/cooperativeAcc',
      name: '我的合作社账户',
      component: cooperativeAcc
    },
    {
      path: '/myGujin',
      name: '我的合作社账户 - 我的股金',
      component: myGujin
    },
    {
      path: '/myHuzhu',
      name: '我的合作社账户 - 我的互助金',
      component: myHuzhu
    },
    {
      path: '/cooProfitAcc',
      name: '我的合作社账户-收益明细',
      component: cooProfitAcc
    },
    {
      path: '/joinCooper',
      name: '合作经济-群众',
      component: joinCooper
    },
    {
      path: '/hezuoIndexMass',
      name: '合作经济 - 群众',
      component: hezuoIndexMass
    },
    {
      path: '/applyMass',
      name: '合作经济 - 群众 - 群众团体 - 创建群众团体',
      component: applyMass
    },
    {
      path: '/applymaSel',
      name: '合作经济 - 群众 - 群众团体 - 加入群众团体',
      component: applymaSel
    },
    {
      path: '/joinMass',
      name: ' 合作经济-群众 - 群众团体 - 申请加入群众团体 - 输入',
      component: joinMass
    },
    {
      path: '/hezuoIndexPresid',
      name: '合作经济-社长',
      component: hezuoIndexPresid
    },
    {
      path: '/tiXian',
      name: '合作经济-提现',
      component: tiXian
    },
    {
      path: '/tixianList',
      name: '合作经济-提现 - 列表',
      component: tixianList
    },
    {
      path: '/huzhuList',
      name: '合作经济-互助金 - 明细',
      component: huzhuList
    },
    {
      path: '/huzhuDetail',
      name: '合作经济-互助金 - 明细 - 详情',
      component: huzhuDetail
    },
    {
      path: '/huzhuIn',
      name: '合作经济-互助金存入',
      component: huzhuIn
    },
    {
      path: '/huzhuInResult',
      name: '合作经济-互助金存入 - 结果查询',
      component: huzhuInResult
    },
    {
      path: '/huzhuTi',
      name: '合作经济-互助金提取',
      component: huzhuTi
    },
    {
      path: '/huzhudTi',
      name: '合作经济-互助金提取-定期取出',
      component: huzhudTi
    },
    {
      path: '/huzhuHout',
      name: '合作经济-互助金取出 - 活期',
      component: huzhuHout
    },
    {
      path: '/huzhuDout',
      name: '合作经济-互助金取出 - 定期',
      component: huzhuDout
    },
    {
      path: '/huzhuZhuan',
      name: '合作经济-互助金 - 转账',
      component: huzhuZhuan
    },
		{
		  path: '/shouyiTi',
		  name: '合作经济-互助金 - 收益提取',
		  component: shouyiTi
		},
    {
		  path: '/shouyiOut',
		  name: '合作经济-互助金 - 收益提取 - 申请',
		  component: shouyiOut
		},
		{
		  path: '/shouyiOutList',
		  name: '合作经济-互助金 - 收益提取 - 申请 - 列表',
		  component: shouyiOutList
		},
    {
      path: '/presidentJie',
      name: '合作经济-社长-我要借款',
      component: presidentJie
    },
    {
      path: '/applyJie',
      name: '合作经济-社长 - 我要借款 - 申请借款',
      component: applyJie
    },
    {
      path: '/jieDetail',
      name: '合作经济 - 社长 - 我要借款 - 历史借款 - 借款详情待审批',
      component: jieDetail
    },
    {
      path: '/presidentHuan',
      name: '合作经济-社长-我要还款',
      component: presidentHuan
    },
    {
      path: '/huanDetail',
      name: '合作经济-社长-我要还款 - 还款详情',
      component: huanDetail
    },
    {
      path: '/preHuanPlan',
      name: '合作经济 - 社长 - 我要还款 - 还款计划',
      component: preHuanPlan
    },
    {
      path: '/advanceHuan',
      name: '合作经济-社长-我要还款 - 提前还款',
      component: advanceHuan
    },
    {
      path: '/ontimeHuanNull',
      name: '合作经济-社长-我要还款 - 按期还款--暂无',
      component: ontimeHuanNull
    },
    {
      path: '/ontimeHuan',
      name: '合作经济-社长-我要还款 - 按时还款',
      component: ontimeHuan
    },
    {
      path: '/untimeHuan',
      name: '合作经济-社长-我要还款 - 按时还款 -- 单期 ',
      component: untimeHuan
    },
    {
      path: '/huanResult',
      name: '合作经济-社长-我要还款 - 提前还款 - 还款成功/失败',
      component: huanResult
    },
    {
      path: '/huanSuccess',
      name: '合作经济-社长-我要还款 - 提前还款 - 还款成功',
      component: huanSuccess
    },
    {
      path: '/huanFaile',
      name: '合作经济-社长-我要还款 - 提前还款 - 还款失败',
      component: huanFaile
    },
    {
      path: '/huanJilu',
      name: '合作经济-社长-我要还款 - 提前还款 - 还款记录',
      component: huanJilu
    },
    {
      path: '/huanJiluList',
      name: '合作经济-社长-我要还款 - 提前还款 - 还款记录 --提前还款列表',
      component: huanJiluList
    },
    {
      path: '/presidentDan',
      name: '合作经济-社长-我要担保',
      component: presidentDan
    },
    {
      path: '/danDetail',
      name: '合作经济-社长-我要担保 - 担保详情',
      component: danDetail
    },
    {
      path: '/danInput',
      name: '合作经济-社长-我要担保 - 为他担保',
      component: danInput
    },
    {
      path: '/danFang',
      name: '合作经济 - 社长 -  我要担保 - 担保详情 - 为他担保 - 其他资产担保 - 房产',
      component: danFang
    },
    {
      path: '/danChe',
      name: '合作经济 - 社长 -  我要担保 - 担保详情 - 为他担保 - 其他资产担保 - 车产',
      component: danChe
    },
    {
      path: '/danOther',
      name: '合作经济 - 社长 -  我要担保 - 担保详情 - 为他担保 - 其他资产担保 - 其他资产',
      component: danOther
    },
    {
      path: '/historyJie',
      name: '合作经济-社长-我要担保 - 历史借款',
      component: historyJie
    },
    {
      path: '/danjieDetail',
      name: '合作经济 - 社长 - 我要担保 ---历史借款 --- 借款详情',
      component: danjieDetail
    },
    {
      path: '/hezuoIndexState',
      name: '合作经济-站长',
      component: hezuoIndexState
    },
    {
      path: '/stateGoodsDetails',
      name: '合作经济-站长 - 商品详情',
      component: stateGoodsDetails
    },
    {
      path: '/indexYuan',
      name: '合作经济-团员',
      component: indexYuan
    },

    // 赏金任务
    {
      path: '/taskIndex',
      name: '任务首页',
      component: taskIndex
    }, {
      path: '/taskHall',
      name: '任务大厅',
      component: taskHall
    }, {
      path: '/addTask',
      name: '发布悬赏',
      component: addTask
    }, {
      path: '/addStep',
      name: '任务步骤',
      component: addStep
    }, {
      path: '/taskCenter',
      name: '任务中心',
      component: taskCenter
    }, {
      path: '/taskList',
      name: '任务列表',
      component: taskList
    }, {
      path: '/submitTask',
      name: '提交任务',
      component: submitTask
    }, 
    {
      path: '/submitTaskDetail',
      name: '提交详情',
      component: submitTaskDetail
    },{
      path: '/taskDetail',
      name: '任务详情',
      component: taskDetail
    }, {
      path: '/verifyTaskList',
      name: '审核发布',
      component: verifyTaskList
    }, {
      path: '/taskDetailByVerify',
      name: '审核发布详情',
      component: taskDetailByVerify
    }, {
      path: '/manageTask',
      name: '发布管理',
      component: manageTask
    }, {
      path: '/followList',
      name: '关注列表',
      component: followList
    }, {
      path: '/helpList',
      name: '帮助中心',
      component: helpList
    }, {
      path: '/articleDetail',
      name: '文章详情',
      component: articleDetail
    }, {
      path: '/withdraw',
      name: '立即提现',
      component: withdraw
    }, {
      path: '/billList',
      name: '账单明细',
      component: billList
    }, {
      path: '/taskPay',
      name: '任务支付',
      component: taskPay
    },
    {
      path: '/editTask',
      name: '编辑任务信息',
      component: editTask
    }, {
      path: '/editStep',
      name: '编辑任务步骤',
      component: editStep
    }, {
      path: '/myComment',
      name: '我的评价',
      component: myComment
    }, {
      path: '/billDetail',
      name: '账单详情',
      component: billDetail
    },
    {
      path: '/depositBillList',
      name: '押金明细',
      component: depositBillList
    },
    {
			path: '/chooseTaskArea',
			name: '任务专区',
			component: chooseTaskArea
		},
    {
			path: '/mutualCircle',
			name: '互助圈子',
			component: mutualCircle,
			meta: {
				keepAlive: true,
				scrollPosition: {
					x: 0,
					y: 0
				}
			}
		},{
			path: '/addArticle',
			name: '我要发圈',
			component: addArticle,
			meta: {
				keepAlive: true
			}
		},{
			path: '/mutualDetail',
			name: '文章详情',
			component: mutualDetail,
			meta: {
				keepAlive: true,
				scrollPosition: {
					x: 0,
					y: 0
				}
			}
		},{
			path: '/likeList',
			name: '我的点赞',
			component: likeList,
			meta: {
				keepAlive: true,
				scrollPosition: {
					x: 0,
					y: 0
				}
			}
		},{
			path: '/commentList',
			name: '我的评论',
			component: commentList,
			meta: {
				keepAlive: true,
				scrollPosition: {
					x: 0,
					y: 0
				}
			}
		},{
			path: '/mutualUcenter',
			name: '用户中心',
			component: mutualUcenter,
			meta: {
				keepAlive: true,
				scrollPosition: {
					x: 0,
					y: 0
				}
			}
		},

    // 评分测评
    {
      path: '/creditScore',
      name: '信用评分',
      component: creditScore
    },
    {
      path: '/userCepings',
      name: '信用评分 - 用户测评',
      component: userCepings
    },
    {
      path: '/eachOthers',
      name: '团体互评 ',
      component: eachOthers
    },
    {
      path: '/eachFlows',
      name: '互评打分流程',
      component: eachFlows
    },
    {
      path: '/scoringRecord',
      name: '评分记录',
      component: scoringRecord
    },


// 商城
		{
			path: '/nongziShop',
			name: '农资商城',
			component: nongziShop
		},
		{
			path: '/shopIndex',
			name: '商城首页',
			component: shopIndex
		},
		{
			path: '/allCate',
			name: '全部分类',
			component: allCate
		},
		{
			path: '/personal',
			name: '个人中心',
			component: personal
		},
		{
			path: '/orderMy',
			name: '我的订单',
			component: orderMy
		},
		{
			path: '/orderDetails',
			name: '订单详情',
			component: orderDetails
		},
		{
			path: '/collectMy',
			name: '我的收藏',
			component: collectMy
		},
		{
			path: '/openVip',
			name: '我的积分',
			component: openVip
		},
		{
			path: '/collectAddress',
			name: '地址管理',
			component: collectAddress
		},
		{
			path: '/addEditAddress',
			name: '添加/编辑地址',
			component: addEditAddress
		},
		{
			path: '/speedBuy',
			name: '极速购买',
			component: speedBuy
		},
		{
			path: '/goodsDetails',
			name: '商品详情',
			component: goodsDetails
		},
		{
			path: '/confirmOrder',
			name: '确定订单',
			component: confirmOrder
		},
		{
			path: '/shopPay',
			name: '支付订单',
			component: shopPay
		},
		{
			path: '/shoppingCart',
			name: '购物车',
			component: shoppingCart
		},
		{
			path: '/lookupGoods',
			name: '查找商品',
			component: lookupGoods
		},
		{
			path: '/baopinShop',
			name: '今日爆品',
			component: baopinShop
		},
		{
			path: '/youzhiShop',
			name: '优质',
			component: youzhiShop
		},
		{
			path: '/fenxiaoShop',
			name: '分销商城',
			component: fenxiaoShop
		},
		{
	      path: '/gxShop',
	      name: '供销商城',
	      component: gxShop
	    },
	],scrollBehavior (to) { // 记忆滚动距离 - 刘家军引入
		const { scrollPosition = {} } = to.meta
		return scrollPosition
	}
})
