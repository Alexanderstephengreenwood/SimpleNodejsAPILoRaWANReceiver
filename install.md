Quick Install Guide

1. Install mongoDB server
2. Install nodejs and npm
3. Create a project folder
4. From a cmd line within the project folder i.e. /home/myproject/ $ npm init
5. Complete required fields npm asks such as "name", "version", "description", etc
6. Add the required packges from Nodes Package Management: npm install express, npm install mongodb --save, npm install body-parser
7. Open the required firewalls 27017 for mongoDB and 8080 for webserver: sudo ufw allow 27017, sudo ufw allow 8080
8. Start your mongoDB server: sudo mongod --dbpath /../.../  this is if you wish to store your data in a different location
9. within you project path in the cmd line run nodes by typing: nodejs server.js

Optionnaly, you can install mongoDB-Compass to view how and what is stored on the DB


