![pink chat icon with a green status indicator and a green smile. Text below reads 'elixa.io, have a nice chat'](public/elixa_small.png) 

## Table of contents
* [Meet Elixa](#meet-elixa)
* [Inspiration](#inspiration)
* [Conversations](#conversations)
* [Technologies](#technologies)
* [Status](#status)
* [Contact](#contact)
* [License](#license)

## Meet Elixa
[Elixa Duxworth](http://www.elixa.io/) is a friendly troubleshooting partner who is always available to listen.  While she doesn't have much hands-on technical experience, she has picked up some programming tips, especially when it comes to common rookie mistakes in Javascript, HTML, and CSS. Even when her suggestions are not exactly on point, sometimes just chatting through troubleshooting woes can help.  Elixa figures she as least as good of a troubleshooting partner as a [rubber duck](https://rubberduckdebugging.com/).  And when a bug has you really stuck, what have you got to lose?

Elixa's friendly attitude, familiar chatbot interface, and constant availability makes her an appealing option for anyone who needs to chat through a thorny coding problem. Elixa's advice includes targeted responses at the mention of specific technologies, as well as general programming wisdom.  And if you need a break from coding, she is always happy to make small talk, play games, or even sing a song!

## Historic Inspiration

All of the **elixa.io** chatbots take their inspiration from ELIZA, an early natural language processing computer program developed in 1966 by Joseph Weizenbaum of the MIT Artificial Intelligence Lab. ELIZA simulated conversation by using a pattern matching and substitution methodology that gave users an illusion of understanding on the part of the program. Interactions were dictated by "scripts" which allowed ELIZA to process user inputs and engage in discourse following the rules and directions of the script. The most famous script, DOCTOR, simulated a psychotherapist by using script rules to respond with non-directional questions to user inputs. ELIZA was one of the first ever chatbots and one of the first programs capable of attempting the Turing test.

ELIZA was originally written in the MAD-SLIP programming language, which Weizenbaum invented as a an extension to FORTRAN.  In 1977, a BASIC version appeared in Creative Computing magazine, which was ported to many of the earliest personal computers of the late 70s and early 80s. ELIZA continues to be source of inspiration for programmers and developers focused on artificial intelligence.  For example, Amazon's Alexa includes an [ELIZA implementation](https://www.amazon.com/Asimov-Eliza/dp/B0184NR4P8) as does [Google Home](https://www.makeuseof.com/tag/google-home-commands-cheat-sheet/).  Another version of Eliza popular among software engineers is the version that comes with the default release of GNU Emacs, and which can be accessed by typing `M-x doctor` from most modern Emacs implementations.

*note: historic information liberally paraphrased from [Wikipedia's ELIZA article](https://en.wikipedia.org/wiki/ELIZA)*

## Early Iteration

**elixa.io** released its first chatbot, [Elixa Newpal](https://elixa.io/denver-love), in March 2021.  Elixa Newpal was designed to simulate a beginning software engineering bootcamp student with a passion for helping her fellow bootcampers debug their code.  Elixa Newpal was developed as an appreciative gift to the incredible learning community of the Flatiron Software Engineering Bootcamp in Denver, CO, affectionately known as "The Love Bubble" or "The Learning Factory".

The Elixa Newpal code is based on a 2005 [ELIZA Javascript implementation](https://www.masswerk.at/elizabot/) by [Norbert Landsteiner of mass:werk media](https://www.masswerk.at/). While being a mere 15 years old as opposed to 55, this ELIZA uses a web interface that is styled similar to a teletype in order to mimic the original 1966 version. Elixa uses the same chatbot engine code as the Landsteiner implementation, but with an updated interface to provide a slack-like experience, and with a new script that reimagines her as a beginning SE bootcamp student rather than a Rogerian therapist.

## Chat at the Next Level

Elixa Duxworth also has a passion for helping codes with their code, but her technology stacks is quite different than Elixa Newpal.  While Elixa Newpal was an experience in vintage computing, Elixa Duxworth is built on the modern AI chatbot engine Pandorabots, programmed with AIML (Artificial Intelligence Markup Languag).

## Technologies

**Frontend**
* Implemented in React
* Utilizes [react-chatbot-kit](https://fredrikoseberg.github.io/react-chatbot-kit-docs/)
* Frontend repo: https://github.com/tara-m-harwood/elixa-duxworth-frontend

**Backend**
* Node.js & Express Server
* MongoDB for saving and retriving user accounts
* Backend repo: https://github.com/tara-m-harwood/elixa-duxworth-backend

## Status and Future Plans

Future features under consideration:
* Creation of a new general-purpose Elixa script for troublshooting support, broadening beyond one specific school
* Improvment of the keyword memory feature so that Elixa will "remember" specific technologies mentioned earlier in the conversation and bring them up again
* Addition of an autosearch feature where Elixa will present the user with Google searches based on combinations of keywords
* An SMS interface
* An official Slackbot integration
* A significant refactor of the code

## Contact

Hi! My name is Tara Harwood, and I am the developer of Elixa Duxwoth, Elixa Newpal and the Founder/ Chief Hobbyist of [elixa.io](https://elixa.io/), which is my brand for volunteer contributions to open-source projects and chatbot research activities.  I have a specific interest in natural language processing, SMS applications, and technologies related to political activism.

As a child, my first personal computer came with the BASIC version of ELIZA, and from the start I was entranced with her.  My early positive experiences with ELIZA formed my interest in computer programming and influenced my ideas about interaction design.

In May 2021, I graduated from Flatiron School's Full-Stack Software Engineering Bootcamp in Denver, CO. I created Elixa Newpal as my Week 9 project, and Elixa Duxworth as my Capstone Project of th1 15 week curriculum. You can learn more about / contact me on LinkedIn or GitHub:

* [Tara on LinkedIn](https://www.linkedin.com/in/taraharwood/)
* [Tara on GitHub](https://github.com/tara-m-harwood)


## License

"Elixa Duxworth", "Elixa Newpal" and "elixa.io" are copyrights of Tara Harwood, 2021, all rights reserved.

All of the code in this project is free software and can be used for any purpose.  Attribution is appreciated, but not required.
