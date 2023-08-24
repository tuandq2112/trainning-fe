const data = [
  {
    id: 1,
    first: "Ngô",
    last: "Hiếu",
    email: "Ngohieu1811@gmail.com",
    phone: "0961745160",
    location: "Hai bà trưng",
  },
  {
    id: 2,
    first: "Đỗ",
    last: "Tuấn",
    email: "tuando@gmail.com",
    phone: "012345678",
    location: "Hà Nội",
  },
  {
    id: 3,
    first: "Quang",
    last: "Hiếu",
    email: "quanghieu@gmail.com",
    phone: "0988888888",
    location: "Hai bà trưng",
  },
  {
    id: 4,
    first: "Quốc",
    last: "Tuấn",
    email: "tuanquoc@gmail.com",
    phone: "016222222222",
    location: "Cầu Dền",
  },
];
function getData() {
  const inputs = document.getElementsByTagName("input");
  return {
    first: inputs[0].value,
    last: inputs[1].value,
    email: inputs[2].value,
    phone: inputs[3].value,
    location: inputs[4].value,
  };
}
function getNodeRow(idx, data) {
  const payload = data ? data : getData();
  const tr = document.createElement("tr");
  tr.innerHTML = `
      <td>${idx}</td>
      <td>${payload?.first}</td>
      <td>${payload?.last}</td>
      <td>${payload?.email}</td>
      <td>${payload?.phone}</td>
      <td>${payload?.location}</td>
  `;
  const lastTd = document.createElement("td");
  const btn = document.createElement("button");
  btn.innerText = "Edit";
  btn.onclick = editLine(tr, idx);
  lastTd.append(btn);
  tr.append(lastTd);
  return tr;
}
function editLine(tr, idx) {
  return function () {
    const newTr = getNodeRow(idx);

    document.getElementById("data-table").replaceChild(newTr, tr);
  };
}
function addLine(data, idx) {
  tr = getNodeRow(idx, data);

  document.getElementById("data-table").appendChild(tr);
}

function updateTable() {
  for (let i = 0; i < data.length; i++) {
    addLine(data[i], i);
  }
}

document.getElementById("button").onclick = function onCreate() {
  addLine(data);
};

updateTable();

10 html css (4,3,3)
1,
a, thêm c1 


/1, chọn phương án đúng để chữ "Cho tôi ra giữa" nằm giữa thẻ div
a, thêm justify-content:center vào style của div
a, thêm padding-left: auto;padding-right: auto vào style của div
.a, thêm text-align:center vào style của div
a, thêm align-items: center vào style của div

/2. cần bổ sung các css nào vào style của div để được kết quả như hình vẽ
a, padding: 0 10px; border-radius: 100%;text-align: center;
b, padding: 10px; border-radius: 100%;text-align: center;
c, padding: 0 10px; border-radius: 30px;text-align: center;
d, padding: 10px 0; border-radius: 30px;text-align: center;

/3. chọn phương án đúng. thêm đoạn css nào vào div(a)
.a, padding: 10px 40px
b, padding: 40px 10px 40px 10px
c, padding: 40px;padding-top:10px;overflow: hidden;
.d, padding: 10px;padding-right: 40px;padding-left: 40px;

/4. chọn phương án đúng. thêm css nào vào div(c)
a,position: absolute;top:0;right:0;
b,position: absolute;top:0;left:auto;
.c,position: absolute;top:0;right:0;
.d,position: absolute;right:0;margin-top: -10px;

/5. chọn phương án đúng. thêm css nào vào div(a)
a, flex: 1
a, width: 100%
a, width: auto
a, padding: auto

/6. chọn phương án đúng. thêm css nào vào div(c)
a, bottom:0;left:0px;right: 0;
a, bottom:0;width: 100%;
a, bottom:0;left: 0;
a, bottom:0;flex: 1;

/7, chọn phương án đúng để xuất hiện 3 hộp màu nằm ngang
.a, bỏ position: absolute ở div(b)
.b, thêm margin-left: 100px vào div(b)
c, bỏ position: relative ở div(b)
.d, thêm margin-left: 100px vào div(d)


