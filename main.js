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

