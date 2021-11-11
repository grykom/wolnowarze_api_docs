# Wolnowarze - (optional) API Documentation website

# [Live demo](https://wolnowarze.grykom.pl/)
# [API demo](https://api.wolnowarze.grykom.pl/)

## Wolnowarze project 
#### [_] [Frontend React.js](https://github.com/grykom/wolnowarze_frontend)
#### [_] [Backend Django-Python](https://github.com/grykom/wolnowarze_backend)
#### [x] [Backend API docs React.js (optional)](https://github.com/grykom/wolnowarze_api_docs)


## About

Simple React app with optional API documentation for Wolnowarze project.

## How to
- change yours [API backend](https://github.com/grykom/wolnowarze_backend) url on components/Api.js file
```
const API_URL = "http://localhost:8000/"
```

- compile files
```
npm run build
```

- then copy ```index.html``` to ```backend_url/api/templates/api/``` and rest files (logo, maniest, css) to ```backend_url/public/```
