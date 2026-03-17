# Vibe Code Site — Claude Code Instructions

**Repo:** ~/websites/vibecodeaseries/ → GitHub (source control only)
**Site:** vibecodeaseries.com

---

## SESSION RULES

1. **Read this file before every session.**
2. **Copy is sacred:** Never invent, paraphrase, or "improve" copy. Use approved text verbatim.
3. **Read before writing:** Read the target file before editing.
4. **3-strike rule:** If the same fix fails 3 times, stop. The approach is wrong.
5. **No file opening:** Do NOT open files, folders, or Finder windows. Print filepaths as text.
6. **No autonomous actions:** Present the plan, wait for approval, then execute.

---

## SITE ARCHITECTURE

Single-page static site. One file: `index.html`. All CSS and JS inline. No build step.

---

## DEPLOY

**No GitHub auto-deploy.** Deploy manually via Netlify CLI:

```bash
cd ~/websites/vibecodeaseries && NETLIFY_AUTH_TOKEN=nfc_Wm8E4biP1kD4oRFhC5TDaQn2yecrS5zM0831 npx netlify-cli deploy --prod --site c0548b28-6056-4bc1-a887-2238c8a0e083 --dir .
```

After deploying, also commit and push to GitHub to keep the repo in sync:

```bash
cd ~/websites/vibecodeaseries && git add -A && git commit -m "[describe change]" && git push
```

**Netlify site ID:** c0548b28-6056-4bc1-a887-2238c8a0e083
**Netlify URL:** https://incandescent-douhua-1976db.netlify.app
**Netlify account:** mcoynegreen@gmail.com (mcoynegreen's team)
