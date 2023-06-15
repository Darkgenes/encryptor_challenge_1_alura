<a name = "readme-top"></a>

<!--
This was based in Best-README-Template[https://github.com/othneildrew/Best-README-Template/blob/master/README.md#readme-top], and [https://github.com/abhisheknaiidu/awesome-github-profile-readme/blob/master/README.md] 
-->

<!-- Project Shields -->

<div align = "center">
<!-- Stars -->
<a href = "https://github.com/Darkgenes/encryptor_challenge_1_alura/stargazers"><img src = "https://img.shields.io/github/stars/Darkgenes/encryptor_challenge_1_alura" alt = "Stars Badge"/></a>
<!-- Forks -->
<a href = "https://github.com/Darkgenes/encryptor_challenge_1_alura/network/members"><img src = "https://img.shields.io/github/forks/Darkgenes/encryptor_challenge_1_alura" alt = "Forks Badge"/></a>
<!-- Pull requests -->
<a href = "https://github.com/Darkgenes/encryptor_challenge_1_alura/pulls"><img src = "https://img.shields.io/github/issues-pr/Darkgenes/encryptor_challenge_1_alura" alt = "Pull Requests Badge"/></a>
<!-- Issues -->
<a href = "https://github.com/Darkgenes/encryptor_challenge_1_alura/issues"><img src = "https://img.shields.io/github/issues/Darkgenes/encryptor_challenge_1_alura" alt = "Issues Badge"/></a>
<!-- Contribuitors -->
<a href = "https://github.com/Darkgenes/encryptor_challenge_1_alura/graphs/contributors"><img alt = "GitHub contributors" src = "https://img.shields.io/github/contributors/Darkgenes/encryptor_challenge_1_alura?color=2b9348"></a>
<!-- License -->
<a href = "https://github.com/Darkgenes/encryptor_challenge_1_alura/blob/main/LICENSE.txt"><img src = "https://img.shields.io/badge/License-MIT-yellow.svg" alt = "License Badge"/></a>

</div>  

# =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*

<h2>Nombre del Proyecto || Project Name: Encryptor_Challenge</h2>
<h4>Versión || Version: 1.0.0</h4>
<h4>Fecha || Date: 23/05/2023</h4>

# =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*

<details>
  <summary><b>Tabla de contenidos || Table of contents:</b></summary>
  <ol>
    <li>
      <a href = "#1-introducción--introduction">Introducción || Introduction</a>
    </li>
    <li>
      <a href = "#2-indicaciones-del-curso-one--one-course-indications">Indicaciones del curso ONE || ONE course indications</a>
      <ul>
        <li><a href = "#2-1-requisitos--requirements">Requisitos || Requirements</a></li>
        <li><a href = "#2-2-extras">Extras:</a></li>
      </ul>
    </li>
    <li><a href = "#3-instalación--installation">Instalación || Installation</a></li>
    <li><a href = "#4-uso--usage">Uso || Usage</a></li>
    <li><a href = "#5-características--features">Características || Features</a></li>
    <li><a href = "#6-problemas-conocidos--known-issues">Problemas conocidos || Known Issues</a></li>
    <li><a href = "#7-licencia--license">Licencia || License</a></li>
    <li><a href = "#8-contacto--contact">Contacto || Contact</a></li>
  </ol>
</details>

<p align = "right">(<a href = "#readme-bottom">go to bottom</a>)</p>

## 1. Introducción || Introduction

Se trata de una aplicación sencilla que encripta textos. Primer Challenge; grupo 5 de ONE (Alura + Oracle) llamado "Sprint 01: Construye un encriptador de texto con Javascript". || It's about a basic App that encrypts texts. First Challenge; ONE group 5 (Alura + Oracle) called: "Sprint 01: Build a text encryptor with Javascript". 

<p align = "right">(<a href = "#readme-top">back to top</a>)</p>

## 2. Indicaciones del curso ONE || ONE course indications

Las "llaves" de encriptación que utilizaremos son las siguientes: || The cryptographic keys we shall use are as it follows below:

* La letra "e" es convertida a "enter". || The letter "e" is converted to "enter".
* La letra "i" es convertida a "imes". || The letter "i" is converted to "imes".
* La letra "a" es convertida a "ai". || The letter "a" is converted to "ai".
* La letra "o" es convertida a "ober". || The letter "o" is converted to "ober".
* La letra "u" es convertida a "ufat". || The letter "u" is converted to "ufat".

### 2. 1. Requisitos: || Requirements

Aquí los requisitos señalados por el curso: || Here are the course requirements:

* Debe funcionar solo con letras minúsculas. || It must work only with lowercase letters.

* No deben ser utilizados letras con acentos ni caracteres especiales. || It must not be used either accented letters or special characters.

* Debe ser posible convertir una palabra u oración a la versión encriptada y también devolver una palabra encriptada a su versión original. || It must be possible to convert a word or a sentence to encrypted version and also return the decrypted word or sentence.

Por ejemplo: || For example:
-"gato" => "gaitober". (encriptado) || "cat" => "caitober". (encrypted)
-gaitober" => "gato". (desencriptado) || "caitober" => "cat". (decrypted)

* La página debe tener campos para la inserción de texto que será encriptado o desencriptado, y el usuario debe poder escoger entre las dos opciones. || The website must have fields for text insertion that will be encrypted or decrypted, and user must be able to pick between two options.

El resultado deberá ser mostrado en la pantalla. ||Result should be displayed on the screen.

### 2. 2. Extras:

Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del "ctrl + c" o de la opción "copiar" del menú de aplicaciones. || A button that copies encrypted/decrypted text for transfer section, that is, it shall have the same functionality as "ctrl+ c" or the "copy" option, in the application menu.

<p align = "right">(<a href = "#readme-top">back to top</a>)</p>

## 3. Instalación || Installation:

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

<p align = "right">(<a href = "#readme-top">back to top</a>)</p>

## 4. Uso || Usage:

Usar My Awesome App es muy sencillo. Estos son los pasos básicos:
- Inicia la aplicación haciendo doble clic en el icono del escritorio o buscándola en el menú Inicio.
- Familiarízate con la interfaz principal y las opciones disponibles.
- Personaliza los ajustes de la aplicación según tus preferencias.
- Empieza a utilizar las distintas funciones y ¡disfruta de sus ventajas!

<p align = "right">(<a href = "#readme-top">back to top</a>)</p>

## 5. Características || Features:

My Awesome App ofrece las siguientes características clave:
- Característica 1: Describe la primera característica y su funcionalidad.
- Característica 2: Explica la segunda característica y su utilidad.
- Característica 3: Destaca la tercera característica y sus ventajas.
- Característica 4: Mencione la cuarta característica y por qué destaca.
- Característica 5: Proporcione detalles sobre la quinta característica y sus ventajas.

<p align = "right">(<a href = "#readme-top">back to top</a>)</p>

## 6. Problemas conocidos || Known Issues:

Aunque nos esforzamos por ofrecer una experiencia libre de errores, hay algunos problemas conocidos en esta versión de My Awesome App:
- Problema 1: Describe el primer problema conocido y su impacto.
- Problema 2: Explica el segundo problema conocido y las soluciones disponibles.
- Problema 3: Destaque el tercer problema conocido y su fecha de resolución prevista.

<p align = "right">(<a href = "#readme-top">back to top</a>)</p>

## 7. Licencia || License:

En la medida en que la ley lo permite, Darkgenes ha renunciado a todos los derechos de autor y derechos afines o conexos sobre esta obra. || To the extent possible under law, Darkgenes has waived all copyright and related or neighboring rights to this work.

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

<p align = "right">(<a href = "#readme-top">back to top</a>)</p>

## 8. Contacto || Contact:

Para cualquier pregunta, duda o comentario, ponte en contacto con el siguiente canal: || For any questions, doubts or comments, please contact the following channel:
- Correo electrónico || email: cristhiam.060201@gmail.com

<p align = "right">(<a href = "#readme-top">back to top</a>)</p>

<a name = "readme-bottom"></a>
