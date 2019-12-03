const keystone = require('keystone');
const Types = keystone.Field.Types;

// First we gonna create our User list
const Servicos = new keystone.List('Servicos', {
  map: { name: 'Título' }
});

// Then we gonna add the fields
Servicos.add({
  Título: { type: Types.Text, required: true, index: true, initial: true },
  Descrição: { type: Types.Textarea, initial: true, required: true, index: true },
  imagens: { type: Types.CloudinaryImages, initial: true, required: true }
});

Servicos.register();