/* ===================================================
   VAN KORAT - BUAYAI
   Stable Menu System (Production Final)
=================================================== */

document.addEventListener("DOMContentLoaded", function () {

  const menu = document.getElementById("sideMenu");
  const toggleBtn = document.querySelector(".menu-toggle");

  // ถ้าไม่มีเมนูในหน้านั้น ไม่ต้องทำงาน
  if (!menu || !toggleBtn) return;

  /* =============================
     เปิด / ปิด เมนูเมื่อกดสามขีด
  ============================= */
  toggleBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    menu.classList.toggle("active");
  });

  /* =============================
     กดพื้นที่ว่างแล้วปิดเมนู
  ============================= */
  document.addEventListener("click", function (e) {
    if (
      menu.classList.contains("active") &&
      !menu.contains(e.target) &&
      !toggleBtn.contains(e.target)
    ) {
      menu.classList.remove("active");
    }
  });

  /* =============================
     กดลิงก์ในเมนูแล้วปิด (มือถือ)
  ============================= */
  const menuLinks = menu.querySelectorAll("a");
  menuLinks.forEach(link => {
    link.addEventListener("click", function () {
      menu.classList.remove("active");
    });
  });

});
/* =============================
   แสดงวันที่วันนี้อัตโนมัติ
   (ใช้เฉพาะหน้าที่มี id="lastUpdate")
============================= */

function formatThaiDate(date) {
  const months = [
    "มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน",
    "กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear() + 543;

  return `${day} ${month} ${year}`;
}

document.addEventListener("DOMContentLoaded", function () {
  const updateElement = document.getElementById("lastUpdate");
  if (updateElement) {
    updateElement.textContent = formatThaiDate(new Date());
  }
});