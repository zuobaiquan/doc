<!--
abbrlink: opuodfap
-->

### 选择排序思想

1. 遍历数组选择最小值与数组第一位交换;
2. 遍历剩下的数组, 将最小值与数组第二位交换;
3. 依次类推, 完成排序;

### 代码实现

```js
var chooseSort = function(arr) {
  for (let x = 0; x < arr.length; x++) {
    let min = x
    for (let y = x + 1; y < arr.length; y++) {
      if (arr[y] < arr[min]) {
        min = y
      }
    }
    let tmp = arr[x]
    arr[x] = arr[min]
    arr[min] = tmp
  }
  return arr
}
```