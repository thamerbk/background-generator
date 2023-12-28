let boxs = document.querySelector(".boxs")
let inputColor1 = document.getElementById("box1");
let inputColor2 = document.getElementById("box2");
let linear = document.querySelector(".linear");


// my way 1
// boxs.oninput = function () {
  //   let box1 = inputColor1.value;
  //   let box2 = inputColor2.value;
  
  //   document.body.style.background = `linear-gradient(to right, ${box1}, ${box2})`;
  //   linear.textContent = document.body.style.background + ";";
  // }
  

// anothor way 2
  function colorChange() {
    document.body.style.background = `linear-gradient(to right, ${inputColor1.value}, ${inputColor2.value})`;
  
    linear.innerHTML = document.body.style.background;
  }
  inputColor1.addEventListener("input", colorChange);
  inputColor2.addEventListener("input", colorChange);