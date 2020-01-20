var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leaveRecord: [],
    id: app.globalData.id,
    modelInnerHtml: '目前尚无记录！',
    modalHidden: true,
    str:"   ",
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
    var that = this
    console.log(app.globalData.id)
    wx.request({
      url: app.globalData.url + '/leave/sdeal_record',
      data: {
        sid: app.globalData.id
      },
      success: function (res) {
        console.log(res)
        if (res == null) {
          that.setData({
            modelInnerHtml: '目前尚无记录！',
            modalHidden: false
          })
          wx.navigateTo({
            url: '../student/student',
          })
        }
        that.setData({
          leaveRecord: res.data
        })
      },
      fail: function (res) {
        that.setData({
          modelInnerHtml: '获取失败！！',
          modalHidden: false
        })
        wx.navigateTo({
          url: '../student/student',
        })
      }
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