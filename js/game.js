function play() {
    removeHomeScreen('home');
    addPlayGround('play');
    setAlphabet('alphabet');
    
}
function removeHomeScreen(events){
 const remove = document.getElementById(events);
 remove.classList.add('hidden')
 
}
function addPlayGround(events){
    const add = document.getElementById(events);
    add.classList.remove('hidden');
}
function getRandomAlphabet(){
    const alpabetStrings = 'abcdefghijklmnopqrstuvwxyz'
    const alpabetArray = alpabetStrings.split('');
    const random = Math.random() * 25;
    const index = Math.round(random);
    const alphabet = alpabetArray[index];
    return alphabet;

}
function setAlphabet(events){
    const alphabets = getRandomAlphabet();
  const setAlphabets = document.getElementById(events);
  setAlphabets.innerText = alphabets;
}


function alphabetBgColor(events){
    const findAlpabet = document.getElementById(events);
    findAlpabet.classList.add('bg-orange-700');
}

 alphabetBgColor(alphabets);


