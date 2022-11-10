/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let word =words[0].split('');
    let arr =[];
    for(i=0;i<words.length;i++){
        for(j=0;j<=words[i].length;j++){
            if(word.includes(words[i].charAt(j))){
                arr.push(words[i].charAt(j));
                word.splice(word.indexOf(words[i].charAt(j)),1);
            }
        }
        word=arr;
        arr=[];
    }
    return word;
};