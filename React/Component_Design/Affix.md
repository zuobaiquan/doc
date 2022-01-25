<!--
abbrlink: fd4ap89c
-->

### Affix 固钉组件

固钉组件实现的效果其实是 CSS 中的 `position: sticky` 属性, `position: sticky` 本质是 `position: relative` 与 `position: absolute` 的结合体。

开发坑点: 相对定位切换到绝对定位以后 `getBoundingClientRect().top` 获取的 top 是定值, 其值始终与 `offsetTop` 的值相等，这样无法从绝对定位切换到相对定位了。

解决手段: 提供一个占位父节点, 父节点使用 `getBoundingClientRect`, 子节点上绝对定位。[demo](https://github.com/ming-cult/snake-design/blob/master/components/Affix/index.tsx#L83-L87)

### small tip

```js
window.addEventListener('scroll', fn)
```

页面在顶部, 此时刷新浏览器不会执行 fn 函数, 但是页面发生滚动后, 此时刷新浏览器会执行 fn 函数。因此根据浏览器的这个原生特性, 初始化设置「是否吸顶」的逻辑直接写在 fn 中就行，当页面发生滚动或者页面初始化都会调用。