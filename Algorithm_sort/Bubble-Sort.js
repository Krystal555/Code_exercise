/**
 * Created by ft on 2017/1/12.
 * JS笔试题：冒泡排序
 */
/*
 冒泡排序是一种简单的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果它们的顺序错误就把它们交换过来。
 走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。
 这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。
 最佳情况：O(n);最坏情况：O(n^2)；平均情况：O(n^2)
 */
function BubbleSort(arr) {
    var i,j,temp;
    var len = arr.length;
    for(i=len-1;i>=0;i--){//外层循环len-1次，每次循环结束确定一个当前序列的最大数放到当前序列末尾
        for(j=0;j<i;j++){//内层循环,当前需排序序列两两比较相邻两数
            if(arr[j]>arr[j+1]){//当前面一个数大于后面的，两者做交换
                temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}
var arr = [5,3,2,4,1,0,6,8,10,9];
console.log(BubbleSort(arr));