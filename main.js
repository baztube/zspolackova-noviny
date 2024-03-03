const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add("show")
    } else {
      entry.target.classList.remove("show")
    }
  })
})

const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el) => observer.observe(el))

function showmore() {
  const toffifee = document
    .getElementById("showMore")
    .classList.contains("showMore")
  if (toffifee === true) {
    document.getElementById("showMore").classList.remove("showMore")
    document.getElementById(
      "showMoreLink"
    ).innerHTML = `<span class="material-symbols-outlined">
      expand_less
      </span>Schovat všechny články`
  } else {
    document.getElementById("showMore").classList.add("showMore")
    document.getElementById(
      "showMoreLink"
    ).innerHTML = `<span class="material-symbols-outlined">
      expand_more
      </span>Načíst všechny články`
  }
}


const mario = document.getElementById("easter-egg")
const sequenceToDetect = "mario";
let currentPosition = 0;

// Add event listener for key presses
document.addEventListener('keydown', function(event) {
    if (event.key === sequenceToDetect[currentPosition]) {
        currentPosition++;
        
        // Check if the entire sequence has been detected
        if (currentPosition === sequenceToDetect.length) {
          mario.style.top = "0px"
          var audio = new Audio('mario.mp3');
audio.play();
          setTimeout(function() {
            mario.style.top = "-100px"
        }, 3000);
            console.log("Sequence detected!");
            currentPosition = 0;
        }
    } else {
        currentPosition = 0;
    }
});