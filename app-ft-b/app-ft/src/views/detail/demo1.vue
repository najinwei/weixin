<template>
  <div>
    <button @click="appController.openImage('1')" >相册
    </button>
    <button @click="appController.openPhoto()" >相机
    </button>
    <button @click="appController.toExit()" >退出
    </button>
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
  //import appController from "../../utils/appController";

  export default {

    methods: {

      huancun() {
        window.getImage = function(image){
          imageKe ="1"
        }.bind(this);
      }

    },
    name: 'HelloWorld',
    data () {
      return {
        msg:this.imageKe
      }
    }
  }


</script>

<style scoped>

</style>
