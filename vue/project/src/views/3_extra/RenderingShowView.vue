<template>
  <div>
    <input type="radio" name="" id="ai" value="AI" v-model="favoriteField" />
    <label for="">인공지능</label>
    <input
      type="radio"
      name=""
      id="blockchain"
      value="BC"
      v-model="favoriteField"
    />
    <label for="">블록체인</label>
    <input type="radio" name="" id="iot" value="IOT" v-model="favoriteField" />
    <label for="">사물인터넷</label>
    <input
      type="radio"
      name=""
      id="other"
      value="OTH"
      v-model="favoriteField"
    />
    <label for="">기타</label>
    <div v-show="favoriteField === 'OTH'">
      <input type="text" name="" id="" />
    </div>
    <!-- <div v-if="favoriteField === 'OTH'">
      <input type="text" name="" id="" />
    </div> -->
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      favoriteField: ''
    }
  },
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
