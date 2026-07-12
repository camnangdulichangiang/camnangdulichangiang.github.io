document.addEventListener("DOMContentLoaded", function () {
    console.log("Trip Planner 3.0 đã được tải");

    const btn = document.getElementById("btnTripPlan");

    if (!btn) return;

    btn.addEventListener("click", taoLichTrinh);

});

function taoLichTrinh(){

    const days = parseInt(document.getElementById("tripDays").value);
    console.log(days);
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

    lichTrinh=`
    <h2>🤖 AI Guide 4.0</h2>

    <h3>🛕 Hành trình tâm linh ${days} ngày</h3>

    <hr>

    <h4>📅 Ngày 1</h4>

    <p>🕢 07:30 Miếu Bà Chúa Xứ</p>
    <p>🕘 09:00 Núi Sam</p>
    <p>🍜 11:30 Bún cá Châu Đốc</p>
    <p>🙏 14:00 Chùa Hang</p>
    <p>🏨 18:00 Nghỉ khách sạn</p>
    `;

    if(days>=2){

        lichTrinh+=`

        <h4>📅 Ngày 2</h4>

        <p>🛕 Chùa Tây An</p>
        <p>🏯 Lăng Thoại Ngọc Hầu</p>
        <p>🕌 Làng Chăm Châu Giang</p>
        <p>☕ Café ven sông</p>

        `;

    }

    if(days>=3){

        lichTrinh+=`

        <h4>📅 Ngày 3</h4>

        <p>🏞 Núi Cấm</p>
        <p>🙏 Chùa Vạn Linh</p>
        <p>🍗 Gà đốt Ô Thum</p>
        <p>🌄 Hồ Thủy Liêm</p>

        `;

    }

}

    else if(style=="amthuc"){

        lichTrinh=`

        <h3>🤖 AI Guide 3.0</h3>

        <h4>📅 NGÀY 1</h4>

        <p>🍜 Bún cá Châu Đốc</p>

        <p>🥩 Bò Bảy Núi</p>

        <p>🐔 Gà đốt Ô Thum</p>

        <p>🍰 Bánh bò thốt nốt</p>

        <p>☕ Cà phê ven sông</p>

        `;

    }

    else if(style=="thiennhien"){

        lichTrinh=`

        <h3>🤖 AI Guide 3.0</h3>

        <h4>📅 NGÀY 1</h4>

        <p>🌳 Rừng Tràm Trà Sư</p>

        <p>🏔 Hồ Tà Pạ</p>

        <p>🌾 Đồi Tức Dụp</p>

        <p>🌅 Núi Cấm</p>

        `;

    }

    else{

        lichTrinh=`

        <h3>🤖 AI Guide 3.0</h3>

        <p>AI đang cập nhật dữ liệu...</p>

        `;

    }

    result.innerHTML = lichTrinh;

}
