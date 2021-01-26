function solve() {


  textAreaElement = document.getElementById('input').value
  arrayFromTextArea = textAreaElement.split('.').filter(x => x !== '')
  outputDivElement = document.getElementById('output')


  let result = [];



  arrayFromTextArea.forEach(x => {
    result.push(x)
    if (result.length % 3 == 0) {
      p = document.createElement('p');
      p.textContent = result.join('.')+'.'
      outputDivElement.appendChild(p)
      result = [];

    }
  })

  if (result.length < 3 && result.length > 0) {
    p = document.createElement('p');
    p.textContent = result.join('.')+'.'
    outputDivElement.appendChild(p)
    result = [];
  }


}