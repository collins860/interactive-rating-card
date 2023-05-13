function btnfunc(){
  const thankYouE1 = document.getElementById('thankYou');
  const cardE1 = document.querySelector('.card');
  const nxtPage = cardE1.innerHTML = thankYouE1.innerHTML;
}

function clNum(num){
  const selectE1 = document.getElementById('select');
 const value = num;
 const select = selectE1.innerHTML = `you selected ${num} out of 5`;
}