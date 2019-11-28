const keystone = require('keystone');
const Types = keystone.Field.Types;

// First we gonna create our User list
const Contato = new keystone.List('Contato', {
  map: { name: 'key' },
  nocreate: true,
  nodelete: true
});

// Then we gonna add the fields
Contato.add({
  key: { type: Types.Text, value: 'Contato', noedit: true },
  media: { type: Types.Text, initial: true, required: true, index: true },
  phone: { type: Types.Text, initial: true, required: true, index: true },
  email: { type: Types.Email, initial: true, required: true, index: true },
  address: { type: Types.Text, initial: true, required: true, index: true },
  imagens: { type: Types.CloudinaryImages, initial: true, required: true }
});

Contato.register();