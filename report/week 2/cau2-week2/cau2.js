var nut_khong = document.getElementById('khong');

nut_khong.addEventListener('mouseover', function() {
  var x = Math.floor(Math.random() * window.innerWidth);
  var y = Math.floor(Math.random() * window.innerHeight);
  nut_khong.style.top = y + 'px';
  nut_khong.style.left = x + 'px';
});

function co(){
    document.getElementById('hien_text').innerHTML = " Tớ biết mà =))";
}