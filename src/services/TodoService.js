import { logger } from '../utils/Logger'
import { api } from './AxiosService'
import { AppState } from '../AppState'

class TodoService {
  async getTodos() {
    try {
      const res = await api.get('/monroe/todos')
      AppState.todos = res.data
      console.log(res.data)
    } catch (error) {
      logger.error(error)
    }
  }

  async newTodo(todoData) {
    try {
      await api.post('/monroe/todos/', todoData)
      this.getTodos()
    } catch (error) {
      logger.error(error)
    }
  }

  async removeTodo(id) {
    try {
      await api.delete('monroe/todos/' + id)
      this.getTodos()
    } catch (error) {
      logger.error(error)
    }
  }

  async toggleStatus(todo, id) {
    try {
      await api.get('monroe/todos/' + id)
      todo.completed = !todo.completed
      console.log(todo)
    } catch (error) {
      logger.error(error)
    }
  }
}

export const todoService = new TodoService()
