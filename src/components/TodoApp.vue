<template>
    <div>
        <h1>TodoApp Vue Testing</h1>

        <div>
            <ul>
                <li v-for="todo in todos" 
                :key="todo.id" 
                data-test="todo"
                :class="[todo.completed ? 'completed' : '']"
                >
                    {{ todo.text }}
                    <input type="checkbox" 
                    name="todo-checkbox" 
                    id="todo-checkbox" 
                    data-test="todo-checkbox"
                    v-model="todo.completed">
                </li>
            </ul>
        </div>

        <form data-test="form" @submit.prevent="createTodo">
            <input type="text" data-test="new-todo" v-model="newTodo">            
        </form>
        {{ newTodo }}
    </div>
</template>

<script>
export default {
    name: "TodoApp",
    data() {
        return {
            newTodo: '',
            todos : [
                {
                    id: 1,
                    text: "Learn Vue Testing",
                    completed: false
                }
            ]
        }
    },
    methods: {
        createTodo() {
            this.todos.push({
                id: Date.now(),
                text: this.newTodo,
                completed: false
            })
        },
        toggleCompleted(todo) {
            todo.completed =!todo.completed
        }
    }
}
</script>

<style>
.todoLi {
    cursor: pointer;
    margin-top: 1em;
}
.completed {
    text-decoration: line-through;
    color: rgb(23, 180, 60);
}
</style>