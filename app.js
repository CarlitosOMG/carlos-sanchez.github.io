function copiarTexto() {
	var texto = document.getElementById('texto').innerText.trim()
	navigator.clipboard.writeText(texto)
	alert('Correo electrónico copiado al portapapeles')
}
