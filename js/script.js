const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const headlineSection = document.querySelector('.headlineSection');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  headlineSection.classList.toggle('active');
});
document.querySelectorAll('.nav-item').forEach((e) => e.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  headlineSection.classList.remove('active');
}));

const object = [
  {
    id: 0,
    Name: 'Dj Snake',
    img: '/images/djsnake.jpg',
    description:
    'A daily selection of privately personalized reads no accounts or sign-ups required.',
  },
  {
    id: 1,
    Name: 'dj marshmellow',
    img: '/images/Marshmello.jpeg',
    description:
    'Experimental content creation feature that allows users to  add  to an existing story over the course of a day without spamming their friends',
  },
  {
    id: 2,
    Name: 'Dj Don Diablo',
    img: '/images/DonDiablo.jpeg',
    description:
    "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR..",
  },
  {
    id: 3,
    Name: 'Dj Peggy Gou',
    img: '/images/PeggyGou.jpeg',
    description:
    "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR..",
  },
  {
    id: 4,
    Name: 'Dj David Guetta',
    img: '/images/DavidGuetta.jpg',
    description:
    "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR..",
  },
  {
    id: 5,
    Name: 'Dj Nervo',
    img: '/images/Nervo.png',
    description:
    "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR..",
  },

];

const dj = document.querySelector('.dj');

for (let i = 0; i <3; i += 1) {
  dj.innerHTML += `
  <div class='djList'>  
    <div class="djDetail">
      <img src="${object[i].img}" alt="Djpicture">
    </div>
    <div class="djContent">
    <h3>${object[i].Name}</h3>
    <p>${object[i].description}</p>
  </div>
  </div>`;
}

const programButton = document.createElement('button');
programButton.setAttribute('class', 'programButton');
programButton.innerHTML = 'More <i class="fas fa-arrow-circle-right fa-lg"></i>';
dj.append(programButton);

const more=document.querySelector(".programButton");
const container=document.querySelectorAll(".djList .djDetail .djContent");
let currentDj=3;
more.addEventListener('click', () => {
  for (let i = currentDj; i < currentDj + 3; i += 3) {
    dj.innerHTML += `
    <div class='djList'>  
      <div class="djDetail">
        <img src="${object[i].img}" alt="Djpicture">
      </div>
      <div class="djContent">
      <h3>${object[i].Name}</h3>
      <p>${object[i].description}</p>
    </div>
    </div>`;
  }
});

