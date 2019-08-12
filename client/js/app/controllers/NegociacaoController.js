class NegociacaoController {

	constructor(){

		let $ = document.querySelector.bind(document)
		this.inputData = $('#data')
		this.inputQuantidade = $('#quantidade')
		this.inputValor = $('#valor')
	}

	//Criar metodo que recebera um evento
	adiciona(event){
		event.preventDefault()
		// |> bind para o this apontar para document



		console.log(`${this.inputData.value} ${this.inputQuantidade.value} ${this.inputValor.value}`)
	}
}
