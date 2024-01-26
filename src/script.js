import './style.css'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

const svgContent = `
<svg
xmlns="http://www.w3.org/2000/svg"
xml:space="preserve"
x="0"
y="0"
data-v-5b63246b=""
preserveAspectRatio="none"
version="1.1"
class="svg"
id="diamonds-svg-id"
viewBox="0 0 2276.445 1089.431"
>
<path
  d="m967.454 371.36 93.146-2.588h155.244l93.147 2.588v338.949H967.454v-338.95"
  class="network-line"
  data-v-5b63246b=""
/>
<path
  d="M897.594 542.128 1138.222 301.5l240.628 240.628-240.628 240.628-240.628-240.628"
  class="network-line"
  data-v-5b63246b=""
/>
<path
  d="m1138.222 782.756-121.607 54.335-49.16-126.782-121.609-43.986 51.748-124.195L843.26 420.52l124.195-49.16 49.16-126.783 121.608 56.923 121.608-56.923 49.16 126.783 124.196 46.573-54.336 124.195 54.336 124.195-124.195 45.538-49.161 125.23-121.608-54.335"
  class="network-line"
  data-v-5b63246b=""
  style="visibility:hidden;"
/>
<path
  d="m1138.222 860.378-121.607-23.287-106.084-72.447-64.685-98.321-25.874-121.608 23.287-121.607 65.979-106.084 107.377-72.447 121.607-23.286 121.608 23.286 107.377 72.447 68.566 106.084 20.7 121.607-25.875 121.608-64.685 98.321-106.083 72.447-121.608 23.287"
  class="network-line"
  data-v-5b63246b=""
/>
<path
  d="M689.6666870117188,645.2833520050049L577.1148899383545,676.3321236114502L520.8389914016724,575.4236158905029L421.87103190612794,521.0882655792236L450.9792552871704,408.5364685058594L421.87103190612794,295.98467143249513L518.8984431762696,237.76822467041015L577.1148899383545,140.74081340026856L689.6666870117188,165.96794033050537L802.218484085083,140.74081340026856L860.434930847168,237.76822467041015L957.4623421173096,295.98467143249513L928.3541187362671,408.5364685058594L957.4623421173096,521.0882655792236L858.4943826217651,575.4236158905029L802.218484085083,676.3321236114502L689.6666870117188,645.2833520050049"
  class="network-line"
  style="transform:translate(217px, 0px) scale(1.335);"
  data-v-5b63246b=""
/>
<path
  d="M1138.222 787.93v144.895"
  class="network-line"
  data-v-5b63246b=""
/>
<path
  d="M967.454 710.309 861.371 816.392"
  class="network-line"
  data-v-5b63246b=""
/>
<path
  d="M895.007 544.715H750.113"
  class="network-line"
  data-v-5b63246b=""
/>
<path
  d="M970.041 371.36 866.546 270.45"
  class="network-line"
  data-v-5b63246b=""
/>
<path
  d="M1138.222 301.5V156.606"
  class="network-line"
  data-v-5b63246b=""
/>
<path
  d="m1308.99 371.36 103.496-103.496"
  class="network-line"
  data-v-5b63246b=""
/>
<path
  d="m1381.438 542.128 144.894 2.587"
  class="network-line"
  data-v-5b63246b=""
/>
<path
  d="m1308.99 710.309 105.566 108.67"
  class="network-line"
  data-v-5b63246b=""
/>
<path
  d="M750.113 544.715a388.11 388.11 0 1 0 776.219 0 388.11 388.11 0 1 0-776.22 0"
  class="network-line outer-network-line"
  data-v-5b63246b=""
/>
<path
  d="M1130.46 860.378a7.762 7.762 0 1 0 15.524 0 7.762 7.762 0 1 0-15.524 0"
  class="inner-point"
  data-v-5b63246b=""
/>
<path
  d="M1008.852 837.091a7.762 7.762 0 1 0 15.525 0 7.762 7.762 0 1 0-15.525 0"
  class="inner-point"
  data-v-5b63246b=""
/>
<path
  d="M905.357 764.644a7.762 7.762 0 1 0 15.524 0 7.762 7.762 0 1 0-15.524 0"
  class="inner-point"
  data-v-5b63246b=""
/>
<path
  d="M838.084 666.323a7.762 7.762 0 1 0 15.525 0 7.762 7.762 0 1 0-15.525 0"
  class="inner-point"
  data-v-5b63246b=""
/>
<path
  d="M812.21 544.715a7.762 7.762 0 1 0 15.525 0 7.762 7.762 0 1 0-15.525 0"
  class="inner-point"
  data-v-5b63246b=""
/>
<path
  d="M838.084 423.108a7.762 7.762 0 1 0 15.525 0 7.762 7.762 0 1 0-15.525 0"
  class="inner-point"
  data-v-5b63246b=""
/>
<path
  d="M905.357 317.024a7.762 7.762 0 1 0 15.524 0 7.762 7.762 0 1 0-15.524 0"
  class="inner-point"
  data-v-5b63246b=""
/>
<path
  d="M1008.852 247.165a7.762 7.762 0 1 0 15.525 0 7.762 7.762 0 1 0-15.525 0"
  class="inner-point"
  data-v-5b63246b=""
/>
<path
  d="M1130.46 223.878a7.762 7.762 0 1 0 15.524 0 7.762 7.762 0 1 0-15.524 0"
  class="inner-point"
  data-v-5b63246b=""
/>
<path
  d="M1252.068 252.34a7.762 7.762 0 1 0 15.524 0 7.762 7.762 0 1 0-15.524 0"
  class="inner-point"
  data-v-5b63246b=""
/>
<path
  d="M1355.564 317.024a7.762 7.762 0 1 0 15.524 0 7.762 7.762 0 1 0-15.524 0"
  class="inner-point"
  data-v-5b63246b=""
/>
<path
  d="M1425.423 420.52a7.762 7.762 0 1 0 15.525 0 7.762 7.762 0 1 0-15.525 0"
  class="inner-point"
  data-v-5b63246b=""
/>
<path
  d="M1451.297 544.715a7.762 7.762 0 1 0 15.525 0 7.762 7.762 0 1 0-15.525 0"
  class="inner-point"
  data-v-5b63246b=""
/>
<path
  d="M1422.836 666.323a7.762 7.762 0 1 0 15.524 0 7.762 7.762 0 1 0-15.524 0"
  class="inner-point"
  data-v-5b63246b=""
/>
<path
  d="M1355.564 764.644a7.762 7.762 0 1 0 15.524 0 7.762 7.762 0 1 0-15.524 0"
  class="inner-point"
  data-v-5b63246b=""
/>
<path
  d="M1252.068 837.091a7.762 7.762 0 1 0 15.524 0 7.762 7.762 0 1 0-15.524 0"
  class="inner-point"
  data-v-5b63246b=""
/>
<path
  d="M1130.46 782.756a7.762 7.762 0 1 0 15.524 0 7.762 7.762 0 1 0-15.524 0"
  class="inner-point"
  data-v-5b63246b=""
/>
<path
  d="M959.692 710.309a7.762 7.762 0 1 0 15.524 0 7.762 7.762 0 1 0-15.524 0"
  class="inner-point"
  data-v-5b63246b=""
/>
<path
  d="M889.832 544.715a7.762 7.762 0 1 0 15.525 0 7.762 7.762 0 1 0-15.525 0"
  class="inner-point"
  data-v-5b63246b=""
/>
<path
  d="M959.692 373.947a7.762 7.762 0 1 0 15.524 0 7.762 7.762 0 1 0-15.524 0"
  class="inner-point"
  data-v-5b63246b=""
/>
<path
  d="M1130.46 301.5a7.762 7.762 0 1 0 15.524 0 7.762 7.762 0 1 0-15.524 0"
  class="inner-point"
  data-v-5b63246b=""
/>
<path
  d="M1301.228 373.947a7.762 7.762 0 1 0 15.525 0 7.762 7.762 0 1 0-15.525 0"
  class="inner-point"
  data-v-5b63246b=""
/>
<path
  d="M1373.675 544.715a7.762 7.762 0 1 0 15.525 0 7.762 7.762 0 1 0-15.525 0"
  class="inner-point"
  data-v-5b63246b=""
/>
<path
  d="M1301.228 710.309a7.762 7.762 0 1 0 15.525 0 7.762 7.762 0 1 0-15.525 0"
  class="inner-point"
  data-v-5b63246b=""
/>
<path
  d="M1060.6 371.36a7.762 7.762 0 1 0 15.525 0 7.762 7.762 0 1 0-15.525 0"
  class="inner-point"
  data-v-5b63246b=""
/>
<path
  d="M1200.32 371.36a7.762 7.762 0 1 0 15.524 0 7.762 7.762 0 1 0-15.524 0"
  class="inner-point"
  data-v-5b63246b=""
/>
<path
  d="M1301.228 474.856a7.762 7.762 0 1 0 15.525 0 7.762 7.762 0 1 0-15.525 0"
  class="inner-point"
  data-v-5b63246b=""
/>
<path
  d="M1301.228 614.575a7.762 7.762 0 1 0 15.525 0 7.762 7.762 0 1 0-15.525 0"
  class="inner-point"
  data-v-5b63246b=""
/>
<path
  d="M1202.907 712.896a7.762 7.762 0 1 0 15.525 0 7.762 7.762 0 1 0-15.525 0"
  class="inner-point"
  data-v-5b63246b=""
/>
<path
  d="M1058.013 712.896a7.762 7.762 0 1 0 15.524 0 7.762 7.762 0 1 0-15.524 0"
  class="inner-point"
  data-v-5b63246b=""
/>
<path
  d="M959.692 614.575a7.762 7.762 0 1 0 15.524 0 7.762 7.762 0 1 0-15.524 0"
  class="inner-point"
  data-v-5b63246b=""
/>
<path
  d="M959.692 474.856a7.762 7.762 0 1 0 15.524 0 7.762 7.762 0 1 0-15.524 0"
  class="inner-point"
  data-v-5b63246b=""
/>
<path
  d="M698.365 544.715a439.858 439.858 0 1 0 879.715 0 439.858 439.858 0 1 0-879.715 0"
  class="outer-circle"
  data-v-5b63246b=""
/>
<circle
  r="8"
  class="movie-pointer"
  data-v-5b63246b=""
  style="
    offset-distance: 62.55%;
    filter: url('#a');
    offset-path: path(
      'M 698.365 544.715 a 439.858 439.858 0 1 0 879.715 0 a 439.858 439.858 0 1 0 -879.715 0'
    );
  "
/>
<path
  d="m967.454 446.394 98.321 15.525h144.894l98.322-15.525-15.525-23.286-103.496-14.231h-103.496l-103.496 14.23-15.524 23.287"
  class="network-line flat"
  data-v-5b63246b=""
/>
<path
  d="m982.978 423.108-67.272 33.636-97.027 82.796-6.469 14.231 1.035 11.643 1.553 12.937 49.16 36.224 15.525 2.587 25.874 5.175 77.621 10.35 77.622 10.35h155.244l77.622-10.35 77.622-10.35 25.874-5.175 15.524-2.587 49.161-36.224 1.552-12.937 1.035-11.643-6.468-14.23-97.028-82.797-67.272-33.636"
  class="network-line flat"
  data-v-5b63246b=""
/>
<path
  d="m813.245 565.414 102.461-108.67 51.748-10.35-10.35 46.573-143.859 72.447"
  class="network-line flat"
  data-v-5b63246b=""
/>
<path
  d="m1463.2 565.414-102.462-108.67-51.747-10.35 10.35 46.573 143.858 72.447"
  class="network-line flat"
  data-v-5b63246b=""
/>
<path
  d="m856.196 610.435 98.321-117.468 106.083-30.013 77.622 43.985 160.419 123.16 20.7-137.132"
  class="network-line flat"
  data-v-5b63246b=""
/>
<path
  d="m1420.249 610.435-98.321-117.468-106.084-30.013-77.622 43.985L977.804 630.1l-20.7-137.132"
  class="network-line flat"
  data-v-5b63246b=""
/>
<path
  d="M1138.222 506.94v136.096"
  class="network-line flat"
  data-v-5b63246b=""
/>
<path
  d="M959.692 446.394a7.762 7.762 0 1 0 15.524 0 7.762 7.762 0 1 0-15.524 0"
  class="inner-point flat"
  data-v-5b63246b=""
/>
<path
  d="M1058.013 461.919a7.762 7.762 0 1 0 15.524 0 7.762 7.762 0 1 0-15.524 0"
  class="inner-point flat"
  data-v-5b63246b=""
/>
<path
  d="M1202.907 461.919a7.762 7.762 0 1 0 15.525 0 7.762 7.762 0 1 0-15.525 0"
  class="inner-point flat"
  data-v-5b63246b=""
/>
<path
  d="M1301.228 446.394a7.762 7.762 0 1 0 15.525 0 7.762 7.762 0 1 0-15.525 0"
  class="inner-point flat"
  data-v-5b63246b=""
/>
<path
  d="M1130.46 506.94a7.762 7.762 0 1 0 15.524 0 7.762 7.762 0 1 0-15.524 0"
  class="inner-point flat"
  data-v-5b63246b=""
/>
<path
  d="M851.021 610.435a7.762 7.762 0 1 0 15.525 0 7.762 7.762 0 1 0-15.525 0"
  class="inner-point flat"
  data-v-5b63246b=""
/>
<path
  d="M1409.899 610.435a7.762 7.762 0 1 0 15.524 0 7.762 7.762 0 1 0-15.524 0"
  class="inner-point flat"
  data-v-5b63246b=""
/>
<path
  d="M805.483 565.414a7.762 7.762 0 1 0 15.524 0 7.762 7.762 0 1 0-15.524 0"
  class="inner-point flat"
  data-v-5b63246b=""
/>
<path
  d="M1455.437 565.414a7.762 7.762 0 1 0 15.525 0 7.762 7.762 0 1 0-15.525 0"
  class="inner-point flat"
  data-v-5b63246b=""
/>
<path
  d="M1296.054 630.1a7.762 7.762 0 1 0 15.524 0 7.762 7.762 0 1 0-15.524 0"
  class="inner-point flat"
  data-v-5b63246b=""
/>
<path
  d="M964.867 630.1a7.762 7.762 0 1 0 15.524 0 7.762 7.762 0 1 0-15.524 0"
  class="inner-point flat"
  data-v-5b63246b=""
/>
<path
  d="M1130.46 643.036a7.762 7.762 0 1 0 15.524 0 7.762 7.762 0 1 0-15.524 0"
  class="inner-point flat"
  data-v-5b63246b=""
/>
<path
  d="M949.342 492.967a7.762 7.762 0 1 0 15.525 0 7.762 7.762 0 1 0-15.525 0"
  class="inner-point flat"
  data-v-5b63246b=""
/>
<path
  d="M1311.578 492.967a7.762 7.762 0 1 0 15.524 0 7.762 7.762 0 1 0-15.524 0"
  class="inner-point flat"
  data-v-5b63246b=""
/>
<g data-v-5b63246b="">
  <circle
    r="10.35"
    class="outer-point-fill active first-point"
    data-v-5b63246b=""
    style="
      offset-distance: 0%;
      filter: url('#b');
      offset-path: path('M 1319 492 L 1138.22 503.317');
    "
  />
  <circle
    r="10.35"
    class="outer-point-fill second-point"
    data-v-5b63246b=""
    style="
      offset-distance: 0%;
      filter: url('#b');
      offset-path: path('M 956.161 492 L 972.629 630.099');
    "
  />

<circle
data-v-5b63246b=""
r="10.35"
class="outer-point-fill third-point"
style="
  offset-distance: 0%;
  filter: url('#b');
  offset-path: path('M 971 629 L 1303.82 630.099');
"
></circle>
  <circle
    r="10.35"
    class="outer-point-fill third-point"
    data-v-5b63246b=""
    style="
      offset-distance: 0%;
      filter: url('#b');
      offset-path: path('M 1138 642.088 L 813.862 472.575');
    "
  />

  <circle
  data-v-5b63246b=""
  r="10.35"
  class="outer-point-fill third-point"
  style="
    offset-distance: 0%;
    filter: url('#b');
    offset-path: path('M 1303 630 L 813.862 472.575');
    
  "
></circle>
  <circle
    r="20.699"
    class="outer-point-stroke svg-animation active first-point"
    data-v-5b63246b=""
    style="
      offset-distance: 0%;
      offset-path: path('M 1319 492 L 1138.22 503.317');
    "
  />
  <circle
    r="20.699"
    class="outer-point-stroke svg-animation second-point"
    data-v-5b63246b=""
    style="
      offset-distance: 0%;
      offset-path: path('M 956.161 492 L 972.629 630.099');
    "
  />

  <circle
    data-v-5b63246b=""
    r="20.699"
    class="outer-point-stroke svg-animation third-point"
    style="
      offset-distance: 0%;
      offset-path: path('M 971 629 L 1303.82 630.099');
    "
  ></circle>

  <circle
  r="20.699"
  class="outer-point-stroke svg-animation third-point"
  data-v-5b63246b=""
  style="
    offset-distance: 0%;
    offset-path: path('M 1138 642.088 L 813.862 472.575');
    
    
  "
/>
  <circle
    data-v-5b63246b=""
    r="20.699"
    class="outer-point-stroke svg-animation third-point"
    style="
      offset-distance: 0%;
      offset-path: path('M 1303 630 L 813.862 472.575');
    "
  ></circle>
  <text
    x="1340"
    y="256.606"
    alignment-baseline="middle"
    class="outer-point-text top-side"
    data-v-5b63246b=""
    text-anchor="middle"
  >
    درباره من
  </text>
  <text
    x="900.6666870117188"
    y="340.4542346954346"
    alignment-baseline="middle"
    class="outer-point-text left-side top-side"
    data-v-5b63246b=""
    text-anchor="middle"

  >
    راه های ارتباطی
  </text>


  <text
    x="930"
    y="700"
    alignment-baseline="middle"
    class="outer-point-text right-side top-side"
    data-v-5b63246b=""
    text-anchor="middle"
  >
    دوره های آموزشی
  </text>

  <text
  data-v-5b63246b=""
  alignment-baseline="middle"
  text-anchor="middle"
  class="outer-point-text right-side top-side"
  x="1186.87103190612794"
  y="890.0882655792236"
>
  افتخارات
</text>

  <text
  data-v-5b63246b=""
  alignment-baseline="middle"
  text-anchor="middle"
  class="outer-point-text right-side top-side"
  x="1490"
  y="692"
>
  مقالات
</text>



</g>
<filter
  id="b"
  width="200%"
  height="200%"
  x="-50%"
  y="-50%"
  data-v-5b63246b=""
>
  <feColorMatrix
    data-v-5b63246b=""
    in="offOut"
    result="matrixOut"
    type="matrix"
    values="0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0"
  />
  <feGaussianBlur
    data-v-5b63246b=""
    in="matrixOut"
    result="blurOut"
    stdDeviation="7"
  />
  <feBlend
    data-v-5b63246b=""
    in="SourceGraphic"
    in2="blurOut"
    mode="normal"
  />
</filter>
<filter
  id="a"
  width="200%"
  height="200%"
  x="-50%"
  y="-50%"
  data-v-5b63246b=""
>
  <feColorMatrix
    data-v-5b63246b=""
    in="offOut"
    result="matrixOut"
    type="matrix"
    values="0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0"
  />
  <feGaussianBlur
    data-v-5b63246b=""
    in="matrixOut"
    result="blurOut"
    stdDeviation="5"
  />
  <feBlend
    data-v-5b63246b=""
    in="SourceGraphic"
    in2="blurOut"
    mode="normal"
  />
</filter>
</svg>
`;
const svgParent = document.createElement('div');
svgParent.innerHTML = svgContent;
svgParent.classList.add("svg-wrap");
document.body.appendChild(svgParent);


