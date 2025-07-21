document.addEventListener("DOMContentLoaded", () => {
  const subjects = document.querySelectorAll(".subject");

  subjects.forEach(subject => {
    subject.addEventListener("click", () => toggleSubjectState(subject));
  });
});

function toggleSubjectState(element) {
  if (element.classList.contains('approved')) {
    element.classList.remove('approved');
  } else if (element.classList.contains('regular')) {
    element.classList.remove('regular');
    element.classList.add('approved');
  } else {
    element.classList.add('regular');
  }
}
