const biggestWord = s => s.split(' ').sort((a,b)=>a.length-b.length)[s.split(' ').length-1];

console.log(biggestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));