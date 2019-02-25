# vue-pay-input

## Description

Demo
https://5yojky3vr4.codesandbox.io/

## Install

### Terminal
```shell
$ npm i vue-pay-input --save
```


## Usage
```javascript
  //main.js
   import payInput from 'vue-pay-input'
   Vue.use(payInput)

```
```html

<template>
  <div >
     <payInput ref="payInput" @change="change" :styles="styles" payItem="pay-item" v-model="value" :type="type" :len="6"></payInput>
  </div>
</template>
<script>
  export default {
      data() {
        return {
            value: "",
            styles:'merge',
            type:'password'
        };
    },
    components: {
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
  }
</script>
```

## Prop

| Name         | Type      | Default      | Description              |
|--------------|-----------|--------------|--------------------------|
| len          | number    | 4            | input value length    输入框的长度   |
| value        | string    | ''           | default input value   v-model绑定值   |
| type         | string    | password     | 'password' or 'text'  是否显示输入内容     |
| styles       | string    | separate     | 'separate' or 'merge'  风格选择     |


## API

| Name         | Description              |
|--------------|--------------------------|
| change       |  input change              |


## Event

| Name         | Description              |
|--------------|--------------------------|
| clear        | clear input              |
| focus        | focus event              |
| blur         | blur event               |


## Devlopment

```sh
$ npm install
$ npm run dev
```




