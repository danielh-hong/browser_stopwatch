// Not activated in the project

const trails = Array.from({ length: 20 }, () => document.createElement('div'));

trails.forEach((trail, index) => {
  trail.classList.add('mouse-trail');
  document.body.appendChild(trail);
  // Add a delay to each div to create a trail effect
  trail.style.transitionDelay = `${index * 0.05}s`;
  // Reset the div when the animation ends
  trail.addEventListener('animationend', () => {
    trail.style.opacity = 1;
    trail.style.transform = 'scale(1)';
  });
});

let i = 0;
document.addEventListener('mousemove', (e) => {
  trails[i].style.top = `${e.pageY}px`;
  trails[i].style.left = `${e.pageX}px`;
  i = i < trails.length - 1 ? i + 1 : 0;
});