### A nextjs social application

### Getting Started

1. Clone this repo with `git clone git@github.com:reedbarger/next-connect.git`
2. Install dependencies (`npm install` or `yarn install`)
3. Go to cloud.mongodb.com and create a new (free) database
4. Copy the Database URI to connect using the Mongo Driver
5. Change your .env.default file to just .env and paste the copied uri as the value for MONGO_URI in .env
6. Add any random string for the SESSION_SECRET entry in your .env file
7. Run with `npm run dev` or `yarn dev`
8. Server should be listening on localhost:3000

### Continuing the application
#### Backend: ExpressJs
 - created validations for signup, ability to register users
 - authenticating users with passport library, completed signin action for controller
 - signout, checkAuth implemented for authController
 - defined getUsers in userController for /api/users
 - used router.param() for grabbing user / deleting user by id
 - defined getAuthUser for user to access only their own data
 - fn: getUserProfile -> userController, remove error-catch from route since not async await function
 - moved following routes to be recognized, defined following users
 - unfollow actions for users
 - activity user feed
 - updating users with Put request, added multer middleware for handling 'multipart/formdata',
   added jimp image processing library ( written in javascript ), created actions for avatar image
 - changed getUser to check for user on request, added upload; resizing images along with new posts
 - retrieving posts by user_id & their followers, fn: getPostFeed(), getPostsByUser()
 - control like and unlike in postController by pull / push likes array fn: toggleLike()
 - posts now have comments which are created with new id, text, & userId
 - authorized user can delete their posts, router param postId, post Controller finished

#### Frontend: NextJs
  - fixed error handling by adding next param, created a color palette
  - 