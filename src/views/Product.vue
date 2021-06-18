<template>
  <div class="container">
    <nav aria-label="breadcrumb" class="mt-5">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
        <li class="breadcrumb-item"><router-link to="/products">產品列表</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
      </ol>
    </nav>
    <div class="row">
      <div class="col-md-6">
        <div class="productImg text-center">
          <img :src="product.imageUrl" alt="pic" class="img-fluid" style="background-position: center center; object-fit: cover;">
        </div>
      </div>
      <div class="col-md-6">
        <div class="d-flex flex-column justify-content-between">
          <h1>{{ product.title }}</h1>
          <del class="h5">原價： {{ product.origin_price }} 元</del>
          <p class="text-danger h3">優惠價： {{ product.price }} 元</p>
          <div class="row">
            <div class="col-md-6">
              <div class="input-group mb-3">
                <button class="btn btn-outline-secondary" type="button"  @click="minus" :disabled="qty <= 1"> - </button>
                <input type="number" min="1" class="form-control" placeholder="" disabled v-model.number="qty">
                <button class="btn btn-outline-secondary" type="button" @click="add"> + </button>
              </div>
              <button class="btn btn-primary" type="button" @click="addCart">加入購物車</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.productImg{
  height: 300px;
  overflow: hidden;
}
</style>

<script>
import swal from 'sweetalert'
import bus from '../components/bus'

export default {
  data () {
    return {
      product: {},
      qty: 1
    }
  },
  methods: {
    getProduct () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.$route.params.id}`
      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            this.product = res.data.product
          } else if (res.data.message === '找不到產品') {
            this.$router.push('/products')
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    add () {
      this.qty += 1
    },
    minus () {
      if (this.qty > 1) {
        this.qty -= 1
      }
    },
    addCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.post(url, { data: { product_id: this.product.id, qty: this.qty } })
        .then((res) => {
          if (res.data.success) {
            swal({
              text: '已加入購物車',
              icon: 'success',
              buttons: false,
              timer: 1000
            })
            return this.$http.get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`)
          }
        })
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false
            bus.emit('cart-number', res.data.data.carts.length)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  created () {
    this.getProduct()
  }
}
</script>
