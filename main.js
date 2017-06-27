//given a block of text, output the number of words in the longest sentence

function solution(S) {
  let sentences = S.split(/[.?!]/);
  console.log(sentences)
  
  let newArr = [];
  for (let i = 0; i < sentences.length; i ++) {
    newArr.push(sentences[i].split(' '));
    
  }
  let total = 0;
  console.log(newArr)
  let lengthArr = newArr.map(element => element.length);
  lengthArr.sort((a,b) => b - a);
  console.log(lengthArr[0]);
  
}

solution("We test coders. Give us a try?");

//needs a way to remove empty strings from arrays