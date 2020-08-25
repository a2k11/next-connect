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
  - created navbar from material ui components, added buttons for auth & unauth users
  - added ActiveLink components to navbar, used nextjs withRouter to add router object to component
  - added form to signup page, built with components handling event state changes,
    created call to backend to sign up users
  - created error component with setting error to state, created success modal for signup
  -  tried to figure out unhandled rejections error which keeps happening, link is here at:
     https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode , added new flag to 
     dev script in package.json for unhandled rejections, created the signin page with 
     same template as signup page, added axios call to backend for sign in
  - defined signout with auth function call, importing auth initial props into each page for
    navbar to be in correct state
  - implemented custom profile route passing user_id to server
  - passed userId & auth props into profile component to display user data, added material_ui
    components to profile, set loading spinner & auth check for profile view, added api library &
    getUser fn
  - created unfollow / follow in api library, created FollowUser button & connected requests
    in profile page
  - added deleteUser to api, added DeleteUser component to profile page, defined DeleteUser component
  - added getAuthUser to api, added EditProfile component in pages
  - added updateUser to api, created handleChange & handleSubmit within edit-profile to process user events
  - imported error & snackbar features from signup page, implemented handleSubmit & handleClose, updated User
    gets pushed to profile page at finish
  - created a splash page for unauthenticated users
  - imported userfeed & postfeed to user dashboard, defined UserFeed
    component, added api call for user feed, implemented user feed snackbar
  - creating post components, defined NewPost with stateless function component, PostFeed react component provided
    FormData in componentDidMount & handleChange for state of user data
  - fn: addPost request created, posts now persist which include images & texts, passed actions on PostFeed 
    through to New Post in order to make new posts
  - grabbing posts through get api call, displaying posts on post feed by adding Post component, defined
    Post component by passing post attributes, added delete button for each post, fixed new post issue
  - create delete path for post, added more props to post, implemented deletePost in api, handleDelete 
    deletes posts in PostFeed component
  - updated like button to send requests to server, added props to post to send back data to handleToggleLike
    in post feed
  - added componentDidMount & componentDidUpdate to check like from user, also display total likes in post component
  - pure component implemented to prevent rerendering, uses shouldComponentUpdate with a shallow prop & state
    comparison, skips prop updates for the whole component subtree
  - scaffolding for comment component, created list of comments below post with user name & avatar, new comment 
    form & delete option for user's comments, added comment to post component
  - in PostFeed fn: handleAddComment collects postId & text data and sends it to api, handleAddComment is added to 
    the props of post component and then added to the props of the comment component, the comment component contains
    logic to update its state with the text the user enters for a comment and with handleSubmit it will call 
    handleAddComment and the way back up the chain, set comments in Post component state through the 
    componentDidMount & componentDidUpdate hooks
  - 
