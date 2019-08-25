const express = require("express");
const app = express();
const port = 3000;

app.get("/:item", (req, res) => {
  item = req.params.item;
  res.json(hashList[item]);
});

app.listen(port, () => console.log("Gator app listening on port 3000!"));

let hashListWalmart = {
  Adidas_Shirt: [
    {
      name: "NASA Shirt - Small",
      price: 19
    }
  ],
  "Coca-Cola": [
    {
      name: "Diet Coke 355ml Can, 12pk",
      price: 5
    }
  ],
  Dads_Oatmeal_Cookie: [
    {
      name: "Christe Dad's Oatmeal Original",
      price: 4
    }
  ],
  Iphone_6: [
    {
      name: "iPhone 6s 16GB",
      price: 276
    }
  ],
  laptop: [
    {
      name: "ACER Aspire 3 15.6 Laptop AMD A-Series",
      price: 468
    }
  ],
  lays_chips: [
    {
      name: "Lay's Classic Potato Chips",
      price: 4
    }
  ],
  Macbook: [
    {
      name: "Macbook Pro 13 Inch 128GB",
      price: 1500
    }
  ],
  Microsoft_T_shirt: [
    {
      name: "Techie shirt",
      price: 15
    }
  ],
  Water_Bottle: [
    {
      name: "Perrier Carbonated Natural Spring Water",
      price: 2
    }
  ],
  Welchs_Fruit_Snacks: [
    {
      name: "Welch's Gluten Free Mixed Fruit Snacks",
      price: 6
    }
  ],
  yeezys: [
    {
      name: "Nike-Men-Yeezys",
      price: 600
    }
  ]
};
