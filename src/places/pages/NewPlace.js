import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import Button from "../../shared/components/FormElements/Button";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useForm } from "../../shared/hooks/form";
import "./PlaceForm.css";
import { useHttpClient } from "../../shared/hooks/http";
import { AuthContext } from "../../shared/context/auth-context";

const NewPlace = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
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
  const history = useHistory();

  const placeSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await sendRequest(
        "http://localhost:5000/api/places",
        "POST",
        JSON.stringify({
          title: formState.inputs.judul.value,
          description: formState.inputs.deskripsi.value,
          address: formState.inputs.alamat.value,
          creator: auth.userId,
        }),
        { "Content-Type": "application/json" }
      );
      history.push("/");
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <form className="place-form" onSubmit={placeSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
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
    </React.Fragment>
  );
};

export default NewPlace;
