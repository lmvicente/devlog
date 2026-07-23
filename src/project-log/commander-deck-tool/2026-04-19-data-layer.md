---
title: "Card data and local search"
date: 2026-04-19
tags: [typescript, indexeddb]
cover: ./search.png
---

Pulled the bulk data dump and indexed it locally so search doesn't hit the network on every keystroke.

![Search with type-ahead](./search.png)

Twenty-odd thousand cards fits in IndexedDB fine. Search feels instant. The tradeoff is a slow first load while the dump downloads — showing a progress bar and letting people browse a cached subset in the meantime.
