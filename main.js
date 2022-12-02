import "./style.css";
import World from "./three/World";

const container = document.getElementById("app");
const newWorld = new World(container);

newWorld.initiate("it is what it is");
