import React from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";

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

const UpdatePlace = () => {
  const placeId = useParams().placeId;
  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Tempat tidak ditemukan</h2>
      </div>
    );
  }
  return (
    <form>
      <Input
        id="judul"
        type="text"
        label="Judul"
        element="input"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Masukkan judul"
        valid={true}
      />
      <Input
        id="deskripsi"
        label="Deskripsi"
        element="textarea"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Masukkan minimal lima karakter"
        valid={true}
      />
      <Input
        id="alamat"
        label="Alamat"
        element="textarea"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Masukkan alamat"
        valid={true}
      />
      <Button type="submit">Tambahkan Tempat</Button>
    </form>
  );
};

export default UpdatePlace;
