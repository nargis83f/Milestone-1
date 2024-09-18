const toggleSkillsButton = document.getElementById('toggle-skills');
const skillsSection = document.getElementById('skills');

toggleSkillsButton?.addEventListener('click', () => {
  if (skillsSection?.style.display === 'none') {
    skillsSection.style.display = 'block';
    toggleSkillsButton.innerText = 'Hide Skills';
  } else {
    skillsSection!.style.display = 'none';
    toggleSkillsButton!.innerText = 'Show Skills';
  }
});