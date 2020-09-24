<template>
  <v-app>
    <!-- <FloatyButton btnColor="primary" position="bl" @click="alert('hdsuhds')">
      mdi-plus
    </FloatyButton> -->
    <Toolbar color="#333" iconColor1="green" iconColor2="red">
    </Toolbar>
    
  </v-app>
</template>

<script>
// import FloatyButton from './components/FloatyButton';
import Toolbar from './components/Toolbar';
// import SecondButton from './components/SecondButton';

export default {
  name: 'App',

  components: {
    // 'FloatyButton':FloatyButton,
    // 'SecondButton':SecondButton,
    'Toolbar':Toolbar,
  },
  data() {
    
    return {
      
    }
  },
  
    
  
};
</script>
