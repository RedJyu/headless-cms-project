import { createClient } from 'contentful';

const client = createClient({
  space: '1okby48arebf',
  environment: 'master',
  accessToken: '8rijIQoTwCR4xBp0RjM5DL2iQC064tuhH_0mkYZZXcQ',
});

client
  .getEntries({ content_type: 'firstProject' })
  .then((response) => console.log(response));
