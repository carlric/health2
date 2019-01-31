<template>
  <div id="todo_list">
    <p>
      This is the compiled vue-pouch example app located at
      <a href="https://github.com/buhrmi/vue-pouch/tree/master/docs/app"
        >https://github.com/buhrmi/vue-pouch/tree/master/docs/app</a
      >
    </p>
    <hr />
    <input v-model="message" placeholder="New Todo" />
    <button
      @click="
        $pouch.post('todos', { message: message });
        message = '';
      "
    >
      Save Todo
    </button>
    <div v-for="todo in todos">
      <input v-model="todo.message" @change="$pouch.put('todos', todo, {});" />
      <button @click="$pouch.remove('todos', todo);">Remove</button>
    </div>

    <button
      @click="
        db.createIndex({
          index: {
            fields: ['message']
          }
        })
          .then(function(result) {})
          .catch(function(err) {});
      "
    >
      Create index
    </button>
  </div>
</template>

<script>
export default {
  // VuePouch adds a `pouch` config option to all components.
  pouch: {
    // The simplest usage. queries all documents from the "todos" pouch database and assigns them to the "todos" vue property.
    todos: {
      /*empty selector*/
    }
  },
  created: function() {
    // Send all documents to the remote database, and stream changes in real-time
    this.$pouch.sync(
      "todos",
      "https://bba6ce8d-1191-4d98-8a1b-0ed9b1ef701d-bluemix.cloudant.com/todos/"
    );
  },
  data: function() {
    return { message: "" };
  }
};
</script>
