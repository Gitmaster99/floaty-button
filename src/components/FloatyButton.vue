
<template>
  <v-app id="app">
    <div class="text-center">
      <h2>Floaty Button</h2>
      <p v-if="emitted">Emitted!</p>
      <v-btn id="btn" class="floaty_button" :color="btnColor" @click="$emit('click')" fab absolute dark>
        <v-icon id="icon" dark>
          <slot></slot>
        </v-icon>
      </v-btn>
    </div>
  </v-app>
</template>


<script>
  
  export default {
    data: function() {
      return {
        emitted: false
      }
      
    },
    props: {
      btnColor: {
        type: String, 
        default: 'primary',
      },
      position: {
        type: String,
        default: '',
      },
    },

    computed: {
      btn_left: function() {
        return this.position.includes('l');
      },
      btn_right: function() {
        return this.position.includes('r');
      },
      btn_bottom: function() {
        return this.position.includes('b');
      },
      btn_top: function() {
        return this.position.includes('t');
      },
    },
          
  }
</script>

