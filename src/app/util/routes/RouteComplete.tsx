import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { PrincipalTable } from "../../containers/PrincipalTable";
import { LoginSession } from "../../views/public/LoginSession";
import { Register } from "../../views/public/Register";
import { NoMeeting } from "../../views/shared/NoMeeting";

//Login session
const LazyInicio = lazy(()=>import("../../views/public/LoginSession").then(()=>({default: LoginSession})));
const LazyRegiUse = lazy(()=>import("../../views/public/Register").then(()=>({default:Register})));
//No Meeting route
const LazyitGotLost = lazy(()=>import("../../views/shared/NoMeeting").then(()=>({default:NoMeeting})));
//Login container
const LazyTable = lazy(()=>import("../../containers/PrincipalTable").then(()=>({default: PrincipalTable})))

export const RouteComplete = () => {
  return (
    <Routes>
      <Route path="/" element={<LazyInicio/>}/>
      <Route path="/register" element={<LazyRegiUse/>}/>
      <Route path="/home/*" element={<LazyTable/>}/>

      <Route path="*" element={<LazyitGotLost/>}/>
    </Routes>
  );
};
