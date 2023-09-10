//Main Banner

const delay = 4000;
const slides = document.querySelector(".slides");
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount - 1) * 100 * -1;
let current = 0;

function changeSlide(next = true) 
{
  if (next) 
  {
    current += current > maxLeft ? -100 : current * -1;
  } else 
  {
    current = current < 0 ? current + 100 : maxLeft;
  }

  slides.style.left = current + "%";
}
let autoChange = setInterval(changeSlide, delay);
const restart = function() 
{
  clearInterval(autoChange);
  autoChange = setInterval(changeSlide, delay);
};

// Controls
document.querySelector(".next-slide").addEventListener("click", function() 
{
  changeSlide();
  restart();
});
document.querySelector(".prev-slide").addEventListener("click", function() 
{
  changeSlide(false);
  restart();
});






//Card Carousel
function feature(e, featureClassName) 
{
  var element = document.getElementsByClassName('tab-item');
  for (var i = 0; i < element.length; i++)
  {
    var shouldBeActive = element[i].classList.contains(featureClassName);
    element[i].classList.toggle('active', shouldBeActive);
  }
}