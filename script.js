const message = document.getElementById("message")

/*
1. Split message words and store it in an array.
2. Display in CONSOLE the number of elements in the array and the most frequent word in the array
*/


// Random phrases and its pictures (represented as an array of objects)
function isCharacterALetter(char) {
  return (/[a-zA-Z]/).test(char)
}
const randomPhrasesAndPictures = [
    {
        phrase: "A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey",
        imageURL: "https://i.pinimg.com/600x315/aa/eb/49/aaeb4941ff8afe1bf468c148926c1bdd.jpg"
    },
    {
        phrase: "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore",
        imageURL: "https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg"
    },
    {
        phrase: "You are a wizard, Harry (c) Hagrid",
        imageURL: "https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg"
    }
]
function myfunction() {
    let messageWords = []
    let theMostFrequentWord;
    let numberOfWordsInTheMessage = 0;

    var text = document.getElementById("message").value;
        
    for(var i = 0;i<=text.length;++i){
        var cur = text[i];
        if(cur == " "){
            numberOfWordsInTheMessage+=1;
        }
    }
    numberOfWordsInTheMessage+=1;
    var i = 0, pos = 0;
    var curword = "";
    while(text.length > i){
        var cur = text[i];
        if(isCharacterALetter(cur)){
            curword+=cur;
        }else{
            curword = curword.toUpperCase();
            messageWords[pos] = curword;
            curword = ""
            pos++;
        }
        i++
    }
    curword = curword.toUpperCase();
    messageWords[pos] = curword;
            
    i = 0;
    var maxWord="", max = 0;
    while(messageWords.length > i){
        var cur = messageWords[i];
        var numofWord = 0;
        for(var j=0;j<messageWords.length; ++j){
            if(i != j){
                if(messageWords[j] == cur){
                    numofWord+=1;
                }
            }
        }
        if(max <numofWord){
            max = numofWord;
            maxWord = cur;
        }
        i++;
    }
    if(max == 0){
        maxWord = cur;
    }
    maxWord=maxWord.toLowerCase();
    theMostFrequentWord=maxWord;
    console.log(`The most frequent word of the message is "${theMostFrequentWord}"`)    
    console.log(`The number of words in the message is ${numberOfWordsInTheMessage}`)
    var randomNumber= Math.floor(Math.random() * 3);
    document.getElementById("phrase").innerHTML= randomPhrasesAndPictures[randomNumber].phrase;
    document.getElementById("picture").src=randomPhrasesAndPictures[randomNumber].imageURL;
}

