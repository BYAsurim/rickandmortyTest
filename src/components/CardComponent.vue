<template>
  <div class="container">
    <img :src="card.image" class="avatar" alt="img"/>
    <div class="content">
      <div>
        <div class="name">{{ card.name }}</div>
        <div class="statusInfo">
          <div class="circle" :style="{ backgroundColor: circleColor }"></div>
          <div class="status">{{ card.status }} -</div>
          <div class="status">{{ card.species }}</div>
        </div>
      </div>
      <div>
        <div class="title">Last known location:</div>
        <div class="location">{{ card.location.name }}</div>
      </div>
      <div>
        <div class="title">First seen in:</div>
        <div class="location">{{ currentEpisode }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType, computed} from 'vue';
import {AllEpisodesType, CardsResultsType} from '@/api/types';

export default defineComponent({
  props: {
    card: {
      type: Object as PropType<CardsResultsType>,
      required: true
    },
    episodes: {
      type: Array as PropType<AllEpisodesType[]>
    }
  },
  setup(props) {
    const firstSeen = computed(() => props.card.episode[0]);
    const circleColor = computed(() => {
      switch (props.card.status) {
        case 'Alive':
          return 'green';
        case 'Dead':
          return 'red';
        default:
          return 'gray';
      }
    });
    const currentEpisode = computed(() => {
      let episodeName = ''
      let id = ''
        props.episodes?.forEach(el => {
          const index = props.card.episode[0].lastIndexOf('/')
          if (index != -1) {
            id = props.card.episode[0].substring(index + 1)
          }
          if (+id === el.id) {
            episodeName = el.name
          }
        })
        return episodeName

    })

    return {firstSeen, circleColor, currentEpisode};
  }
});
</script>

<style scoped>
.container {
  display: flex;
  width: 500px;
  height: 200px;
  gap: 20px;
  background-color: #3c3e44;
  margin: 20px;
  border-radius: 10px;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 10px;
}

.avatar {
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  width: 200px;
  height: 100%;
}

.name {
  font-size: 20px;
  font-weight: bold;
  color: #fff;
}

.statusInfo {
  display: flex;
}

.circle {
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin-right: 10px;
}

.status {
  font-size: 10px;
  color: #ffffff;
  position: relative;
}

.title {
  font-size: 12px;
  color: #9e9e9e;
}

.location {
  font-size: 14px;
  color: #ffffff;
}
</style>