/8, chọn phương án đúng để (hộp B) nằm góc bên phải
.a, thêm justify-content: space-between vào style div (a)
b, thêm justify-content: space-around vào style div (a)
.c, thêm margin-right: auto vào style div con (hộp A)
.d, thêm margin-left: auto vào style div con (hộp B)

/9, chọn phương án đúng để hai vùng đỏ và xanh hiển thị cao bằng nhau
.a, thêm vào style div(b) margin-top: -50px
b, thêm vào style div(b) top: -50px
.c, thêm vào style div(a) height: 50px
a, thêm vào style div(a) và div(b) margin-top: -25px

/10, dùng đoạn javascript nào sau đây để đổi màu toàn bộ vùng đỏ thành xanh
.a, document.getElementById("a").children[0].style.background = "blue";
b, document.getElementById("b").background = "blue";
c, document.getElementById("a").style = {background: "blue"}
.d, document.getElementById("b").style.background = "blue";

/11, chọn phương án để cùng màu xanh chiếm hết vùng màu đỏ
a, thêm vào div(a) style position: relative;
.b, bỏ style position: relative; ở div(b) và thêm vào c8a style position: relative;
c, thêm style width: 100% ở div div(c)
.d, thêm style width: 100% vào div div(b)

// ++++++++++++++++
12/
let a = 1;
let b = -1;
b += a - b;

chọn đáp án đúng:
.a, b=1;
b, b=2;
c, b=3;
d, b=4;

13/ 
let a = 1, b;
b = a + b;
chọn đáp án đúng:
a, b=1;
b, b='01';
c, lỗi không chạy được;
.d, NaN;

14/
var a = 1, b = a;
a += a + b;
chọn đáp án đúng:
a, a=1;
b, a=2;
.c, a=3;
d, a=0;

15/ 
let a= 1;
let b= '1';
Kết quả của phép tính a-b là:
.a, 0
b, lỗi
c, "0"
d, ""


15/ 
let a=1;
let b='1';
Kết quả của phép logic a==b là:
.a, true
b, false


16, 
let a=true;
let b=a+true;
a+=a-b;
Giá trị của a là:
a, false
b, true
.c, 0
d, 1

17
let a='1';
let b=false;
a = a + b;
Giá trị của a là:
a, true
b, '1'
.c, 1
d, '0'

18,
let a=null,b,c="",d="1",e="a",f=1;
Cho biết kết quả của 4 phép tính sau:
a+b;c-d;d-!e;d+f;

a, 0, -1, NaN, "11"
b, NaN, NaN, NaN, "11"
.c, NaN, -1, 1, "11"
d, 0, NaN, NaN, 2

19
let a=null,b=true,c="true",d="11";
!a+b;b+c;a+b+!!c

.valueOf.apply.apply.

16/ 
let a=2;
let b = '3';
a*b;

17/
let a = 1;
let b = 1;
if(a-1){
  b=2;
}else{
  b=3;
}

17/
let a = 1;
if(a-1){
  b=2;
}else{
  b=3;
}

17/
let a = 1;
if(a-1){
  b=2;
}else{
  b=3;
}


//20 array
19,
const a = {};
a.b?

//////
24,
const a = {first: "a"};
a["first"] + " " + a.last 

25,
const a = {a: "1",b:"2"};
a["b"] = {a: "a",b:"b"};
a[b.c]?


////// --------------
26
[1,2,3,"4"].include("1")
Kết quả của đoạn code trên là:
a, true
b, false
.c, chương trình bị lỗi

27
[{a:1,b:"a"},{a:2,b:"b"},{a:3,b:"c"}].find((item) => item.a === 2 || item.b)
kết quả của đoạn code trên là:
.a, {a:1,b:"a"}
b, {a:2,b:"b"}
c, {}
d, undefined


28
[1,2,3,1,2,3].findIndex((item) => item === "3")
kết quả của đoạn code trên là:
a, 2
b, 5
c, 0
.d, -1

29
[1,2,3,4,5,6].every((item) => Math.round(item / 3))
kết quả của đoạn code trên là
a, true
.b, false


30
[null,"",false,undefined,"0",NaN].filter((item) => !!item).length
kết quả của đoạn code trên là
a, 0
b, 5
c, 6
.d, 1

