import React from "react";
import { Card } from "../component/Card.jsx";
import AddContact from "./addcontacts.jsx";

export const Home = () => (
  <div className="text-center mt-5">
    <h1>Hello Rigo!</h1>
    <Card />
    <addContacts/>
  </div>
);
