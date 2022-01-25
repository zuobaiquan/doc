<!--
abbrlink: yjp6glo1
-->

在中台中 React 组件库的核心是表单组件, 由此衍生出其它和表单相关的组件。

### 表单相关

* 触发焦点事件 `focusin`, 离开焦点事件 `focusout`;
* 修改表单的 `value` 值, 直接更改元素的 `value` 值, 不要使用 `setAttribute('value', xxx)` 这种形式, 后者在某些情况并不会生效;


### 社区 form 方案调研

* [react-final-form](https://github.com/final-form/react-final-form)
* [redux-form](https://github.com/erikras/redux-form)
* [noform](https://github.com/alibaba/noform)
* [Informed](https://github.com/joepuzzo/informed): render props
* [formik](https://github.com/jaredpalmer/formik)

### 应用

* [oneForm](https://github.com/MuYunyun/oneForm/issues/1)
* [beast-form](https://uni-blog.netlify.com/posts/2019-08-19/form/): 拼多多表单库