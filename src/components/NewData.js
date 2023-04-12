import { useState } from "react";
import db from "../firebase";
import { useAuth } from "../contexts/AuthContext";

const NewData = () => {
    const [area,setArea] = useState("");
    const {currentUser} = useAuth();
    var docRef = db.collection("user_collection").doc(currentUser.uid);
  
    //Get db information
    docRef.get("name.firstname").then((doc) => {
        if (doc.exists) {
          setArea(doc.get("boendeyta"));
        } else {
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
  console.log(area);
  return area;
}

export default NewData;