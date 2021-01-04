# Wishlister
A simple wishlist app, made using Django, React, Bootstrap, and GraphQL.

## Set up

First clone the repository and `cd` into the `wishlister` directory
```
$ git clone https://github.com/ktzyskowski/wishlister.git
$ cd wishlister
```

Next, set up a python virtual environment to set up the backend
```
$ python -m venv venv
$ . venv/bin/activate
$ cd api/
$ pip install -r requirements.txt
$ python manage.py migrate
$ python manage.py runserver
```

In a new terminal, we have to start up the React app
```
$ cd client/
$ npm install
$ npm start
```

Ready to go!