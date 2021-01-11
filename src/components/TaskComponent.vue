<template>
  <div class="task-component">
    <div class="row justify-content-around">
      <div class="col-6">
        <p class="lead" v-if="task.completed" style="text-decoration: line-through;">
          {{ task.description }}
        </p>
        <p class="lead" v-else>
          {{ task.description }}
        </p>
      </div>
      <div class="col-6">
        <button @click="remove(task.id)" class="btn border-0 bg-transparent text-danger">
          <i class="fas fa-times"></i>
        </button>
        <button @click="toggleStatus(task, task.id)" class="btn border-0 bg-transparent text-success">
          <i class="fas fa-check"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { todoService } from '../services/TodoService'
export default {
  name: 'TaskComponent',
  props: ['taskProp'],
  setup(props) {
    return {
      task: computed(() => props.taskProp),
      remove(taskId) {
        todoService.removeTodo(taskId)
      },
      toggleStatus(task, taskId) {
        todoService.toggleStatus(task, taskId)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
