import React from "react";
import { UserAuth } from "../context/AuthContext";

import { Link, Outlet } from "react-router-dom";
import "./membertwo.css";

// import MemberTwoSub from "./components/MemberTwoSub";
// import MemberTwoSub2 from "./components/MemberTwoSub2";

function Search() {
  const { user } = UserAuth();
  return (
    <div className="choose">
      <div className="choose2">
        <h1>Choosing and Instructing a Babysitter</h1>
        <br />

        <h2>Finding a qualified babysitter takes time and effort. But your reward is knowing that your child is in capable hands. You'll want to find someone who is mature and friendly, has common sense, and is genuinely fond of children.</h2>
        <br />

        <h3>The recommendations of people you know and trust are your best bet for finding a reliable and capable babysitter.

        </h3>

      </div>


      {/* nested routes */}
      <nav>
        <Link to="membertwosub">For Parents</Link>
        <Link to="membertwosub2">For Babysitter</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default Search;
