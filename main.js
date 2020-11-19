const arrow = document.querySelectorAll('#arrow');
const textLink = document.querySelectorAll('.question span');

Array.from(textLink).map( el => el.addEventListener('click', (e) => showHide(e)) );

Array.from(arrow).map( el => el.addEventListener('click', (e) => showHide(e) ));

function showHide(el) {
  // hide ALL answers
  const activeQuestions = document.querySelectorAll('.show');
  Array.from(activeQuestions).map( el => {    
    el.classList.remove('show')
  })

  // remove ALL bold
  const activeBold = document.querySelectorAll('.bold')
  Array.from(activeBold).map( el => el.classList.remove('bold'))

  //const name = `answer${el.target.parentNode.id}`;
  //const answerDiv = document.querySelector(`.${name}`);
  
  const id = el.target.parentNode.children[0].id;
  // console.log(id);
  const answerDiv = document.querySelector(`.answer${id}`);
  
  answerDiv.classList.toggle('show');
  document.getElementById(`${id}`).classList.toggle('bold')
  //textLink.classList.toggle('bold')
  // el.target.parentNode.children[0]  
}