function scrollToElement(id) {
  const element = document.getElementById(id);
  if (element) {
    const topPos = element.offsetTop;
    window.scrollTo({
      top: topPos - 20, // Menambahkan efek scroll yang halus
    });
  }
}
