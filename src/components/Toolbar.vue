<template>
  <div>
       <v-toolbar :color="color" collapse>
      <v-btn icon @click="edit">
        <v-icon :color="iconColor1">mdi-pencil</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click="remove">
        <v-icon :color="iconColor2">mdi-delete</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  props: {
   color: {
     type: String,
     default: 'grey',
   },
   iconColor1: {
     type: String,
     default: 'primary',
   },
   iconColor2: {
     type: String,
     default: 'primary',
   },
  },
  methods: {
      edit: function () {
        alert("Let's Edit!");
      },
      remove: function () {
        alert("Let's Delete!");
      }
    },
  
};
</script>
