function solve() {


  textArea = document.getElementById('text').value.toLowerCase()
  arrayOfword = textArea.split(' ')
  result = ''
  conventionElement = document.getElementById('naming-convention').value
  resultContainer = document.getElementById('result')
  console.log(resultContainer)

  if (conventionElement === 'Camel Case') {
    for (let i = 0; i < arrayOfword.length; i++) {
      if (i === 0) {
        result += arrayOfword[i]
      } else {
        word = arrayOfword[i][0].toUpperCase()
        lastwords = arrayOfword[i].slice(1)
        result += word + lastwords
      }
      resultContainer.textContent = result
    }

  } else if (conventionElement === 'Pascal Case') {
    for (let i = 0; i < arrayOfword.length; i++) {
      word = arrayOfword[i][0].toUpperCase()
      lastwords = arrayOfword[i].slice(1)
      result += word + lastwords
    }
    resultContainer.textContent = result

  } else {
    resultContainer.textContent ='Error!'
  }


}