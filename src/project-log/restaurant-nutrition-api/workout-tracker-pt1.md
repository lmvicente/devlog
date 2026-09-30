---
title: "Scaffold the project"
date: 2026-07-22
milestone: true
tags: [planning, PostgreSQL, Supabase, Hono, Nodejs, Drizzle ORM]
---

The workflow is I plan on using OpenAI's API to download and scrape the nutrition facts off of popular restaurant websites. This will then upload the data to Supabase. This is still in the works, but this is going to be written in Python and hosted on Azure Functions and will be ran once a month.

From there, the API I am working on (what I just scaffoled with Drizzle as the ORM and Hono as the framework), will pull the data from Supabase to allow me to use it where I need. The API will be protected via Supabase's authentication. 

This API will then be used in the Macro Calculator PWA later on down the line.