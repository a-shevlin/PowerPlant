import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import sunfloraImg from './img/sunflora.png';
import zombieImg from './img/zombie.png';
import {storeState, photosynthesis, setName, damage} from './js/powerplant.js';

const zombieModel = {attack: 1, health: 4};
const plant = { name: '', soil: 0, light: 0, water: 0, attack: 0, health: 0 };
//on click change

// $("#sun").text(`Light: ${newState.light}`);

$(document).ready(function() {
  let plants = [];
  let zombies = [];
  let pCounter = 1;
  let zCounter = 1;


  $("#newPlant").click(function() {
    // plant(photosynthesis(5));
    let plant1 = storeState(plant);
    plant1(setName(`plant${pCounter}`));

    let div = document.createElement('div');
    div.className = `plant${pCounter} card`;
    let img = document.createElement('img');
    img.src = sunfloraImg;
    img.id = `${plant1().name}`;
    img.addEventListener("click", () => {
      plant1(photosynthesis(1));
      console.log(plant1());
      p.innerText = `LightLvl: ${plant1().light}`;
    });
    
    let p = document.createElement('p');
    p.innerText = `LightLvl: ${plant1().light}`;
    div.append(img);
    div.append(p);
    $(".yourplant").append(div);
    pCounter++;
    console.log(pCounter);
    plants.push(plant1);
    console.log(plant1());
  });

  $("#newZombie").click(function() {
    const zombie1 = storeState(zombieModel);
    zombie1(setName(`zombie${zCounter}`));


    let div = document.createElement('div');
    div.className = `zombie${pCounter} card`;
    let img = document.createElement('img');
    img.src = zombieImg;

    img.addEventListener("click", () => {
      const damageValue = Math.floor(plants.length /3);
      zombie1(damage(-damageValue));
      console.log(zombie1());
      p.innerText = `Health: ${zombie1().health}`;
      if (zombie1().health <= 0) {
        div.remove();
      }
    });

    let p = document.createElement('p');
    p.innerText = `Health: ${zombie1().health}`;
    div.append(img);
    div.append(p);
    $(".zombies").append(div);
    zCounter++;

    zombies.push(zombie1);
    console.log(zombie1());
  });

  $("#cPlants").click(function() {
    plants.forEach((plant) => {
      console.log(plant());
    });
  });

  $("#endTurn").click(function() {
    plants.forEach((plant) => {
      plant(photosynthesis(2));
    });
  });
});