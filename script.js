/* ===== DỮ LIỆU ĐỊA ĐIỂM ===== */
let duLieu = {
    "mieu-ba-chua-xu": {
        ten: "Miếu Bà Chúa Xứ Núi Sam",
        diachi: "Phường Châu Đốc, An Giang",
        loaihinh: "Du lịch tâm linh",
        mota: "Miếu Bà Chúa Xứ Núi Sam là điểm hành hương nổi tiếng của Nam Bộ.",
        diemnoibat: "Kiến trúc trang nghiêm, gắn với Lễ hội Vía Bà Chúa Xứ.",
        giave: "Miễn phí",
        giomo: "05:00 - 22:00",
        amthuc: "Bún cá Châu Đốc, mắm Châu Đốc, bánh bò thốt nốt",
        khachsan: "Victoria Châu Đốc, Marina Plaza Hotel",
        goiy: "Nên kết hợp tham quan Lăng Thoại Ngọc Hầu và Tây An Cổ Tự.",
        audio_en: "Welcome to Ba Chua Xu Temple on Sam Mountain. This is one of the most famous spiritual destinations in An Giang. Visitors come here to pray, learn about local culture, and enjoy the peaceful atmosphere.",
        bando: "https://www.google.com/maps?q=Miếu%20Bà%20Chúa%20Xứ%20Núi%20Sam&output=embed"
    },

    "rung-tram-tra-su": {
        ten: "Rừng tràm Trà Sư",
        diachi: "Văn Giáo, Tịnh Biên, An Giang",
        loaihinh: "Du lịch sinh thái",
        mota: "Rừng tràm Trà Sư là khu rừng ngập nước tiêu biểu của miền Tây.",
        diemnoibat: "Xuồng xuyên rừng tràm, thảm bèo xanh, sân ngắm chim.",
        giave: "Khoảng 100.000 - 200.000 đồng/người",
        giomo: "07:00 - 17:00",
        amthuc: "Cá lóc nướng trui, lẩu mắm, gà đồi",
        khachsan: "Khách sạn Tịnh Biên, Victoria Núi Sam",
        goiy: "Đẹp nhất vào mùa nước nổi từ tháng 9 đến tháng 11.",
        audio_en: "Welcome to Tra Su Cajuput Forest. This ecological destination is famous for its green water surface, cajuput trees, birds, and peaceful natural scenery. It is a wonderful place for students and tourists to explore nature.",
        bando: "https://www.google.com/maps?q=Rừng%20tràm%20Trà%20Sư&output=embed"
    },

    "nui-cam": {
        ten: "Núi Cấm",
        diachi: "Xã An Hảo, Tịnh Biên, An Giang",
        loaihinh: "Du lịch sinh thái - tâm linh",
        mota: "Núi Cấm là ngọn núi cao nổi bật của vùng Bảy Núi.",
        diemnoibat: "Tượng Phật Di Lặc, hồ Thủy Liêm, cáp treo, khí hậu mát mẻ.",
        giave: "Vé cáp treo khoảng 180.000 đồng",
        giomo: "06:00 - 18:00",
        amthuc: "Gà đốt Ô Thum, bò Bảy Núi",
        khachsan: "Khách sạn Núi Cấm, Victoria Núi Sam",
        goiy: "Nên đi vào mùa khô để thuận tiện tham quan.",
        audio_en: "Welcome to Cam Mountain, also known as the roof of the Mekong Delta. This destination is famous for its cool climate, beautiful mountain views, cable car, and spiritual sites.",
        bando: "https://www.google.com/maps?q=Núi%20Cấm%20An%20Giang&output=embed"
    },

    "cho-noi-long-xuyen": {
        ten: "Chợ nổi Long Xuyên",
        diachi: "Phường Mỹ Long, Long Xuyên, An Giang",
        loaihinh: "Du lịch văn hóa",
        mota: "Chợ nổi Long Xuyên thể hiện nét văn hóa sông nước đặc trưng.",
        diemnoibat: "Mua bán trên sông, trải nghiệm cuộc sống miền Tây.",
        giave: "Miễn phí",
        giomo: "05:00 - 09:00",
        amthuc: "Hủ tiếu ghe, cà phê ghe, bún riêu",
        khachsan: "Dong Xuyen Hotel, Chau Khuong Hotel",
        goiy: "Nên đi từ 5h đến 7h sáng.",
        audio_en: "Welcome to Long Xuyen Floating Market. This market shows the river culture of the Mekong Delta. Visitors can see boats, local food, and the daily life of people on the river.",
        bando: "https://www.google.com/maps?q=Chợ%20nổi%20Long%20Xuyên&output=embed"
    },

    "ho-ta-pa": {
        ten: "Hồ Tà Pạ",
        diachi: "Tri Tôn, An Giang",
        loaihinh: "Du lịch sinh thái",
        mota: "Hồ Tà Pạ nổi bật với mặt nước xanh và cảnh quan yên bình.",
        diemnoibat: "Không gian đẹp, thích hợp chụp ảnh và thư giãn.",
        giave: "Miễn phí",
        giomo: "Mở cửa cả ngày",
        amthuc: "Bánh xèo núi, bò Bảy Núi",
        khachsan: "Nhà nghỉ Tri Tôn, Khách sạn Tịnh Biên",
        goiy: "Đẹp nhất vào buổi sáng và chiều.",
        audio_en: "Welcome to Ta Pa Lake. This place is famous for its clear blue water, quiet atmosphere, and beautiful mountain scenery. It is a good place for taking photos and relaxing.",
        bando: "https://www.google.com/maps?q=Hồ%20Tà%20Pạ&output=embed"
    },

    "chua-hang": {
        ten: "Chùa Hang",
        diachi: "Kiên Lương, An Giang",
        loaihinh: "Du lịch tâm linh",
        mota: "Chùa Hang là điểm đến tâm linh gắn với hang đá tự nhiên.",
        diemnoibat: "Không gian thanh tịnh, phong cảnh núi đá và biển đẹp.",
        giave: "Miễn phí",
        giomo: "06:00 - 18:00",
        amthuc: "Hải sản Kiên Lương",
        khachsan: "River Hotel Hà Tiên, Sele House",
        goiy: "Nên kết hợp tham quan Hòn Phụ Tử.",
        audio_en: "Welcome to Hang Pagoda. This spiritual destination is located near natural caves and limestone mountains. Visitors can enjoy a peaceful atmosphere and beautiful views.",
        bando: "https://www.google.com/maps?q=Chùa%20Hang%20Kiên%20Lương&output=embed"
    },

    "hon-phu-tu": {
        ten: "Hòn Phụ Tử",
        diachi: "Kiên Lương, An Giang",
        loaihinh: "Du lịch danh lam thắng cảnh",
        mota: "Hòn Phụ Tử là danh thắng nổi tiếng vùng Kiên Lương.",
        diemnoibat: "Cảnh quan biển núi hài hòa, gắn với truyền thuyết dân gian.",
        giave: "Miễn phí",
        giomo: "Mở cửa cả ngày",
        amthuc: "Ghẹ Hà Tiên, mực nướng",
        khachsan: "River Hotel Hà Tiên",
        goiy: "Thích hợp ngắm bình minh và hoàng hôn.",
        audio_en: "Welcome to Hon Phu Tu, a famous scenic spot in Kien Luong. This place is known for its sea view, limestone rocks, and local legend about family love.",
        bando: "https://www.google.com/maps?q=Hòn%20Phụ%20Tử%20Kiên%20Lương&output=embed"
    },

    "hang-mo-so": {
        ten: "Hang Mo So",
        diachi: "Kiên Lương, An Giang",
        loaihinh: "Du lịch lịch sử",
        mota: "Hang Mo So là di tích lịch sử kết hợp danh thắng tự nhiên.",
        diemnoibat: "Hang động độc đáo, có giá trị giáo dục truyền thống.",
        giave: "Miễn phí",
        giomo: "07:00 - 17:00",
        amthuc: "Bánh canh ghẹ, hải sản Kiên Lương",
        khachsan: "Sele House, River Hotel",
        goiy: "Phù hợp cho học sinh tham quan trải nghiệm lịch sử.",
        audio_en: "Welcome to Mo So Cave. This is both a historical site and a natural landscape. It helps students learn more about local history and revolutionary traditions.",
        bando: "https://www.google.com/maps?q=Hang%20Mo%20So%20Kiên%20Lương&output=embed"
    },

    "mui-nai": {
        ten: "Bãi biển Mũi Nai - Hà Tiên",
        diachi: "Hà Tiên, An Giang",
        loaihinh: "Du lịch biển",
        mota: "Bãi biển Mũi Nai là điểm du lịch biển nổi tiếng của Hà Tiên.",
        diemnoibat: "Bãi cát đẹp, hoàng hôn lãng mạn, khu vui chơi ven biển.",
        giave: "Khoảng 30.000 - 50.000 đồng",
        giomo: "06:00 - 21:00",
        amthuc: "Tôm tích, ghẹ hấp, sò huyết",
        khachsan: "Mũi Nai Resort, River Hotel",
        goiy: "Nên đi từ tháng 11 đến tháng 4.",
        audio_en: "Welcome to Mui Nai Beach in Ha Tien. This beach is famous for its relaxing atmosphere, beautiful sunset, seafood, and seaside activities.",
        bando: "https://www.google.com/maps?q=Bãi%20biển%20Mũi%20Nai%20Hà%20Tiên&output=embed"
    },

    "phu-quoc": {
        ten: "Đảo ngọc Phú Quốc",
        diachi: "Đặc khu Phú Quốc, An Giang",
        loaihinh: "Du lịch biển đảo",
        mota: "Phú Quốc là trung tâm du lịch biển đảo nổi tiếng hàng đầu Việt Nam.",
        diemnoibat: "Bãi Sao, Bãi Khem, Hòn Thơm, VinWonders, Safari.",
        giave: "Tùy từng điểm tham quan",
        giomo: "Mở cửa cả ngày",
        amthuc: "Gỏi cá trích, nhum biển, bún quậy",
        khachsan: "Vinpearl, Novotel, Seashells, Wyndham",
        goiy: "Nên dành 3-5 ngày để khám phá trọn vẹn.",
        audio_en: "Welcome to Phu Quoc Island, also called the Pearl Island of Vietnam. This destination is famous for blue sea, white sand, modern entertainment areas, fresh seafood, and beautiful resorts.",
        bando: "https://www.google.com/maps?q=Phú%20Quốc&output=embed"
    }
};

