import React from "react";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Batu Kuda",
    description: "Wisata Pinus",
    imageUrl:
      "https://cdn.ayobandung.com/images-bandung/post/articles/2018/01/06/27192/whatsapp_image_2018-01-06_at_20.05.17.jpeg",
    address: "Cibiru Wetan, Cileunyi, Bandung, Jawa Barat 40625",
    location: {
      lat: -6.8936106,
      lng: 107.7425512,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
