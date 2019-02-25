# vue-pay-input

## Description

Demo
https://7mz7103wjq.codesandbox.io/

## Install

### Terminal
```shell
$ npm i vue-pay-input --save
```


## Usage
```html
 import payInput from 'vue-pay-input'
 Vue.use(payInput)
<template>
  <div >
     <payInput ref="payInput" @change="change" payItem="pay-item" v-model="value" :type="type" :len="6"></payInput>
  </div>
</template>
<script>
  export default {
      data() {
        return {
            value: "",
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
        }
    }
  }
</script>
```

## Prop

| Name         | Type      | Default      | Description              |
|--------------|-----------|--------------|--------------------------|
| len          | number    | 4            | input value length       |
| value        | string    | ''           | default input value      |
| type         | string    | password     | 'password' or 'text'     |


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




