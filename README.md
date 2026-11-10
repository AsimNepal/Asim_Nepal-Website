# Asim Nepal — Personal Website

A responsive, static academic portfolio for **asimnepal.com**.

## Files
- `index.html` — website content
- `styles.css` — styling and mobile layout
- `script.js` — navigation and scroll animations
- `assets/asim-nepal.webp` — homepage photo
- `assets/favicon.svg` — browser icon

## Publish using GitHub + Netlify
1. Create a new public GitHub repository named `asimnepal-website`.
2. Upload the **contents of this folder** to the repository root (not the folder itself).
3. Sign into Netlify and choose **Add new project → Import an existing project → GitHub**.
4. Select the repository. For this static site, leave **Build command** blank and set **Publish directory** to `.` (or leave the default if Netlify detects the root).
5. Deploy. Netlify gives you a temporary `*.netlify.app` URL.
6. In Netlify **Domain management**, add `asimnepal.com`. Follow Netlify's specific DNS instructions in your Porkbun DNS panel. Remove any conflicting records pointing the domain to Porkbun Easy Links. DNS changes may take time to propagate.

## Updating the site
Edit `index.html` for text and links; update `styles.css` for appearance. Commit changes to GitHub and Netlify redeploys automatically.

## Notes
- The research experience is explicitly **completed**, not ongoing.
- JMM presentations and a CV download have not been included.
- Verify all published details and project descriptions before sharing the site.
