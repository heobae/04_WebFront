// // 적용하기 버튼이 클릭 되었을 때
// const applyBtn = document.querySelector("#apply");

// applyBtn.addEventListener("click", function() {

//   // input 요소들을 모두 얻어오기
//   const boxWidth = document.querySelector("#width"); // 너비
//   const boxHeight = document.querySelector("#height"); // 높이
//   const textsize = document.querySelector("#textsize"); // 글씨 크기
//   const weight = document.querySelector("[name='weight']:checked"); // 글씨 굵기
//   const textcolor = document.querySelector("#textcolor"); // 글씨색
//   const backgroundcolor = document.querySelector("#backgroundcolor"); // 배경색
//   const row = document.querySelector("[name='radiorows']:checked"); // 가로 정렬
//   const col = document.querySelector("[name='radiocols']:checked"); // 세로 정렬
//   const content = document.querySelector("#str"); // 문자입력
//   const box = document.querySelector("#box"); // 박스



// // input 에 작성된 값에 따라 #box에 스타일 추가
// box.style.width = boxWidth.value + "px";
// box.style.height = boxHeight.value + "px";
// box.style.fontSize = textsize.value + "px";

// box.style.fontWeight = weight.value;

// box.style.color = textcolor.value;
// box.style.backgroundColor = backgroundcolor.value;

// box.style.justifyContent = row.value;
// box.style.alignItems = col.value;

// box.innerText = content.value;

// });

// // 출력될 박스 객체
// const box = document.querySelector("#box");

// // 배경색, 글자색 적용할 div 배열
// const boxList = document.querySelectorAll("#box");

// // 배경색 입력할 input 배열
// const inputList = document.querySelectorAll(".backgroundcolor");

// // 글자색 입력할 input 배열
// const inputList2 = document.querySelectorAll(".textcolor");

// // 출력할 문자열 input
// const inputstr = document.querySelector(".str");

// // 각종 크기 입력 input
// const inputsize = document.querySelector("#box");

// const fontbold = document.getElementsByName("bold");

// // 배경색 바꾸기 (o)
// document.querySelector("#apply").addEventListener("click", () => {
//   for(let i = 0; i < boxList.length; i++) {
//     boxList[i].style.backgroundColor = inputList[i].value;
//   }
// });

// // 글자색 바꾸기 (o)
// document.querySelector("#apply").addEventListener("click", () => {
//   for(let i = 0; i < boxList.length; i++) {
//     boxList[i].style.color = inputList2[i].value;
//   }
// });

// // 입력한 문자 출력하기 (o)
// document.querySelector("#apply").addEventListener("click", () => {
//   box.innerText = inputstr.value;
// });

// // 너비 조정
// document.querySelector("#apply").addEventListener("click", () => {
//   box.style.width = width.value + "px";
// });

// // 높이 조정
// document.querySelector("#apply").addEventListener("click", () => {
//   box.style.height = height.value + "px";
// });

// // 글자 크기 조정
// document.querySelector("#apply").addEventListener("click", () => {
//   box.style.fontSize = textsize.value + "px";
// });

// // 굵기 조정
// document.querySelector("#apply").addEventListener("click", () => {

// });

// // 가로 정렬
// document.querySelector("#apply").addEventListener("click", () => {

// });

// // 세로 정렬
// document.querySelector("#apply").addEventListener("click", () => {

// });