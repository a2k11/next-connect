const mongoose = require('mongoose');
const User = mongoose.model('User');
const passport = require('passport');

exports.validateSignup = (req, res, next) => {
  req.sanitizeBody('name');
  req.sanitizeBody('email');
  req.sanitizeBody('password');

  req.checkBody('name', 'Enter a name').notEmpty();
  req
    .checkBody('name', 'Name must be btw 4 & 10 characters')
    .isLength({ min: 4, max: 10 });

  // email is non null, valid, & normalized
  req.checkBody('email', 'Enter a valid email').isEmail().normalizeEmail();

  // password must be non null, btw 4 & 10 characters, &
  req.checkBody('password', 'Enter a password').notEmpty();
  req
    .checkBody('password', 'Password must be btw 4 & 10 characters')
    .isLength({ min: 4, max: 10 });

  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).send(firstError);
  }
  next();
};

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await new User({ name, email, password });
  await User.register(user, password, (err, user) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.json(user);
  });
};

exports.signin = (req, res, next) => {
  passport.authenticate('local', (error, user, info) => {
    if (error) {
      return res.status(500).json(error.message);
    }
    if (!user) {
      return res.status(400).json(info.message);
    }

    // eslint-disable-next-line consistent-return
    req.login(user, (err) => {
      if (err) {
        return res.status(500).json(err.message);
      }

      res.json(user);
    });
  })(req, res, next);
};

exports.signout = (req, res) => {
  res.clearCookie('next-cookie.sid');
  req.logout();
  res.json({ message: 'Logging Out ...' });
};

exports.checkAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/signin');
};