/**
 * Base
 */

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Models
 */
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('/draco/')

const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)

let mixer = null


let daimondObj;

const objLoader = new OBJLoader()
var browserName = navigator.appName;
var nAgt = navigator.userAgent;
var verOffset;
var fullVersion = '' + parseFloat(navigator.appVersion);

objLoader.load('https://alireza4791.github.io/3d-daimond/dist/models/daimond/Diamond.obj', object => {
  daimondObj = object;
  daimondObj.scale.x = 0.94;
  daimondObj.scale.y = 0.94;
  daimondObj.scale.z = 0.94;
  if(window.innerWidth <= 400) {
    daimondObj.scale.x = 0.58;
    daimondObj.scale.y = 0.58;
    daimondObj.scale.z = 0.58;
  } else if(window.innerWidth > 400 && window.innerWidth <= 500) {
    daimondObj.scale.x = 0.59;
    daimondObj.scale.y = 0.59;
    daimondObj.scale.z = 0.59;
  } else if(window.innerWidth > 500 && window.innerWidth <= 600) {
    daimondObj.scale.x = 0.6;
    daimondObj.scale.y = 0.6;
    daimondObj.scale.z = 0.6;
  } else if(window.innerWidth > 600 && window.innerWidth <= 700) {
    daimondObj.scale.x = 0.54;
    daimondObj.scale.y = 0.54;
    daimondObj.scale.z = 0.54;
  }
  else if(window.innerWidth > 700 && window.innerWidth <= 991) {
    daimondObj.scale.x = 0.57;
    daimondObj.scale.y = 0.57;
    daimondObj.scale.z = 0.57;
  }

  daimondObj.rotation.x = 0.12;
  daimondObj.children[0].material = new THREE.MeshPhongMaterial({
    color: '#3c2660',
    shininess: 50,
  })
  scene.add(daimondObj)
})


