/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  function genRandomDomain() {
    let pronoun = ["the", "our"];
    let adj = ["great", "big"];
    let noun = ["jogger", "racoon"];
    let domain = [".com", ".net", ".us", ".io"];
    var totalDomain = pronoun.concat(adj, noun, domain);
    let result;
    for (let i = 0; i < totalDomain.length; i++) {
      var randomPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
      var randomAdj = adj[Math.floor(Math.random() * adj.length)];
      var randomNoun = noun[Math.floor(Math.random() * noun.length)];
      var randomDomain = domain[Math.floor(Math.random() * domain.length)];
      result = randomPronoun + randomAdj + randomNoun + randomDomain;
    }
    return result;
  }
  const genDomain = () => {
    document.querySelector("#domain1").innerHTML = genRandomDomain();
    document.querySelector("#domain2").innerHTML = genRandomDomain();
    document.querySelector("#domain3").innerHTML = genRandomDomain();
  };
  genDomain();
};
