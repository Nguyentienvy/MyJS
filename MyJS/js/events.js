// 1. CLICK: bấm nút → hiện thông báo / đổi chữ
const btnClick = document.getElementById("btnClick");
const clickResult = document.getElementById("clickResult");

btnClick.addEventListener("click", function () {
  clickResult.textContent = "Bạn vừa bấm nút! 🎉";
});

// 2. CHANGE: chọn màu → đổi văn bản kết quả
const colorSelect = document.getElementById("colorSelect");
const colorResult = document.getElementById("colorResult");

colorSelect.addEventListener("change", function () {
  const chosenColor = colorSelect.value;
  if (chosenColor) {
    colorResult.textContent = "Bạn đã chọn màu: " + chosenColor;
    colorResult.style.color = chosenColor;
  } else {
    colorResult.textContent = "Chưa chọn màu nào";
    colorResult.style.color = "black";
  }
});

// 3. KEYUP: gõ tên → hiển thị xem trước
const nameInput = document.getElementById("nameInput");
const namePreview = document.getElementById("namePreview");

nameInput.addEventListener("keyup", function () {
  namePreview.textContent = "Xem trước: " + nameInput.value;
});

// 4. SUBMIT: gửi form → chặn mặc định bằng preventDefault()
const myForm = document.getElementById("myForm");
const formInput = document.getElementById("formInput");
const submitResult = document.getElementById("submitResult");

myForm.addEventListener("submit", function (event) {
  event.preventDefault(); // chặn việc form load lại trang
  submitResult.textContent = "Đã gửi form với nội dung: " + formInput.value;
});
