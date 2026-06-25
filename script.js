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
/* =====================================================
   AI ENGINE V1.0 - TRỢ LÝ DU LỊCH AN GIANG THÔNG MINH
   ===================================================== */

function hoiAI() {
  const input = document.getElementById("aiQuestion");
  const chatHistory = document.getElementById("chatHistory");

  if (!input || !chatHistory) {
    alert("Chưa có khung AI Guide trong index.html.");
    return;
  }

  const cauHoi = input.value.trim();

  if (cauHoi === "") {
    return;
  }

  chatHistory.innerHTML += `
    <div class="user-message">
      ${cauHoi}
    </div>
  `;

  const traLoi = xuLyCauHoiAI(cauHoi);

  chatHistory.innerHTML += `
    <div class="bot-message">
      ${traLoi}
    </div>
  `;

  input.value = "";
  chatHistory.scrollTop = chatHistory.scrollHeight;
}

function xuLyCauHoiAI(cauHoi) {
  const q = chuanHoaChuoi(cauHoi);

  if (q.includes("xin chao") || q.includes("hello") || q.includes("hi")) {
    return `
      Xin chào! Tôi là AI Guide của Cẩm nang du lịch An Giang thông minh.
      <br><br>
      Bạn có thể hỏi tôi về:
      <br>✓ Điểm du lịch nên đi
      <br>✓ Lịch trình 1 ngày, 2 ngày
      <br>✓ Du lịch tâm linh, sinh thái, biển đảo
      <br>✓ Món ăn đặc sản
      <br>✓ Điểm phù hợp cho học sinh, gia đình
      <br>✓ Gợi ý tiết kiệm chi phí
    `;
  }

  if (coTuKhoa(q, ["thien nhien", "sinh thai", "rung", "xanh", "chup anh", "canh dep"])) {
    return `
      Nếu bạn thích thiên nhiên và du lịch sinh thái, tôi gợi ý:
      <br><br>
      🌿 <b>Rừng tràm Trà Sư</b>: đi xuồng xuyên rừng, ngắm chim, chụp ảnh.
      <br>
      🏞️ <b>Hồ Tà Pạ</b>: hồ nước xanh, cảnh quan yên bình.
      <br>
      ⛰️ <b>Núi Cấm</b>: khí hậu mát mẻ, phong cảnh núi non hùng vĩ.
      <br><br>
      Gợi ý: nên đi vào buổi sáng hoặc chiều mát để chụp ảnh đẹp hơn.
    `;
  }

  if (coTuKhoa(q, ["tam linh", "chua", "mieu", "cau an", "hanh huong", "le hoi"])) {
    return `
      Nếu bạn thích du lịch tâm linh, tôi gợi ý:
      <br><br>
      🙏 <b>Miếu Bà Chúa Xứ Núi Sam</b>: điểm hành hương nổi tiếng.
      <br>
      ⛰️ <b>Núi Cấm</b>: kết hợp tâm linh và sinh thái.
      <br>
      🛕 <b>Chùa Hang</b>: không gian thanh tịnh, gắn với hang đá tự nhiên.
      <br><br>
      Gợi ý: nên đi trang phục lịch sự, giữ gìn vệ sinh và tôn trọng không gian tín ngưỡng.
    `;
  }

  if (coTuKhoa(q, ["bien", "dao", "hai san", "tam bien", "nghi duong", "hoang hon"])) {
    return `
      Nếu bạn thích biển đảo và hải sản, tôi gợi ý:
      <br><br>
      🌊 <b>Bãi biển Mũi Nai - Hà Tiên</b>: tắm biển, ngắm hoàng hôn, ăn hải sản.
      <br>
      🏝️ <b>Đảo ngọc Phú Quốc</b>: biển xanh, cát trắng, khu vui chơi hiện đại.
      <br>
      🪨 <b>Hòn Phụ Tử</b>: danh thắng ven biển gắn với truyền thuyết dân gian.
      <br><br>
      Gợi ý: nên đi từ tháng 11 đến tháng 4 để thời tiết thuận lợi hơn.
    `;
  }

  if (coTuKhoa(q, ["mien phi", "tiet kiem", "it tien", "khong ton tien", "re"])) {
    return `
      Nếu bạn muốn đi tiết kiệm, có thể chọn:
      <br><br>
      ✅ Miếu Bà Chúa Xứ Núi Sam
      <br>
      ✅ Hồ Tà Pạ
      <br>
      ✅ Hòn Phụ Tử
      <br>
      ✅ Hang Mo So
      <br><br>
      Lưu ý: các điểm có thể miễn phí vé vào cổng, nhưng vẫn có chi phí ăn uống, gửi xe hoặc di chuyển.
    `;
  }

  if (coTuKhoa(q, ["1 ngay", "mot ngay", "di trong ngay"])) {
    return `
      <b>Lịch trình gợi ý 1 ngày:</b>
      <br><br>
      🌅 <b>Buổi sáng:</b> Miếu Bà Chúa Xứ Núi Sam.
      <br>
      🍜 <b>Buổi trưa:</b> thưởng thức bún cá Châu Đốc.
      <br>
      🌿 <b>Buổi chiều:</b> khám phá Rừng tràm Trà Sư.
      <br><br>
      Lịch trình này phù hợp với học sinh, gia đình và du khách có ít thời gian.
    `;
  }

  if (coTuKhoa(q, ["2 ngay", "hai ngay", "cuoi tuan", "2 ngày", "hai ngày"])) {
    return `
      <b>Lịch trình gợi ý 2 ngày:</b>
      <br><br>
      <b>Ngày 1:</b>
      <br>✓ Miếu Bà Chúa Xứ Núi Sam
      <br>✓ Núi Cấm
      <br>✓ Thưởng thức gà đốt Ô Thum hoặc bún cá Châu Đốc
      <br><br>
      <b>Ngày 2:</b>
      <br>✓ Rừng tràm Trà Sư
      <br>✓ Hồ Tà Pạ
      <br>✓ Chợ nổi Long Xuyên
      <br><br>
      Gợi ý: nên chuẩn bị nước uống, nón, máy ảnh và đặt chỗ nghỉ trước nếu đi cuối tuần.
    `;
  }

  if (coTuKhoa(q, ["tre em", "gia dinh", "hoc sinh", "phu huynh", "di cung con"])) {
    return `
      Nếu đi cùng học sinh hoặc gia đình có trẻ em, tôi gợi ý:
      <br><br>
      👨‍👩‍👧 <b>Rừng tràm Trà Sư</b>: giúp học sinh tìm hiểu hệ sinh thái.
      <br>
      🏞️ <b>Núi Cấm</b>: có cáp treo, cảnh đẹp, không khí mát.
      <br>
      🌊 <b>Bãi biển Mũi Nai</b>: phù hợp vui chơi, thư giãn.
      <br>
      🏝️ <b>Phú Quốc</b>: nhiều khu vui chơi, nghỉ dưỡng, trải nghiệm biển đảo.
      <br><br>
      Lưu ý: nên ưu tiên địa điểm an toàn, có dịch vụ hỗ trợ và dễ di chuyển.
    `;
  }

  if (coTuKhoa(q, ["am thuc", "mon an", "dac san", "an gi", "bun ca", "hai san"])) {
    return `
      Một số đặc sản nên thử khi du lịch An Giang:
      <br><br>
      🍜 <b>Bún cá Châu Đốc</b>
      <br>
      🍗 <b>Gà đốt Ô Thum</b>
      <br>
      🐟 <b>Mắm Châu Đốc</b>
      <br>
      🍯 <b>Đường thốt nốt, bánh bò thốt nốt</b>
      <br>
      🦀 <b>Hải sản Hà Tiên - Kiên Lương - Phú Quốc</b>
      <br><br>
      Nếu bạn thích hải sản, nên chọn Mũi Nai, Hà Tiên hoặc Phú Quốc.
    `;
  }

  if (coTuKhoa(q, ["mua mua", "troi mua", "mua", "thoi tiet xau"])) {
    return `
      Nếu trời mưa hoặc thời tiết xấu, bạn nên ưu tiên:
      <br><br>
      ✅ Miếu Bà Chúa Xứ Núi Sam
      <br>
      ✅ Chùa Hang
      <br>
      ✅ Các điểm tham quan trong khu vực đô thị hoặc có mái che
      <br><br>
      Hạn chế:
      <br>✗ Đi xuồng ở rừng tràm khi mưa lớn
      <br>✗ Leo núi hoặc tham quan hang động khi thời tiết nguy hiểm
    `;
  }

  if (coTuKhoa(q, ["chi phi", "bao nhieu tien", "kinh phi", "du toan", "2 trieu", "ngan sach"])) {
    return `
      <b>Gợi ý chi phí tham khảo:</b>
      <br><br>
      💰 Đi trong ngày: khoảng 300.000 - 700.000 đồng/người.
      <br>
      💰 Đi 2 ngày: khoảng 1.000.000 - 2.500.000 đồng/người.
      <br>
      💰 Đi Phú Quốc: chi phí cao hơn, tùy phương tiện, khách sạn và dịch vụ.
      <br><br>
      Để tiết kiệm, bạn nên đi theo nhóm, đặt phòng sớm và ưu tiên các điểm miễn phí.
    `;
  }

  if (coTuKhoa(q, ["phu quoc", "phú quốc"])) {
    return `
      <b>Đảo ngọc Phú Quốc</b> phù hợp với du lịch biển đảo, nghỉ dưỡng và vui chơi.
      <br><br>
      Điểm nổi bật:
      <br>✓ Bãi Sao, Bãi Khem
      <br>✓ Hòn Thơm
      <br>✓ VinWonders, Safari
      <br>✓ Chợ đêm và hải sản
      <br><br>
      Gợi ý: nên dành 3-5 ngày để khám phá trọn vẹn.
    `;
  }

  if (coTuKhoa(q, ["mui nai", "mũi nai", "ha tien", "hà tiên"])) {
    return `
      <b>Bãi biển Mũi Nai - Hà Tiên</b> là điểm đến phù hợp cho du lịch biển ngắn ngày.
      <br><br>
      Bạn có thể:
      <br>✓ Tắm biển
      <br>✓ Ngắm hoàng hôn
      <br>✓ Ăn hải sản
      <br>✓ Kết hợp tham quan Thạch Động, Núi Đèn, chợ đêm Hà Tiên
    `;
  }

  if (coTuKhoa(q, ["nui cam", "núi cấm"])) {
    return `
      <b>Núi Cấm</b> là điểm đến nổi bật của vùng Bảy Núi.
      <br><br>
      Phù hợp với:
      <br>✓ Du lịch sinh thái
      <br>✓ Du lịch tâm linh
      <br>✓ Tham quan bằng cáp treo
      <br>✓ Ngắm cảnh, chụp ảnh
      <br><br>
      Đặc sản nên thử: gà đốt Ô Thum, bò Bảy Núi.
    `;
  }

  if (coTuKhoa(q, ["tra su", "trà sư", "rung tram"])) {
    return `
      <b>Rừng tràm Trà Sư</b> là lựa chọn rất tốt nếu bạn thích thiên nhiên.
      <br><br>
      Trải nghiệm nổi bật:
      <br>✓ Đi xuồng xuyên rừng
      <br>✓ Ngắm thảm bèo xanh
      <br>✓ Quan sát chim trời
      <br>✓ Chụp ảnh cảnh quan sinh thái
      <br><br>
      Thời điểm đẹp: mùa nước nổi, khoảng tháng 9 đến tháng 11.
    `;
  }

  let ketQuaTheoData = timTrongDuLieuDiaDiem(q);
  if (ketQuaTheoData !== "") {
    return ketQuaTheoData;
  }

  return `
    Tôi chưa hiểu rõ yêu cầu của bạn.
    <br><br>
    Bạn có thể hỏi theo mẫu:
    <br>✓ Tôi thích thiên nhiên
    <br>✓ Tôi muốn đi 2 ngày
    <br>✓ Tôi đi cùng học sinh
    <br>✓ Điểm nào miễn phí?
    <br>✓ Tôi muốn ăn đặc sản
    <br>✓ Phú Quốc có gì?
  `;
}

