function copiarTexto() {
	var texto = document.getElementById('texto').innerText.trim()
	navigator.clipboard.writeText(texto)
	alert('Texto copiado al portapapeles')
}
