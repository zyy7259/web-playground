# 控制语句

{#name}...{/name}
or
{#name}

## list

{#list sequence as item}
    ...
{/list}

- item_index: 代表当前遍历的下标

### range

- start..end
- 1..3 === [1,2,3]

## if/elseif/else

{#if condition}
    ...
{#elseif condition2}
    ...
{#else}
    ...
{/if}

- 使用 if 来控制属性/事件/指令
    - <div {#if active=='home'}data-home{/if}>Home</div>
    - <a {#if current<last}on-click={this.next()}{/if}>Next</a>
    - <input {#if !disabled}r-model={username}{/if}>

## include TODO 内建组件方式 ?

{#include template}

```
<script type="text/regular">
    <div class="modal">
        {#include content}
    </div>
</script>
<script>
    var Modal = Regular.extend({
        template: '#modal'
    });
    var modal = new Modal({
        data: {
            content: '<input r-model={email}>'
        }
    });
</script>
```

- [链接](#http://regularjs.github.io/reference/?syntax-zh#模板语法-include)
- template 是一个 expression, 求值结果是字符串或者AST
- 动态引入会监听 template 的数据变动, 当变化时会重新编译 template, 并插入到指定位置, 好处
    - 配置模板内容
    - 动态修改 UI
