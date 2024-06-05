'use strict';

function repo_init(){
    core_repo_init({
      'events': {
        'file-to-uri': {
          'onclick': function(){
              const files = core_elements['file'].files;
              if(files.length === 0){
                  return;
              }

              core_file({
                'file': files[0],
                'todo': function(event){
                    core_elements['uri'].value = event.target.result;
                },
              });
          },
        },
        'open': {
          'onclick': function(){
              globalThis.open(
                core_elements['uri'],
                '_blank',
                'noreferrer'
              );
          },
        },
        'parse': {
          'onclick': function(){
              if(core_elements['parsed'].textContent.length > 0){
                  core_elements['parsed'].textContent = '';
                  return;
              }

              let result = '';
              const uri = new URL(core_elements['uri'].value);

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

              core_elements['parsed'].innerHTML = result;
          },
        },
      },
      'info': '<textarea id=uri></textarea><br>'
        + '<button id=open type=button>Open URI</button>'
        + '<button id=parse type=button>Toggle Parse</button>'
        + '<table id=parsed></table><hr>'
        + '<input id=file type=file><button id=file-to-uri type=button>Convert File to URI</button>',
      'menu-lock': true,
      'storage': {
        'uri': 'data:,',
      },
      'title': 'URI.htm',
      'ui-elements': [
        'file',
        'parsed',
        'uri',
      ],
    });
}
