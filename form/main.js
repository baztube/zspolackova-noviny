let name = ""
let description = ""
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

function previewFile() {
  const file = document.getElementById("image");
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    () => {
      image = reader.result;
    },
    false,
  );

  if (file) {
    reader.readAsDataURL(file);
  }
}


function getData(){
name = document.getElementById("name").value
description = document.getElementById("description").value
urlName = document.getElementById("urlName").value
lenght = document.getElementById("lenght").value
minutes = document.getElementById("minutes").value
author = document.getElementById("author").value
imageAuthor = document.getElementById("imageAuthor").value
linkToImage = document.getElementById("linkToImage").value
alt = document.getElementById("linkToImage").value
category = document.getElementById("category").value
text = document.getElementById("text").value

const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const yyyy = today.getFullYear();
date = dd + '.' + mm + '. ' + yyyy;
console.log("succes")
buildPage()
}

function buildPage(){  
    let page = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${name} - Školní noviny ZŠ Poláčkova</title>
        <link rel="icon" type="image/x-icon" href="../logo-light.png" />
      </head>
    
      <style>
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    html{
      scroll-behavior: smooth;
    }
    
    body {
      font-family: "Poppins", sans-serif;
      display: flex;
      justify-content: center;
      height: 100vh;
      color: #fff;
      background-color: #202020;
      padding: 50px;
    }
    
    body .container {
      max-width: 1000px;
    }
    
    body .container header { 
      background: linear-gradient(#0000, #000f), url("${previewFile()}") center / cover no-repeat ;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 400px;
      padding: 20px 50px 60px;
      border-radius: 16px;
    }
    
    body .container header .category .name {
      font-size: 1.2rem;
      font-weight: bold;
      letter-spacing: 0.3rem;
      text-transform: uppercase;
    }
    
    .name {
      font-weight: 700;
      font-size: 2rem;
      color: #fff;
      text-decoration: none;
    }
    
    .name:hover {
      color: #fff;
    }
    
    .icon{
      -webkit-user-drag: none;
      user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      height: 3rem;
      width: 3rem;
      margin-right: 16px;
    }
    
    body .container header .info {
      text-align: center;
    }
    
    body .container header .info .tags i {
      font-size: 18px;
      margin-right: 4px;
    }
    
    body .container header .info .tags span {
      font-size: 0.8rem;
    }
    
    body .container header .info .title {
      margin: 20px 0;
      font-size: 3rem;
      font-weight: bold;
    }
    
    body .container header .info .subtitle {
      min-width: 70%;
      margin: 0 auto 20px;
      font-size: 1rem;
    }
    
    body .details {
      display: flex;
      justify-content: space-between;
      background: rgba(0, 0, 0, 0.14);
      margin-top: 50px;
      padding: 20px 50px;
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(0, 0, 0, 0.68);
    }
    
    body .details .item .item-title {
      color: #ddd;
    }
    
    body .details .item .item-text {
      margin-top: 12px;
      font-size: 1.5rem;
    }
    
    body article {
      margin-top: 50px;
      padding-bottom: 20px;
      line-height: 1.7;
    }
    
    body article h4 {
      margin-top: 50px;
      margin-bottom: 20px;
      font-size: 1.25rem;
    }
    
    body article p {
      margin-bottom: 20px;
      color: #ddd;
      font-size: 1.1rem;
    }
    
    body article blockquote {
      margin: 40px 0;
      background-color: #181818;
      padding: 30px;
      border-radius: 16px;
    }
    
    a {
      color: #fff;
      transition: 250ms;
    }
    
    a:active {
      color: #999;
    }
    
    ::-moz-selection {
      color: #181818;
      background: #ccca;
    }
    
    ::selection {
      color: #181818;
      background: #ccca;
    }
    
    .news-title{
      display: flex;
    }
    
    .article{
      color: #ddd;
    }
    
    @media screen and (max-width: 750px) {
      body .container header {
        padding: 10px 20px 30px;
        min-height: 300px;
      }
    
      body .container header .category .name {
        font-size: 0.9rem;
      }
    
      body .container header .info .title {
        font-size: 2.2rem;
      }
    
      body .container header .info .subtitle {
        font-size: 0.8rem;
      }
    
      body .container .details {
        flex-direction: column;
      }
    
      body .container .details .item:not(:last-child) {
        margin-bottom: 30px;
      }
    
      .name{
        font-size: 1rem;
      }
    }
    
      </style>
    
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
                <span>${category}</span>
              </div>
              <h1 class="title">${name}</h1>
              <p class="subtitle">
              ${description}
              </p>
            </div>
          </header>
    
          <section class="details">
            <div class="item">
              <h5 class="item-title">Délka</h5>
              <p class="item-text"><span class="item-data">${lenght}</span> ${minutes}</p>
            </div>
            <div class="item">
              <h5 class="item-title">Datum zveřenění</h5>
              <p class="item-text">
                <span class="item-data">${date}</span>
              </p>
            </div>
            <div class="item">
              <h5 class="item-title">Napsal</h5>
              <p class="item-text"><span class="item-data">${author}</span></p>
            </div>
            <div class="item">
              <h5 class="item-title">Autor obrázku</h5>
              <p class="item-text">
                <span class="item-data"
                  ><a
                    target="_blank"
                    href="${linkToImage}"
                    >${imageAuthor}
                  </a>
                </span>
              </p>
            </div>
          </section>
          <article>
            ${text}
          </article>
        </div>
        
      </body>
    </html>
    
    `

    var myWindow = window.open("", "MsgWindow", "width=800,height=600");
  myWindow.document.write(page);
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
