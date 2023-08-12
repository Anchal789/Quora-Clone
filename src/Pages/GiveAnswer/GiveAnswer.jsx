import React from "react";
import StarsOutlinedIcon from "@mui/icons-material/StarsOutlined";
import "./GiveAnswer.css";
import "../Posts/Post.css";
import "../Posts/modal.css";
import QuestionBox from "./QuestionBox";
const GiveAnswer = () => {
  

  const questions = [
    {
      id: 1,
      text: "How can I get API of any web service?",
      answers: [
        `Web services and API are both technically same. I hope your question is to get API of any website.

      In most cases, big companies are always Developer friendly. So they provide their own API access and Developer docs. This may be of either as a free services or paid services.
      
      In some cases the companies may not provide API access. In that case you can search for market places including Mashape.com to check whether an unofficial API is present by Developer. The next best source is Github where you can mostly find the required thing.
      
      If both are absent then you can either request a developer access to the company officially or create scraping tools to get the required details. Note: Check the sites tos before implementing an scraping tool.`,
        `Actually, SOAP and REST are used for the API integrations in webservices. usually API’s are used to connect the two different platforms. And JSON and XML is the schemas which is used to return the output from the REST and SOAP.`,
        `Every website may or may not have API service. If you are asking that "How to know if there is any API of that particular website" then simply google that website with "API" keyword in search. You cannot have api unless that particular website provides.`,
      ],
    },
    {
      id: 2,
      text: "Where can I make a website for a business?",
      answers: [
        `There are several platforms available to help you create a website for your business. One popular option is WordPress, which offers a user-friendly content management system and a wide range of customizable themes and plugins. Another option is Wix, a beginner-friendly website builder that simplifies the process with drag-and-drop tools and ready-made templates. Shopify specializes in creating online stores with its e-commerce-focused features. Squarespace is a popular choice for visually stunning websites, offering elegant templates and built-in SEO tools. Weebly is known for its intuitive interface and responsive design options. Evaluate the features, pricing, and ease of use of these platforms to find the best fit for your business.`,
        `There are many tools available to build website without programming knowledge.

    What kind of business you have?
    
    If you need a static content oriented website than Wordpress is best option, There are plenty of themes available you can search for a theme suitable for your business. Configuration settings are usually available with themes. You read and configure that at your own.
    
    If you have trading business and you want to make a on line selling website WoCommerce plugin for wordpress is available and also Magento is there.
    `,
      ],
    },
    {
      id: 3,
      text: "Do you want API Python software?",
      answers: [],
    },
    {
      id: 4,
      text: "Is meat consumption bad for the environment?",
      answers: [
        `Organisms eating each other is a practice that has been sustained for like a billion years.

      It’s an integral part of any ecosystem.
      
      Animals that are kept in battery farms, powered by fossil fuels, and fed on subsidized grain, that is itself grown in monocultures that depend entirely on mechanical mining and extraction of mineralized phosphate, and so on…
      Well, that kind of stuff has been around for only a short while, and can’t go on indefinitely.`,
        `Well, you are putting a bit too much pressure on yourself. Going vegetarian is helpful, but simply reducing the amount of meat you eat is already a very good step. It’s not a decisive step, not necessarily at last. You may give up meat competely and still have a very heavy carbon footprint due to what you eat, if in order to substitute meat you start eating a lot of outlandish foods such as chia, almond milk in large amount etc.`,
        `One of the main ways in which the livestock sector contributes to global warming is through deforestation caused by expansion of pasture land and arable land used to grow feedcrops. Overall, animal agriculture is responsible for about 9% of human-caused carbon dioxideemissions globally. `,
      ],
    },
  ];
  
  

  return (
    <div className="feed">
      <div className="headingDiv">
        <StarsOutlinedIcon
          style={{ backgroundColor: "#a0201c", color: "white" }}
        />
        <p>Questions for you</p>
      </div>
      <div>
        {questions.map((question, index) => (
          <QuestionBox props={question} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default GiveAnswer;
