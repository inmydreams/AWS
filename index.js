var AWS = require('aws-sdk');
var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
exports.handler = function(event, context) {
    var lentele = "studentai";
    var id=event.id;
    var vardas=event.vardas;
    var pazymys=event.pazymys;
    dynamodb.putItem({
        "TableName": lentele,
        "Item" : {
            "id": {"N": id},
            "vardas": {"S": vardas},
            "pazymys": {"N": pazymys},
        }
    }, function(err, data) {
        if (err) {
            context.done(err);
        } else {
            console.log(JSON.stringify(event,null,' '));
            context.succeed("Irasas iterptas sekmingai");
        }
    }); 
};