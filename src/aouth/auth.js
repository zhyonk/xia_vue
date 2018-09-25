
import net from '../utils/net'

const SERVER_URL = 'http://localhost:8083/xia-wechat/'
const LOGIN_URL = SERVER_URL + '/user/login'

export default {
  data: {
    authenticated: false
  },
  login (context, info) {
    net.postJson('/user/login', info, function (token) {
      localStorage.setItem('token', token)
      this.$router.push('home')
    })
    context.$http.post(LOGIN_URL, info).then(function (data) {
      console.log(data)
      var re = data.body
      console.log(re.ok)
      if (re.ok) {
        localStorage.setItem('token', re.data)
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
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  },
  checkAuth () {
    var token = localStorage.getItem('token')
    if (token) {
      this.authenticated = true
      return true
    } else {
      this.authenticated = false
      return false
    }
  }
}
