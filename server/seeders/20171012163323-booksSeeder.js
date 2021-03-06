'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Books', [{
    title: "Ponmile",
    description: "This play is about romance ",
    category: "Romance",
    quantity: 10,
    image: "http://res.cloudinary.com/ddvm5tzhm/image/upload/c_scale,h_300/v1510920679/how-to-book-cover_kr2cui.jpg",
    author: "Sofiat Abioye",
    ISBN: 2338374743,
    bookEdition: 2008,
    publisher: "THE TIMES",
    bookSize: 206,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Economics",
    description: "Studying economics isa bout needs and wants ",
    category: "Education",
    quantity: 10,
    image: "http://res.cloudinary.com/ddvm5tzhm/image/upload/c_scale,h_300/v1510920679/the-night-gardener-9781481439787_hr_rjavqr.jpg",
    author: "Sofiat Abioye",
    ISBN: 384 - 23384 - 374743,
    bookEdition: 2008,
    publisher: "Warner Berry",
    bookSize: 300,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Biology",
    description: "Biology is a subject based on fiction ",
    category: "Fiction",
    quantity: 1,
    image: "http://res.cloudinary.com/ddvm5tzhm/image/upload/c_scale,h_300/v1510920679/seams_euvhp4.jpg",
    author: "Sofiat Abioye",
    ISBN: 1233844885,
    bookEdition: 2010,
    publisher: "Warner Berry",
    bookSize: 300,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "The Big Trials",
    description: "Trials are a big part of life",
    category: "IT",
    quantity: 30,
    image: "http://res.cloudinary.com/ddvm5tzhm/image/upload/c_scale,h_300/v1509351494/HelloBooks/nfnmc9mn7wctoybw11jw.jpg",
    author: "Sofiat Abioye",
    ISBN: 3844858482,
    bookEdition: 2108,
    publisher: "Warner Berry",
    bookSize: 300,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Career",
    description: "Choosing a career is a big task ",
    category: "Career",
    quantity: 10,
    image: "http://res.cloudinary.com/ddvm5tzhm/image/upload/c_scale,h_300/v1510920680/8finance_xbytg5.jpg",
    author: "Sofiat Abioye",
    ISBN: 7474344884,
    bookEdition: 2008,
    publisher: "Warner Berry",
    bookSize: 300,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Mr Mason",
    description: "An historian of the 18th Century",
    category: "Autobiographies",
    quantity: 2,
    image: "http://res.cloudinary.com/ddvm5tzhm/image/upload/c_scale,h_300/v1510920680/The_Girl_Of_Ink_and_Stars___Helen_Crawford_White_evyfeu.jpg",
    author: "Sofiat Abioye",
    ISBN: 23384374743,
    bookEdition: 2008,
    publisher: "Warner Berry",
    bookSize: 300,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Koku baboni",
    description: "the abiku child of a princess in the ..",
    category: "Folkore",
    quantity: 10,
    image: "http://res.cloudinary.com/ddvm5tzhm/image/upload/c_scale,h_300/v1510920680/4d0dfed66979c0c801fb448889bd49a9--tiger-design-creative-posters_kqnq5j.jpg",
    author: "Sofiat Abioye",
    ISBN: 4743485994,
    bookEdition: 2008,
    publisher: "Warner Berry",
    bookSize: 300,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "My Dangling Chain",
    description: "Trust me when i say i can see the future ",
    category: "Fiction",
    quantity: 11,
    image: "http://res.cloudinary.com/ddvm5tzhm/image/upload/c_scale,h_300/v1510920680/eaede075ba4f33b87eac77dae121ef57--book-covers-ideas-bookcovers_t06y8s.jpg",
    author: "Sofiat Abioye",
    ISBN: 7433857382,
    bookEdition: 2018,
    publisher: "Warner Berry",
    bookSize: 300,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Andela Series C",
    description: "Study how companies raise funding ",
    category: "Business",
    quantity: 10,
    image: "http://res.cloudinary.com/ddvm5tzhm/image/upload/c_scale,h_300/v1510920679/vintage_bookcover_ychusd.webp",
    author: "Sofiat Abioye",
    ISBN: 32338474743,
    bookEdition: 2208,
    publisher: "Warner Berry",
    bookSize: 300,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "The great Sire",
    description: "Adventures in oakland woods from sir benjamin ",
    category: "Fiction",
    quantity: 10,
    image: "http://res.cloudinary.com/ddvm5tzhm/image/upload/c_scale,h_300/v1510920678/Enchantment-Book-Cover-Best-Seller1_nobvfl.jpg",
    author: "Sofiat Abioye",
    ISBN: 2333884 - 3747433,
    bookEdition: 2010,
    publisher: "Darehll Somweto",
    bookSize: 236,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Romeo and Juliet",
    description: "This play is about romance ",
    category: "Romance",
    quantity: 10,
    image: "http://res.cloudinary.com/ddvm5tzhm/image/upload/c_scale,h_300/v1510920679/the-night-gardener-9781481439787_hr_rjavqr.jpg",
    author: "Warner bERRY",
    ISBN: 348484 - 374743,
    bookEdition: 2018,
    publisher: "THE TIMESXJD",
    bookSize: 456,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Mothers house",
    description: "The role of the mother in the home is ",
    category: "Business",
    quantity: 10,
    image: "http://res.cloudinary.com/ddvm5tzhm/image/upload/c_scale,h_300/v1510920679/architecture-book-cover_lfd8s2.jpg",
    author: "Sofiat Abioye",
    ISBN: 2348 - 374743,
    bookEdition: 2008,
    publisher: "TESS JAMES",
    bookSize: 706,
    createdAt: new Date(),
    updatedAt: new Date()
  },

  {
    title: "Orio and Jade",
    description: "Meteors js new package is in town",
    category: "IT",
    quantity: 10,
    image: "http://res.cloudinary.com/ddvm5tzhm/image/upload/c_scale,h_300/v1510920679/how-to-book-cover_kr2cui.jpg",
    author: "dARA Ladara",
    ISBN: 4588584 - 37447443,
    bookEdition: 1997,
    publisher: "LEARY WAY",
    bookSize: 406,
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {})
    .then(() => {
      process.stdout.write('Books created \n');
    }),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Books', null, {})
};
