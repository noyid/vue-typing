<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="60">
    <h1>Typing —— 打字效果</h1>
    <p>模拟打字时文字输入删除效果</p>
    <h3>单行覆写</h3> 
    <div>
        <button @click="replay(1)">replay</button>
    </div>
    <div style="min-height:24px">
        <Typing 
            style="font-weight:bold;color:#06f" 
            v-if="replay_1"
            :loopCount="1"
            :texts="['进销存应用','项目管理','财务统计报表']" />
    </div>
    
    <h3>多行输入</h3>
    <div>
        <button @click="replay(2)">replay</button>
    </div>
    <div style="min-height:68px">
        <Typing 
            style="font-weight:bold;color:#06f" 
            v-if="replay_2"
            :loopCount="1"
            :texts="['进销存应用\n项目管理\n财务统计报表']"/>
    </div>

     <h3>无限循环</h3>
    <div>
        <Typing 
            style="font-weight:bold;color:#06f" 
            :texts="['进销存应用\n项目管理\n财务统计报表']"/>
    </div>
  </div>
</template>

<script>
    import Typing from './Typing/index.vue'
    export default {
        title:'打字效果',
        desc:'模拟打字时文字输入删除效果',
        components:{
            Typing
        },
        data(){
            return {
                replay_1: true,
                replay_2: true,
            }
        },
        methods:{
            replay(index){
                this['replay_'+index] = false;
                setTimeout(()=>{
                    this['replay_'+index] = true;
                })
            }
        }

    }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button{
    margin-bottom:20px;
}
</style>
