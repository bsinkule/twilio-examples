// Twilio Credentials
const accountSid = 'ACa271adccb9f5b93189feedf190c38d16';
const authToken = 'f371cc9013b48a69b78ac05f046831f2';

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);
const date = new Date()
client.messages.create(
  {
    to: '+12092104311',
    from: '+17205945957',
    body: `Greetings! The current time is: ${date} KA2ATU463PWJJAC`,
  },
  (err, message) => {
    console.log(message.sid);
  }
);
