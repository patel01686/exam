// script.js
document.addEventListener('DOMContentLoaded', function() {
  // ----- Mobile hamburger menu -----
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
  }

  // ----- Explore buttons: show class details with video links -----
  const exploreBtns = document.querySelectorAll('.explore-btn');
  const detailsContainer = document.getElementById('class-details-container');
  const selectedClassTitle = document.getElementById('selected-class-title');
  const subjectsList = document.getElementById('subjects-list');

  // Data for subjects (video links open YouTube)
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

      // Set title
      selectedClassTitle.textContent = `Class ${classNum} - Subject Videos`;

      // Build subjects HTML
      let htmlStr = '';
      data.subjects.forEach(subj => {
        htmlStr += `<div class="subject-card">
          <h4>${subj.name}</h4>
          <ul>`;
        subj.videos.forEach(video => {
          // Direct YouTube link (placeholder)
          htmlStr += `<li><a href="https://www.youtube.com/results?search_query=${encodeURIComponent(video + ' class ' + classNum)}" target="_blank"><i class="fab fa-youtube" style="color:#ff0000;"></i> ${video}</a></li>`;
        });
        htmlStr += `</ul></div>`;
      });
      subjectsList.innerHTML = htmlStr;

      // Show container
      detailsContainer.style.display = 'block';
      // Scroll to it smoothly
      detailsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // ----- Start Exam buttons: redirect to example.com -----
  const examBtns = document.querySelectorAll('.start-exam');
  examBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      window.location.href = 'https://examportal-1-o346.onrender.com';
    });
  });

  // ----- Simple FAQ accordion (if any, but not present) ----
});