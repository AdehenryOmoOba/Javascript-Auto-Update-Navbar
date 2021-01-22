const sections = document.querySelectorAll("section");
const bubble = document.querySelector(".bubble");
const gradient = [
  "linear-gradient(to right top, #1dc96480, #cce0cc80, #b3adad80)",
  "linear-gradient(to right top, #f5202a, #68a86880, #e21f5980)",
  "linear-gradient(to right top, #a7fa0d, #02494680, #58530380)",
  "linear-gradient(to right top, #03c032f6, #7dee7d80, #040c0080)",
];

const options = { threshold: 0.4 };

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach((entry) => {
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[data-page = ${className}]`);
    const gradientIndex = entry.target.getAttribute("data-index");
    const coords = activeAnchor.getBoundingClientRect();

    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left,
    };
    if (entry.isIntersecting) {
      bubble.style.setProperty("left", `${directions.left}px`);
      bubble.style.setProperty("top", `${directions.top}px`);
      bubble.style.setProperty("width", `${directions.width}px`);
      bubble.style.setProperty("height", `${directions.height}px`);
      bubble.style.background = gradient[gradientIndex];
    }
  });
}
sections.forEach((section) => {
  observer.observe(section);
});
