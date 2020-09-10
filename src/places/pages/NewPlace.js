import React from "react";

import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/hooks/form";
import "./PlaceForm.css";

const NewPlace = () => {
  const [formState, inputHandler] = useForm({
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
  });

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="judul"
        type="text"
        label="Judul"
        element="input"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Masukkan judul"
        onInput={inputHandler}
      />
      <Input
        id="deskripsi"
        label="Deskripsi"
        element="textarea"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Masukkan minimal lima karakter"
        onInput={inputHandler}
      />
      <Input
        id="alamat"
        label="Alamat"
        element="textarea"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Masukkan alamat"
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        Tambahkan Tempat
      </Button>
    </form>
  );
};

export default NewPlace;
