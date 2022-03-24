import React ,{useState}  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import LoginScreen from "react-native-login-screen";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";



export default function SpendingTracker() {

  const [salary, setSalary] = useState("");

  const [education, setEducation] = useState("");

const [fuel, setFuel] = useState("");
const [Shopping, setShopping] = useState("");
 const [kids, setKids] = useState("");
const [travel, setTravel] = useState("");
const [Shopping, setShopping] = useState("");
 const [entertainment, setEntertainment] = useState("");
const [amountcanbesaved, setAmountCanBeSaved] = useState("");
  function handleSubmit(event) {

    event.preventDefault();

  }

  return (

    <div className="SpendingTracker">

      <Form onSubmit={handleSubmit}>

        <Form.Group size="lg" controlId="salary">

          <Form.Label>Salary</Form.Label>

          <Form.Control

            autoFocus

            type="salary"

            value={salary}

            onChange={(e) => setSalary(e.target.value)}

          />

        </Form.Group>

        <Form.Group size="lg" controlId="education">

          <Form.Label>Education</Form.Label>

          <Form.Control

            type="education"

            value={education}

            onChange={(e) => setEducation(e.target.value)}

          />
</Form.Group>

        <Form.Group size="lg" controlId="fuel">

          <Form.Label>Fuel</Form.Label>

          <Form.Control

            type="fuel"

            value={fuel}

            onChange={(e) => setFuel(e.target.value)}

          />
</Form.Group>

        <Form.Group size="lg" controlId="shopping">

          <Form.Label>Shopping</Form.Label>

          <Form.Control

            type="shopping"

            value={shopping}

            onChange={(e) => setShopping(e.target.value)}

          />
</Form.Group>

        <Form.Group size="lg" controlId="kids">

          <Form.Label>Kids</Form.Label>

          <Form.Control

            type="kids"

            value={kids}

            onChange={(e) => setKids(e.target.value)}

          />
</Form.Group>

        <Form.Group size="lg" controlId="travel">

          <Form.Label>Travel</Form.Label>

          <Form.Control

            type="travel"

            value={travel}

            onChange={(e) => setTravel(e.target.value)}

          />
</Form.Group>

        <Form.Group size="lg" controlId="entertainment">

          <Form.Label>Entertainment</Form.Label>

          <Form.Control

            type="entertainment"

            value={entertainment}

            onChange={(e) => setentertainment(e.target.value)}

          />
</Form.Group>

        <Form.Group size="lg" controlId="amountcanbesaved">

          <Form.Label>AmountCanBeSaved</Form.Label>

          <Form.Control

            type="amountcanbesaved"

            value={amountcanbesaved}

            onChange={(e) => setAmountCanBeSaved(e.target.value)}

          />

        </Form.Group>

        <Button block size="lg" type="SeeRecomendations" disabled={!validateForm()}>

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