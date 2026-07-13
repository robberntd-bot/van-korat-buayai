
// โหลดข้อมูลตารางจาก JSON
fetch('data/schedule.json')
.then(res => res.json())
.then(data => {
  renderTable('table-korat', data.korat);
  renderTable('table-buayai', data.buayai);
});

// แสดงตาราง
function renderTable(id, times) {
  const table = document.getElementById(id);
  let html = "<tr><th>เวลา</th><th>หมายเหตุ</th></tr>";
  times.forEach(item => {
    html += `<tr><td>${item.time}</td><td>${item.note}</td></tr>`;
  });
  table.innerHTML = html;
}
