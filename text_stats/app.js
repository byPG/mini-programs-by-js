let textArea = document.getElementsByTagName("textarea")[0];

textArea.addEventListener("input", onChange)

function onChange(e) {
    const data = textArea.value;
    const numCharacters = data.length;
    const numWords = data.replace(/[\r\n]/g, " ").split(" ").length;
    const numSentences = data.split(".").length;

    document.getElementById("num-characters").innerHTML = numCharacters;
    document.getElementById("num-words").innerHTML = numWords;
    document.getElementById("num-sentences").innerHTML = numSentences;
    
}
