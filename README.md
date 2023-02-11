# Keep Notes

Keep Notes is Django + React App.


### Run Django Server

To run django server on local host first we need to create virtualenviroment and then install all required packages to run django server. Follow the steps as mentioned below. 

#### 1. Setup virtual enviroment
copy-paste all commands in terminal

```
cd server
pip install virtualenv
virtualenv env
env\Scripts\activate
pip install -r requirements.txt
```

#### 2. Run Server

```
python manage.py runserver
```

your django development server should now be running at http://127.0.0.1:8000/


### Start React app 

Now once your django sever is live, open new terminal in same project (Keep-Notes) and follow the steps mention below

#### 1. Install node packages
```
cd client
npm install
```

#### 2. Run React Development Server
```
npm start
```

Now your react app is running at http://localhost:3000/

<br>

#### If you like this repository please give it a star ⭐.
