import Header from "@/Components/Header/Header";
import "./Profile.css";
import React, { useState } from "react";
import Button from "@/Components/Button/Button";
import { useNavigate } from "react-router-dom";
import BreadCrumb from "@/Components/BreadCrumb/BreadCrumb";

const Profile = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
  const allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
  const navigate =useNavigate()
  const [formData, setFormData] = useState({
    userId: currentUser.userId,
    username: currentUser.username,
    email: currentUser.email,
    password: currentUser.password,
    cart: currentUser.cart,
  });

  const handleInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedUsers = allUsers.map((user: any) => {
      if (user.userId === currentUser.userId) {
        return {
          ...user,
          username: formData.username,
          email: formData.email,
          password: formData.password,
        };
      }
      return user;
    });
    localStorage.setItem("allUsers", JSON.stringify(updatedUsers));
    localStorage.setItem(
      "currentUser",
      JSON.stringify({ ...currentUser, ...formData })
    );
  };

  //   Delete account
  const handleDeleteAccount = () => {
    const confirmation = window.confirm(
      "Are you sure you want to delete your account?"
    );
    if (confirmation) {
      const updatedUsers = allUsers.filter(
        (user: any) => user.userId !== currentUser.userId
      );
      localStorage.setItem("allUsers", JSON.stringify(updatedUsers));
      localStorage.removeItem("currentUser"); 
      navigate("/")
    }
  };

  console.log(allUsers);
  return (
    <>
      <section className="profileSection">
        <div className="headerBox">
          <Header />
        </div>
        <section className="profileMainSection">
           
          <div className="profileAll">
            <div className="profileHeader">
              <h1>Personal information</h1>
            </div>
            <div className="profileBox">
              <div className="userImg">
                <img
                  src="https://marketplace.canva.com/EAFqNrAJpQs/1/0/1600w/canva-neutral-pink-modern-circle-shape-linkedin-profile-picture-WAhofEY5L1U.jpg"
                  alt="userPhoto"
                />
              </div>
              <div className="userData">
                <form className="profileForm" onSubmit={handleEditSubmit}>
                  <div className="profileinputs">
                    {" "}
                    <label>
                      <span>Name</span>
                      <input
                        type="text"
                        value={formData.username}
                        name="username"
                        onChange={handleInputChanges}
                      />
                    </label>
                    <label>
                      <span>Surname</span>
                      <input type="text" value={"Shukurova"} />
                    </label>
                    <label>
                      <span>Email</span>
                      <input
                        type="text"
                        value={formData.email}
                        name="email"
                        onChange={handleInputChanges}
                      />
                    </label>
                    <label>
                      <span>Password</span>
                      <input
                        type="text"
                        value={formData.password}
                        name="password"
                        onChange={handleInputChanges}
                      />
                    </label>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      marginTop: "1.2rem",
                    }}
                  >
                    <Button
                      text="Save changes"
                      bgColor="rgb(253, 53, 90)"
                      color="white"
                      className="profileButton"
                    />
                    <Button
                      text="Delete account"
                      bgColor="rgb(253, 53, 90)"
                      color="white"
                      onClick={handleDeleteAccount}
                      className="profileButton"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Profile;
