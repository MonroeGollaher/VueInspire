import { api } from '../services/AxiosService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
class QuoteService {
  async getQuote() {
    try {
      const res = await api.get('/quotes')
      AppState.quote = res.data.quote
    } catch (error) {
      logger.error(error)
    }
  }
}
export const quoteService = new QuoteService()
