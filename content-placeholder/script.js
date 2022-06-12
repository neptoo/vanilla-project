const header = document.querySelector("#header");
const title = document.querySelector("#title");
const excerpt = document.querySelector("#excerpt");
const profile_img = document.querySelector("#profile_img");
const name = document.querySelector("#name");
const date = document.querySelector("#date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(showData, 1500);

function showData() {
  header.innerHTML =
    '<img src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="">';
  title.innerHTML = "Lorem ipsum dolor sit";
  excerpt.innerHTML =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, fugiat.";
  profile_img.innerHTML = "<img src='./1.jpg' alt=''>";
  name.innerHTML = "Mary Walker";
  date.innerHTML = "June 05, 2022";

  // 记得移除animated类！
  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
