function encodeAndDecodeMessages() {


    let resultWord;
    let decodeResult;
    EncodeBtn = document.querySelectorAll('button')[0]
    DecodeBtn = document.querySelectorAll('button')[1]


    EncodeBtn.addEventListener('click', e => {

        encodeMsg = document.getElementsByTagName('textarea')[0].value
        if (encodeMsg !== ''){
            resultWord = Array.from(encodeMsg).map(x => String.fromCharCode(x.charCodeAt(0) + 1))
            document.querySelectorAll('textarea')[0].value = ''
            DecodeTextArea = document.querySelectorAll('textarea')[1].value = resultWord.join('')
        }
         
    });

    DecodeBtn.addEventListener('click', e => {


        decodeResult = Array.from(resultWord).map(x => String.fromCharCode(x.charCodeAt(0) - 1));
        DecodeTextArea = document.querySelectorAll('textarea')[1].value = decodeResult.join('')

    });






}
