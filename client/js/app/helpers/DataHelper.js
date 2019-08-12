class DateHelper{
  
  textoParaData(texto){
    return new Date(
      ...texto.split('-').map(
        (item, idx) => item - idx % 2
      )
    )
  }
  
  dataParaTexto(data){
    return `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`
  }
}