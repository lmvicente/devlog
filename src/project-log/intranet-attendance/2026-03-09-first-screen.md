---
title: "Blazor form working end to end"
date: 2026-03-09
milestone: true
tags: [blazor, dotnet]
cover: ./form.png
---

First screen submits and persists. Nothing pretty yet, but the round trip works.

![The submission form](./form.png)

Validation is server-side only right now. Client-side rules are next so people aren't waiting on a round trip to find out they left a field blank.
