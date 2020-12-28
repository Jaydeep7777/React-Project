import React from "react";

import data from "../data";
import Purchase from "./Purchase";
import Additional from "./Additional";
import Total from "./Total";
let purchase = data.data.purchased_services;

let purchased = [];
let additional = [];
let amount = [];
let total = 0;
function getData(purchase) {
    purchase.forEach(function(item) {
   
        const services = item.purchased_office_template.purchased_office_services;
        services.forEach(function(service) {
            if(service.service_selected != null) {
                purchased.push(
                    {
                        item : item.name,
                        name : service.name,
                        image : service.image,
                        description : service.description,
                        price : service.price
                    });
                    amount.push(
                      {
name : service.name,
price : service.price
                      }
                );
                total += Number(service.price);
            } else {
                additional.push(
                    {
                        item : item.name,
                        name : service.name,
                        image : service.image,
                        description : service.description,
                        price : service.price
                    });
            }
        });
    })
    
}

getData(purchase);


function App() {
  console.log(purchased);
  console.log(additional);
  console.log(amount);
  return (
    <div>
      <h2>PURCHASED SERVICES</h2>
      {purchased.map(purchaseItem => (
        <Purchase
          item = {purchaseItem.item}
name = {purchaseItem.name}
image = {purchaseItem.image}
desc = {purchaseItem.description}
price = {purchaseItem.price}
        />
      ))}

<div className="container sw">
        <table className="table table-borderless table-dark">
          

{amount.map(amt => (
  <Total
name = {amt.name}
price = {amt.price}
  />
))}



<tr className= "bordered"></tr>
<tr>

    <td className = "cost">Total Costing</td>
    <td></td>
    <td></td>
    <td className="tw cost">{total}</td>
  </tr>

        </table>
      </div>

      
<h2>ADDITIONAL SERVICES</h2>
{additional.map(purchaseItem => (
        <Additional
          item = {purchaseItem.item}
name = {purchaseItem.name}
image = {purchaseItem.image}
desc = {purchaseItem.description}
price = {purchaseItem.price}
        />
      ))}
      
    </div>
  );
}

export default App;
