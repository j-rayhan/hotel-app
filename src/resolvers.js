// @flow
import gql from "graphql-tag";
// import hotels from "./db";
let users = [
  {
    id: 1,
    firstName: "ray",
    lastName: "habib",
    dob: "22",
    email: "a@g.com",
    password: "",
    __typename: "UserType"
  }
];
let houses = [
  { id: 1, name: "Rayhan House", email: "r@g.com", __typename: "HouseType" }
];
let hotel_overview =
  "There’s no better way to explore the breathtaking beaches of Northland than by Stand Up Paddle Board. Available from our base in Te Arai, you can hire a quality SUP and set off on your own adventure - the ultimate way to escape the hustle and bustle of city life, recharge, and have fun! Glide across the water in complete cruise mode and soak up the gorgeous scenery, or shift the pace and have your self a unique core work out with a view! You create your adventure! SUP boards are stable and easy to use in the waves or to explore the local estuaries . No experience is required as we’ll give you a quick run down on operation and safety before you take off on your adventure. All SUP boards come with paddle and flotation vest, and our awesome team will give you a head up on the best paddles spots to make the most of you time on the water.";
let hotels = [
  {
    id: 1,
    name: "Rayhan H1",
    email: "r@g.com",
    location: "New Orleans, 0.4 miles to City center",
    price: "$344",
    img:
      "https://amp.businessinsider.com/images/5527f47fdd0895c44f8b459e-750-422.jpg",
    overview: hotel_overview,
    __typename: "HotelType"
  },
  {
    id: 2,
    name: "Rayhan H2",
    email: "r@g.com",
    location: "New Orleans, 0.1 miles to City center",
    price: "$222",
    img: "https://zpalace.gr/wp-content/uploads/4yotla4phco.jpg",
    overview: hotel_overview,
    __typename: "HotelType"
  }
];
export const defaults = {
  users: users,
  hotels: hotels,
  houses: houses
};

let nextId = 3;

export const resolvers = {
  Mutation: {
    addUser: (_, { firstName, lastName, dob, password, email }, { cache }) => {
      console.log("Mutation: ", firstName);
      const query = gql`
        query users {
          users @client {
            id
            firstName
            lastName
            dob
            email
            password
          }
        }
      `;
      const previous = cache.readQuery({ query });
      // console.log("Previour: ", previous.users);
      const newUser = {
        id: nextId++,
        firstName,
        lastName,
        dob,
        email,
        password,
        __typename: "UserType"
      };

      const data = {
        users: previous.users.concat([newUser])
      };
      console.log("Previour: ", data);
      cache.writeData({ data });
      return newUser;
    },
    addHouse: (_, { name, email }, { cache }) => {
      console.log("Mutation: ", name);
      const query = gql`
        query houses {
          houses @client {
            id
            name
            email
          }
        }
      `;
      const previous = cache.readQuery({ query });
      console.log("Previour: ", previous.houses);
      const newHouse = {
        id: nextId++,
        name,
        email,
        __typename: "HouseType"
      };

      const data = {
        houses: previous.houses.concat([newHouse])
      };
      console.log("Add with old [] : ", data);
      cache.writeData({ data });
      return newHouse;
    },
    addHotel: (_, { name, email }, { cache }) => {
      // console.log("Mutation: ", name);
      const query = gql`
        query hotels {
          hotels @client {
            id
            name
            email
            price
            distance
            rating
            img
          }
        }
      `;
      const previous = cache.readQuery({ query });
      let maxValueOfId = Math.max(...previous.hotels.map(o => o.id));
      console.log("Previour: ", maxValueOfId);
      const newHotel = {
        id: ++maxValueOfId,
        name,
        email,
        __typename: "Hotels"
      };
      console.log("New data: ", newHotel);

      const hotel_data = {
        hotels: previous.hotels.concat([newHotel])
      };
      console.log("Add NewHotel: ", hotel_data);
      cache.writeData({ hotel_data });
      return newHotel;
    },
    addHotel_new: (
      _,
      { name, email, location, price, img, overview },
      { cache }
    ) => {
      console.log("Mutation: ", name);
      const query = gql`
        query hotels {
          hotels @client {
            id
            name
            email
            location
            price
            img
            overview
          }
        }
      `;
      const previous = cache.readQuery({ query });
      console.log("Previour: ", previous.hotels);
      const newHotel = {
        id: nextId++,
        name,
        email,
        location,
        price,
        img,
        overview,
        __typename: "HotelType"
      };

      const data = {
        hotels: previous.hotels.concat([newHotel])
      };
      console.log("Add with old [] : ", data);
      cache.writeData({ data });
      return newHotel;
    }
  }
};
