module.exports = {
  facebookAuth: {
    clientID: "480519705750299", // your App ID
    clientSecret: "ca29e1256db907fd039d311c16c096a2", // your App Secret
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    profileURL:
      "https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email",
    profileFields: ["id", "email", "name"] // For requesting permissions from Facebook API
  },
  mongoURI: "mongodb://adrian:adrian100@ds141631.mlab.com:41631/chachara",
  secretOrKey: "secret"
};
