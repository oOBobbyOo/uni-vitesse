export default {
  onLoad() {
    // #ifdef MP-WEIXIN
    uni.showShareMenu({
      withShareTicket: true, // 是否使用带 shareTicket 的转发
      menus: ['shareAppMessage', 'shareTimeline'], // 需要显示的菜单列表，例如分享到朋友圈等
    })
    // #endif
  },
}
