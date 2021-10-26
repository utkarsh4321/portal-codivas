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

export const Profile = () => {
  return (
    <Grid>
      <GridItem md="8" xs="12">
        <Paper>
          <Typography tagName="h3" upper light>
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
                <Typography tagName="h3" upper light>
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
              <Typography tagName="h3" upper light>
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
        <Paper relative transparent>
          <Avatar src={imageProfile} />
          <Space height="150" />
          <Typography>Hol</Typography>
        </Paper>
      </GridItem>
    </Grid>
  );
};
