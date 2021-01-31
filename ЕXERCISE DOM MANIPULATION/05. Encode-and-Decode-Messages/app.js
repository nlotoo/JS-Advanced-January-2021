function encodeAndDecodeMessages() {


    let resultWord = ""
    let decodeResult = ""
    EncodeBtn = document.getElementsByTagName('button')[0]
    DecodeBtn = document.getElementsByTagName('button')[1]



    EncodeBtn.addEventListener('click', e => {

        let encodeMsg = document.getElementsByTagName('textarea')[0].value


        for (let i = 0; i < encodeMsg.length; i++) {
            let x = encodeMsg[i]
            resultWord += String.fromCharCode(x.charCodeAt(0) + 1)
        }

        document.getElementsByTagName('textarea')[0].value = ''
        document.getElementsByTagName('textarea')[1].value = resultWord
    });

    DecodeBtn.addEventListener('click', d => {

        decodeMsg = resultWord

        for (let i = 0; i < decodeMsg.length; i++) {
            let d = decodeMsg[i];
            decodeResult += String.fromCharCode(d.charCodeAt(0) - 1)
        }

       document.getElementsByTagName('textarea')[1].value = decodeResult

    });

}
