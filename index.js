let last = 0;
window.addEventListener("scroll", () => {
  if (window.scrollY < last) {
    nav.style.top = 0;
  } else nav.style.top = "-60px";
  last = window.scrollY;
  console.log(last);
});
