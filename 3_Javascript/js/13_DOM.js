// Node 확인하기

document.querySelector("#btn1").addEventListener("click", () => {
  const test = document.querySelector("#test"); // ul

  console.log(test);

  // #test 의 모든 자식 노드 얻어오기
  // 요소.childNodes -> 배열
  const list = test.childNodes;
  console.log(list);
})