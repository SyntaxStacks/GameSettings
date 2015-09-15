# Game Settings App

A simple web app for managing game Settings

[API Spec](api/README.md)
## Requirements

* Vagrant

## Development
The vagrant environment has everything needed for development. After launching
vagrant, the application will be available at localhost:9000. The code is
mounted into the vagrant box allowing development to be worked on locally.
```
npm install
npm run build
vagrant up
```

## Testing
```
npm test
```

## Resetting the Database
The following command can be used to reset the database
```
curl -X POST localhost:9000/api/reset-database
```