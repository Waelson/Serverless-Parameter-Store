## Description
This project show you how to integrate an AWS Lambda along with AWS System Manager. It is based on Serverless Framework using Node JS template.

---

### Pre Requirements
- You must have a AWS account
- You must have Serverless Framework installed in your computer
- You must have permission to write and read in SSM (see policy.json in the repository)


## Steps
### 1 - Storing parameters
```bash
aws ssm put-parameter --name DB_HOST --value localhost --type String
```
```bash
aws ssm put-parameter --name DB_PORT --value 3306 --type String
```

### 2 - Setting serverless.yml
```bash
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
### 3 - Getting parameters
```bash
  var myDbHost = process.env.DB_HOST
  var myDbPort = process.env.DB_PORT
```

### 4 - Deploying project
```bash
sls deploy -v
```

## Notice
All parameters defined in ```custom > setting``` section will be injected as environment variables in the settings of Lambda. 

