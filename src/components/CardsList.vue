<template>
  <div class="container">
    <card-component
        v-for="card in cards"
        :key="card.id"
        :card="card"
        :episodes="episodes"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import CardComponent from './CardComponent.vue';
import {AllEpisodesType, CardsResultsType} from '@/api/types';

export default defineComponent({
  components: { CardComponent },
  props: {
    cards: {
      type: Array as PropType<CardsResultsType[]>,
      required: true
    },
    episodes:{
      type:Array as PropType<AllEpisodesType[]>
    }
  },
});
</script>

<style scoped>
.container {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}
</style>
