<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-md-8">
        <h2 class="mt-5 mb-3 text-center">後台管理登入</h2>
        <Form v-slot="{ errors }" @submit="login">
          <div class="mb-3">
            <label for="email">Email</label>
            <Field type="email" class="form-control" name="email" :class="{ 'is-invalid': errors['email'] }" rules="email|required" placeholder="請輸入 Email" v-model="user.username" id="email"></Field>
            <error-message name="email" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
            <label for="password">密碼</label>
            <Field type="password" class="form-control" name="密碼" :class="{ 'is-invalid': errors['密碼'] }" rules="required" placeholder="請輸入密碼" v-model="user.password" id="password"></Field>
            <error-message name="密碼" class="invalid-feedback"></error-message>
          </div>
          <div class="d-flex justify-content-center">
            <button class="btn btn-primary btn-lg" type="submit">登入</button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert'

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
          } else {
            swal({
              text: '帳號密碼錯誤',
              icon: 'error',
              buttons: false,
              timer: 1000
            })
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
