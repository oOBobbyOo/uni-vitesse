import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'

export function useWeixinShare() {
  return {
    /** 激活“分享给好友” */
    onShareAppMessage: () =>
      onShareAppMessage((options: Page.ShareAppMessageOption): Page.CustomShareContent => {
        console.log('options:', options)
        return {
          title: '自定义分享标题',
          path: '/pages/index/index?id=xxx',
          imageUrl: '',
        }
      }),
    /** 激活“分享到朋友圈”， 注意：需要先激活“分享给好友” */
    onShareTimeline: () =>
      onShareTimeline((): Page.ShareTimelineContent => {
        return {
          title: '自定义分享标题',
          query: 'a=1&b=2',
          imageUrl: '',
        }
      }),
  }
}
