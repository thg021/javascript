class NegociacaoController {

	//Criar metodo que recebera um evento
	adiciona(event){
		event.preventDefault()
		// |> bind para o this apontar para document

		let $ = document.querySelector.bind(document)

		console.log($)

		let inputData = $('#data')
		let inputQuantidade = $('#quantidade')
		let inputValor = $('#valor')

		console.log(`${inputData.value} ${inputQuantidade.value} ${inputValor.value}`)
	}
}
