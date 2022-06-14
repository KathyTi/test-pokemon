<template>
  <div class="input-field-component">
    <input class="input-field" :id="`input-field_${id}`"
           :class="{'input-error': isError}"
           :value="text"
           @keyup.enter="submit"
           :placeholder="placeholder"
           @input="change">
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {},
  props: {
    text: {type: String, default: ''},
    placeholder: {type: String, default: ''},
    isError: {type: Boolean, default: false},
    isDigitsOnly: {type: Boolean, default: false},
    isFocusing: {type: Boolean, default: false},
  },
  emits: ['changed', 'submit', 'error'],
  watch: {},
})
export default class InputFieldComponent extends Vue{

  currentText = ''
  id = Math.random() * 1000000

  mounted(){
    if(this.$props.isFocusing){
      let input = document.getElementById(`input-field_${this.id}`)
      input.focus()
    }

  }


  change(e){
    this.currentText = e.target.value
    this.$emit('changed', this.currentText)
  }

  submit(){
    this.$emit('submit')
  }

}
</script>

<style scoped lang="scss">

  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  .input-field-component{
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-start;

    .input-field{
      display: flex;
      width: 100%;
      height: 36px;
      font-family: 'Source Sans Pro';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      outline: none;
      border: none;
      background: white;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      padding-inline: 10px 16px;
      box-sizing: border-box;
      color: black;
      transition: .3s ease-in;

      &::placeholder{
        color: #B4B4B4;
      }

      &:hover{
        box-shadow: inset 0 0 1px 1px rgba(200, 200, 200, 0.3), 0 2px 5px rgba(0, 0, 0, 0.1);
      }

      &:focus{
        box-shadow: inset 0 0 1px 1px rgba(0, 200, 0, 0.5), 0 2px 5px rgba(0, 0, 0, 0.1);
      }

      &.input-error{
        color: rgba(200, 30, 80, 1);
        box-shadow: inset 0 0 1px 1px rgba(200, 0, 0, 0.5), 0 2px 5px rgba(0, 0, 0, 0.1);
      }

    }

  }

</style>