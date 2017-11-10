'use strict';

function draw_logic(){
    try{
        canvas_buffer.drawImage(
          image,
          canvas_properties['width-half'] + camera_x,
          canvas_properties['height-half'] + camera_y
        );
    }catch(error){
    }
}

function logic(){
    if(core_keys[core_storage_data['move-←']]['state']){
        camera_x += core_storage_data['camera-speed'];
    }
    if(core_keys[core_storage_data['move-→']]['state']){
        camera_x -= core_storage_data['camera-speed'];
    }
    if(core_keys[core_storage_data['move-↓']]['state']){
        camera_y -= core_storage_data['camera-speed'];
    }
    if(core_keys[core_storage_data['move-↑']]['state']){
        camera_y += core_storage_data['camera-speed'];
    }
}

function repo_init(){
    core_repo_init({
      'events': {
        'view': {
          'onclick': function(){
              canvas_setmode();

              camera_x = 0;
              camera_y = 0;
              image.src = core_storage_data['uri'];

              core_escape();
          },
        },
      },
      'globals': {
        'camera_x': 0,
        'camera_y': 0,
        'image': new Image,
      },
      'info': '<input id=view type=button value=View>',
      'menu': true,
      'storage': {
        'camera-speed': 5,
        'uri': 'data:,',
      },
      'storage-menu': '<textarea id=uri></textarea><table><tr><td><input id=camera-speed><td>Camera Speed</table>',
      'title': 'URIViewer.htm',
    });
    canvas_init();
}
