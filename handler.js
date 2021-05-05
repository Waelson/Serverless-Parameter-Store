'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        dbHost: process.env.DB_HOST,
        dbPort: process.env.DB_PORT        
      },
      null,
      2
    ),
  };
};
