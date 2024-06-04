<template>
  <div>
    <div class="containerSearch">
      <my-select v-model="selectedSort"/>
      <my-input v-model="filteredName"/>
      <button @click="sendFilteredCards">Filter</button>
    </div>
    <div class="containerPagination">
      <my-pagination
          :total-page="totalPage"
          :page="page"
          :change-page="changePage"
          :prev-change-page="prevChangePage"
          :next-change-page="nextChangePage"
      ></my-pagination>
    </div>
    <cards-list :episodes="allEpisodes" :cards="cards" v-if="!isCardsLoading"/>
    <div v-else> Идет загрузка...</div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import CardsList from '@/components/CardsList.vue';
import {instance} from '@/api/cards-api';
import {AllEpisodesType, CardsResultsType, InfoType, ResponseType} from '@/api/types';
import MySelect from '@/components/MySelect.vue';
import MyInput from '@/components/MyInput.vue';
import MyPagination from '@/components/PaginationComponent.vue';

interface FetchCardsProps {
  status?: string | null;
  name?: string | null;
  page?: number;
}


export default defineComponent({
  name: 'App',
  components: {MyPagination, MySelect, CardsList, MyInput},
  setup() {
    const cards = ref<CardsResultsType[]>([]);
    const selectedSort = ref('');
    const filteredName = ref('');
    const page = ref(1);
    const totalPage = ref(0);
    const info = ref<InfoType>({} as InfoType);
    const isCardsLoading = ref(false);
    const episodesId = ref([] as string[])
    const allEpisodes = ref([] as AllEpisodesType[])


    const fetchCards = async (props: FetchCardsProps = {}) => {
      try {
        isCardsLoading.value = true;
        const characters = await instance.get<ResponseType>('/character', {
          params: {
            status: props.status,
            name: props.name,
            page: props.page ?? page.value
          }
        });
        totalPage.value = characters.data.info.pages;
        cards.value = [...characters.data.results];
        info.value = characters.data.info;
        await getIdFromUrl()
      } catch (e) {
        console.log('some error');
      } finally {
        isCardsLoading.value = false;
      }
    };
    const getIdFromUrl = async () => {
      const uniqueId = new Set<string>()
      cards.value.forEach(el => {
        const index = el.episode[0].lastIndexOf('/')
        if (index != -1) {
          const id = el.episode[0].substring(index + 1)
          uniqueId.add(id)
        }
      })
      episodesId.value = [...uniqueId]
      try {
        const episodes = await instance.get(`/episode/${episodesId.value}`)
        if (!episodes.data.length) {
          allEpisodes.value.push(episodes.data)
        } else {
          allEpisodes.value = episodes.data
        }

      } catch (e) {
        console.log(e)
      }

    }

    const sendFilteredCards = () => {
      page.value = 1;
      fetchCards({status: selectedSort.value, name: filteredName.value, page: page.value});
    };

    const changePage = (currentPage: number) => {
      page.value = currentPage;
      fetchCards({status: selectedSort.value, name: filteredName.value, page: currentPage});
    };

    const prevChangePage = () => {
      if (page.value > 1) {
        page.value -= 1;
        fetchCards({status: selectedSort.value, name: filteredName.value, page: page.value});
      }
    };

    const nextChangePage = () => {
      if (page.value < totalPage.value) {
        page.value += 1;
        fetchCards({status: selectedSort.value, name: filteredName.value, page: page.value});
      }
    };

    fetchCards();

    return {
      cards,
      selectedSort,
      filteredName,
      page,
      totalPage,
      isCardsLoading,
      allEpisodes,
      sendFilteredCards,
      changePage,
      prevChangePage,
      nextChangePage,
    };
  }
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.containerSearch {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
}

.containerPagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
