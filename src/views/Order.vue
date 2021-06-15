<template>
  <div class="container py-5">
    <ol class="form-row text-center pl-0 d-flex" style="list-style: none;">
      <li class="col-12 col-md-4">
        <div class="alert alert-dark rounded-pill mb-0 " role="alert">
            1.輸入訂購資料
        </div>
      </li>
      <li class="col-12 col-md-4">
        <div class="alert alert-info rounded-pill mb-0 " role="alert">
          2.訂購人資訊填寫
        </div>
      </li>
      <li class="col-12 col-md-4">
        <div class="alert alert-light rounded-pill mb-0" role="alert">
            3.完成
        </div>
      </li>
    </ol>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h1 class="text-center text-secondary my-3 h2">訂購人資訊填寫</h1>
        <Form v-slot="{ errors }" @submit="onSubmit">
          <div class="mb-3">
            <label for="email">Email<span class="text-danger ms-2">(必填)</span></label>
            <Field type="email" class="form-control" name="email" :class="{ 'is-invalid': errors['email'] }" rules="email|required" placeholder="請輸入 Email" v-model="user.email" id="email"></Field>
            <error-message name="email" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
            <label for="name">姓名<span class="text-danger ms-2">(必填)</span></label>
            <Field type="text" class="form-control" name="姓名" :class="{ 'is-invalid': errors['姓名'] }" rules="required" placeholder="請輸入姓名" v-model="user.name" id="name"></Field>
            <error-message name="姓名" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
            <label for="tel">電話<span class="text-danger ms-2">(必填)</span></label>
            <Field type="text" class="form-control" name="電話" :class="{ 'is-invalid': errors['電話'] }" rules="required" placeholder="請輸入電話" v-model="user.tel" id="tel"></Field>
            <error-message name="電話" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
            <label for="address">地址<span class="text-danger ms-2">(必填)</span></label>
            <Field type="text" class="form-control" name="地址" :class="{ 'is-invalid': errors['地址'] }" rules="required" placeholder="請輸入地址" v-model="user.address" id="address"></Field>
            <error-message name="地址" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
            <label for="message">留言</label>
            <Field v-model="message" type="text" name="留言" id="message" v-slot="{ field }">
              <textarea v-bind="field" rows="3" placeholder="歡迎留言給我們！" class="form-control" id="message"></textarea>
            </Field>
            <error-message name="留言" class="invalid-feedback"></error-message>
          </div>
          <div class="d-flex justify-content-end">
            <button class="btn btn-primary btn-lg" type="submit">建立訂單</button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {},
      message: ''
    }
  },
  methods: {
    onSubmit (values, { resetForm }) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      this.$http.post(url, { data: { user: this.user, message: this.message } })
        .then((res) => {
          if (res.data.success) {
            this.$router.push('/orderSubmit')
          }
        })
      resetForm()
    }
  }
}
</script>
