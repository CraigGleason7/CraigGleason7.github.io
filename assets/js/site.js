// Header rule on scroll, click-to-zoom figures, and table-of-contents highlighting.
(function () {
  const head = document.querySelector(".site-head");
  if (head) {
    const onScroll = () => head.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Lightbox: any <button class="zoom" data-full="..."> opens the full-resolution image.
  const zooms = document.querySelectorAll(".zoom");
  if (zooms.length) {
    const dlg = document.createElement("dialog");
    dlg.className = "lightbox";
    dlg.innerHTML = '<button class="close" type="button">Close</button><img alt="">';
    document.body.appendChild(dlg);
    const img = dlg.querySelector("img");
    const close = () => dlg.close();
    dlg.querySelector(".close").addEventListener("click", close);
    dlg.addEventListener("click", (e) => { if (e.target === dlg) close(); });
    // Click the image to toggle between fit-to-screen and full size.
    img.addEventListener("click", () => {
      img.classList.toggle("fit");
      img.style.cursor = img.classList.contains("fit") ? "zoom-in" : "zoom-out";
    });
    zooms.forEach((btn) => {
      btn.addEventListener("click", () => {
        const inner = btn.querySelector("img");
        img.src = btn.dataset.full || inner.src;
        img.alt = inner.alt;
        img.className = "fit";
        img.style.cursor = "zoom-in";
        dlg.showModal();
      });
    });
  }

  // Table of contents: mark the section currently in view.
  const tocLinks = document.querySelectorAll(".toc a[href^='#']");
  if (tocLinks.length && "IntersectionObserver" in window) {
    const map = new Map();
    tocLinks.forEach((a) => {
      const el = document.getElementById(a.getAttribute("href").slice(1));
      if (el) map.set(el, a);
    });
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          tocLinks.forEach((l) => l.classList.remove("is-active"));
          map.get(en.target).classList.add("is-active");
        }
      });
    }, { rootMargin: "-20% 0px -70% 0px" });
    map.forEach((_, el) => obs.observe(el));
  }
})();
