## Description
This iS project to show YOU how to can integrate a AWS Lambda long with AWS System Manager. It is based on Serverless Framework using NodeJS template.

---

### Pre Requirements
- You must have a AWS account
- You must have Serverless Framework installed in your computer
- You must have permission to write and read in SSM (see policy.json in the repository)


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
### 3 - Deploy your code
```bash
sls deploy -v
```

## Important
All parameters defined in custom>setting section will be injected like environment variable in the settings of Lambda. Therefore, you be able to access the environment variable com NodeJS using ```bash process.env.YOUR_VARIABLE```.

Good luck!!!
