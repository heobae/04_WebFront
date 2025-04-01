const bomberman = document.querySelector("img");
let x = 0, y = 0; // 현재 위치 저장


// 키를 누르면 이동
document.addEventListener("keydown", function (e) {
   // 봄버맨 요소 선택
 
  if (e.key === "ArrowUp") y -= 5;
  if (e.key === "ArrowDown") y += 5;
  if (e.key === "ArrowLeft") x -= 5;
  if (e.key === "ArrowRight") x += 5;

  // translate를 이용해 이동 적용
  bomberman.style.transform = `translate(${x}px, ${y}px)`;

});

// 'x' 라는 키를 누르면 box에 innerHTML += `<img 폭탄이미지>`
// box.innerHTML += .. 을 실행하는 과정에서 DOM이 리렌더링됨.
// 기존에 bomberman을 가리키던 const bomberman = document.querySelector("#bomberman")
// 이 더이상 유효하지 않은 변수가 됨.
// bomberman.style.transform = 변경된 좌표;
// 기존 변수인 bomberman은 더이상 유효한 DOM요소가 아니기 때문에 스타일 변경이 적용X