let rotateDaimond = false;



/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 1)
scene.add(ambientLight)

// const firstPointLight = new THREE.PointLight(0xffffff, 1.5)
// firstPointLight.castShadow = true
// firstPointLight.shadow.mapSize.set(1024, 1024)
// firstPointLight.shadow.camera.far = 15
// firstPointLight.shadow.camera.left = - 7
// firstPointLight.shadow.camera.top = 7
// firstPointLight.shadow.camera.right = 7
// firstPointLight.shadow.camera.bottom = - 7
// firstPointLight.position.set(0, -3, 1)
// scene.add(firstPointLight)

// const secondPointLight = new THREE.PointLight(0xffffff, 1.5)
// secondPointLight.castShadow = true
// secondPointLight.shadow.mapSize.set(1024, 1024)
// secondPointLight.shadow.camera.far = 15
// secondPointLight.shadow.camera.left = - 7
// secondPointLight.shadow.camera.top = 7
// secondPointLight.shadow.camera.right = 7
// secondPointLight.shadow.camera.bottom = - 7
// secondPointLight.position.set(3.5, 3.5, 1)
// scene.add(secondPointLight)

// const thirdPointLight = new THREE.PointLight(0xffffff, 1.5)
// thirdPointLight.castShadow = true
// thirdPointLight.shadow.mapSize.set(1024, 1024)
// thirdPointLight.shadow.camera.far = 15
// thirdPointLight.shadow.camera.left = - 7
// thirdPointLight.shadow.camera.top = 7
// thirdPointLight.shadow.camera.right = 7
// thirdPointLight.shadow.camera.bottom = - 7
// thirdPointLight.position.set(-3.5, 3.5, 1)
// scene.add(thirdPointLight)

