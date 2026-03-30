
import React from "react";
import './../styles/App.css';
import PageLayout from "./pageLayout";

const App = () => {
  let header="Welcome to my website"
  let footer="This the content of my page"
  let children="dfg cvbnfghj fgyujk"
  return (
    <div>
        {/* Do not remove the main div */}
        <PageLayout header={header} footer={footer} children={children}/>
    </div>
  )
}

export default App
