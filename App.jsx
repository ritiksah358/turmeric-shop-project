import React from "react";
import Contact from "./components/Contact";

const txt = {
  contactTitle: "Contact Us",
  quickOrder: "Quick Order",
  name: "Your Name",
  phone: "Your Phone",
  product: "Select Product",
  sendOrder: "Send Order"
};

function App() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center text-amber-700 mb-6">
        Welcome to Turmeric Shop
      </h1>
      <Contact txt={txt} />
    </div>
  );
}

export default App;
