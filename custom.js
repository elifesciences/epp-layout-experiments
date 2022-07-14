const tabOne = document.querySelector('.tab-one');
const tabTwo = document.querySelector('.tab-two');
const tabThree = document.querySelector('.tab-three');
const contentOne = document.querySelector('.content__one');
const contentTwo = document.querySelector('.content__two');
const contentThree = document.querySelector('.content__three');
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
  console.log('yum3');
})