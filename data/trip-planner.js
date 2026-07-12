document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("btnTripPlan");

    if (!btn) return;

    btn.addEventListener("click", taoLichTrinh);

});

function taoLichTrinh(){

    const days = document.getElementById("tripDays").value;
    const budget = document.getElementById("tripBudget").value;
    const style = document.getElementById("tripStyle").value;

    const result = document.getElementById("tripResult");

    if(days==="" || budget==="" || style===""){
        alert("Vui lòng chọn đầy đủ thông tin.");
        return;
    }

    result.style.display="block";

    result.innerHTML=`
        <h3>🤖 AI Guide 3.0</h3>

        <p><b>Số ngày:</b> ${days}</p>

        <p><b>Ngân sách:</b> ${budget}</p>

        <p><b>Sở thích:</b> ${style}</p>

        <hr>

        <p>✅ AI đang phân tích và sẽ tạo lịch trình ở phiên bản tiếp theo.</p>
    `;

}
