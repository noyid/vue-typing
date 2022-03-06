# vue-typing —— 实现打字效果
vue组件，实现打字效果 [demo](https://noyid.github.io/vue-typing/dist/)

## 引用
### 方式一：单页面： script 引用 lib 目录下生成物，注意路径
```
<script src="lib/typing.umd.min.js"></script>
<link rel="stylesheet" href="lib/typing.css">
```
### 方式二：将 src/components 下的 Typing 文件夹拷贝到你的组件目录，自行修改
### 方式三：npm安装
```
npm install @noyid/vue-typing --save
```
然后使用
```
import Typing from '@noyid/vue-typing'
import '@noyid/vue-typing/lib/typing.css'
    export default {
        ...
        components:{
            Typing
        },
        ...
    }
```


## 使用示例

### 单行覆写

``` JavaScript
<Typing :loopCount="1" :texts="['进销存应用','项目管理','财务统计报表']" />
```
### 多行输入

``` JavaScript
<Typing :loopCount="1" :texts="['进销存应用\n项目管理\n财务统计报表']"/>
```

##  属性说明

|属性名|类型|默认值|说明
|:---|:---|:---|:---|
|texts       |`Array`      |   []   | 文本数组，数组长度>1时为覆写形式  
|typeSpeed   |`number`     |    50  | 键入单个字符速度(毫秒)
|deleteSpeed |`number`     |    20  | 删除单个字符速度(毫秒)
|typeDelay   |`number`     |   1000 | 延迟键入(毫秒)
|deleteDelay |`number`     |   1000 | 延迟删除(毫秒)
|loopCount      |`number`  |Infinity | 一直循环
|typeCompleteCursorVisible  |`boolean`  | true | 输入完成是否显示光标
