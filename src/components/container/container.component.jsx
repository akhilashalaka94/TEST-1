import React, { useState } from "react";

import { ReactComponent as Dog } from "../../assets/dog.svg";
import { ReactComponent as Cat } from "../../assets/cat.svg";

import CustomButton from "../button/button.component";
import CustomHeader from "../header/header.component";

import "./container.styles.scss";

const Container = () => {
  const [state, setState] = useState({
    header: "HELLO!",
    color: "#fb474d",
    isDogVisible: true,
  });

  const handleChange = (type, value) => {
    switch (type) {
      case "HEADER": {
        setState({
          ...state,
          header: value,
        });
        break;
      }

      case "COLOR": {
        setState({
          ...state,
          color: value,
        });
        break;
      }

      case "ANIMAL": {
        setState({
          ...state,
          isDogVisible: value,
        });
        break;
      }

      default:
        return state;
    }
  };

  return (
    <div className={"container"}>
      {state.isDogVisible ? (
        <Dog fill={state.color} className={"dog-image"} />
      ) : (
        <Cat fill={state.color} className={"dog-image"} />
      )}

      <CustomHeader header={state.header} />

      <div className={"header-buttons"}>
        <CustomButton
          label={'Change header to "Dogs Rule!"'}
          handleChange={handleChange}
          type="HEADER"
          value={"Dogs Rule!"}
        />
        <CustomButton
          label={'Change header to "Cats Drool!"'}
          handleChange={handleChange}
          type="HEADER"
          value={"Cats Drool!"}
        />
      </div>

      <hr />

      <div className={"color-buttons"}>
        <CustomButton
          label={"Change dog to blue."}
          handleChange={handleChange}
          type="COLOR"
          value={"blue"}
        />
        <CustomButton
          label={"Change dog to green."}
          handleChange={handleChange}
          type="COLOR"
          value={"green"}
        />
      </div>

      <hr />

      <CustomButton
        label={"Change dog to cat."}
        handleChange={handleChange}
        type="ANIMAL"
        value={false}
      />
    </div>
  );
};

export default Container;
