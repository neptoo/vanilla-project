const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];

getData();
// 监听搜索框
filter.addEventListener("keyup", (e) => filterData(e.target.value));

async function getData() {
  const res = await fetch("https://randomuser.me/api?results=50");
  const { results } = await res.json();
  // 解构赋值 =>
  // const data = await res.json();
  // results = data.results

  // 清空结果列表
  result.innerHTML = "";
  results.forEach((user) => {
    const li = document.createElement("li");
    listItems.push(li);
    li.innerHTML = `
    <img src="${user.picture.large}" alt="${user.name.first}">
    <div class="user-info">
      <h4>${user.name.first} ${user.name.last}</h4>
      <p>${user.location.city}, ${user.location.country}</p>
    `;
    result.appendChild(li);
  });
}

function filterData(searchTerm) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
