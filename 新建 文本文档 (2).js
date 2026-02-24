document.getElementById("year").textContent = new Date().getFullYear();

const email = "example@example.com"; // 改成你的邮箱
document.getElementById("copyEmail").addEventListener("click", async (e) => {
  e.preventDefault();
  try{
    await navigator.clipboard.writeText(email);
    e.target.textContent = "已复制 ✅";
    setTimeout(()=> e.target.textContent = "复制邮箱", 1200);
  }catch{
    alert("复制失败：请手动复制 " + email);
  }
});