import { Input } from "@nextui-org/react";
import React from "react";
import { SendButton } from "./content/SendButton";
import { SendIcon } from "./content/SendIcon";

const SearchComponent = (props) => {
  return (
    <>
      <Input
        placeholder={props.placeholder}
        className="relative left-4"
        contentRightStyling={false}
        contentRight={
          <SendButton>
            <SendIcon />
          </SendButton>
        }
      ></Input>
    </>
  );
};

export default SearchComponent;
