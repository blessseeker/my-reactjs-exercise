import React, { useCallback, useReducer } from "react";

import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import Button from "../../shared/components/FormElements/Button";
import "./NewPlace.css";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };

    default:
      return state;
  }
};

const NewPlace = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
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
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

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
