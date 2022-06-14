<template>
  <div class="pokemon-list-item" @click="selected">
      <div class="image-wrapper">
          <img class="image" :src="avatar">
      </div>
      <div class="description">{{item.details?.name}}</div>
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component';
import {getAvatar} from '@/libs/Helper';

@Options({
  components: {},
  props: {
      item: {type: Object, default: {}}
  },
  emits: ['selected'],
  watch: {},
})
export default class PokemonListItem extends Vue{

    selected(){
        this.$emit('selected', this.$props.item)
    }

    get avatar(){
        return getAvatar(this.$props.item)
    }

}
</script>

<style scoped lang="scss">

    .pokemon-list-item{
        display: flex;
        width: 100%;
        height: 128px;
        align-items: center;
        padding: 0 16px;
        box-sizing: border-box;

        .image-wrapper{
            display: flex;
            height: 128px;
            width: 128px;
            padding: 4px;
            box-sizing: border-box;
            justify-content: center;
            align-items: center;
            .image{
                display: flex;
                height: 112px;
                width: 112px;
                image-rendering: high-quality;
            }
        }


        .description{
            display: flex;
            height: 100%;
            width: 100%;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            font-weight: bold;
        }

        &:hover{
            background-color: rgba(188,255,188,.6);
            cursor: pointer;
        }

    }

</style>