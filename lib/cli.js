#! /usr/bin/env node

/**
 * @description
 * grab user provided arguments
 */
const [,, ...args] = process.argv;

/**
 * @description
 * if user does not pass argument it is get run ujs start function
 */

if (args.length == 0) {
  startWithDevelopmentMode();
} else {

  switch(args[0]) {

    case 'init':
      /**
       * @description
       * initialize new directory in root path for add user business logic ,routes and
       * views 
       */

      /**
       * @description
       * first check controller directory is exists in root path or not
       * if not create controller directory
       */
      if (!isControllersDirectoryExists()) {
        /**
         * @description
         * if controller director not exists
         * create new directories controllers, routes and pages
         * controllers directory is in root path
         * routes, component and pages directory is inside the controllers directory
         * so creating controllers directory must be first and Sync
         */

        /**
         * @description
         * send message to user console
         */
        console.log('\x1b[33m%s\x1b[0m',"[URANIUMJS CLI:] creating new directory in root....");

        var controllers_dir = './controllers';
        var routes_dir = './controllers/routes';
        var pages_dir = './controllers/pages';
        var component_dir = './controllers/component';
        var routes_file = './controllers/routes/routes.ts';
        const fs = require("fs");

        /**
         * @description
         * if flag is force re write current all directories
         */
        var second_flag = undefined;
        try {
          second_flag = args[1];
        } catch (error) {

        }
        switch (second_flag) {
          case '-f':
            fs.mkdirSync(controllers_dir);
            fs.mkdirSync(routes_dir);
            fs.mkdirSync(pages_dir);
            fs.mkdirSync(component_dir);
            fs.openSync(routes_file, 'w');
            addRoutesTemplateClass();
          break;

          case '--force':
            fs.mkdirSync(controllers_dir);
            fs.mkdirSync(routes_dir);
            fs.mkdirSync(pages_dir);
            fs.mkdirSync(component_dir);
            fs.openSync(routes_file, 'w');
            addRoutesTemplateClass();
          break;

          default:
            /**
             * @description
             * create files and folder if not exists
             */
            if (!fs.existsSync(controllers_dir)) {
              fs.mkdirSync(controllers_dir);
              fs.mkdirSync(routes_dir);
              fs.mkdirSync(pages_dir);
              fs.mkdirSync(component_dir);
              fs.openSync(routes_file, 'w');
              addRoutesTemplateClass();
            }

          break;
        }

        /**
         * @description
         * send message to user console
         */
        console.log('\x1b[33m%s\x1b[0m',"[URANIUMJS CLI:] successfully create controllers directory in root");
        console.log('\x1b[33m%s\x1b[0m',"[URANIUMJS CLI:] successfully create routes directory inside controllers");
        console.log('\x1b[33m%s\x1b[0m',"[URANIUMJS CLI:] successfully create pages directory inside controllers");
        console.log('\x1b[33m%s\x1b[0m',"[URANIUMJS CLI:] successfully create component directory inside controllers");
        console.log('\x1b[33m%s\x1b[0m',"[URANIUMJS CLI:] successfully create routes.js file inside routes directory");
        console.log('\x1b[33m%s\x1b[0m',"[URANIUMJS CLI:] Done !");

      } else {
        /**
         * @description
         * check is routes directory is exists
         */
        const fs = require("fs");

        const routes_path = `./controllers/routes`;
        if (!fs.existsSync(routes_path)) {
          /**
           * @description
           * directory not, exists create new one
           */
          fs.mkdirSync(routes_path);

          /**
           * @description
           * file not, exists create new one
           */
          var routes_file = './controllers/routes/routes.ts';
          fs.openSync(routes_file, 'w');
          addRoutesTemplateClass();

        /**
         * @description
         * send message to user console
         */
          console.log('\x1b[33m%s\x1b[0m',"[URANIUMJS CLI:] successfully create routes  directory inside controllers");
          console.log('\x1b[33m%s\x1b[0m',"[URANIUMJS CLI:] successfully create routes.ts  file inside routes");
          console.log('\x1b[33m%s\x1b[0m',"[URANIUMJS CLI:] Done !");
        } else {
          var routes_file = './controllers/routes/routes.ts';

          if (!fs.existsSync(routes_file)) {
          /**
           * @description
           * file not, exists create new one
           */
            fs.openSync(routes_file, 'w');
            addRoutesTemplateClass();

          /**
           * @description
           * send message to user console
           */
            console.log('\x1b[33m%s\x1b[0m',"[URANIUMJS CLI:] successfully create routes.ts  file inside routes");
            console.log('\x1b[33m%s\x1b[0m',"[URANIUMJS CLI:] Done !");
          } else {
            /**
             * @description
             * send message to user console
             */
            console.log('\x1b[33m%s\x1b[0m',"[URANIUMJS CLI:] routes.ts file already exists !");
          }
        
        /**
         * @description
         * send message to user console
         */
          console.log('\x1b[33m%s\x1b[0m',"[URANIUMJS CLI:] routes directory already exists !");

        }

        /**
         * @description
         * check is pages directory is exists
         */
        const pages_path = `./controllers/pages`;
        if (!fs.existsSync(pages_path)) {
          /**
           * @description
           * directory not, exists create new one
           */
          fs.mkdirSync(pages_path);

        /**
         * @description
         * send message to user console
         */
          console.log('\x1b[33m%s\x1b[0m',"[URANIUMJS CLI:] successfully create pages directory inside controllers");
          console.log('\x1b[33m%s\x1b[0m',"[URANIUMJS CLI:] Done !");
        } else {
        /**
         * @description
         * send message to user console
         */
        console.log('\x1b[33m%s\x1b[0m',"[URANIUMJS CLI:] pages directory already exists !");
        }

        /**
         * @description
         * check is component directory is exists
         */
        const component_path = `./controllers/component`;
        if (!fs.existsSync(component_path)) {
          /**
           * @description
           * directory not, exists create new one
           */
          fs.mkdirSync(component_path);

        /**
         * @description
         * send message to user console
         */
          console.log('\x1b[33m%s\x1b[0m',"[URANIUMJS CLI:] successfully create component directory inside controllers");
          console.log('\x1b[33m%s\x1b[0m',"[URANIUMJS CLI:] Done !");
        } else {
        /**
         * @description
         * send message to user console
         */
        console.log('\x1b[33m%s\x1b[0m',"[URANIUMJS CLI:] component directory already exists !");
        }

        /**
         * @description
         * send message to user console
         */
        console.log('\x1b[33m%s\x1b[0m',"[URANIUMJS CLI:] finished !");

      }

    break;

    case 'start':
      var canStart = true;
      if (!isControllersDirectoryExists()) {
        /**
         * @description
         * send message to user console
         */
        console.log('\x1b[33m%s\x1b[0m',"[URANIUMJS CLI:] no controllers directory run 'ujs init' and then run 'ujs start' to create controllers directory");
        canStart = false;
      }
      /**
       * @description
       * check is routes directory is exists
       */
      const fs = require("fs");

      const routes_path = `./controllers/routes`;
      if (!fs.existsSync(routes_path)) {
        /**
         * @description
         * send message to user console
         */
        console.log('\x1b[33m%s\x1b[0m',"[URANIUMJS CLI:] no routes directory run 'ujs init' and then run 'ujs start' to create routes directory");
        canStart = false;
      } else {
        var routes_file = './controllers/routes/routes.ts';

        if (!fs.existsSync(routes_file)) {
        /**
         * @description
         * send message to user console
         */
          console.log('\x1b[33m%s\x1b[0m',"[URANIUMJS CLI: WARNING] no routes.ts file, make sure to create routes.ts files inside the routes folder ");
          console.log('\x1b[33m%s\x1b[0m',"[URANIUMJS CLI:] you can use 'ujs init' to create it !");
          canStart = false;
        } 
      }

      /**
       * @description
       * check is routes directory is exists
       */
      const pages_path = `./controllers/pages`;
      if (!fs.existsSync(pages_path)) {
        /**
         * @description
         * send message to user console
         */
        console.log('\x1b[33m%s\x1b[0m',"[URANIUMJS CLI:] no pages directory run 'ujs init' and then run 'ujs start' to create pages directory");
        canStart = false;
      } 

      /**
       * @description
       * check is routes directory is exists
       */
      const component_path = `./controllers/component`;
      if (!fs.existsSync(component_path)) {
        /**
         * @description
         * send message to user console
         */
        console.log('\x1b[33m%s\x1b[0m',"[URANIUMJS CLI:] no component directory run 'ujs init' and then run 'ujs start' to create pages directory");
        canStart = false;
      } 

      /**
       * @description
       * if all directory is ready the app
       */
      if (canStart) {
        startWithDevelopmentMode();
      }
      
    break;

    case 'conf':
      startWithDevelopmentMode();
    break;

    default:
        /**
         * @description
         * send message to user console
         */
        console.log('\x1b[33m%s\x1b[0m',`[URANIUMJS CLI:] ${args[0]} command is not valid ujs command.`);
    break;

  }

}

