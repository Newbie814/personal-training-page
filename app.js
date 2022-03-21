function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.user-name');
const role = document.querySelector('.role');

// =================================== modal constants ==========================================================================

const modalBtn = document.querySelector('.form-button');
const modal = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

//  ========================================modal functions ======================================================================

modalBtn.addEventListener('click', function () {
  modal.classList.add('open-modal');
});

closeBtn.addEventListener('click', function () {
  modal.classList.remove('open-modal');
});

const testimonials = [
  {
    name: 'Dr. Yvelle',
    position: 'Project Management',
    photo:
      'https://res.cloudinary.com/dylvkdabj/image/upload/v1646971933/website%20pics%20family/yvelle_jh28um.jpg',
    text: 'Matt is extremely innovative and a motivator… .I have not only seen physical changes, but positive mental and emotional changes in my personal life because of my sessions. Matt is truly invested in his clients and takes the time to ensure that we are well balanced within our lives by having the important conversations with us.',
  },
  {
    name: 'Dyennan Bien Aime',
    position: 'Nurse Practitioner',
    photo:
      'https://res.cloudinary.com/dylvkdabj/image/upload/v1646971931/website%20pics%20family/dyennan_dckrkk.jpg',
    text: '..I cannot say enough about how far-reaching and beneficial his training has been to my everyday life…    .planning is always done with the precise strengths and weaknesses of each client in mind to develop a routine that is continuously challenging, always personalized, and never boring.  It is clear that Matt has a very unconventional, but very well thought out, approach to fitness…    .I would recommend Matthew Woodard without reservation to anyone seeking a top rated and highly effective personal trainer.',
  },
  {
    name: 'Marlene Brenner',
    position: 'Business Owner',
    photo:
      'https://res.cloudinary.com/dylvkdabj/image/upload/v1646328990/website%20pics%20family/logo_xfcctz.jpg',
    text: "Matt is not at all what I expected.  I was looking forward to being yelled at, pushed to the max, sweating to death, being extremely exhausted and having to dread going back.  I was very surprised at how much Matt takes his job personally.  ...my career has been in the admin field and sitting on my butt for the past 25 years. Matt takes training seriously but adds a certain amount of fun to every workout.  He didn't insist that I start some crazy diet but instead is teaching me meal by meal how to eat what I like but just in a better way.  Matt lives in the real world and teaches the same way. He has given me a renewed sense of confidence in myself.",
  },
  {
    name: 'Lourdes Marvez',
    position: 'Accountant',
    photo:
      'https://res.cloudinary.com/dylvkdabj/image/upload/v1646514283/website%20pics%20family/wp2647127-space-wallpaper-hd_irkddn.jpg',
    text: 'Matt took interest in learning what would motivate us, and patiently works with each of us to make us believers in the power of exercising correctly!  We started getting in shape, me getting strong (for the first time in my life), Bunny getting off the couch, feeling good and wanting to run and exercise after a whole day at work (really!).',
  },
  {
    name: 'Mary Blanche Vehlewald',
    position: 'Retired',
    photo:
      'https://res.cloudinary.com/dylvkdabj/image/upload/v1647580217/website%20pics%20family/mary-b_qhgjnr.png',
    text: 'Matt trains a wide range of clients both in age and body type.  He has been my trainer since 2016 and I’m one of his older clients.  Maintaining as good a quality of life as I possibly can is my personal goal and Matt is helping me to achieve that.  I am very appreciative of the individual approach he takes to each person he works with and how he is continuously upgrading his knowledge in the Personal Training field.   Working with Matt has given me a renewed outlook toward exercise  (which was never one of my favorite things), and how important it is to set reasonable goals and persevere in order to attain them."',
  },
  {
    name: 'Larry Lynch',
    position: 'CEO',
    photo:
      'https://res.cloudinary.com/dylvkdabj/image/upload/v1647580213/website%20pics%20family/larry_kkus2f.jpg',
    text: 'Personal training is not about how much weight you can lift, how much you can perspire or even just grunt.  It’s about holistic lifestyle.  I was lucky enough to discover Matt after suffering a serious spinal cord injury.  We worked on physical fitness in a very specific and disciplined way; we worked on nutrition planning and lifestyle changes like sleep and stress management.  Across the board it wasn’t just recovery, it was about renewal.  I may be biologically older today but with Matt’s help and guidance I’ve never felt and acted younger.”',
  },
  // {
  //   name: '',
  //   position: '',
  //   photo:
  //     '',
  //   text: '',
  // },
];

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);
