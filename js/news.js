
// โหลดข่าวจาก JSON และแทนที่ข้อความคงที่ (ใช้กรณีเว็บไม่ทำงาน)
fetch('data/news.json')
.then(res => res.json())
.then(data => {
  const container = document.getElementById('newsContainer');
  if (!container) return;
  data.sort((a,b) => b.id - a.id);
  container.innerHTML = '';
  data.forEach(news => {
    const card = document.createElement('article');
    card.className = "card";
    card.innerHTML = `
      <h2>${news.title}</h2>
      <p>${news.description}</p>
    `;
    container.appendChild(card);
  });
})
.catch(() => {
  // ถ้าโหลดไม่ได้ ให้เนื้อหาใน HTML คงไว้เพื่อ Google อ่านได้
});
