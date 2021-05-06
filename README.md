## Description
This project show you how to integrate an AWS Lambda along with AWS System Manager. It's based on Serverless Framework using Node JS template.

---

### Pre Requirements
- You must have an AWS account
- You must have Serverless Framework installed
- You must have IAM permission to write and read in SSM (see policy.json file in the repository)


## Steps
### 1 - Storing parameters
```bash
aws ssm put-parameter --name DB_HOST --value localhost --type String
```
```bash
aws ssm put-parameter --name DB_PORT --value 3306 --type String
```
### 2 - Creating project
```bash
sls create --template aws-nodejs --name <PROJECT-NAME>
```
### 3 - Setting serverless.yml
```yml
...
custom:
  settings:
    DB_HOST: ${ssm:DB_HOST}
    DB_PORT: ${ssm:DB_PORT}
...    
provider:
  environment: ${self:custom.settings}
...
```  
### 4 - Getting parameters
```javascript
  const myDbHost = process.env.DB_HOST
  const myDbPort = process.env.DB_PORT
```

### 5 - Deploying project
```bash
sls deploy -v
```

## Notice
All parameters defined in ```custom > setting``` section will be injected as environment variables in the settings of Lambda. 

