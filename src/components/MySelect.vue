<template>
  <select v-model="selectedValue" @change="changeOption">
    <option value="">All</option>
    <option value="alive">Alive</option>
    <option value="dead">Dead</option>
    <option value="unknown">Unknown</option>
  </select>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'my-select',
  setup(props, { emit }) {
    const selectedValue = ref('');

    const changeOption = (event: Event) => {
      emit('update:selectedValue', (event.target as HTMLSelectElement).value);
    };

    return {
      selectedValue,
      changeOption
    };
  }
});
</script>

<style scoped>

</style>
