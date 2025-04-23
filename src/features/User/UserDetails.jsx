import { useState } from "react";
import { Button } from "../../ui/Button";
import { useSearchParams } from "react-router-dom";
import Profile from "./Profile";
import AddProduct from "./AddProduct";
import Orders from "./Orders";
import Order_History from "./Order_History";
import UpdateUserPassword from "./UpdateUserPassword";
import UpdateUserData from "./UpdateUserData";
import Sidebar from "./Sidebar";

const sideBarComponent = [
  {
    name: "Profile",
    tabName: "profile",
  },
  {
    name: "Rent Product",
    tabName: "add",
  },
  {
    name: "Your Products",
    tabName: "products",
  },
  {
    name: " Order History",
    tabName: "history",
  },
  {
    name: "Change Password",
    tabName: "password",
  },
  {
    name: "Change User Data",
    tabName: "userdata",
  },
];

function UserDetails({ user }) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative flex overflow-hidden text-4xl lg:grid lg:grid-cols-[20%_auto]">
      <Button
        className="absolute top-3 left-3 z-20 block text-xl lg:hidden"
        onClick={() => setShow((show) => !show)}
      >
        {show ? "Close" : "Menu"}
      </Button>
      <div
        className={`border-r-4 border-r-[#323131] lg:w-full lg:translate-x-0 ${show ? "w-full translate-x-0" : "w-0 -translate-x-full overflow-hidden"} bg-[#ffffff10] transition-all duration-300 ease-in-out`}
      >
        <Sidebar setShow={setShow} sideBarComponent={sideBarComponent} />
      </div>

      <div
        className={`w-full p-4 ${show ? "brightness-50" : "brightness-100"}`}
      >
        <DisplayContent user={user} />
      </div>
    </div>
  );
}

function DisplayContent({ user }) {
  const [searchParams] = useSearchParams();
  const params = searchParams.get("tab");

  return (
    <>
      {params === "profile" && <Profile />}
      {params === "add" && <AddProduct />}
      {params === "products" && <Orders />}
      {params === "history" && <Order_History userId={user.id} />}
      {params === "password" && <UpdateUserPassword />}
      {params === "userdata" && <UpdateUserData />}
    </>
  );
}

export default UserDetails;
