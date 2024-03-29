<!--
abbrlink: 4sdxeudx
-->

### 疑问

> 在知乎上提了个 [使用 immutable.js 后有什么优势？](https://www.zhihu.com/question/297323663)

### 自答

假如要更新 4, immutable.js 只在绿色这条线做了特殊处理, 其它紫色的部分保持不变。相当于是优化了深拷贝的实现, 数据结构方面可以想象成链表, 因此在深拷贝的时候没有递归那么耗费性能, 同时也更利于数据的获取。

因为最顶部的对象变化了, React 就提前知道需要重新渲染了(可以弥补 PureComponent 只作浅比较的不足)。不过 Updated tree 里的每一个节点还是会重新 diff 的, 不过在数据前后比较的这个层面上讲, immutable.js 的效率确实会高一些。

![](http://with.muyunyun.cn/aeef08a94abebda30e9a5fa68e201fa8.jpg)

另外, 使用 immutable.js 的话需要将所有的 state,props 都转化成其定义的形式。成本还是有的。