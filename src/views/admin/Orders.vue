<template>
  <loading :active="isLoading"></loading>
  <div class="container my-4">
    <h1 class="text-center">訂單管理</h1>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">訂購人</th>
              <th scope="col">訂購人 Email</th>
              <th scope="col" width="20%">訂購日期</th>
              <th scope="col">是否付款</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orderList" :key="order.id">
              <td>{{ order.user.name }}</td>
              <td>{{ order.user.email }}</td>
              <td>{{ new Date(order.create_at * 1000).getFullYear() }}/{{ new Date(order.create_at * 1000).getMonth()+1 }}/{{ new Date(order.create_at * 1000).getDate() }}</td>
              <td>{{ order.is_paid ? '是':'否' }}</td>
              <td>
                <button type="button" class="btn btn-primary me-1">明細</button>
                <button type="button" class="btn btn-outline-danger" @click="deleteOrder">刪除</button>
              </td>
            </tr>
          </tbody>
        </table>
        <pagination :pagination="pagination" @get-products="getOrder"></pagination>
      </div>
    </div>
  </div>
</template>

<script>
import pagination from '../../components/Pagination.vue'
import swal from 'sweetalert'

export default {
  data () {
    return {
      orderList: [],
      pagination: [],
      isLoading: false
    }
  },
  components: {
    pagination
  },
  methods: {
    getOrder (page = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`
      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false
            this.orderList = res.data.orders
            this.pagination = res.data.pagination
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteOrder () {
      swal('確認刪除？', {
        buttons: ['取消', true]
      })
    }
  },
  mounted () {
    this.getOrder()
  }
}
</script>
