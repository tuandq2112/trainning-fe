???html, css
các thuộc tính
display: flex
justify-content, text-align
padding: 1px 2px 3px 4px
margin: 1px 2px 3px 4px, auto
width, height: 100%,100vw
flex: 1
position: absolute,relative

với document.getElementById() nhớ
style
children


???Khai báo
ôn lại khai báo var,const,let?
dùng vòng lặp for,điều kiện if như nào?
khai báo biến thì giá trị mặc định của biến là gì?
nhớ về toán tử so sánh ==, ===
Một số hàm toán học Math.round, Math.ceil, Math.floor,...
parseInt
toán tử logic !,&&,||
+=
++

???String
ôn các ký tự "", '', ``
đưa giá trị của 1 biến vào chuỗi dùng ``



???array iteration
includes
find
findIndex
every
filter
some
map
reduce((a,b)): nhớ a,b là gì, có tích lũy ban đầu?
có thay đổi mảng không hay chỉ trả ra kết quả?

???array method
splice: nhớ các tham số đầu vào, thay đổi mảng gọi
slice: không thay đổi mảng gọi
join
pop
push
concat
có thay đổi mảng không hay chỉ trả ra kết quả?
arr.length

arr = [];
arr[2] = 1;
arr.length?

Object????
khai báo object
tham chiếu và tham trị
truy cập giá trị trong object
x = {a: {b:2}}
x.a.b
x["a"]
Object.create()
objectA === objectB trả về true/false trong tình huống nào
a = {};
b = a;
thay đổi giá trị của a thì b có thay đổi theo không?


????? Convert kiểu trong javascript
Có 6 kiểu
object,string,boolean,number(ôn cả NaN),null,undefined

trong phép toán LOGIC thì các giá trị nào 
được convert sang false/true

ôn lại các trường hợp như:
{},[],null,undefined,1,0,"",NaN, "false",...
nếu đưa vào if(null){} chẳng hạn thì tương ứng 
là true hay false

ví dụ:
const a = null?1:2;
const b = !undefined?1:2;
const c = -1?1:2;
thì giá trị của a,b,c là bao nhiêu?


với phép toán + thì các kiểu trên được convert 
sang giá trị tương ứng là bao nhiêu
nhớ + còn là nối chuỗi. thì trường hợp nào nỗi chuỗi 
trường hợp nào là phép cộng

1+2+"";

vd:
1+1=?
1+'1'=?
true+false=?
undefined+1=?
null+!false
...

boolean|number|object + number = ???
null|undefined + number = ???
string + number = ???
number + number = ???

Với phép -,*,/ thì là phép toán số học thì
boolean|number|object|string|null - number = kiểu gì
undefined - number = kiểu gì