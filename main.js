const arrow = document.querySelectorAll('#arrow');
const textLink = document.querySelectorAll('.question span');

Array.from(textLink).map((el) =>
  el.addEventListener('click', (e) => showHide(e))
);

Array.from(arrow).map((el) => el.addEventListener('click', (e) => showHide(e)));

function showHide(el) {
  /*
  hide all other answers
  show answer corresponding to question clicked
  */
  const activeQuestion = document.querySelector('.show');
  
  if (activeQuestion) {
    console.log('first');
    const answerDiv = document.querySelector(`.answer${el.path[0].id}`);

    answerDiv.classList.contains('show')
    ? answerDiv.classList.remove('show')
    : answerDiv.classList.add('show');

    const answerId = activeQuestion.classList[0].charAt(6);
    const answerToHide = document.querySelector(`.answer${answerId}`);
    answerToHide.classList.remove('show');
  } else {       
    const answerDiv = document.querySelector(`.answer${el.path[0].id}`);    
    answerDiv.classList.add('show');    
  }
  
  const questionSpan = document.getElementById(el.path[0].id); 
  questionSpan.classList.contains('bold')
    ? questionSpan.classList.remove('bold')
    : questionSpan.classList.add('bold');
}
