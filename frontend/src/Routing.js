import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Base from "./components/core/Base";
import Nav from "./components/core/Nav";
import Job from "./components/jobComponents/jobUtil/Job";
import Jobs from "./components/jobComponents/jobUtil/Jobs";
import JobCard from "./components/jobComponents/jobUtil/JobCard";
import UpdateJobForm from "./components/jobComponents/jobCreator/UpdateJobForm";
import UserProfile from "./components/userComponent/Auth/UserProfile";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          {/* <Route path="" element={<App />} />
          <Route path="base" element={<Base />} />
          <Route path="Nav" element={<Nav />} /> */}
        </Route>
        <Route path="/job" element={<Job />} />
        <Route path="/allJobs" element={<Jobs />} />
        <Route path="/oneJob" element={<JobCard />} />
        <Route path="/updateJob" element={<UpdateJobForm />} />
        <Route path="/myProfile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
