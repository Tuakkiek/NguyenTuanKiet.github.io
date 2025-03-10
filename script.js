// Lấy nút "Xem thêm" và phần thông tin ẩn
const showMoreBtn = document.getElementById("show-more-btn");
const moreInfoSection = document.getElementById("more-info");

// Gắn sự kiện click cho nút
showMoreBtn.addEventListener("click", () => {
  moreInfoSection.classList.toggle("hidden");
  showMoreBtn.textContent = moreInfoSection.classList.contains("hidden") ? "Xem thêm" : "Ẩn bớt";
});
