<template>
  <div class="pokemon-info" @click="close">
      <div class="modal-window" @click.stop="true">
          <div class="header">
              {{item?.details?.name}}
              <div class="close" @click="close">
                  <img src="../assets/icons/close.svg">
              </div>
          </div>
          <div class="info-area">
              <div class="left-column">
                  <div class="avatar-wrapper">
                      <img class="avatar"
                           :src="avatar">
                  </div>
              </div>
              <div class="right-column">
                  <div class="stats-wrapper">
                      <div class="stats" ref="scroll_stats_wrapper_ref">
                          <div class="stat">
                              <span>Height:</span>
                              {{item?.details?.height}}
                          </div>
                          <div class="stat">
                              <span>Weight:</span>
                              {{item?.details?.weight}}
                          </div>
                          <div class="stat">
                              <span>Types:</span>
                              <div class="multi-stat">
                                  <div class="stat" style="width: auto; top: 0"
                                       v-for="type in item?.details?.types" :key="type">
                                      {{type?.type?.name}}
                                  </div>
                              </div>
                          </div>
                          <div class="stat">
                              <span>Experience for win:</span>
                              {{item?.details?.base_experience}}
                          </div>
                          <div class="stat">
                              <span>Abilities:</span>
                              <div class="multi-stat">
                                  <div class="stat" style="width: auto; top: 0"
                                       v-for="ability in item?.details?.abilities" :key="ability">
                                      {{ability?.ability?.name}}
                                  </div>
                              </div>
                          </div>
                          <div class="stat">
                              <span>Forms:</span>
                              <div class="multi-stat">
                                  <div class="stat" style="width: auto; top: 0"
                                       v-for="form in item?.details?.forms" :key="form">
                                      {{form?.name}}
                                  </div>
                              </div>
                          </div>
                          <div class="stat">
                              <span>Moves:</span>
                              <div class="multi-stat">
                                  <div class="stat" style="width: auto; top: 0"
                                       v-for="move in item?.details?.moves" :key="move">
                                      {{move?.move?.name}}
                                  </div>
                              </div>
                          </div>
                      </div>
                      <ScrollbarComponent v-if="scroll_stats_wrapper_ref" :scroll-element="scroll_stats_wrapper_ref"></ScrollbarComponent>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component';
import ScrollbarComponent from "./ScrollbarComponent";
import {getAvatar} from "@/libs/Helper";

@Options({
  components: {ScrollbarComponent},
  props: {
      item: {type: Object, default: {}},
  },
  emits: ['closed'],
  watch: {},
})
export default class PokemonInfo extends Vue{

    scroll_stats_wrapper_ref = null

    get avatar(){
        return getAvatar(this.$props.item)
    }

    close(){
        this.$emit('closed')
    }

}
</script>

<style scoped lang="scss">

    .pokemon-info{
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.24);
        justify-content: center;
        align-items: center;
        padding: 12px;
        box-sizing: border-box;

        .modal-window{
            display: flex;
            height: 600px;
            width: 600px;
            background-color: white;
            border-radius: 16px;
            box-shadow: 8px 8px 16px rgba(0,0,0,0.24);
            flex-direction: column;

            .header{
                display: flex;
                position: relative;
                height: 64px;
                width: 100%;
                box-shadow: 0 4px 16px rgba(0,0,0,0.24);
                justify-content: center;
                align-items: center;
                font-size: 32px;
                font-weight: bold;

                .close{
                    display: flex;
                    position: absolute;
                    right: 24px;
                    height: 48px;
                    width: 48px;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    border-radius: 4px;
                    transition: .15s ease-in;

                    &:hover{
                        background-color: #eee;
                    }

                }

            }

            .info-area{
                display: flex;
                height: 100%;
                width: 100%;
                justify-content: space-between;
                align-items: center;
                overflow-y: hidden;
                padding: 32px 12px;
                box-sizing: border-box;

                .left-column{
                    display: flex;
                    height: 100%;
                    width: 30%;

                    .avatar-wrapper{
                        display: flex;
                        height: 160px;
                        width: 160px;
                        justify-content: center;
                        align-items: center;

                        .avatar{
                            display: flex;
                            height: 120px;
                            width: 120px;
                        }

                    }

                }

                .right-column{
                    display: flex;
                    height: 100%;
                    width: 60%;

                    .stats-wrapper{
                        overflow: hidden;
                        position: relative;
                        width: 100%;
                        height: 100%;
                        box-sizing: border-box;

                        .stats{
                            display: block;
                            height: 100%;
                            width: 100%;
                            padding: 0 16px 0 0;
                            box-sizing: border-box;
                            flex-direction: column;
                            justify-content: start;
                            align-items: center;
                            overflow-y: auto;
                            position: static;

                            .stat{
                                display: flex;
                                min-height: 24px;
                                width: 100%;
                                justify-content: space-between;
                                align-items: start;
                            }

                            .multi-stat{
                                display: flex;
                                flex-direction: column;
                                align-items: end;
                            }

                        }

                    }

                }

                @media (max-width: 530px) {
                    flex-direction: column;
                    align-items: center;
                    overflow-y: hidden;
                    padding: 32px 12px;
                    box-sizing: border-box;

                    .left-column{
                        width: 100%;
                        height: 128px;
                        justify-content: center;

                        .avatar-wrapper{
                            display: flex;
                            height: 120px;
                            width: 120px;

                        }

                    }
                    .right-column{
                        width: 100%;
                    }

                }

            }

            @media (max-width: 530px){
                height: 100%;
                border-radius: 0;
            }

        }

    }


</style>