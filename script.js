
const gliss = document.querySelector(".glisser"),
  dragText = gliss.querySelector("header"),
  button = gliss.querySelector("button"),
  input = gliss.querySelector("input");
let file;
button.onclick = () => {
  input.click();
}
input.addEventListener("change", function () {
  file = this.files[0];
  gliss.classList.add("active");
  showFile();
});
gliss.addEventListener("dragover", (event) => {
  event.preventDefault();
  gliss.classList.add("active");
  dragText.textContent = "mettez votre image";
});

gliss.addEventListener("dragleave", () => {
  gliss.classList.remove("active");
  dragText.textContent = "Deplacer la photo ici";
});
gliss.addEventListener("drop", (event) => {
  event.preventDefault();
  file = event.dataTransfer.files[0];
  showFile();
});
function showFile() {
  let fileType = file.type;
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"];
  if (validExtensions.includes(fileType)) {
    let fileReader = new FileReader();
    fileReader.onload = () => {
      let fileURL = fileReader.result;
      let imgTag = `<img src="${fileURL}" alt="image" id="photo">`;
      gliss.innerHTML = imgTag;
    }
    fileReader.readAsDataURL(file);
  } else {
    alert("ce n'est pas une image!");
    gliss.classList.remove("active");
    dragText.textContent = "Deplacer la photo ici";
  }
}


let boutoncreer = document.querySelector(".creer");
let contact = document.querySelector(".box-trois");

boutoncreer.addEventListener("click", (e) => {
  e.preventDefault();

  let prenom = document.getElementById("prenom").value;
  let nom = document.getElementById("nom").value;
  let groupe = document.getElementById("groupe").value;
  let telephone = document.getElementById("telephone").value;
  let bio = document.getElementById("bio").value;
  let photo=document.getElementById("photo").src;
 

  let list = `    
  <div class="box-trois">
  <img src=${photo}>
  <div class="texte">
    <h3>${prenom} ${nom}-${groupe}  <i class="fa-solid fa-user-pen"></i><i id="delete"onclick="onDelete (this)" class="fa-solid fa-trash-can"></i></h3>
    <div id="phone">${telephone}</div>
    <p>${bio}</p>
  </div>
</div>
  


`
  let contact = document.querySelector(".contact")
  contact.innerHTML += list
});
function onDelete(del){
  supprimer= del.parentElement.parentElement.parentElement;
  supprimer.remove();
}

