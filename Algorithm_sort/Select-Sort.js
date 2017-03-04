/**
 * Created by ft on 2017/1/13.
 * 选择排序(Selection-sort)是一种简单直观的排序算法。它的工作原理：首先在未排序序列中找到最小（大）元素，存放到排序序列的
 * 起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕。
 * 最佳情况：O(n^2),最坏情况：O(n^2),平均情况：O(n^2)
 */
function selectSort(arr){
    if(arr.length<=1) return arr;
    for(var i=0;i<arr.length-1;i++){//每次循环找出未排序序列的最小值放在该位置上
        var min=arr[i],temp;//默认未排序序列的首位为最小值并保存
        for(var j=i+1;j<arr.length;j++){//从未排序序列第二位开始依次与保存的最小值作比较
            if(arr[j]<min){//若小于min，则交换两者位置
               temp=min;
                min=arr[j];
                arr[j]=temp;
            }
        }
        arr[i]=min;//遍历完一轮后找到当前未排序序列最小值放在序列首位上
    }
    return arr;
}
var arr=[85,24,63,45,17,31,96,50];
console.log(selectSort(arr));//[ 17, 24, 31, 45, 50, 63, 85, 96 ]