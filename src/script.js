import './style.css'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

const svgContent = `    <svg
data-v-5b63246b=""
version="1.1"
id="diamonds-svg-id"
xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
x="0px"
y="0px"
viewBox="0 0 1379.3333740234375 817.0729370117188"
xml:space="preserve"
preserveAspectRatio="none"
>
<path
  data-v-5b63246b=""
  d="M561.5905041351318,278.5197374038696L631.4502402496338,276.5791891784668L747.8831337738037,276.5791891784668L817.7428698883057,278.5197374038696L817.7428698883057,532.7315549316406L561.5905041351318,532.7315549316406L561.5905041351318,278.5197374038696"
  class="network-line"
></path>
<path
  data-v-5b63246b=""
  d="M509.1957020492554,406.59592028045654L689.6666870117188,226.1249353179932L870.1376719741821,406.59592028045654L689.6666870117188,587.0669052429199L509.1957020492554,406.59592028045654"
  class="network-line"
></path>
<path
  data-v-5b63246b=""
  d="M689.6666870117188,587.0669052429199L598.4609204177857,627.8184179763794L561.5905041351318,532.7315549316406L470.3847375411988,499.7422350997925L509.1957020492554,406.59592028045654L468.44418931579594,315.39015368652343L561.5905041351318,278.5197374038696L598.4609204177857,183.4328743591309L689.6666870117188,226.1249353179932L780.8724536056518,183.4328743591309L817.7428698883057,278.5197374038696L910.8891847076416,313.4496054611206L870.1376719741821,406.59592028045654L910.8891847076416,499.7422350997925L817.7428698883057,533.8958838668823L780.8724536056518,627.8184179763794L689.6666870117188,587.0669052429199"
  class="network-line"
></path>
<path
  data-v-5b63246b=""
  d="M689.6666870117188,645.2833520050049L598.4609204177857,627.8184179763794L518.8984431762696,573.4830676651001L470.3847375411988,499.7422350997925L450.9792552871704,408.5364685058594L468.44418931579594,317.33070191192627L517.9281690635681,237.76822467041015L598.4609204177857,183.4328743591309L689.6666870117188,165.96794033050537L780.8724536056518,183.4328743591309L861.4052049598694,237.76822467041015L912.8297329330444,317.33070191192627L928.3541187362671,408.5364685058594L908.9486364822387,499.7422350997925L860.434930847168,573.4830676651001L780.8724536056518,627.8184179763794L689.6666870117188,645.2833520050049"
  class="network-line"
></path>
<path
  data-v-5b63246b=""
  d="M689.6666870117188,645.2833520050049L577.1148899383545,676.3321236114502L520.8389914016724,575.4236158905029L421.87103190612794,521.0882655792236L450.9792552871704,408.5364685058594L421.87103190612794,295.98467143249513L518.8984431762696,237.76822467041015L577.1148899383545,140.74081340026856L689.6666870117188,165.96794033050537L802.218484085083,140.74081340026856L860.434930847168,237.76822467041015L957.4623421173096,295.98467143249513L928.3541187362671,408.5364685058594L957.4623421173096,521.0882655792236L858.4943826217651,575.4236158905029L802.218484085083,676.3321236114502L689.6666870117188,645.2833520050049"
  class="network-line"
></path>
<path
  data-v-5b63246b=""
  d="M689.6666870117188,590.9480016937256L689.6666870117188,699.6187023162842"
  class="network-line"
></path>
<path
  data-v-5b63246b=""
  d="M561.5905041351318,532.7315549316406L482.0280268936157,612.2940321731568"
  class="network-line"
></path>
<path
  data-v-5b63246b=""
  d="M507.25515382385254,408.5364685058594L398.58445320129397,408.5364685058594"
  class="network-line"
></path>
<path
  data-v-5b63246b=""
  d="M563.5310523605347,278.5197374038696L485.90912334442135,202.83835661315916"
  class="network-line"
></path>
<path
  data-v-5b63246b=""
  d="M689.6666870117188,226.1249353179932L689.6666870117188,117.4542346954346"
  class="network-line"
></path>
<path
  data-v-5b63246b=""
  d="M817.7428698883057,278.5197374038696L895.364798904419,200.89780838775633"
  class="network-line"
></path>
<path
  data-v-5b63246b=""
  d="M872.078220199585,406.59592028045654L980.7489208221435,408.5364685058594"
  class="network-line"
></path>
<path
  data-v-5b63246b=""
  d="M817.7428698883057,532.7315549316406L896.9172374847412,614.2345803985596"
  class="network-line"
></path>
<path
  data-v-5b63246b=""
  d="M 398.58445320129397, 408.5364685058594a 291.0822338104248,291.0822338104248 0 1,0 582.1644676208496,0a 291.0822338104248,291.0822338104248 0 1,0 -582.1644676208496,0"
  class="network-line"
></path>
<path
  data-v-5b63246b=""
  d="M 683.8450423355102, 645.2833520050049a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point"
></path>
<path
  data-v-5b63246b=""
  d="M 592.6392757415772, 627.8184179763794a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point"
></path>
<path
  data-v-5b63246b=""
  d="M 515.0173467254639, 573.4830676651001a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point"
></path>
<path
  data-v-5b63246b=""
  d="M 464.56309286499027, 499.7422350997925a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point"
></path>
<path
  data-v-5b63246b=""
  d="M 445.1576106109619, 408.5364685058594a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point"
></path>
<path
  data-v-5b63246b=""
  d="M 464.56309286499027, 317.33070191192627a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point"
></path>
<path
  data-v-5b63246b=""
  d="M 515.0173467254639, 237.76822467041015a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point"
></path>
<path
  data-v-5b63246b=""
  d="M 592.6392757415772, 185.37342258453373a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point"
></path>
<path
  data-v-5b63246b=""
  d="M 683.8450423355102, 167.9084885559082a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point"
></path>
<path
  data-v-5b63246b=""
  d="M 775.0508089294433, 189.25451903533937a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point"
></path>
<path
  data-v-5b63246b=""
  d="M 852.6727379455566, 237.76822467041015a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point"
></path>
<path
  data-v-5b63246b=""
  d="M 905.067540031433, 315.39015368652343a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point"
></path>
<path
  data-v-5b63246b=""
  d="M 924.4730222854614, 408.5364685058594a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point"
></path>
<path
  data-v-5b63246b=""
  d="M 903.1269918060302, 499.7422350997925a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point"
></path>
<path
  data-v-5b63246b=""
  d="M 852.6727379455566, 573.4830676651001a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point"
></path>
<path
  data-v-5b63246b=""
  d="M 775.0508089294433, 627.8184179763794a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point"
></path>
<path
  data-v-5b63246b=""
  d="M 683.8450423355102, 587.0669052429199a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point"
></path>
<path
  data-v-5b63246b=""
  d="M 555.7688594589233, 532.7315549316406a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point"
></path>
<path
  data-v-5b63246b=""
  d="M 503.37405737304687, 408.5364685058594a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point"
></path>
<path
  data-v-5b63246b=""
  d="M 555.7688594589233, 280.46028562927245a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point"
></path>
<path
  data-v-5b63246b=""
  d="M 683.8450423355102, 226.1249353179932a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point"
></path>
<path
  data-v-5b63246b=""
  d="M 811.9212252120972, 280.46028562927245a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point"
></path>
<path
  data-v-5b63246b=""
  d="M 866.2565755233765, 408.5364685058594a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point"
></path>
<path
  data-v-5b63246b=""
  d="M 811.9212252120972, 532.7315549316406a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point"
></path>
<path
  data-v-5b63246b=""
  d="M 631.4502402496338, 278.5197374038696a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point"
></path>
<path
  data-v-5b63246b=""
  d="M 736.2398444213867, 278.5197374038696a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point"
></path>
<path
  data-v-5b63246b=""
  d="M 811.9212252120972, 356.1416664199829a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point"
></path>
<path
  data-v-5b63246b=""
  d="M 811.9212252120972, 460.9312705917358a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point"
></path>
<path
  data-v-5b63246b=""
  d="M 738.1803926467895, 534.6721031570435a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point"
></path>
<path
  data-v-5b63246b=""
  d="M 629.509692024231, 534.6721031570435a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point"
></path>
<path
  data-v-5b63246b=""
  d="M 555.7688594589233, 460.9312705917358a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point"
></path>
<path
  data-v-5b63246b=""
  d="M 555.7688594589233, 356.1416664199829a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point"
></path>
<path
  data-v-5b63246b=""
  d="M 359.7734886932373, 408.5364685058594a 329.89319831848144,329.89319831848144 0 1,0 659.7863966369629,0a 329.89319831848144,329.89319831848144 0 1,0 -659.7863966369629,0"
  class="outer-circle"
></path>
<circle
  data-v-5b63246b=""
  r="8"
  class="movie-pointer"
  style="
    offset-distance: 62.55%;
    filter: url('#dropshadow2');
    offset-path: path(
      'M 359.773 408.536 a 329.893 329.893 0 1 0 659.786 0 a 329.893 329.893 0 1 0 -659.786 0'
    );
  "
></circle>
<path
  data-v-5b63246b=""
  d="M561.5905041351318,334.79563594055173L635.3313367004395,346.43892529296875L744.002037322998,346.43892529296875L817.7428698883057,334.79563594055173L806.0995805358887,317.33070191192627L728.4776515197753,306.6576866722107L650.8557225036622,306.6576866722107L573.2337934875488,317.33070191192627L561.5905041351318,334.79563594055173"
  class="network-line flat"
></path>
<path
  data-v-5b63246b=""
  d="M573.2337934875488,317.33070191192627L522.7795396270752,342.5578288421631L450.008981174469,404.6553720550537L445.1576106109619,415.3283872947693L445.9338299011231,424.06085430908206L447.09815883636475,433.7635954360962L483.9685751190185,460.9312705917358L495.6118644714355,462.87181881713866L515.0173467254639,466.75291526794433L573.2337934875488,474.5151081695557L631.4502402496338,482.277301071167L689.6666870117188,482.277301071167L747.8831337738037,482.277301071167L806.0995805358887,474.5151081695557L864.3160272979736,466.75291526794433L883.721509552002,462.87181881713866L895.364798904419,460.9312705917358L932.2352151870728,433.7635954360962L933.3995441223144,424.06085430908206L934.1757634124756,415.3283872947693L929.3243928489685,404.6553720550537L856.5538343963623,342.5578288421631L806.0995805358887,317.33070191192627"
  class="network-line flat"
></path>
<path
  data-v-5b63246b=""
  d="M445.9338299011231,424.06085430908206L522.7795396270752,342.5578288421631L561.5905041351318,334.79563594055173L553.8283112335205,369.7255039978027L445.9338299011231,424.06085430908206"
  class="network-line flat"
></path>
<path
  data-v-5b63246b=""
  d="M933.3995441223144,424.06085430908206L856.5538343963623,342.5578288421631L817.7428698883057,334.79563594055173L825.505062789917,369.7255039978027L933.3995441223144,424.06085430908206"
  class="network-line flat"
></path>
<path
  data-v-5b63246b=""
  d="M478.14693044281006,457.82639343109133L551.8877630081176,369.7255039978027L631.4502402496338,347.21514458312987L689.6666870117188,380.204464414978L809.9806769866943,472.57455994415284L825.505062789917,369.7255039978027"
  class="network-line flat"
></path>
<path
  data-v-5b63246b=""
  d="M901.1864435806274,457.82639343109133L827.4456110153199,369.7255039978027L747.8831337738037,347.21514458312987L689.6666870117188,380.204464414978L569.3526970367432,472.57455994415284L553.8283112335205,369.7255039978027"
  class="network-line flat"
></path>
<path
  data-v-5b63246b=""
  d="M689.6666870117188,380.204464414978L689.6666870117188,482.277301071167"
  class="network-line flat"
></path>
<path
  data-v-5b63246b=""
  d="M 555.7688594589233, 334.79563594055173a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point flat"
></path>
<path
  data-v-5b63246b=""
  d="M 629.509692024231, 346.43892529296875a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point flat"
></path>
<path
  data-v-5b63246b=""
  d="M 738.1803926467895, 346.43892529296875a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point flat"
></path>
<path
  data-v-5b63246b=""
  d="M 811.9212252120972, 334.79563594055173a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point flat"
></path>
<path
  data-v-5b63246b=""
  d="M 683.8450423355102, 380.204464414978a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point flat"
></path>
<path
  data-v-5b63246b=""
  d="M 474.2658339920044, 457.82639343109133a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point flat"
></path>
<path
  data-v-5b63246b=""
  d="M 893.424250679016, 457.82639343109133a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point flat"
></path>
<path
  data-v-5b63246b=""
  d="M 440.1121852249146, 424.06085430908206a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point flat"
></path>
<path
  data-v-5b63246b=""
  d="M 927.5778994461059, 424.06085430908206a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point flat"
></path>
<path
  data-v-5b63246b=""
  d="M 808.0401287612915, 472.57455994415284a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point flat"
></path>
<path
  data-v-5b63246b=""
  d="M 559.649955909729, 472.57455994415284a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point flat"
></path>
<path
  data-v-5b63246b=""
  d="M 683.8450423355102, 482.277301071167a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point flat"
></path>
<path
  data-v-5b63246b=""
  d="M 548.006666557312, 369.7255039978027a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point flat"
></path>
<path
  data-v-5b63246b=""
  d="M 819.6834181137085, 369.7255039978027a 5.8216446762084955,5.8216446762084955 0 1,0 11.643289352416991,0a 5.8216446762084955,5.8216446762084955 0 1,0 -11.643289352416991,0"
  class="inner-point flat"
></path>
<g data-v-5b63246b="">
    <circle
    data-v-5b63246b=""
    r="7.7621929016113285"
    class="outer-point-fill active first-point"
    style="
    offset-distance: 0%;
    filter: url('#dropshadow');
    offset-path: path('M 554 369 L 689.667 377.488');
    "
    ></circle>
  <circle
    data-v-5b63246b=""
    r="7.7621929016113285"
    class="outer-point-fill second-point"
    style="
      offset-distance: 0%;
      filter: url('#dropshadow');
      offset-path: path('M 568 473 L 565.472 472.575');
    "
  ></circle>
  <circle
    data-v-5b63246b=""
    r="7.7621929016113285"
    class="outer-point-fill first-point"
    style="
      offset-distance: 0%;
      filter: url('#dropshadow');
      offset-path: path('M 825 369 L 689.667 377.488');
    "
  ></circle>


  <circle
    data-v-5b63246b=""
    r="7.7621929016113285"
    class="outer-point-fill third-point"
    style="
      offset-distance: 0%;
      filter: url('#dropshadow');
      offset-path: path('M 689.462 482.088 L 813.862 472.575');
    "
  ></circle>
  <circle
    data-v-5b63246b=""
    r="7.7621929016113285"
    class="outer-point-fill third-point"
    style="
      offset-distance: 0%;
      filter: url('#dropshadow');
      offset-path: path('M 813.462 472.088 L 813.862 472.575');
    "
  ></circle>
  <circle
  data-v-5b63246b=""
  r="15.524385803222657"
  class="outer-point-stroke active svg-animation first-point"
  style="
    offset-distance: 0%;
    offset-path: path('M 825 369 L 689.667 377.488');
  "
></circle>
  <circle
  data-v-5b63246b=""
  r="15.524385803222657"
  class="outer-point-stroke svg-animation first-point"
  style="
    offset-distance: 0%;
    offset-path: path('M 554 369 L 689.667 377.488');
  "
></circle>
  <circle
    data-v-5b63246b=""
    r="15.524385803222657"
    class="outer-point-stroke svg-animation second-point"
    style="
      offset-distance: 0%;
      offset-path: path('M 568 473 L 565.472 472.575');
    "
  ></circle>


  <circle
    data-v-5b63246b=""
    r="15.524385803222657"
    class="outer-point-stroke svg-animation third-point"
    style="
      offset-distance: 0%;
      offset-path: path('M 813.462 472.088 L 813.862 472.575');
    "
  ></circle>
  <circle
    data-v-5b63246b=""
    r="15.524385803222657"
    class="outer-point-stroke svg-animation third-point"
    style="
      offset-distance: 0%;
      offset-path: path('M 689.462 482.088 L 813.862 472.575');
    "
  ></circle>
  

  <text
    data-v-5b63246b=""
    alignment-baseline="middle"
    text-anchor="middle"
    class="outer-point-text top-side"
    x="869.6666870117188"
    y="200.4542346954346"
  >
    درباره من
  </text>

  <text
  data-v-5b63246b=""
  alignment-baseline="middle"
  text-anchor="middle"
  class="outer-point-text top-side"
  x="530.6666870117188"
  y="200.4542346954346"
>
  راه‌های ارتباطی
</text>
<text
data-v-5b63246b=""
alignment-baseline="middle"
text-anchor="middle"
class="outer-point-text left-side top-side"
x="491.87103190612794"
y="426.0882655792236"
>
دوره‌های آموزشی
</text>
<text
data-v-5b63246b=""
alignment-baseline="middle"
text-anchor="middle"
class="outer-point-text right-side top-side"
x="715"
y="700"
>
افتخارات
</text>
  <text
    data-v-5b63246b=""
    alignment-baseline="middle"
    text-anchor="middle"
    class="outer-point-text right-side top-side"
    x="957.4623421173096"
    y="521.0882655792236"
  >
    مقالات
  </text>


</g>
<filter
  data-v-5b63246b=""
  id="dropshadow"
  x="-50%"
  y="-50%"
  width="200%"
  height="200%"
>
  <feColorMatrix
    data-v-5b63246b=""
    result="matrixOut"
    in="offOut"
    type="matrix"
    values="0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0"
  ></feColorMatrix>
  <feGaussianBlur
    data-v-5b63246b=""
    result="blurOut"
    in="matrixOut"
    stdDeviation="7"
  ></feGaussianBlur>
  <feBlend
    data-v-5b63246b=""
    in="SourceGraphic"
    in2="blurOut"
    mode="normal"
  ></feBlend>
</filter>
<filter
  data-v-5b63246b=""
  id="dropshadow2"
  x="-50%"
  y="-50%"
  width="200%"
  height="200%"
>
  <feColorMatrix
    data-v-5b63246b=""
    result="matrixOut"
    in="offOut"
    type="matrix"
    values="0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0"
  ></feColorMatrix>
  <feGaussianBlur
    data-v-5b63246b=""
    result="blurOut"
    in="matrixOut"
    stdDeviation="5"
  ></feGaussianBlur>
  <feBlend
    data-v-5b63246b=""
    in="SourceGraphic"
    in2="blurOut"
    mode="normal"
  ></feBlend>
</filter>
</svg>`;
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
  // daimondObj.position.y = 1.01;
  daimondObj.position.y = 0.65;
  if (window.innerWidth <= 991 && window.innerWidth > 768) {
    daimondObj.scale.x = 0.85;
    daimondObj.scale.y = 0.85;
    daimondObj.scale.z = 0.85;
    daimondObj.position.y = 0.65;
  } else if (window.innerWidth <= 768 && window.innerWidth > 479) {
    if (window.innerWidth <= 567) {
      daimondObj.scale.x = 0.71;
      daimondObj.scale.y = 0.71;
      daimondObj.scale.z = 0.71;
    } else {
      daimondObj.scale.x = 0.80;
      daimondObj.scale.y = 0.80;
      daimondObj.scale.z = 0.80;
    }
    daimondObj.position.y = 0.65;
  } else if (window.innerWidth <= 479) {
    if ((verOffset = nAgt.indexOf("Safari")) != -1) {
      browserName = "Safari";
      fullVersion = nAgt.substring(verOffset + 7);
      if ((verOffset = nAgt.indexOf("Version")) != -1)
        fullVersion = nAgt.substring(verOffset + 8);
    }
    if (browserName === "Safari") {
      daimondObj.scale.x = 0.494;
      daimondObj.scale.y = 0.494;
      daimondObj.scale.z = 0.494;
      daimondObj.position.y = 0.83;
    } else {
      daimondObj.scale.x = 0.57;
      daimondObj.scale.y = 0.57;
      daimondObj.scale.z = 0.57;
      daimondObj.position.y = 0.81;
    }

  }
  else {
    if (window.innerWidth >= 991 && window.innerWidth < 1280) {
      daimondObj.scale.x = 0.825;
      daimondObj.scale.y = 0.825;
      daimondObj.scale.z = 0.825;
      daimondObj.position.y = 0.79;
    }
    if (window.innerWidth >= 1280 && window.innerWidth < 1440) {
      daimondObj.scale.x = 0.838;
      daimondObj.scale.y = 0.838;
      daimondObj.scale.z = 0.838;
    }
    if (window.innerWidth >= 1440 && window.innerWidth < 1920) {
      daimondObj.scale.x = 0.82;
      daimondObj.scale.y = 0.82;
      daimondObj.scale.z = 0.82;
      daimondObj.position.y = 0.752;
    } else if (window.innerWidth > 1920) {
      daimondObj.scale.x = 0.85;
      daimondObj.scale.y = 0.85;
      daimondObj.scale.z = 0.85;
      daimondObj.position.y = 0.795;
    }
    // else {
    //   daimondObj.scale.x = 0.9;
    //   daimondObj.scale.y = 0.9;
    //   daimondObj.scale.z = 0.9;
    // }

  }

  daimondObj.rotation.x = 0.11;
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
  width: parseInt(window.getComputedStyle(document.querySelector('.canvas-wrap')).getPropertyValue("width")),
  height: parseInt(window.getComputedStyle(document.querySelector('.canvas-wrap')).getPropertyValue("height"))
}

