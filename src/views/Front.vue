<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
    <div class="container">
      <router-link to="/" class="navbar-brand">Navbar</router-link>
      <button class="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/products" class="nav-link">所有商品</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">後台登入</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products/carts" class="nav-link">
              <div class="carts">
                <font-awesome-icon :icon="['fas', 'shopping-cart']" class="cartIcon"/>
                <span class="carts">{{ cartNumber || originNumber }}</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container pt-5">
    <loading :active="isLoading"></loading>
    <router-view></router-view>
  </div>
</template>

<style>
.carts{
  position: relative;
}

.carts span{
  display: block;
  position: absolute;
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: red;
  text-align: center;
  color: #fff;
}
</style>

<script>
import bus from '../components/bus'

export default {
  data () {
    return {
      cartNumber: '',
      originNumber: '',
      isLoading: false
    }
  },
  methods: {
    getCart () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            this.originNumber = res.data.data.carts.length
            this.isLoading = false
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  created () {
    this.getCart()
    bus.on('cart-number', (data) => {
      this.cartNumber = data
      this.originNumber = data
    })
  }
}
</script>
