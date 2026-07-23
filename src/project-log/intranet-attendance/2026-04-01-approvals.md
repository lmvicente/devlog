---
title: "Approval routing"
date: 2026-04-01
tags: [dotnet, workflow]
---

Approvals now route to the right supervisor based on department. Trickier than expected — a handful of staff report to two people depending on which site they're at that week.

Handled it with a lookup that resolves at submission time rather than being baked into the user record.
