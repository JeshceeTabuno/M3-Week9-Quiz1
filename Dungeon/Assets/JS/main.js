

//Creating the Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Lighting
const directionalLight = new THREE.DirectionalLight( 0x857070, 0.5 );
scene.add( directionalLight );


const torchlight = new THREE.AmbientLight( 0x706E6A ); // soft white light
scene.add( torchlight );


//Textures
const doortexture = new THREE.TextureLoader().load('Assets/Textures/Dungeon Door.jpg');
const walltexture = new THREE.TextureLoader().load('Assets/Textures/Wall.jpg');
const floortexture = new THREE.TextureLoader().load('Assets/Textures/Floor.jpg');
const woodtexture = new THREE.TextureLoader().load('Assets/Textures/Wood.jpg');
const firetexture = new THREE.TextureLoader().load('Assets/Textures/Flame.jpg');

//Geometry Codes

//Floor
const floorgeometry = new THREE.BoxGeometry( 100, 39, 15 );
const floormaterial = new THREE.MeshLambertMaterial( {map: floortexture} );
const floor = new THREE.Mesh( floorgeometry , floormaterial );
scene.add( floor );

//Wall
const wallgeometry = new THREE.BoxGeometry( 150, 50, 1 );
const wallmaterial = new THREE.MeshLambertMaterial( {map: walltexture} );
const wall = new THREE.Mesh( wallgeometry , wallmaterial );
scene.add( wall );


//Entrance
const entrancegeometry = new THREE.BoxGeometry(10, 20, 1);
const entrancematerial = new THREE.MeshLambertMaterial( {color: 0x694E09} );
const entrance = new THREE.Mesh( entrancegeometry , entrancematerial );
scene.add( entrance );

//Starway
const stepgeometry = new THREE.BoxGeometry(9, 2, 1);
const stepmaterial = new THREE.MeshLambertMaterial( {map: floortexture} );
const step= new THREE.Mesh( stepgeometry , stepmaterial );
scene.add( step );

const step2geometry = new THREE.BoxGeometry(8, 2, 1);
const step2material = new THREE.MeshLambertMaterial( {map: walltexture} );
const step2= new THREE.Mesh( step2geometry , step2material );
scene.add( step2 );

const step3geometry = new THREE.BoxGeometry(6.1, 2, 1);
const step3material = new THREE.MeshLambertMaterial( {map: floortexture} );
const step3= new THREE.Mesh( step3geometry , step3material );
scene.add( step3 );

const step4geometry = new THREE.BoxGeometry(4, 2, 1);
const step4material = new THREE.MeshLambertMaterial( {map: walltexture} );
const step4= new THREE.Mesh( step4geometry , step4material );
scene.add( step4 );

//Jail Cell
const cellgeometry = new THREE.BoxGeometry(10, 20, 1);
const cellmaterial = new THREE.MeshLambertMaterial( {map: doortexture} );
const cell = new THREE.Mesh( cellgeometry , cellmaterial );
scene.add( cell );

//Torch
const torchgeometry = new THREE.CylinderGeometry( -1, -1, 3, 8);
const torchmaterial = new THREE.MeshBasicMaterial( {map: woodtexture } );
const torch = new THREE.Mesh( torchgeometry, torchmaterial );
scene.add( torch );

const flamegeometry = new THREE.DodecahedronGeometry(1,1 );
const flamematerial = new THREE.MeshBasicMaterial( {map: firetexture} );
const flame = new THREE.Mesh( flamegeometry, flamematerial );
scene.add( flame );

const torch2geometry = new THREE.CylinderGeometry( -1, -1, 3, 8);
const torch2material = new THREE.MeshBasicMaterial( {map: woodtexture } );
const torch2 = new THREE.Mesh( torch2geometry, torch2material );
scene.add( torch2 );

const flame2geometry = new THREE.DodecahedronGeometry(1,1 );
const flame2material = new THREE.MeshBasicMaterial( {map:firetexture} );
const flame2 = new THREE.Mesh( flame2geometry, flame2material );
scene.add( flame2 );

camera.position.z = 15;

//animate
function animate() {
	requestAnimationFrame( animate );
    
    //Floor
    floor.position.x=0;
    floor.position.y=-25;
    floor.position.z=0;

    //Wall
    wall.position.x =0;
    wall.position.y=0;
    wall.position.z=0;

    //Stairway
    entrance.position.x=15;
    entrance.position.y=0;
    entrance.position.z=0;
    
    step.position.x=15.5;
    step.position.y=-4.5;
    step.position.z=0;

    step2.position.x= 16;
    step2.position.y=-3;
    step2.position.z=0;

    step3.position.x=17;
    step3.position.y=-1;
    step3.position.z=0;

    step4.position.x=18;
    step4.position.y=1;
    step4.position.z=0;

    //Jail Cell
    cell.position.x=-10;
    cell.position.y=0;
    cell.position.z=0;

    //Torches
    torch.position.x=-2;
    torch.position.y=5;
    torch.position.z=0;

    flame.position.x=-2;
    flame.position.y=7.3;
    flame.position.z=0;

    
    torch2.position.x=-18;
    torch2.position.y=5;
    torch2.position.z=0;

    flame2.position.x=-18;
    flame2.position.y=7.3;
    flame2.position.z=0;

    
    //Light
    directionalLight.position.x=0;
    directionalLight.position.y=0;
    directionalLight.position.z=2;

    torchlight.position.x=-18;
    torchlight.position.y=7.3;
    torchlight.position.z=0;

	renderer.render( scene, camera );
}
animate();