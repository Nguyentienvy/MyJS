// ----- NÚT ẨN/HIỆN NỘI DUNG -----
const btnToggle = document.getElementById("btnToggle");
const hiddenContent = document.getElementById("hiddenContent");

btnToggle.addEventListener("click", function () {
  if (hiddenContent.style.display === "none") {
    hiddenContent.style.display = "block";
  } else {
    hiddenContent.style.display = "none";
  }
});

// ----- FORM LIÊN HỆ: kiểm tra dữ liệu rỗng + preventDefault -----
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const messageInput = document.getElementById("messageInput");
const formResult = document.getElementById("formResult");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // chặn load lại trang

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  // Kiểm tra dữ liệu rỗng
  if (name === "" || email === "" || message === "") {
    formResult.textContent = "⚠️ Vui lòng điền đầy đủ tất cả các trường!";
    formResult.className = "error";
    return;
  }

  // Nếu hợp lệ
  formResult.textContent = "✅ Gửi liên hệ thành công! Cảm ơn " + name + ".";
  formResult.className = "success";

  // Reset form sau khi gửi
  contactForm.reset();
});
