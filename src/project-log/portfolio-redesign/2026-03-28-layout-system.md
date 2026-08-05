---
title: "Layout and type scale"
date: 2026-03-28
tags: [design, tailwind]
---

Settled on a single column for reading width, with cards on the homepage for scanability. Using Tailwind's typography plugin for markdown content so log entries render cleanly without custom prose styles per page.

Dark mode follows system preference with a manual toggle stored in localStorage. Keeping that logic in the layout so individual pages don't need to care about theme state.
