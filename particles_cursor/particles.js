
//import the particle curser
import { particlesCursor } from "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js";

const pc = particlesCursor({
  el: document.getElementById("particles"),
  gpgpuSize: 512,
  colors: [0x00fffc, 0x0000ff], 
  color: 0x138EC5,
  coordScale: 0.5,
  noiseIntensity: 0.005,
  noiseTimeCoef: 0.0001,
  pointSize: 2, 
  pointDecay: 0.0025,
  sleepRadiusX: 250,
  sleepRadiusY: 250,
  sleepTimeCoefX: 0.001,
  sleepTimeCoefY: 0.002,
});
