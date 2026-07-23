---
title: "Modeling awards and reporting periods"
date: 2026-02-20
milestone: true
tags: [data-model]
cover: ./schema.png
---

The awkward part is that reporting periods don't line up with the fiscal year, and some grants have quarterly financial reports but annual narrative reports.

![Award and reporting period relationships](./schema.png)

Modeled reporting obligations as their own records linked to an award, rather than fields on the award. Means adding a new report type doesn't require a schema change.
