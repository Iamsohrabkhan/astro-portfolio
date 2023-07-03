---
title: Scholarly Blogging with Markdown, Jekyll, and GitHub
date: 2016-4-15
# slug: scholarly-blogging-with-markdown-jekyll-an-github
image: https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80
description: GitHub is a free online platform for sharing source code for computational research, open source software, and collaborative
---

**[Researcher's Toolkit](https://www.it.northwestern.edu/research/campus-events/researcher-toolkit.html), 19 February 2019, Northwestern University**

GitHub is a free online platform for sharing source code for computational research, open source software, and collaborative coding projects in a version controlled environment. GitHub users can also use the platform for hosting personal blogs, technical documentation, and project websites. These websites are built using Markdown, a simple plain-text formatting language, and Jekyll, an open source static site generator. This interactive workshop will cover the basics of Markdown, Jekyll, and GitHub in a scholarly or scientific context.  Please bring your laptop.

### Prerequesites
This tutorial is designed to get you set up with a basic blog and website using Jekyll and GitHub pages for free without the need to download extra software or use a command-line interface. The only requirement is [GitHub](https://github.com) account. 

### Choose a Theme
Once you've chosen a theme, visit the theme's GitHub page and click on the **Fork** button at the top-right of the screen.

![image](https://user-images.githubusercontent.com/24395592/53020156-f888ff80-341b-11e9-8c3a-96dafe85de55.png)

- Jekyll Now [[demo](http://jekyllnow.com/)] [[github](https://github.com/barryclark/jekyll-now)]
- Moon [[demo](https://taylantatli.github.io/Moon/)] [[github](https://github.com/TaylanTatli/Moon)] 
- Modern Resume [[demo](https://sproogen.github.io/modern-resume-theme/)] [[github](https://github.com/sproogen/modern-resume-theme)]
- Minima [[demo](https://jekyll.github.io/minima/)] [[github](https://github.com/jekyll/minima)]

### Use Your Fork
When you **fork** a repository, you copy all of its content (code and history) to your account. You should now be on the repository's home page for your fork. You can verify this by checking the top-left of your screen. The repository should be called something like *[YourUsername]/[ThemeName]* above a line that says *Forked from [ThemeCreator]/[ThemeName]*. The next steps will all take place using your copy of the Jekyll theme.

### Edit the *_config.yml* file
The *_config.yml* file is arguably the most important file in any Jekyll project. This file contains all of your site-level settings, such as the `title`, `description`, links to social media accounts, and build settings.

The homepage of any GitHub repository will display the root directory of the project's files and folders. The *_config.yml* always need to be at the root directory of a Jekyll project. Click on the file name to view it's contents.

![image](https://user-images.githubusercontent.com/24395592/53020549-b90ee300-341c-11e9-8229-ed369097e9cf.png)

Then click on the Edit icon to edit the file in your web browser. Input information you'd like to make available on your site.

![image](https://user-images.githubusercontent.com/24395592/53020774-4a7e5500-341d-11e9-9cac-fc1b91c92356.png)

### Commit your changes
Every time you want to save changes in a git repository, you need to commit them to the git history. This will help you move back in time in case you make mistakes and need to restore a previous version of your site.

At the bottom of the editor screen, you will see some options to make a commit:

![image](https://user-images.githubusercontent.com/24395592/53023613-3178a280-3423-11e9-9b22-0554dcddb9e2.png)

Every commit should have a descriptive title. You also have an option to add a description to further clarify what changes you are making and why. This is like a "note-to-future-self" and is **very** important in collaborative projects.

Enter in a descriptive title and commit the changes to your `master` branch. You will need to follow this pattern for every change you make to any file. *NOTE: when you use a text editor you record many changes to many files with a single commit; however, it is best practice to package each commit with related changes (like updating a sidebar or changing a layout).

### Change the name of the repository
GitHub offers users free hosting and a domain name at *username.github.io*. GitHub will also automatically compile a website with Jekyll from your markdown, yaml, template files. Click on the Settings tab and change the name of your repository to *username.github.io* (swap out "username" with *your* GitHub username).

![image](https://user-images.githubusercontent.com/24395592/53021354-a8f80300-341e-11e9-973e-07cfcdd665ba.png)

Changing your repository name using this convention will trigger GitHub to build your site and deploy it to https://[username].github.io. There is always a little bit of a delay before your site or any change you make goes live.

### Start Blogging
For every Jekyll project, the blog posts are stored in the *_posts* directory. This directory contains `.md` files (Markdown) that use a strict file-naming convention: `_YYYY-MM-DD-title.md`

As with the *_config.yml* file, you can use your browser to edit any of the files in the *_posts* directory (you might want to delete some of the example files in this folder if you no longer want to keep them as a reference). 

With Jekyll, every Markdown file begins with YAML front-matter. This contains information _about_ the post, such as the `title`, `layout`, and any themes-specific settings you want to use (such as the location of a header image and its caption). The Jekyll build process will then take that information and use according the site's configurations and HTML templates. 

For example, a YAML field of `title: My first awesome blog post!` will most likely be used to make the `<h2>My first awesome blog post!</h2>` element in the rendered blog post. For any of the themes you use, there will most likely be example posts and pages you can reference when creating your own content. Every time you're ready to publish a blog post or create a new page, the site will re-build and go live within a matter of minutes.

### Add your CV to your website
Let's say you want to add a PDF file to your website so visitor's can download your CV. You can use the `Upload Files` button on the homepage of your repository to add a PDF to your root directory.

To make this downloadable, you can add a link to any page using Markdown: `[Download CV](cv.pdf)`

### Further Customizations
There are many great Jekyll themes available for your use. A lot of them have documentation to help you customize the layouts, styles, and colors or add features like search and comments. Most, however, require some level of comfort with HTML, CSS, text editors, and the command-line. The themes linked above should work without installing anything, but you will have more control over your website -- and more flexibility with the themes you can use -- if you run a local installation of [Jekyll](https://jekyllrb.com/) and build the site using tools like text editors and the command line. Jekyll is a great static site generator for beginners and with [large user community](http://talk.jekyllrb.com/) to help and share code.

### Resources
- [Quick Interactive Git Tutorials](http://try.github.io/)
- "[Creating and Hosting a Personal Site on GitHub](http://jmcglone.com/guides/github-pages/)" by Jonathan McGlone
- "[Building a Static Website with Jekyll and GitHub Pages](https://programminghistorian.org/en/lessons/building-static-sites-with-jekyll-github-pages)," by Amanda Visconti via _The Programming Historian_. This tutorial includes tips for installation and working with the command-line and 