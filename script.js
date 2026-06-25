/* =====================================================
   CẨM NANG DU LỊCH AN GIANG THÔNG MINH - SCRIPT ỔN ĐỊNH
   ===================================================== */

/* ===== DỮ LIỆU 10 ĐỊA ĐIỂM ===== */


/* ===== BIẾN DÙNG CHUNG ===== */
let diaDiemHienTai = null;
let slideIndex = 0;
let diem = 0;
let daTraLoi = [];

/* ===== XEM CHI TIẾT ===== */
function xemChiTiet(key) {
  const data = duLieu[key];
  const noiDung = document.getElementById("noi-dung-chi-tiet");

  if (!noiDung) {
    alert("Chưa có khung hiển thị chi tiết.");
    return;
  }

  if (!data) {
    noiDung.innerHTML = "<p>Chưa có dữ liệu cho địa điểm này.</p>";
    return;
  }

  diaDiemHienTai = data;
  slideIndex = 0;

  noiDung.innerHTML = `
    <h3 class="detail-title">${data.ten}</h3>

    <div class="slideshow">
      <button onclick="doiAnh(-1)">◀</button>
      <img id="slideImage" src="${data.images[0]}" alt="${data.ten}">
      <button onclick="doiAnh(1)">▶</button>
    </div>

    <p><b>📍 Địa chỉ:</b> ${data.diachi}</p>
    <p><b>🏞️ Loại hình:</b> ${data.loaihinh}</p>
    <p><b>📖 Giới thiệu:</b> ${data.mota}</p>
    <p><b>⭐ Điểm nổi bật:</b> ${data.diemnoibat}</p>
    <p><b>💰 Giá vé:</b> ${data.giave}</p>
    <p><b>🕒 Giờ mở cửa:</b> ${data.giomo}</p>
    <p><b>🍜 Ẩm thực:</b> ${data.amthuc}</p>
    <p><b>🏨 Lưu trú:</b> ${data.khachsan}</p>
    <p><b>💡 Gợi ý:</b> ${data.goiy}</p>

    <a href="https://www.google.com/maps/search/${encodeURIComponent(data.ten)}" target="_blank" class="btn-map">
      🧭 Chỉ đường trên Google Maps
    </a>

    <button class="btn-audio" onclick="ngheThuyetMinh('${key}')">
      🔊 English Audio Guide
    </button>

    <div class="map-box">
      <iframe src="${data.bando}" width="100%" height="320" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
  `;

  document.getElementById("chitiet").scrollIntoView({ behavior: "smooth" });
}

/* ===== ĐỔI ẢNH SLIDESHOW ===== */
function doiAnh(step) {
  if (!diaDiemHienTai) return;

  slideIndex += step;

  if (slideIndex >= diaDiemHienTai.images.length) {
    slideIndex = 0;
  }

  if (slideIndex < 0) {
    slideIndex = diaDiemHienTai.images.length - 1;
  }

  document.getElementById("slideImage").src = diaDiemHienTai.images[slideIndex];
}

/* ===== NGHE THUYẾT MINH TIẾNG ANH ===== */
function ngheThuyetMinh(key) {
  const data = duLieu[key];

  if (!data) {
    alert("No information available.");
    return;
  }

  window.speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(data.audio_en);
  speech.lang = "en-US";
  speech.rate = 0.85;
  speech.pitch = 1;
  speech.volume = 1;

  window.speechSynthesis.speak(speech);
}

/* ===== TÌM KIẾM ===== */
function timKiemDiaDiem() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.getElementsByClassName("card");

  for (let i = 0; i < cards.length; i++) {
    const ten = cards[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

    if (ten.includes(input)) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
}

/* ===== HIỆN TẤT CẢ ===== */
function hienTatCaDiaDiem() {
  document.getElementById("searchInput").value = "";
  const cards = document.getElementsByClassName("card");

  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = "block";
  }
}

/* ===== GỢI Ý LỊCH TRÌNH ===== */
function goiYlichTrinh() {
  const luaChon = document.getElementById("chonLichTrinh").value;
  const ketqua = document.getElementById("ketqua-lichtrinh");

  if (luaChon === "1ngay") {
    ketqua.innerHTML = "Sáng: Miếu Bà Chúa Xứ Núi Sam. Trưa: thưởng thức bún cá Châu Đốc. Chiều: khám phá Rừng tràm Trà Sư.";
  } else if (luaChon === "2ngay") {
    ketqua.innerHTML = "Ngày 1: Núi Sam - Chợ nổi Long Xuyên. Ngày 2: Núi Cấm - Hồ Tà Pạ - Rừng tràm Trà Sư.";
  } else if (luaChon === "tamlinh") {
    ketqua.innerHTML = "Miếu Bà Chúa Xứ Núi Sam - Núi Cấm - Chùa Hang.";
  } else if (luaChon === "sinhthai") {
    ketqua.innerHTML = "Rừng tràm Trà Sư - Hồ Tà Pạ - Núi Cấm.";
  } else if (luaChon === "biendao") {
    ketqua.innerHTML = "Bãi biển Mũi Nai - Hà Tiên - Đảo ngọc Phú Quốc.";
  }
}

/* ===== TRẮC NGHIỆM ===== */
function traLoi(cau, dapAn) {
  const phanHoi = document.getElementById("ketqua");

  if (daTraLoi.includes(cau)) {
    phanHoi.innerHTML = "Bạn đã trả lời câu này rồi!";
    phanHoi.style.color = "orange";
    return;
  }

  const dapAnDung = {
    1: "A",
    2: "A",
    3: "A"
  };

  if (dapAn === dapAnDung[cau]) {
    diem++;
    phanHoi.innerHTML = "Chính xác! Bạn được cộng 1 điểm.";
    phanHoi.style.color = "green";
  } else {
    phanHoi.innerHTML = "Chưa đúng. Bạn hãy đọc lại thông tin để ghi nhớ tốt hơn.";
    phanHoi.style.color = "red";
  }

  daTraLoi.push(cau);
}

function xemDiem() {
  document.getElementById("ketqua").innerHTML = "Kết quả: Bạn đạt " + diem + "/3 điểm.";
}

/* ===== LÊN ĐẦU TRANG ===== */
function lenDauTrang() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
