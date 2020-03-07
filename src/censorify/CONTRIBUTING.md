## Node.js Programming: NPM

### Creating BYOP publisher Node Packaged Module
  - create a folder: package - e.g. censorify - 
  - create a file: module - e.g. censortext.js
  - write code
  - create a required package.json: metadata
  - place this readme instructions document
  - build a local package module with the command: **npm pack**

### Modifying BYOP publisher Node.js Packaged Module
  - change packgage.json version property for new provider package

### Creating BYOP subscriber Node Packaged Module
  - create a folder: package e.g readwords 
  - install provider module: - **npm install ../censorify/censorify-0.1.0.tgz**
  - create a file: module - e.g readwords.js
  - write code
  - run the application with **node readwords.js**

### Modifying BYOP subscriber Node Packaged Module
  - re-install for new provider package, if changed in version

### Using the BYOP subscriber Node Packaged Module in target project
  - copy the customized packaged module to src directory for reuse
  
  
