'use strict';

function repo_init(){
    core_repo_init({
      'events': {
        'file-to-uri': {
          'onclick': function(){
              let files = document.getElementById('file').files;
              if(files.length === 0){
                  return;
              }

              core_file({
                'file': files[0],
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
        'parse': {
          'onclick': function(){
              let result = '';
              let uri = new URL(document.getElementById('uri').value);

              let components = {
                'hash': uri['hash'],
                'host': uri['host'],
                'origin': uri['origin'],
                'pathname': '<textarea>' + uri['pathname'] + '</textarea>',
                'port': uri['port'],
                'protocol': uri['protocol'],
                'search': uri['search'],
              };

              for(let component in components){
                  result += '<tr><td>' + component + '<td>' + components[component];
              }

              document.getElementById('parsed').innerHTML = result;
          },
        },
        'parse-clear': {
          'onclick': function(){
              document.getElementById('parsed').innerHTML = '';
          },
        },
      },
      'info': '<textarea id=uri></textarea><br>'
        + '<input id=open type=button value="Open URI in New Tab">'
        + '<input id=parse type=button value="Parse URI"><input id=parse-clear type=button value="Clear Parse">'
        + '<table id=parsed></table><hr>'
        + '<input id=file type=file><input id=file-to-uri type=button value="Convert File to URI">',
      'menu': true,
      'storage': {
        'uri': 'data:,',
      },
      'title': 'URI.htm',
    });
}
