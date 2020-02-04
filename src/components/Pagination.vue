<template>
  <div>
    <!-- pagination -->
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: !paginationData.has_pre }">
          <!-- 點擊時將目前分頁 pagination.current_page -1 代入 getProducts 達成切換分頁 -->
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click.prevent="changePage(pagination.current_page - 1)"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          class="page-item"
          v-for="page in paginationData.total_pages"
          :key="page"
          :class="{ active: paginationData.current_page === page }"
        >
          <!-- 點擊時看是哪一頁就帶入 getProducts 達成切換分頁 -->
          <a class="page-link" href="#" @click.prevent="changePage(page)">
            {{ page }}
          </a>
        </li>
        <li class="page-item" :class="{ disabled: !paginationData.has_next }">
          <!-- 點擊時將目前分頁 pagination.current_page +1 代入 getProducts 達成切換分頁 -->
          <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click.prevent="changePage(paginationData.current_page + 1)"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    paginationData: {
      type: Object,
      default: {}
    }
  },
  methods: {
    changePage(page) {
      this.$emit("changePage", page);
    }
  }
};
</script>
