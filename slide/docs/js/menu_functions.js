//menu---------------------------------------------------------------------------------------------------------------------
menu_width=30;
menu_height=30;

menu[1].text = "Sphere";
menu[2].text = "Helix";
menu[3].text = "Plane";
menu[4].text = "Map";
menu[5].text = "Center";
menu[6].text = "Close";

menu[0].x = 0;
menu[0].y = 0;
menu[0].z = 0;
menu[0].obj = new THREE.Object3D();



menu[0].frame_material = new THREE.LineBasicMaterial( { 
	linewidth: 1,
	transparent:true,
	opacity:0.5,
	color: 0x00FFFF 
} );
menu[0].frame_geometry = new THREE.Geometry();
menu[0].frame_geometry.vertices.push(new THREE.Vector3(0, menu_height*4/2, menu_width/2));
menu[0].frame_geometry.vertices.push(new THREE.Vector3(0, menu_height*4/2,-menu_width/2));
menu[0].frame_geometry.vertices.push(new THREE.Vector3(0,-menu_height*4/2,-menu_width/2));
menu[0].frame_geometry.vertices.push(new THREE.Vector3(0,-menu_height*4/2, menu_width/2));
menu[0].frame_geometry.vertices.push(new THREE.Vector3(0, menu_height*4/2, menu_width/2));
menu[0].frame_mesh = new THREE.Line( menu[0].frame_geometry, menu[0].frame_material );
menu[0].obj.add(menu[0].frame_mesh);

menu[0].canvas = document.createElement('canvas');
menu[0].canvas.width = menu_width*10; 
menu[0].canvas.height = menu_height*40;
var ctx = menu[0].canvas.getContext('2d');
ctx.fillStyle = '#FFFFFF';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.font = "100px sans-serif";
ctx.fillText("M",menu_width*10/2,menu_height*40*1/5);
ctx.fillText("e",menu_width*10/2,menu_height*40*2/5);
ctx.fillText("n",menu_width*10/2,menu_height*40*3/5);
ctx.fillText("u",menu_width*10/2,menu_height*40*4/5);
menu[0].texture = new THREE.Texture(menu[0].canvas);
menu[0].texture.needsUpdate = true;

menu[0].mesh = new THREE.Mesh(
	new THREE.PlaneBufferGeometry(menu_width,menu_height*4),
	new THREE.MeshPhongMaterial({
		color: 0x00FFFF ,
		transparent:true,
		map: menu[0].texture,
		opacity:0.9999,
		side:THREE.DoubleSide,
	})
);
menu[0].mesh.rotation.y = 90 * Math.PI / 180;
menu[0].mesh.receiveShadow = true;
menu[0].mesh.castShadow = true;
menu[0].mesh.name = menu_num_offset + 1;
menu[0].obj.add(menu[0].mesh);

menu[0].back = new THREE.Mesh(
	new THREE.PlaneBufferGeometry(menu_width,menu_height*4),
	new THREE.MeshPhongMaterial({
		color: 0x00FFFF ,
		transparent:true,
		//map: card[i].texture1,
		opacity:0.1,
		side:THREE.DoubleSide,
	})
);
menu[0].back.position.set(-1,0,0);
menu[0].back.rotation.y = 90 * Math.PI / 180;
menu[0].back.receiveShadow = true;
menu[0].back.castShadow = true;
menu[0].obj.add(menu[0].back);
scene.add(menu[0].obj);
targetList.push(menu[0].mesh);

