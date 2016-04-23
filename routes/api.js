/*
 * Serve JSON to our AngularJS client
 */

exports.name = function (req, res) {
    res.json({
        name: 'Bob'
    });
};

exports.cities = function (req, res) {
    res.json(
    [{
        "id": "1",
        "name": 'Chicago'
    },
    {
        "id": "2",
        "name": 'New York'
    },
    ]);
};

exports.destinations = function (req, res) {
    res.json(
    {
        "Chicago":
       [{
            "id": "1",
            "name": 'Bean Millenium Park',
            "description": "asfgajsf",
            "address": "",
            "city":"Chicago",
            "imageurl": "/images/destinations/Chicago/MilleniumPark.jpg",
            "rating":"4"
        },
         {
             "id": "2",
             "name": 'John Hancock',
             "description": "asfgajsf",
             "address": "",
             "city": "Chicago",
             "imageurl": "/images/destinations/Chicago/John_Hancock_Center.jpg",
             "rating": "5"
         },
       ],
        "New York":
       [{
           "id": "1",
           "name": 'Brooklyn Bridge',
           "description": "asfgajsf",
           "address": "",
           "city": "New York",
           "imageurl": "/images/destinations/New York/Brooklyn_Bridge.jpg",
           "rating": "4"
       },
         {
             "id": "2",
             "name": 'Central Park',
             "description": "asfgajsf",
             "address": "",
             "city": "New York",
             "imageurl": "/images/destinations/New York/Central_Park.jpg",
             "rating": "4"
         },
       ],
    }

   );
};