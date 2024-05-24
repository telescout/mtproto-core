const path = require('path');
const MTProto = require('../envs/node/index');

const api_id = 2196913;
const api_hash = '29834e23a3df516298d11671d0bce04e';

// 1. Create instance
const mtproto = new MTProto({
  api_id,
  api_hash,

  storageOptions: {
    path: path.resolve(__dirname, './data/1.json'),
  },
});

// 2. Print the user country code
mtproto.call('help.getNearestDc').then(result => {
  console.log('country:', result.country);
});
