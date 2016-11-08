angular.module('app').service('service', function() {

  var restaurants = [
    {
      name: 'Brassas Mexican Grill',
      address: '238 W 100 S*',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?burrito',
      category: 'latin',
      xPos: "",
      yPos: "",
      inPopout: false,
      notShown: true
    },
    {
      name: 'El Gallo Giro Mexican Grill',
      address: '346 N University Ave',
      streetNS: '',
      streetEW: '',
      keyword: 'taco',
      imgUrl: 'https://source.unsplash.com/category/food/?taco',
      category: 'latin',
      xPos: 1149,
      yPos: 69,
      inPopout: false,
      notShown: false
    },
    {
      name: 'El Mexsal',
      address: '325 S 200 W*',
      streetNS: '',
      streetEW: '',
      keyword: 'mexican',
      imgUrl: 'https://source.unsplash.com/category/food/?quesadilla',
      category: 'latin',
      xPos: "",
      yPos: "",
      inPopout: false,
      notShown: true
    },
    {
      name: 'El Salvador Restaurante',
      address: '332 W Center St',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?cerveza',
      category: 'latin',
      xPos: 350,
      yPos: 794,
      inPopout: false,
      notShown: false
    },
    {
      name: 'El Tropical',
      address: '54 N 400 W',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?rice',
      category: 'latin',
      xPos: 257,
      yPos: 730,
      inPopout: false,
      notShown: false
    },
    {
      name: 'Joe Vera\'s Mexican Fiestaurant',
      address: '250 W Center St #100',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?mexican',
      category: 'latin',
      xPos: 546,
      yPos: 794,
      inPopout: false,
      notShown: false
    },
    {
      name: 'Los Hermanos Mexican Restaurant',
      address: '71 E Center St',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?burrito',
      category: 'latin',
      xPos: 755,
      yPos: 269,
      inPopout: true,
      notShown: false
    },
    {
      name: 'Marisco\'s los Chinchorros',
      address: '610 W Center St*',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?lime',
      category: 'latin',
      xPos: "",
      yPos: "",
      inPopout: false,
      notShown: true
    },
    {
      name: 'Se Llama Peru',
      address: '368 W Center St',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?queso',
      category: 'latin',
      xPos: 290,
      yPos: 794,
      inPopout: false,
      notShown: false
    },
    {
      name: 'Taco Paraiso',
      address: '279 E 300 St*',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?taco',
      category: 'latin',
      xPos: "",
      yPos: "",
      inPopout: false,
      notShown: true
    },
    {
      name: 'Taqueria El Vaquero',
      address: '286 N 100 W',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?mexican',
      category: 'latin',
      xPos: 928,
      yPos: 289,
      inPopout: false,
      notShown: false
    },
    {
      name: 'Bombay House',
      address: '463 N University Ave*',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?asian',
      category: 'asian',
      xPos: "",
      yPos: "",
      inPopout: false,
      notShown: true
    },
    {
      name: 'China Garden',
      address: '225 W Center St',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?rice',
      category: 'asian',
      xPos: 567,
      yPos: 894,
      inPopout: false,
      notShown: false
    },
    {
      name: 'Demae',
      address: '82 W Center St',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?fish',
      category: 'asian',
      xPos: 88,
      yPos: 269,
      inPopout: true,
      notShown: false
    },
    {
      name: 'Four Seasons Hot Pot and Dumplings',
      address: '236 N University Ave',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?asian',
      category: 'asian',
      xPos: 1148,
      yPos: 292,
      inPopout: false,
      notShown: false
    },
    {
      name: 'India Palace',
      address: '98 W Center St',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?rice',
      category: 'asian',
      xPos: 0,
      yPos: 269,
      inPopout: true,
      notShown: false
    },
    {
      name: 'Lotus Garden',
      address: '56 W Center St',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?fish',
      category: 'asian',
      xPos: 176,
      yPos: 269,
      inPopout: true,
      notShown: false
    },
    {
      name: 'Noodle King',
      address: '163 N University Ave',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?asian',
      category: 'asian',
      xPos: 1056,
      yPos: 435,
      inPopout: false,
      notShown: false
    },
    {
      name: 'Osaka',
      address: '46 W Center St',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?rice',
      category: 'asian',
      xPos: 198,
      yPos: 231,
      inPopout: true,
      notShown: false
    },
    {
      name: 'PhoPlus',
      address: '68 W Center St',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?fish',
      category: 'asian',
      xPos: 132,
      yPos: 269,
      inPopout: true,
      notShown: false
    },
    {
      name: 'Rice King',
      address: '278 W Center St',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?asian',
      category: 'asian',
      xPos: 479,
      yPos: 794,
      inPopout: false,
      notShown: false
    },
    {
      name: 'Sushi Burrito',
      address: '283 E 300 S*',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?rice',
      category: 'asian',
      xPos: "",
      yPos: "",
      inPopout: false,
      notShown: true
    },
    {
      name: 'Thai Kitchen',
      address: '283 E 300 S*',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?fish',
      category: 'asian',
      xPos: "",
      yPos: "",
      inPopout: false,
      notShown: true
    },
    {
      name: 'Thai Village',
      address: '410 N University Ave*',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?asian',
      category: 'asian',
      xPos: "",
      yPos: "",
      inPopout: false,
      notShown: true
    },
    {
      name: 'Wild Ginger',
      address: '366 N University Ave',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?rice',
      category: 'asian',
      xPos: 1149,
      yPos: 0,
      inPopout: false,
      notShown: false
    },
    {
      name: 'Saigon Cafe',
      address: '440 W 300 S*',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?fish',
      category: 'asian',
      xPos: "",
      yPos: "",
      inPopout: false,
      notShown: true
    },
    {
      name: 'Black Sheep Cafe',
      address: '19 N University Ave',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?hamburger',
      category: 'grill',
      xPos: 338,
      yPos: 149,
      inPopout: true,
      notShown: false
    },
    {
      name: 'Communal',
      address: '102 N University Ave',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?pasta',
      category: 'grill',
      xPos: 1166,
      yPos: 564,
      inPopout: false,
      notShown: false
    },
    {
      name: 'Gloria\'s Little Italy',
      address: '1 E Center St',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?sandwich',
      category: 'grill',
      xPos: 491,
      yPos: 269,
      inPopout: true,
      notShown: false
    },
    {
      name: 'Good Thyme Eatery',
      address: '63 E Center St',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?fries',
      category: 'grill',
      xPos: 659,
      yPos: 269,
      inPopout: true,
      notShown: false
    },
    {
      name: 'La Dolce Vita Ristorante',
      address: '61 N 100 E St',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?cheesburger',
      category: 'grill',
      xPos: 1286,
      yPos: 730,
      inPopout: false,
      notShown: false
    },
    {
      name: 'Nate\'s Diner',
      address: '170 W 300 S',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?beer',
      category: 'grill',
      xPos: "",
      yPos: "",
      inPopout: false,
      notShown: true
    },
    {
      name: 'Oregano Italian Kitchen',
      address: '155 N University Ave',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?pasta',
      category: 'grill',
      xPos: 1057,
      yPos: 485,
      inPopout: false,
      notShown: false
    },
    {
      name: 'Rocky Mountain Drive-In',
      address: '43 S 500 W',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?hamburger',
      category: 'grill',
      xPos: 31,
      yPos: 931,
      inPopout: false,
      notShown: false
    },
    {
      name: 'Zeek\'s Pie Shake Parlour',
      address: '27 N 100 W',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?milkshake',
      category: 'grill',
      xPos: 833,
      yPos: 734,
      inPopout: false,
      notShown: false
    },
    {
      name: 'Slate',
      address: '101 W 100 N',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?beer',
      category: 'grill',
      xPos: 804,
      yPos: 666,
      inPopout: false,
      notShown: false
    },
    {
      name: 'Station 22 Cafe',
      address: '22 W Center St',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?milkshake',
      category: 'grill',
      xPos: 264,
      yPos: 269,
      inPopout: true,
      notShown: false
    },
    {
      name: 'Tommy\'s Burgers',
      address: '405 W 100 N',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?fries',
      category: 'grill',
      xPos: 134,
      yPos: 663,
      inPopout: false,
      notShown: false
    },
    {
      name: 'Two Jacks\'s Pizza',
      address: '80 W Center St',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?sandwich',
      category: 'grill',
      xPos: 110,
      yPos: 231,
      inPopout: true,
      notShown: false
    },
    {
      name: 'Tenney\'s Pizza',
      address: '672 N Freedom Blvd*',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?beer',
      category: 'grill',
      xPos: "",
      yPos: "",
      inPopout: false,
      notShown: true
    },
    {
      name: 'Bruges Waffles & Frites',
      address: '42 W Center St',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?waffle',
      category: 'cafe',
      xPos: 220,
      yPos: 269,
      inPopout: true,
      notShown: false
    },
    {
      name: 'Cafe 300',
      address: '465 S University Ave*',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?coffee',
      category: 'cafe',
      xPos: "",
      yPos: "",
      inPopout: false,
      notShown: true
    },
    {
      name: 'Center Street Cafe',
      address: '220 W Center St',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?sandwich',
      category: 'cafe',
      xPos: 612,
      yPos: 794,
      inPopout: false,
      notShown: false
    },
    {
      name: 'Guru\'s Cafe',
      address: '45 E Center St',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?coffee',
      category: 'cafe',
      xPos: 600,
      yPos: 269,
      inPopout: true,
      notShown: false
    },
    {
      name: 'Hruska\'s Kolaches',
      address: '434 W Center St',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?milkshake',
      category: 'cafe',
      xPos: 129,
      yPos: 794,
      inPopout: false,
      notShown: false
    },
    {
      name: 'Red Deli',
      address: '288 N 100 W',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?meat',
      category: 'cafe',
      xPos: 929,
      yPos: 223,
      inPopout: false,
      notShown: false
    },
    {
      name: 'Rocco\'s Deli & Tacos',
      address: '18 N University Ave',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?taco',
      category: 'cafe',
      xPos: 490,
      yPos: 171,
      inPopout: true,
      notShown: false
    },
    {
      name: 'Sensuous Sandwich',
      address: '163 W Center St',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?sandwich',
      category: 'cafe',
      xPos: 748,
      yPos: 894,
      inPopout: false,
      notShown: false
    },
    {
      name: 'The Spoon',
      address: '75 W Center St',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?silverware',
      category: 'cafe',
      xPos: 832,
      yPos: 894,
      inPopout: false,
      notShown: false
    },
    {
      name: 'Enliten Bakery & Cafe',
      address: '43 E Center St',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?cafe',
      category: 'bakery',
      xPos: 555,
      yPos: 269,
      inPopout: true,
      notShown: false
    },
    {
      name: 'Provo Bakery',
      address: '190 E 100 N',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?cake',
      category: 'bakery',
      xPos: 1495,
      yPos: 663,
      inPopout: false,
      notShown: false
    },
    {
      name: 'La Petite French Bakery',
      address: '90 W Center St',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?french',
      category: 'bakery',
      xPos: 44,
      yPos: 269,
      inPopout: true,
      notShown: false
    },
    {
      name: 'Rockwell\'s Ice Cream Parlour',
      address: '43 N University Ave',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?cream',
      category: 'bakery',
      xPos: 338,
      yPos: 94,
      inPopout: true,
      notShown: false
    },
    {
      name: 'Roll With It Creamery',
      address: '63 E Center St',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?chocolate',
      category: 'bakery',
      xPos: 703,
      yPos: 269,
      inPopout: true,
      notShown: false
    },
    {
      name: 'Tart de Pop',
      address: '491 S Freedom Blvd*',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?soda',
      category: 'bakery',
      xPos: "",
      yPos: "",
      inPopout: false,
      notShown: true
    },
    {
      name: 'Taste',
      address: '117 N University Ave',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?cafe',
      category: 'bakery',
      xPos: 1057,
      yPos: 537,
      inPopout: false,
      notShown: false
    },
    {
      name: 'The Mighty Baker',
      address: '50 E 500 N*',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?cupcake',
      category: 'bakery',
      xPos: "",
      yPos: "",
      inPopout: false,
      notShown: true
    },
    {
      name: 'ABG\'s Libation Emporium',
      address: '190 W Center St',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?beer',
      category: 'beverage',
      xPos: 771,
      yPos: 794,
      inPopout: false,
      notShown: false
    },
    {
      name: 'City Limits',
      address: '440 W Center St',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?budweiser',
      category: 'beverage',
      xPos: 63,
      yPos: 794,
      inPopout: false,
      notShown: false
    },
    {
      name: 'Fruitacrush',
      address: '198 W Center St',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?fruit',
      category: 'beverage',
      xPos: 704,
      yPos: 794,
      inPopout: false,
      notShown: false
    },
    {
      name: 'Ivie Juice Bar',
      address: '45 N University Ave',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?smoothie',
      category: 'beverage',
      xPos: 338,
      yPos: 39,
      inPopout: true,
      notShown: false
    },
    {
      name: 'The Madison',
      address: '295 W Center St',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?beer',
      category: 'beverage',
      xPos: 493,
      yPos: 894,
      inPopout: false,
      notShown: false
    },
    {
      name: 'Sodalicious',
      address: '30 W 300 N',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?soda',
      category: 'beverage',
      xPos: 1020,
      yPos: 106,
      inPopout: false,
      notShown: false
    },
    {
      name: 'Starbucks Coffee',
      address: '101 W 100 N',
      streetNS: '',
      streetEW: '',
      imgUrl: 'https://source.unsplash.com/category/food/?coffee',
      category: 'beverage',
      xPos: 747,
      yPos: 666,
      inPopout: false,
      notShown: false
    }
  ];

  // for (var restaurant in restaurants) {
  //   if (restaurant.inPopout === false) {
  //     restaurant.circleSize = 32;
  //   }
  //   if (restaurant.inPopout === true) {
  //     restaurant.circleSize = 22;
  //   }
  // }

  // restaurants.getCircleSize = function(restaurant) {
  //   if (restaurant.inPopout === false) {
  //     return 32;
  //   }
  //   if (restaurant.inPopout === true) {
  //     return 22;
  //   }
  // }

  restaurants.getCircleFill = function(restaurant) {
    if (restaurant.inPopout === false) {
      return "#000000";
    }
    if (restaurant.inPopout === true) {
      return "#FFFFFF";
    }
  }

  restaurants.getFontSize = function(restaurant) {
    if (restaurant.inPopout === false) {
      return 32;
    }
    if (restaurant.inPopout === true) {
      return 26;
    }
  }

  restaurants.getTextFill = function(restaurant) {
    if (restaurant.inPopout === false) {
      return "#FFFFFF"
    }
    if (restaurant.inPopout === true) {
      return "#000000"
    }
  }

  restaurants.getTextXPosition = function(restaurant, index) {
    // Big circle, single digit
    if (restaurant.inPopout === false && index > 9) {
      return 22;
    }
    // Big circle, double digit
    if (restaurant.inPopout === false && index <= 9) {
      return 12;
    }
    // Small circle, single digit
    if (restaurant.inPopout === true && index > 9) {
      return 14;
    }
    // Small circle, double digit
    if (restaurant.inPopout === true && index <= 9) {
      return 5;
    }
  }

  restaurants.getTextYPosition = function(restaurant, index) {
    // Big circle, single digit
    if (restaurant.inPopout === false && index > 9) {
      return 45;
    }
    // Big circle, double digit
    if (restaurant.inPopout === false && index <= 9) {
      return 44;
    }
    // Small circle, single digit
    if (restaurant.inPopout === true && index > 9) {
      return 32;
    }
    // Small circle, double digit
    if (restaurant.inPopout === true && index <= 9) {
      return 32;
    }
  }

  this.getRestaurants = function() {
    return restaurants;
  }

})
