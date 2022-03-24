import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};


function SimpleForm() {

  const config = {
    width: "300px",
    height: "400px",
    floating: true
  };
  
    return (
      <ThemeProvider theme={theme}>
      <ChatBot 
       steps={[
         {
            id:'intro', 
            message:'Hello. Welcome to SheGrows!!!', 
            trigger:'Ask_name',
           },
           {
            id:'Ask_name', 
            message:'Please Enter your name ?', 
            trigger:'userIn',
           },
           {
            id:'userIn',  
            user: true,
            trigger:'Greet',
           },
           {
            id:'Greet',  
            message:'Hi {previousValue}, Glad to know you !!',
            trigger:'Ask_quest',
           },
           {
            id:'Ask_quest', 
            message:'What do u want to check here ?', 
            trigger:'questn',
           },
           {
            id:'questn', 
            options:[
                {value:'t', label:'Tax Related Query', trigger:'tax'},
                {value:'s', label:'Savings Schemes Related Query', trigger:'scheme'},
                {value:'e', label:'Exit', trigger:'exit'},
                ],
           },
           {
            id:'tax', 
            options:[
              {value:'c', label:'Section Under 80 C', trigger:'tax'},
              {value:'d', label:'Section Under 80 CCD', trigger:'tax'},
              {value:'b', label:'Go Back', trigger:'back'},
              ], 
          },
          {
            id:'scheme', 
            options:[
              {value:'c', label:'Long Term Plans', trigger:'scheme'},
              {value:'d', label:'Equity Fund', trigger:'scheme'},
              {value:'d', label:'Debt Fund', trigger:'scheme'},
              {value:'d', label:'Short Term Fund', trigger:'scheme'},
              {value:'d', label:'Ultra Short Term Fund', trigger:'scheme'},
              {value:'d', label:'Gold Saving', trigger:'scheme'},
              {value:'b', label:'Go Back', trigger:'back'},
              ], 
          },
          {
            id:'back', 
            message:'Ok', 
            trigger:'questn',
          },
          {
            id:'exit', 
            message:'Thank You ! Visit Again.', 
            end:true,
          },
         ]}
      />
        </ThemeProvider>
    );
  
       
}

export default SimpleForm;
