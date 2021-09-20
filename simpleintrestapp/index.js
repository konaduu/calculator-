function validateForm() {
    let Form = document.getElementById("myForm");
    if (Form == 0) {
      alert("Forms must be filled out");
      return false;
    }
  }
    

  let btn = document.getElementById("btn");
  btn.onclick =  function calculate () {
    p = document.getElementById ("Principal").value;
    t = document.getElementById ("Time").value;
    r = document.getElementById ("Rate").value;
    result = document.getElementById("result");             
    result.innerHTML = "The interest is " + (p*t*r/100);
      };

//   let buttn2 = document.getElementById("buttn2");
  function solve () {
      x = document.getElementById ("x").value;
      s = document.getElementById("s").value;
      c = document.getElementById("c").value;
      solution = document.getElementById("solution");
      solution.innerHTML = "Therefore it is " + (Math.pow(x,2) + s*x + c );
       
    };