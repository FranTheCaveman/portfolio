---
title: "Home Server"
year: "2026"
description: "A home server setup for personal use."
tags: ["Personal", "Networking", "Linux", Docker]
type: "Networking"
slug: "home-server"
images:
    - src: "/projects/home-server/startpage1.png"
      alt: "Startpage"
    - src: "/projects/home-server/startpage2.png"
      alt: "Services"
---

## How it Started

One day, while browsing YouTube, I was recommended [a video by Louis Rossmann](https://youtu.be/Gj6HqWCdk3s?si=QVkrdYcy9wAPks35) that inspired me to follow his [guide](https://wiki.futo.org/) on how to self-host. It's a really, really long guide, and I didn't truly follow the entire thing, but it led me down a rabbit hole that resulted in me:

- Buying a network switch, network card, and turning the ancient family PC into a PFsense router
- Running ubuntu server on an old mini-pc (Lenovo ThinkCentre M73) to run several docker containers such as:
  - Nextcloud with the OnlyOffice app which is pretty much the self hosted version of google drive and google docs/sheets/slides in one
  - Jellyfin to stream movies/shows (I own)
  - Navidrome to stream music (I own)
  - Trilium for notes I can access and update anywhere and on any device
  - Immich to store family photos with private face recognition, location tagging, and storage sync with my camera roll.
  - And other fun stuff
- Purchasing a cloudflare domain to host sites that need to be public-facing (like Immich and Jellyfin), and to easily enforce zero trust security
- Running a Vintage Story game server on my old thinkpad laptop

While I was transferring photos from the family photos external hard drive (which mind you was running almost 24/7 connected to a different mini-pc for almost 10 years) to the server, the drive started to corrupt, and precious photos started evaporating before my very eyes. This motivated me to buy a Synology NAS (DS1520Plus) which I luckily got at a discount from a friend. I moved all important information such as the Family photos, Nextcloud documents, and media collection, and thus the files were safe.

## How it's going

More recently, I thought "why not self host a LLM on my gaming PC"? And so I did, installing Ollama and running a docker app called on it called "Vane", an AI answering engine that can use the local large language model from Ollama and feed information from web searches (using SearXNG), sort of like Perplexity. Although my graphics card is far from the worst (RTX3080), it does not have enough VRAM to run better models. I'm still tinkering with different models, but my graphics card only seems to handle models up to 14B parameters. For comparison, you would need at least 24GB VRAM to feel closer to the standard GPT-4 experience. So far, attempting research with some compatable models doesn't even come close to the perplexity experience (which is probably due to the limited context size caused by the search results), I wonder what's a more useful way to use self-hosted AI with my hardware?

And because self-hosting an LLM can cost a lot of power, I learnt how to use wake-on-lan to wake up my gaming PC as needed remotely, and turn it off via ssh when I don't need it anymore. Sending a magic packet from my laptop and watching it turn my PC on for the first time truly felt like magic!
