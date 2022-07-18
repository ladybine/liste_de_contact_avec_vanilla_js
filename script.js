

let idAModifier="";
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


const rest=document.querySelector(".reinit")
rest.addEventListener('click',()=>{
  document.querySelector('#photo').remove();
  gliss.innerHTML+=`<header>Deplacer la photo ici </header>
  <span>Ou</span>
  <button>Télecharger</button>`

})


  let boutoncreer = document.querySelector(".creer");
  let contact = document.querySelector(".box-trois");
  
  boutoncreer.addEventListener("click", (e) => {
    e.preventDefault();

    

    let prenom = document.getElementById("prenom").value;
  let nom = document.getElementById("nom").value;
  let groupe = document.getElementById("groupe").value;
  let telephone = document.getElementById("telephone").value;
  let bio = document.getElementById("bio").value;
  let photo = document.getElementById("photo").src;


  document.getElementById("prenom").value='';
  document.getElementById("nom").value='';
  document.getElementById("groupe").value='';
 document.getElementById("telephone").value='';
  document.getElementById("bio").value='';
  document.getElementById("email").value='';
 document.getElementById("photo").src='';
 
 

  if(idAModifier===""){  
  
  let id=generate();

  let list = `    
  <div class="box-trois" id="${id}">
  <img src=${photo} class="photo">
  <div class="texte">
  <div class="information">
    <p class="prenom">${prenom}</p>
    <p class="nom">${nom}</p> <p>-</p> 
    <p class="groupe">${groupe}<p>
    </div>
    <div id="phone">${telephone}</div>
    <p class="bio">${bio}</p>
  </div>
  <div class="icone">
  <i id="modifier" onclick="modifier(this, '${id}')" class="fa-solid fa-user-pen"></i><i id="delete"onclick="onDelete(this)" class="fa-solid fa-trash-can"></i>
  </div>
</div>
`;
  let contact = document.querySelector(".contact")
  contact.innerHTML += list
} else {
  document.querySelector(`#${idAModifier} .prenom`).textContent = prenom;
document.querySelector(`#${idAModifier} .nom`).textContent = nom;
document.querySelector(`#${idAModifier} #phone`).textContent = telephone;
document.querySelector(`#${idAModifier} .bio`).textContent = bio;

  
} 
idAModifier="";
let creer=document.querySelector(".modifiertext");
creer.textContent="créer";


});
function generate() {
    return 'id-' + Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
  }



function onDelete(del) {
supprimer = del.parentElement.parentElement;
supprimer.remove();
    
}


function modifier(mod, id){
change=mod.parentElement.parentElement;

document.getElementById("prenom").value=change.querySelector(".prenom").innerHTML;
document.getElementById("nom").value=change.querySelector(".nom").innerHTML;
document.getElementById("groupe").value=change.querySelector(".groupe").innerHTML;
document.getElementById("telephone").value=change.querySelector("#phone").innerHTML;
document.getElementById("bio").value=change.querySelector(".bio").innerHTML;

//document.getElementById("photo").src=change.querySelector("#photo").src;
let modifier=document.querySelector(".creer");
modifier.textContent="modifier";
modifier.className="modifiertext";
idAModifier=id.toString();


}

