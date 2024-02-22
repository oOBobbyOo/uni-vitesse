// @see https://zh.uniapp.dcloud.io/api/plugins/login.html
export function useWeixinLogin() {
  // 获取js_code
  function getJsCode() {
    return new Promise((resolve, reject) => {
      uni.login({
        provider: 'weixin',
        success: (res) => {
          resolve(res.code)
        },
        fail: (err) => {
          reject(err)
        },
      })
    })
  }

  // 获取微信个人信息
  function getUserInfo() {
    return new Promise((resolve, reject) => {
      uni.getUserProfile({
        desc: '获取个人信息',
        success: (res) => {
          resolve(res.userInfo)
        },
        fail: (err) => {
          reject(err)
        },
      })
    })
  }

  return {
    getJsCode,
    getUserInfo,
  }
}
