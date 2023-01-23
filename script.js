const counter = document.querySelector(".count"),
  showGen = document.querySelector(".generate"),
  showReset = document.querySelector(".reset"),
  button = document.querySelector(".button");

genBtn = () => {
  showReset.style.display = "none";
  showGen.style.display = "inline-block";
};

resetBtn = () => {
  showReset.style.display = "inline-block";
  showGen.style.display = "none";
};

generateNum = (e) => {
  if (e.target.classList.contains("generate")) {
    randomNum = Math.floor(Math.random() * 10);
    counter.innerHTML = randomNum;
    resetBtn();
  }

  if (e.target.classList.contains("reset")) {
    counter.innerHTML = 0;
    genBtn();
  }
};

button.addEventListener("click", generateNum);
