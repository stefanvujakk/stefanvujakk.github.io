const menuButton = document.querySelector('#menu-button');
const navList = document.querySelector('.nav-list');

menuButton.addEventListener('click', () => {
    navList.classList.toggle('open');
    menuButton.innerText = navList.classList.contains('open') ? 'CLOSE' : 'MENU';
});

document.querySelectorAll('[data-target]').forEach((button) => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const target = document.getElementById(targetId);

        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            navList.classList.remove('open');
            menuButton.innerText = 'MENU';
        }
    });
});

document.querySelectorAll('[data-url]').forEach((button) => {
    button.addEventListener('click', () => {
        const url = button.getAttribute('data-url');
        if (url) {
            window.open(url, '_blank', 'noopener');
        }
    });
});

const projects = document.querySelectorAll('.projects .project');
let proNum = 0;

const displayNone = () => {
    projects.forEach((project) => {
        project.style.display = 'none';
    });
};

document.querySelector('#right-btn').addEventListener('click', () => {
    displayNone();
    proNum += 1;

    if (proNum === projects.length) {
        proNum = 0;
    }

    projects[proNum].style.display = 'block';
});

document.querySelector('#left-btn').addEventListener('click', () => {
    displayNone();
    proNum -= 1;

    if (proNum < 0) {
        proNum = projects.length - 1;
    }

    projects[proNum].style.display = 'block';
});
