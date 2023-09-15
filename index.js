function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  function moveDodgerRight() {
    const dodger = document.getElementById("dodger");
    const left = dodger.style.left;
    let newLeft = parseInt(left) + 1;
  
    if (newLeft <= window.innerWidth) {
      dodger.style.left = `${newLeft}px`;
    }
  }

