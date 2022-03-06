<template>
    <span class="typing">
        <span v-html="typed"></span>
        <span class="typing-cursor" v-if="cursorVisible">|</span>
    </span>
</template>
<script>
export default {
    name:'Typing',
    props:{
        texts:{
            type:Array,
            default(){
                return []
            }
        },
        typeSpeed:{
            // 键入单个字符速度(毫秒),
            type:Number,
            default:50 
        },
        deleteSpeed:{
            // 删除单个字符速度(毫秒),
            type:Number,
            default:20 
        },
        typeDelay:{
            // 延迟键入(毫秒),
            type:Number,
            default:1000
        },
        deleteDelay:{
            // 延迟删除(毫秒),
            type:Number,
            default:1000
        },
        loopCount:{
            // 循环次数,
            type:Number,
            default:Infinity
        },
        typeCompleteCursorVisible:{
            // 输入完成显示光标
            type:Boolean,
            default:true
        }
    },
    data(){
        return {
            typed:'', // 已输入的字符
            textsIndex:0,
            typeEvent:'typing', //事件类型:'typing'-打字，'delete'-删字
            interval :null,
            speed:null,
            currentLoop:0, // 当前循环次数
            cursorVisible:true, //光标可见
        }
    },
    watch:{
        typed(val){
            if(val== this.texts[this.textsIndex]){
                // 当前文本已键入完
                clearInterval(this.interval)
                // 完成数组所有文本的键入 
                if(this.textsIndex == this.texts.length-1){
                    // 当前循环记录+1
                    this.currentLoop += 1
                    if(this.currentLoop == this.loopCount){
                        // 达到设置的循环次数直接返回
                        this.cursorVisible = this.typeCompleteCursorVisible
                        return
                    }
                } 
                console.log('this.currentLoop',this.currentLoop)
                this.typeEvent = 'delete'
                this.speed = this.deleteSpeed
                setTimeout(()=>{
                    this.setTyped()
                    console.log('switch to delete')
                },this.deleteDelay)
            }
            if(!val){
                // 当前文本已删除完
                clearInterval(this.interval)
                this.typeEvent = 'typing' 
                this.speed = this.typeSpeed

                // 当前文本删除完时，设置下一次执行键入的文本在数组"texts"中索引
                if(this.textsIndex<this.texts.length-1){
                    this.textsIndex +=1
                }else{
                    this.textsIndex = 0
                }

                setTimeout(()=>{
                    this.setTyped()
                    console.log('switch to typing')
                },this.typeDelay)
            }
        }
    },
    methods:{
        setTyped(){
            // 设置键入字符
            this.interval = setInterval(()=>{
                if(this.typeEvent == 'typing'){
                    // 键入事件
                    this.typed = this.texts[this.textsIndex].substr(0,this.typed.length + 1)
                }else{
                    // 删除事件
                    this.typed = this.texts[this.textsIndex].substr(0,this.typed.length - 1)
                }
                // console.log(this.typed,this.interval)
            },this.speed)
        }
    },
    mounted(){
        let delay = null
        if(this.typeEvent == 'typing'){
            this.typed = ''
            this.speed = this.typeSpeed
            delay = this.typeDelay
        }else{
            this.typed = this.text[this.textsIndex]
            this.speed = this.deleteSpeed
            delay = this.deleteDelay
        }
        setTimeout(()=>{
            this.setTyped()
        },delay)
    },
    destroyed () {
        clearInterval(this.interval)
    },
}
</script>
<style scoped>
.typing{
    white-space: pre;
    color: #333;
    text-align: left;
    /* vertical-align: middle; */
}
.typing-cursor {
        opacity: 1;
        -webkit-animation: blink 1s infinite;
        animation: blink 1s infinite
}
@keyframes blink {
    0%,100% {
        opacity: 1
    }

    50% {
        opacity: 0
    }
}

@-webkit-keyframes blink {
    0%,100% {
        opacity: 1
    }

    50% {
        opacity: 0
    }
}
</style>