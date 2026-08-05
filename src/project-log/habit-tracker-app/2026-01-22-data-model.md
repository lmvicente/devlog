---
title: "First pass at the data model"
date: 2026-01-22
tags: [sqlite, database]
---

Two tables for now: `habits` and `completions`. Each completion row stores a habit ID and a date. A unique index on `(habit_id, date)` prevents double-checking the same day.

Debated storing streaks as a column versus computing them on read. Computing on read keeps the schema simpler and avoids stale counts when someone deletes a completion.
