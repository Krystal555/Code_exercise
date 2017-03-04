/**
 * Created by ft on 2017/1/12.
 * JS笔试题：快速排序——分而治之的思想
 * "快速排序"的思想很简单，整个排序过程只需要三步：
 * （1）在数组中，选择一个元素作为"基准"（pivot）；
 * （2）所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边；
 * （3）对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。
 *  最佳情况：O(nlogn);最坏情况:O(n^2)；平均情况：O(nlogn)
 */
function quickSort(arr) {
    if(arr.length<=1) return arr;//数组长度若小于等于1，则直接返回
    var pivotIndex = Math.floor(arr.length/2);//找出数组中心点的坐标
    var pivot = arr.splice(pivotIndex,1);//找出中心点并从数组中分离
    var left =[];//定义pivot的左数组
    var right = [];//定义pivot的右数组
    for(var i=0;i<arr.length;i++){
        if(arr[i]<pivot)  left.push(arr[i]);//比pivot小的放进左数组
        else if(arr[i]>pivot) right.push(arr[i]);//比pivot大的放进右数组
    }
    return quickSort(left).concat(pivot,quickSort(right));//使用递归不断重复这个过程
}
var arr=[85,24,63,45,17,31,96,50];
console.log(quickSort(arr));