/* ===== XEM CHI TIẾT ===== */
function xemChiTiet(diaDiem) {
    let noiDung = document.getElementById("noi-dung-chi-tiet");
    let data = duLieu[diaDiem];

    if (!noiDung) {
        alert("Lỗi: Chưa có khung hiển thị chi tiết.");
        return;
    }

    if (!data) {
        noiDung.innerHTML = "<p>Chưa có dữ liệu cho địa điểm này.</p>";
        return;
    }

    noiDung.innerHTML = `
        <h3>${data.ten}</h3>
        <p><b>📍 Địa chỉ:</b> ${data.diachi}</p>
        <p><b>🏞️ Loại hình:</b> ${data.loaihinh}</p>
        <p><b>📖 Giới thiệu:</b> ${data.mota}</p>
        <p><b>⭐ Điểm nổi bật:</b> ${data.diemnoibat}</p>
        <p><b>💰 Giá vé:</b> ${data.giave}</p>
        <p><b>🕒 Giờ mở cửa:</b> ${data.giomo}</p>
        <p><b>🍜 Ẩm thực:</b> ${data.amthuc}</p>
        <p><b>🏨 Lưu trú:</b> ${data.khachsan}</p>
        <p><b>💡 Gợi ý:</b> ${data.goiy}</p>

        <a href="https://www.google.com/maps/search/${encodeURIComponent(data.ten)}" 
           target="_blank" 
           class="btn-map">
           🧭 Chỉ đường trên Google Maps
        </a>

        <button id="btnNgheThuyetMinh" class="btn-audio">
            🔊 English Audio Guide
        </button>

        <div class="map-box">
            <iframe 
                src="${data.bando}" 
                width="100%" 
                height="320" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy">
            </iframe>
        </div>
    `;

    let btnAudio = document.getElementById("btnNgheThuyetMinh");
    btnAudio.onclick = function () {
        ngheThuyetMinh(diaDiem);
    };

    document.getElementById("chitiet").scrollIntoView({ behavior: "smooth" });
}

