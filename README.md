# Craig Gleason III, portfolio

Craig Gleason III's engineering portfolio, served by GitHub Pages from this repo at
https://craiggleason7.github.io.

Plain HTML and CSS with no build step: edit a page, push to `main`, and it's live.

```
index.html                  home page
projects/bps-leader/        BPS Leader Board write-up
projects/bms-2026/          2026 Battery Management System write-up
404.html                    page-not-found page
assets/css/site.css         all styles (colors and sizes are tokens at the top)
assets/js/site.js           header, click-to-zoom figures, table-of-contents highlight
assets/img/                 images, exported as WebP
assets/docs/                résumé PDF
```

## Styling notes

- Text boxes use the `panel` class: square corners, a hairline border, and the
  top-left corner cut at 45° and traced in copper, like the pin 1 mark on an IC
  footprint. Add `panel` to any block to get one.
- Code, diagrams and figures use a plain square frame with no cut corner.
- `--r` is the only corner radius and `--cut` is the size of the cut corner.
  Both are set at the top of `site.css`.

## Updating

- After changing `site.css` or `site.js`, raise the `?v=` number on their links
  in every page (search for `site.css?v=`). Browsers keep old copies of these
  files, and the new number makes them fetch the new one.
- Résumé: replace `assets/docs/Craig_Gleason_Resume.pdf` and keep the file name.
- Code excerpts on the BPS Leader page link to a fixed commit of
  `lhr-solar/PS-BPSLeader` (`cf23af5`, the last one on `main` that carries the
  firmware), so the links keep working as that repo changes.

Preview locally with `python3 -m http.server` and open http://localhost:8000.
