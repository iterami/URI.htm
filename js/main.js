'use strict';

function repo_init(){
    core_repo_init({
      'events': {
        'file-to-uri': {
          'onclick': function(){
              core_file({
                'file': document.getElementById('file').files[0],
                'todo': function(event){
                    document.getElementById('uri').value = event.target.result;
                },
              });
          },
        },
        'open': {
          'onclick': function(){
              window.open(document.getElementById('uri').value);
          },
        },
      },
      'info': '<textarea id=uri></textarea><br><input id=open type=button value="Open URI in New Tab"><hr>'
        + '<input id=file type=file><input id=file-to-uri type=button value="Convert File to URI">',
      'menu': true,
      'storage': {
        'uri': 'data:,',
      },
      'title': 'URI.htm',
    });
}
