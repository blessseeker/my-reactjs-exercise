import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/hooks/form";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import "./PlaceForm.css";

const DUMMY_PLACES = [
  {
    id: "p1",
    judul: "Batu Kuda",
    deskripsi: "Wisata Pinus",
    imageUrl:
      "https://cdn.ayobandung.com/images-bandung/post/articles/2018/01/06/27192/whatsapp_image_2018-01-06_at_20.05.17.jpeg",
    alamat: "Cibiru Wetan, Cileunyi, Bandung, Jawa Barat 40625",
    location: {
      lat: -6.8936106,
      lng: 107.7425512,
    },
    creator: "u1",
  },
  {
    id: "p2",
    judul: "Empire State Building",
    deskripsi: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    alamat: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      judul: {
        value: "",
        isValid: false,
      },
      deskripsi: {
        value: "",
        isValid: false,
      },
      alamat: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  useEffect(() => {
    setFormData(
      {
        judul: {
          value: identifiedPlace.judul,
          isValid: true,
        },
        deskripsi: {
          value: identifiedPlace.deskripsi,
          isValid: true,
        },
        alamat: {
          value: identifiedPlace.alamat,
          isValid: true,
        },
      },
      true
    );
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Tempat tidak ditemukan</h2>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Sedang memuat</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="judul"
        type="text"
        label="Judul"
        element="input"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
        errorText="Masukkan judul"
        value={formState.inputs.judul.value}
        valid={formState.inputs.judul.isValid}
      />
      <Input
        id="deskripsi"
        label="Deskripsi"
        element="textarea"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Masukkan minimal lima karakter"
        onInput={inputHandler}
        value={formState.inputs.deskripsi.value}
        valid={formState.inputs.deskripsi.isValid}
      />
      <Input
        id="alamat"
        label="Alamat"
        element="textarea"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
        errorText="Masukkan alamat"
        value={formState.inputs.alamat.value}
        valid={formState.inputs.alamat.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        Simpan Perubahan
      </Button>
    </form>
  );
};

export default UpdatePlace;
