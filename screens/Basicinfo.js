import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import LoginScreen from "react-native-login-screen";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";



export default function BasicInformation() {

  const [dateofbirth, setDateofBirth] = useState("");

  const [maritalstatus, setMaritalStatus] = useState("");

  const [howmanychildren, setHowManyChildren] = useState("");
  const [monthlyincome, setMonthlyIncome] = useState("");


  function handleSubmit(event) {

    event.preventDefault();

  }

  return (

    <div className="Login">

      <Form onSubmit={handleSubmit}>

        <Form.Group size="lg" controlId="dateofbirth">

          <Form.Label>DateofBirth</Form.Label>

          <Form.Control

            autoFocus

            type="dateofbirth"

            value={dateofbirth}

            onChange={(e) => setDateofBirth(e.target.value)}

          />

        </Form.Group>

        <Form.Group size="lg" controlId="maritalstatus">

          <Form.Label>MaritalStatus</Form.Label>

          <Form.Control

            type="maritalstatus"

            value={maritalstatus}

            onChange={(e) => setMaritalStatus(e.target.value)}

          />
        </Form.Group>

        <Form.Group size="lg" controlId="howmanychildren">

          <Form.Label>HowManyChildren</Form.Label>

          <Form.Control

            type="howmanychildren"

            value={howmanychildren}

            onChange={(e) => setHowManyChildren(e.target.value)}

          />
        </Form.Group>

        <Form.Group size="lg" controlId="monthlyincome">

          <Form.Label>MonthlyIncome</Form.Label>

          <Form.Control

            type="monthlyincome"

            value={monthlyincome}

            onChange={(e) => setMonthlyIncome(e.target.value)}

          />

        </Form.Group>

        <Button block size="lg" type="submit" disabled={!validateForm()}>

          Login

        </Button>

      </Form>

    </div>

  );

}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#485a96',
    alignItems: 'center',
    justifyContent: 'center',
  },
});