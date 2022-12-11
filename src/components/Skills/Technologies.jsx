import React from "react";
import js from "../../assets/skills/js.png";
import react from "../../assets/skills/reactjs.png";
import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import node from "../../assets/skills/node.jpg";
import mongo from "../../assets/skills/mongodb.png";

const Technologies = () => {
  return (
    <div id="technologies">
      <section className="bg-gray-800 text-gray-100">
        <div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
          <h2 className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center">
            Technologies
          </h2>
          <div className="flex flex-wrap justify-center lg:justify-between">
            <div className="js">
              <img src={js} alt="" className="h-20" />
              <p>JavaScript</p>
            </div>
            <div className="React">
              <img src={react} alt="" className="h-20" />
              <p>JavaScript</p>
            </div>
            <div className="node">
              <img src={node} alt="" className="h-20" />
              <p>Node.js</p>
            </div>
            <div className="mongodb mt-5 md:mt-0">
              <img src={mongo} alt="" className="h-20" />
              <p>MongoDb</p>
            </div>
            <div className="html mt-5 md:mt-0">
              <img src={html} alt="" className="h-20" />
              <p>HTML</p>
            </div>
            <div className="css mt-5 md:mt-0">
              <img src={css} alt="" className="h-20" />
              <p>CSS</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technologies;
