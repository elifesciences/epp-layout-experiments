const exampleFour = document.querySelector('.example-four');

const tabOne = document.querySelector('.tab-one');
const tabTwo = document.querySelector('.tab-two');
const tabThree = document.querySelector('.tab-three');

const contentOne = document.querySelector('.content__one');
const contentTwo = document.querySelector('.content__two');
const contentThree = document.querySelector('.content__three');

const articleStatus = document.querySelector('.article-status');
const reviewTimeline = document.querySelector('.review-timeline');
const articleMetadata = document.querySelector('.article-metadata');
contentOne.classList.add('show');

tabOne.addEventListener('click', function(event) {
  event.preventDefault();
  tabTwo.classList.remove('active');
  tabThree.classList.remove('active');
  tabOne.classList.add('active');
  contentOne.classList.add('show');
  contentTwo.classList.remove('show');
  contentThree.classList.remove('show');
  console.log('yum');
})

tabTwo.addEventListener('click', function(event) {
  event.preventDefault();
  tabOne.classList.remove('active');
  tabThree.classList.remove('active');
  tabTwo.classList.add('active');
  contentOne.classList.remove('show');
  contentTwo.classList.add('show');
  contentThree.classList.remove('show');
  console.log('yum2');
})

tabThree.addEventListener('click', function(event) {
  event.preventDefault();
  tabOne.classList.remove('active');
  tabTwo.classList.remove('active');
  tabThree.classList.add('active');
  contentOne.classList.remove('show');
  contentTwo.classList.remove('show');
  contentThree.classList.add('show');

})

function secondaryColumnCollapse() {
  const evaluationPosition = document.querySelector('.evaluation-summary__header');
  let bounding = evaluationPosition.getBoundingClientRect();

  if (bounding.top <= 0 ) {
    articleStatus.classList.add('hide');
    articleMetadata.classList.add('hide');
    reviewTimeline.classList.add('hide');
    console.log('yeehawwww');
  } else {
    articleStatus.classList.remove('hide');
    articleMetadata.classList.remove('hide');
    reviewTimeline.classList.remove('hide');
  };

}

function detectColumnPosition() {
  // possibly long task
  setInterval(detectColumnPosition, 500);
  secondaryColumnCollapse();
}

detectColumnPosition();
