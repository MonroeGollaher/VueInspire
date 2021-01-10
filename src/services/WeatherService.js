import { logger } from '../utils/Logger'
import { api } from './AxiosService'
import { AppState } from '../AppState'
class WeatherService {
  async getWeather() {
    try {
      const res = await api.get('/weather')
      AppState.cityInfo = res.data
      AppState.weather = res.data.weather[0]
    } catch (error) {
      logger.error(error)
    }
  }
}
export const weatherService = new WeatherService()
