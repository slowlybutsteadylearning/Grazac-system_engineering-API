

https://dev.to/slowlybutsteadylearning/authorization-in-nodejs-all-you-need-to-know-1bib

# LSRG API PROJECT
![image](https://png.pngtree.com/png-vector/20221108/ourmid/pngtree-cartoon-train-illustration-png-image_6435933.png)

LSRG is a train service provider that commutes people within Lagos State
region to any part of Lagos. The management thought of switching from the
conventional paper booking system to a digitized one without a business
downtime. You have been tasked to build the following endpoints:
Users:

1. Must be able to sign up with Phone Number, Email, First Name, Last Name,
   and Password
2. Must be able to Login with Email address and password.
3. Must be able to book a train seat
4. Must able to edit his/her booking time
5. Must able to delete (cancel) his/her booking
6. Can see all services provided by the train station (Hint: Include Reservation,
   Business or Economy)
   Admin:
7. Must be able to see all registered commuters (users)
8. Must be able to upload new reservation for commuters to book
9. Must be able to the total numbers of bookings done on the platform
   Please note that Users are also referred to as Commuters

## ENDPOINTS
https://lsgr.herokuapp.com/ :homepage

users

- `POST` https://lsgr.herokuapp.com/api/v1/signup:
- `POST` https://lsgr.herokuapp.com/api/v1/login
- `POST` https://lsgr.herokuapp.com/api/v1/booking
- `PUT` https://lsgr.herokuapp.com/api/v1/update/:id
- `DELETE` https://lsgr.herokuapp.com/api/v1/delete/:id
- `GET` https://lsgr.herokuapp.com/api/v1/trains?

 admin
- `GET` https://lsgr.herokuapp.com/api/v1/all
- `POST` https://lsgr.herokuapp.com/api/v1/upload
- `GET` https://lsgr.herokuapp.com/api/v1/allbookings

# How to use this project

Install yarn globally on your local machine

```
npm i yarn -g
```

Also install these packages

```
yarn init -y
```

```
yarn add express mongoose dotenv bcrypt jsonwebtoken joi
```

Run this program with this command

```
yarn dev
```
Create your .env file

```
PORT=***
MONGO_URI_DEV=***
JWT_SECRET=***
JWT_EXP=***
```

### API documentation
Click the link below to view the postman documentation

https://documenter.getpostman.com/view/25486084/2s93RKzFjr
