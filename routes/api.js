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

exports.users = function (req, res) {
    res.json(
    [{
        "id": "1",
        "name":"Mitesh",
        "email": 'miteshpatekar29@gmail.com',
        "password":"mit123"
    },
    {
        "id": "2",
        "name": "Krutarth",
        "email": 'ksoni1@hawk.iit.edu',
        "password": "kit123"
    },
    ]);
};

exports.destinations = function (req, res) {
    res.json(
   {
       "Chicago":
      [
        {
            "id": "1",
            "name": "Bean Millenium Park",
            "description": "Millennium Park is a public park located in the Loop community area of Chicago in Illinois, US, and originally intended to celebrate the second millennium.",
            "address": "",
            "city": "Chicago",
            "imageurl": "/images/destinations/Chicago/MilleniumPark.jpg",
            "rating": "2"
        },
        {
            "id": "2",
            "name": "John Hancock Center",
            "description": "The John Hancock Center is a 100-story, 1,127-foot[7] (344 m) supertall skyscraper at 875 North Michigan Avenue, Chicago, Illinois, United States.",
            "address": "",
            "city": "Chicago",
            "imageurl": "/images/destinations/Chicago/John_Hancock_Center.jpg",
            "rating": "5"
        },
        {
            "id": "3",
            "name": "Navy Pier",
            "description": "Navy Pier is a 3,300-foot-long (1,010 m) pier on the Chicago shoreline of Lake Michigan. It is located in the Streeterville neighborhood of the Near North Side community area.",
            "address": "",
            "city": "Chicago",
            "imageurl": "/images/destinations/Chicago/Navy_pier.jpg",
            "rating": "3"
        },
        {
            "id": "4",
            "name": "Willis Tower",
            "description": "The Willis Tower, built and still commonly referred to as Sears Tower, is a 108-story, 1,451-foot (442 m) skyscraper in Chicago, Illinois, United States.",
            "address": "",
            "city": "Chicago",
            "imageurl": "/images/destinations/Chicago/willis_tower.jpg",
            "rating": "5"
        },
        {
            "id": "5",
            "name": "Buckingham Fountain",
            "description": "Buckingham Fountain is a Chicago landmark in the center of Grant Park. Dedicated in 1927, it is one of the largest fountains in the world.",
            "address": "",
            "city": "Chicago",
            "imageurl": "/images/destinations/Chicago/Buckingham_Fountain.JPG",
            "rating": "1"
        },
        {
            "id": "6",
            "name": "Adler Planetarium",
            "description": "The Adler Planetarium is a public museum dedicated to the study of astronomy and astrophysics. It is located on the northeast tip of Northerly Island at the shore of Lake Michigan in Chicago, Illinois.",
            "address": "",
            "city": "Chicago",
            "imageurl": "/images/destinations/Chicago/adler-planetarium.jpg",
            "rating": "5"
        }
      ],
       "New York":
      [
       {
           "id": "1",
           "name": "Statue of Liberty",
           "description": "The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States.",
           "address": "",
           "city": "New York",
           "imageurl": "/images/destinations/New York/Statue_of_Liberty.jpg",
           "rating": "3"
       },
       {
           "id": "2",
           "name": "Central Park",
           "description": "Central Park is an urban park in middle-upper Manhattan, within New York City. Central Park is the most visited urban park in the United States as well as one of the most filmed locations in the world, with 40 million visitors in 2013.",
           "address": "",
           "city": "New York",
           "imageurl": "/images/destinations/New York/Central_Park.jpg",
           "rating": "4"
       },
       {
           "id": "3",
           "name": "Times Square",
           "description": "Times Square is a major commercial intersection and neighborhood in Midtown Manhattan, New York City, at the junction of Broadway and Seventh Avenue, and stretching from West 42nd to West 47th Streets.",
           "address": "",
           "city": "New York",
           "imageurl": "/images/destinations/New York/times_square.jpg",
           "rating": "1"
       },
       {
           "id": "4",
           "name": "Brooklyn Bridge",
           "description": "The Brooklyn Bridge is a hybrid cable-stayed/suspension bridge in New York City and is one of the oldest bridges of either type in the United States. Completed in 1883, it connects the boroughs of Manhattan and Brooklyn by spanning the East River.",
           "address": "",
           "city": "New York",
           "imageurl": "/images/destinations/New York/Brooklyn_Bridge.jpg",
           "rating": "5"
       },
       {
           "id": "5",
           "name": "The Empire State Building",
           "description": "The Empire State Building is a 102-story skyscraper located in Midtown Manhattan, New York City, on Fifth Avenue between West 33rd and 34th Streets.",
           "address": "",
           "city": "New York",
           "imageurl": "/images/destinations/New York/Empire_State_Building.jpg",
           "rating": "2"
       },
       {
           "id": "6",
           "name": "Manhattan's Chinatown",
           "description": "Manhattan's Chinatown is a neighborhood in Lower Manhattan, New York City, bordering the Lower East Side to its east, Little Italy to its north, Civic Center to its south, and Tribeca to its west.",
           "address": "",
           "city": "New York",
           "imageurl": "/images/destinations/New York/manhattan-chinatown.jpg",
           "rating": "4"
       }
      ],
       "North Carolina":
      [
       {
           "id": "1",
           "name": "Carowind Fury 325",
           "description": "Fury 325 is a steel roller coaster at the Carowinds amusement park located in Charlotte, North Carolina and Fort Mill, South Carolina.",
           "address": "",
           "city": "North Carolina",
           "imageurl": "/images/destinations/North Carolina/Carowinds-coaster.jpg",
           "rating": "4"
       },
       {
           "id": "2",
           "name": "Dry Falls",
           "description": "Dry Falls, also known as Upper Cullasaja Falls, is a 65-foot waterfall located in the Nantahala National Forest, northwest of Highlands, North Carolina.",
           "address": "",
           "city": "North Carolina",
           "imageurl": "/images/destinations/North Carolina/dry_falls.jpg",
           "rating": "4"
       },
       {
           "id": "3",
           "name": "North Carolina Museum of Art",
           "description": "The North Carolina Museum of Art is an art museum in Raleigh, North Carolina which opened in 1956 as the first major museum collection in the country to be formed by State legislation and funding.",
           "address": "2110 Blue Ridge Rd, Raleigh, NC 27607",
           "city": "North Carolina",
           "imageurl": "/images/destinations/North Carolina/NC_museum_of_art.jpg",
           "rating": "4"
       },
       {
           "id": "4",
           "name": "Outer Beaches",
           "description": "Casa Verde is sure to provide you, your family and friends with the most memorable vacation experience yet! With its outstanding ocean views, short walk to the beach and rich exotic furnishings throughout, Casa Verde has it all.",
           "address": "57205 Eagle Pass Rd, Hatteras, NC 27943",
           "city": "North Carolina",
           "imageurl": "/images/destinations/North Carolina/outer_beaches.jpg",
           "rating": "4"
       },
       {
           "id": "5",
           "name": "PNC Arena",
           "description": "PNC Arena is an indoor arena, located in Raleigh, North Carolina. The Arena seats 19,722 for basketball, and 18,680 for ice hockey, including 66 luxury suites and 2,000 club seats.",
           "address": "1400 Edwards Mill Rd, Raleigh, NC 27607",
           "city": "North Carolina",
           "imageurl": "/images/destinations/North Carolina/pnc_arena.jpg",
           "rating": "4"
       },
       {
           "id": "6",
           "name": "Pullen Park",
           "description": "Pullen Park is a 66.33 acres public park in Raleigh, North Carolina west of downtown, adjacent to the campus of North Carolina State University, between Western Boulevard and Hillsborough Street.",
           "address": "408 Ashe Ave, Raleigh, NC 27606",
           "city": "North Carolina",
           "imageurl": "/images/destinations/North Carolina/Pullen_Park.jpg",
           "rating": "4"
       }
      ],
       "California":
      [
       {
           "id": "1",
           "name": "Disneyland",
           "description": "Disneyland Park, originally Disneyland, is the first of two theme parks built at the Disneyland Resort in Anaheim, California, opened on July 17, 1955. It is the only theme park designed and built under the direct supervision of Walt Disney.",
           "address": "1313 Disneyland Dr, Anaheim, CA 92802",
           "city": "California",
           "imageurl": "/images/destinations/California/disney_land.jpg",
           "rating": "4"
       },
       {
           "id": "2",
           "name": "Golden Gate Bridge",
           "description": "The Golden Gate Bridge is a suspension bridge spanning the Golden Gate strait, the one-mile-wide, three-mile-long channel between San Francisco Bay and the Pacific Ocean.",
           "address": "Golden Gate Bridge, California",
           "city": "California",
           "imageurl": "/images/destinations/California/GoldenGateBridge.jpg",
           "rating": "4"
       },
       {
           "id": "3",
           "name": "Hollywood Sign",
           "description": "The Hollywood Sign is a landmark and American cultural icon located in Los Angeles, California. It is situated on Mount Lee, in the Hollywood Hills area of the Santa Monica Mountains. The sign overlooks Hollywood, Los Angeles.",
           "address": "Los Angeles, CA",
           "city": "California",
           "imageurl": "/images/destinations/California/hollywood_sign.jpg",
           "rating": "4"
       },
       {
           "id": "4",
           "name": "Knott's Berry Farm",
           "description": "Knott's Berry Farm is a 160-acre amusement park in Buena Park, California, owned by Cedar Fair. The 2014 Global Attractions Attendance Report states Knott's Berry Farm is the 13th most visited theme park in North America.",
           "address": "8039 Beach Blvd, Buena Park, CA 90620",
           "city": "California",
           "imageurl": "/images/destinations/California/knotts_berry_farm.jpg",
           "rating": "4"
       },
       {
           "id": "5",
           "name": "Union Square",
           "description": "Union Square is a 2.6-acre public plaza bordered by Geary, Powell, Post and Stockton Streets in downtown San Francisco, California.",
           "address": "333 Post St, San Francisco, CA 94108",
           "city": "California",
           "imageurl": "/images/destinations/California/Union_square-SF.jpg",
           "rating": "4"
       },
       {
           "id": "6",
           "name": "Universal Studios Hollywood",
           "description": "Sprawling amusement park with a cinema theme, featuring rides, restaurants, shops & shows.",
           "address": "100 Universal City Plaza, Universal City, CA 91608",
           "city": "California",
           "imageurl": "/images/destinations/California/Universal_studio.jpg",
           "rating": "4"
       }
      ],
       "Florida":
      [
       {
           "id": "1",
           "name": "Statue of Liberty",
           "description": "The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States.",
           "address": "",
           "city": "Florida",
           "imageurl": "/images/destinations/Florida/Statue_of_Liberty.jpg",
           "rating": "4"
       },
       {
           "id": "2",
           "name": "Central Park",
           "description": "Central Park is an urban park in middle-upper Manhattan, within New York City. Central Park is the most visited urban park in the United States as well as one of the most filmed locations in the world, with 40 million visitors in 2013.",
           "address": "",
           "city": "Florida",
           "imageurl": "/images/destinations/Florida/Central_Park.jpg",
           "rating": "4"
       },
       {
           "id": "3",
           "name": "Times Square",
           "description": "Times Square is a major commercial intersection and neighborhood in Midtown Manhattan, New York City, at the junction of Broadway and Seventh Avenue, and stretching from West 42nd to West 47th Streets.",
           "address": "",
           "city": "Florida",
           "imageurl": "/images/destinations/Florida/times_square.jpg",
           "rating": "4"
       },
       {
           "id": "4",
           "name": "Brooklyn Bridge",
           "description": "The Brooklyn Bridge is a hybrid cable-stayed/suspension bridge in New York City and is one of the oldest bridges of either type in the United States. Completed in 1883, it connects the boroughs of Manhattan and Brooklyn by spanning the East River.",
           "address": "",
           "city": "Florida",
           "imageurl": "/images/destinations/Florida/Brooklyn_Bridge.jpg",
           "rating": "4"
       },
       {
           "id": "5",
           "name": "The Empire State Building",
           "description": "The Empire State Building is a 102-story skyscraper located in Midtown Manhattan, New York City, on Fifth Avenue between West 33rd and 34th Streets.",
           "address": "",
           "city": "Florida",
           "imageurl": "/images/destinations/Florida/Empire_State_Building.jpg",
           "rating": "4"
       },
       {
           "id": "6",
           "name": "Manhattan's Chinatown",
           "description": "Manhattan's Chinatown is a neighborhood in Lower Manhattan, New York City, bordering the Lower East Side to its east, Little Italy to its north, Civic Center to its south, and Tribeca to its west.",
           "address": "",
           "city": "Florida",
           "imageurl": "/images/destinations/Florida/manhattan-chinatown.jpg",
           "rating": "4"
       }
      ]
   }

   );
};

