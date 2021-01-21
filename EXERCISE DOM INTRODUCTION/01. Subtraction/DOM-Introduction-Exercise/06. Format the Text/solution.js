function solve() {


  textAreaElement = document.getElementById('input').value
  arrayFromTextArea = textAreaElement.split('. ')

  outputDivElement = document.getElementById('output')


  let result = ''
  let counter = 0;

  for (let i = 0; i < arrayFromTextArea.length; i++) {
    counter++
    result += arrayFromTextArea[i]
    if (counter === 3) {
      p = document.createElement('p');
      p.textContent = result
      outputDivElement.appendChild(p)

      result = ''
      counter = 0;
    }
  }


  if (counter < 3) {
    p = document.createElement('p');
    p.textContent = result
    outputDivElement.appendChild(p)
    result = ''
  }


}