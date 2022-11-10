/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let letters =words[0].split('');
    let arr =[];
    for(i=0;i<words.length;i++){
        for(j=0;j<=words[i].length;j++){
            if(letters.includes(words[i].charAt(j))){
                arr.push(words[i].charAt(j));
                letters.splice(letters.indexOf(words[i].charAt(j)),1);
            }
        }
        letters=arr;
        arr=[];
    }
    return letters;
};