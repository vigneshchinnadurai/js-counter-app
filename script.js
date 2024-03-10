const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (event) => {
  let currentValue = Number.parseInt(count.innerHTML);
  if (event.target.classList.contains("add")) {
    currentValue += 1;
    count.innerHTML = currentValue;
    setColor();
  }
  if (event.target.classList.contains("subtract")) {
    currentValue -= 1;
    count.innerHTML = currentValue;
    setColor();
  }
  if (event.target.classList.contains("reset")) {
    currentValue = 0;
    count.innerHTML = currentValue;
    setColor();
  }
});

const setColor = () => {
  if (count.innerHTML > 0) {
    count.style.color = "yellow";
  } else if (count.innerHTML < 0) {
    count.style.color = "orangered";
  } else {
    count.style.color = "#fff";
  }
};
