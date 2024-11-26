<template>
  <div>
    <select name="" id="" @change="changeCity($event)" v-model="selectedCity">
      <option value="">== 도시선택 ==</option>
      <option
        :value="city.cityCode"
        :key="city.cityCode"
        v-for="city in cityList"
      >
        {{ city.title }}
      </option>
    </select>
    <select name="" id="">
      <option value="">== 동선택 ==</option>
      <option
        :value="dong.dongCode"
        :key="dong.dongCode"
        v-for="dong in selectedDongList"
      >
        {{ dong.dongTitle }}
      </option>
    </select>
    <!-- <select name="" id="">
      <option value="">== 동선택 ==</option>
      <option
        :value="dong.dongCode"
        :key="dong.dongCode"
        v-for="dong in dongList.filter(
          (dong) => dong.cityCode === selectedCity
        )"
      >
        {{ dong.dongTitle }}
      </option>
    </select> -->
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      selectedCity: '',
      cityList: [
        { cityCode: '02', title: '서울' },
        { cityCode: '051', title: '부산' },
        { cityCode: '064', title: '제주' }
      ],
      dongList: [
        { cityCode: '02', dongCode: '1', dongTitle: '중구' },
        { cityCode: '02', dongCode: '2', dongTitle: '강남구' },
        { cityCode: '02', dongCode: '3', dongTitle: '강서구' },
        { cityCode: '02', dongCode: '4', dongTitle: '강동구' },
        { cityCode: '02', dongCode: '5', dongTitle: '강북구' },
        { cityCode: '051', dongCode: '1', dongTitle: '금정구' },
        { cityCode: '051', dongCode: '2', dongTitle: '해운대구' },
        { cityCode: '051', dongCode: '3', dongTitle: '연제구' },
        { cityCode: '051', dongCode: '4', dongTitle: '동래구' },
        { cityCode: '064', dongCode: '1', dongTitle: '서귀포동' },
        { cityCode: '064', dongCode: '2', dongTitle: '제주동' }
      ],
      selectedDongList: []
    }
  },
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    changeCity(evt) {
      console.log(evt.target.tagName)
      this.selectedDongList = this.dongList.filter(
        (dong) => dong.cityCode === this.selectedCity
      )
    }
  }
}
</script>