menu_width=100;
menu_height=30;
for(i = 1;i<=menu_num;i++){
	menu[i].x = 0;
	menu[i].y = 0;
	menu[i].z = 0;
	menu[i].obj = new THREE.Object3D();

	menu[i].frame_material = new THREE.LineBasicMaterial( { 
		linewidth: 1,
		transparent:true,
		opacity:0.5,
		color: 0x00FFFF 
	} );
    menu[i].frame_geometry = new THREE.Geometry();
    menu[i].frame_geometry.vertices.push(new THREE.Vector3(0, menu_height/2, menu_width/2));
    menu[i].frame_geometry.vertices.push(new THREE.Vector3(0, menu_height/2,-menu_width/2));
    menu[i].frame_geometry.vertices.push(new THREE.Vector3(0,-menu_height/2,-menu_width/2));
    menu[i].frame_geometry.vertices.push(new THREE.Vector3(0,-menu_height/2, menu_width/2));
    menu[i].frame_geometry.vertices.push(new THREE.Vector3(0, menu_height/2, menu_width/2));
	menu[i].frame_mesh = new THREE.Line( menu[i].frame_geometry, menu[i].frame_material );
	menu[i].obj.add(menu[i].frame_mesh);

	menu[i].canvas = document.createElement('canvas');
	menu[i].canvas.width = menu_width*10; 
	menu[i].canvas.height = menu_height*10;
	var ctx = menu[i].canvas.getContext('2d');
	ctx.fillStyle = '#FFFFFF';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.font = "200px sans-serif";
	ctx.fillText(menu[i].text,menu_width*10/2,menu_height*10/2);
	menu[i].texture = new THREE.Texture(menu[i].canvas);
	menu[i].texture.needsUpdate = true;

	menu[i].mesh = new THREE.Mesh(
		new THREE.PlaneBufferGeometry(menu_width,menu_height),
		new THREE.MeshPhongMaterial({
			color: 0x00FFFF ,
			transparent:true,
			map: menu[i].texture,
			opacity:0.9999,
			side:THREE.DoubleSide,
		})
	);
	menu[i].mesh.rotation.y = 90 * Math.PI / 180;
	menu[i].mesh.receiveShadow = true;
	menu[i].mesh.castShadow = true;
	menu[i].mesh.name = menu_num_offset +1+i;
	menu[i].obj.add(menu[i].mesh);

	menu[i].back = new THREE.Mesh(
		new THREE.PlaneBufferGeometry(menu_width,menu_height),
		new THREE.MeshPhongMaterial({
			color: 0x00FFFF ,
			transparent:true,
			//map: card[i].texture1,
			opacity:0.1,
			side:THREE.DoubleSide,
		})
	);
	menu[i].back.position.set(-1,0,0);
	menu[i].back.rotation.y = 90 * Math.PI / 180;
	menu[i].back.receiveShadow = true;
	menu[i].back.castShadow = true;
	menu[i].obj.add(menu[i].back);
	scene.add(menu[i].obj);
	targetList.push(menu[i].mesh);
}


user_menu[1].text = "Search";
user_menu[2].text = "Grab";
user_menu[3].text = "Touch";
user_menu[4].text = "Zoom";
user_menu[5].text = "Pen";
user_menu[6].text = "Cursor";
handmode_texture1 = loader.load("sozai/search.png");
handmode_texture2 = loader.load("sozai/grab.png");
handmode_texture3 = loader.load("sozai/touch.png");
handmode_texture4 = loader.load("sozai/zoom.png");
handmode_texture5 = loader.load("sozai/pen.png");
handmode_texture6 = loader.load("sozai/cursor.png");

