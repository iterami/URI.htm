'use strict';

function repo_init(){
    core_repo_init({
      'events': {
        'file-to-uri': {
          'onclick': function(){
              const files = document.getElementById('file').files;
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
              globalThis.open(
                document.getElementById('uri').value,
                '_blank',
                'noreferrer'
              );
          },
        },
        'parse': {
          'onclick': function(){
              let result = '';
              const uri = new URL(document.getElementById('uri').value);

              const components = {
                'hash': uri['hash'],
                'host': uri['host'],
                'origin': uri['origin'],
                'pathname': '<textarea readonly>' + uri['pathname'] + '</textarea>',
                'port': uri['port'],
                'protocol': uri['protocol'],
                'search': uri['search'],
              };

              for(const component in components){
                  result += '<tr><td>' + component + '<td>' + components[component];
              }

              document.getElementById('parsed').innerHTML = result;
          },
        },
        'parse-clear': {
          'onclick': function(){
              document.getElementById('parsed').textContent = '';
          },
        },
      },
      'info': '<textarea id=uri></textarea><br>'
        + '<button id=open type=button>Open URI</button>'
        + '<button id=parse type=button>Parse URI</button><button id=parse-clear type=button>Clear Parse</button>'
        + '<table id=parsed></table><hr>'
        + '<input id=file type=file><button id=file-to-uri type=button>Convert File to URI</button>',
      'menu-lock': true,
      'storage': {
        'uri': 'data:,',
      },
      'title': 'URI.htm',
    });
}
