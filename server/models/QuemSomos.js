const keystone = require('keystone');
const Types = keystone.Field.Types;

// First we gonna create our User list
const QuemSomos = new keystone.List('QuemSomos', {
  map: { name: 'key' },
  nocreate: true,
  nodelete: true
});

// Then we gonna add the fields
QuemSomos.add({
  key: { type: Types.Text, value: 'Quem Somos', noedit: true },
  imagem: { type: Types.CloudinaryImages, initial: true, required: true },
  Texto: { type: Types.Textarea, initial: true, required: true, index: true }
});

QuemSomos.register();