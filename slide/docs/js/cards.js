

mode_camera = new Array(mode_num);
mode_camera[0]=[5600,0,0];
mode_camera[1]=[5600,1000,0];
mode_camera[2]=[6500,1000,0];
mode_camera[3]=[5600,0,0];
mode_camera[4]=[20000,7000,0];
mode_camera[5]=[5600,0,0];
mode_camera[6]=[5600,0,0];





var map_objects  = new THREE.Object3D();
var mapscale = 0.00000001;
for(i=1;i<=mapobj_num;i++){
	if(mapdata[i][5]=="green"){
		mapobj[i].color = 0x66FF66;
		mapobj[i].height = 500;
	}
	else if(mapdata[i][5]=="red"){
		mapobj[i].color = 0xFF6666;
		mapobj[i].height = 10;	
	}
	mapobj[i].mesh = new THREE.Mesh(
		new THREE.CubeGeometry(mapdata[i][3],mapobj[i].height,mapdata[i][4]),
		new THREE.MeshBasicMaterial( {
			color: mapobj[i].color ,
			//wireframe: true, 
			transparent:true,
			opacity:0.5,
			side:THREE.DoubleSide,
			combine: THREE.MixOperation,
			reflectivity: 0.7
		} )
	);
	mapobj[i].mesh.position.set((10000-mapdata[i][1]),-1000,(10000-mapdata[i][2]));
	mapobj[i].mesh.receiveShadow = true;
	mapobj[i].mesh.castShadow = true;
	map_objects.add(mapobj[i].mesh);
	mapobj[i].mesh.scale.set(mapscale,mapscale,mapscale);
	//menu[i].mesh.name = card_num+1+i;
	//menu[i].obj.add(menu[i].mesh);
}
scene.add(map_objects);



var base_text = "手をかざしてください";
var base_canvas = document.createElement('canvas');
base_canvas.width = 600; 
base_canvas.height =500;
var ctx = base_canvas.getContext('2d');
ctx.fillStyle = '#FFFFFF';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.font = "40px sans-serif";
ctx.fillText(base_text,200,200);
base_texture = new THREE.Texture(base_canvas);
base_texture.needsUpdate = true;






