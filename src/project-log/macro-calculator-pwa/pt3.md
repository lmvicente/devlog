---
title: "Database time!"
date: 2026-08-22
milestone: true
tags: [VSCode, Vite, Typescript, Tailwind, React, Dexie]
---

The next step was the database. I started with types.ts, defining a shared Macros interface that Food and Entry extend, plus a NullableMacros mapped type for Target so goals can be blank. Then db.ts, a Dexie subclass declaring the three tables, where the schema string lists which fields get indexed rather than which columns exist. Then units.ts for the unit conversions.

With that in place I built the new-food form in Tailwind. Coming from C# I expected to instantiate the interface, but TypeScript interfaces are compile-time only (you write a plain object literal and annotate it with the type, and the compiler checks the shape). That object goes to db.foods.add(), which is roughly EF's Add() and SaveChanges() in one call.

