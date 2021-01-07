let header = document.querySelector('.page_header');
let toggleBtn = document.querySelector('.nav-toggle');

toggleBtn.addEventListener('click', function() {
    header.classList.toggle('open');
});