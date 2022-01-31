export function scrollableLinks(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  } else {
    document.documentElement.scrollTo(0, 0);
  }
}
