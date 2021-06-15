<template>
  <div class="container my-2">
    <nav>
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: !pages.has_pre }">
          <button class="page-link" @click="$emit('getProducts', pages.current_page-1)">上一頁</button>
        </li>
        <li class="page-item" v-for="page in pages.total_pages" :key="page" :class="{ active: page === pages.current_page }"><button class="page-link" @click="$emit('getProducts', page)">{{ page }}</button></li>
        <li class="page-item" :class="{ disabled: !pages.has_next }">
          <button class="page-link" @click="$emit('getProducts', pages.current_page+1)">下一頁</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['pagination'],
  data () {
    return {
      pages: {}
    }
  },
  watch: {
    pagination () {
      this.pages = this.pagination
    }
  }
}
</script>
