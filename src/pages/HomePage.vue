<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center" :style="'background-image: url('+bgImage.large_url+')'">
    <div class="row">
      <div class="col-12">
        <h1 class="display-1 text-light">
          Good evening, Monroe
        </h1>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12">
        <!-- CLOCK -->
        <h1 id="clock" class="text-light display-4"></h1>
      </div>
      <div class="col-8">
        <h3 class=" text-light">
          {{ quote.body }}
        </h3>
        <div class="row">
          <div class="col">
            <p class="lead text-light">
              - {{ quote.author }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <to-do-component />
      </div>
    </div>
  </div>
</template>

<script>
import { imageService } from '../services/ImageService'
import { quoteService } from '../services/QuoteService'
import { weatherService } from '../services/WeatherService'
import { clockService } from '../services/ClockService'
import { todoService } from '../services/TodoService'
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import ToDoComponent from '../components/TodoComponent'
export default {
  name: 'Home',
  components: { ToDoComponent },
  setup() {
    const state = reactive({

    })
    onMounted(() => {
      imageService.getImage()
      quoteService.getQuote()
      weatherService.getWeather()
      clockService.showTime()
      todoService.getTodos()
    })
    return {
      state,
      bgImage: computed(() => AppState.image),
      quote: computed(() => AppState.quote),
      weather: computed(() => AppState.weather),
      cityInfo: computed(() => AppState.cityInfo)
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
    object-fit: cover;
  }
}
.gradient {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
}
</style>
