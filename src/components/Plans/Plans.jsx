import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "features/userSlice";
import { collection, query, where, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "firebase";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import "./Plans.css";

const Plans = () => {
  const [userUID, setUserUID] = useState("");
  const [currentBilling, setCurrentBilling] = useState("");
  const [renewalDate, setRenewalDate] = useState("");
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    const getBillingInfo = async () => {
      const userQuery = query(collection(db, "users"), where("user", "==", user.email));
      const userQuerySnapshot = await getDocs(userQuery);
      userQuerySnapshot.forEach((doc) => {
        setUserUID(doc.id);
        const userData = doc.data();
        setCurrentBilling(userData.billing);
        let date = userData.timestamp.toDate().toLocaleDateString();
        let dateArray = date.split("/");
        date = dateArray[0] + "/" + dateArray[1] + "/" + (parseInt(dateArray[2]) + 1).toString();
        setRenewalDate(date);
      });
    }

    getBillingInfo();

    return getBillingInfo;
  }, [user]);

  useEffect(() => {
    const getPlansInfo = async () => {
      const plans = [];
      const plansQuery = query(collection(db, "plans"));
      const plansQuerySnapshot = await getDocs(plansQuery);
      plansQuerySnapshot.forEach((doc) => {
        plans.push(doc.data());
      });
      setProducts(plans);
    }

    getPlansInfo();

    return getPlansInfo;
  }, []);

  const updateSubscription = (planName, planPrice) => {
    alertify.confirm(
      'Plan Upgrade',
      `<p>
        You will be updating your package!<br /><br />
        <b>Current Package:</b> &nbsp; ${currentBilling}<br /><br />
        <b>Selected Package:</b> &nbsp; ${planName}<br /><br />
        <b>Package Cost:</b> &nbsp; $${planPrice}
      </p>`,
      async () => {
        const billingRef = doc(db, "users", userUID);
        await updateDoc(billingRef, {
          "billing": planName
        });
        setCurrentBilling(planName);
        alertify.success('Plan Updated Successfully!')
      },
      () => {}
    );
  }

  const handleSubscription = (e, planName, planPrice) => {
    e.preventDefault();
    (e.target.innerHTML === "Subscribe") ?
      updateSubscription(planName, planPrice) :
      alert("Already Subscribed to the Package");
  }

  return (
    <div className="plans">
      <br />
      {renewalDate && <p className="plan-renewal-date">Renewal Date: {renewalDate}</p>}
      {products.map(plan => (
        <div className={`plan ${(plan.Name === currentBilling) && "subscribed-plan"}`}>
          <div className="plan-info">
            <h5>{plan.Name}</h5>
            <h6>{plan.Type}</h6>
          </div>
          <button onClick={(e) => handleSubscription(e, plan.Name, plan.Price)}>
            {(plan.Name === currentBilling) ? "Current Package" : "Subscribe"}
          </button>
        </div>
      ))}
    </div>
  );
}
 
export default Plans;