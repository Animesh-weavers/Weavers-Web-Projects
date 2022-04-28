import React, { useEffect } from "react";
import OneSignal from "react-onesignal";

const App = () => {

  useEffect(() => {
    OneSignal.init({ appId: "ee3f8937-b1bd-458e-8857-e16dbd358af4" });
  });
  const handleTag = (tag) => {
    OneSignal.sendTag('tech',tag).then(()=>{
      console.log('tagged')
    })
  };
  return (
    <div>
      <button
        onClick={() => {
          handleTag("react");
        }}
      >
        React
      </button>
      <button
        onClick={() => {
          handleTag("Angular");
        }}
      >
        Angular
      </button>
      <button
        onClick={() => {
          handleTag("Vue");
        }}
      >
        Vue
      </button>
    </div>
  );
};

export default App;
