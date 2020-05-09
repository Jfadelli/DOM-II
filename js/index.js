// Your code goes here.

//addEventListener: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

//1. mouseenter event: https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event
const busImage = document.querySelector('.intro img')
console.log('busImage', busImage);

busImage.addEventListener('mouseenter', (e) => {
  busImage.style.transform = "scale(1.2)";
  busImage.style.transition = "all 0.3s"
})

//2.  mouseleave event: https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event
busImage.addEventListener('mouseleave', () => {
  busImage.style.transform = "scale(1)"
})

//3. dblclick event: https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
const changeImage = document.querySelector('.intro img')
changeImage.addEventListener('dblclick', () => {
  changeImage.src = 'https://images.unsplash.com/photo-1525962898597-a4ae6402826e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  changeImage.style.height = '20vh'
  changeImage.style.width = '100%'
  changeImage.style.align = 'center' // How do I align this?? <3
})

//4. click event: https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
const changeWelcome = document.querySelector('.intro h2')
changeWelcome.addEventListener('click', (e) => {
  changeWelcome.textContent = 'Ok, it\'s not actually that fun, but whatever...'
})


//5. keydown: https://developer.mozilla.org/en-US/docs/Web/Events/keydown
const popup = document.querySelector('body')
popup.addEventListener('keydown', (e) => {
  if (e.isComposing || event.keyCode === 66) {
    console.log('honk')

    popup.textContent = 'HONK!'
    popup.style.fontSize = 'xx-large';
  }
})

//6. mouseover: https://developer.mozilla.org/en-US/docs/Web/Events/mouseover
const diablo = document.querySelector('.img-content img')
console.log(diablo)
diablo.addEventListener('mouseover', (e) => {
  diablo.src = 'https://vignette.wikia.nocookie.net/median-xl/images/4/42/Diablo.gif/revision/latest/top-crop/width/360/height/450?cb=20180705014156'

})

//7. mouseout: https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseout_event
diablo.addEventListener('mouseout', (e) => {
  console.log(e.target)
  diablo.src = 'img/adventure.jpg'
})


//8. mouseenter: https://developer.mozilla.org/en-US/docs/Web/Events/pointerenter
const navChangeColor = document.querySelector('.main-navigation')
navChangeColor.addEventListener('mouseenter', (e) => {
  navChangeColor.style.backgroundColor = 'red';
})

const HomeOnlyChangeColor = document.querySelector('.logo-heading')
HomeOnlyChangeColor.addEventListener('mouseenter', (e) => {
  HomeOnlyChangeColor.style.backgroundColor = '#8b0000';
  e.stopPropagation();
})

//9. mouseleave: https://developer.mozilla.org/en-US/docs/Web/Events/pointerleave
const navChangeBack = document.querySelector('.main-navigation')
navChangeBack.addEventListener('mouseleave', (e) => {
  navChangeBack.style.backgroundColor = '';
})

const HomeOnlyChangeColorBack = document.querySelector('.logo-heading')
HomeOnlyChangeColorBack.addEventListener('mouseleave', (e) => {
  HomeOnlyChangeColorBack.style.backgroundColor = '';
  e.stopPropagation();
})

//10. resize https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event

window.addEventListener('resize', (e) => {
  const squish = document.querySelector('.logo-heading')
  console.log('STOP SQUISHING ME!', e)
  squish.textContent = 'STOP SQUISHING ME!!!!'
})

//Prevent nav from refreshing my page

document.querySelector('.nav-link').addEventListener('click', (e) => {
  e.preventDefault()
})