from flask import Flask
from flask_dynamo import Dynamo
import boto3

dynamodb = boto3.resource('dynamodb')

table = dynamodb.TableName('sellers')


app = Flask(__name__)
app.config['DYNAMO_TABLES'] = [
    {
         TableName='users',
         KeySchema=[dict(AttributeName='username', KeyType='HASH')],
         AttributeDefinitions=[dict(AttributeName='username', AttributeType='S')],
         ProvisionedThroughput=dict(ReadCapacityUnits=5, WriteCapacityUnits=5)
    }, {
         TableName='groups',
         KeySchema=[dict(AttributeName='name', KeyType='HASH')],
         AttributeDefinitions=[dict(AttributeName='name', AttributeType='S')],
         ProvisionedThroughput=dict(ReadCapacityUnits=5, WriteCapacityUnits=5)
    }
 ]

 dynamo = Dynamo(app)