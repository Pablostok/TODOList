function addItem(){
    var textoFormulario = document.querySelector('#tareaARecoger').value;
    console.log(textoFormulario);

    var div = document.createElement("div");
    div.classList.add("estilo-item");
    var paragraph = document.createElement("p");

    div.appendChild(paragraph);
    paragraph.innerText = textoFormulario;

    var container = document.querySelector(".Container");
    container.appendChild(div);
}