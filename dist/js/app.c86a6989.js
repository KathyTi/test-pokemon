(function(){"use strict";var e={2668:function(e,t,s){var i=s(9242),a=s(3396);function r(e,t,s,i,r,l){const o=(0,a.up)("MainView");return(0,a.wg)(),(0,a.j4)(o)}var l=s(6520);function o(e,t,s,i,r,l){const o=(0,a.up)("PokemonTable"),n=(0,a.up)("PokemonInfo");return(0,a.wg)(),(0,a.iD)("div",{class:"main-view",onClick:t[1]||(t[1]=(...t)=>e.clk&&e.clk(...t))},[(0,a.Wm)(o,{id:"table",data:e.list.data,limit:e.limit,text:e.searchText,currentPage:parseInt(e.page),isDownloaded:e.isDownloaded,isSearch:e.isSearch,onSearchAccept:e.search,onStopSearch:e.stopSearch,onItemSelected:e.itemSelected,onChangePage:e.changePage},null,8,["data","limit","text","currentPage","isDownloaded","isSearch","onSearchAccept","onStopSearch","onItemSelected","onChangePage"]),e.isModal?((0,a.wg)(),(0,a.j4)(n,{key:0,item:e.currentItem,onClosed:t[0]||(t[0]=t=>e.isModal=!1)},null,8,["item"])):(0,a.kq)("",!0)])}var n=s(2482),c=(s(6699),s(7139));const h=e=>((0,a.dD)("data-v-f0ac2710"),e=e(),(0,a.Cn)(),e),d={class:"pokemon-table"},u={class:"header"},p={key:0,class:"search-field-wrapper"},m=(0,a.Uk)("Search"),g={class:"list-area",id:"list-area"},f={class:"scroll-wrapper",id:"scroll-wrapper",ref:"scroll_wrapper_ref"},v={class:"preloader"},b=h((()=>(0,a._)("div",{class:"loading"},[(0,a._)("span"),(0,a._)("span"),(0,a._)("span")],-1))),w=[b],I={class:"footer"};function _(e,t,s,r,l,o){const n=(0,a.up)("InputFieldComponent"),h=(0,a.up)("ButtonComponent"),b=(0,a.up)("PokemonListItem"),_=(0,a.up)("ScrollbarComponent"),S=(0,a.up)("Paginator");return(0,a.wg)(),(0,a.iD)("div",d,[(0,a._)("div",u,[(0,a.Uk)((0,c.zw)(e.isSearch?e.isDownloaded?"Found: "+e.data.count:"Searching...":"Page: "+e.currentPage)+" ",1),e.isDownloaded?((0,a.wg)(),(0,a.iD)("div",p,[(0,a.Wm)(n,{text:e.text,onChanged:e.searchTextChanged,onSubmit:e.searchAccept,placeholder:"Search"},null,8,["text","onChanged","onSubmit"]),(0,a.Wm)(h,{isActive:e.searchText.length>0,onClicked:e.searchAccept},{default:(0,a.w5)((()=>[m])),_:1},8,["isActive","onClicked"])])):(0,a.kq)("",!0)]),(0,a.wy)((0,a._)("div",g,[(0,a._)("div",f,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.data?.results,(t=>((0,a.wg)(),(0,a.j4)(b,{key:t.id,onSelected:e.itemSelected,item:t},null,8,["onSelected","item"])))),128))],512),e.scroll_wrapper_ref?((0,a.wg)(),(0,a.j4)(_,{key:0,"scroll-element":e.scroll_wrapper_ref},null,8,["scroll-element"])):(0,a.kq)("",!0)],512),[[i.F8,e.isDownloaded]]),(0,a.wy)((0,a._)("div",v,w,512),[[i.F8,!e.isDownloaded]]),(0,a.wy)((0,a._)("div",I,[(0,a.Wm)(S,{count:e.pagesCount,limit:e.limit,currentPage:e.currentPage,onAccept:e.accept,onOnClick:e.changePage},null,8,["count","limit","currentPage","onAccept","onOnClick"])],512),[[i.F8,e.isDownloaded]])])}const S={class:"paginator"},y=["isError","onClick"];function k(e,t,s,r,l,o){const n=(0,a.up)("Pager");return(0,a.wg)(),(0,a.iD)("div",S,[(0,a.Wm)(i.uT,{name:"fade"},{default:(0,a.w5)((()=>[(0,a.Wm)(n,{isActive:e.isPagerOpened,isError:e.isPagerInputError,count:e.count,onAccept:e.accept,onChanged:e.pagerTextChanged},null,8,["isActive","isError","count","onAccept","onChanged"])])),_:1}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.paginatorLabels,((t,s)=>((0,a.wg)(),(0,a.iD)("div",{class:(0,c.C_)(["page-pointer",{"active-page-pointer":t.toString()===e.currentPage.toString()}]),isError:e.isPagerInputError,key:s,onClick:s=>e.onPointerClicked(t)},(0,c.zw)(t),11,y)))),128))])}const E={key:0,class:"pager",id:"pager"},P={class:"pager-header"},x={class:"input-wrapper"},C=(0,a.Uk)("OK");function T(e,t,s,i,r,l){const o=(0,a.up)("InputFieldComponent"),n=(0,a.up)("ButtonComponent");return e.isActive?((0,a.wg)(),(0,a.iD)("div",E,[(0,a._)("div",P,(0,c.zw)(`Input page(1 - ${e.count})`),1),(0,a._)("div",x,[(0,a.Wm)(o,{text:e.pagerText,id:"ddd",isError:e.isError,isFocusing:!0,isDigitsOnly:!0,placeholder:"Input page",onSubmit:e.accept,onChanged:e.changed},null,8,["text","isError","onSubmit","onChanged"]),(0,a.Wm)(n,{onClicked:e.accept,isActive:e.pagerText.length>0&&!e.isError},{default:(0,a.w5)((()=>[C])),_:1},8,["onClicked","isActive"])])])):(0,a.kq)("",!0)}const M={class:"input-field-component"},D=["id","value","placeholder"];function $(e,t,s,r,l,o){return(0,a.wg)(),(0,a.iD)("div",M,[(0,a._)("input",{class:(0,c.C_)(["input-field",{"input-error":e.isError}]),id:`input-field_${e.id}`,value:e.text,onKeyup:t[0]||(t[0]=(0,i.D2)(((...t)=>e.submit&&e.submit(...t)),["enter"])),placeholder:e.placeholder,onInput:t[1]||(t[1]=(...t)=>e.change&&e.change(...t))},null,42,D)])}var L,Z;let H=(L=(0,l.Ei)({components:{},props:{text:{type:String,default:""},placeholder:{type:String,default:""},isError:{type:Boolean,default:!1},isDigitsOnly:{type:Boolean,default:!1},isFocusing:{type:Boolean,default:!1}},emits:["changed","submit","error"],watch:{}}),L(Z=class extends l.w3{constructor(...e){super(...e),(0,n.Z)(this,"currentText",""),(0,n.Z)(this,"id",1e6*Math.random())}mounted(){if(this.$props.isFocusing){let e=document.getElementById(`input-field_${this.id}`);e.focus()}}change(e){this.currentText=e.target.value,this.$emit("changed",this.currentText)}submit(){this.$emit("submit")}})||Z);var B=s(89);const A=(0,B.Z)(H,[["render",$],["__scopeId","data-v-746b15a2"]]);var O,F,q=A;function W(e,t,s,i,r,l){return(0,a.wg)(),(0,a.iD)("div",{class:(0,c.C_)(["button-component",{"button-inactive":!e.isActive}]),onClick:t[0]||(t[0]=(...t)=>e.clicked&&e.clicked(...t))},[(0,a.WI)(e.$slots,"default",{},void 0,!0)],2)}let U=(O=(0,l.Ei)({components:{},props:{isActive:{type:Boolean,default:!0}},emits:["clicked"],watch:{}}),O(F=class extends l.w3{clicked(){this.$props.isActive&&this.$emit("clicked")}})||F);const j=(0,B.Z)(U,[["render",W],["__scopeId","data-v-1bc0c2c0"]]);var z,Y,R=j;let K=(z=(0,l.Ei)({components:{InputFieldComponent:q,ButtonComponent:R},props:{isActive:{type:Boolean,default:!0},isError:{type:Boolean,default:!0},count:{type:Number,default:0}},emits:["changed","accept"],watch:{}}),z(Y=class extends l.w3{constructor(...e){super(...e),(0,n.Z)(this,"pagerText","")}created(){window.addEventListener("mouseup",this.checkIsClickOut)}beforeUnmount(){window.removeEventListener("mouseup",this.checkIsClickOut)}changed(e){this.pagerText=e,this.$emit("changed",this.pagerText)}accept(){this.$emit("accept",this.pagerText),this.pagerText=""}checkIsClickOut(e){let t=document.getElementById("pager");if(this.$props.isActive&&null!==t){let s=t.getBoundingClientRect().left,i=t.getBoundingClientRect().right,a=t.getBoundingClientRect().top,r=t.getBoundingClientRect().bottom,l=e.x,o=e.y;l>=s&&l<=i&&o<=r&&o>=a||this.accept("")}}})||Y);const N=(0,B.Z)(K,[["render",T],["__scopeId","data-v-2ad8c21e"]]);var Q,J,V=N;let X=(Q=(0,l.Ei)({components:{Pager:V},props:{limit:{type:Number,default:0},count:{type:Number,default:0},currentPage:{type:Number,default:0}},emits:["onClick","accept"],watch:{pagerText(e){e.length>0&&/\D/.test(e)||parseInt(e)<1||parseInt(e)>this.$props.count?this.isPagerInputError=!0:this.isPagerInputError=!1}}}),Q(J=class extends l.w3{constructor(...e){super(...e),(0,n.Z)(this,"paginatorLabels",new Array(9).fill("")),(0,n.Z)(this,"isPagerOpened",!1),(0,n.Z)(this,"pagerText",""),(0,n.Z)(this,"isPagerInputError",!1)}beforeUpdate(){this.setLabels()}pagerTextChanged(e){this.pagerText=e}setLabels(){this.$props.count<=9?(this.paginatorLabels=new Array(this.$props.count).fill(""),this.paginatorLabels.forEach(((e,t)=>{this.paginatorLabels[t]=t+1}))):(this.paginatorLabels=new Array(9).fill(""),this.$props.currentPage<=6?this.paginatorLabels.forEach(((e,t)=>{switch(t){case 7:this.paginatorLabels[t]="...";break;case 8:this.paginatorLabels[t]=">";break;default:this.paginatorLabels[t]=(this.paginatorLabels[t]=t+1).toString();break}})):this.$props.currentPage>6&&this.$props.currentPage<this.$props.count-5?this.paginatorLabels.forEach(((e,t)=>{switch(t){case 0:this.paginatorLabels[t]="<";break;case 1:this.paginatorLabels[t]="1";break;case 2:this.paginatorLabels[t]="...";break;case 3:this.paginatorLabels[t]=`${(this.$props.currentPage-1).toString()}`;break;case 4:this.paginatorLabels[t]=`${this.$props.currentPage.toString()}`;break;case 5:this.paginatorLabels[t]=`${(this.$props.currentPage+1).toString()}`;break;case 6:this.paginatorLabels[t]="...";break;case 7:this.paginatorLabels[t]=`${this.$props.count.toString()}`;break;case 8:this.paginatorLabels[t]=">";break}})):this.$props.currentPage>=this.$props.count-5&&this.paginatorLabels.forEach(((e,t)=>{switch(t){case 0:this.paginatorLabels[t]="<";break;case 1:this.paginatorLabels[t]="...";break;default:this.paginatorLabels[t]=this.paginatorLabels[t]=(this.$props.count-(8-t)).toString();break}})))}onPointerClicked(e){"..."!==e?e!=this.$props.currentPage&&this.$emit("onClick",e):this.isPagerOpened=!0}accept(e){this.isPagerOpened=!1,e.length>0&&this.$emit("accept",e)}})||J);const G=(0,B.Z)(X,[["render",k],["__scopeId","data-v-20cea8ed"]]);var ee=G;const te={class:"image-wrapper"},se=["src"],ie={class:"description"};function ae(e,t,s,i,r,l){return(0,a.wg)(),(0,a.iD)("div",{class:"pokemon-list-item",onClick:t[0]||(t[0]=(...t)=>e.selected&&e.selected(...t))},[(0,a._)("div",te,[(0,a._)("img",{class:"image",src:e.avatar},null,8,se)]),(0,a._)("div",ie,(0,c.zw)(e.item.details?.name),1)])}function re(e){return null!==e?.details?.sprites.other.dream_world.front_default?e?.details?.sprites.other.dream_world.front_default:null!==e?.details?.sprites.front_default?e?.details?.sprites.front_default:null!==e?.details?.sprites.other.home.front_default?e?.details?.sprites.other.home.front_default:null!==e?.details?.sprites.other["official-artwork"].front_default?e?.details?.sprites.other["official-artwork"].front_default:s(8363)}var le,oe;let ne=(le=(0,l.Ei)({components:{},props:{item:{type:Object,default:{}}},emits:["selected"],watch:{}}),le(oe=class extends l.w3{selected(){this.$emit("selected",this.$props.item)}get avatar(){return re(this.$props.item)}})||oe);const ce=(0,B.Z)(ne,[["render",ae],["__scopeId","data-v-b544836e"]]);var he=ce;const de=e=>((0,a.dD)("data-v-d125ecbe"),e=e(),(0,a.Cn)(),e),ue={key:0,class:"vc-scrollbar"},pe=de((()=>(0,a._)("div",{class:"v-scrollbar"},null,-1))),me=[pe];function ge(e,t,s,r,l,o){return e.enabled?((0,a.wg)(),(0,a.iD)("div",ue,[(0,a._)("div",{class:(0,c.C_)(["v-scrollbar-box",{"v-scrollbar-display":e.scrollbarDisplay,"v-scrollbar-interact":e.scrollbarMouseYPos,"v-hide":!e.display||!e.scrollbarIsRequired}]),ref:"scrollbarBox",onMousedown:t[0]||(t[0]=(0,i.iM)(((...t)=>e.onMouseDownScrollbarBox&&e.onMouseDownScrollbarBox(...t)),["prevent"])),onMousemove:t[1]||(t[1]=(0,i.iM)((()=>{}),["prevent"])),onWheel:t[2]||(t[2]=(0,i.iM)((()=>{}),["prevent"]))},me,34)])):(0,a.kq)("",!0)}let fe=0,ve=null,be=new Map;function we(){for(const e of be.values())e();be.clear(),ve=null}class Ie{static request(e){null===ve&&(ve=requestAnimationFrame(we));const t=fe++;return be.set(t,e),t}static cancel(e){be.delete(e)}}class _e{constructor(e,t){this.callback=e,this.timeout=t,this.canceled=!1}setTimeout(e){this.timeout!==e&&(this.cancelImmediately(),this.timeout=e)}_timeoutFunc(){if(this.canceled)return this.requiredTimeMs=null,this.timerId=null,void(this.canceled=!1);if(this.requiredTimeMs){const e=(new Date).getTime();return clearTimeout(this.timerId),this.timerId=setTimeout((()=>this._timeoutFunc()),this.requiredTimeMs-e),void(this.requiredTimeMs=null)}this.timerId=null,this.callback()}run(){if(this.timerId){this.canceled=!1;const e=(new Date).getTime();this.requiredTimeMs=e+this.timeout}else this.timerId=setTimeout((()=>this._timeoutFunc()),this.timeout)}cancel(){this.timerId&&(this.canceled=!0)}cancelImmediately(){this.timerId&&(clearTimeout(this.timerId),this.requiredTimeMs=null,this.timerId=null,this.canceled=!1)}}var Se,ye;const ke=l.Ei;let Ee=(Se=ke({components:{},props:{display:{type:Boolean,default:!0},alwaysDisplay:{type:Boolean,default:!1},scrollElement:HTMLElement,reactiveUpdateParams:0},watch:{reactiveUpdateParams(){this.onScrollBox()},scrollElement(e,t){this.enabled&&this.scrollElement&&(t&&this.freeElement(t),this.initializeElement())}}}),Se(ye=class extends l.w3{constructor(...e){super(...e),(0,n.Z)(this,"enabled",!0),(0,n.Z)(this,"bodyMode",!0),(0,n.Z)(this,"scrollbarIsRequired",!1),(0,n.Z)(this,"scrollbarDisplay",!1),(0,n.Z)(this,"scrollbarHeight",80),(0,n.Z)(this,"scrollbarMinHeight",80),(0,n.Z)(this,"scrollbarTopOffset",0),(0,n.Z)(this,"scrollbarMouseYPos",null),(0,n.Z)(this,"lastScrollTop",-1),(0,n.Z)(this,"lastClientHeight",-1),(0,n.Z)(this,"lastScrollHeight",-1),(0,n.Z)(this,"lastAnimationFrame",null),(0,n.Z)(this,"timeoutResetterActivateScrollbar",new _e((()=>this.scrollbarDisplay=!1),1e3))}updateParamsInTicks(){this.lastAnimationFrame=requestAnimationFrame((()=>{this.updateScrollbarParams(),this.updateParamsInTicks()}))}beforeMount(){-1===navigator.platform.indexOf("Win")&&-1===navigator.platform.indexOf("Mac")&&(this.enabled=!1)}async mounted(){this.enabled&&(this.scrollElement&&this.initializeElement(),this.$refs.scrollbarBox.style.height=this.scrollbarHeight+"px")}initializeElement(){this.scrollElement.classList.add("vc-scrollbar-disable-default"),this.bodyMode=this.scrollElement===document.documentElement,this.alwaysDisplay?this.scrollbarDisplay=!0:(this.scrollbarDisplay=!1,this.scrollElement.addEventListener("mouseenter",this.onMouseEnterBox),this.scrollElement.addEventListener("mousemove",this.onMouseMoveElement),this.activateScrollbar()),this.updateParamsInTicks()}freeElement(e){e.classList.remove("vc-scrollbar-disable-default"),window.removeEventListener("mousemove",this.onMouseMoveWindowScrollbarChange,!1),window.removeEventListener("mouseup",this.onMouseUpWindowScrollbarChange,!1),e.removeEventListener("mouseenter",this.onMouseEnterBox),e.removeEventListener("mousemove",this.onMouseMoveElement),this.lastAnimationFrame&&cancelAnimationFrame(this.lastAnimationFrame),this.timeoutResetterActivateScrollbar.cancel()}beforeUnmount(){this.enabled&&(this.scrollElement&&this.freeElement(this.scrollElement),Ie.cancel(this.animationFrameIdHeightChange),Ie.cancel(this.animationFrameIdScrollbarTopOffset))}onMouseDownScrollbarBox(e){this.scrollbarMouseYPos=e.offsetY,window.addEventListener("mousemove",this.onMouseMoveWindowScrollbarChange,!1),window.addEventListener("mouseup",this.onMouseUpWindowScrollbarChange,!1)}onMouseUpWindowScrollbarChange(){this.scrollbarMouseYPos=null,window.removeEventListener("mousemove",this.onMouseMoveWindowScrollbarChange,!1),window.removeEventListener("mouseup",this.onMouseUpWindowScrollbarChange,!1)}onMouseMoveWindowScrollbarChange(e){this.scrollElement.scrollTo({top:(this.scrollElement.scrollHeight-this.scrollElement.clientHeight)*(e.clientY-(this.scrollElement.getBoundingClientRect().y+(this.bodyMode?this.scrollElement.scrollTop:0))-this.scrollbarMouseYPos)/(this.scrollElement.clientHeight-this.scrollbarHeight)})}onMouseMoveElement(e){Math.abs(e.offsetX-this.scrollElement.getBoundingClientRect().width)<32&&this.activateScrollbar()}onScrollBox(){this.scrollbarMouseYPos||this.updateScrollbarParams()}updateScrollbarParams(){if(this.lastClientHeight==this.scrollElement.clientHeight&&this.lastScrollHeight==this.scrollElement.scrollHeight&&this.lastScrollTop==this.scrollElement.scrollTop)return;if(this.lastClientHeight=this.scrollElement.clientHeight,this.lastScrollHeight=this.scrollElement.scrollHeight,this.lastScrollTop=this.scrollElement.scrollTop,this.scrollElement.scrollHeight<=this.scrollElement.clientHeight)return void(this.scrollbarIsRequired=!1);this.scrollbarIsRequired=!0;let e=this.scrollElement.clientHeight-(this.scrollElement.scrollHeight-this.scrollElement.clientHeight);e<this.scrollbarMinHeight&&(e=this.scrollbarMinHeight),e!==this.scrollbarHeight&&(this.scrollbarHeight=e,Ie.cancel(this.animationFrameIdHeightChange),this.animationFrameIdHeightChange=Ie.request((()=>{this.$refs.scrollbarBox.style.height=e+"px"})));let t=this.scrollElement.scrollHeight,s=this.scrollElement.scrollTop,i=this.scrollElement.clientHeight-this.scrollbarHeight,a=s/(t-this.scrollElement.clientHeight),r=a*i;r!==this.scrollbarTopOffset&&(this.scrollbarTopOffset=r,Ie.cancel(this.animationFrameIdScrollbarTopOffset),this.animationFrameIdScrollbarTopOffset=Ie.request((()=>{this.$refs.scrollbarBox.style.transform=`translateY(${r}px)`}))),this.alwaysDisplay||this.activateScrollbar()}onMouseEnterBox(){this.activateScrollbar()}activateScrollbar(){this.scrollElement.scrollHeight<=this.scrollElement.clientHeight||(this.scrollbarDisplay||(this.scrollbarDisplay=!0),this.timeoutResetterActivateScrollbar.run())}})||ye);const Pe=(0,B.Z)(Ee,[["render",ge],["__scopeId","data-v-d125ecbe"]]);var xe,Ce,Te=Pe;let Me=(xe=(0,l.Ei)({components:{Paginator:ee,PokemonListItem:he,ScrollbarComponent:Te,InputFieldComponent:q,ButtonComponent:R},props:{data:{type:Object,default:{}},limit:{type:Number,default:0},currentPage:{type:Number,default:0},isDownloaded:{type:Boolean,default:!1},isSearch:{type:Boolean,default:!1},text:{type:String,default:""}},emits:["changePage","searchAccept","stopSearch","itemSelected"],watch:{}}),xe(Ce=class extends l.w3{constructor(...e){super(...e),(0,n.Z)(this,"scroll_wrapper_ref",null),(0,n.Z)(this,"count",0),(0,n.Z)(this,"searchText",""),(0,n.Z)(this,"previousQuery","")}get pagesCount(){return this.$props.data&&(this.count=Math.ceil(this.$props.data.count/this.$props.limit)),this.count}changePage(e){"..."!==e&&("<"===e?this.$emit("changePage",this.$props.currentPage-1):">"===e?this.$emit("changePage",this.$props.currentPage+1):this.$emit("changePage",e),this.$refs.scroll_wrapper_ref.scrollTo({top:0,behavior:"auto"}))}accept(e){this.changePage(e)}searchTextChanged(e){this.searchText.length>0&&0===e.length&&(this.$emit("stopSearch"),this.previousQuery="",this.$refs.scroll_wrapper_ref.scrollTo({top:0,behavior:"auto"})),this.searchText=e}searchAccept(){this.searchText!==this.previousQuery&&(this.$refs.scroll_wrapper_ref.scrollTo({top:0,behavior:"auto"}),this.$emit("searchAccept",this.searchText),this.previousQuery=this.searchText)}itemSelected(e){this.$emit("itemSelected",e)}})||Ce);const De=(0,B.Z)(Me,[["render",_],["__scopeId","data-v-f0ac2710"]]);var $e=De,Le=s.p+"img/close.424cea41.svg";const Ze=e=>((0,a.dD)("data-v-4482c9e4"),e=e(),(0,a.Cn)(),e),He=["onClick"],Be={class:"header"},Ae=Ze((()=>(0,a._)("img",{src:Le},null,-1))),Oe=[Ae],Fe={class:"info-area"},qe={class:"left-column"},We={class:"avatar-wrapper"},Ue=["src"],je={class:"right-column"},ze={class:"stats-wrapper"},Ye={class:"stats",ref:"scroll_stats_wrapper_ref"},Re={class:"stat"},Ke=Ze((()=>(0,a._)("span",null,"Height:",-1))),Ne={class:"stat"},Qe=Ze((()=>(0,a._)("span",null,"Weight:",-1))),Je={class:"stat"},Ve=Ze((()=>(0,a._)("span",null,"Types:",-1))),Xe={class:"multi-stat"},Ge={class:"stat"},et=Ze((()=>(0,a._)("span",null,"Experience for win:",-1))),tt={class:"stat"},st=Ze((()=>(0,a._)("span",null,"Abilities:",-1))),it={class:"multi-stat"},at={class:"stat"},rt=Ze((()=>(0,a._)("span",null,"Forms:",-1))),lt={class:"multi-stat"},ot={class:"stat"},nt=Ze((()=>(0,a._)("span",null,"Moves:",-1))),ct={class:"multi-stat"};function ht(e,t,s,r,l,o){const n=(0,a.up)("ScrollbarComponent");return(0,a.wg)(),(0,a.iD)("div",{class:"pokemon-info",onClick:t[1]||(t[1]=(...t)=>e.close&&e.close(...t))},[(0,a._)("div",{class:"modal-window",onClick:(0,i.iM)((e=>!0),["stop"])},[(0,a._)("div",Be,[(0,a.Uk)((0,c.zw)(e.item?.details?.name)+" ",1),(0,a._)("div",{class:"close",onClick:t[0]||(t[0]=(...t)=>e.close&&e.close(...t))},Oe)]),(0,a._)("div",Fe,[(0,a._)("div",qe,[(0,a._)("div",We,[(0,a._)("img",{class:"avatar",src:e.avatar},null,8,Ue)])]),(0,a._)("div",je,[(0,a._)("div",ze,[(0,a._)("div",Ye,[(0,a._)("div",Re,[Ke,(0,a.Uk)(" "+(0,c.zw)(e.item?.details?.height),1)]),(0,a._)("div",Ne,[Qe,(0,a.Uk)(" "+(0,c.zw)(e.item?.details?.weight),1)]),(0,a._)("div",Je,[Ve,(0,a._)("div",Xe,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.item?.details?.types,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"stat",style:{width:"auto",top:"0"},key:e},(0,c.zw)(e?.type?.name),1)))),128))])]),(0,a._)("div",Ge,[et,(0,a.Uk)(" "+(0,c.zw)(e.item?.details?.base_experience),1)]),(0,a._)("div",tt,[st,(0,a._)("div",it,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.item?.details?.abilities,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"stat",style:{width:"auto",top:"0"},key:e},(0,c.zw)(e?.ability?.name),1)))),128))])]),(0,a._)("div",at,[rt,(0,a._)("div",lt,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.item?.details?.forms,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"stat",style:{width:"auto",top:"0"},key:e},(0,c.zw)(e?.name),1)))),128))])]),(0,a._)("div",ot,[nt,(0,a._)("div",ct,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.item?.details?.moves,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"stat",style:{width:"auto",top:"0"},key:e},(0,c.zw)(e?.move?.name),1)))),128))])])],512),e.scroll_stats_wrapper_ref?((0,a.wg)(),(0,a.j4)(n,{key:0,"scroll-element":e.scroll_stats_wrapper_ref},null,8,["scroll-element"])):(0,a.kq)("",!0)])])])],8,He)])}var dt,ut;let pt=(dt=(0,l.Ei)({components:{ScrollbarComponent:Te},props:{item:{type:Object,default:{}}},emits:["closed"],watch:{}}),dt(ut=class extends l.w3{constructor(...e){super(...e),(0,n.Z)(this,"scroll_stats_wrapper_ref",null)}get avatar(){return re(this.$props.item)}close(){this.$emit("closed")}})||ut);const mt=(0,B.Z)(pt,[["render",ht],["__scopeId","data-v-4482c9e4"]]);var gt=mt,ft=s(6265),vt=s.n(ft);class bt{constructor(){(0,n.Z)(this,"controller",void 0),this.controller=vt().create({baseURL:"https://pokeapi.co/api/v2/pokemon/",headers:{accept:"application/json"},limit:20})}async getAll(){return await this.controller.get("?limit=2000")}async getPage(e,t){return await this.controller.get(`?offset=${e*t-t}&limit=${t}`)}async getPokemonById(e){return await this.controller.get(`?offset=${e-1}&limit=1`)}async getDetailsById(e){return await this.controller.get(`${e}/`)}}var wt,It,_t=bt;let St=(wt=(0,l.Ei)({components:{PokemonTable:$e,PokemonInfo:gt},props:{},emits:[],watch:{page(e){localStorage.setItem("page",e)},rememberedPage(e){localStorage.setItem("rememberedPage",e)},isSearch(e){localStorage.setItem("isSearch",e)},isModal(e){localStorage.setItem("isModal",e)},searchText(e){localStorage.setItem("searchText",e)},currentItemId(e){localStorage.setItem("currentItemId",e)}}}),wt(It=class extends l.w3{constructor(...e){super(...e),(0,n.Z)(this,"controller",new _t),(0,n.Z)(this,"list",{}),(0,n.Z)(this,"searchList",{}),(0,n.Z)(this,"limit",20),(0,n.Z)(this,"isDownloaded",!1),(0,n.Z)(this,"page",0),(0,n.Z)(this,"rememberedPage",0),(0,n.Z)(this,"isSearch",!1),(0,n.Z)(this,"isModal",!1),(0,n.Z)(this,"currentItem",null),(0,n.Z)(this,"currentItemId",0),(0,n.Z)(this,"searchText","")}async mounted(){if(this.page=null===localStorage.getItem("page")?1:parseInt(localStorage.getItem("page")),this.rememberedPage=null===localStorage.getItem("rememberedPage")?0:parseInt(localStorage.getItem("rememberedPage")),this.currentItemId=parseInt(localStorage.getItem("currentItemId"))>=0?parseInt(localStorage.getItem("currentItemId")):-1,this.isSearch=null!==localStorage.getItem("isSearch")&&"false"!==localStorage.getItem("isSearch"),null!==localStorage.getItem("isModal")&&"false"!==localStorage.getItem("isModal")&&-1!==this.currentItemId){this.currentItem=await this.controller.getPokemonById(this.currentItemId);let e=await this.controller.getDetailsById(this.currentItemId);this.currentItem.data.results.details=e.data,this.currentItem=this.currentItem.data.results,this.isModal=null!==localStorage.getItem("isModal")&&"false"!==localStorage.getItem("isModal")}else this.isModal=null!==localStorage.getItem("isModal")&&"false"!==localStorage.getItem("isModal");this.searchText=localStorage.getItem("searchText"),this.searchText&&this.isSearch?await this.search(this.searchText):(this.searchText="",this.page?await this.changePage(this.page):await this.changePage(1))}async changePage(e){if(this.isDownloaded=!1,this.page=e,this.isSearch){let e=this.limit*this.page-this.limit;this.list.data.count=this.searchList.data.count,this.list.data.results=this.searchList.data.results.slice(e,e+this.limit)}else{this.list=await this.controller.getPage(parseInt(e),this.limit);for(let e of this.list.data.results){let t=await this.controller.getDetailsById(e.name);e.details=t.data}}this.isDownloaded=!0}async search(e){this.isDownloaded=!1,this.searchText=e,this.isSearch=!0,this.searchList=await this.controller.getAll(),0===this.rememberedPage&&(this.rememberedPage=this.page,this.searchList.data.results.length>0&&(this.page=1)),this.searchList.data.results=this.searchList.data.results.filter((t=>t.name.includes(e))),this.searchList.data.count=this.searchList.data.results.length;for(let s of this.searchList.data.results){let e=await this.controller.getDetailsById(s.name);s.details=e.data}let t=JSON.stringify(this.searchList);this.list=JSON.parse(t),await this.changePage(this.page),this.isDownloaded=!0}async stopSearch(){if(this.isSearch){this.isSearch=!1,this.searchText="";let e=0===this.rememberedPage?1:this.rememberedPage;await this.changePage(e),this.rememberedPage=0}}async itemSelected(e){this.currentItem=e,this.currentItemId=e.details.id,this.isModal=!0}})||It);const yt=(0,B.Z)(St,[["render",o],["__scopeId","data-v-eff3848c"]]);var kt,Et,Pt=yt;let xt=(kt=(0,l.Ei)({components:{MainView:Pt},props:{},emits:[],watch:{}}),kt(Et=class extends l.w3{})||Et);const Ct=(0,B.Z)(xt,[["render",r]]);var Tt=Ct;(0,i.ri)(Tt).mount("#app")},8363:function(e,t,s){e.exports=s.p+"img/unk.8cb4618d.png"}},t={};function s(i){var a=t[i];if(void 0!==a)return a.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,s),r.exports}s.m=e,function(){var e=[];s.O=function(t,i,a,r){if(!i){var l=1/0;for(h=0;h<e.length;h++){i=e[h][0],a=e[h][1],r=e[h][2];for(var o=!0,n=0;n<i.length;n++)(!1&r||l>=r)&&Object.keys(s.O).every((function(e){return s.O[e](i[n])}))?i.splice(n--,1):(o=!1,r<l&&(l=r));if(o){e.splice(h--,1);var c=a();void 0!==c&&(t=c)}}return t}r=r||0;for(var h=e.length;h>0&&e[h-1][2]>r;h--)e[h]=e[h-1];e[h]=[i,a,r]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.p=""}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,i){var a,r,l=i[0],o=i[1],n=i[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(a in o)s.o(o,a)&&(s.m[a]=o[a]);if(n)var h=n(s)}for(t&&t(i);c<l.length;c++)r=l[c],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(h)},i=self["webpackChunkpokemon_test"]=self["webpackChunkpokemon_test"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(2668)}));i=s.O(i)})();
//# sourceMappingURL=app.c86a6989.js.map