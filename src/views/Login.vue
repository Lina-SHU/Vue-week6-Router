<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-md-8">
        <h1 class="h2 mt-5 mb-3 text-center">後台管理登入</h1>
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="email" placeholder="Email" v-model="user.username">
          <label for="email">Email</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="password" placeholder="密碼" v-model="user.password">
          <label for="password">密碼</label>
        </div>
        <div class="d-flex justify-content-center">
          <button type="button" @click="login" class="btn btn-primary mt-3 btn-lg">登入</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {}
    }
  },
  methods: {
    login () {
      const url = `${process.env.VUE_APP_API}admin/signin`
      this.$http.post(url, this.user)
        .then((res) => {
          if (res.data.success) {
            const { token, expired } = res.data
            document.cookie = `hexToken=${token}; expires=${new Date(expired)}`
            this.$router.push('/admin')
          }
        })
    }
  }
}
</script>
