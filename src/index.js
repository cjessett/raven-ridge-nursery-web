// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'us-west-2'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-west-2:f25ca374-b7ea-43c6-a030-bbf316f192d0',
});

const iotData = new AWS.IotData({
    endpoint: 'a1sja93rj6djc4.iot.us-west-2.amazonaws.com',
    region: 'us-west-2',
});

iotData.getThingShadow({ thingName: 'raven-ridge-nursery-thermometer' }, (err, data) => {
  const { state: { reported: { temp } } } = JSON.parse(data.payload);
  document.getElementById('temperature').innerText = Math.floor(temp);
  document.getElementById('units').style.display = 'inline';
});
