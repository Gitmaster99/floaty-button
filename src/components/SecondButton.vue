<template>
  <v-app id="app">
    <div class="text-center">
      <p v-if="emitted">Emitted!</p>
      <v-btn id="btn" class="floaty_button" :color="btnColor" :left="position" @click="click" fab absolute dark>
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
      bottom: {
        type: Boolean,
        default: false
      },
      top: {
        type: Boolean,
        default: false
      },
      left: {
        type: Boolean,
        default: false
      },
      right: {
        type: Boolean,
        default: false
      },
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
        return this.position.includes('l') && this.left==true;
      },
      btn_right: function() {
        return this.position.includes('r') && this.right==true;
      },
      btn_bottom: function() {
        return this.position.includes('b') && this.bottom==true;
      },
      btn_top: function() {
        return this.position.includes('t') && this.top==true;
      },
      classes() {
      return {
        'storybook-button': true,
        [`storybook-button--${this.size}`]: true,
      };
    },
          
    },

    
    methods: {
      click: function () {
      alert('This alert is working!')
      this.emitted = true
      this.$emit('click')
    },
     
    }
  }
  
</script>

<style>
.floaty_button {
    position: absolute;
    top: -100;
}
</style>