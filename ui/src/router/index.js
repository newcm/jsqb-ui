import Vue from 'vue'
import Router from 'vue-router'
import welcome from '@/components/welcome.vue'
import demo from '@/components/demo.vue'
import dialog from '@/components/dialog.vue'
import keyboard from '@/components/keyboard.vue'
import tip from '@/components/tip.vue'
import picker from '@/components/picker.vue'
import Switch from '@/components/switch.vue'
import tag from '@/components/tag.vue'
import swiper from '@/components/swiper.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: dialog
    },
    {
      path: '/keyboard',
      name: 'keyboard',
      component: keyboard
    },
    {
      path: '/tip',
      name: 'tip',
      component: tip
    },
    {
      path: '/picker',
      name: 'picker',
      component: picker
    },
    {
      path: '/switch',
      name: 'switch',
      component: Switch
    },
    {
      path: '/tag',
      name: 'tag',
      component: tag
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: swiper
    }
  ]
})
