<template>
  <loading :active="isLoading"></loading>
  <div class="container my-4">
    <h1 class="text-center">商品管理</h1>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <table class="table">
          <thead>
            <tr>
              <th scope="col" width="20%">產品名稱</th>
              <th scope="col">產品種類</th>
              <th scope="col">產品原價</th>
              <th scope="col">產品售價</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in productList" :key="product.id">
              <td>{{ product.title }}</td>
              <td>{{ product.category }}</td>
              <td>{{ product.origin_price }}</td>
              <td>{{ product.price }}</td>
              <td>
                <button type="button" class="btn btn-primary me-1">編輯</button>
                <button type="button" class="btn btn-outline-danger">刪除</button>
              </td>
            </tr>
          </tbody>
        </table>
        <pagination :pagination="pagination" @get-products="getProduct"></pagination>
      </div>
    </div>
  </div>
</template>

<script>
import pagination from '../../components/Pagination.vue'

export default {
  data () {
    return {
      productList: [],
      pagination: [],
      isLoading: false
    }
  },
  components: {
    pagination
  },
  methods: {
    getProduct (page = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`
      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false
            this.productList = res.data.products
            this.pagination = res.data.pagination
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>
