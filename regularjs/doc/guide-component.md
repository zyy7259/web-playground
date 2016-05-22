#

## mixin

使用 Component.implement 来避免深层的继承

## supr

通过 Component.extend 和 Component.implement 扩展的方法内部可以通过 this.supr 来调用父类同名函数.

## 初始化组件

### 定义组件

```
var Pager = Regular.extend({
    name: 'pager'
});
```

### js 初始化

```
var pager = new Pager({
    data: {
        current: 1
    }
});
pager.$on('nav', cb);
```

### 模板初始化

```
<pager current=1 on-nav={cb($event)}/>
```

- 默认传入的属性都会成为 data 的成员
- value 缺省值为 true
- 连缀格式转驼峰
- on-event 自动转为组件事件绑定

- 这种方式就是内嵌组件 TODO
    - http://regularjs.github.io/reference/?syntax-zh#模板语法-内嵌组件
    - 在编译阶段（AST->DOM），每当regular碰到一个节点，例如'<pager total={total} current={current}/>'，会发生以下过程
    - 查找当前命名空间下是否注册过名字为'pager'的组件
        - 如果找到，那么视其为内嵌组件
            - 创建空对象data
            - 如果内嵌组件有子元素，字元素会作为内嵌组件的实例的$body属性，可以配合#include使用   // TODO ???
            - 遍历内嵌组件的每一个属性
                - 如果是事件on-xx，则注册为组件事件，相当于pager.$on(xx,...)
                - 如果不是事件，则作为data的一个属性；如果为插值，则建立父组件与子组件的双向数据绑定
            - 初始化内嵌组件，data会作为参数传入
            - 将内嵌组件插入到父组件的内容中
            - 注意，内嵌组件无法使用指令，因为它并不是一个真实节点，而是一种抽象
        - 如果没有找到，那么
            - 创建一个节点document.createElement(tagName)
            - 如果有子元素，编译子元素并塞入节点
            - 遍历属性值，根据插值、指令和事件分别处理它们
            - 将节点插入到父组件

## ref TODO

## isolate TODO
