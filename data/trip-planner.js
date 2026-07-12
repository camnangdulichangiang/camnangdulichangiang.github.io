/* ============================================================
   AI TRIP PLANNER 4.0
   Version: 4.0
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

const btn=document.getElementById("btnTripPlan");

if(!btn) return;

btn.addEventListener("click", taoLichTrinh);

});



const tripDatabase={

tamlinh:{

title:"🛕 Hành trình Tâm linh",

1:[
{
title:"📅 NGÀY 1",

items:[
["07:30","🛕 Miếu Bà Chúa Xứ"],
["09:00","⛰ Núi Sam"],
["10:30","🙏 Chùa Tây An"],
["11:45","🍜 Bún cá Châu Đốc"],
["13:30","🏯 Lăng Thoại Ngọc Hầu"],
["15:00","🛕 Chùa Hang"],
["17:30","☕ Café ngắm Núi Sam"]
]
}
],

2:[

{
title:"📅 NGÀY 1",

items:[
["07:30","🛕 Miếu Bà Chúa Xứ"],
["09:00","⛰ Núi Sam"],
["10:30","🙏 Chùa Tây An"],
["12:00","🍜 Bún cá Châu Đốc"],
["14:00","🏯 Lăng Thoại Ngọc Hầu"],
["16:00","🛍 Chợ Châu Đốc"]
]
},

{
title:"📅 NGÀY 2",

items:[
["07:30","🛕 Chùa Hang"],
["09:00","🚤 Làng bè Châu Đốc"],
["11:30","🍽 Cơm gà"],
["14:00","🕌 Làng Chăm"],
["16:00","☕ Café ven sông"]
]
}

],

3:[

{
title:"📅 NGÀY 1",

items:[
["07:30","🛕 Miếu Bà"],
["09:00","⛰ Núi Sam"],
["11:30","🍜 Bún cá"]
]
},

{
title:"📅 NGÀY 2",

items:[
["08:00","🛕 Chùa Hang"],
["10:00","🕌 Làng Chăm"],
["14:00","🚤 Làng bè"]
]
},

{
title:"📅 NGÀY 3",

items:[
["08:00","🏞 Núi Cấm"],
["11:30","🍗 Gà đốt Ô Thum"],
["15:00","🙏 Chùa Vạn Linh"]
]
}

]

},



thiennhien:{

title:"🌿 Khám phá thiên nhiên",

1:[

{

title:"📅 NGÀY 1",

items:[

["07:30","🌳 Rừng Tràm Trà Sư"],
["10:30","🚣 Đi xuồng"],
["12:00","🍜 Ăn trưa"],
["14:00","🦅 Quan sát chim"],
["16:30","☕ Café"]

}

],

2:[

{

title:"📅 NGÀY 1",

items:[

["07:30","🌳 Rừng Tràm Trà Sư"],
["12:00","🍜 Ăn trưa"],
["15:00","🦅 Tham quan"]

},

{

title:"📅 NGÀY 2",

items:[

["07:30","🏞 Hồ Tà Pạ"],
["10:00","📸 Check-in"],
["12:00","🍗 Gà đốt Ô Thum"],
["15:00","🏔 Đồi Tức Dụp"]

}

],

3:[

{

title:"📅 NGÀY 1",

items:[

["07:30","🌳 Rừng Tràm"],
["15:00","🚣 Đi xuồng"]

},

{

title:"📅 NGÀY 2",

items:[

["08:00","🏞 Hồ Tà Pạ"],
["13:30","🌄 Núi Cấm"]

},

{

title:"📅 NGÀY 3",

items:[

["08:00","🚠 Cáp treo"],
["10:30","🙏 Chùa Vạn Linh"],
["15:00","☕ Café"]

}

]

}

};



function taoLichTrinh(){

const days=parseInt(document.getElementById("tripDays").value);

const style=document.getElementById("tripStyle").value;

const budget=document.getElementById("tripBudget").value;

const result=document.getElementById("tripResult");

if(!tripDatabase[style]){

result.innerHTML="<h3>Chưa có dữ liệu.</h3>";

return;

}

let html="";

html+=`<h2>🤖 AI Trip Planner 4.0</h2>`;

html+=`<p><b>${tripDatabase[style].title}</b></p><hr>`;

tripDatabase[style][days].forEach(day=>{

html+=`<h3>${day.title}</h3>`;

day.items.forEach(item=>{

html+=`

<div class="trip-item">

<b>${item[0]}</b> - ${item[1]}

</div>

`;

});

html+="<hr>";

});

html+=tinhChiPhi(budget);

result.innerHTML=html;

}



function tinhChiPhi(level){

switch(level){

case "thap":

return`

<h3>💰 Chi phí dự kiến</h3>

<ul>

<li>🚗 Di chuyển: 250.000đ</li>

<li>🍜 Ăn uống: 300.000đ</li>

<li>🏨 Lưu trú: 400.000đ</li>

<li><b>Tổng khoảng: 950.000đ</b></li>

</ul>

`;

case "trungbinh":

return`

<h3>💰 Chi phí dự kiến</h3>

<ul>

<li>🚗 Di chuyển: 500.000đ</li>

<li>🍜 Ăn uống: 700.000đ</li>

<li>🏨 Lưu trú: 900.000đ</li>

<li><b>Tổng khoảng: 2.100.000đ</b></li>

</ul>

`;

default:

return`

<h3>💰 Chi phí dự kiến</h3>

<ul>

<li>🚗 Di chuyển: 900.000đ</li>

<li>🍜 Ăn uống: 1.200.000đ</li>

<li>🏨 Lưu trú: 2.000.000đ</li>

<li><b>Tổng khoảng: 4.100.000đ</b></li>

</ul>

`;

}

}
