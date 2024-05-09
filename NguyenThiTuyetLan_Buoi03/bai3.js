function choi(luaChon) {
    // Lựa chọn của người dùng
    var luaChonNguoiDung = luaChon;
  
    // Lựa chọn của máy tính (ngẫu nhiên)
    var luaChonMayTinh = ["oan", "tu"][Math.floor(Math.random() * 2)];
  
    // Hiển thị lựa chọn của máy tính
    var ketQua = "Lựa chọn của máy tính: " + (luaChonMayTinh === "oan" ? "Oẳn" : "Tù tì") + ". ";
  
    // So sánh lựa chọn
    if (luaChonNguoiDung === luaChonMayTinh) {
      ketQua += "Hòa!";
    } else if (
      (luaChonNguoiDung === "oan" && luaChonMayTinh === "tu") ||
      (luaChonNguoiDung === "tu" && luaChonMayTinh === "oan")
    ) {
      ketQua += "Bạn thắng!";
    } else {
      ketQua += "Bạn thua!";
    }
  
    // Hiển thị kết quả
    document.getElementById("ketQua").textContent = ketQua;
  }
  