const resize = () => {

  // Update sizes
  sizes.width = parseInt(window.getComputedStyle(document.querySelector('.canvas-wrap')).getPropertyValue("width"))
  sizes.height = parseInt(window.getComputedStyle(document.querySelector('.canvas-wrap')).getPropertyValue("height"))

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
camera.position.set(0, 1, 2)
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

      circle.classList.add("active");
      pointerTexts[index].classList.add("active");
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
          pointerTexts[i].classList.remove("active");
        }
      });
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
      "path('M 893.871 201.454 L 689.667 377.488')";
    smallerPoints[0].style.offsetPath =
      "path('M 893.871 201.454 L 689.667 377.488')";
    pointerCircles[1].style.offsetPath =
      "path('M 485 201.454 L 689.667 377.488')";
    smallerPoints[1].style.offsetPath =
      "path('M 485 201.454 L 689.667 377.488')";
    pointerCircles[2].style.offsetPath =
      "path('M 421.871 521.088 L 565.472 472.575')";
    smallerPoints[2].style.offsetPath =
      "path('M 421.871 521.088 L 565.472 472.575')";
    pointerCircles[3].style.offsetPath =
      "path('M 689.462 698.088 L 813.862 472.575')";
    smallerPoints[3].style.offsetPath =
      "path('M 689.462 698.088 L 813.862 472.575')";
    pointerCircles[4].style.offsetPath =
      "path('M 957.462 521.088 L 813.862 472.575')";
    smallerPoints[4].style.offsetPath =
      "path('M 957.462 521.088 L 813.862 472.575')";
  }, 3500);

  setTimeout(() => {
    rotateDaimond = false;
  }, 5650)
});