function create_card(i,directory){
	card[i].directory = directory;
    card[i].object= new THREE.Object3D();
    card[i].height=500;
    card[i].width =600;
    card[i].card = new THREE.Object3D();
    card[i].x_axis = [1,0,0];
    card[i].y_axis = [0,1,0];
    card[i].z_axis = [0,0,1];
    card[i].r = 2000;
    card[i].sphere = [1,0,0];
    
    
    card[i].canvas = document.createElement('canvas');
    card[i].canvas.width = 600; 
    card[i].canvas.height =500;
    var ctx = card[i].canvas.getContext('2d');
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = "50px sans-serif";
    ctx.fillText(i,card[i].width/2,card[i].height/2);
    //console.log(data[i][5]);
         
    // テクスチャを作成
    

    card[i].texture1 = loader.load(file_path[i-1]);
    card[i].texture2 = grayscale(file_path[i-1]);
    card[i].texture3 = new THREE.Texture(card[i].canvas);
    card[i].texture3.needsUpdate = true;

    card[i].x = card[i].x_axis[0]*card[i].r;
    card[i].y = card[i].x_axis[1]*card[i].r;
    card[i].z = card[i].x_axis[2]*card[i].r;
    card[i].x = 0;
    card[i].y = 0;
    card[i].z = 0;
    card[i].mesh = new THREE.Mesh(
      new THREE.PlaneBufferGeometry(card[i].width,card[i].height),
      new THREE.MeshPhongMaterial({
        //color: 0x00FFFF ,
        color: 0xFFFFFF ,
        transparent:true,
        map: card[i].texture2,
        opacity:0.79999,
        side:THREE.DoubleSide,
      })
    );
    card[i].mesh.rotation.y = 90 * Math.PI / 180;
    card[i].mesh.receiveShadow = true;
    card[i].mesh.castShadow = true;
    card[i].mesh.name = i;

    card[i].frame_material = new THREE.LineBasicMaterial( { 
      linewidth: 1,
      transparent:true,
      opacity:0.5,
      color: 0x00FFFF 
    } );
      card[i].frame_geometry = new THREE.Geometry();
      card[i].frame_geometry.vertices.push(new THREE.Vector3(0, card[i].height/2, card[i].width/2));
      card[i].frame_geometry.vertices.push(new THREE.Vector3(0, card[i].height/2,-card[i].width/2));
      card[i].frame_geometry.vertices.push(new THREE.Vector3(0,-card[i].height/2,-card[i].width/2));
      card[i].frame_geometry.vertices.push(new THREE.Vector3(0,-card[i].height/2, card[i].width/2));
      card[i].frame_geometry.vertices.push(new THREE.Vector3(0, card[i].height/2, card[i].width/2));
    card[i].frame_mesh = new THREE.Line( card[i].frame_geometry, card[i].frame_material );
    
    card[i].img = new THREE.Mesh(
      new THREE.PlaneBufferGeometry(card[i].width,card[i].height),
      new THREE.MeshPhongMaterial({
        color: 0xFFFFFF ,
        //transparent:true,
        map:card[i].texture1,
        opacity:0.9,
        side:THREE.DoubleSide,
      })
    );
    card[i].img.rotation.y = 90 * Math.PI / 180;
    //card[i].img.position.set(-5,0,card[i].width/4);

    card[i].info= new THREE.Mesh(
      new THREE.PlaneBufferGeometry(card[i].width,card[i].height),
      new THREE.MeshPhongMaterial({
        color: 0xFFFFFF ,
        transparent:true,
        map:card[i].texture3,
        opacity:0.99999,
        side:THREE.DoubleSide,
      })
    );
    card[i].info.rotation.y = 90 * Math.PI / 180;
    card[i].info.position.set(5,0,0);

    //card------------------------------------------------------------------------
    
    card[i].mode_vec = new Array(mode_num);
    card[i].mode_vec[0]=[card[i].r,0,0];
    card[i].mode_vec[1]=[card[i].r,0,0];
    card[i].mode_vec[2] =[card[i].r,0,0];
    card[i].mode_vec[4]=[card[i].r,0,0];
    card[i].mode_vec[5]=[0,0,0];
    card[i].mode_vec[6]=[card[i].r,0,0];

    card[i].mode_rot = new Array(mode_num);
    card[i].mode_rot[0] = new Array(3);
    card[i].mode_rot[1] = new Array(3);
    card[i].mode_rot[2] = new Array(3);
    card[i].mode_rot[3] = new Array(3);
    card[i].mode_rot[4] = new Array(3);
    card[i].mode_rot[5] = new Array(3);
    card[i].mode_rot[6] = new Array(3);

    card[i].mode_r = new Array(mode_num);
    card[i].mode_r[0]=0;
    card[i].mode_r[1]=2000;
    card[i].mode_r[2]=2500;
    card[i].mode_r[3]=0;
    card[i].mode_r[4]=0;
    card[i].mode_r[5]=4900;
    card[i].mode_r[6]=4900;

    //cenrter----------------------------------------------------------------------
    card[i].mode_rot[0][0] = 0;
    card[i].mode_rot[0][1] = 0;
    card[i].mode_rot[0][2] = 0;
    
    
    //sphere---------------------------------------------------------------------
    
    card[i].sphere_objvec=[0,0,0];
    var j = card_num - i + 1;
    //4 10 14 14 10 4
    if(j<=4){
      card[i].mode_rot[1][2] = 70 * Math.PI / 180;
      card[i].mode_rot[1][1] = (j * 360/4 + 15) * Math.PI / 180;
    }
    else if(j<=14){
      card[i].mode_rot[1][2] = 40 * Math.PI / 180;
      card[i].mode_rot[1][1] = (j * 360/10 + 10) * Math.PI / 180;
    }
    else if(j<=28){
      card[i].mode_rot[1][2] = 15 * Math.PI / 180;
      card[i].mode_rot[1][1] = (j * 360/14 + 5) * Math.PI / 180;
    }
    else if(j<=42){
      card[i].mode_rot[1][2] = -15 * Math.PI / 180;
      card[i].mode_rot[1][1] = (j * 360/14 - 5) * Math.PI / 180;
    }
    else if(j<=52){
      card[i].mode_rot[1][2] = -40 * Math.PI / 180;
      card[i].mode_rot[1][1] = (j * 360/10 - 10) * Math.PI / 180;
    }
    else if(j<=56){
      card[i].mode_rot[1][2] = -70 * Math.PI / 180;
      card[i].mode_rot[1][1] = (j * 360/4 - 15) * Math.PI / 180;
    }

    card[i].card.position.set(card[i].r,0,0);
    
    
    //helix-------------------------------------------------------------------------
    
    card[i].mode_rot[2][0] = -10 * Math.PI / 180;
    card[i].mode_rot[2][1] = (i * 360/20) * Math.PI / 180;
    //card[i].mode_rot[2][1] = (suffle_array2[i-1] * 360/20) * Math.PI / 180;
    card[i].mode_rot[2][2] = 0;

    //genre------------------------------------------------------------------------
    card[i].mode_rot[3][0] = 0;
    card[i].mode_rot[3][1] = 90 * Math.PI / 180;
    card[i].mode_rot[3][1] = 0;
    card[i].mode_rot[3][2] = 0;

    //map--------------------------------------------------------------------------
    card[i].mode_rot[4][0] = 0;
    card[i].mode_rot[4][1] = 0;
    card[i].mode_rot[4][2] = 0;
    card[i].mode_vec[4] =[  10000-Number(data[i][13]),
                -300,
                10000-Number(data[i][14])]
    

    //手前
    card[i].mode_rot[5][0] = 0;
    card[i].mode_rot[5][1] = 90 * Math.PI / 180;
    card[i].mode_rot[5][2] = 0;

    card[i].img.scale.set(0.00000001,0.0000001,0.0000001);
    card[i].info.scale.set(0.00000001,0.0000001,0.0000001);

    //sceneに追加
    card[i].card.add(card[i].img);
    card[i].card.add(card[i].info);
    card[i].card.add(card[i].mesh);
    card[i].card.add(card[i].frame_mesh);
    card[i].object.add(card[i].card);
    //targetList.push(card[i].card);
    dir[directory].parent.add(card[i].object);
    targetList.push(card[i].mesh); 
}

