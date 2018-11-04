/**
 * 本工具类与网络相关
 */
// import qs from 'qs'

export default {
    /**
     * 检查token是否合法，需要服务器认证
     */
  isTokenValid () {
    var token = sessionStorage.getItem('token')
    if (token) {
      this.get('/oauth/checkToken?token=' + token, function () {
        return true
      })
    } else {
      console.log('token不存在')
      this.$router.push('login')
    }
  },
  formatDate (obj) {
    var date = new Date(obj)
    var y = 1900 + date.getYear()
    var m = '0' + (date.getMonth() + 1)
    var d = '0' + date.getDate()
    return y + '-' + m.substring(m.length - 2, m.length) + '-' + d.substring(d.length - 2, d.length)
  }
}
