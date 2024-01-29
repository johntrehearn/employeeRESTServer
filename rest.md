# Rest server

## Methods

- GET
- POST
- PUT
- DELETE

(Used / important if you are creating your REST server from scratch. Express does not need these as such)
- OPTION
- HEAD
- PATCH
- TRACE
- CONNECT

## RESOURCE

for example all computers:

http: //localhost:4000/rest/computers

resoures name is computers (it is plural as that is what we use in the code)
'
http: //localhost:4000/rest/computers/1

for example computer number 1:
 
to GET all computers

GET /rest/computers

returns all computers as a json array (or some other format)

http: //localhost:4000/rest/computers/?

to GET one computer (number 1 for example)

GET /rest/computers/1 - WE WILL USE THIS ONE (SIMPLE ONE)
GET /rest/computers/?id=1
GET /rest/computers/id/1

returns an json object

```json

{"id":1,
"name": "Cera 2400"
}
``````

To remove computer number one

DELETE /rest/computers/1

NB THE ROUTE DO NOT CHANGE BUT THE METHOD CHANGES 

WITH POST AND PUT A BODY IS ALSO NEEDED TO BE SENT WITH THE REQUEST.

To add a new computer

POST /rest/computers

the data to be posted is in requests body

To update or add

PUT /rest/computers/1

the data to be posted MUST be in body.

If the computer with given number doesn't exist, it will be added.
If exists then it is updated.

# Broswer side javascript and fetch

Let's assume `cors` situation:

# GET

```js
const option={
    method:'GET',
    mode: 'cors'
}
````

We use these from async function.

const serverPath='http://localhost:4000/rest/computers';

const data=await fetch(`${serverPath}/1`, option);
const compNumber1=await data.json();


## DELETE

```js
const option={
    method:'DELETE',
    mode:'cors',
}



    const data=await fetch(`${serverPath}/1`,{mode: 'cors'}); // GET is the default
    const compNumber1=await data.json();

## POST and PUT
const option={
    method:'POST',
    mode:'cors',
    headers:{'Content-Type':'application/json'},
}

```

```js
const New Comp={
    "id":1,
    "name":"Cera 2400"
}

```


```js
const option={
    method:'POST',
    mode:'cors',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify(newComp)
}

```

const data=await fetch (`${serverPath}/10`, options)

const data = await fetch(serverPath, option);