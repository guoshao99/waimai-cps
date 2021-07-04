// /pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var item = JSON.parse(options.itemJson);
      this.setData({
        title:options.title,
        item:item
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
    return {
      title: '距离不是问题，想吃才是真爱',
      path: '/pages/detail/detail',
      imageUrl: this.shareImage
    }
  },

  /**
   * 去领券
   */
  goToGetCoupon: function () {
    wx.switchTab({
      url: '../takeaway/takeaway'
    })
  },

  openMap: function () {
    console.log(this.data.item.location.lat, this.data.item.location.lng);
    wx.openLocation({
      latitude: this.data.item.location.lat,
      longitude: this.data.item.location.lng,
      scale: 18,
      name: this.data.item.title,
      address: this.data.item.address
    })
  }
})