<template>
  <div class="paginator">
      <transition name="fade">
          <Pager :isActive="isPagerOpened"
                 :isError="isPagerInputError"
                 :count="count"
                 @accept="accept"
                 @changed="pagerTextChanged">
          </Pager>
      </transition>

      <div class="page-pointer"
           :class="{'active-page-pointer': page.toString() === currentPage.toString()}"
           :isError="isPagerInputError"
           v-for="(page, index) in paginatorLabels" :key="index"
           @click="onPointerClicked(page)">
          {{page}}
      </div>
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component';
import Pager from './Pager';

@Options({
  components: {Pager},
  props: {
      limit: {type: Number, default: 0},
      count: {type: Number, default: 0},
      currentPage: {type: Number, default: 0},
  },
  emits: ['onClick', 'accept'],
  watch: {
      pagerText(n){
          if(n.length > 0 && /\D/.test(n)){
              this.isPagerInputError = true
          }
          else{
              if(parseInt(n) < 1 || parseInt(n) > this.$props.count)
                  this.isPagerInputError = true
              else
                  this.isPagerInputError = false
          }
      }
  },
})
export default class Paginator extends Vue{

    paginatorLabels = new Array(9).fill('')
    isPagerOpened = false
    pagerText = ''
    isPagerInputError = false

    beforeUpdate(){
        this.setLabels()
    }

    pagerTextChanged(text){
        this.pagerText = text
    }

    setLabels(){
        if(this.$props.count <= 9){
            this.paginatorLabels = new Array(this.$props.count).fill('')
            this.paginatorLabels.forEach((p,idx) => {
                this.paginatorLabels[idx] = idx+1
            })
        }
        else{
            this.paginatorLabels = new Array(9).fill('')
            if(this.$props.currentPage <= 6){
                this.paginatorLabels.forEach((p,idx) => {
                    switch (idx) {
                        case 7: this.paginatorLabels[idx] = '...'; break;
                        case 8: this.paginatorLabels[idx] = '>'; break;
                        default: this.paginatorLabels[idx] = (this.paginatorLabels[idx] = idx+1).toString(); break;
                    }
                })
            }
            else if(this.$props.currentPage > 6 && this.$props.currentPage < this.$props.count-5){
                this.paginatorLabels.forEach((p,idx) => {
                    switch(idx){
                        case 0: this.paginatorLabels[idx] = '<'; break;
                        case 1: this.paginatorLabels[idx] = '1'; break;
                        case 2: this.paginatorLabels[idx] = '...'; break;
                        case 3: this.paginatorLabels[idx] = `${(this.$props.currentPage-1).toString()}`; break;
                        case 4: this.paginatorLabels[idx] = `${(this.$props.currentPage).toString()}`; break;
                        case 5: this.paginatorLabels[idx] = `${(this.$props.currentPage+1).toString()}`; break;
                        case 6: this.paginatorLabels[idx] = '...'; break;
                        case 7: this.paginatorLabels[idx] = `${(this.$props.count).toString()}`; break;
                        case 8: this.paginatorLabels[idx] = '>'; break;
                    }
                })
            }
            else if(this.$props.currentPage >= this.$props.count-5){
                this.paginatorLabels.forEach((p,idx) => {
                    switch (idx) {
                        case 0: this.paginatorLabels[idx] = '<'; break;
                        case 1: this.paginatorLabels[idx] = '...'; break;
                        default: this.paginatorLabels[idx] = this.paginatorLabels[idx] = (this.$props.count - (8 - idx)).toString(); break;
                    }
                })
            }
        }
    }

    onPointerClicked(index){
        if(index !== '...'){
            if(index != this.$props.currentPage){
                this.$emit('onClick', index)
            }
        }
        else{
            this.isPagerOpened = true
        }
    }

    accept(page){
        this.isPagerOpened = false
        if(page.length > 0)
            this.$emit('accept', page)
    }

}
</script>

<style scoped lang="scss">

    .paginator{
        display: flex;
        position: relative;
        width: 100%;
        height: 48px;
        justify-content: center;

        .page-pointer{
            display: flex;
            width: 48px;
            height: 48px;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            box-shadow: 1px 1px 8px rgba(0,0,0,0.24);
            font-size: 24px;
            font-weight: bold;
            background-color: white;
            margin-inline: 8px;
            cursor: pointer;
            -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Safari */
            -khtml-user-select: none; /* Konqueror HTML */
            -moz-user-select: none; /* Old versions of Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;

            &.active-page-pointer{
                background-color: mediumseagreen;
                color: white;
                &:hover{
                    background-color: mediumseagreen;
                }
            }

            &:hover{
                background-color: rgba(188,255,188,.6);
            }

        }

    }

    .fade-enter-active,
    .fade-leave-active{
        transition: all .3s ease;
    }
    .fade-enter,
    .fade-enter-from,
    .fade-leave-to{
        opacity: 0;
        transform: translateY(50px);
    }

</style>