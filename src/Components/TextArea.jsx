import React from "react";
import styled from "styled-components";

const FormControl = styled.div`
  margin: 16px 8px;
`;

const Label = styled.label`
  padding-bottom: 8px;
`;
const TextAreaStyled = styled.textarea`
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

export const TextArea = (props) => {
  return (
    <FormControl>
      <Label htmlFor={props.name}>{props.label}</Label>
      <TextAreaStyled {...props} >{props.children}</TextAreaStyled>
    </FormControl>
  );
};
