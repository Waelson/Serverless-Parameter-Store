## Description
This is a simple project to show how to can integrate a AWS Lambda long with AWS System Manager. The project is based on Serverless Framework using NodeJS template.

---

### Pre Requirements
- You must have a AWS account
- You must have Serverless Framework installed in your computer
- You must have permission to white and read in SSM (see policy.json in the repository)


## Steps
### 1 - Create your parameters
```bash
aws ssm put-parameter --name DB_HOST --value localhost --type String
```
```bash
aws ssm put-parameter --name DB_PORT --value 3306 --type String
```

### 2 - Setting serverless.yml
```bash
custom:
  settings:
    DB_HOST: ${ssm:DB_HOST}
    DB_PORT: ${ssm:DB_PORT}
    
and
provider:
  environment: ${self:custom.settings}
  ...
```  
### Deploy you application
```bash
sls deploy -v
```
