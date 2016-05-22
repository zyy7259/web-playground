# 指令

- 指令是针对节点的特定功能增强, 以属性的方式在节点上声明.
- link 函数
- 销毁函数

```
Regular.directive('r-html', function(elem, value) {
    this.$watch(value, function(newValue) {
        elem.innerHTML = newValue
    });
    // 可选的销毁函数
    return function() {

    }
});
Regular.directive('r-model', function(elem, expression) {
    var self = this;
    this.$watch(expression, function(newValue) {
        elem.value = newValue;
    });
    elem.addEventListener('input', function() {
        self.$update(expression, elem.value);
    });
});
```

## on-event

- 绑定dom事件或者组件事件
- on-xx={expression} or on-xx=delegateName
- 如果是表达式则运行它，如果是字符串则事件被代理到指定的组件事件上

## r-model

- 创建data和表单元素之间的双向数据绑定
- input/textarea: 简单的文本绑定
    - <textarea r-model='textarea'>haha</textarea>
    - <input r-model='input'>
- input:checkbox: 将checkbox的checked绑定到一个Boolean字段
    // checked === true
    - <input type="checkbox" checked r-model={checked}>Checked: {checked}
- input:radio 绑定到input.value
    - <input type="radio" value="option1" r-model={radio}>
- select: 绑定到select.value
    <!-- city === 1 -->
    <select r-model={city}>
        <option value="1" selected>Hangzhou</option>
        <option value="2">Shanghai</option>
        <option value="3">Guangzhou</option>
    </select>

## r-class

- r-class={ {'class1':flag1, 'class2':flag2} }
- 对象表达式，每当值为真，添加对应的键作为class
- '<i class={ {active:link.active} }></i>'

## r-style

- r-style={ {left:left+'px'} }
- 对象表达式，键是CSS名字，值就是对应的CSS值

## r-hide

- r-hide={flag} or r-hide={!flag} or r-hide='flag' or r-hide='!flag'
- 加上或者去掉'display:none'

## r-html

- 使用innerHTML来插值，unescape，小心XSS

## r-animation

on: event
emit: event
when: expression
call: expression
class: class1 class2 ..., mode
style: name1 value1, name2 value2 ...
wait: ms
