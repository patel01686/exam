// script.js (unchanged, included for completeness)
document.addEventListener('DOMContentLoaded', function() {
  // Mobile hamburger menu
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
      } else {
        navLinks.style.display = 'flex';
      }
    });

    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navLinks.style.display = 'none';
        }
      });
    });
  }

  // Explore buttons
  const exploreBtns = document.querySelectorAll('.explore-btn');
  const detailsContainer = document.getElementById('class-details-container');
  const selectedClassTitle = document.getElementById('selected-class-title');
  const subjectsList = document.getElementById('subjects-list');

  const classData = {
    8: {
      subjects: [
        { name: 'Mathematics', videos: ['Algebra', 'Geometry'] },
        { name: 'Science', videos: ['Physics', 'Chemistry', 'Biology'] },
        { name: 'English', videos: ['Grammar', 'Literature'] },
        { name: 'Computer', videos: ['Programming Basics', 'MS Office'] }
      ]
    },
    9: {
      subjects: [
        { name: 'Mathematics', videos: ['Linear Equations', 'Polynomials'] },
        { name: 'Science', videos: ['Motion', 'Atoms', 'Tissues'] },
        { name: 'English', videos: ['Writing Skills', 'Poems'] },
        { name: 'Computer', videos: ['HTML', 'Python Intro'] }
      ]
    },
    10: {
      subjects: [
        { name: 'Mathematics', videos: ['Trigonometry', 'Real Numbers'] },
        { name: 'Science', videos: ['Electricity', 'Carbon Compounds'] },
        { name: 'English', videos: ['Grammar', 'Prose'] },
        { name: 'Computer', videos: ['Database', 'Networking'] }
      ]
    },
    11: {
      subjects: [
        { name: 'Mathematics', videos: ['Sets', 'Functions', 'Calculus'] },
        { name: 'Physics', videos: ['Kinematics', 'Laws of Motion'] },
        { name: 'Chemistry', videos: ['Thermodynamics', 'Equilibrium'] },
        { name: 'Biology', videos: ['Cell Structure', 'Genetics'] }
      ]
    },
    12: {
      subjects: [
        { name: 'Mathematics', videos: ['Integration', 'Vectors'] },
        { name: 'Physics', videos: ['Electrostatics', 'Optics'] },
        { name: 'Chemistry', videos: ['Organic Chemistry', 'Solutions'] },
        { name: 'Biology', videos: ['Human Physiology', 'Ecology'] }
      ]
    }
  };

  exploreBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const classNum = this.getAttribute('data-class');
      const data = classData[classNum];
      if (!data) return;

      selectedClassTitle.textContent = `Class ${classNum} - Subject Videos`;

      let htmlStr = '';
      data.subjects.forEach(subj => {
        htmlStr += `<div class="subject-card">
          <h4>${subj.name}</h4>
          <ul>`;
        subj.videos.forEach(video => {
          htmlStr += `<li><a href="https://www.youtube.com/results?search_query=${encodeURIComponent(video + ' class ' + classNum)}" target="_blank"><i class="fab fa-youtube" style="color:#ff0000;"></i> ${video}</a></li>`;
        });
        htmlStr += `</ul></div>`;
      });
      subjectsList.innerHTML = htmlStr;

      detailsContainer.style.display = 'block';
      detailsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Start Exam buttons
  const examBtns = document.querySelectorAll('.start-exam');
  examBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      window.location.href = 'https://examportal-1-o346.onrender.com';
    });
  });
});