exports.hotels = function (req, res) {
    res.json(
     {
         "Chicago":
        [{
            "id": "1",
            "name": "Congress",
            "description": "Overlooking Grant Park, this landmark Downtown hotel and convention center was built in 1893 and is a 7-minute walk from the Art Institute of Chicago.",
            "address": "520 S Michigan Ave, Chicago, IL 60605",
            "city": "Chicago",
            "website": "http://www.congressplazahotel.com/",
            "imageurl": "/images/hotels/Chicago/congress.jpg",
            "rating": "4"
        },
          {
              "id": "2",
              "name": "Double Tree",
              "description": "A block from the prestigious Magnificent Mile shopping district, this upscale hotel on downtown's Near North Side is 3 blocks from Lake Michigan's Navy Pier and an 8-minute walk from a CTA ",
              "address": "300 E Ohio St, Chicago, IL 60611",
              "city": "Chicago",
              "website": "https://secure3.hilton.com/en_US/dt/reservation/book.htm?execution=e1s1",
              "imageurl": "/images/hotels/Chicago/double_tree.jpg",
              "rating": "2"
          },
          {
              "id": "3",
              "name": "Hotel Chicago",
              "description": "The newly renovated Hotel Chicago Downtown, Autograph Collection will delight the most discerning traveler, with its picture-perfect location and luxury accommodations.",
              "address": "333 N. DEARBORN, Chicago, IL",
              "city": "Chicago",
              "website": "http://www.thehotelchicago.com/",
              "imageurl": "/images/hotels/Chicago/hotel_chicago.jpg",
              "rating": "5"
          },
          {
              "id": "4",
              "name": "Millennium Knickerbocker Hotel",
              "description": "Set a block from upscale shopping along the Magnificent Mile, this upscale hotel is housed in a historic 1927 building that's a 6-minute walk from the Museum Of Contemporary Art Chicago.",
              "address": "163 E Walton Pl, Chicago, IL 60611",
              "city": "Chicago",
              "website": "https://www.millenniumhotels.com",
              "imageurl": "/images/hotels/Chicago/knickerbocker_millennium.jpg",
              "rating": "5"
          },
          {
              "id": "5",
              "name": "Marriot",
              "description": "Modern high-rise property offering stylish lodging, a futuristic lobby bar & farm-to-table dining.",
              "address": "540 N Michigan Ave, Chicago, IL 60611",
              "city": "Chicago",
              "website": "www.marriott.com",
              "imageurl": "/images/hotels/Chicago/marriot.jpg",
              "rating": "3"
          },
          {
              "id": "6",
              "name": "Sheraton Grand Chicago",
              "description": "Set on the riverside in downtown Chicago, this upscale, high-rise hotel is within 15 minutes' walk of Millenium Park, Navy Pier, Grand Red subway station.",
              "address": "301 E North Water St, Chicago, IL 60611",
              "city": "Chicago",
              "website": "http://www.starwoodhotels.com/",
              "imageurl": "/images/hotels/Chicago/sheraton.jpg",
              "rating": "3"
          }
        ],
         "New York":
        [{
            "id": "1",
            "name": "Hilton Garden",
            "description": "Modern hotel near Herald Square, featuring a stylish lobby bar & a fitness center.f",
            "address": "63 W 35th St, New York, NY 10001",
            "city": "New York",
            "website": "http://hiltongardeninn3.hilton.com/",
            "imageurl": "/images/hotels/New York/hilton_garden.jpg",
            "rating": "4"
        },
          {
              "id": "2",
              "name": "Jolly Madison Towers",
              "description": "Set 4 blocks south of Grand Central Station, this European-inspired hotel is a 6-minute walk from Bryant Park and a 4-minute drive from the Museum of Modern Art.",
              "address": "22 E 38th St, New York, NY 10016",
              "city": "New York",
              "website": "http://www.jollymadison.com/",
              "imageurl": "/images/hotels/New York/Jolly_Madison_Towers.jpg",
              "rating": "2"
          },
          {
              "id": "3",
              "name": "Marriott Marquis",
              "description": "Relaxed rooms in a high-rise, modern hotel offering a revolving restaurant & fitness facilities.",
              "address": "1535 Broadway, New York, NY 10036",
              "city": "New York",
              "website": "http://www.marriott.com/",
              "imageurl": "/images/hotels/New York/marriot_marquis.jpg",
              "rating": "5"
          },
          {
              "id": "4",
              "name": "New Yorker A Wyndham Hotel",
              "description": "Built in 1929, this stylish Jazz Age hotel is 1 mile from both the Empire State Building and the High Line.",
              "address": "481 8th Ave, New York, NY 10001",
              "city": "New York",
              "website": "http://www.wyndham.com/",
              "imageurl": "/images/hotels/New York/new_yorker.jpg",
              "rating": "4"
          },
          {
              "id": "5",
              "name": "Hotel Row",
              "description": "The Row NYC hotel has pioneered a new era of individuality among Times Square hotels by meeting NYC's signature urban grit with grandeur.",
              "address": "200B W 44th St, New York, NY 10036",
              "city": "New York",
              "website": "http://www.rownyc.com/",
              "imageurl": "/images/hotels/New York/row-nyc.jpg",
              "rating": "3"
          }
        ],
         "Florida":
         [{
             "id": "1",
             "name": "Cabana Bay Beach Resort",
             "description": "This 1950s-themed resort hotel is 0.4 miles from The Wizarding World of Harry Potter, 0.7 miles from Universal CityWalk and 1.3 miles from Universal Studios Florida.",
             "address": "6550 Adventure Way, Orlando, FL 32819",
             "city": "Orlando",
             "website": "https://www.universalorlando.com",
             "imageurl": "/images/hotels/Florida/cabana-bay-beach-resort.jpg",
             "rating": "5"
         },
           {
               "id": "2",
               "name": "Fontainebleau Miami Beach",
               "description": "This luxe property with buzzing nightlife on Miami Beach, designed in the 1950s by architect Morris Lapidus, is 1.5 miles from Interstate 195, which travels from the Airport Expressway",
               "address": "4441 Collins Ave, Miami Beach, FL 33140",
               "city": "Miami Beach",
               "website": "https://fontainebleau.com/",
               "imageurl": "/images/hotels/Florida/fontainebleau_miami.jpg",
               "rating": "4"
           },
           {
               "id": "3",
               "name": "Hyatt Key West Resort and Spa",
               "description": "Overlooking the Gulf of Mexico, this waterfront resort hotel is a 5-minute walk from Mallory Square and 1.2 miles from the Southernmost Point Buoy.",
               "address": "601 Front St, Key West, FL 33040",
               "city": "Key West",
               "website": "http://keywest.hyatt.com/",
               "imageurl": "/images/hotels/Florida/hyatt-key-west-resort.jpg",
               "rating": "4"
           },
           {
               "id": "4",
               "name": "Resort Panama City Beach",
               "description": "Contemporary resort offering rooms with balconies, microwaves & free WiFi plus an outdoor pool.",
               "address": "11127 Front Beach Rd, Panama City Beach, FL 32407",
               "city": "Panama City Beach",
               "website": "http://www.hipcbeach.com/",
               "imageurl": "/images/hotels/Florida/resort-in-panama-city-beach.jpg",
               "rating": "3"
           },
           {
               "id": "5",
               "name": "Southernmost Beach Resort ",
               "description": "This seaside, colonial-style hotel is a block from Duval Street's boutiques and eateries,",
               "address": "508 South St, Key West, FL 33040",
               "city": "Key West",
               "website": "http://www.southernmostbeachresort.com/",
               "imageurl": "/images/hotels/Florida/Southernmost-Beach-Resort-Hotel.jpg",
               "rating": "4"
           },
           {
               "id": "6",
               "name": "Thompson Miami Beach",
               "description": "Overlooking the Atlantic Ocean, this beachfront hotel is set in a 1940s art deco skyscraper.",
               "address": "4041 Collins Ave, Miami Beach, FL 33140",
               "city": "Miami Beach",
               "website": "http://www.thompsonhotels.com/hotels/thompson-miami-beach",
               "imageurl": "/images/hotels/Florida/thompson-miami-beach.jpg",
               "rating": "5"
           }
         ],
         "California":
         [{
             "id": "1",
             "name": "Disneyland Resort",
             "description": "Well-known resort featuring theme parks, shows & costumed characters, plus dining, shops & hotels.",
             "address": "1313 Disneyland Dr, Anaheim, CA 92802",
             "city": "Anaheim",
             "website": "https://disneyland.disney.go.com",
             "imageurl": "/images/hotels/California/disneyland.jpg",
             "rating": "4"
         },
           {
               "id": "2",
               "name": "Fairmont Grand Del Mar",
               "description": "Set within Los Penasquitos Canyon Preserve, this luxe Mediterranean-inspired resort hotel is 5.3 miles from Torrey Pines State Beach.",
               "address": "5300 Grand Del Mar Ct, San Diego, CA 92130",
               "city": "San Diego",
               "website": "http://www.fairmont.com/san-diego/fairmont_grant_del_mar.jpg",
               "imageurl": "/images/hotels/California/",
               "rating": "5"
           },
           {
               "id": "3",
               "name": "Legoland hotel",
               "description": "The 3-story, 250-room LEGOLAND Hotel in California creates a world designed to bring imaginations to life.",
               "address": "5885 The Crossings Dr, Carlsbad, CA 92008",
               "city": "Carlsbad",
               "website": "http://www.legoland.com/",
               "imageurl": "/images/hotels/California/legoland-california-hotel.jpg",
               "rating": "3"
           },
           {
               "id": "4",
               "name": "Monterey Plaza Hotel",
               "description": "Overlooking Monterey Bay, this sophisticated hotel is a block from Cannery Row and a 10-minute walk from the Monterey Bay Aquarium.",
               "address": "400 Cannery Row, Monterey, CA 93940",
               "city": "Monterey",
               "website": "http://montereyplazahotel.com/",
               "imageurl": "/images/hotels/California/monterey-plaza-hotel.jpg",
               "rating": "3"
           },
           {
               "id": "5",
               "name": "Omni San Francisco Hotel",
               "description": "This upscale hotel, set in a historic bank building in the Financial District, is less than a mile from the Exploratorium museum and 6 miles from the Golden Gate Bridge.",
               "address": "500 California St, San Francisco, CA 94104",
               "city": "San Francisco",
               "website": "https://www.omnihotels.com",
               "imageurl": "/images/hotels/California/omni-san-francisco-hotel.jpg",
               "rating": "4"
           },
           {
               "id": "6",
               "name": "Pacific Terrace",
               "description": "Overlooking the Pacific Beach boardwalk, this laid-back, 2-story inn is a 5-minute walk from Crystal Pier.",
               "address": "610 Diamond St, San Diego, CA 92109",
               "city": "San Diego",
               "website": "http://www.pacificterrace.com/",
               "imageurl": "/images/hotels/California/pacific-terrace-hotel.jpg",
               "rating": "5"
           }
         ],
         "North Carolina":
         [{
             "id": "1",
             "name": "Renaissance Asheville Hotel",
             "description": "A refined modern hotel offering rooms & suites with free Wi-Fi, plus local dining, a bar & a pool.",
             "address": "31 Woodfin St, Asheville, NC 28801",
             "city": "Asheville",
             "website": "http://www.renaissanceasheville.com/",
             "imageurl": "/images/hotels/North Carolina/asheville_hotel.jpg",
             "rating": "5"
         },
           {
               "id": "2",
               "name": "Hilton Charlotte Center City",
               "description": "Modern convention hotel with meeting space & an on-site restaurant & bar, plus free access to YMCA.",
               "address": "222 E 3rd St, Charlotte, NC 28202",
               "city": "Charlotte",
               "website": "http://www3.hilton.com/",
               "imageurl": "/images/hotels/North Carolina/hilton_charlotte.jpg",
               "rating": "5"
           },
           {
               "id": "3",
               "name": "Holiday Inn Fayetteville-I-95 South",
               "description": "Classic venue offering an American restaurant, indoor pool & event space, plus free WiFi.",
               "address": "1944 Cedar Creek Rd, Fayetteville, NC 28312",
               "city": "Fayetteville",
               "website": "http://www.ihg.com/",
               "imageurl": "/images/hotels/North Carolina/holiday-inn.jpg",
               "rating": "3"
           },
           {
               "id": "4",
               "name": "Homewood Suites-Charlotte N",
               "description": "Classic extended-stay hotel with fully equipped kitchens & free WiFi, plus an outdoor pool.",
               "address": "8340 N Tryon St, Charlotte, NC 28262",
               "city": "Charlotte",
               "website": "http://homewoodsuites3.hilton.com/",
               "imageurl": "/images/hotels/North Carolina/homewood_suites.jpg",
               "rating": "3"
           },
           {
               "id": "5",
               "name": "Sheraton Charlotte Hotel",
               "description": "A 12-minute walk from the Charlotte Convention Center, this modern hotel off U.S. Route 74 is also a 3.1-mile drive from the Mint Museum.",
               "address": "555 S McDowell St, Charlotte, NC 28204",
               "city": "Charlotte",
               "website": "http://www.sheratoncharlottehotel.com/",
               "imageurl": "/images/hotels/North Carolina/sheraton-charlotte.jpg",
               "rating": "4"
           },
           {
               "id": "6",
               "name": "The Westin Charlotte",
               "description": "This glass-sided, skyscraper hotel adjacent to the Charlotte Convention Center is a 9-minute walk from the NASCAR Hall of Fame. There's a LYNX Light Rail stop on-site.",
               "address": "601 S College St, Charlotte, NC 28202",
               "city": "Charlotte",
               "website": "http://www.westincharlottehotel.com/",
               "imageurl": "/images/hotels/North Carolina/westin-charolotte.jpg",
               "rating": "4"
           }
         ]
     }
   );
};