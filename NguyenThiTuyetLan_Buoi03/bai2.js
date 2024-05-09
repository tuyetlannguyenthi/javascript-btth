// Lắng nghe sự kiện nút thêm được nhấn
document.getElementById("monHocForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Ngăn chặn form gửi đi (mặc định sẽ refresh trang)

  var monHocInput = document.getElementById("monHocInput");
  var tenMonHoc = monHocInput.value.trim();

  // Kiểm tra xem tên môn học có bị trống không
  if (tenMonHoc === "") {
    alert("Tên môn học không được để trống.");
    return;
  }

  // Thêm môn học vào danh sách
  themMonHoc(tenMonHoc);

  // Xóa nội dung trong ô nhập liệu
  monHocInput.value = "";
});

// Hàm thêm môn học vào danh sách
function themMonHoc(tenMonHoc) {
  var danhSachMonHoc = document.getElementById("danhSachMonHoc");

  // Tạo một mục danh sách mới
  var listItem = document.createElement("li");
  listItem.textContent = tenMonHoc;

  // Tạo nút xóa môn học
  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Xóa";
  deleteButton.addEventListener("click", function() {
    listItem.remove(); // Xóa môn học khi nút xóa được nhấn
  });

  // Thêm nút xóa vào mục danh sách
  listItem.appendChild(deleteButton);

  // Thêm mục danh sách vào danh sách môn học
  danhSachMonHoc.appendChild(listItem);
}
