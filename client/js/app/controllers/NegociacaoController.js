class NegociacaoController {

	constructor(){
		// |> bind para o this apontar para document
		let $ = document.querySelector.bind(document)
		this._inputData = $('#data')
		this._inputQuantidade = $('#quantidade')
		this._inputValor = $('#valor')
	}

	//Criar metodo que recebera um evento
	adiciona(event){
		event.preventDefault()
		console.log(this._inputData.value)
		
		
		//converte o horario para tipo date.
	/*	let data =new Date(
		  ...this._inputData.value.split("-").map(
		    (item, idx) => {
		      if (idx === 1){
		        item -= 1
		      }
		      console.log(item)
		      return item
		    })
		  )*/
		let helper = new DateHelper();
		let data = new DateHelper().textoParaData(this._inputData.value)
		console.log(data)
		//let data = new Date(this._inputData.value.replace(/-/g, ','))
		let negociacao = new Negociacao(
			helper.dataParaTexto(this._inputData.value),
			this._inputQuantidade.value,
			this._inputValor.value
		)

		// ==> adicionar a negociação em uma lista
		
	}
}
