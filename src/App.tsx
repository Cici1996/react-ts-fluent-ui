import React, { useEffect } from 'react';
import './App.css';
import { UseTranslationHook } from './utils/UseTranslation';
import { AuthProvider } from "react-oidc-context";
import { userManager, userManagerConfig } from './utils';
import { MainRouter } from './routers';
import * as signalR from "@microsoft/signalr"

export const App: React.FC = () => {
  UseTranslationHook()
  let connection = new signalR.HubConnectionBuilder()
    .withUrl("https://localhost:7051/notifyhub")
    .build();

  connection.start().then(() => {
    console.log("connected signalR")
  }).catch((err) => {
    console.log("err signalR : ", err)
  })

  connection.on("ReceiveNotify", (msg) => {
    console.log(msg)
  })
  return (
    <AuthProvider {...userManagerConfig}>
      <MainRouter />
    </AuthProvider>
  );
};
