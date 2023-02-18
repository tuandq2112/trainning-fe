# Hướng dẫn sử dụng git

## Tạo nhánh mới trên repo

<ol>
    <li>git clone ${remote url} </li>
    <li>git checkout -b ${tên nhánh}</li>
    <li>git push -u origin ${tên nhánh}</li>
</ol>

---

## Push code

<ol>
    <li>git add .</li>
    <li>git commit -m "Mô tả về commit"</li>
    <li>git push</li>
</ol>

## Pull code bài tập tuần mới

<ol>
    <li>git checkout develop</li>
    <li>git pull</li>
</ol>

## Chú ý về nộp bài tập

mọi người chú ý phần làm bài tập của mình sẽ làm trong folder report


mục đích: để tránh bị confict sau này mình với tuấn đẩy bài tập tuần tiếp theo
lên mọi người chỉ việc merge nhánh baitap sang nhánh của mình


## Lệnh merge code nhánh bài tập sang để cập nhật bài tập tuần mới
git add .
git stash
git merge baitap
:q
git stash pop