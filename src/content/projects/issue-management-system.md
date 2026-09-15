---
title: "AUT Research & Development Issue Management System"
year: "2025"
description: "A web-based Issue Management System used by Paper Leaders for managing, tracking, and resolving issues that occur in R&D projects (Bachelor of Computer and Information Sciences)."
sources:
    - label: "frontend"
      url: "https://github.com/MonicaLuongNZ/issue-management-frontend"
    - label: "backend"
      url: "https://github.com/MonicaLuongNZ/issue-management-backend"
tags: ["University", "Next.js", "Nest.js", "Typescript"]
type: "Web development"
slug: "issue-management-system"
images:
    - src: "/projects/issue-management-system/ims-login.png"
      alt: "Issue management System login page"
    - src: "/projects/issue-management-system/ims-dashboard-paperlead.png"
      alt: "Issue management System dashboard paper lead"
    - src: "/projects/issue-management-system/ims-log-issue1.png"
      alt: "Issue management System log issue page"
    - src: "/projects/issue-management-system/ims-attach-file.png"
      alt: "Issue management System login page upload file"
    - src: "/projects/issue-management-system/ims-issue-detail.png"
      alt: "Issue management System Issue Detail page"
    - src: "/projects/issue-management-system/ims-confirm-resolution.png"
      alt: "Issue management System login Issue Detail confirm resolution"
    - src: "/projects/issue-management-system/ims-future.png"
      alt: "Issue management System future features"
---

*Tap on the image to view in full screen*

The Issue Management System (IMS) is a web-based proof-of-concept platform allowing students to securely log issues related to their R&D projects, which Paper Leads can browse, categorise, and resolve. Optionally, R&D project clients can view/track issues on the platform if they're added to an issue.

As well as doing developer work, my main role in the project was Scrum Master, so I was tasked with managing the Trello board and user stories, and facilitating stand-up meetings.

## The Features

- Secure login for AUT internal and external users (registration and reset password supported for external clients). Internal users would already have an AUT login, while external users do not (i.e. clients).
- Log new issues using structured forms.
- Attach files (screenshots, docs, etc.) to new issues.
- View/search/filter/sort all relevant issues from a dashboard.
- Role-based permissions (Paper Leads have extended edit and resolve permissions).
- Full audit trail of all changes and attachments.
- Issue details view where issues can be confirmed to be resolved.

## What I worked on

- Figma UI designs for the system’s key pages (login/register, dashboard, and issue logging pages)

- ### Frontend

  - Creating base pages following the mockup designs
  - Minimizable sidebar with navigation, and breadcrumb navigation in nested pages.
  - Helping team members adapt their frontend to the design mockups, and with consistent styling across all pages.
  - Configured TailwindCSS.

- ### Backend

  - Issue logging feature
  - Backend-frontend integration fixes (fixing broken endpoints)
  - Improving data retrieval logic to ensure correct role and project loading.
  - Issue category fetching and validation
  
- Jest and React Testing Library tests.
- Documentation (Swimlane user workflow diagrams, Sprint reviews and retrospectives, Final poster, parts of project proposal, and more).
- Notifications and analytics UI designs (future features) for handover.

## Final Poster
I highly recommend opening in a new tab and zooming in.
<iframe 
  src="https://drive.google.com/file/d/1RqIf1KXlQvxYj5TAGdP8bsA4nbgYJfa4/preview" 
  allow="autoplay">
</iframe>