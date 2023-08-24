function $(id) {
  return document.getElementById(id);
}

$("upload").onclick = function () {
  $("file").click();
};

$("file").onchange = function (e) {
  if (!e.target.files?.[0]) return;
  const formData = new FormData();
  formData.append("file", e.target.files[0]);

  /// sửa lại chỗ này
  fetch("apiupload", {
    method: "get",
    body: formData,
    headers: {},
  })
    .then((res) => {
      console.log(res, "response upload");
    })
    .catch((e) => {
      console.log(e, "Error");
    });
};

$("export").onchange = function (e) {
  /// sửa lại chỗ này
  fetch("apiexport", {
    method: "get",
    body: {},
    headers: {},
  })
    .then((res) => {
      console.log(res, "response export");
    })
    .catch((e) => {
      console.log(e, "Error");
    });
};

$("submit").onchange = function (e) {
  /// sửa lại chỗ này
  fetch("apisubmit", {
    method: "post",
    body: {},
    headers: {},
  })
    .then((res) => {
      console.log(res, "response export");
    })
    .catch((e) => {
      console.log(e, "Error");
    });
};