/* ===== NGHE THUYẾT MINH TIẾNG ANH ===== */
function ngheThuyetMinh(diaDiem) {
    let data = duLieu[diaDiem];

    if (!data) {
        alert("No information available.");
        return;
    }

    let noiDungDoc = data.audio_en;

    window.speechSynthesis.cancel();

    let speech = new SpeechSynthesisUtterance(noiDungDoc);
    speech.lang = "en-US";
    speech.rate = 0.9;
    speech.pitch = 1;
    speech.volume = 1;

    let voices = speechSynthesis.getVoices();
    let englishVoice = voices.find(function(voice) {
        return voice.lang.includes("en-US") || voice.lang.includes("en-GB");
    });

    if (englishVoice) {
        speech.voice = englishVoice;
    }

    speechSynthesis.speak(speech);
}

/* ===== TÌM KIẾM ===== */
function timKiemDiaDiem() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {
        let tenDiaDiem = cards[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

        if (tenDiaDiem.includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

/* ===== GỢI Ý LỊCH TRÌNH ===== */
function goiYlichTrinh() {
    let luaChon = document.getElementById("chonLichTrinh").value;
    let ketqua = document.getElementById("ketqua-lichtrinh");

    if (luaChon === "1ngay") {
        ketqua.innerHTML = "Sáng: Miếu Bà Chúa Xứ Núi Sam. Trưa: bún cá Châu Đốc. Chiều: Rừng tràm Trà Sư.";
    } else if (luaChon === "2ngay") {
        ketqua.innerHTML = "Ngày 1: Núi Sam - Chợ nổi Long Xuyên. Ngày 2: Núi Cấm - Hồ Tà Pạ - Trà Sư.";
    } else if (luaChon === "tamlinh") {
        ketqua.innerHTML = "Miếu Bà Chúa Xứ Núi Sam - Núi Cấm - Chùa Hang.";
    } else if (luaChon === "sinhthai") {
        ketqua.innerHTML = "Rừng tràm Trà Sư - Hồ Tà Pạ - Núi Cấm.";
    }
}

/* ===== TRẮC NGHIỆM ===== */
let diem = 0;
let daTraLoi = [];

function traLoi(cau, dapAn) {
    let phanHoi = document.getElementById("ketqua");

    if (daTraLoi.includes(cau)) {
        phanHoi.innerHTML = "Bạn đã trả lời câu này rồi!";
        phanHoi.style.color = "orange";
        return;
    }

    let dapAnDung = {
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
    document.getElementById("ketqua").innerHTML =
        "Kết quả: Bạn đạt " + diem + "/3 điểm.";
}

/* ===== LÊN ĐẦU TRANG ===== */
function lenDauTrang() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}