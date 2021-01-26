function create(words) {

   let motherDiv = document.getElementById('content');



   for (let i = 0; i < words.length; i++) {
      let divSection = document.createElement('div');
      let para = document.createElement('p');
      para.textContent = words[i];
      para.style.display = 'none'
      divSection.appendChild(para);
      motherDiv.appendChild(divSection)
   }

   let onButn = document.getElementById('content');


   onButn.addEventListener('click', event => {
      event.target.children[0].style.display='block'
   });


}