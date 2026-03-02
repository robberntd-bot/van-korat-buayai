
// โหลดข่าวจาก JSON และเรียงใหม่ไปเก่า
fetch('data/news.json')
.then(res => res.json())
.then(data => {
  const container = document.getElementById('newsContainer');
  data.sort((a,b) => b.id - a.id);
  data.forEach(news => {
    const card = document.createElement('div');
    card.className = "card";
    card.innerHTML = `
      <h3>${news.title}</h3>
      <p>${news.description}</p>
    `;
    container.appendChild(card);
  });
});
