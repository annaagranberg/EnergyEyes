import { useState } from "react";
import db from "../firebase";
import { useAuth } from "../contexts/AuthContext";


// Generate synthetic data
const Data = () => {
  const data = [];
  for (let i = 1; i <= 12; i++) {
    data.push({
      month: i,
      electricity: Math.floor(Math.random() * 1000),
      gas: Math.floor(Math.random() * 500),
      water: Math.floor(Math.random() * 1000)
    });
  }
  return data;
};
export default Data;