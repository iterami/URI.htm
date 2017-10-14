'use strict';

function draw_logic(){
    try{
        canvas_buffer.drawImage(
          image,
          canvas_properties['width-half'],
          canvas_properties['height-half']
        );
    }catch(error){
    }
}

function logic(){
}

function repo_init(){
    core_repo_init({
      'info': '<input id=view type=button value=View>',
      'info-events': {
        'view': {
          'todo': function(){
              canvas_setmode();

              image.src = core_storage_data['uri'];

              core_escape();
          },
        },
      },
      'menu': true,
      'storage': {
        'uri': 'data:,',
      },
      'storage-menu': '<textarea id=uri></textarea>',
      'title': 'URIViewer.htm',
    });
    canvas_init();
}

var image = new Image;
