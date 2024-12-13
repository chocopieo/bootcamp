export default {
  created() {},
  mounted() {
    // 서버 데이터베이스 현재 시간/분/초, 사용자 아이디, 현재 라우트 패스
    console.log(this.$route.path)
  },
  unmounted() {
    // 서버 데이터베이스 현재 시간/분/초, 사용자 아이디, 현재 라우트 패스
    console.log(this.$route.path)
  },
  methods: {}
}
