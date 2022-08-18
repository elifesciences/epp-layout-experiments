const tabOne = document.querySelector('.tab-one');
const tabTwo = document.querySelector('.tab-two');
const tabThree = document.querySelector('.tab-three');

const contentOne = document.querySelector('.content__one');
const contentTwo = document.querySelector('.content__two');
const contentThree = document.querySelector('.content__three');

const articleStatus = document.querySelector('.article-status');
const reviewTimeline = document.querySelector('.review-timeline');
contentOne.classList.add('show');

tabOne.addEventListener('click', function(event) {
  event.preventDefault();
  tabOneFunction();
})

tabTwo.addEventListener('click', function(event) {
  event.preventDefault();
  tabTwoFunction();
})

tabThree.addEventListener('click', function(event) {
  event.preventDefault();
  tabThreeFunction();
})

function tabOneFunction() {
  tabTwo.classList.remove('active');
  tabThree.classList.remove('active');
  tabOne.classList.add('active');
  contentOne.classList.add('show');
  contentTwo.classList.remove('show');
  contentThree.classList.remove('show');
}

function tabTwoFunction() {
  tabOne.classList.remove('active');
  tabThree.classList.remove('active');
  tabTwo.classList.add('active');
  contentOne.classList.remove('show');
  contentTwo.classList.add('show');
  contentThree.classList.remove('show');
}

function tabThreeFunction() {
  tabOne.classList.remove('active');
  tabTwo.classList.remove('active');
  tabThree.classList.add('active');
  contentOne.classList.remove('show');
  contentTwo.classList.remove('show');
  contentThree.classList.add('show');
}

const authorResponse = document.querySelector('.author-response-js');
authorResponse.addEventListener('click', function(event) {
  console.log('test');
  tabThreeFunction();
});

const reviews = document.querySelector('.review-js');
reviews.addEventListener('click', function(event) {
  console.log('test2');
  tabThreeFunction();
});

document.addEventListener('scroll', function() {
  const evaluationPosition = document.querySelector('.evaluation-summary__header');
  let bounding = evaluationPosition.getBoundingClientRect();

  if (bounding.top <= 0 ) {
    articleStatus.classList.add('hide');
    reviewTimeline.classList.add('hide');
  } else {
    articleStatus.classList.remove('hide');
    reviewTimeline.classList.remove('hide');
  };
})
