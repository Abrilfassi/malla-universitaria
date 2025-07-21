document.querySelectorAll('.subject').forEach(subject => {
  subject.addEventListener('click', () => {
    if (subject.classList.contains('approved')) {
      subject.classList.remove('approved');
    } else if (subject.classList.contains('regular')) {
      subject.classList.remove('regular');
      subject.classList.add('approved');
    } else {
      subject.classList.add('regular');
    }
  });
});
