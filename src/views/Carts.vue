<template>
  <div class="container py-5">
    <ol class="form-row text-center pl-0 d-flex" style="list-style: none;">
      <li class="col-12 col-md-4">
        <div class="alert alert-info rounded-pill mb-0 " role="alert">
            1.輸入訂購資料
        </div>
      </li>
      <li class="col-12 col-md-4">
        <div class="alert alert-light rounded-pill mb-0 " role="alert">
          2.訂購人資訊填寫
        </div>
      </li>
      <li class="col-12 col-md-4">
        <div class="alert alert-light rounded-pill mb-0" role="alert">
            3.完成
        </div>
      </li>
    </ol>
  </div>
  <h1 class="text-center text-secondary my-3">購物車列表</h1>
  <button type="button" class="btn btn-danger mb-3" @click="deleteAllCart" v-if="carts.carts && carts.carts.length >= 2">刪除所有商品</button>
  <loading :active="isLoading"></loading>
  <table class="table">
    <thead>
      <tr class="text-center">
        <th scope="col" width="10%"></th>
        <th scope="col" width="20%">商品圖片</th>
        <th scope="col">商品名稱</th>
        <th scope="col" width="15%">商品數量</th>
        <th scope="col">商品價格</th>
      </tr>
    </thead>
    <tbody v-if="carts.carts && carts.carts.length ===0">
      <tr>
        <td colspan="5" class="text-center py-5">購物車是空的唷！</td>
      </tr>
    </tbody>
    <template v-else>
      <tbody>
        <tr v-for="cart in carts.carts" :key="cart.product_id" class="align-middle">
          <td class="text-center"><button type="button" class="btn btn-outline-danger" @click="deleteCart(cart.id)">刪除</button></td>
          <td class="text-center"><img :src="cart.product.imageUrl" alt="pic" class="img-fiuld" style="background-position: center center; object-fit: cover;" width="200" height="100"></td>
          <td>{{ cart.product.title }}</td>
          <td>
            <div class="input-group mb-3">
              <button class="btn btn-outline-secondary shadow-none" type="button" :disabled="cart.qty <= 1" @click="updateCart(cart, 'minus')"> - </button>
              <input type="number" min="1" class="form-control" disabled v-model="cart.qty">
              <button class="btn btn-outline-secondary shadow-none" type="button" @click="updateCart(cart, 'plus')"> + </button>
            </div>
          </td>
          <td class="text-end">{{ cart.final_total }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr class="h4">
          <td colspan="4" class="text-end">總金額：</td>
          <td class="text-end">{{ carts.final_total}}</td>
        </tr>
      </tfoot>
    </template>
  </table>
  <div class="d-flex justify-content-end">
    <button type="button" class="btn btn-primary btn-lg" @click="goToOrder">確認訂購</button>
  </div>
</template>

<script>
import swal from 'sweetalert'

export default {
  data () {
    return {
      carts: [],
      isLoading: false
    }
  },
  methods: {
    getCart () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.carts = res.data.data
          this.isLoading = false
        }
      })
    },
    deleteCart (id) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.$http.delete(url).then((res) => {
        if (res.data.success) {
          this.getCart()
          this.isLoading = false
          swal({
            text: '商品刪除囉~',
            buttons: false,
            timer: 1000
          })
        }
      })
    },
    deleteAllCart () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`
      this.$http.delete(url).then((res) => {
        if (res.data.success) {
          this.getCart()
          this.isLoading = false
          swal({
            text: '購物車清空囉！~',
            buttons: false,
            timer: 1000
          })
          setTimeout(() => {
            this.$router.push('/products')
          }, 1000)
        }
      })
    },
    updateCart (cart, value) {
      if (value === 'minus') {
        cart.qty -= 1
      } else if (value === 'plus') {
        cart.qty += 1
      }
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${cart.id}`
      this.$http.put(url, { data: { product_id: cart.id, qty: cart.qty } })
        .then((res) => {
          if (res.data.success) {
            this.getCart()
          }
        })
    },
    goToOrder () {
      if (this.carts.carts && this.carts.carts.length === 0) {
        swal({
          text: '購物車不能是空的唷！~',
          icon: 'error',
          buttons: false,
          timer: 2000
        })
        setTimeout(() => {
          this.$router.push('/products')
        }, 1000)
        return
      }
      this.$router.push('/orders')
    }
  },
  mounted () {
    this.getCart()
  }
}
</script>
