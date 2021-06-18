<template>
  <loading :active="isLoading"></loading>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-4 col-lg-3 mb-3" v-for="item in products" :key="item.id">
        <div class="d-flex justify-content-center">
          <div class="card" style="width: 18rem;">
            <div class="image" @click="goToProduct(item.id)">
              <img :src="item.imageUrl" class="card-img-top img-fluid" alt="product_img" style="background-position: center center; object-fit: cover;">
              <div class="overlay">
                <div class="text">查看更多</div>
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-title">{{ item.title }}</h3>
              <del class="h6">原價： {{ item.origin_price }} 元</del>
              <p class="text-danger h4">優惠價： {{ item.price }} 元</p>
              <button type="button" class="btn btn-primary" @click="addCart(item.id)">加入購物車</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <pagination :pagination="pagination" @get-products="getProducts"></pagination>
</template>

<style>
.card-img-top{
  height: 200px;
}
.image{
  position: relative;
}

.image:hover .overlay{
  opacity: 0.5;
  cursor: pointer;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: .5s ease-in;
  background-color: #000;
}

.text {
  color: white;
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>

<script>
import swal from 'sweetalert'
import pagination from '../components/Pagination.vue'
import bus from '../components/bus'

export default {
  data () {
    return {
      products: [],
      pagination: {},
      isLoading: false
    }
  },
  components: { pagination },
  methods: {
    getProducts (page = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`
      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products
            this.pagination = res.data.pagination
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
    },
    goToProduct (id) {
      this.$router.push(`/products/${id}`)
    },
    addCart (id) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.post(url, { data: { product_id: id, qty: 1 } })
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
    this.getProducts()
  }
}
</script>
