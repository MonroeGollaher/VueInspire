import { logger } from '../utils/Logger'
import { api } from './AxiosService'
import { AppState } from '../AppState'
class ImageService {
  async getImage() {
    try {
      const res = await api.get('/images')
      AppState.image = res.data
    } catch (error) {
      logger.error(error)
    }
  }
}

export const imageService = new ImageService()
