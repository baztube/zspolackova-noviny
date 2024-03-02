let name = ""
let urlName = ""
let lenght = ""
let minutes = ""
let author = ""
let imageAuthor = ""
let linkToImage = ""
let alt = ""
let image = ""
let category = ""
let text = ""
let date = ""

function getData(){
name = document.getElementById("name")
urlName = document.getElementById("urlName")
lenght = document.getElementById("lenght")
minutes = document.getElementById("minutes")
author = document.getElementById("author")
imageAuthor = document.getElementById("imageAuthor")
linkToImage = document.getElementById("linkToImage")
alt = document.getElementById("linkToImage")
image = document.getElementById("image")
category = document.getElementById("category")
text = document.getElementById("text")

const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();
date = dd + '.' + mm + '. ' + yyyy;
console.log("succes")
}

function buildPage(){
    let page = `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>`+ name.value  +` - Školní noviny ZŠ Poláčkova</title>
    <link rel="icon" type="image/x-icon" href="../logo-light.png" />
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <div class="container">
      <header>
        <div class="news-title">
          <a href="../index.html"
            ><img class="icon" src="../logo-light.png" /></a
          ><a href="../index.html" class="name">ŠKOLNÍ NOVINY ZŠ POLÁČKOVÁ</a>
        </div>
        <div class="info">
          <div class="tags">
            <i class="fa-solid fa-tag"></i>
            <span>Sport, Soutěž</span>
          </div>
          <h1 class="title">Úspěch ve sportovní soutěži</h1>
          <p class="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            consequatur cupiditate incidunt cumque illo alias, odit dolorem et
            reprehenderit.
          </p>
        </div>
      </header>

      <section class="details">
        <div class="item">
          <h5 class="item-title">Délka</h5>
          <p class="item-text"><span class="item-data">3</span> Minuty</p>
        </div>
        <div class="item">
          <h5 class="item-title">Datum zveřenění</h5>
          <p class="item-text">
            <span class="item-data">Květen 27, 2023</span>
          </p>
        </div>
        <div class="item">
          <h5 class="item-title">Napsal</h5>
          <p class="item-text"><span class="item-data">Petr Novák</span></p>
        </div>
        <div class="item">
          <h5 class="item-title">Autor obrázku</h5>
          <p class="item-text">
            <span class="item-data"
              ><a
                target="_blank"
                href="https://pixabay.com/photos/football-soccer-ball-stadium-sport-4761895/"
                >brokerx</a
              ></span
            >
          </p>
        </div>
      </section>
      <article>
        <h4>Podkategorie 1</h4>
        <p>
          V ranních hodinách se smíšený výběr bojovníků a bojovnic ze ZŠ
          Poláčkova vydal na bitevní pole ABC Braník. Náš tým čekal souboj s
          každou přihlášenou základní školou, což byly celkem 4 bitvy. Obranná
          trojice si pro soupeře namíchala nepropustný beton, který byl poprvé
          překonán až ve třetím souboji. Gól padl nikoliv z kopačky
          nepřátelského útočníka, nýbrž nešťastným odrazem od našeho obránce.
          Naštěstí zbytek týmu zahrál virtuózní ofenzivní představení, jehož
          výsledkem bylo celkem 12 gólů a radost při vítězném zdvižení poháru
          nad hlavu.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id illo nisi
          laborum ipsum recusandae eius molestias, dolore consectetur
          praesentium aperiam odio accusantium dicta, deleniti illum incidunt.
          Earum aliquam doloremque quasi.
        </p>
        <blockquote>
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum, dolore consectetur
          praesentium aperiam odio accusantium dicta, deleniti illum incidunt. "
          &mdash; Někdo
        </blockquote>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </article>
    </div>
    
  </body>
</html>
    `

    return(page)
}


function imagePreview(){
  const preview = document.getElementById("preview")
  const image = document.getElementById("image")
  const alt = document.getElementById("alt").value
  const [file] = image.files
  if (file) {
    preview.src = URL.createObjectURL(file)
    preview.alt = alt
  }
}

function previewFile() {
  const preview = document.querySelector("img");
  const file = document.getElementById("image").files[0];
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    () => {
      // convert image file to base64 string
      const uri = reader.result;
      console.log(uri)
    },
    false,
  );

  if (file) {
    reader.readAsDataURL(file);
  }
}
