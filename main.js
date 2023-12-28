let boxs = document.querySelector(".boxs")
let inputColor1 = document.getElementById("box1");
let inputColor2 = document.getElementById("box2");
let linear = document.querySelector(".linear");


// first way 1(without localStorage)
// boxs.oninput = function () {
  //   let box1 = inputColor1.value;
  //   let box2 = inputColor2.value;
  
  //   document.body.style.background = `linear-gradient(to right, ${box1}, ${box2})`;
  //   linear.textContent = document.body.style.background + ";";
  // }
  

  // second way 2(with localStorage)
  if(window.localStorage.getItem("background")) {
  document.body.style.background = window.localStorage.getItem("background");
  inputColor1.value = window.localStorage.getItem("value1")
  inputColor2.value = window.localStorage.getItem("value2")
  linear.innerHTML = window.localStorage.getItem("text");
}

  function colorChange() {
    window.localStorage.setItem("background", `linear-gradient(to right, ${inputColor1.value}, ${inputColor2.value})`)
    window.localStorage.setItem("value1", inputColor1.value)
    window.localStorage.setItem("value2", inputColor2.value)
    window.localStorage.setItem("text", document.body.style.background);

    document.body.style.background = `linear-gradient(to right, ${inputColor1.value}, ${inputColor2.value})`;

    linear.innerHTML = document.body.style.background;
  }

  inputColor1.addEventListener("input", colorChange);
  inputColor2.addEventListener("input", colorChange);
