import React from "react";
import classes from './app.module.scss';

export const App = () => {
  console.log('style: ', classes);
  return (
    <div className={classes.app}>
      <h1>Hello React!</h1>
      <h2>I'm peach :)</h2>
    </div>
  )
}