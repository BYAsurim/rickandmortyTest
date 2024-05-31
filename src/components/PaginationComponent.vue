<template>
  <div class="container">
    <button @click="decrement" :disabled="isFirstPage">prev</button>
    <div
        v-for="currentPage in paginatedPages"
        :key="currentPage"
        class="page"
        :class="{ currentPage: page === currentPage }"
        @click="handleChangePage(currentPage)"
    >
      {{ currentPage }}
    </div>
    <button @click="increment" :disabled="isLastPage">next</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, PropType, watch } from 'vue';

export default defineComponent({
  name: 'MyPagination',
  props: {
    totalPage: {
      type: Number,
      required: true
    },
    page: {
      type: Number,
      required: true
    },
    changePage: {
      type: Function as PropType<(page: number) => void>,
      required: true
    }
  },
  setup(props) {
    const currentPage = ref(props.page);

    const isFirstPage = computed(() => currentPage.value === 1);
    const isLastPage = computed(() => currentPage.value === props.totalPage);

    const paginatedPages = computed(() => {
      const pages = [];
      const delta = 2; // Number of pages to show before and after the current page
      const left = currentPage.value - delta;
      const right = currentPage.value + delta;

      for (let i = 1; i <= props.totalPage; i++) {
        if (i === 1 || i === props.totalPage || (i >= left && i <= right)) {
          pages.push(i);
        } else if (i < left && pages[pages.length - 1] !== '...') {
          pages.push('...');
        } else if (i > right && pages[pages.length - 1] !== '...') {
          pages.push('...');
        }
      }

      return pages;
    });

    const handleChangePage = (page: number | string) => {
      if (typeof page === 'number') {
        currentPage.value = page;
        props.changePage(page);
      }
    };

    const increment = () => {
      if (currentPage.value < props.totalPage) {
        currentPage.value++;
        props.changePage(currentPage.value);
      }
    };

    const decrement = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
        props.changePage(currentPage.value);
      }
    };

    // Watch for prop changes
    watch(() => props.page, (newPage) => {
      currentPage.value = newPage;
    });

    return {
      currentPage,
      isFirstPage,
      isLastPage,
      paginatedPages,
      handleChangePage,
      increment,
      decrement
    };
  }
});
</script>

<style scoped>
.container{
  display: flex;
}
.page {
  border: 1px solid beige;
  padding: 5px;
  cursor: pointer;
  margin-left: 5px;
}

.currentPage {
  background-color: cadetblue;
}
</style>