// const fourthPointLight = new THREE.PointLight(0xffffff, 1.5)
// fourthPointLight.castShadow = true
// fourthPointLight.shadow.mapSize.set(1024, 1024)
// fourthPointLight.shadow.camera.far = 15
// fourthPointLight.shadow.camera.left = - 7
// fourthPointLight.shadow.camera.top = 7
// fourthPointLight.shadow.camera.right = 7
// fourthPointLight.shadow.camera.bottom = - 7
// fourthPointLight.position.set(3.5, 0, 1)
// scene.add(fourthPointLight)

// const fithPointLight = new THREE.PointLight(0xffffff, 1.5)
// fithPointLight.castShadow = true
// fithPointLight.shadow.mapSize.set(1024, 1024)
// fithPointLight.shadow.camera.far = 15
// fithPointLight.shadow.camera.left = - 7
// fithPointLight.shadow.camera.top = 7
// fithPointLight.shadow.camera.right = 7
// fithPointLight.shadow.camera.bottom = - 7
// fithPointLight.position.set(-3.5, 0, 1)
// scene.add(fithPointLight)

const centerLight = new THREE.DirectionalLight(0xffffff, 1)
centerLight.castShadow = true
centerLight.shadow.mapSize.set(1024, 1024)
centerLight.shadow.camera.far = 15
centerLight.shadow.camera.left = - 7
centerLight.shadow.camera.top = 7
centerLight.shadow.camera.right = 7
centerLight.shadow.camera.bottom = - 7
centerLight.position.set(0, 1, 1)
scene.add(centerLight)



