<p align="center">
  <a href="mailto:pvsserrano@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />        
  </a>&nbsp;
  <a href="https://www.linkedin.com/in/pvsserrano/">
    <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
</p>

<br />
<div align="center">

  <!-- PROJECT LOGO -->
  <!--
  <a href="https://github.com/github_username/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>
  -->

  <h1>Random Password Generator</h1>
</div>

<!-- TECHS -->

[![Node][Node-badge]][Node-url]&nbsp;
[![React][React-badge]][React-url]&nbsp;
[![Express][Express-badge]][Express-url]&nbsp;
[![Docker][Docker-badge]][Docker-url]&nbsp;
[![Postgres][Postgres-badge]][Postgres-url]&nbsp;
[![Jest][Jest-badge]][Jest-url]&nbsp;
[![Typescript][Typescript-badge]][Typescript-url]&nbsp;
[![Prisma][Prisma-badge]][Prisma-url]&nbsp;
[![EsLint][EsLint-badge]][EsLint-url]&nbsp;
[![Vite][Vite-badge]][Vite-url]&nbsp;
[![Styled-Components][Styled-Components-badge]][Styled-Components-url]&nbsp;
[![Actions][Actions-badge]][Actions-url]&nbsp;

<br />

<!-- ABOUT -->

## About The Project

This app is a simple and user-friendly web application that allows users to generate strong, secure and unique passwords of various lengths instantaneously!

Check it out here :point_right: [http://ec2-54-204-253-168.compute-1.amazonaws.com/](http://ec2-54-204-253-168.compute-1.amazonaws.com/)

Or follow the instructions below to set it up locally

<br />

<!-- GETTING STARTED -->

## Getting Started

Access the app [here](http://ec2-54-204-253-168.compute-1.amazonaws.com/) or get a local copy up and running following the steps below.

<br />

### Prerequisites

- docker
- docker compose

<br />

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/pauloserrano/password-generator-api
   ```
2. Create a .env file for the client
   ```sh
   # ./client/.env
   VITE_APP_BACKEND_URL=http://localhost:80/api
   ```
3. Create a .env file for the server
   ```sh
   # ./server/.env
   PORT=5000
   DATABASE_URL=postgresql://postgres:postgres@postgres:5432/passwords
   POSTGRES_PASSWORD=postgres
   ```
4. Run the application
   ```sh
   docker compose up
   ```
5. Access the app at the client at [http://localhost:80/](http://localhost:80/)

<br />

<!-- CONTACT -->

## My Contacts

Email: [pvsserrano@gmail.com](mailto:pvsserrano@gmail.com)

Linkedin: [Paulo Serrano](https://www.linkedin.com/in/pvsserrano/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[React-badge]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Node-badge]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/
[Docker-badge]: https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/
[Express-badge]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Express-url]: https://expressjs.com/
[Postgres-badge]: https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white
[Postgres-url]: https://www.postgresql.org/
[Jest-badge]: https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white
[Jest-url]: https://jestjs.io/
[Typescript-badge]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/
[Prisma-badge]: https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white
[Prisma-url]: https://www.prisma.io/
[EsLint-badge]: https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white
[EsLint-url]: https://eslint.org/
[Actions-badge]: https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white
[Actions-url]: https://github.com/features/actions
[Vite-badge]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/
[Styled-Components-badge]: https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white
[Styled-Components-url]: https://styled-components.com/
