

1. 安装  cnpm i react-redux -S


2. React-Redux 将所有组件分成两大类：
UI 组件（presentational component）
容器组件（container component）


3. UI 组件 
只负责 UI 的呈现，不带有任何业务逻辑
没有状态（即不使用this.state这个变量）
所有数据都由参数（this.props）提供
不使用任何 Redux 的 API

因为不含有状态，UI 组件又称为"纯组件"，即它纯函数一样，纯粹由参数决定它的值。


4. 容器组件  

负责管理数据和业务逻辑，不负责 UI 的呈现
带有内部状态
使用 Redux 的 API

PS: UI 组件负责 UI 的呈现，容器组件负责管理数据和逻辑

外面是一个容器组件，里面包了一个UI 组件

<Container>
    <UI/>
</Container>
容器组件负责与外部的通信，将数据传给UI组件，由UI组件渲染出视图

所有的 UI 组件都由开发者 提供  容器组件则是由 React-Redux 自动生成


5. 生成容器组件  connect  
React-Redux 提供connect方法，用于从 UI 组件生成容器组件 
const VisibleTodoList = connect()(TodoList);   

 高阶组件   必须把组件当做参数   容器组件 
 高阶函数   这个函数必须把组件当做参数 这类 函数 ===> 高阶函数   connect 

 

（1）输入逻辑：外部的数据（即state对象）如何转换为 UI 组件的参数
（2）输出逻辑：用户发出的动作如何变为 Action 对象，从 UI 组件传出去。

mapStateToProps和mapDispatchToProps

mapStateToProps 负责输入逻辑，即将state映射到 UI 组件的参数（props）
mapDispatchToProps 负责输出逻辑 点击事件 操作映射成 Action 


6. mapStateToProps
建立一个从（外部的）state对象到（UI 组件的）props对象的映射关系 
负责把store state 通过props 传递给 UI 组件 
必须 返回一个对象

mapStateToProps会订阅 Store，每当state更新的时候，就会自动执行，
重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染 
store.subscribe  替换 

7.mapDispatchToProps
用来建立 UI 组件的参数到store.dispatch方法的映射 负责发出action  
它定义了哪些用户的操作应该当作 Action，传给 Store。它可以是一个函数，也可以是一个对象。


8.Provide 
React-Redux 提供Provider组件，可以让所有 容器组件拿到state。 store 
所有子组件都可以获取到 context从而得到 store 