/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

const resize = () => {

  // Update sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  // Update camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  // Update renderer
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}
window.addEventListener('resize', () => {
  resize();
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0, 0, 2.2)
scene.add(camera)


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
  alpha: true,
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()
let previousTime = 0

const tick = () => {
  const elapsedTime = clock.getElapsedTime()
  const deltaTime = elapsedTime - previousTime
  previousTime = elapsedTime
  if (daimondObj) {
    daimondObj.rotation.y += deltaTime / 5.5;
    if (rotateDaimond && daimondObj.rotation.x <= 1.52) {
      daimondObj.rotation.x += deltaTime / 1.4;
    }
  }

  // Model animation
  if (mixer) {
    mixer.update(deltaTime)
  }

  // Render
  renderer.render(scene, camera)

  // Call tick again on the next frame
  window.requestAnimationFrame(tick)
}

tick()


window.addEventListener("load", () => {
  resize();
  let pointerCircles = document.querySelectorAll(".outer-point-stroke");
  let pointerTexts = document.querySelectorAll(".outer-point-text");
  let greenPointer = document.querySelector(".movie-pointer");
  let smallerPoints = document.querySelectorAll(".outer-point-fill");
  let networkLines = document.querySelectorAll(".network-line");
  let fullyOpenSvg = false;
  let menuOptionIndex = 0;
  let menuChangeTimeout;

  const menuOptionHover = (circle, index) => {

    if (fullyOpenSvg) {
      menuOptionIndex = index;
      pointerCircles.forEach(c => {
        c.classList.remove("svg-animation")
        void c.offsetWidth;
        setTimeout(() => {
          c.classList.add("svg-animation")
        }, 100);
      })

      clearTimeout(menuChangeTimeout);
      menuChangeTimeout = setTimeout(() => {
        if (pointerCircles.length - 1 === menuOptionIndex) {
          menuOptionIndex = 0;
        } else {
          menuOptionIndex++;
        }
        menuOptionHover(pointerCircles[menuOptionIndex], menuOptionIndex)
      }, 5500)


      switch (index) {
        case 0:
          greenPointer.style.offsetDistance = "62.55%";
          break;
        case 1:
          greenPointer.style.offsetDistance = "87.5%";
          break;
        case 2:
          greenPointer.style.offsetDistance = "6.5%";
          break;
        case 3:
          greenPointer.style.offsetDistance = "24.97%";
          break;
        case 4:
          greenPointer.style.offsetDistance = "43.6%";

          break;
        default:
          break;
      }

      pointerCircles.forEach((c, i) => {
        if (i !== index) {
          c.classList.remove("active");
        }
      });
      smallerPoints.forEach((point, i) => {
        if (i !== index) {
          point.classList.remove("active");
        }
      })
      pointerTexts.forEach((text, i) => {
        if (i !== index) {
          text.classList.remove("active");
        }
      })
      pointerTexts[index].classList.add("active");
      circle.classList.add("active");
      smallerPoints[index].classList.add("active");
    }
  }
  const menuOptionClickHandler = (index) => {
    switch (index) {
      case 0:
        window.location.href = window.location.href + "about-us";
        break;
      case 1:
        window.location.href = window.location.href + "contact";
        break;
      case 2:
        window.location.href = window.location.href + "courses";
        break;
      case 3:
        window.location.href = window.location.href + "certificates";
        break;
      case 4:
        window.location.href = window.location.href + "articles";
        break;
      default:
        break;
    }
  }

  pointerCircles.forEach((circle, index) => {
    circle.addEventListener("click", () => {
      menuOptionClickHandler(index)
    })
    circle.addEventListener("mouseover", () => {
      menuOptionHover(circle, index)
    });
    circle.addEventListener("touchmove", () => {
      menuOptionHover(circle, index)
    });
  });

  pointerTexts.forEach((text, index) => {
    text.addEventListener("click", () => {
      menuOptionClickHandler(index)
    });
  })


  networkLines.forEach((nl) => {
    if (nl.classList.contains("flat")) {
      nl.classList.add("show");
    }
  });
  document.querySelectorAll(".inner-point").forEach((ip) => {
    if (ip.classList.contains("flat")) {
      ip.classList.add("show");
    }
  });


  setTimeout(() => {
    rotateDaimond = true;
    menuChangeTimeout = setTimeout(() => {
      if (pointerCircles.length - 1 === menuOptionIndex) {
        menuOptionIndex = 0;
      } else {
        menuOptionIndex++;
      }
      menuOptionHover(pointerCircles[menuOptionIndex], menuOptionIndex)
    }, 5500)
    document.querySelector('#diamonds-svg-id[data-v-5b63246b]').classList.add("open");
    // document.querySelector('.canvas-wrap > img').style.opacity = '1';
    fullyOpenSvg = true;
    smallerPoints.forEach((opf) => {
      opf.classList.add("show");
    });
    networkLines.forEach((nl) => {
      if (!nl.classList.contains("flat")) {
        nl.classList.add("show");
      } else {
        nl.classList.remove("show");
      }
    });
    document.querySelectorAll(".inner-point").forEach((ip) => {
      if (!ip.classList.contains("flat")) {
        ip.classList.add("show");
      } else {
        ip.classList.remove("show");
      }
    });
    document.querySelectorAll(".outer-point-stroke").forEach((ops) => {
      ops.classList.add("show");
    });
    pointerTexts.forEach((ops) => {
      ops.classList.add("show");
    });
    document.querySelector(".outer-circle").classList.add("show");
    greenPointer.classList.add("active");
    pointerTexts[0].classList.add("active");
    pointerCircles[0].style.offsetPath =
      "path('M 1410 270.454 L 684.667 377.488')";
    smallerPoints[0].style.offsetPath =
      "path('M 1410 270.454 L 684.667 377.488')";
    pointerCircles[1].style.offsetPath =
      "path('M 860 260 L 689.667 377.488')";
    smallerPoints[1].style.offsetPath =
      "path('M 860 260 L 689.667 377.488')";
    pointerCircles[2].style.offsetPath =
      "path('M 781 698.088 L 813.862 472.575')";
    smallerPoints[2].style.offsetPath =
      "path('M 781 698.088 L 813.862 472.575')";
    pointerCircles[3].style.offsetPath =
      "path('M 1138 932 L 565.472 472.575')";
    smallerPoints[3].style.offsetPath =
      "path('M 1138 932 L 565.472 472.575')";
      pointerCircles[4].style.offsetPath =
      "path('M 1492.402 696 L 813.862 472.575')";
    smallerPoints[4].style.offsetPath =
      "path('M 1492.402 696 L 813.862 472.575')";
  }, 3500);



  setTimeout(() => {
    rotateDaimond = false;
  }, 5650)
});
