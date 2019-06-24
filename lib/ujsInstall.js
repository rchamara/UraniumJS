#! /usr/bin/env node

/**
 * @description
 * grab user provided arguments
 */
const [,, ...args] = process.argv;

  /**
   * @description
   * call the child process using nodeJS
   */
  var exec = require('child_process').exec;

  exec('npm install', {
    /**
     * @description
     * execute npm install command inside the root folder (proj folder)  
     */
    cwd: '' 
  }, function(error, stdout, stderr) {
    console.log("error",error);
    console.log("stdout",stdout);
    console.log("stderr",stderr);
    if (error == null) {
        /**
         * @description
         * run npm link command for create symlink with npm global modules
         * it will allow to user run custom ujs cli command any where 
         */
        exec('npm link', {
            /**
             * @description
             * execute npm link command inside the root folder (proj folder)
             */
            cwd: '' 
          }, function(error, stdout, stderr) {
            console.log("error",error);
            console.log("stdout",stdout);
            console.log("stderr",stderr);
          });
    }
  });