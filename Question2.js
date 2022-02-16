/*Write a program to check  whether two array has the same elements in the same order. 
  May be Cyclic
-  examples : take array  [1,2,3,4].
The test should return true for [2,3,4,1], [3,4,1,2], [4,1,2,3] but not for [1,3,2,4], [1,4,2,3] or [1,2,3,5]  */
 const arr1=[1, 2, 3, 4];
 const arr2=[3, 4, 1, 2];
 const arr3=arr2.concat(arr2);
 let k=0;
 for(let i=0,j=0;i<arr3.length;i++){
     if(arr3[i] == arr1[j]){
         j++;
         if(j==arr1.length){
             k++;
             break;
         }
     }
 }
 if(k==0)
 console.log("not same");
 else
 console.log("same");

 