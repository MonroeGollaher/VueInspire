<template>
  <div class="to-do-component">
    <div class="row">
      <div class="col-12 card">
        <h3 class="btn border-0 bg-transparent"
            type="button"
            data-toggle="collapse"
            data-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
        >
          Reminders
        </h3>
        <div class="row">
          <div class="collapse col-12" id="collapseExample">
            <div class="card card-body overflow-auto">
              <form @submit="newTodo(state.newTodo)" class="form-inline">
                <div class="form-group justify-content-center">
                  <label for="todo">Add a reminder</label>
                  <input type="text" id="todo" class="form-control mx-sm-3" v-model="state.newTodo.description">
                </div>
              </form>
              <task-component v-for="t in tasks" :key="t" :task-prop="t" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { todoService } from '../services/TodoService'
import { AppState } from '../AppState'
export default {
  name: 'ToDoComponent',
  props: ['toDoProp'],
  setup(props) {
    const state = reactive({
      newTodo: {
        description: null
      }
    })
    onMounted(() => {
      todoService.getTodos()
    })
    return {
      state,
      todo: computed(() => props.toDoProp),
      tasks: computed(() => AppState.todos),
      newTodo(newTodo) {
        todoService.newTodo(newTodo)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.card-body {
  max-height: 15vh;

}
</style>
