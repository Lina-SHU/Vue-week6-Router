<template>
  <loading :active="isLoading"></loading>
  <div class="container my-4">
    <h1 class="text-center">優惠券管理</h1>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <table class="table">
          <thead>
            <tr>
              <th scope="col" width="20%">優惠券名稱</th>
              <th scope="col">優惠券折扣</th>
              <th scope="col">到期日</th>
              <th scope="col">是否啟用</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="coupon in couponList" :key="coupon">
              <td>{{ coupon.title }}</td>
              <td>{{ coupon.percent }}</td>
              <td>{{ new Date(coupon.due_date * 1000).getFullYear() }}/{{ new Date(order.due_date * 1000).getMonth()+1 }}/{{ new Date(order.due_date * 1000).getDate() }}</td>
              <td>{{ coupon.is_enabled ? '是':'否' }}</td>
              <td>
                <button type="button" class="btn btn-primary me-1">編輯</button>
                <button type="button" class="btn btn-outline-danger">刪除</button>
              </td>
            </tr>
          </tbody>
        </table>
        <pagination :pagination="pagination" @get-products="getCoupon"></pagination>
      </div>
    </div>
  </div>
</template>

<script>
import pagination from '../../components/Pagination.vue'

export default {
  data () {
    return {
      couponList: [],
      pagination: [],
      isLoading: false
    }
  },
  components: {
    pagination
  },
  methods: {
    getCoupon (page = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`
      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false
            this.couponList = res.data.coupons
            this.pagination = res.data.pagination
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getCoupon()
  }
}
</script>