user_menu_width=30;
user_menu_height=30;
user_menu_pos = new THREE.Object3D();
for(i = 1;i<=user_menu_num;i++){
	user_menu[i].x = 0;
	user_menu[i].y = 0;
	user_menu[i].z = 0;
	user_menu[i].pos = new THREE.Object3D();
	user_menu[i].obj = new THREE.Object3D();


	user_menu[i].frame_material = new THREE.LineBasicMaterial( { 
		linewidth: 1,
		transparent:true,
		opacity:0.5,
		color: 0x00FFFF 
	} );
    user_menu[i].frame_geometry = new THREE.Geometry();
    user_menu[i].frame_geometry.vertices.push(new THREE.Vector3(0, user_menu_height/2, user_menu_width/2));
    user_menu[i].frame_geometry.vertices.push(new THREE.Vector3(0, user_menu_height/2,-user_menu_width/2));
    user_menu[i].frame_geometry.vertices.push(new THREE.Vector3(0,-user_menu_height/2,-user_menu_width/2));
    user_menu[i].frame_geometry.vertices.push(new THREE.Vector3(0,-user_menu_height/2, user_menu_width/2));
    user_menu[i].frame_geometry.vertices.push(new THREE.Vector3(0, user_menu_height/2, user_menu_width/2));
	user_menu[i].frame_mesh = new THREE.Line( user_menu[i].frame_geometry, user_menu[i].frame_material );
	user_menu[i].frame_mesh.position.set(0,40,0);
	//user_menu[i].obj.add(user_menu[i].frame_mesh);

	user_menu[i].canvas = document.createElement('canvas');
	user_menu[i].canvas.width = user_menu_width*10; 
	user_menu[i].canvas.height = user_menu_height*10;
	var ctx = user_menu[i].canvas.getContext('2d');
	ctx.fillStyle = '#FFFFFF';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.font = "110px sans-serif";
	ctx.fillText(user_menu[i].text,user_menu_width*10/2,user_menu_height*10/2);
	user_menu[i].texture = new THREE.Texture(user_menu[i].canvas);
	user_menu[i].texture.needsUpdate = true;

	user_menu[i].mesh = new THREE.Mesh(
		new THREE.PlaneBufferGeometry(user_menu_width,user_menu_height),
		new THREE.MeshPhongMaterial({
			color: 0x00FFFF ,
			transparent:true,
			map: user_menu[i].texture,
			opacity:0.9999,
			side:THREE.DoubleSide,
		})
	);
	user_menu[i].mesh.rotation.y = 90 * Math.PI / 180;
	user_menu[i].mesh.position.set(0,40,0);
	user_menu[i].mesh.receiveShadow = true;
	user_menu[i].mesh.castShadow = true;
	user_menu[i].mesh.name = user_menu[i].text;
	user_menu[i].obj.add(user_menu[i].mesh);

	
	user_menu[i].back = new THREE.Mesh(
		//new THREE.PlaneBufferGeometry(user_menu_width,user_menu_height),
		new THREE.RingGeometry( 20, 50, 50,10, 1* 2/user_menu_num * Math.PI,2/user_menu_num * Math.PI),
		new THREE.MeshPhongMaterial({
			color: 0x00FFFF ,
			transparent:true,
			wireframe:true,
			//map: card[i].texture1,
			opacity:0.1,
			side:THREE.DoubleSide,
		})
	);
	user_menu[i].back.rotation.y = 90 * Math.PI / 180;
	user_menu[i].back.receiveShadow = true;
	user_menu[i].back.castShadow = true;
	user_menu[i].back.position.set(-3,0,0);
	user_menu[i].obj.add(user_menu[i].back);

	user_menu[i].pos.add(user_menu[i].obj);
	//user_menu[i].obj.position.set(0,0,user_menu_width/2+50);
	user_menu[i].obj.position.set(0,2,0);
	//user_menu[i].pos.rotation.x = i * 2 * Math.PI /user_menu_num;
	targetList.push(user_menu[i].mesh);
	user_menu_pos.add(user_menu[i].pos);
}

scene.add(user_menu_pos);

var user_menu_select = new THREE.Object3D();
var user_menu_select1 = new THREE.Mesh(
	//new THREE.PlaneBufferGeometry(user_menu_width,user_menu_height),
	new THREE.RingGeometry( 18, 19, 40,8, 1* 2/user_menu_num * Math.PI-0.04,2/user_menu_num * Math.PI+0.08),
	new THREE.MeshPhongMaterial({
		color: 0xFF6666 ,
		transparent:true,
		wireframe:true,
		//map: card[i].texture1,
		opacity:0.1,
		side:THREE.DoubleSide,
	})
);
user_menu_select1.rotation.y = 90 * Math.PI / 180;
user_menu_select1.receiveShadow = true;
user_menu_select1.castShadow = true;
user_menu_select1.position.set(-2.9,2,0);
var user_menu_select2 = new THREE.Mesh(
	//new THREE.PlaneBufferGeometry(user_menu_width,user_menu_height),
	new THREE.RingGeometry( 51, 52, 40,8, 1* 2/user_menu_num * Math.PI-0.04,2/user_menu_num * Math.PI+0.08),
	new THREE.MeshPhongMaterial({
		color: 0xFF6666 ,
		transparent:true,
		wireframe:true,
		//map: card[i].texture1,
		opacity:0.1,
		side:THREE.DoubleSide,
	})
);
user_menu_select2.rotation.y = 90 * Math.PI / 180;
user_menu_select2.receiveShadow = true;
user_menu_select2.castShadow = true;
user_menu_select2.position.set(-2.9,2,0);

