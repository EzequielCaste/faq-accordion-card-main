const arrow = document.querySelectorAll('#arrow');
const textLink = document.querySelectorAll('.question span');

Array.from(textLink).map( el => el.addEventListener('click', (e) => showHide(e)) );

Array.from(arrow).map( el => el.addEventListener('click', (e) => showHide(e) ));

function showHide(el) {  
  let id;

  if ( el.target.id.includes('arrow') ) {
    id = el.target.parentNode.children[0].id;
  } else {
    id = el.target.id;    
  }
  const answerDiv = document.querySelector(`.answer${id}`);
  answerDiv.classList.contains('show') ?
  answerDiv.classList.remove('show') :
  answerDiv.classList.add('show')
}

// // hide ALL answers
// const activeQuestions = document.querySelectorAll('.show');
// Array.from(activeQuestions).map( el => {       
//   el.classList.remove('show')
// })

// // remove ALL bold
// const activeBold = document.querySelectorAll('.bold')
// Array.from(activeBold).map( el => el.classList.remove('bold'))


// const id = el.target.parentNode.children[0].id;

// const answerDiv = document.querySelector(`.answer${id}`);

// answerDiv.classList.add('show');
// document.getElementById(`${id}`).classList.toggle('bold');