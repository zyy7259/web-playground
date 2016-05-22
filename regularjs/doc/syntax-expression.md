# 表达式

{Expression}

## 插值

### 文本插值

- 例如'<span>{username}</span>'
- regularjs会创建一个textNode，并建立与表达式的单项数据绑定
- 当数据发生变化时，textNode的内容也会发生改变

### 属性插值

- 字符串属性，'<div class="main {clazz}"></div>'
- 表达式属性，'<div class={clazz}></div>'
- 指令属性，会将表达式传入对应directive的处理函数中，具体处理逻辑交由directive指令，只能作用于节点，不能作用于内嵌组件
    - 例如r-model

## 语法支持

- 表达式中的this指向组件本身，所以可以调用组件的方法
- 表达式的数据从component.data获取，即{user}获取的是component.data.user
- 错误抑制，表达式中的undefined取值错误会被抑制
- 支持内建JS
    - Array Date JSON Math NaN RegExp Object String
    - encodeURI/decodeURI encodeURIComponent/decodeURIComponent
    - parseInt/parseFloat
- 支持ES5
- 不支持++、--、&、|
- 不支持字面量正则表达式

## 一次性绑定

- @(Expression)，被监听的表达式在变化一次后会被解除监听
- 可以在任意环境使用
- 可以在$watch里面使用

## 过滤器 filter

- Expression|filterName: arg1, arg2, ..., argN
