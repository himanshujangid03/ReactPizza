import React, { useContext, useState } from "react";
import Pizza from "./Pizza";
import Util from "./Util";
import { API } from "../Context/api";
import { useRouteLoaderData } from "react-router-dom";
import FormModal from "../Authentication/FormModal";
import Login from "../Authentication/Login";
import SignUp from "../Authentication/SignUp";

const PizzaList = (props) => {
  const pizzaData = useRouteLoaderData("pizza-loader");
  const [query, setQuery] = useState("");
  

  const filteredPizzas = query
    ? pizzaData.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
    : pizzaData;

  const numPizzas = pizzaData.length;

  return (
    <>
      <div className="container">
        <main className="menu">
          <h2>Our menu</h2>

          <Util setQuery={setQuery} />

          {numPizzas > 0 ? (
            <>
              <p>
                Authentic Italian cuisine. {pizzaData.length} creative dishes to
                choose from. All from our stone oven, all organic, all
                delicious.
              </p>

              {
                <ul className="pizzas">
                  {filteredPizzas.map((el) => (
                    <div className="card" key={el._id}>
                      <Pizza pizzaObj={el} />
                    </div>
                  ))}
                </ul>
              }
            </>
          ) : (
            <>
              <p>We're still working on our menu. Please come back later :</p>
            </>
          )}
        </main>
      </div>
    </>
  );
};

export default PizzaList;

export async function loader() {
  const response = await fetch(API, {
    method: "GET",
  });
  return response;
}
