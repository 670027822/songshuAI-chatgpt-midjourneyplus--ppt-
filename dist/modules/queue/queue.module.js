'use strict';function _0xca48(_0x34c7e3,_0x40689e){const _0xbc5f57=_0xbc5f();return _0xca48=function(_0xca485c,_0x3f3546){_0xca485c=_0xca485c-0x83;let _0x164704=_0xbc5f57[_0xca485c];return _0x164704;},_0xca48(_0x34c7e3,_0x40689e);}const _0x4c6503=_0xca48;function _0xbc5f(){const _0x17de1c=['12NeKMyu','11gjqcEH','QueueProcessor','REDIS_PASSWORD','password','BullModule','__decorate','__esModule','object','48SFkqtp','1608860kJJmyx','defineProperty','114300eQhSyY','./queue.process','2896452kOgdvs','REDIS_PORT','QueueModule','73685izLodp','decorate','15036HemGFZ','335222OXDyBr','3pEgZWQ','208LDvJrA','@nestjs/bull','@nestjs/common','MJDRAW','function','./queue.controller','length','env','64458EhABTW','./queue.service','registerQueueAsync'];_0xbc5f=function(){return _0x17de1c;};return _0xbc5f();}(function(_0x136175,_0x1b959f){const _0x1ad942=_0xca48,_0x377e54=_0x136175();while(!![]){try{const _0xc34084=parseInt(_0x1ad942(0x9f))/0x1+parseInt(_0x1ad942(0x86))/0x2*(parseInt(_0x1ad942(0x87))/0x3)+parseInt(_0x1ad942(0x93))/0x4*(-parseInt(_0x1ad942(0x83))/0x5)+parseInt(_0x1ad942(0x9c))/0x6*(-parseInt(_0x1ad942(0x85))/0x7)+-parseInt(_0x1ad942(0x88))/0x8*(parseInt(_0x1ad942(0x90))/0x9)+-parseInt(_0x1ad942(0x9d))/0xa+parseInt(_0x1ad942(0x94))/0xb*(parseInt(_0x1ad942(0xa1))/0xc);if(_0xc34084===_0x1b959f)break;else _0x377e54['push'](_0x377e54['shift']());}catch(_0xdae3c6){_0x377e54['push'](_0x377e54['shift']());}}}(_0xbc5f,0x1c065));var __decorate=this&&this[_0x4c6503(0x99)]||function(_0x4e772f,_0x476d5e,_0x3d10cc,_0x8efa35){const _0x3b3521=_0x4c6503;var _0x203c12=arguments[_0x3b3521(0x8e)],_0x2be7e3=_0x203c12<0x3?_0x476d5e:_0x8efa35===null?_0x8efa35=Object['getOwnPropertyDescriptor'](_0x476d5e,_0x3d10cc):_0x8efa35,_0x5835a6;if(typeof Reflect===_0x3b3521(0x9b)&&typeof Reflect[_0x3b3521(0x84)]===_0x3b3521(0x8c))_0x2be7e3=Reflect[_0x3b3521(0x84)](_0x4e772f,_0x476d5e,_0x3d10cc,_0x8efa35);else{for(var _0x30fd97=_0x4e772f['length']-0x1;_0x30fd97>=0x0;_0x30fd97--)if(_0x5835a6=_0x4e772f[_0x30fd97])_0x2be7e3=(_0x203c12<0x3?_0x5835a6(_0x2be7e3):_0x203c12>0x3?_0x5835a6(_0x476d5e,_0x3d10cc,_0x2be7e3):_0x5835a6(_0x476d5e,_0x3d10cc))||_0x2be7e3;}return _0x203c12>0x3&&_0x2be7e3&&Object[_0x3b3521(0x9e)](_0x476d5e,_0x3d10cc,_0x2be7e3),_0x2be7e3;};Object[_0x4c6503(0x9e)](exports,_0x4c6503(0x9a),{'value':!![]}),exports[_0x4c6503(0xa3)]=void 0x0;const common_1=require(_0x4c6503(0x8a)),queue_controller_1=require(_0x4c6503(0x8d)),queue_service_1=require(_0x4c6503(0x91)),bull_1=require(_0x4c6503(0x89)),queue_process_1=require(_0x4c6503(0xa0));let QueueModule=class QueueModule{};QueueModule=__decorate([(0x0,common_1['Module'])({'imports':[bull_1[_0x4c6503(0x98)][_0x4c6503(0x92)]({'name':_0x4c6503(0x8b),'useFactory':()=>{const _0x4c068c=_0x4c6503,_0x8e1887={'port':+process['env'][_0x4c068c(0xa2)],'host':process[_0x4c068c(0x8f)]['REDIS_HOST']};return process[_0x4c068c(0x8f)][_0x4c068c(0x96)]&&(_0x8e1887[_0x4c068c(0x97)]=process[_0x4c068c(0x8f)][_0x4c068c(0x96)]),{'redis':_0x8e1887};}})],'controllers':[queue_controller_1['QueueController']],'providers':[queue_service_1['QueueService'],queue_process_1[_0x4c6503(0x95)]]})],QueueModule),exports[_0x4c6503(0xa3)]=QueueModule;