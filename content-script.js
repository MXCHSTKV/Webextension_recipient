try { document.addEventListener("mousedown", (event) => {
  if (event.ctrlKey) {
    const clickedElement = event.target;
    if (clickedElement.parentNode.children[0].children[0].hasAttribute('src')) {
    const image = clickedElement.parentNode.children[0].children[0];
    image.getAttribute("srcset")
      ? window.open(image.getAttribute("srcset").split(" ")[0])
      : window.open(image.getAttribute("src"));
    } else { console.log("Something went wrong in 'if'") }
  }
})} catch (e) {
  console.log("Something went wrong, oooops")
}

try { document.addEventListener("mousedown", (event) => {
  if (event.altKey) {
    const clickedElement = event.target;
    if (clickedElement.parentNode.parentNode.parentNode.children[0] !== undefined) {
      video = clickedElement.parentNode.parentNode.parentNode.children[0];
      const url = video.getAttribute("src");
      navigator.clipboard.writeText(url);
      navigator.clipboard.readText().then((text) => {
        const link = document.createElement("a");
        link.href = text;
        link.target = "_blank";
        link.click();
      });
    } else { console.log("Oppps, when you want to get a picture use Ctrl") }
  }
})} catch (e) {
  console.log("Something went wrong, oooops")
}
