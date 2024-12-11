<template>
  <div>
    <div>
      <label for="" class="form-label">이메일주소</label>
      <input type="email" name="" id="" class="form-control" v-focus />
    </div>
    <div>
      <label for="" class="form-label">비밀번호</label>
      <input type="password" name="" id="" class="form-control" />
    </div>
    <div>
      <button class="btn btn-primary">로그인</button>
    </div>
    <div v-color="color" style="height: 50px"></div>
    <div v-demo="{ color: 'red', text: 'hello!' }"></div>
    <div>
      <input type="text" name="" id="" class="form-control" v-lowercase />
    </div>
    <div>
      <input type="text" name="" id="" class="form-control" v-uppercase />
    </div>
    <div>
      <input type="text" name="" id="" class="form-control" v-number />
      <input type="number" name="" id="" class="form-control" />
    </div>
    <div>
      <input type="text" name="" id="" class="form-control" v-korean />
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  directives: {
    // focus: {
    //   mounted(el, binding) {
    //     // console.log(el)
    //     el.focus()
    //   }
    // },
    // lowercase: {
    //   mounted(el) {
    //     el.addEventListener('input', (event) => {
    //       //   console.log(event.target.value)
    //       event.target.value = event.target.value.toLowerCase()
    //     })
    //   }
    // },
    // uppercase: {
    //   mounted(el) {
    //     el.addEventListener('input', (event) => {
    //       //   console.log(event.target.value)
    //       event.target.value = event.target.value.toUpperCase()
    //     })
    //   }
    // },
    // number: {
    //   mounted(el) {
    //     el.addEventListener('input', (event) => {
    //       //   console.log(event.target.value)
    //       //   event.target.value = event.target.value.replace(/[^0-9]/g, '')
    //       event.target.value = event.target.value.replace(/\D/g, '')
    //     })
    //   }
    // },
    // korean: {
    //   mounted(el) {
    //     el.addEventListener('input', (event) => {
    //       //   console.log(event.target.value)
    //       event.target.value = event.target.value.replace(
    //         /[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g,
    //         ''
    //       )
    //     })
    //   }
    // },
    color: {
      mounted(el, binding) {
        // console.log(el)
        // console.log(binding.value)
        el.style.backgroundColor = binding.value
      }
    },
    demo: {
      mounted(el, binding) {
        el.innerText = binding.value.text
        el.style.color = binding.value.color
      }
    }
  },
  data() {
    return {
      sampleData: '',
      color: 'red'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
