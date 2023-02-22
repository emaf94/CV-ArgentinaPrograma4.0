/* actualizar pestaña activa */
const list = document.querySelectorAll('.nav-link');
function activelink(){
		list.forEach((item) =>
		item.classList.remove('active'));
		this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click', activelink));

/* oculto 2 secciones y el formulario y muestro mensaje */
document.getElementById("enviar").addEventListener("click", function () {
    document.getElementsByClassName("habilidades")[0].style.display = "none";
    document.getElementsByClassName("experiencia")[0].style.display = "none";
    document.getElementById("form").style.display = "none";
    document.getElementById("contacto").innerText = "Gracias por contactarme, muy pronto recibirás una respuesta.";
    document.getElementById("contacto").style.textAlign = "center";
})