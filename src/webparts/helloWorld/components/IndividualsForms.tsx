import * as React from "react";

import { NameHeader } from "./components/NameHeader";

import { Contact } from "./components/Contact";

import { Address } from "./components/Address";

import { Taxnumbers } from "./components/Taxnumbers";

import { ParentPicker } from "./components/ParentPicker";

import { Commentstable } from "./components/Commentstable";

import { Documentstable } from "./components/Documentstable";

export interface Form1Props {
  activeForm: number;
  delete3: any;
  plus: any;
  comments: any;
  selectedComment: any;
  iconOver: any;
  iconOut: any;
  delete: any;
}

//export const Form = ({}) => {

export const Form: React.FC<Form1Props> = props => {
  return (
    <React.Fragment>
      <NameHeader />

      <Contact />

      {/*  <Address /> */}

      <Taxnumbers />

      <ParentPicker />

      <Commentstable
        delete3={props.delete3}
        plus={props.plus}
        comments={props.comments}
        selectedComment={props.selectedComment}
        iconOver={props.iconOver}
        iconOut={props.iconOut}
      />

      <Documentstable
        delete3={props.delete3}
        plus={props.plus}
        documents={props.comments}
        selecteddocument={props.selectedComment}
        iconOver={props.iconOver}
        iconOut={props.iconOut}
      />
    </React.Fragment>
  );
};
