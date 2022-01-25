<!--
abbrlink: nibxlyza
-->

### partition 划分算法

算法思路:

* 第一步: 找一个`枢纽值` pivot;
* 第二步: 使用一个`指针去遍历数组`, 小于 pivot 的值都放在数组左侧(pivot 的右侧);
* 第三步: 将 pivot 移到数组的`中间位置`, pivot 左侧都是比 pivot 小的值, pivot 右侧都是比 pivot 大的值; 返回 pivot 的下标;

比如针对数组 `[5,9,2,7,3]`, 分解算法步骤图:

![](http://with.muyunyun.cn/f86a764f83302f8d5bba02024e0dcb04.jpg)

### 算法实现

用了双指针。

```js
/* 分区算法 */
function partition(nums, left, right) {
  const pivot = nums[left] // 枢纽值
  let pos = left           // 用来记住最后枢纽值 pivot 应该置于的位置
  for (let i = left + 1; i <= right; i++) {
    if (nums[i] < pivot) {
      pos++
      swap(nums, pos, i)
    }
  }
  swap(nums, pos, left)
  return pos
}

/* 交换位置
  nums 数组, a, b 为下标
*/
var swap = function(nums, a, b) {
  const tmp = nums[a]
  nums[a] = nums[b]
  nums[b] = tmp
}
```

测试

```js
var testArr = [5, 9, 2, 7, 3]
var result = partition(testArr, 0, 4)

result === 2
console.log(testArr) // [3, 2, 5, 7, 9]
```

### partition 算法的作用

见 leetcode 215: 数组中的第 K 个最大元素