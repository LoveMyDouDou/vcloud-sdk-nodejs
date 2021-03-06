const Client = require('../index');

const clientOptions = {
  service: 'vpaas',
  accesskey: '',
  secretkey: '',
  endpoint: 'http://open.us-east-1.bytedanceapi.com',
  version: '2019-07-20',
};

const client = new Client(clientOptions);

const requestOptions = {
  method: 'POST', // set the http method, default is GET
  version: '2019-07-20', // api version; default is service apiVersion
  body: {
    FuncName: 'copy_video',
    Qualifier: 'prod',
    InvokeType: 'async',
    User: 'aweme',
    Payload: JSON.stringify({
      input: {
        vid: 'v0200f980000bmknrqm8qbl1kj3s8mbg',
        access_key: 'xxxx',
        src_idc: 'lf',
        dest_idc: 'maliva',
      },
    }),
    Callback: 'multi_video_upload',
    CallbackArgs: {
      mission: 'MultiVideoUpload',
    },
  },
  headers: {
    'Content-Type': 'application/json',
  },
};

client
  .request('LambdaInvoke', requestOptions)
  .then(res => {
    console.log('LambdaInvoke: ', res);
  })
  .catch(e => {
    console.error(e);
  });
