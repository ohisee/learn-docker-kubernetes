/**
 * @fileoverview server js
 */
 const path = require('path');
 const fs = require('fs');
 
 const express = require('express');
 
 const server = express();
 
 const filePath = path.join(__dirname, process.env.STORY_FOLDER, 'text.txt');
 
 server.use(express.json());
 
 server.get('/story', (req, res) => {
   fs.readFile(filePath, (err, data) => {
     if (err) {
       return res.status(500).json({ message: 'Failed to open file.' });
     }
     res.status(200).json({ story: data.toString() });
   });
 });
 
 server.post('/story', (req, res) => {
   const newText = req.body.text;
   if (newText.trim().length === 0) {
     return res.status(422).json({ message: 'Text must not be empty!' });
   }
   fs.appendFile(filePath, newText + '\n', (err) => {
     if (err) {
       return res.status(500).json({ message: 'Storing the text failed.' });
     }
     res.status(201).json({ message: 'Text was stored!' });
   });
 });

 // exist and force container to restart
 server.get('/error', (req, res) => {
   process.exit(1);
 });
 
 server.listen(3000);
 