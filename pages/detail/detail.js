// pages/detail/detail.js
let datas = require('../../datas/list-data');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isCollected: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log('detail页面接收的数据：' , options);
        let index = options.id;
        let detailObj = datas.list_data[index];
        console.log(datas,index,detailObj)
        // 更新data中的数据
        this.setData({
            index, detailObj
        })
        // 读取本地缓存的是否收藏的数据
        wx.getStorage({
            key: 'isCollected',
            success: (event) => {
                console.log('页面初始化的时候获取的数据： ', event);
                let isCollected = event.data[index]? event.data[index]: false;
                // 更新data中isCollected的状态值
                this.setData({
                    isCollected
                })
            }
        })
    },
    handleShare(){
        wx.showActionSheet({
            itemList: [
                '分享到朋友圈', '分享给微信好友', '分享到QQ好友'
            ]
        })
    },
    handleCollection(){
        // 处理收藏文章的方法
        // 修改 isCollected的状态值
        let isCollected = !this.data.isCollected;
        this.setData({
            isCollected
        });
        // 设置对应的提示框
        let title = isCollected? '收藏成功' : '取消收藏';
        wx.showToast({
            title,
            icon: 'success'
        });

        // 缓存当前的状态值到本地
        // 准备工作： 集成一个对象
        // let obj = {'0': true, '1': false};

        let obj = wx.getStorageSync('isCollected');
        // 判断本地是否有缓存
        console.log(obj);
        if(!obj){
            obj = {};
        }
        let index = this.data.index;
        obj[index] = isCollected;


        wx.setStorageSync('isCollected', obj);
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