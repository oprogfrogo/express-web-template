# Express Webapp Template

Skeleton for quickly getting a node app running in Express.

## Seed test data
  * Bring in test seed data to quickly have data to work with. Running the seed command will import all .json files found in the seeds directory:

  ```bash
  $ seed
  ```

## Compile public assets using gulp

  * The gulp command will perform transformations on your changes (e.g. uglify js, compiling sass, etc.) and output the changes to the `./server/public/dist` folder. The gulpfile.js has also been configured to automatically run `bower install` which will bring in any 3rd party libraries dependencies:

   ```bash
   $ gulp
   ```



## Environment vars the app needs

  * Add these ENV vars in your .bash_profile:
  
  ```bash
  export DB_NAME='replace with db_name_here'
  export DB_USER='replace with username_here'
  export DB_PASS='replace with password_here'
  export DB_PORT='replace with port_here'
  ```

## Run the app using nodemon

  * Nodemon great for development because it automatically restarts the server on-save:

  ```bash
  $ nodemon
  ```

## Try calling the service

  * Curl the test root endpoint and you should get back the test data you seeded in the start of this markdown readme:

  ```bash
  $ curl -H "Content-Type: application/json" -X POST -d '{"first_name":"Zelda"}' http://localhost:3000/users
  ```

  * Expected JSON response from mongo:
  
  ```json
  {
      "users": [
          {
            "_id":"598dcb6a1972e65dd9effce3",
            "id":1,
            "first_name":"Zelda",
            "last_name":"Strewther",
            "email":"zstrewther0@businessinsider.com",
            "gender":"Female",
            "ip_address":"215.7.15.207"
          }
      ]
  }
  ```
  
## Try pulling up the webpage
  
  * Pull up http://localhost:3000 to see the index page.
  