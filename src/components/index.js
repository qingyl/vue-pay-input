
import payInputs from './payInput.vue'
var payInput = {
    install(Vue, options) {
        Vue.component('payInput', payInputs)
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(payInput)
}

export default payInput