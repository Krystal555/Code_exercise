/**
 * Created by ft on 2017/1/13.
 * 二分插入（Binary-insert-sort)排序是一种在直接插入排序算法上进行小改动的排序算法。
 * 其与直接插入排序算法最大的区别在于查找插入位置时使用的是二分查找的方式，在速度上有一定提升。
 *最佳情况：O(nlogn), 最差情况:O(n^2),平均情况:O(n^2)，占额外空间：O(1)
 */
function BinaryInsertSort(arr) {
    if(arr.length<=1) return arr;//数组长度小于等于1直接返回
    //取出下标1的元素开始插入（因为下标0的元素可以认为已经被排序），依次循坏插入下标为arr.length-1的元素
    for(var i=1;i<arr.length;i++){
        var temp=arr[i];//把要插入的元素作为临时变量保存
        var left=0,right=i-1;//定义已排序元素的左右指针
        while(left<=right){
            var middle=Math.floor((left+right)/2);//取得已排序元素中间点的下标
            if(arr[middle]<temp) left=middle+1;//若中间值小于待插元素，则左指针下标+1
            else right = middle-1;//若中间值大于待插元素，则右指针下标-1
        }
        //若左指针下标大于右指针下标，则表明已找到待插元素的位置，即左指针指向的位置
        for(var j=i;j>left;j--){ //将已排好序的元素依次往后挪一位直到待插元素能插入
            arr[j]=arr[j-1];
        }
        arr[left]=temp;
    }
    return arr;
}
var arr=[85,24,63,45,17,31,96,50];
console.log(BinaryInsertSort(arr));//[ 17, 24, 31, 45, 50, 63, 85, 96 ]
