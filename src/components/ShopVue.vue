<template>

  <div>
    <div>shopVue</div>

  </div>
</template>


<script>
import { XButton, XInput, Group, Cell } from 'vux'

export default {
  components: {
    XButton,
    XInput,
    Group,
    Cell
  },
  data () {
    return {
      info: {
        username: '',
        password: ''
      },
      error: ''
    }
  },
  watch: {

  },
  methods: {
  }
}
</script>