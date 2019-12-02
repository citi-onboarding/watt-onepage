const keystone = require('keystone');
const Types = keystone.Field.Types;

// First we gonna create our User list
const Banner = new keystone.List('Banner', {
  map: { name: 'key' },
  nocreate: true,
  nodelete: true
});

// Then we gonna add the fields
Banner.add({
  key: { type: Types.Text, value: 'Banner', noedit: true },
  imagens: { type: Types.CloudinaryImages, initial: true, required: true }
});

Banner.register();