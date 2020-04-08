//Call tasks of a specific Asana project
const asana = require('asana');

const personalAccessToken = <personal token>;

let client = asana.Client.create().useAccessToken(personalAccessToken);

client.tasks.findByProject(<project id> ,{
    opt_fields: 'name, due_on' //you can add as many fields as you wish
}
).then(function(collection){
    console.log(collection.data);
})