user_menu_select3 = new THREE.Mesh(
	//new THREE.PlaneBufferGeometry(user_menu_width,user_menu_height),
	new THREE.RingGeometry( 18, 51, 40,8, 1* 2/user_menu_num * Math.PI-0.04,2/user_menu_num * Math.PI+0.08),
	new THREE.MeshPhongMaterial({
		color: 0xFF6666 ,
		transparent:true,
		//wireframe:true,
		//map: card[i].texture1,
		opacity:0.3,
		side:THREE.DoubleSide,
	})
);
user_menu_select3.rotation.y = 90 * Math.PI / 180;
user_menu_select3.receiveShadow = true;
user_menu_select3.castShadow = true;
user_menu_select3.position.set(-2.9,2,0);

user_menu_select.add(user_menu_select1);
user_menu_select.add(user_menu_select2);
user_menu_select.add(user_menu_select3);
scene.add(user_menu_select);

var user_menu_center = new THREE.Object3D();
user_menu_center1 = new THREE.Mesh(
	//new THREE.PlaneBufferGeometry(user_menu_width,user_menu_height),
	new THREE.RingGeometry(18,19,40,8),
	new THREE.MeshPhongMaterial({
		color: 0x00FFFF ,
		transparent:true,
		//wireframe:true,
		//map: card[i].texture1,
		opacity:0.99,
		side:THREE.DoubleSide,
	})
);
user_menu_center1.rotation.y = 90 *Math.PI / 180;
user_menu_center1.receiveShadow = true;
user_menu_center1.castShadow = true;
user_menu_center1.position.set(-2.9,0,0);
var user_menu_center_text = new THREE.Mesh(
	new THREE.PlaneBufferGeometry(20,20),
	new THREE.MeshPhongMaterial({
		color: 0x00FFFF ,
		transparent:true,
		map: handmode_texture1,
		opacity:0.9999,
		side:THREE.DoubleSide,
	})
);
user_menu_center_text.rotation.y = 90 * Math.PI / 180;
user_menu_center_text.position.set(-2.9,0,0);
user_menu_center_text.receiveShadow = true;
user_menu_center_text.castShadow = true;
user_menu_center_text.name = "user_menu";
targetList.push(user_menu_center_text);

user_menu_center.add(user_menu_center_text);
user_menu_center.add(user_menu_center1);
scene.add(user_menu_center);