function create_dir(i,name){
	width = 600;
	height = 500;
	dir[i].parent = new THREE.Object3D();
	dir[i].object = new THREE.Object3D();
	dir[i].canvas = document.createElement('canvas');
	dir[i].canvas.width = width; 
	dir[i].canvas.height =height;
	var ctx = dir[i].canvas.getContext('2d');
	ctx.fillStyle = '#00FFFF';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.font = "80px sans-serif";
	ctx.fillText(name,width/2,height/2);
	dir[i].texture = new THREE.Texture(dir[i].canvas);
	dir[i].texture.needsUpdate = true;
	dir[i].mesh = new THREE.Mesh(
		new THREE.BoxGeometry(20,height,width),
		new THREE.MeshBasicMaterial( {
			color: 0x00FFFF ,
			//wireframe: true, 
			transparent:true,
			opacity:0.1,
			//map:dir[i].texture
		} )
	);
	dir[i].text = new THREE.Mesh(
      new THREE.PlaneBufferGeometry(width,height),
      new THREE.MeshPhongMaterial({
        //color: 0x00FFFF ,
        color: 0xFFFFFF ,
        transparent:true,
        map: dir[i].texture,
        opacity:0.79999,
        side:THREE.DoubleSide,
      })
    );
    dir[i].text.rotation.y = 90 * Math.PI / 180;
    dir[i].text.position.set(-12,0,0);
	dir[i].mesh.position.set(0,0,0);
	dir[i].mesh.receiveShadow = true;
	dir[i].mesh.castShadow = true;
	dir[i].object.add(dir[i].mesh);
	dir[i].object.add(dir[i].text);
	dir[i].parent.add(dir[i].object);

	scene.add(dir[i].parent);
}