function chuanHoaChuoi(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "d");
}

function coTuKhoa(text, keywords) {
  return keywords.some(function(keyword) {
    return text.includes(chuanHoaChuoi(keyword));
  });
}

function timTrongDuLieuDiaDiem(q) {
  for (let key in duLieu) {
    const p = duLieu[key];

    const ten = chuanHoaChuoi(p.ten);
    const loaihinh = chuanHoaChuoi(p.loaihinh);
    const amthuc = chuanHoaChuoi(p.amthuc);

    if (q.includes(ten) || ten.includes(q)) {
      return `
        Tôi tìm thấy thông tin về <b>${p.ten}</b>:
        <br><br>
        📍 <b>Địa chỉ:</b> ${p.diachi}
        <br>
        🏞️ <b>Loại hình:</b> ${p.loaihinh}
        <br>
        ⭐ <b>Điểm nổi bật:</b> ${p.diemnoibat}
        <br>
        🍜 <b>Ẩm thực:</b> ${p.amthuc}
        <br>
        💡 <b>Gợi ý:</b> ${p.goiy}
      `;
    }

    if (q.includes(loaihinh) || q.includes(amthuc)) {
      return `
        Tôi gợi ý bạn tham khảo <b>${p.ten}</b>.
        <br><br>
        📍 ${p.diachi}
        <br>
        🏞️ ${p.loaihinh}
        <br>
        ⭐ ${p.diemnoibat}
      `;
    }
  }

  return "";
}
