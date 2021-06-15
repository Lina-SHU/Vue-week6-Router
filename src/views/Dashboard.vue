<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link to="/admin/products" class="navbar-brand">後台管理</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/admin/products" class="nav-link">後台產品管理</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container">
    <router-view v-if="check"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      check: false
    }
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = `${token}`
    const url = `${process.env.VUE_APP_API}api/user/check`
    this.$http.post(url)
      .then((res) => {
        console.log(res)
        if (res.data.success) {
          this.check = true
        } else {
          this.$router.push('/login')
        }
      })
  }
}
</script>
