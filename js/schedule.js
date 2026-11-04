// โหลดข้อมูลตารางจาก JSON
fetch('data/7schedule.json')
  .then(res => {
    if (!res.ok) throw new Error('ไม่พบข้อมูล');
    return res.json();
  })
  .then(data => {
    renderTable('table-korat', data.korat);
    renderTable('table-buayai', data.buayai);
  })
  .catch(() => {
    const msg = '<tr><td colspan="2" style="text-align:center; color:#c00; padding:20px; font-weight:bold;">ขณะนี้ยังไม่เปิดให้ดูตารางเวลา</td></tr>';
    document.getElementById('table-korat').innerHTML = msg;
    document.getElementById('table-buayai').innerHTML = msg;
  });

// แสดงตาราง
function renderTable(id, times) {
  const table = document.getElementById(id);
  let html = "<tr><th>เวลา</th><th>หมายเหตุ</th></tr>";
  times.forEach(item => {
    html += `<tr><td>${item.time || ''}</td><td>${item.note || ''}</td></tr>`;
  });
  table.innerHTML = html;
}
