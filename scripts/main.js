// 切换图片
let myImg = document.querySelector("img");
myImg.onclick = function () {
  let mySrc = myImg.getAttribute("src");
  if (mySrc === "images/001.jpg") {
    myImg.setAttribute("src", "images/002.jpg");
  } else {
    myImg.setAttribute("src", "images/001.jpg");
  }
};
// 添加个性化欢迎信息
let button = document.querySelector("button");
let myHeading = document.querySelector("h2");
function setUserName() {
  let myName = prompt("请输入你的名字。");
  if (!myName || myName == null) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "欢迎" + myName + "来到本站";
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  myHeading.textContent = "欢迎" + localStorage.getItem("name") + "来到本站";
}
button.onclick = function () {
  setUserName();
};
