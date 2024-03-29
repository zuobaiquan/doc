<!--
abbrlink: t6c2k7h3
-->

### 快速排序思想

1. 找到一个基准点;
2. 比该基准点值小的值移到其左侧, 比该基准点大的值移到其右侧;
3. 遍历左侧的值和右侧的值, 重复上述 1, 2 操作;

### 代码实现

```js
function quickSort(arr) {
  if (arr.length === 0) {
    return []
  }
  const basicValue = arr[Math.floor((arr.length - 1) / 2)] // 随意取, 这里取中间
  const left = []
  const right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < basicValue) {
      left.push(arr[i])
    }
    if (arr[i] > basicValue) {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(basicValue, quickSort(right))
}
```

### 求快速排序时间复杂度

先记住 O(NlogN), [具体证明](https://www.zhihu.com/question/22393997), someday to understand, o(╯□╰)o