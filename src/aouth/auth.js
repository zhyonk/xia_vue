
import net from '../utils/net'

const SERVER_URL = 'http://9a03f75c.ngrok.io/xia-wechat'

const LOGIN_URL = SERVER_URL + '/user/login'

export default {
  data: {
    authenticated: false
  },
  login (context, info) {
    net.postJson('/user/login', info, function (token) {
      sessionStorage.setItem('token', token)
      this.$router.push('home')
    })
    context.$http.post(LOGIN_URL, info).then(function (data) {
      console.log(data)
      var re = data.body
      console.log(re.ok)
      if (re.ok) {
        sessionStorage.setItem('token', re.data)
        this.authenticated = true
        this.$router.push('home')
      } else {
        console.log(re)
      }
    }, function (err) {
      console.log(err + ',' + err.body.message)
      context.error = err.body.message
    })
  },
  getAuthHeader () {
    return {
      'Authorization': 'Bearer ' + sessionStorage.getItem('token')
    }
  },
  checkAuth () {
    var token = sessionStorage.getItem('token')
    if (token) {
      this.authenticated = true
      return true
    } else {
      this.authenticated = false
      return false
    }
  }
}
