// bài 1
// Tổng các chữ số:
// cho một chuỗi gồm các ký tự số. yêu cầu đầu ra là tổng các chữ số
// ví dụ:
// "123123123" => 18
// "111" => 3
// ví dụ đầu vào: sumNumber("1");sumNumber("45");
function sumNumber(input) {
  return 0;
}
function SumNumber(str){
  let Sum=0;
  for(let i=0;i<str.length;i++){
  let digit = parseInt(str[i]);
    if (!isNaN(digit)) {
     
  Sum=Sum+digit;
}}
return Sum;}
let result=SumNumber(str)
document.getElementById('result').innerHTML="Tổng là "+result;

// bài 2
// Đếm số nguyên âm trong chuỗi. chuỗi bao gồm các chữ không in hoa
// Các nguyên âm bao gồm các ký tự u,e,o,a,i
// vd:
// "hoc javascript that la vui" => 7 nguyên âm
// "lam quen voi chuoi va mang" => 8 nguyên âm
// ví dụ testcase: sumVowel("vidu");sumVowel("colen");
function sumVowel(input) {
  return 0;
}
let mystr="xinchaohahaha";
function sumVowel(str) {
    count=0;
    for( let i=0;i<str.length;i++){
        ch=str.charAt(i);
        if(ch=='u'||ch=='e'||ch=='o'||ch=='a'||ch=='i')
        count++;}
   return count;
}
document.getElementById('vowel').innerHTML=sumVowel(mystr);
// bài 3
// Chuỗi nhị phân dài nhất
// Cho chuối nhị phân. yêu cầu trả ra chuỗi nhị phân của 1 dài nhất
// ví dụ:
// "10111011" => "111"
// "01011001" => "11"
// ví dụ đầu vào: sumNumber("111");sumNumber("101");
function binaryMax(input) {
  return "";
}
function binaryMax(str){
  let count=0;
  let max='';
  let tmp='';
  for(let i=0;i<str.length;i++){
      if(str[i]==='1')
          {count++;
          tmp+=str[i];}
      else
          {if(count>0 && tmp.length>max.length)
              max=tmp;
      count=0,tmp='';
      }
  }
      
  return max;}

document.getElementById('result').innerHTML=binaryMax(str);

// bài 4
// Tính tổng dãy số không phải là ước của 4 trong dãy.
// ví dụ:
// [1,2] => 0 (vì 1,2 đều là ước)
// [1,2,3,4] => 3 (vì 3 không là ước cộng lại là 3)
// ví dụ đầu vào: sumNotFour([1,2,3,4]);sumNotFour([1,1,1,1]);
function sumNotFour(arr) {
  return 0;
}
function sumNotFour(arr) {
  let sum=0;
  for(let i=0;i<arr.length;i++)
      {if(4%arr[i]!=0)
      {sum+=arr[i];}}
return sum;
}
document.getElementById('result').innerHTML= sumNotFour(arr);

// bài 5
// cho một mảng các số. trả ra mảng mới với các phần tử được sắp xếp tăng dần
// và mỗi ký tự chỉ xuất hiện 1 lần
// ví dụ:
// [1,1] => [1]
// [1,1,2,3,2] => [1,2,3]
// ví dụ đầu vào: uniqueArr([1]);uniqueArr([1,1,1,1,2]);
function uniqueArr(arr) {
  return [];
}
function uniqueArr(arr) {
  let setArr = new Set(arr);
  let newArr = [...setArr];
  let sortedArr = newArr.sort(function(a, b) {
    return a - b;
  });
  return sortedArr;
}

let arr = [1, 3, 8, 6, 0, 9, 8];
document.getElementById('result').innerHTML =uniqueArr(arr);
// bài 6
// cho 2 mảng có kích thước như nhau,
// hãy trả ra số các phần tử giống nhau ở cùng 1 vị trí trong mảng
// ví dụ:
// [1,2,3,4] vs [2,2,1,1] => 1 (vị trí thứ 2 giống nhau)
// [0,1,0,1] vs [0,1,2,3] => 2 (vị trí thứ 1 và 2 giống nhau)
// ví dụ đầu vào: equalTwoArr(2,[1,2],[1,3]);equalTwoArr(3,[1,2,3],[1,3,3]);
function equalTwoArr(arr1, arr2) {
  return 0;
}
function equalTwoArr(arr1, arr2) {
  let count=0;
  for(let i=0;i<arr1.length;i++){
   if( arr1[i]==arr2[i])
      {count++;}}
      
  return count;}

document.getElementById('result').innerHTML = equalTwoArr(arr1, arr2);
// bài 7
// cho 2 mảng các số và chưa được sắp xếp,
// hãy trả ra mảng mới có các phần tử là phần tử của 2 mảng trên với thứ tự tăng dần
// ví dụ:
// [5,2] và [1,2] => [1,2,2,5];
// [10,2] và [3,6,7] => [2,3,6,7,10]
// ví dụ đầu vào: mergeArr([2,3,6],[7,10]);mergeArr([2],[7,10]);
function mergeArr(arr1, arr2) {
  return [];
}
function mergeArr(arr1, arr2) {
  arr=arr1.concat(arr2);
  let sortedArr = arr.sort(function(a, b) {
      return a - b;
    });
    return sortedArr;
  }
  document.getElementById('result').innerHTML = mergeArr(arr1, arr2);
export default {
  sumNumber,
  sumVowel,
  binaryMax,
  sumNotFour,
  uniqueArr,
  equalTwoArr,
  mergeArr,
};