31
[0,1,2,3].some(i => !!i)
kết quả của đoạn code trên là
.a, true
b, false


32
[1,2,3,2,1].map(i => i-"1").filter(i => !!i)
kết quả của đoạn code trên là
a, [1,2,3,2,1]
b, [0,1,2,1,0]
c, []
.d, [1,2,1]

33
[1,2,3,4,5].map(i => Math.ceil(i/3))
kết quả của đoạn code trên
a, [0,0,0,1,1]
.b, [1,1,1,2,2]
c, [1,1,1,1,1]
d, [1,1,2,2,2]

34
[1,2,3,4].reduce((a,b) => a + b,"")
kết quả của đoạn code trên
a, 10
b, "10"
c, 1234
.d, Không có đáp án đúng

35
[0,1,2,3,4].reduce((a,b) => a + b)
kết quả của đoạn code trên
.a, 10
b, NaN
c, 1234
d, "1234"

36
[1,2,3,4].reduce((a,b) => b%2?b:a)
kết quả của đoạn code trên là:
a, 1
b, 2
.c, 3
d, 4


//
37
const a = [1,2,3,4];
a.splice(1,2,3,4)
Giá trị của mảng a sau đoạn chương trình trên là:
a, [1,2,3,4]
b, [1,,,4,3,4]
.c, [1,3,4,4]
d, [1,4]

38
[1,2,3].join("1")
kết quả của đoạn code trên là:
a, '1,2,3'
b, "1112131"
c, "123"
.d, "11213"

39
const arr = [];
const obj = {n: arr};
arr.push(obj.n.length);
arr.push(arr.length);

giá trị của obj.n sau đoạn code trên:
.a, [0,1]
b, [2,2]
c, []
d, [0,0]

40
const a1 = [1,2];
const a2 = [3,4];
a1.pop();
a1 = a2.concat(a1);
Giá trị của a1 sau chương trình trên:
a, [3,4,1]
b, [3,4,1,2]
c, [3,4,null]
.d, Chương trình bị lỗi không chạy được

41
const a1 = [1,2,3];
a1.slice(2)
Giá trị của a1 sau đoạn chương trình trên:
.a, [1,2,3]
b, [1]
c, [3]
d, Chương trình bị lỗi

42
const arr = [1,2,3,4,5];
let a = 0;
for(let i =0;i<arr.length;i++){
  a++;
  arr.pop();
}
Kết quả của a sau đoạn chương trình trên
a, 5
b, 0
.c, 3
d, 2

43
const arr = [];
arr[0] = 1;
arr[1] = 2;
arr[3] = 3;
Giá trị của arr.length sau đoạn chương trình trên là
a, 3
.b, 4
c, 0
d, undefined

44
const x = {a: {b: 1},c:2};

để truy cập giá trị của b=1 cách nào sau đây đúng
.a, x.a.b
b, x["a.b"]
.c, x["a"].b
d, x[a["b"]]
e, x[a.b]
.f, x["a"]["b"]

///////////

45
const a = {}
const b = a;
a.x = 2;
giá trị của b.x sau đoạn chương trình trên là:
.a, 2
b, null
c, undefined
d, {}

46
const a = {}
const b = a.x;
giá trị của b sau đoạn chương trình trên là:
a, 2
b, null
.c, undefined
d, {}


47
const a = {}
const b = Object.create(a);
a.x = 2;
giá trị của b sau đoạn chương trình trên là:
a, 2
b, null
c, undefined
.d, {}

48
const a = {};
const b = {};
Kết quả của phép logic a == b sau đoạn chương trình trên là:
a, true
.b, false
c, Lỗi chương trình

49
const a = {};
function mix(input){
  input.x = "MIX"
  return input;
}
const b = mix(a);
Kết quả của phép logic a === b sau đoạn chương trình trên là:
.a, true
b, false
c, Lỗi chương trình

50
let a = {}
const b = {y: a}
a = 2;
giá trị của b.y sau đoạn chương trình trên là:
.a, {y: {}}
b, {y: 2}
c, {y: null}
d, lỗi chương trình