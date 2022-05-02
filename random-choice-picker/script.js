// 1.创建标签tag 当你输入一系列内容 以','分隔标签
const textarea = document.getElementById("textarea");
const tagsEl = document.getElementById("tags");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
  // e !获取你输入的内容
  createTag(e.target.value);

  // 获取Enter
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    randomSelect();
  }
});

function createTag(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "") //如果逗号后面是空格，去掉
    .map((tag) => tag.trim()); //去掉单词前后的空格

  tagsEl.innerHTML = ""; // not textarea ?

  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerHTML = tag;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30;

  // 对每个tag进行闪烁取值效果
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  // 停止选择 选中一个
  setTimeout(() => {
    clearInterval(interval);

    // 稍等一会儿再pick最后的选项!
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
      // console.log("最后的", randomTag);
    }, 100);
  }, times * 100);
}

// 选出随机的tag
function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  // 返回一个nodelist(类数组)的随机索引
  // const randomIdx = Math.floor(Math.random() * tags.length);
  // console.log("randomIdx", randomIdx);
  return tags[Math.floor(Math.random() * tags.length)];
}

// 高亮tag
function highlightTag(tag) {
  tag.classList.add("highlight");
}
// 移除高亮
function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
