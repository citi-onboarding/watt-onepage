const keystone = require('keystone');
const Types = keystone.Field.Types;

// First we gonna create our User list
const Banner = new keystone.List('Banner', {
  map: { name: 'key' },
  
});

// Then we gonna add the fields
Banner.add({
  imagens: { type: Types.CloudinaryImages, initial: true, required: true }
});

Banner.register();