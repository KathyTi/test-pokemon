<template>
  <div class="pager" v-if="isActive" id="pager">
    <div class="pager-header">{{`Input page(1 - ${count})`}}</div>
    <div class="input-wrapper">
      <InputFieldComponent :text="pagerText" id="ddd"
                           :isError="isError"
                           :isFocusing="true"
                           :isDigitsOnly="true"
                           placeholder="Input page"
                           @submit="accept"
                           @changed="changed">
      </InputFieldComponent>
      <ButtonComponent @clicked="accept" :isActive="pagerText.length > 0 && !isError">OK</ButtonComponent>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component';
import InputFieldComponent from './InputFieldComponent';
import ButtonComponent from './ButtonComponent';

@Options({
  components: {InputFieldComponent,ButtonComponent},
  props: {
    isActive: {type: Boolean, default: true},
    isError: {type: Boolean, default: true},
    count: {type: Number, default: 0},
  },
  emits: ['changed','accept'],
  watch: {},
})
export default class Pager extends Vue{

  pagerText = ''

  created(){
    window.addEventListener('mouseup', this.checkIsClickOut)
  }

  beforeUnmount(){
    window.removeEventListener('mouseup', this.checkIsClickOut)
  }

  changed(text){
    this.pagerText = text
    this.$emit('changed', this.pagerText)
  }

  accept(){
    this.$emit('accept', this.pagerText)
    this.pagerText = ''
  }

  checkIsClickOut(element){

    let el = document.getElementById('pager')

    if(this.$props.isActive){
      if(el !== null){
        let left = el.getBoundingClientRect().left
        let right = el.getBoundingClientRect().right
        let top = el.getBoundingClientRect().top
        let bottom = el.getBoundingClientRect().bottom
        let x = element.x
        let y = element.y

        if(!(x >= left && x <= right && y <= bottom && y >= top)){
          this.accept('')
        }
      }
    }
  }

}
</script>

<style scoped lang="scss">

  .pager{
    display: flex;
    position: absolute;
    bottom: 64px;
    width: 200px;
    height: 96px;
    flex-direction: column;
    padding: 0 16px;
    box-sizing: border-box;
    background-color: white;
    border-radius: 8px;
    box-shadow: 4px 4px 16px rgba(0,0,0,0.24);
    z-index: 2;

    .pager-header{
      display: flex;
      height: 48px;
      width: 100%;
      justify-content: center;
      align-items: center;
      font-size: 16px;
    }

    .input-wrapper{
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;

    }

  }


</style>