// pages/teacherApproveLeave/teacherApproveLeave.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leaveRecord:[],
    id:app.globalData.id,
    str:'未批准',
    modelInnerHtml: '目前尚无记录！',
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
    var that=this
    console.log(app.globalData.id)
    wx.request({
      url: app.globalData.url+'/leave/receive',
      data:{
        tid: app.globalData.id
      },
      success: function (res) {
        console.log(res)
        if(res==null){
          that.setData({
            modelInnerHtml: '目前尚无记录！',
            modalHidden: false
          })
          wx.navigateTo({
            url: '../teacher/teacher',
          })
        }
        that.setData({
          leaveRecord:res.data
        })
      },
      fail:function(res){
        that.setData({
          modelInnerHtml: '获取失败！！',
          modalHidden: false
        })
        wx.navigateTo({
          url: '../teacher/teacher',
        })
      }
    })
  },

  Ratify:function (e) {
    var that=this
    var flag=e.currentTarget.dataset.id
    console.log(this.data.leaveRecord[flag].item)
    if(this.data.leaveRecord[flag].status=="已批准"){
      this.setData({
        modelInnerHtml: '你已批准过了！',
        modalHidden: false
      }) 
    }else{
      wx.request({
        url: app.globalData.url +'/leave/deal',
        data:{
          id:that.data.leaveRecord[flag].id
        },
        success:function(res){
          that.setData({
            modelInnerHtml: '已批准！',
            modalHidden: false
          }) 
          that.onLoad()
        },
        fail:function(){
          that.setData({
            modelInnerHtml: '请求失败！',
            modalHidden: false
          }) 
          that.onLoad()
        }
      })
    }
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