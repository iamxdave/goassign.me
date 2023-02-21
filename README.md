<h1 align="center">Goassign.me</h1>
<p align="center">
 Responsive REST <b>Javascript-CSS-HTML</b> web application to manage notes created by different users<br/>
 The application passed **w3c** HTML and CSS validation.
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
Application is the final result of the project to pass Information Technology classes at my university. This was created entirely by me based a little on a tutorial provided for the project<br/>
While making the app, I was trying to think about future users and provide them easy, clean and comfortable experience.<br/>



### Built With 

* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript), [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS), [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [MongoDB](https://www.mongodb.com/docs/) with [Docker](https://docs.docker.com/get-started/)

<br/>

<!-- GETTING STARTED -->
## Getting started 🚀

### Prerequisites

* [Git](https://git-scm.com/) 
  * Follow the guide
    > https://github.com/git-guides/install-git
* [Node.JS](https://nodejs.org/en/)
* [Express.JS](https://expressjs.com/)
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
4. Open the repository in any development environment
5. Create database schema in phpmyadmin _localhost:8183_ using the script in _/db/sequalize/config/schema_ or copy it from below:

!IMPORTANT 
**Login and password for the admin panel you can find in .env file**
```
CREATE SCHEMA IF NOT EXISTS `goassign-me`;
```
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
<p>
  The application allows logged users to make notes and update existing ones to track their implementation progress.</br>
  It also always current users to make accounts for new ones to share them board filled with notes.</br>
  All passwords are hashed with **bcrypt** package and all data is restricted only for logged users.</br>
  There are two implemented languages to choose from: PL and EN.</br>
</p>
  

<br/>

<!-- VISUALIZATION AND GUIDE -->
## Visualization :camera: with a guide 📙

  _The application has only one page on which website redirect the user on start._

![Main](https://user-images.githubusercontent.com/74014874/220412347-7e902f92-9ae7-44fa-8379-a51ade7102cf.png)

  _A short gif of logging in and changing app language._
  
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

