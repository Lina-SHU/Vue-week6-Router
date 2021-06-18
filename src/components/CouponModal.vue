<template>
  <div class="modal fade" id="modal" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal" v-if="isNew === 'new'">新增優惠券</h5>
          <h5 class="modal-title" id="modal" v-else>編輯優惠券</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="title">優惠券名稱<span class="text-danger ms-2">(必填)</span></label>
              <input type="text" class="form-control" name="優惠券名稱" placeholder="請輸入優惠券名稱" v-model="coupon.title" id="title">
            </div>
            <div class="mb-3">
              <label for="percent">折扣數 % <span class="text-danger ms-2">(必填)</span></label>
              <input type="number" class="form-control" name="折扣數" placeholder="請輸入折扣數" v-model.number="coupon.percent" id="address">
            </div>
            <div class="mb-3">
              <label for="code">優惠券代碼<span class="text-danger ms-2">(必填)</span></label>
              <input type="text" class="form-control" name="代碼" placeholder="請輸入代碼" v-model="coupon.code" id="code">
            </div>
            <div class="mb-3">
              <label for="code">到期日<span class="text-danger ms-2">(必填)</span></label>
              <input type="date" class="form-control" name="到期日" placeholder="請輸入到期日" v-model="coupon.due_date" id="code">
            </div>
            <div class="mb-3">
              <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="enabled" v-model="coupon['is_enabled']" :true-value="1" :false-value="0">
                  <label class="form-check-label" for="enabled">
                    是否啟用
                  </label>
                </div>
            </div>
            <div class="d-flex justify-content-end">
              <button type="button" class="btn btn-secondary me-1" data-bs-dismiss="modal">取消</button>
              <button class="btn btn-primary btn-lg" type="button" @click.prevent="onSubmit">編輯優惠券</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
import swal from 'sweetalert'

export default {
  data () {
    return {
      modal: '',
      coupon: {},
      isLoading: false
    }
  },
  props: ['temp', 'isNew'],
  mounted () {
    this.modal = new Modal(this.$refs.modal, {
      backdrop: 'static'
    })
  },
  methods: {
    openModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    },
    onSubmit () {
      if (!this.coupon.title || !this.coupon.percent || !this.coupon.due_date || !this.coupon.code) {
        swal({
          text: '欄位都需要填寫唷！',
          icon: 'error',
          buttons: false,
          timer: 2000
        })
        return
      }
      this.coupon.due_date = Math.floor(+new Date(this.coupon.due_date) / 1000)
      this.isLoading = true
      if (this.isNew === 'new') {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`
        this.$http.post(url, { data: this.coupon })
          .then((res) => {
            console.log(res)
            if (res.data.success) {
              this.$emit('getCoupon')
              swal({
                text: '新增完成囉！',
                icon: 'success',
                buttons: false,
                timer: 1000
              })
              this.hideModal()
            } else {
              swal({
                text: '新增失敗!',
                icon: 'error',
                buttons: false,
                timer: 1000
              })
              this.hideModal()
            }
            this.coupon = {}
          })
          .catch((err) => {
            console.log(err)
          })
      } else if (this.isNew === 'edit') {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.coupon.id}`
        this.$http.put(url, { data: this.coupon })
          .then((res) => {
            console.log(res)
            if (res.data.success) {
              this.$emit('getCoupon')
              swal({
                text: '編輯完成囉！',
                icon: 'success',
                buttons: false,
                timer: 1000
              })
              this.hideModal()
            } else {
              swal({
                text: '編輯失敗!',
                icon: 'error',
                buttons: false,
                timer: 1000
              })
              this.hideModal()
            }
            this.coupon = {}
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  },
  watch: {
    temp () {
      this.coupon = this.temp
      this.coupon.due_date = `${new Date(this.coupon.due_date * 1000).getFullYear()}-${new Date(this.coupon.due_date * 1000).getMonth() + 1 < 10 ? '0' + (new Date(this.coupon.due_date * 1000).getMonth() + 1) : (new Date(this.coupon.due_date * 1000).getMonth() + 1)}-${new Date(this.coupon.due_date * 1000).getDate() < 10 ? '0' + new Date(this.coupon.due_date * 1000).getDate() : new Date(this.coupon.due_date * 1000).getDate()}`
    }
  }
}
</script>
