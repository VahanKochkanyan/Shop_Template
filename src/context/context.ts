import React from "react";
import { IContext, IState } from "./types";

export const initialState: IState = {
    users: [
        {id: 101, name: "Saqo", age: 20, salary: 125_000},
        {id: 102, name: "Tiko", age: 30, salary: 236_000},
        {id: 103, name: "Rafo", age: 40, salary: 363_000},

    ]
}

export const UserContext = React.createContext<IContext | undefined>(undefined)