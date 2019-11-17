const keystone = require('keystone');
const Types = keystone.Field.Types;

// First we gonna create our User list
var Contato = new keystone.List('Contato', {
  nocreate: true,
  nodelete: true
});

// Then we gonna add the fields 
Contato.add({
  media: { type: Types.Text, initial: true, required: true, index: true },
  phone: { type: Types.Text, initial: true, required: true, index: true },
  email: { type: Types.Email, initial: true, required: true, index: true },
  address: { type: Types.Text, initial: true, required: true, index: true },
  imagens: { type: Types.CloudinaryImages, initial: true, required: true }
});

Contato.register();