var data = csv2Array('sozai/carddata.csv');
var mapdata = csv2Array('sozai/filtered.csv');

var file_name = new Array();
var file_path = new Array();
var file_url  = new Array();
var file_num = 0;

var mode_num=5;

var dir_num = 0;
var dir = new Array();





var card_num = 0;
var menu_num_offset = 1000;
var card = new Array(card_num);
card[0] = {};

var suffle_array1 = new Array(card_num);
for(i=0;i<card_num;i++){
  suffle_array1[i] = i+1;
}
var suffle_array2 = new Array(card_num);
for(i=0;i<card_num;i++){
  suffle_array2[i] = i+1;
}
shuffle(suffle_array1);
shuffle(suffle_array2);

var menu_num = 6;
var menu = new Array(menu_num);
for(i=0;i<=menu_num;i++){
	menu[i]={};
}

var user_menu_num = 6;
var user_menu = new Array(user_menu_num);
for(i=0;i<=user_menu_num;i++){
	user_menu[i]={};
}

var mapobj_num=42;
var mapobj = new Array(mapobj_num);
for(i=0;i<=mapobj_num;i++){
	mapobj[i]={};
}


var rot_obj_x=0;
var rot_obj_y=0;
var rot_obj_z=0;

//オブジェクト格納グローバル変数
var targetList = [];         
var mode_camera;
mode_camera = new Array(mode_num);
mode_camera[0]=[5600,0,0];
mode_camera[1]=[5600,1000,0];
mode_camera[2]=[6500,1000,0];
mode_camera[3]=[5600,0,0];
mode_camera[4]=[20000,7000,0];
mode_camera[5]=[5600,0,0];

var camera_angle_z=0;
var camera_angle_y=0;

var mode = 0;
var mode_num = 6;
var premode = 0;
var nextmode = 0;
var transcounter = 0;
var selectcounter = 0;
var selected = 0;
var pre_selectcounter = 0;
var transtime = 400;
var forcuscard_m = -1; //mouse用
var forcuscard_hr = -1; //hand用
var forcuscard_hl = -1; //hand用

var selectdir = -1;
var selectcard = -1;	 //選択したcard
var pre_selectcard = -1; //選択していたcard
var selectmenu = -1;	 //選択したmenu
var pre_selectmenu = -1; //選択していたmenu
var camera_x = mode_camera[0][0];
var camera_y = mode_camera[0][1];
var camera_z = mode_camera[0][2];
var camera_vec = new THREE.Vector3(camera_x,camera_y,camera_z).normalize();
var camera_pos = new THREE.Vector3(camera_x,camera_y,camera_z);
var camera_now = new THREE.Vector3(0,0,0);
var camera_keep = new THREE.Vector3(0,0,0);
var camera_look = new THREE.Vector3(0,0,0);
camera_look.sub(camera_vec);
var righthand = 3;
var lefthand = 3;
transtime = 50;

var menucounter = 0;
var menucounter_limit = 80;
var menu_open = false;
var menu_opened = false;
var user_menucounter = 0;
var user_menucounter_limit = 10;
var user_menu_open = false;
var user_menu_opened = false;
var opentime = 20; 
var opencounter=0;
var user_opentime = 20; 
var user_opencounter=0;
var theta_now = 3600;
var theta_pre = 0;
var handmode = "Cursor";
var handalive = 0;

var zoomed = 1;
var zoom_point = new THREE.Vector3();
var zoom_start_position = new THREE.Vector3();
var zoom_righthand_pos;
var zoom_lefthand_pos;
var zoom_length = 0;
var zoom_old_length = 0;
var zoom_vec = new THREE.Vector3();





//軸
var axis_x=[1,0,0];
var axis_y=[0,1,0];
var axis_z=[0,0,1];

//screenvector
var window_r_top 	= new THREE.Vector3(1,1,1);
var window_r_bottom = new THREE.Vector3(1,-1,1);
var window_l_top 	= new THREE.Vector3(-1,1,1);
var window_l_bottom = new THREE.Vector3(-1,-1,1);

var window_vec_x;
var window_vec_y;

var window_center;
var window_vec_x_n;
var window_vec_y_n;