/**
 * @description
 * check controllers director exists
 */
function isControllersDirectoryExists() {
  const fs = require("fs");
  const path = `./controllers`; 
  if (fs.existsSync(path)) {
    return true; 
  } else {
    return false;
  }
}

/***
 * @description
 * add the routes template into routes.js file
 */
function addRoutesTemplateClass() {
  const fs = require("fs");
  const path = `./controllers/routes/routes.ts`;
  const data = `
  import {Routers} from '../../src/lib_modules/_ujs_core/_routers/Routers';
               
    export class routes extends Routers {
       constructor() {
        super({
            // '/' : HomePage; { @path } : { @class_Object }         
        });
    }
  }`;
  if (fs.existsSync(path)) {
    fs.writeFile(path, data, (err) => {
      if (err) console.log('\x1b[33m%s\x1b[0m',"[MESSAGE FROM URANIUMJS CLI:]"+err);
      console.log('\x1b[33m%s\x1b[0m',"[MESSAGE FROM URANIUMJS CLI:] Successfully Written to routes.js File.");
    });
  } else {
    console.log('\x1b[33m%s\x1b[0m',"[MESSAGE FROM URANIUMJS CLI:] routes.ts file not exists.");
  }
}


function startWithDevelopmentMode() {
  /**
   * @description
   * call the child process using nodeJS
   */
  var exec = require('child_process').exec;

  console.log('\x1b[33m%s\x1b[0m',"[MESSAGE FROM URANIUMJS CLI:] starting....");
  console.log('\x1b[33m%s\x1b[0m',"[MESSAGE FROM URANIUMJS CLI:] bundling the all files into bundle.js");
  console.log('\x1b[33m%s\x1b[0m',"[MESSAGE FROM URANIUMJS CLI:] Done! bundling is finished and server running in Development mode...");


  exec('"./node_modules/.bin/gulp"', {
    /**
     * @description
     * execute gulp command inside the root folder (proj folder) 
     * path must be relative for support different file system Windows,Mac OS and Unix like Linux distributor 
     */
    cwd: '' 
  }, function(error, stdout, stderr) {
    console.log("error",error);
    console.log("stdout",stdout);
    console.log("stderr",stderr);
  });
}


