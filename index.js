const keystone = require('keystone')
const path = require('path')

keystone.init({
  // The name of the KeystoneJS application
  'name': 'WATT Consultoria',
  // Paths to our application static files
  'static': [path.join(__dirname, '/public')],
  // Keystone includes an updates framework, 
  // which you can enable by setting the auto update option to true.
  // Updates provide an easy way to seed your database, 
  // transition data when your models change, 
  // or run transformation scripts against your database.
  'auto update': true,
  // The url for your MongoDB connection
  'mongo': 'mongodb://localhost/keystonereactcms',
  // Whether to enable built-in authentication for Keystone's Admin UI,
  'auth': true,
  // The key of the Keystone List for users, required if auth is set to true
  'user model': 'User',
  // The encryption key to use for your cookies.
  'cookie secret': '6D61822FBEAED8635A4A52241FEC3',
});

keystone.import('./server/models')

keystone.set('routes', require('./server/routes'))

keystone.start()