import payInput from './payInput'

payInput.install = function(Vue) {
    Vue.component(payInput.name, payInput)
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(payInput)
}

export default payInput