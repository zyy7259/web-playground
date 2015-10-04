# Guide

- http://regularjs.github.io/guide/zh/intro/what.html
- http://regularjs.github.io/guide/zh/concept/dirty.html
- http://regularjs.github.io/guide/zh/events/component.html
- http://regularjs.github.io/guide/zh/concept/lifecycle.html

# Syntax
- {Expression}，表达式插值
    - 文本插值，例如'<span>{username}</span>'，regularjs会创建一个textNode，并建立与表达式的单项数据绑定，当数据发生变化时，textNode的内容也会发生改变
    - 属性插值
        - 表达式属性，'<div class={clazz}></div>'
        - 字符串属性，'<div class="main {clazz}"></div>'
        - 指令属性，会将表达式传入对应directive的处理函数中，具体处理逻辑交由directive指令，只能作用于节点，不能作用于内嵌组件
            - on-event
                - 绑定dom事件或者组件事件
                - on-xx={expression} or on-xx=delegateName
                - 如果是表达式则运行它，如果是字符串则事件被代理到指定的组件事件上
            - r-model
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
            - r-class
                - r-class={ {'class1':flag1, 'class2':flag2} }
                - 对象表达式，每当值为真，添加对应的键作为class
                - '<i class={ {active:link.active} }></i>'
            - r-style
                - r-style={ {left:left+'px'} }
                - 对象表达式，键是CSS名字，值就是对应的CSS值
            - r-hide
                - r-hide={flag} or r-hide={!flag} or r-hide='flag' or r-hide='!flag'
                - 加上或者去掉'display:none'
            - r-html
                - 使用innerHTML来插值，unescape，小心XSS
            - r-animation
                on: event
                emit: event
                when: expression
                call: expression
                class: class1 class2 ..., mode
                style: name1 value1, name2 value2 ...
                wait: ms
    - this指向组件本身，所以可以调用组件的方法
    - 表达式从component.data获取，即{user}获取的是component.data.user
    - 表达式支持ES5
    - 支持内建JS
        - Array Date JSON Math NaN RegExp Object String
        - encodeURI/decodeURI encodeURIComponent/decodeURIComponent
        - parseInt/parseFloat
    - 不支持++、--、&、|
    - 不支持字面量正则表达式
