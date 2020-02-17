const keystone = require('keystone');
const User = keystone.list('User');

exports = module.exports = (done) => {
	new User.model({
		name: { first: 'admin', last: 'user' },
		email: 'edgar.marques@citi.org.br',
		password: 'watt-admin',
		canAccessKeystone: true,
	}).save(done);
};