function menu_set(){
	for(i=0;i<=menu_num;i++){
		if(menu_open==true && menu_opened == false){
			if(i == menu_num && menucounter < menucounter_limit)menucounter++;
			if(menucounter >= menucounter_limit){
				menu_opened = true;
				menucounter = menucounter_limit;
			}
		}
		else if(menu_open==false && menu_opened == true){
			if(i == menu_num && menucounter > menucounter_limit/2)menucounter-=10;
			else if(i == menu_num && menucounter > 0)menucounter-=1;
			if(menucounter <=0){
				menu_opened = false;
				menucounter = 0;
			}
		}
		if( menucounter < i*menucounter_limit /(menu_num+opentime) )																		opencounter = 0;
		else if(menucounter > i*menucounter_limit/(menu_num + opentime) && menucounter < i*menucounter_limit/(menu_num+opentime)+opentime)	opencounter=menucounter - i*menucounter_limit/(menu_num+opentime);
		else if(menucounter > i*menucounter_limit/(menu_num + opentime)+opentime)															opencounter=opentime;
	    
		menu[i].obj.rotation.z = camera_angle_z;
		menu[i].obj.rotation.y = camera_angle_y;
		menu[i].obj.position.set(camera.position.x + window_r_top.x*600 + (menu_height * 2)*(i)*window_vec_y.x + window_vec_x.x *(menu_width *1.5 * easeOutElastic(opencounter/opentime)-menu_width) ,
								 camera.position.y + window_r_top.y*600 + (menu_height * 2)*(i)*window_vec_y.y + window_vec_x.y *(menu_width *1.5 * easeOutElastic(opencounter/opentime)-menu_width) ,
								 camera.position.z + window_r_top.z*600 + (menu_height * 2)*(i)*window_vec_y.z + window_vec_x.z *(menu_width *1.5 * easeOutElastic(opencounter/opentime)-menu_width)
		);
		
		
		//focus--------------------------------------------------------------------------------------------------------------------------
		if(i+menu_num_offset+1==forcuscard_m||i+menu_num_offset+1==forcuscard_hr){
			menu[i].frame_mesh.material.color.r = menu[i].mesh.material.color.r =  225/225;
			menu[i].frame_mesh.material.color.g = menu[i].mesh.material.color.g = 172/225;
			menu[i].frame_mesh.material.color.b = menu[i].mesh.material.color.b = 28/225;
			//console.log(card[i].line_mesh);
			//card[i].img.scale.set(1,1,1);
			menu[i].obj.position.set(camera.position.x + window_r_top.x*600 + (menu_height * 2)*(i)*window_vec_y.x + window_vec_x.x *(menu_width *1.55 * easeOutElastic(opencounter/opentime)-menu_width) ,
								 	 camera.position.y + window_r_top.y*600 + (menu_height * 2)*(i)*window_vec_y.y + window_vec_x.y *(menu_width *1.55 * easeOutElastic(opencounter/opentime)-menu_width) ,
								 	 camera.position.z + window_r_top.z*600 + (menu_height * 2)*(i)*window_vec_y.z + window_vec_x.z *(menu_width *1.55 * easeOutElastic(opencounter/opentime)-menu_width)
			);
		}else{
			menu[i].frame_mesh.material.color.r = menu[i].mesh.material.color.r = 0/225;
			menu[i].frame_mesh.material.color.g = menu[i].mesh.material.color.g = 225/225;
			menu[i].frame_mesh.material.color.b = menu[i].mesh.material.color.b = 225/225;
		}
		if(i==0){
			menu[i].obj.position.set(camera.position.x + window_r_top.x*600 + (menu_height * 2)*(3)*window_vec_y.x + window_vec_x.x *(menu_width *1.1 * easeInExpo(1-opencounter/opentime)-menu_width) ,
									 camera.position.y + window_r_top.y*600 + (menu_height * 2)*(3)*window_vec_y.y + window_vec_x.y *(menu_width *1.1 * easeInExpo(1-opencounter/opentime)-menu_width) ,
									 camera.position.z + window_r_top.z*600 + (menu_height * 2)*(3)*window_vec_y.z + window_vec_x.z *(menu_width *1.1 * easeInExpo(1-opencounter/opentime)-menu_width)
			);
		}		
	}
}

