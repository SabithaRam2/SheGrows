
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OtpInputs from 'react-native-otp-inputs';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Otp from './screens/Otp';
import Homepage from './screens/Homepage';
import Profile from './screens/Basicinfo';
import Money from './screens/Money';
import FAQ from './screens/FAQ';
import Story from './screens/Stories';
import Blogs from './screens/Blogs';
import Portfolio from './screens/Portfolio';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



export default function App() {

  return (
    <>            <Router>
      < Routes>
        <Route exact path="/"
          element={<Signup />} />

        <Route exact path="/login"
          element={<Login />} />
        <Route exact path="/otp"
          element={<Otp />} />
        <Route exact path="/home"
          element={<Homepage />} />
        <Route exact path="/profile"
          element={<Profile />} />
        <Route exact path="/Money"
          element={<Money />} />
        <Route exact path="/FAQ"
          element={<FAQ />} />
        <Route exact path="/Story"
          element={<Story />} />
        <Route exact path="/Blogs"
          element={<Blogs />} />
        <Route exact path="/Portfolio"
          element={<Portfolio />} />
      </Routes>
    </Router>
    </>
  );
}

