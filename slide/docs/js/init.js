var scene;
var camera;
var renderer;
var width = 1200;
var height = 800;
width = 1670;
height = 850;
width = window.innerWidth-3;
height =window.innerHeight-3;
//センサーからディスプレイまでの高さ
//var screen_height = 130;//ノートパソコン用
var screen_height = 230;//24インチディスプレイ用

//scene ステージ
scene = new THREE.Scene();

//renderer 実際に描画を行う
renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(width,height);
renderer.setClearColor(0x000025);
renderer.setPixelRatio(window.devicePixelRatio);
document.getElementById('stage').appendChild(renderer.domElement);


//console.log(data);

var loader=new THREE.TextureLoader();



//camera
camera = new THREE.PerspectiveCamera(45, width / height,1,50000);
camera.position.set(5600,1000,0);
camera.lookAt(scene.position);
camera.up.set(0, 1, 0); // カメラの上方向ベクトルの設定
camera.lookAt(scene.position);

//点光源
// light
var light = new THREE.DirectionalLight( 0xffffff,0.5 );
light.position.set(0, 100, 0 );
scene.add( light );

// 環境光を追加
var ambient = new THREE.AmbientLight(0x999999);
scene.add(ambient);

// 影
renderer.shadowMapEnabled = true; 

//keycode
var key = new Array(300);


var i;
var j;
