
Page({
  data: {
    userInfo:[],
    balance:0
  },

  //添加一笔新账单
  bindNewTap: function () {
    wx.navigateTo({
      url: '../new/new'
    })
  },

  //理财产品推荐
  bindNewTapTwo: function () {
    wx.navigateTo({
      url: '../finance/finance'
    })
  },

  onLoad: function () {
    var that = this

    //调用应用实例的方法获取全局数据
    var app = getApp()
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
    // })
    console.log(that.data);
    //获取账户余额
    var userId = "张靖9898";
    // console.log(Requrl);
    wx.request({
      url: "http://127.0.0.1:3000/balance",
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        "wechatname": userId
      },

      success: function (res) {
        console.log(res.data);
        if (res.statusCode == '200') {
          that.setData({
             balance: res.data.balance
          })
        }
        else {
          wx.showToast({
            title: '查询失败',
            image: "../../images/icon-no.png",
            mask: true,
            duration: 1000
          })
        }
      }
    })
  },

  onHide:function(){
    var that=this;
    var userId = "张靖9898";
    // console.log(Requrl);
    wx.request({
      url: "http://127.0.0.1:3000/balance",
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        "wechatname": userId
      },

      success: function (res) {
        console.log(res.data);
        if (res.statusCode == '200') {
          that.setData({
            balance: res.data.balance
          })
        }
        else {
          wx.showToast({
            title: '查询失败',
            image: "../../images/icon-no.png",
            mask: true,
            duration: 1000
          })
        }
      }
    })
  },
})