document.addEventListener("DOMContentLoaded", function () {
    console.log("Trip Planner 3.0 đã được tải");

    const btn = document.getElementById("btnTripPlan");

    if (!btn) return;

    btn.addEventListener("click", taoLichTrinh);

});

function taoLichTrinh(){

    const days = parseInt(document.getElementById("tripDays").value);
    console.log("days =", days);
    const budget = document.getElementById("tripBudget").value;
    const style = document.getElementById("tripStyle").value;

    const result = document.getElementById("tripResult");

    if(days==="" || budget==="" || style===""){
        alert("Vui lòng chọn đầy đủ thông tin.");
        return;
    }

    result.style.display="block";

    let lichTrinh = "";

    if(style=="tamlinh"){

    lichTrinh = `

    <h2>🤖 AI Guide 4.0</h2>

    <h3 style="color:#c0392b;">🛕 Hành trình tâm linh ${days} ngày</h3>

    <hr>

    <h4>📅 NGÀY 1</h4>

    <p>🕢 07:30 Miếu Bà Chúa Xứ</p>

    <p>🏞️ 09:00 Núi Sam</p>

    <p>🍜 11:30 Bún cá Châu Đốc</p>

    <p>🙏 14:00 Chùa Hang</p>

    <p>🏨 18:00 Nghỉ khách sạn Châu Đốc</p>

    `;

    if(days >= 2){

        lichTrinh += `

        <hr>

        <h4>📅 NGÀY 2</h4>

        <p>🛕 07:30 Chùa Tây An</p>

        <p>🏯 09:00 Lăng Thoại Ngọc Hầu</p>

        <p>🕌 10:30 Làng Chăm Châu Giang</p>

        <p>🍽️ 12:00 Đặc sản Châu Đốc</p>

        <p>☕ 15:00 Café ven sông Hậu</p>

        <p>🏨 18:00 Nghỉ khách sạn</p>

        `;

    }

    if(days >= 3){

        lichTrinh += `

        <hr>

        <h4>📅 NGÀY 3</h4>

        <p>🏔️ 07:30 Núi Cấm</p>

        <p>🙏 09:00 Chùa Vạn Linh</p>

        <p>🗿 10:30 Tượng Phật Di Lặc</p>

        <p>🌄 13:30 Hồ Thủy Liêm</p>

        <p>🍗 15:00 Gà đốt Ô Thum</p>

        <p>☕ 16:30 Café Núi Cấm</p>

        <p>🚗 17:30 Kết thúc hành trình</p>

        `;

    }

}
    else if(style=="amthuc"){

    lichTrinh = `

    <h2>🤖 AI Guide 4.0</h2>

    <h3 style="color:#d35400;">🍜 Hành trình ẩm thực ${days} ngày</h3>

    <hr>

    <h4>📅 NGÀY 1</h4>

    <p>🍜 07:30 Bún cá Châu Đốc</p>

    <p>🥩 09:30 Bò Bảy Núi</p>

    <p>🥥 11:30 Thốt nốt tươi</p>

    <p>🍰 14:00 Bánh bò thốt nốt</p>

    <p>☕ 16:00 Café ven sông Châu Đốc</p>

    <p>🏨 18:00 Nghỉ khách sạn</p>

    `;

    if(days >= 2){

        lichTrinh += `

        <hr>

        <h4>📅 NGÀY 2</h4>

        <p>🐔 07:30 Gà đốt Ô Thum</p>

        <p>🥗 10:00 Gỏi sầu đâu</p>

        <p>🐟 12:00 Lẩu mắm Châu Đốc</p>

        <p>🥭 14:00 Thưởng thức trái cây Bảy Núi</p>

        <p>🍧 16:00 Chè thốt nốt</p>

        <p>🏨 18:00 Nghỉ khách sạn</p>

        `;

    }

    if(days >= 3){

        lichTrinh += `

        <hr>

        <h4>📅 NGÀY 3</h4>

        <p>🍚 07:30 Cơm tấm Long Xuyên</p>

        <p>🍲 09:30 Bánh canh Vĩnh Trung</p>

        <p>🐠 11:30 Cá linh kho mía</p>

        <p>🥮 14:00 Mua đặc sản làm quà</p>

        <p>☕ 16:00 Café tổng kết hành trình</p>

        <p>🚗 17:30 Kết thúc chuyến đi</p>

        `;

    }

}

   else if(style=="thiennhien"){

    lichTrinh = `

    <h3>🤖 AI Guide 4.0</h3>

    <h3 style="color:green;">🌿 Hành trình thiên nhiên ${days} ngày</h3>

    <hr>

    <h4>🗓️ NGÀY 1</h4>

    <p>🌳 07:30 Rừng Tràm Trà Sư</p>

    <p>🚣 09:00 Đi xuồng xuyên rừng</p>

    <p>🦅 11:30 Quan sát chim trời</p>

    <p>🍽️ 12:00 Ăn đặc sản cá linh - bông điên điển</p>

    <p>🏞️ 14:00 Hồ Tà Pạ</p>

    <p>🏨 18:00 Nghỉ khách sạn Châu Đốc</p>

    `;

    if(days >= 2){

        lichTrinh += `

        <hr>

        <h4>🗓️ NGÀY 2</h4>

        <p>🌄 07:30 Đồi Tức Dụp</p>

        <p>🏔️ 09:30 Hồ Ô Thum</p>

        <p>🍗 11:30 Thưởng thức Gà đốt Ô Thum</p>

        <p>🌿 14:00 Đồng cỏ Tri Tôn</p>

        <p>☕ 16:00 Café ngắm núi</p>

        <p>🏨 18:00 Nghỉ khách sạn</p>

        `;

    }

    if(days >= 3){

        lichTrinh += `

        <hr>

        <h4>🗓️ NGÀY 3</h4>

        <p>🏔️ 07:30 Núi Cấm</p>

        <p>🚡 09:00 Đi cáp treo</p>

        <p>🙏 10:30 Chùa Vạn Linh</p>

        <p>🗿 11:30 Tượng Phật Di Lặc</p>

        <p>🍜 13:00 Ăn đặc sản Núi Cấm</p>

        <p>☕ 15:00 Café trên Núi Cấm</p>

        <p>🚗 17:00 Kết thúc hành trình</p>

        `;

    }

}

    else if(style=="giadinh"){

    lichTrinh = `

    <h2>🤖 AI Guide 4.0</h2>

    <h3 style="color:#2E8B57;">👨‍👩‍👧 Hành trình gia đình ${days} ngày</h3>

    <hr>

    <h4>📅 NGÀY 1</h4>

    <p>🌳 07:30 Rừng Tràm Trà Sư</p>

    <p>🚣 09:00 Đi xuồng ngắm rừng</p>

    <p>🍜 11:30 Ăn trưa tại Trà Sư</p>

    <p>🏞️ 14:00 Hồ Tà Pạ</p>

    <p>🍦 16:00 Thưởng thức kem và nước giải khát</p>

    <p>🏨 18:00 Nghỉ khách sạn</p>

    `;

    if(days >= 2){

        lichTrinh += `

        <hr>

        <h4>📅 NGÀY 2</h4>

        <p>🏔️ 07:30 Núi Cấm</p>

        <p>🚡 09:00 Đi cáp treo</p>

        <p>🙏 10:30 Chùa Vạn Linh</p>

        <p>🍗 12:00 Ăn trưa tại Núi Cấm</p>

        <p>📸 15:00 Chụp ảnh toàn cảnh</p>

        <p>🏨 18:00 Nghỉ khách sạn</p>

        `;

    }

    if(days >= 3){

        lichTrinh += `

        <hr>

        <h4>📅 NGÀY 3</h4>

        <p>🛕 07:30 Miếu Bà Chúa Xứ</p>

        <p>🏯 09:00 Chùa Tây An</p>

        <p>🕌 10:30 Lăng Thoại Ngọc Hầu</p>

        <p>🍜 12:00 Bún cá Châu Đốc</p>

        <p>🛍️ 15:00 Mua đặc sản làm quà</p>

        <p>🚗 17:00 Kết thúc chuyến đi</p>

        `;

    }

}
