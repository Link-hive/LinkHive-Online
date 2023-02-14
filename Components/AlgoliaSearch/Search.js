import { Input } from "@nextui-org/react";
import React from "react";
const SearchComponent = (props) => {
  return (
    <>
      <Input placeholder={props.placeholder}></Input>
    </>
  );
};

export default SearchComponent;
