
# 技术栈

* react 
* redux
* react-redux
* immutable
* react-lazyload
* styled-component
* axios

# react更新流程

props或者state改变
->
调用render方法生成新的虚拟dom树
->
新旧虚拟dom树diff
->
针对差异地方进行更新
->
渲染成真实的dom树

# diff过程

## diff三个原则策略
1. 永远只比较同层节点，不会跨层级比较节点。
2. 不同的两个节点产生不同的树。这也就是上面总结的类型不相同的情况，把原来的节点以及它的后代全部干掉，替换成新的。
3. 通过 key 值指定哪些元素是相同的。

# immutable

# router
* react-router
* react-router-dom
* react-router-config

# redux
* redux
* redux-thunk
* redux-immutable
* react-redux
* immutable
