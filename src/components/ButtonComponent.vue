<template>
  <div class="button-component"
       :class="{'button-inactive': !isActive}"
       @click="clicked">
    <slot></slot>
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {},
  props: {
    isActive: {type: Boolean, default: true},
  },
  emits: ['clicked'],
  watch: {},
})
export default class ButtonComponent extends Vue{

  clicked(){
    if(this.$props.isActive)
      this.$emit('clicked')
  }

}
</script>

<style scoped lang="scss">

  .button-component{
    display: flex;
    height: 36px;
    padding: 0 8px;
    margin: 0 0 0 8px;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: mediumseagreen;
    color: white;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 400;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
    transition: .3s ease-in;

    &.button-inactive{
      background-color: lightgrey;
      color: dimgrey;
      cursor: default;
    }

  }


</style>