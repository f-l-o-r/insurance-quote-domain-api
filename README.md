# insurance-quote-domain-api

## How to run
To execute it locally you have to use this command, take in mind it is using nodemon so every update doesn't need to restart
```
npm start
```

# Data Base connection

## Import data to DB

This projects is using mongo data base cloud, but you can change it to local or another database, you only have to change CONNECTION_URL on src/api.js
There are some default values that the front-end app would need like products and options, for this escenario this api have couple endpoints to add and get them. you can review /src/routers/insuranceRouters.js and src/data/productContent.js

```
POST https://localhost:8080/insurance/products
```
```
    {
        "tittle": "Car",
        "type": "car",
        "url": "car",
        "status":"Ready",
        "image":"car.png",
        "description":"Get a personalized quote for your car"

    }
```
```
POST https://localhost:8080/insurance/options
```
```
    {
        "tittle": "State Minimum",
        "optionType":"stateMinimun",
        "base": 15000,
        "coverPercentage": 30,
        "coverage": [
            {
                "tittle": "Policy Coverage",
                "coverageType": "policy",
                "details" : [
                    {
                        "description": "Bodily injury (BI)",
                        "price": "$15K / $30K"
                    },
                    {
                        "description": "Property damage (PD)",
                        "price": "$5K"
                    },
                    {
                        "description": "Personal injury protection (PIP",
                        "price": "None"
                    }
                ]
            },
            {
                "tittle": "Coverage Vehicle",
                "type": "vehicle",
                "details" :[
                    {
                        "description": "Collision (deductible)",
                        "price": "None"
                    },
                    {
                        "description": "Comprehensive (deductible)",
                        "price": "none"
                    }
                ]

            }
        ]
    }
```

```
GET https://localhost:8080/insurance/products
GET https://localhost:8080/insurance/options
```

I suggest to insert all data that are in src/data/productContent.js for more options.

## DB Schema

###Insurance quote
```
const Vehicle = {
    vehicleType: String,
    brand: String,
    model: String,
    year: String,
    cost: Number,
    state: String
};

const InsuranceOption = {
    optionType: String,
    tittle: String,
    coverPercentage: Number,
    quotePerMonth: Number,
    base: String
};

const InsuranceQuoteSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    birthday: String,
    vehicle: [Vehicle],
    hasAccident: String,
    address: String,
    gender: String,
    maritalStatus: String,
    insuranceOption: InsuranceOption
});
```

### Product
```
const InsuranceProductsSchema = mongoose.Schema({
    tittle: String,
    type: String,
    url: String,
    status: String,
    image: String,
    description:String

})
```

### Options
```
const  Details = {
        description: String,
        price: String
}
const  Coverage = {
        tittle: String,
        coverageType: String,
        details : [Details]
}
const InsuranceOptionSchema = mongoose.Schema({
        tittle: String,
        optionType: String,
        coverPercentage: Number,
        base: Number,
        coverage: [Coverage]
})
```