- @(Expression)，只绑定一次的插值，被监听的表达式在变化一次后会被解除监听
- 过滤器filter，Expression|filterName: arg1, arg2, ..., argN
- 范围range，start..end，是一种数组的简写方式，1..3 === [1,2,3]
- 错误抑制，表达式中的undefined取值错误会被抑制
- 内嵌组件
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
- 规则Rule
    - 语法为{#name}Block{/name}或者{#name}，不能和XML标签互相打断
    - {#list sequence as item}{/list}，每次循环都会创建一个临时变量代表当前下标{item_index}
    - {#if condition}{/if}或者{#if condition}{#else condition}{/if}，condition会被强制转换为Boolean值
        - 可以使用if来控制属性、事件和指令，这些内容会根据condition被动态地添加或移除
            - <div {#if active=='home'}data-home{/if}>Home</div>
            - <a href="javascript:;" {#if current < last}on-click={this.next()}{/if}>Next</a>
            - <input {#if !disabled}r-model={username}{/if}>
    - {#include Expression}，引入内容，Expression的结果是字符串或者模板AST，每当AST的数据变动时会重新编译并刷新UI，带来好处
        - 配置模板内容（比如说实现一个modal弹窗，通常modal结构是固定的，但是内容需要后续指定，此时可以用include来实现）
        - 动态修改UI
- 注释
    - <!--  -->
    - {!  !}

#API

## 静态接口

- Component表示此接口同时属于Regular及其子类
- Regular表示此接口只属于Regular本身（一般为全局配置）

### Component.extend(options)

- 创建一个继承于Component的子组件，options的所有属性都会成为子组件的原型属性
- 通过此接口以及Component.implement扩展的原型方法，可以通过this.supr(args)调用父类同名函数

### Component.implement(options)

- 扩展Component的原型，options同Component.extend

### new Component(options)

- 实例化一个Component，options将成为component的实例属性，意味着它将覆盖extend和implement的定义，并且无法调用this.supr()

### options

- template:String|Selector|AST，模板
- config:function(data)，在compile模板之前被调用，用来初始化参数，它会收到初始化时传入的data参数，可以在此时处理组件数据
- init:function，在compile模板之后被调用，此时dom已经生成，可以使用this.$refs
- destroy:function，重写此函数来自定义回收策略，（大部分情况都不需要，凡是定义在模板中的逻辑都无需手动清理），记得调用this.supr()来调用Regular的自动回收。
- name:String，注册组件到父组件的命名空间，使其可以被内嵌使用，也可以调用Component.component来注册组件
    - Component.component可以注册任意组件，无论被注册的组件继承自何方，而且从模块化角度来讲，使用时再决定名字也是一种良好也更安全的实践。
- events:Object，声明组件初始化前需要绑定的事件，可以绑定组件事件，这样就无需重写对应的init/destroy等方法了
    - lifecycle
        - $config:function, same as component.config
        - $init:function, same as component.init
        - $destroy:function, same as component.destroy
        - $update，在一次digest阶段，如果数据有更新，那么会触发一次$update事件
- data:Object, 如果是在extend和implement中传入的data, 最终会被merge到实例化时传入的data中, 其实就是缺省data, 不过仍然建议在config中处理data的缺省字段。

### Component.directive(name, factory)

- 自定义指令，用于增强节点功能
- name:String, 指令名字
- factory:function(elem, value)
    - elem为对应的元素节点
    - value为属性值（可能是字符串或者Expression）
    - 此函数的this指向component本身
- 可以在factory里面返回一个destroy函数用于指令的销毁（比如绑定了节点事件），Regular中watch数据是不需要进行销毁的，Regular会自动清理对应的数据绑定
- 内置的r-html指令
    ```
    Regular.directive('r-html', function(elem, value) {
        this.$watch(value, function(newValue) {
            elem.innerHTML = newValue;
        });
        // 可选
        return function destroy() {
            // destroy logic
        };
    });
    // $watch同时接受字符串或者Expression，所以可以在模板里传入字符串或者插值，效果是一样的
    <div r-html='content'></div>
    <div r-html={content}></div>
    ```

### Component.filter(name, factory)

- 自定义过滤器，过滤器支持链式调用和双向过滤
- 语法为 {Epxression|filter1:arg1,arg2...|filter2:args}
- name:String, 过滤器名字
- factory:function|Object, 如果是function那么自动成为factory.get
    - factory.get:function(origin, args) 源数据的处理函数
    - factory.set:function(dest, args) 从结果数据反推源数据的处理函数
- 日期格式化过滤器
    ```
    var filter = (function() {
        function fix(str) {
            str = '' + str;
            return str.length ===1 ? '0'+str : str;
        }
        var maps = {
            'yyyy': function(date) { return date.getFullYear(); },
            'MM': function(date) { return fix(date.getMonth()+1); },
            'dd': function(date) { return fix(date.getDate()); },
            'HH': function(date) { return fix(date.getHours()); },
            'mm': function(date) { return fix(date.getMinutes()); }
        };
        var trunk = new RegExp(Object.keys(maps).join('|'), 'g');
        return function(date, format) {
            format = format || 'yyyy-MM-dd HH:mm';
            date = new Date(date);
            return format.replace(trunk, function(capture) {
                return maps[capture] ? maps[capture](date) : '';
            });
        };
    }());
    Regular.filter('format', filter);
    new Regular({
        template: '<p>{time|format}</p><p>{time|format:"yyyy-MM-dd"}</p><p>{time|format:"HH:mm"}</p>',
        data: {
            time: new Date()
        }
    }).$inject(document.body);
    ```
- 双向过滤器，用于实现数据的对流，经常用于双向绑定上，也可以用于其它数据对流场合，比如内嵌组件和父组件的双向数据绑定
    ```
    Regular.filter('join', {
        // ['1', '2', '3'] -> '1-2-3'
        get: function(src, separator) {
            return src.join(separator || '-');
        },
        // '1'-'2'-'3' -> ['1', '2', '3']
        set: function(dest, separator) {
            return dest.split(separator || '-');
        }
    });
    new Regular({
        template: "array: {array|json} <input r-model={array|join:'-'}>",
        data: {
            array: ['1', '2', '3']
        }
    }).$inject(document.body);
    ```
- 内建过滤器
    - json, 双向过滤器
        ```
        var component = new Regular({
            template: "json: {obj|json} <input r-model={obj|json}>",
            data: {
                obj: {
                    name: 'zyy'
                }
            },
            update: function() {
                this.$update('obj|json', '');
            }
        }).$inject(document.body);
        ```
    - last 获取数组最后一个元素, 单向过滤器
        ```
        new Regular({
            template: "{arr|last}",
            data: {
                arr: [1,2,3]
            }
        }).$inject(document.body);
        ```

### Component.event(name, factory)

- 自定义dom事件
- name:String, 事件名字
- factory:function(elem, fire)
    - elem为对应的节点
    - fire事件触发器
- on-enter
    ```
    var dom = Regular.dom;
    Regular.event('enter', function(elem, fire) {
        function update(e) {
            if (e.which === 13) {
                fire(e);    // 对于自定义事件, rgl里面的$event会传入fire的对象
            }
        }
        dom.on(elem, 'keypress', update);
        return function destroy() {
            dom.off(elem, 'keypress', update);
        };
    });
    new Regular({
        // 使用$event来获取fire的对象
        template: '<div><textarea on-enter={this.submit(1,$event)}></textarea></div>',
        submit: function(foo, e) {
            e.preventDefault();
            console.log(e.target.value);
        }
    }).$inject(document.body);
    ```

### Component.animation(name, factory)

- 自定义动画指令
- name:String, 动画命令名字
- factory:function(obj)
    - obj.element, 对应的节点
    - obj.para, 命令参数
    - 需返回一个函数，此函数会在该动画命令被触发时被调用，它接受一个done函数作为参数，用于标志本步骤的结束
- fade
    ```
    <script type="text/regular" id="rgl">
        <div class="box animated" r-animation="on:click; class:swing; fade:out; fade:in;">
            fade: click me
        </div>
    </script>
    <script>
    Regular.animation('fade', function(obj) {
        var param = obj.param,
            element = obj.element,
            fadein = param === 'in',
            factor = fadein ? 1.05 : 0.9;
        return function(done) {
            var opacity = fadein ? 0.01 : 1;
            var tid = setInterval(function() {
                opacity *= factor;
                if (fadein && 1-opacity < 1e-3) {
                    opacity = 1;
                    clearInterval(tid);
                    done();
                } else if (!fadein && opacity < 1e-3) {
                    opacity = 0;
                    clearInterval(tid);
                    done();
                }
                element.style.opacity = opacity;
            }, 1000/60);
        };
    });
    new Regular({
        template: '#rgl'
    }).$inject('#app');
    </script>
    ```

### Component.component(name, Constructor)

- 注册一个组件，使其可以被当做内嵌组件来使用，类似于options.name
- example
    ```
    var Pager = Regular.extend({});
    Regular.component('pager', Pager);
    var Component = Regular.extend({
        template: '<pager></pager>'
    });
    ```

### Component.use(factory)

- 插件
    ```
    <script type="text/regular" id="rgl">
        <h2>{count}</h2>
        <a href="javascript:void(0)" on-click={this.start()}>start</a>
        <a href="javascript:void(0)" on-click={this.stop()}>stop</a>
    </script>
    <script>
    function TimeoutModule(Component) {
        Component.implement({
            $timeout: function(fn, delay) {
                delay = delay || 0;
                return setTimeout(function() {
                    fn.call(this);
                    this.$update(); // enter digest
                }.bind(this), delay);
            },
            $interval: function(fn, interval) {
                interval = interval || 1000/60;
                return setInterval(function() {
                    fn.call(this);
                    this.$update(); // enter digest
                }.bind(this), interval);
            }
        });
    }
    Regular.use(TimeoutModule);
    var Counter = Regular.extend({
        template: '#rgl',
        start: function() {
            if (this.tid) return;
            this.tid = this.$interval(function() {
                this.data.count++;
            }, 100);
        },
        stop: function() {
            this.data.count = 0;
            clearInterval(this.tid);
            this.tid = null;
        }
    }).use('$timeout');
    new Counter({
        data: {
            count: 0
        }
    }).$inject('#app');
    </script>
    ```

### Regular.config(settings)

- 配置全局参数
- setting.BEGIN 模板的开符号
- setting.END 模板的关符号

### Regular.parse(templateString, settings)

- 将模板字符串解析为AST，可以使用此方法来预解析模板
- templateString:String, 待解析的模板字符串
- settings.BEGIN, 默认'{'
- settings.END, 默认'}'
- setting.stringify:Boolean, 是否stringify输出的AST，默认false

### Regular.dom

- Regular.dom.inject(element, refer, direction)
    - element: 待插入的节点
    - refer: 参考节点
    - direction:String 位置，可选['top', 'bottom', 'before', 'after']，默认'bottom'
    - component.$inject依赖此方法
- Regular.dom.on(element, event, handler)
    - 绑定节点事件，handler中event对象的属性被修正过，而且handler中this指向element本身
    - event.target
    - event.which
    - event.pageX
    - event.pageY
    - event.stopPropagation()
    - event.preventDefault()
- Regular.dom.off(element, event, handler)
    - 移除节点事件
- Regular.dom.addClass(element, className)
    - 添加class
- Regular.dom.delClass(element, className)
    - 删除class
- Regular.dom.hasClass(element, className)
    - 判断节点是否拥有某个class
- Regular.dom.text(element[, value])
    - 设置或获取textContent/innerText
- Regular.dom.html(element[, value])
    - 设置或获取innerHTML
- Regular.dom.attr(element, name[, value])
    - 设置或获取属性

## 实例接口

- component代表组件的实例
- 注意，这些公有方法都带有$前缀，意味着不建议进行重写

### component.$inject(element[, direction])

- 将组件插入到指定位置
- element:Node|Selector|false, 被插入的节点，如果传false则代表将此组件从dom中移除
- direction:String, 位置，可选['top', 'bottom', 'before', 'after']，默认'bottom'
    - top: 作为firstChild
    - bottom: 作为lastChild
    - before: 作为previousSibling
    - after: 作为nextSibling
    - false: 从dom中移除，但是并没有销毁，可以再次$inject它
- 可以多次调用$inejct来将组件从一个位置移到另一个位置

### component.$watch(expression, callback[, options])

- 注册一个监听回调，一旦expression的值发生改变，调用callback
- expression:String|Expression
    - expression会在每次脏检查时被调用，并与之前的值作比较，如果严格不相等!==，那么说明发生改变
    - Regular使用莱文斯坦距离来计算数组的差异
- callback:function(newValue, oldValue)
- 如果expression是一个Array，代表监听多个expressions，那么callback会依次收到每个expression的newValue，没有oldValue
- 此接口返回watchID:Number, 监听ID, 可以调用$unwatch来解绑

### component.$unwatch(watchid)

- 传入watchid来解绑对应的数据监听，开发者应该很少会用到它，因为Regular中所有的数据绑定都会被自动回收，除非你想在模板回收之前清除某个数据绑定。

### component.$update([expression][, newValue])

- 用于同步数据和视图
- Regular是基于脏检查的，当不是由Regular本身控制的操作引起的数据变化时，需要手动调用$update来将data同步到view。
- expression:string|Expression|Object
    - String: 此字符串会被Regular.expression处理为Expression
    - Expression: 此Expression需要有set函数
    - Object: 多重设值
- newValue: 设置的值
```
component.$update();

component.$update('user.name', 'zyy');
// 相当于
component.data.user.name = 'zyy';
component.$update();

component.$update({
    'user.name': 'zyy',
    'user.job': 'developer'
});
// 相当于
component.data.user.name = 'zyy';
component.data.user.job = 'developer';
component.$update();
```

### component.$get(String|Expression)

- 获取一个Expression的值
```
var component = new Regular({
    data: {
        user: {
            name: 'zyy',
            job: 'developer'
        },
        job: 
    }
});
component.$get('user.name + ":" + user.job');
```

### component.$refs

- 在模板中使用ref属性来标记节点或组件，在实例化后，可以通过component.$refs.ref来获取标记的节点或组件
```
var component = new Regular({
    template: '<input ref=input><pager ref=pager></pager>',
    init: function() {
        console.log(this.$refs.input);
        console.log(this.$refs.pager);
    }
});
```

### component.$on(eventName, fn)

- 监听事件
- 如果传入Object，则可以绑定多个事件

### component.$off([eventName][, fn])

- 解绑事件
- 如果同时传入eventName和fn，则移除eventName下的fn
- 如果之传入eventName，移除eventName下的所有监听器
- 如果什么都不传，那么移除所有事件

### component.$emit(eventName[, args])

- 出发指定事件
- args会作为参数传入监听器

### component.$mute(isMute)

- 使用$mute(true)来让组件失效，使其不参与脏检查
- 使用$mute(false)激活被失效的组件，激活的同时会自动进行一次data与view的同步

### component.$bind(component2, expr1[, expr2])

- 不建议使用，请使用事件通讯来处理组件之间的消息同步
- 创建组件之间的双向绑定
- component2: 待绑定的目标组件
- expr1: 此参数有多种类型
    - String|Expression: 本组件要绑定的表达式
    - Array: 表达式列表，此时不提供expr2，绑定component2对应的同名表达式
    - Object: 同时绑定多个表达式
- expr2: 目标组件要绑定的表达式，缺省为expr1
- 如果两个表达式都是setable的，那么可以实现双向绑定；否则只能实现单项绑定
- 如果两个组件在绑定时是不同步的，那么component2的数据会同步到component      // TODO 反了吧。。。

<r-content/>        // TODO ???

$body和template      // TODO ???
