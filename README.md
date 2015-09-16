# Game Settings App

A simple web app for managing game settings

[API Spec](api/README.md)
## Requirements

* [Vagrant](https://www.vagrantup.com/)

## Development
The vagrant environment has everything needed for development. After launching
vagrant, the application will be available at localhost:9000. The code is
mounted into the vagrant box allowing development to be worked on locally.

Run the following commands to start the app:
```
npm install
npm run build
vagrant up
```

## Testing
Running `npm test` will run unit and functional tests on the API and functional tests on the frontend
```
npm test
```

## Resetting the Database
The following command can be used to reset the database
```
curl -X POST localhost:9000/api/reset-database
```
