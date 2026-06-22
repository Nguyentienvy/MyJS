const title = document.getElementById("title");
const btnChange = document.getElementById("btnChange");

btnChange.addEventListener("click", function () {
  // TODO: đổi title thành "Học DOM thật vui!"
  title.textContent = "Học DOM thật vui!";

  // TODO: đổi màu chữ hoặc nền
  title.style.color = "white";
  title.style.backgroundColor = "tomato";
  title.style.padding = "10px";
});
