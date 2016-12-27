# 着色器 shader

在三维场景中, 仅仅用线条和颜色把图形画出来是远远不够的, 必须考虑, 比如, 光线照上去之后, 或者观察者的视角发生变化, 对场景会有些什么影响. 着色器可以高度灵活地完成这些工作, 提供各种渲染效果.

- 顶点着色器进行的是逐顶点的操作
  - 顶点着色器 Vertex shader: 用来描述顶点特性 (如位置/大小等) 的程序
- 片元着色器进行的是逐片元的操作
  - 片元着色器 Fragment shader: 进行逐片元处理过程 (如光照) 的程序. 其作用是处理片元, 使其显示在屏幕上.
  - 片元就是显示在屏幕上的一个像素 (严格意义上说, 片元包括这个像素的位置, 颜色和其它信息)
- 顶点着色器会先执行, 将处理后的信息传递给片元着色器, 然后片元着色器再执行. 片元着色器接收到的是经过光栅化处理后的片元值.

JS 会将字符串形式的着色器代码传给 WebGL 系统, 并建立着色器. 着色器运行在 WebGL 系统中, 而不是 JS 程序中. 所以 WebGL 程序包括运行在浏览器中的 JS 和运行在 WebGL 系统的着色器程序这两个部分.

## 齐次坐标

- 齐次坐标能够提高处理三维数据的效率
- 齐次坐标 (x, y, z, w) 等价于三维坐标 (x/w, y/w, z/w).
- 所以如果齐次坐标的第四个分量是 1, 可以将它当做三维坐标来使用.

## WebGL 坐标系统

X 轴是水平的, 正方向为右
Y 轴是垂直的, 正方向为上
Z 轴是垂直于屏幕的, 正方向为外

## 将位置信息从 JS 传给顶点着色器

- attribute 变量传输的是与顶点相关的数据. 比如说坐标
- uniform 变量传输的是对于所有顶点都相同 (或与顶点无关) 的数据, 比如说颜色

多基本缓冲区模型

# 缓冲区 buffer

- 颜色缓冲区 第二章
- 深度缓冲区 第七章
- 模板缓冲区 不涉及

使用缓冲区可以一次性将多个顶点传入着色器

1. 创建缓冲区对象 gl.createBuffer()
2. 绑定缓冲区对象 gl.bindBuffer(target, buffer), target 表示缓冲区对象的用途
3. 将数据写入缓冲区对象 gl.bufferData(target, data, usage), 将数据写入绑定在 target 的缓冲区
4. 获取 attribute 变量的存储位置 gl.getAttribLocation(gl.program, 'a_Position')
5. 将缓冲区对象分配给 attribute 变量 gl.vertexAttribPointer(attribute, size, type , normalized, stride, offset)
6. 开启 attribute 变量 gl.enableVertexAttribArray(attribute)
7. 设置背景色 gl.clearColor(0.0, 0.0, 0.0, 1.0)
8. 清空 canvas gl.clear(gl.COLOR_BUFFER_BIT)
9. 绘制 gl.drawArrays(gl.POINTS, 0, 3)

为顶点的每种数据建立一个缓冲区, 然后分配给对应的 attribute 变量, 就可以向顶点着色器传递多份逐顶点的数据信息了.

## 清空缓冲区

gl.clear(buffer) 清空颜色缓冲区 (color buffer) 将会清空绘图区域

- buffer 可以用 | 来指定多个缓冲区
  - gl.COLOR_BUFFER_BIT
  - gl.DEPTH_BUFFER_BIT
  - gl.STENCIL_BUFFER_BIT

绘制操作是在颜色缓冲区中进行的, 绘制结束后系统将缓冲区中的内容显示在屏幕上, 然后颜色缓冲区就被 WebGL 重置为默认的颜色 (transparent), 其中的内容也会丢失. 所以每次绘制之前都要调用 gl.clear 来用指定的背景色清空 canvas

webgl 只能绘制三种图形: 点, 线段和三角形. 你可以使用这些基本的图形来绘制出任何东西

# 光栅化

光栅化就是把顶点数据转换为片元的过程. 片元中的每一个元素对应于帧缓冲区中的一个像素. 每一个片元会被分配一个颜色值和一个深度值.

在 WebGL 中, 如果顶点着色器与片元着色器中有类型和命名都相同的 varying 变量, 那么顶点着色器赋给该变量的值会被自动地传入片元着色器
