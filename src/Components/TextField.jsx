import React from "react";
import styled from "styled-components";

const FormControl = styled.div`
  margin: 16px 8px;
`;
const Input = styled.input`
  padding: 18.5px 14px;
  width: 100%;
  border-color: rgba(0, 0, 0, 0.23);
  border-width: 1px;
  border-radius: 5px;

  &:hover {
    border-color: rgba(0, 0, 0, 0.87);
  }
  &:focus-visible {
    outline: rgba(0, 0, 0, 0.87) solid 1px;
  }
`;

const Label = styled.label`
  padding-bottom: 8px;
`;

export const TextField = (props) => {
  return (
    <FormControl>
      <Label htmlFor={props.name}>{props.label}</Label>
      <Input {...props} />
    </FormControl>
  );
};
