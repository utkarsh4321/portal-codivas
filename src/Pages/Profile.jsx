import React from "react";
import { Avatar } from "../Components/Avatar";
import { Divider } from "../Components/Divider";
import { FormContainer } from "../Components/FormContainer";
import { Grid } from "../Components/Grid";
import { GridItem } from "../Components/GridItem";
import { Paper } from "../Components/Paper";
import { TextArea } from "../Components/TextArea";
import { TextField } from "../Components/TextField";
import { Typography } from "../Components/Typography";
import { Space } from "../Components/Space";

import imageProfile from "../Assets/Images/manasWorking.jpg";
import avatarProfile from "../Assets/Images/avatar.jpg";
import styled from "styled-components";
import { Box } from "../Components/Box";
import { Button } from "../Components/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;
const ImageBackground = styled.div`
  position: relative;
  height: 300px;
  /* width: 100vw; */
  background-image: url(${imageProfile});
  background-size: cover;
  background-position: center;

  ::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(152, 66, 211, 0.63);
  }
`;

export const Profile = () => {
  return (
    <Container>
      <ImageBackground />
      <Box position="absolute" top="100px" left="24px">
        <Typography className="text-white" tagName="h3">
          Hello
        </Typography>
        <Typography className="text-white" tagName="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
          quaerat?
        </Typography>
        <Button className="mt-1">Editar Perfil</Button>
      </Box>
      <Box position="absolute" top="200px" left="0">
        <Grid>
          <GridItem md="8" xs="12">
            <Paper>
              <Typography tagName="h3" upper className="text-muted">
                Editar Perfil
              </Typography>
              <Divider />
              <FormContainer>
                <Grid>
                  <GridItem md="6" xs="12">
                    <TextField placeholder="michael" label="Username" />
                  </GridItem>
                  <GridItem md="6" xs="12">
                    <TextField
                      placeholder="micke@email.com"
                      label="Email Address"
                    />
                  </GridItem>
                  <GridItem md="6" xs="12">
                    <TextField placeholder="Mike" label="First Name" />
                  </GridItem>
                  <GridItem md="6" xs="12">
                    <TextField placeholder="Andrew" label="Last Name" />
                  </GridItem>
                  <GridItem md="12" xs="12">
                    <Typography tagName="h3" upper className="text-muted">
                      Contact information
                    </Typography>
                  </GridItem>
                  <Divider />
                  <GridItem md="12">
                    <TextField placeholder="Bid" label="Address" />
                  </GridItem>
                  <GridItem md="4" xs="12">
                    <TextField placeholder="Bid" label="City" />
                  </GridItem>
                  <GridItem md="4" xs="12">
                    <TextField placeholder="Bid" label="Country" />
                  </GridItem>
                  <GridItem md="4" xs="12">
                    <TextField placeholder="Bid" label="Postal Code" />
                  </GridItem>
                  <Typography tagName="h3" upper className="text-muted">
                    About me
                  </Typography>
                  <Divider />
                  <GridItem md="12">
                    <TextArea
                      label="About Me"
                      placeholder="A beautiful..."
                      rows="5"
                    ></TextArea>
                  </GridItem>
                </Grid>
              </FormContainer>
            </Paper>
          </GridItem>
          <GridItem md="4" xs="12">
            <Paper position="relative">
              <Avatar src={avatarProfile} />
              <Space height="70" />
              <Grid>
                <GridItem md="4" xs="4">
                  <p className="text-center text-muted">Amigos</p>
                </GridItem>
                <GridItem md="4" xs="4">
                  <p className="text-center text-muted">Fotos</p>
                </GridItem>
                <GridItem md="4" xs="4">
                  <p className="text-center text-muted">Cometarios</p>
                </GridItem>
              </Grid>
              <Typography tagName="h6" center>
                Codiva
              </Typography>
              <Typography tagName="p" center>
                Brasil
              </Typography>
              <Typography tagName="h6" center>
                Colectiva Codivas
              </Typography>
              <Typography tagName="h6" center>
                Colectiva Codivas
              </Typography>
              <Divider />
              <Typography tagName="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate sit architecto quidem, maiores atque itaque? Sed,
                perspiciatis! Impedit est minima ullam soluta maxime quaerat ea
                enim fugiat labore facilis?
              </Typography>
              <a href="#">Show more</a>
            </Paper>
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
};
