import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixin from './mixins'
import i18nPlugin from './plugins/i18n'
import en from './i18n/en'
import ko from './i18n/ko'
import PageTitle from './components/fragments/PageTitle.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const i18nStrings = { en, ko }
// 아래와 같이 적용됨
// {
//   en: {
//     hi: 'Hello',
//     search: 'Search',
//     save: 'Save'
//   },
//   ko: {
//     hi: '안녕하세요',
//     search: '조회',
//     save: '저장'
//   }
// }

const app = createApp(App)
app.use(store)
app.use(router)
app.mixin(mixin)
app.component('page-title', PageTitle)
app.use(i18nPlugin, i18nStrings)

app.directive('focus', {
  mounted(el, binding) {
    el.focus()
  }
})

app.directive('lowercase', {
  mounted(el) {
    el.addEventListener('input', (event) => {
      event.target.value = event.target.value.toLowerCase()
    })
  }
})

app.directive('uppercase', {
  mounted(el) {
    el.addEventListener('input', (event) => {
      event.target.value = event.target.value.toUpperCase()
    })
  }
})

app.directive('number', {
  mounted(el) {
    el.addEventListener('input', (event) => {
      event.target.value = event.target.value.replace(/\D/g, '')
    })
  }
})

app.directive('korean', {
  mounted(el) {
    el.addEventListener('input', (event) => {
      event.target.value = event.target.value.replace(
        /[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g,
        ''
      )
    })
  }
})

app.mount('#app')
