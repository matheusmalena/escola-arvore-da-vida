<template>
  <div class="instagram-wrapper">
    <div v-if="isLoading" class="spinner"></div>

    <h1 v-else-if="hasError">Ooops, não foi possível carregar o feed do Instagram. <br> Tente novamente mais tarde!</h1>

    <div v-else class="instagram-gallery">
      <div
        v-for="image in instagramData.data"
        :key="image.id"
        class="instagram-gallery-item"
      >
        <a :href="image.permalink" target="_blank" rel="noreferrer">
          <img
            v-if="image.media_type === 'IMAGE' || image.media_type === 'CAROUSEL_ALBUM'"
            :src="image.media_url"
            :alt="image.caption"
            class="instagram-gallery-image"
          />
          <video v-else class="instagram-gallery-image">
            <source :src="image.media_url" type="video/mp4" />
          </video>
        </a>
        <span v-if="showCaption" class="instagram-caption">{{ image.caption }}</span>
      </div>
    </div>

    <div v-if="usePagination">
      <div v-if="paginationPrevUrl">
        <button type="button" @click="handlePaginationPrev">Voltar</button>
      </div>
      <div v-if="paginationNextUrl">
        <button type="button" @click="handlePaginationNext">Próximo</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  props: {
    accessToken: String,
    count: Number,
    pagination: Boolean,
    caption: Boolean,
  },
  setup(props) {
    const isLoading = ref(true);
    const hasError = ref(false);
    const instagramData = ref(null);
    const usePagination = ref(props.pagination);
    const showCaption = ref(props.caption);
    const paginationNextUrl = ref("");
    const paginationPrevUrl = ref("");

    const fetchInstaData = (url) => {
      isLoading.value = true;
      axios
        .get(url)
        .then((response) => {
          if (response.data.error) {
            hasError.value = true;
          } else {
            instagramData.value = response.data;
            if (instagramData.value && instagramData.value.paging) {
              paginationNextUrl.value = instagramData.value.paging.next;
              paginationPrevUrl.value = instagramData.value.paging.previous;
            }
          }
        })
        .catch((error) => {
          console.log("Error:", error);
          hasError.value = true;
        })
        .finally(() => {
          isLoading.value = false;
        });
    };

    onMounted(() => {
      const url = `https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url,caption&limit=${props.count}&access_token=${props.accessToken}`;
      fetchInstaData(url);
    });

    const handlePaginationNext = () => {
      fetchInstaData(paginationNextUrl.value);
    };

    const handlePaginationPrev = () => {
      fetchInstaData(paginationPrevUrl.value);
    };

    return {
      isLoading,
      hasError,
      instagramData,
      usePagination,
      showCaption,
      paginationNextUrl,
      paginationPrevUrl,
      handlePaginationNext,
      handlePaginationPrev,
    };
  },
};
</script>

<style scoped>
.instagram-wrapper {
  max-width: 100% !important;
  display: flex !important;
  flex-wrap: wrap !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  background-color: var(--clean-light-gray) !important;
  padding: 1rem 0 !important;
}
.instagram-gallery {
  display: flex !important;
  flex-wrap: wrap !important;
  padding-bottom: 3rem !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 1rem;
}
.instagram-gallery-item {
  position: relative !important;
  flex: 0 0 298.4px !important;
  height: 298.4px !important;
  border: 1px solid #ddd !important;
  border-radius: 5px !important;
  overflow: hidden !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
  transition: transform 0.3s !important;
}

.instagram-gallery-image {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  transition: opacity 0.3s !important;
}

.instagram-caption {
  color: black;
  margin-top: -3px;
}

/* Spinner Styles */
.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 6px solid var(--orange);
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 2rem auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media screen and (max-width: 947px) {
  .instagram-gallery {
  display: flex !important;
  flex-direction: column !important;
  padding-bottom: 3rem !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 1rem;
}

.instagram-gallery-item {
  position: relative !important;
  width: 298.4px !important;
  height: 298.4px !important;
  border: 1px solid #ddd !important;
  border-radius: 5px !important;
  overflow: hidden !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
  transition: transform 0.3s !important;
}

.instagram-gallery-image {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  transition: opacity 0.3s !important;
}
}
</style>
