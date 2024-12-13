<template>
  <div></div>
</template>
<script>
import Formatter from '@/mixins/formatter'
// import Axios from '@/mixins/axios'
export default {
  components: {},
  mixins: [Formatter],
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {
    console.log('MixinView의 created')
  },
  mounted() {
    console.log('MixinView의 mounted')
    console.log(this.$convertDateFormat('20241211', 'YYYY-MM-DD'))
    console.log(this.$convertDateFormat('20241211', 'MM.DD.YYYY'))

    console.log(this.$convertNumberFormat(12362341, '#,###'))
    console.log(this.$convertNumberFormat(12362341, '#,###.#0'))
    console.log(this.$convertNumberFormat(12362341.4, '#,###.#0'))
    console.log(this.$convertNumberFormat(12362341.4, '#,###.##'))
    console.log(this.$convertNumberFormat(-12362341.4, '#,###.##'))
    console.log(this.$convertNumberFormat(-12362341.4, '$#,###.##'))
    console.log(this.$convertNumberFormat(123.34, '#,###.#0%'))
    console.log(this.$convertNumberFormat(123.3, '#,###.#0%'))
    console.log(this.$convertNumberFormat(123, '#,###원'))

    this.getCustomers()
  },
  unmounted() {},
  methods: {
    async getCustomers() {
      const customers = await this.$get('http://localhost:3000/customers')
      console.log(customers)
    }
  }
}
</script>