function user_menu_set(){
	for(i=1;i<=user_menu_num;i++){
		user_menu[i].pos.scale.set(1,easeOutExpo(user_menucounter/user_menucounter_limit),easeOutExpo(user_menucounter/user_menucounter_limit));
		var step =  360/user_menu_num ;
		var theta = 3*(handobj[1].yaw) * 180/Math.PI + 5*360;
		var d_theta = 0;
		if(handobj[1].palmangle_x>2 && user_menu_opened == true && handobj[1].grabradius>0.9) d_theta = theta - theta_pre;
		theta_now += d_theta;
		theta_pre = theta;

		user_menu[i].pos.rotation.x = (i * step  - Math.floor(theta_now/step)*step - step*easeInOutQuint((theta_now%step)/step)) * Math.PI /180;
		if(user_menu_open == false)user_menu[i].pos.rotation.x = (i * step  - Math.floor(theta_now/step+0.5)*step  )* Math.PI /180;

		//focus--------------------------------------------------------------------------------------------------------------------------
		if(i+menu_num_offset+menu_num+1==forcuscard_m||i+menu_num_offset+menu_num+1==forcuscard_hr){
			user_menu[i].frame_mesh.material.color.r = user_menu[i].mesh.material.color.r =  225/225;
			user_menu[i].frame_mesh.material.color.g = user_menu[i].mesh.material.color.g = 172/225;
			user_menu[i].frame_mesh.material.color.b = user_menu[i].mesh.material.color.b = 28/225;
		}else{
			user_menu[i].frame_mesh.material.color.r = user_menu[i].mesh.material.color.r = 0/225;
			user_menu[i].frame_mesh.material.color.g = user_menu[i].mesh.material.color.g = 225/225;
			user_menu[i].frame_mesh.material.color.b = user_menu[i].mesh.material.color.b = 225/225;
		}		


		if(user_menu_open==true && user_menu_opened == false){
			if(i == user_menu_num && user_menucounter < user_menucounter_limit)user_menucounter++;
			if(user_menucounter >= user_menucounter_limit){
				user_menu_opened = true;
				user_menucounter = user_menucounter_limit;
			}
		}
		else if(user_menu_open==false && user_menu_opened == true){
			if(i == user_menu_num && user_menucounter > 0)user_menucounter-=1;
			if(user_menucounter <=0){
				user_menu_opened = false;
				user_menucounter = 0;
			}
		}
		if( user_menucounter < i*user_menucounter_limit /(user_menu_num+user_opentime) )																								user_opencounter = 0;
		else if(user_menucounter > i*user_menucounter_limit/(user_menu_num + user_opentime) && user_menucounter < i*user_menucounter_limit/(user_menu_num+user_opentime)+user_opentime)	user_opencounter=user_menucounter - i*user_menucounter_limit/(user_menu_num+user_opentime);
		else if(user_menucounter > i*user_menucounter_limit/(user_menu_num + user_opentime)+user_opentime)																				user_opencounter=user_opentime;
	}
	
	user_menu_pos.position.set(	camera.position.x + (window_l_bottom.x*600 - window_vec_x_n.x * 52 - window_vec_y_n.x * 52),
						 		camera.position.y + (window_l_bottom.y*600 - window_vec_x_n.y * 52 - window_vec_y_n.y * 52),
						 		camera.position.z + (window_l_bottom.z*600 - window_vec_x_n.z * 52 - window_vec_y_n.z * 52)
	);
	user_menu_pos.rotation.z = camera_angle_z;
	user_menu_pos.rotation.y = camera_angle_y;
	user_menu_select.position.set(	camera.position.x + (window_l_bottom.x*600 - window_vec_x_n.x * 52 - window_vec_y_n.x * 52),
							 		camera.position.y + (window_l_bottom.y*600 - window_vec_x_n.y * 52 - window_vec_y_n.y * 52),
							 		camera.position.z + (window_l_bottom.z*600 - window_vec_x_n.z * 52 - window_vec_y_n.z * 52)
	);
	//user_menu_select.scale.set(1,easeOutExpo(handobj[1].grabradius),easeOutExpo(handobj[1].grabradius));
	user_menu_select.scale.set(1,easeOutExpo(user_menucounter/user_menucounter_limit),easeOutExpo(user_menucounter/user_menucounter_limit));
	user_menu_select.rotation.z = camera_angle_z;
	user_menu_select.rotation.y = camera_angle_y;
	user_menu_center.position.set(	camera.position.x + (window_l_bottom.x*600 - window_vec_x_n.x * 52 - window_vec_y_n.x * 52),
							 		camera.position.y + (window_l_bottom.y*600 - window_vec_x_n.y * 52 - window_vec_y_n.y * 52),
							 		camera.position.z + (window_l_bottom.z*600 - window_vec_x_n.z * 52 - window_vec_y_n.z * 52)
	);
	user_menu_center.rotation.z = camera_angle_z;
	user_menu_center.rotation.y = camera_angle_y;
}

function menu_select(){
	key[48] = key[49] = key[50] = key[51] = key[52] = 0;
	switch(selectmenu){
		case menu_num_offset + 1: menu_opened = false;menu_open=true; break;
		case menu_num_offset + 2: key[49] = 1; break;
		case menu_num_offset + 3: key[50] = 1; break;
		case menu_num_offset + 4: key[51] = 1; break;
		case menu_num_offset + 5: key[52] = 1; break;
		case menu_num_offset + 6: key[48] = 1; break;
		case menu_num_offset + 7: menu_opened = true;menu_open = false;selectmenu=-1;
		default: break;
	}
}
