# DOM 事件

- 节点上以 on- 开头的属性都会被作为 DOM 事件来处理
- 其实是一种特殊的指令, 使用正则 /on-\w+/ 作为指令名, 从而匹配出以 on- 开头的属性来作为事件处理
- 首先会去检查是否注册了自定义事件, 如果没有, 无论这个事件浏览器是否支持, 都会通过 addEventListener 来走 DOM 事件流程

## 基本 DOM 事件

```
on-click={Expression}
```

- 当事件触发时, Expression 将会被运行一次
- 如果 expression===false, 时间将会被阻止, 也可以通过 $event.preventDefault() 来阻止事件.

## 事件代理

- 使用 delegate- 来替代 on-
- regularjs 会将事件绑定到组件的第一个父元素
- 如果组件结构复杂, 避免代理高频触发的事件, 如 mouseover 等
- 对于不能冒泡的事件不起作用, 比如低版本 IE 的 change, select 等
- 唯一作用就是在超大列表里面避免绑定过多的事件

## 自定义 DOM 事件

```
var dom = Regular.dom;
Regular.event('enter', function(elem, fire) {
    function update(event) {
        if (event.which === 13) {
            event.preventDefault();
            fire(event);
        }
    }
    dom.on(elem, 'keypress', update);
    // destroy function
    return function() {
        dom.off(elem, 'keypress', update);
    };
});
```

```
<textarea on-enter={this.submit($event)}></textarea>
```

## $event 对象

- 在事件触发时, 会在 data 上临时定义一个变量 $event 代表事件对象, 所以可以在模板里面直接使用
- $event 是修正过的事件对象, 包括属性
    - origin: 绑定节点
    - target: 触发节点
    - preventDefault: 阻止事件默认行为
    - stopPropagation: 阻止事件冒泡
    - which
    - pageX
    - pageY
    - wheelDalta
    - event: 原始事件对象
- 对于自定义事件, $event 为 $emit 传入的对象

# 组件事件

## 接口

- $on
- $off
- $emit

## 模板里声明组件事件绑定

- 所有以 on- 开头的属性都会被作为组件事件绑定处理 (其它属性会座位 data 的属性)

## 组件生命周期事件

- $config: 在 compile 之前触发, 此时可以预处理组件数据
- $init: 在 compile 之后触发, 此时 DOM 结构已经生成, 可以使用 ref
- $destroy: 在组件被 destory 时触发

## 回调方式

- 如果传入的是 expression, 一旦事件触发, 会运行一次表达式
    ```
    <div on-click={this.remove(index)}></div>
    ```
    ```
    var Component = Regular.extend({
        template: '#tpl',
        remove: function(index) {
            this.data.list.splice(index, 1)
        }
    });
    ```
- 如果传入的是非表达式, 相当于触发组件的事件, 可以使用 $on 来监听此事件
    ```
    <div on-click='remove'></div>
    ```
    ```
    var Component = Regular.extend({
        template: '#tpl',
        init: function() {
            this.$on('remove', function($event) {
                // logic
            });
        }
    });
    ```
