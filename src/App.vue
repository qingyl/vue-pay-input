<template>
  <div id="app">
    <payInput ref="payInput" @change="change" :styles="styles" payItem="pay-item" v-model="vals" :type="type" :len="6"></payInput>
    <div class="" @click="clear">清除</div>
    <div class="" @click="focus">获取焦点</div>
    <div class="" @click="blur">失去焦点</div>
    <div class="" @click="show">显示密码</div>
    <div class="" @click="stylefun">风格选择</div>
  </div>
</template>

<script>
import payInput from "./components/payInput";
export default {
    name: "App",
    data() {
        return {
            vals: "",
            styles:'merge',
            type:'password'
        };
    },
    components: {
        payInput
    },
    methods: {
        clear() {
            this.$refs.payInput.clear();
        },
        change(val) {
            console.log(`输入的值:${val}`);
        },
        focus() {
            this.$refs.payInput.focus();
        },
        blur() {
            this.$refs.payInput.blur();
        },
        show(){
          this.type=='password'?this.type='text':this.type='password'
        },
        stylefun(){
            this.styles=='separate'?this.styles='merge':this.styles='separate'
        }
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
