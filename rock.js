let sc = JSON.parse(localStorage.getItem('sc')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

let lg = JSON.parse(localStorage.getItem('lg')) || {
  am: '.?',
  cm: '.?',
  R: "Let's Begin",
  rse : 'Test Your Luck!'
};


document.querySelector('.Score')
  .innerHTML = `Wins : ${sc.wins} , Losses : ${sc.losses} and Ties : ${sc.ties}`;

  document.querySelector('.Com').innerHTML = `Your Choice - ${lg.am}. Computer Choice - ${lg.cm}`;

document.querySelector('.Your-score').innerHTML = `${lg.R}`;

document.querySelector('.rse').innerHTML = `${lg.rse}`;

function pg(myc){

lg.am = myc ;
let cc  = '';
  const rm = Math.random() ;
  if ( rm > 0 && rm < 1/3) {
    cc = 'Rock';
  }
  else if ( rm > 1/3 && rm < 2/3) {
    cc = 'Paper';
  }
  else if ( rm > 2/3 && rm < 1) {
    cc= 'Scissors';
  }
lg.cm = cc ;
let r = '';
if ( (myc ==='Rock' && cc === 'Scissors') || (myc ==='Scissors' && cc === 'Paper') || (myc ==='Paper' && cc === 'Rock') ) {
  r = 'You Won!! 🎉';
  sc.wins +=1 ;
}
else if ( (myc ==='Rock' && cc === 'Paper') || (myc ==='Scissors' && cc === 'Rock') || (myc ==='Paper' && cc === 'Scissors') ) {
  r = 'You Lose. 😢';
  sc.losses += 1 ;
}
else {
  r = 'Tied.'
  sc.ties += 1 ;
}
lg.R = r ;

localStorage.setItem('lg',JSON.stringify(lg)) ; 

document.querySelector('.Com').innerHTML = `Your Choice - ${lg.am}. Computer Choice - ${lg.cm}`;

document.querySelector('.Your-score').innerHTML = `${lg.R}`;

localStorage.setItem('sc',JSON.stringify(sc));


document.querySelector('.Score')
.innerHTML = `Wins : ${sc.wins} , Losses : ${sc.losses} and Ties : ${sc.ties}`;
}
function don(){
  let rse = '' ;
  if (sc.wins > sc.losses) {
      rse ='You Won The Game !!! 🏆';
  } else if (sc.wins < sc.losses) {
      rse = 'You Lost The Game. 😔';
  } else if ((sc.wins === 0 && sc.ties ===0)&&(sc.losses===0)) {
      rse = 'Test Your Luck!';
  } else {
rse = 'Match Tied! 🤝';
  }
  lg.rse = rse ;
  localStorage.setItem('lg',JSON.stringify(lg)) ; 
  document.querySelector('.rse').innerHTML = `${lg.rse}`;


  sc.wins = 0 , sc.losses = 0 , sc.ties = 0 ;
document.querySelector('.Score')
.innerHTML = `Wins : ${sc.wins} , Losses : ${sc.losses} and Ties : ${sc.ties}`;


    localStorage.setItem('sc', JSON.stringify(sc));

lg.am = 'NaN' , lg.cm = 'NaN' , lg.R = "Let's Begin " ;
lg.rse = 'Test Your Luck!';
localStorage.setItem('lg',JSON.stringify(lg)) ; 
document.querySelector('.Com').innerHTML = `Your Choice - ${lg.am}. Computer Choice - ${lg.cm}`;
document.querySelector('.Your-score').innerHTML = `${lg.R}`;
}


function reserScore(){
sc.wins = 0 , sc.losses = 0 , sc.ties = 0 ;
document.querySelector('.Score')
.innerHTML = `Wins : ${sc.wins} , Losses : ${sc.losses} and Ties : ${sc.ties}`;


    localStorage.setItem('sc', JSON.stringify(sc));

lg.am = 'NaN' , lg.cm = 'NaN' , lg.R = "Let's Begin " ;
lg.rse = 'Test Your Luck!';
localStorage.setItem('lg',JSON.stringify(lg)) ; 
document.querySelector('.Com').innerHTML = `Your Choice - ${lg.am}. Computer Choice - ${lg.cm}`;

document.querySelector('.rse').innerHTML = `${lg.rse}`;

document.querySelector('.Your-score').innerHTML = `${lg.R}`;


}

