import React from "react";
import profilePic from "../assets/images/rajon.jpg";
const Profile = () => {
  return (
    <>
      <section class="container mt-3">
        <h1 className="mb-3">My Profile</h1>
        <div class="row row-cols-1 row-cols-md-12 row-cols-lg-3 g-4 justify-content-center mt-5">
          <div class="col justify-content-center">
            <div class="card  h-100 p-3 rounded-3">
              <img
                src={profilePic}
                class="card-img-top w-50 h-50 mx-auto mt-3 rounded-circle"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text text-start">Istiak Ahmed</p>
                <p class="us fw-bold text-start">Mobile: 01754956909</p>
                <p class="fw-bold text-start">
                  Email: istiakahmed104127@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
