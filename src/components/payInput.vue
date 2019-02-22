<template>
    <span class="pay_Input">
        <input ref="pay_Input" type="password" class="pay_Inputs" autocomplete="off" :maxlength="len" v-model="val" @blur='blur' @input="inputChange" />
        <ul :class="payItem" @click="focus">
            <li v-for="item in len" :key="item" class="">
                <span v-if="status.focus&&msgLength==item-1"></span>
                <template v-if='type=="password"'>
                    <i v-if="msgLength > item-1"></i>
                </template>
                <template v-else>
                    <em>{{msgArr[item-1]}}</em>
                </template>
            </li>

        </ul>
    </span>
</template>
<script type="text/ecmascript-6">
export default {
    model: {
        prop: "val",
        event: "pay"
    },
    //接收父级传递的参数
    props: {
        len: {
            type: Number,
            default: 4
        },
        type: {
            type: String,
            default: "password"
        },
        payItem:{
            type:String,
            default:''
        }
    },
    //监听数据变化
    watch: {
        val(curVal) {
            if (/[^\d]/g.test(curVal)) {
                this.val = this.val.replace(/[^\d]/g, "");
            } else {
                this.msgLength = curVal.length;
                this.msgArr = this.val.split("");
                this.$emit("change", this.val);
            }
        }
    },
    data() {
        return {
            val: "",
            msgLength: 0,
            msgArr: [],
            status: {
                focus: false
            }
        };
    },
    //实例初始化之前触发事件
    beforeCreate() {},
    //实例化之后触发事件
    created() {},
    //实时监控data参数数据变化
    computed: {},
    //模板组件
    components: {},
    //执行方法
    methods: {
        focus() {
            this.$refs.payInput.focus();
            this.status.focus = true;
        },
        blur() {
            this.status.focus = false;
        },
        inputChange() {
            this.$emit("pay", this.val);
        },
        clear() {
            this.val = "";
            this.focus();
        }
    },
    mounted() {}
    //路由退出时候调用
    //beforeRouteLeave(to, from, next){next()}
};
</script>

<style >
.pay_Input {
    position: relative;
    display: inline-block;
}
.pay_Inputs {
    position: absolute;
    z-index: -1;
    opacity: 0;
    left: 0;
}
.pay_Input ul {
    padding-bottom: 1px;
    margin: 0 auto;
    background: #fff;
    cursor: pointer;
    overflow: hidden;
    padding-left: 0px;
}
.pay_Input ul li {
    list-style-type: none;
    text-align: center;
    line-height: 27px;
    float: left;
    border: 1px solid #ddd;
    width: 30px;
    height: 30px;
    margin-right: 16px;
    position: relative;
}
.pay_Input ul li i {
    height: 5px;
    width: 5px;
    border-radius: 50%;
    background: #000;
    display: inline-block;
}
.pay_Input ul li em {
    display: inline-block;
    font-style: initial;
    line-height: 32px;
}
.pay_Input ul li span {
    height: 30px;
    width: 30px;
    background: url("./images/l.gif") no-repeat center;
    background-size: auto 15px;
    text-align: center;
    border: 1px solid rgba(82, 168, 236, 0.8);
    display: inline-block;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
        0 0 8px rgba(82, 168, 236, 0.6);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
}
</style>
