import ReactDOM from "react-dom/client";
import React, { lazy }  from "react";
import "./index.css";

const UsersTestControl = lazy(() => import('users/UsersTestControl').catch(() => {
  return { default: () => <div className='error'>Component is not available!</div> };
 })
 );

const CardsTestControl = lazy(() => import('cards/CardsTestControl').catch(() => {
  return { default: () => <div className='error'>Component is not available!</div> };
 })
 );
const App = () => (
<div className="container">
 <UsersTestControl></UsersTestControl>
 <CardsTestControl></CardsTestControl>
</div>
); 

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);