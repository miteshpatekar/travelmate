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
            "name": 'Millenium Park'
        },
         {
             "id": "2",
             "name": 'Sky Deck'
         },
       ],
        "New York":
       [{
           "id": "1",
           "name": 'new Park'
       },
         {
             "id": "2",
             "name": 'Sky Deck'
         },
       ],
    }

   );
};