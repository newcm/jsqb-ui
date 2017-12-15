import Vue from 'vue';
import VueToast from './tips';

let  instance;

// const ToastOption = {
//     title:'我是提示框11',
//     duration:2500,
//     tipshow:true
// }
const createInstance = () => {
    if (!instance) {
        const ToastConstructor = Vue.extend(VueToast);
        instance = new ToastConstructor({
            el: document.createElement('div')
        });
        document.body.appendChild(instance.$el);
    }
};
const Toast = (options)=>{
    createInstance();
    options = typeof options === 'object' ? options : { title: options };
    options.tipshow = true;
    Object.assign(instance,options);
    
    clearTimeout(instance.timer);
    instance.timer = setTimeout(()=>{
        instance.tipshow = false;
    },instance.duration)
}
Vue.prototype.$toast = Toast;

export default Toast;
