export function scrollableLinks(id) {
  const element = document.getElementById(id);
  if (element) {
    window.location.href = '/';
    element.scrollIntoView({
      behavior: 'smooth',
    });
  } else {
    document.documentElement.scrollTo(0, 0);
  }
}
