<template>
  <loading :active="isLoading"></loading>
  <div class="container my-4">
    <h1 class="text-center">優惠券管理</h1>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <button class="btn btn-primary" type="button" @click="openModal('new')">新增優惠券</button>
        <table class="table">
          <thead>
            <tr>
              <th scope="col" width="20%">優惠券名稱</th>
              <th scope="col">優惠券折扣</th>
              <th scope="col" width="20%">到期日</th>
              <th scope="col">是否啟用</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="coupon in couponList" :key="coupon">
              <td>{{ coupon.title }}</td>
              <td>{{ coupon.percent }}</td>
              <td>{{ new Date(coupon.due_date *1000).getFullYear() }}/{{ new Date(coupon.due_date *1000).getMonth()+1 }}/{{ new Date(coupon.due_date *1000).getDate() }}</td>
              <td>{{ coupon.is_enabled ? '是':'否' }}</td>
              <td>
                <button type="button" class="btn btn-primary me-1" @click="openModal('edit', coupon)">編輯</button>
                <button type="button" class="btn btn-outline-danger" @click="deleteCoupon(coupon.id)">刪除</button>
              </td>
            </tr>
          </tbody>
        </table>
        <pagination :pagination="pagination" @get-products="getCoupon"></pagination>
        <modal ref="modal" :temp="temp" :is-new="isNew" @get-coupon="getCoupon"></modal>
      </div>
    </div>
  </div>
</template>

<script>
import pagination from '../../components/Pagination.vue'
import modal from '../../components/CouponModal.vue'
import swal from 'sweetalert'

export default {
  data () {
    return {
      couponList: [],
      pagination: [],
      isLoading: false,
      temp: {},
      isNew: ''
    }
  },
  components: {
    pagination,
    modal
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
    },
    deleteCoupon (id) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${id}`
      this.$http.delete(url)
        .then((res) => {
          console.log(res)
          if (res.data.success) {
            this.isLoading = false
            swal({
              text: '刪除成功',
              buttons: false,
              timer: 1000
            })
            this.getCoupon()
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    openModal (value, data) {
      if (value === 'new') {
        this.temp = {}
        this.isNew = value
        this.$refs.modal.openModal()
      } else if (value === 'edit') {
        this.temp = { ...data }
        this.isNew = value
        this.$refs.modal.openModal()
      }
    }
  },
  mounted () {
    this.getCoupon()
  }
}
</script>
