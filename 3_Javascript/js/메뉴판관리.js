const name = document.querySelector("#resName");
const input = document.querySelector("#resNameInput");

name.addEventListener("click", (e) => {
  name.classList.add("res-name-hidden");
  input.classList.remove("res-name-hidden");
  input.focus();
});

input.addEventListener("blur", (e) => {
  name.classList.remove("res-name-hidden");
  input.classList.add("res-name-hidden");
  if(name.textContent == " ") {
    name.value == "식당명을 입력하세요";
    }  name.textContent = input.value;
});