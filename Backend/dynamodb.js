const AWS = require('aws-sdk');
AWS.config.update({
region: 'us-east-2'
});
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const logActivity = (action, taskTitle) => {
const params = {
TableName: 'activity_logs',
Item: {
logId: Date.now().toString(),
action: action,
taskTitle: taskTitle,
timestamp: new Date().toISOString()
}
};
return dynamoDB.put(params).promise();
};
module.exports = { logActivity };