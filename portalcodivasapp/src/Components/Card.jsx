import React from "react";
import styled from "styled-components";

export const CardLink = styled.button`
  background-color: ${(props) => props.theme.card.background};
  color: ${(props) => props.theme.color};
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border: 0;
  outline: 0;
  width: 345px;
  min-height: 320px;
  margin: 10px;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

  &:hover {
    background-color: ${(props) => props.theme.card.hover};
  }
  > a {
    width: 100%;
    text-decoration: none;
    color: ${(props) => props.theme.color};
  }
`;

export const CardImage = styled.div`
  display: block;
  width: 100%;
  height: 140px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const CardTitle = styled.h2`
  font-weight: 500;
  text-align: left;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  margin-bottom: 0.4em;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

export const Paragraph = styled.p`
  text-align: left;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 16px;
  max-height: 48px;
  -webkit-line-clamp: 3; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

export const CardBody = styled.div`
  padding: 16px;
`;

export const Card = ({ thumbnails, title, description }) => {
  return (
    <CardLink>
      <CardImage src={thumbnails} />
      <CardBody>
        <CardTitle as="h2">{title}</CardTitle>
        <Paragraph>{description}</Paragraph>
      </CardBody>
    </CardLink>
  );
};
