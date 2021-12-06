const spaces = [
  {
    _id: { $oid: "61adf562bacbe7ff1dfb7f29" },
    title: "Dance studio",
    location: { city: "Manchester", postcode: "M1 6FT" },
    owner: "Paul Dickinson",
    price: 150,
    spaceRating: 5,
    size: "M",
    amenities: {
      power: true,
      accessible: true,
      parking: false,
      indoor: true,
      outdoor: false,
      WC: true,
      kitchen: true,
      "24HourAccess": "false",
    },
    contactDetails: {
      phoneNumber: "07856697251",
      emailAddress: "paul.dickinson@gmail.com",
    },
    description:
      "This dance studio in the heart of Manchester is an ideal space for groups to gather for community practice and entertainment. Kept to a high standard of cleanliness and with numerous mirrors on the boundary walls, this is perfect for an array of entertaining activities.",
    reviews: [],
    images:
      "https://upload.wikimedia.org/wikipedia/commons/0/02/Typical_suburban_backyard.jpg",
  },

  {
    _id: { $oid: "61adfad4bacbe7ff1dfb7f2a" },
    title: "Open field",
    location: { city: "Warrington", postcode: "WA2 0DB" },
    owner: "Terry Rodgers",
    price: 30,
    spaceRating: 3.5,
    size: "XL",
    amenities: {
      power: false,
      accessible: false,
      parking: true,
      indoor: false,
      outdoor: true,
      WC: false,
      kitchen: false,
      "24HourAccess": "true",
    },
    contactDetails: {
      phoneNumber: "07726819611",
      emailAddress: "trodgersfarm@gmail.com",
    },
    description:
      "A beautiful open space to absorb the Warrington nature. Ideal for sports activities and large-scale events but own power supply and equipment would be needed.",
    reviews: [],
    images:
      "https://image.shutterstock.com/image-photo/front-yard-landscape-design-multicolored-260nw-544097740.jpg",
  },
];

export default spaces;
