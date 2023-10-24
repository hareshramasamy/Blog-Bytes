# BlogBytes - A JS based MicroBlogging application 

Welcome to 'BlogBytes'! Stretch your tech muscles by reading the byte-sized blogs from this website!!! This blog website is a sample project showcasing how to integrate HTML, SCSS and JavaScript for a simple blog website that displays some posts from an external JSON file, and allows the user to create a new blog, or update the author/content of an existing blog. This repository includes HTML, SCSS, and JS files.

The goal of this assignment is to learn about Javascript concepts including usage of various Event listeners, XMLHttpRequest for JSON parsing, and dynamically creating HTML tags, with SCSS styling. 

SCSS code is organized into multiple files based on various sections, and contains variables and mixins.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)

## Getting Started

To get a copy of this project up and running on your local machine, follow these steps:

1. Clone the repository to your local machine:

   ```bash
    git clone git@github.com:info-6150-fall-2023/assignment-6-hareshramasamy.git
   ```

2. Navigate to the project directory:

   ```bash
   cd assignment-6-hareshramasamy
   ```

3. Open the `index.html` file in your preferred web browser to view the website.

## Project Structure

The project is structured as follows:

```
globe-travel-website/
|-- data/
|   |-- json file
|-- dist/
|   |-- .css files
|-- scss/
|   |-- .scss files
|-- images/
|   |-- images for users
|-- js/
|   |-- .js files
|-- index.html
|-- README.md
```

- `css/`: Contains the compiled CSS file(s).
- `scss/`: Contains the SCSS source files.
- `js/`: Contains the JavaScript file app.js.
- `images/`: Store your website images,icons,etc in this directory.
- `index.html`: The main HTML file for the website.
- `README.md`: This file.

## Usage

To make changes to the SCSS and generate the corresponding CSS file, you'll need to have a SCSS compiler installed. You can use tools like Sass to achieve this.

1. Install Sass:

   ```bash
    npm init
   ```

   ```bash
    npm i sass --save-dev
   ```

2. Compile SCSS to CSS:

   ```bash
    npx sass scss/main.scss dist/main.css
   ```

3. Make your changes in the files in the `scss` folder and recompile as needed