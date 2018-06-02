# Creating BYOP provider Node.js Packaged Module
- 1. create a folder: package - e.g. censorify 
- 2. create a file: module - e.g. censortext.js
- 3. write code
- 4. create a required package.json: metadata
- 5. place this readme instructions document
- 6. build a local package module with the command: **npm pack**

# Modifying BYOP provider Node.js Packaged Module
- 1. change packgage.json version property for new provider package

# Creating BYOP consumer Node.js Packaged Module
- 1. create a folder: package e.g readwords 
- 2. install provider module: **npm install ../censorify/censorify-0.1.0.tgz**
- 3. create a file: module - e.g readwords.js
- 4. write code
- 5. run the application with **node readwords.js**

# Modifying BYOP consumer Node.js Packaged Module
- 1. re-install for new provider package, if changed in version

# Using the BYOP consumer Node.js Packaged Module in target project
- 1. copy the customized packaged module to src directory for reuse