import './style.css'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';


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

const mtlLoader = new MTLLoader()
mtlLoader.setResourcePath('models/daimond/')
mtlLoader.setPath('models/daimond/')

let daimondObj;

mtlLoader.load('Diamond.mtl', materials => {
    materials.preload()

    const objLoader = new OBJLoader()
    objLoader.setMaterials(materials)

    objLoader.load('/models/daimond/Diamond.obj', object => {
        console.log(object)
        daimondObj = object;
        daimondObj.position.y = 0.925;
        daimondObj.scale.x = 1;
        daimondObj.scale.y = 1;
        daimondObj.scale.z = 1;
        daimondObj.rotation.x = 0.13;
        daimondObj.children[0].material = new THREE.MeshPhongMaterial({
            color: '#3c2660',
        })
        scene.add(daimondObj)
    }, () => {
        console.log('progress')
    }, () => {
        console.log('error')
    })
})

let rotateDaimond = false;
setTimeout(() => {
    rotateDaimond = true;
}, 3500)

setTimeout(() => {
    rotateDaimond = false;
}, 5500)


/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 15
directionalLight.shadow.camera.left = - 7
directionalLight.shadow.camera.top = 7
directionalLight.shadow.camera.right = 7
directionalLight.shadow.camera.bottom = - 7
directionalLight.position.set(- 5, 5, 0)
scene.add(directionalLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
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
        if (rotateDaimond) {
            console.log(daimondObj.rotation.x)
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



let pointerCircles = document.querySelectorAll(".outer-point-stroke");
let pointerTexts = document.querySelectorAll(".outer-point-text");
let greenPointer = document.querySelector(".movie-pointer");
let smallerPoints = document.querySelectorAll(".outer-point-fill");
let networkLines = document.querySelectorAll(".network-line");

pointerCircles.forEach((circle, index) => {
    circle.addEventListener("mouseover", () => {
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
                greenPointer.style.offsetDistance = "43.6%";
                break;
            case 4:
                greenPointer.style.offsetDistance = "24.97%";
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
    });

    circle.addEventListener("touchmove", () => {
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
                greenPointer.style.offsetDistance = "43.6%";
                break;
            case 4:
                greenPointer.style.offsetDistance = "24.97%";
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
    });
});

window.addEventListener("load", () => {
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
});
setTimeout(() => {
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
    pointerTexts[3].classList.add("active");
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
        "path('M 957.462 521.088 L 813.862 472.575')";
    smallerPoints[3].style.offsetPath =
        "path('M 957.462 521.088 L 813.862 472.575')";
    pointerCircles[4].style.offsetPath =
        "path('M 689.462 698.088 L 813.862 472.575')";
    smallerPoints[4].style.offsetPath =
        "path('M 689.462 698.088 L 813.862 472.575')";
}, 3500);