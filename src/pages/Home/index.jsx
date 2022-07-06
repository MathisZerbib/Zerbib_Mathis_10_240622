import Banner from "components/Banner";
import Card from "components/Card";
import React from "react";

function Home() {
  return (
    <>
      <main>
      <Banner></Banner>
      <Card></Card>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
    </>
  );
}

export default Home;
