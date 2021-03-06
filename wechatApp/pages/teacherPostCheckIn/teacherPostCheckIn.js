var app = getApp()
var flag
Page({

  /**
   * 页面的初始数据
   */
  data: {
    College:'',
    signInRecord: [],
    id: app.globalData.id,
    modelInnerHtml: '已点名！',
    modalHidden: true,
  },

  // 弹窗消失
  modalChange: function () {
    this.setData({
      modalHidden: true
    })
    this.onLoad()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      College: app.globalData.College,
    })
    console.log(this.data.College)
    var that = this
    console.log(app.globalData.url + 'call/studentList')
    wx.request({
      url: app.globalData.url + 'call/studentList',
      data: {
        tCollege: this.data.College
      },
      success: function (res) {
        that.setData({
          signInRecord: res.data
        })
        console.log(that.data.signInRecord)
      },
      fail: function (res) {
        that.setData({
          modelInnerHtml: '获取失败！！',
          modalHidden: false
        })
        wx.navigateTo({
          url: '../teacher/teacher',
        })
      }
    })
    flag = new Array(this.data.signInRecord.length)
    for(var i=0;i<this.data.signInRecord.length;i++){
      flag[i]=false;
    }
  },

  signIn:function(e){
    flag[e.currentTarget.dataset.id]=true;
    this.setData({
      modalHidden: false
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})