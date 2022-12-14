# Steps to start the Employee Management Application

## With Docker
1. `docker-compose build`
2. `docker-compose up`

## Without Docker
1. Setup MongoDB database
	1. Install and run Mongodb
	2. Import employees data into "spring22-ems" database
		- `mongoimport --uri="<connection URI>/spring22-ems" --drop server/spring22-ems_DBDUMP/employees.json`
2. Run GraphQL server 
	1. `cd server`
	2. Create .env file and enter following values
		- ```
			DB_CONN_STRING="<connection URI>"
			DB_NAME="spring22-ems"
			EMPLOYEES_COLLECTION_NAME="employees"
			PORT=3000
			```
	3. `npm i`
	4. `npm run build`
	5. `node dist/index.js`
3. Run developement server
	1. `cd client`
	2. Create .env file with following environment variables
		- ```
			VITE_GRAPHQL_URL="<graphql server url>"
			```
	3. `npm i`
	4. `npm run build`
	5. `npm run preview`
4. Open browser and go to the url in command line

## Additional Info

- React SPA code is under client/src
- Express server code is under server/src

