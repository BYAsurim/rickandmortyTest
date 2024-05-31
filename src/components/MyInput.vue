<template>
  <input v-model="namePerson" @change="changeValue"/>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'my-input',
  setup(props, { emit }) {
    const namePerson = ref('');

    const changeValue = (event: Event) => {
      emit('update:namePerson', (event.target as HTMLInputElement).value);
    };

    return {
      namePerson,
      changeValue
    };
  }
});
</script>

<style scoped>

</style>
