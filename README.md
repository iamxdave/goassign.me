<h1 align="center">Goassign.me</h1>
<p align="center">
 Responsive REST web application created by using <b>Javascript-CSS-HTML</b> to manage users' notes.<br/>
 The application passed <b>w3c</b> HTML and CSS validation.
</p>
<br/>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents :page_with_curl:</h2></summary>
  <ol>
    <li>
      <a href="#about-">About 🤔 </a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started-">Getting started 🚀</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#how-does-it-work-">How does it work 📔</a></li>
    <li><a href="#visualization-camera-with-a-guide-">Visualization :camera: with a guide 📙</a></li>
    <li><a href="#contributing-heart">Contributing ❤️</a></li>
    <li><a href="#license-">License 📝</a></li>
    <li><a href="#contact-">Contact ☎</a></li>
  </ol>
</details>

<!-- ABOUT -->
## About 🤔
<p align="justify">
  Application is the final result of the project to pass Information Technology classes at my university 🎓.
  This was created entirely by me 😁 based a little on a tutorial provided for the project.
  While making the app, I was trying to think about future users 👥 and provide them easy, clean and comfortable experience.<br/>
</p>


### Built With 

* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript), [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS), [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [Mysql2](https://www.npmjs.com/package/mysql2) and [Docker](https://docs.docker.com/get-started/)

<br/>

<!-- GETTING STARTED -->
## Getting started 🚀

### Prerequisites

* [Git](https://git-scm.com/) 
  * Follow the guide
    > https://github.com/git-guides/install-git
* [Node.JS](https://nodejs.org/en/) and [Express.JS](https://expressjs.com/)
  * Packages should be installed automatically, but in case they don't install nugget package manager and following packages:
    - ```bcryptjs```
    - ```cookie-parser```
    - ```dotenv```
    - ```ejs```
    - ```express```
    - ```express-session```
    - ```i18n```
    - ```mysql2```
    - ```sequelize```
* [Docker](https://docs.docker.com/get-started/)


<br/>

### Installation

1. Use your command line and clone the repository:
```
 git clone https://github.com/iamxdave/ScoreKeeper.git
```
2. Go to the clonned folder: 
```
cd goassign.me
```
3. Install packages
```
npm -i
```
4. Open the repository in any development environment </br>
5. Create database schema in **phpmyadmin** _localhost:8183_ using the script in

_/db/sequalize/config/schema_ 

or copy it from below
```
CREATE SCHEMA IF NOT EXISTS `goassign-me`;
```
**Important!**
_Login and password for the admin panel you can find in .env file_

6. Enter db folder and run docker in terminal
```
cd db
```
```
docker-compose up
```
7. Run application in terminal
```
npm run start
```
<br/>

<!-- HOW DOES IT WORK-->
## How does it work 📔
<p align="justify">
  The application allows logged users to make notes and update existing ones in order to track their implementation progress.
  It also always logged users to make accounts for new users to share them filled with notes board.
  All passwords are hashed with <b>bcrypt</b> package and all data is restricted only for logged users.
  Also there are two implemented languages to choose from: PL and EN.</br>
</p>
  

<br/>

<!-- VISUALIZATION AND GUIDE -->
## Visualization :camera: with a guide 📙

  _The application has only one page on which website redirect the user on start._

  _A short gif of main page, logging in and changing app language._
  
![Login](https://user-images.githubusercontent.com/74014874/220417258-40f0f9c8-80ca-4233-ac0b-c5a2c1cd6e73.gif)

  _A short gif of basic app interactions and updating a note._

![Logged](https://user-images.githubusercontent.com/74014874/220417267-6c848cf5-6c06-4183-ab19-c9554d9ec368.gif)

<br/>

<!-- CONTRIBUTING -->
## Contributing :heart:

 Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.


<br/>

<!-- LICENSE -->
## License 📝
<p> 
 Copyright 2022 iamxdave

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
</p>

> http://www.apache.org/licenses/LICENSE-2.0

<p> 
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
</p>
<br/>

<!-- CONTACT -->
## Contact ☎

dawidwrobelx@gmail.com

Project Link: [https://github.com/iamxdave/goassign.me](https://github.com/iamxdave/goassign.me)

