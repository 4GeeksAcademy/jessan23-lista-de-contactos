import React, { useState, useEffect, useContext, Component } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";


export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>

		</div>
	);
};
