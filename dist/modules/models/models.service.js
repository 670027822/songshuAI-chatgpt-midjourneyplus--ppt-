'use strict';function _0x54ac(){const _0x3c6e70=['./modelType.entity','modelsEntity','id\x20=\x20:id','model','key','\x20欠费或被官方封禁导致不可用，已被系统自动锁定','lockKey','__decorate','keyStatus','InjectRepository','parse','2wIKbWl','error:\x20','getOwnPropertyDescriptor','模型\x20','update','HttpStatus','secret','keyList','defineProperty','getRandomItemFromArray','refreshBaiduAccesstoken','getRandomDrawKey','keys','2217117ycxVwy','getAccessToken','getAllKey','hideString','forEach','../chatgpt/baidu','当前账号不存在！','HttpException','917855QXYHKo','16283916fdEsLj','find','metadata','getCurrentModelKeyInfo','ModelsMapCn','../../common/utils','1053176ZRMpvM','where','design:paramtypes','@nestjs/typeorm','tts-1-hd','delete','typeorm','length','log','stringify','useToken\x20+\x20','map','当前未指定特殊模型KEY、前往后台模型池设置吧！','__esModule','缺失必要参数！','ModelsService','initCalcKey','keyType','val','saveUseLog','function','findAndCount','object','modelMaps','\x20中找不到','ModelsEntity','BAD_REQUEST','setModel','modelName','5847108XIqZqN','当前调用模型已经被移除、请重新选择模型！','filter','keyInfo','../../common/constants/status.constant','values','keyPoolMap','getBaseConfig','parse\x20error:\x20','modelTypes','@nestjs/common','keyPoolIndexMap','4935265kLkvll','queryModelType','super','createQueryBuilder','useCount\x20+\x201','queryModels','6657ezkBWr','onModuleInit','error','Repository','\x20在\x20','Injectable','696TDTgoB','status','push','tts-1','user','decorate','modelsList','reduce'];_0x54ac=function(){return _0x3c6e70;};return _0x54ac();}function _0x30eb(_0x15a236,_0x297ba0){const _0x54ace9=_0x54ac();return _0x30eb=function(_0x30eb99,_0x4a5ac8){_0x30eb99=_0x30eb99-0x15e;let _0x5e0f83=_0x54ace9[_0x30eb99];return _0x5e0f83;},_0x30eb(_0x15a236,_0x297ba0);}const _0x4ba93e=_0x30eb;(function(_0x3250c2,_0x23619a){const _0x165512=_0x30eb,_0x479192=_0x3250c2();while(!![]){try{const _0x2fe7ba=-parseInt(_0x165512(0x164))/0x1*(-parseInt(_0x165512(0x1b3))/0x2)+parseInt(_0x165512(0x19a))/0x3*(-parseInt(_0x165512(0x1a0))/0x4)+parseInt(_0x165512(0x194))/0x5+parseInt(_0x165512(0x188))/0x6+-parseInt(_0x165512(0x1c0))/0x7+parseInt(_0x165512(0x16b))/0x8+-parseInt(_0x165512(0x165))/0x9;if(_0x2fe7ba===_0x23619a)break;else _0x479192['push'](_0x479192['shift']());}catch(_0x44d313){_0x479192['push'](_0x479192['shift']());}}}(_0x54ac,0x79ce0));var __decorate=this&&this[_0x4ba93e(0x1af)]||function(_0x396b41,_0x8afc09,_0x38ce4a,_0x4add08){const _0x1e0427=_0x4ba93e;var _0x272ee7=arguments['length'],_0x3e10ef=_0x272ee7<0x3?_0x8afc09:_0x4add08===null?_0x4add08=Object[_0x1e0427(0x1b5)](_0x8afc09,_0x38ce4a):_0x4add08,_0x131d11;if(typeof Reflect===_0x1e0427(0x181)&&typeof Reflect[_0x1e0427(0x1a5)]===_0x1e0427(0x17f))_0x3e10ef=Reflect['decorate'](_0x396b41,_0x8afc09,_0x38ce4a,_0x4add08);else{for(var _0x2210e5=_0x396b41[_0x1e0427(0x172)]-0x1;_0x2210e5>=0x0;_0x2210e5--)if(_0x131d11=_0x396b41[_0x2210e5])_0x3e10ef=(_0x272ee7<0x3?_0x131d11(_0x3e10ef):_0x272ee7>0x3?_0x131d11(_0x8afc09,_0x38ce4a,_0x3e10ef):_0x131d11(_0x8afc09,_0x38ce4a))||_0x3e10ef;}return _0x272ee7>0x3&&_0x3e10ef&&Object[_0x1e0427(0x1bb)](_0x8afc09,_0x38ce4a,_0x3e10ef),_0x3e10ef;},__metadata=this&&this['__metadata']||function(_0x56046f,_0xe1a729){const _0x437ad5=_0x4ba93e;if(typeof Reflect===_0x437ad5(0x181)&&typeof Reflect[_0x437ad5(0x167)]===_0x437ad5(0x17f))return Reflect[_0x437ad5(0x167)](_0x56046f,_0xe1a729);},__param=this&&this['__param']||function(_0xc7e008,_0x59da40){return function(_0x1119d3,_0x49a8e1){_0x59da40(_0x1119d3,_0x49a8e1,_0xc7e008);};};Object[_0x4ba93e(0x1bb)](exports,_0x4ba93e(0x178),{'value':!![]}),exports[_0x4ba93e(0x17a)]=void 0x0;const common_1=require(_0x4ba93e(0x192)),typeorm_1=require(_0x4ba93e(0x16e)),typeorm_2=require(_0x4ba93e(0x171)),models_entity_1=require('./models.entity'),status_constant_1=require(_0x4ba93e(0x18c)),baidu_1=require(_0x4ba93e(0x161)),utils_1=require(_0x4ba93e(0x16a)),modelType_entity_1=require(_0x4ba93e(0x1a8));let ModelsService=class ModelsService{constructor(_0x1fe12a,_0x46d58e){const _0x3aafd7=_0x4ba93e;this[_0x3aafd7(0x1a9)]=_0x1fe12a,this['modelsTypeEntity']=_0x46d58e,this[_0x3aafd7(0x191)]=[],this['modelMaps']={},this[_0x3aafd7(0x1ba)]={},this['keyPoolMap']={},this[_0x3aafd7(0x193)]={};}async[_0x4ba93e(0x19b)](){const _0x42f3f8=_0x4ba93e;await this[_0x42f3f8(0x17b)](),this[_0x42f3f8(0x1bd)]();}async['initCalcKey'](){const _0x346235=_0x4ba93e;this[_0x346235(0x18e)]={},this[_0x346235(0x193)]={},this[_0x346235(0x1ba)]={},this[_0x346235(0x182)]={},this[_0x346235(0x191)]=[];const _0x44ee17=await this[_0x346235(0x1a9)][_0x346235(0x166)]({'where':{'status':!![]}}),_0xfcd005=_0x44ee17[_0x346235(0x1a7)]((_0x593982,_0x132e26)=>{const _0x19f8b4=_0x346235;return!_0x593982[_0x132e26[_0x19f8b4(0x17c)]]?_0x593982[_0x132e26[_0x19f8b4(0x17c)]]=[_0x132e26]:_0x593982[_0x132e26[_0x19f8b4(0x17c)]][_0x19f8b4(0x1a2)](_0x132e26),_0x593982;},{});this[_0x346235(0x191)]=Object[_0x346235(0x1bf)](_0xfcd005)[_0x346235(0x176)](_0x2fe1be=>{const _0x4d4d21=_0x346235;return{'label':status_constant_1[_0x4d4d21(0x169)][_0x2fe1be],'val':_0x2fe1be};}),this[_0x346235(0x182)]=_0xfcd005,this['keyList']={},_0x44ee17[_0x346235(0x160)](_0x1f48e1=>{const _0x24e07a=_0x346235,{keyType:_0x3b308e,model:_0x5a0fd0,keyWeight:_0x46d154}=_0x1f48e1;if(!this[_0x24e07a(0x18e)][_0x5a0fd0])this[_0x24e07a(0x18e)][_0x5a0fd0]=[];for(let _0x4b1948=0x0;_0x4b1948<_0x46d154;_0x4b1948++){this[_0x24e07a(0x18e)][_0x5a0fd0]['push'](_0x1f48e1);}if(!this[_0x24e07a(0x193)][_0x5a0fd0])this[_0x24e07a(0x193)][_0x5a0fd0]=0x0;if(!this[_0x24e07a(0x1ba)][_0x3b308e])this[_0x24e07a(0x1ba)][_0x3b308e]={};if(!this[_0x24e07a(0x1ba)][_0x3b308e][_0x5a0fd0])this['keyList'][_0x3b308e][_0x5a0fd0]=[];this[_0x24e07a(0x1ba)][_0x3b308e][_0x5a0fd0][_0x24e07a(0x1a2)](_0x1f48e1);});}async[_0x4ba93e(0x1ae)](_0x184ab8,_0x4d4f12,_0x55e666=-0x1){const _0xdbf7bd=_0x4ba93e,_0x24b4e6=await this[_0xdbf7bd(0x1a9)][_0xdbf7bd(0x1b7)]({'id':_0x184ab8},{'status':![],'keyStatus':_0x55e666,'remark':_0x4d4f12});common_1['Logger'][_0xdbf7bd(0x19c)]('key:\x20'+_0x184ab8+_0xdbf7bd(0x1ad)),this['initCalcKey']();}async[_0x4ba93e(0x168)](_0x401702,_0x49312b){const _0xdeb4c4=_0x4ba93e;if(!this[_0xdeb4c4(0x18e)][_0x401702])throw new common_1[(_0xdeb4c4(0x163))](_0xdeb4c4(0x189),common_1[_0xdeb4c4(0x1b8)]['BAD_REQUEST']);const _0x479096=this['keyPoolMap'][_0x401702][_0xdeb4c4(0x18a)](_0x29196d=>_0x29196d[_0xdeb4c4(0x187)]===_0x49312b);if(_0x479096['length']===0x0)throw new common_1['HttpException'](_0xdeb4c4(0x1b6)+_0x49312b+_0xdeb4c4(0x19e)+_0x401702+_0xdeb4c4(0x183),common_1[_0xdeb4c4(0x1b8)]['BAD_REQUEST']);const _0x2193e9=_0x479096[0x0];return console['log']('ModelsEntity',models_entity_1['ModelsEntity']),_0x2193e9;}async[_0x4ba93e(0x18f)](_0x327e18){const _0x5ced74=_0x4ba93e;if(!this[_0x5ced74(0x191)][_0x5ced74(0x172)]||!Object[_0x5ced74(0x1bf)](this[_0x5ced74(0x182)])[_0x5ced74(0x172)])return;const _0x2bc726=_0x327e18?this['modelTypes'][_0x5ced74(0x166)](_0x5a4f0f=>Number(_0x5a4f0f[_0x5ced74(0x17d)])===0x1):this[_0x5ced74(0x191)][0x0];if(!_0x2bc726)return;const {keyType:_0x187653,modelName:_0x461149,model:_0x40f98f,maxModelTokens:_0x33ff6a,maxResponseTokens:_0x3406a3,deductType:_0x45ec9e,deduct:_0x5f1429,maxRounds:_0x3b2743}=this[_0x5ced74(0x182)][_0x2bc726[_0x5ced74(0x17d)]][0x0];return{'modelTypeInfo':_0x2bc726,'modelInfo':{'keyType':_0x187653,'modelName':_0x461149,'model':_0x40f98f,'maxModelTokens':_0x33ff6a,'maxResponseTokens':_0x3406a3,'topN':0.8,'systemMessage':'','deductType':_0x45ec9e,'deduct':_0x5f1429,'maxRounds':_0x3b2743,'rounds':0x8}};}async[_0x4ba93e(0x186)](_0x47fa14){const _0x13251d=_0x4ba93e;try{const {id:_0x5c932f}=_0x47fa14;_0x47fa14[_0x13251d(0x1a1)]&&(_0x47fa14[_0x13251d(0x1b0)]=0x1);if(_0x5c932f){const _0x132064=await this[_0x13251d(0x1a9)][_0x13251d(0x1b7)]({'id':_0x5c932f},_0x47fa14);return await this[_0x13251d(0x17b)](),_0x132064['affected']>0x0;}else{const {keyType:_0xbe6ac8,key:_0x5da503}=_0x47fa14;if(Number(_0xbe6ac8!==0x1)){const _0xc4c914=await this[_0x13251d(0x1a9)]['save'](_0x47fa14);return await this[_0x13251d(0x17b)](),_0xbe6ac8===0x2&&this['refreshBaiduAccesstoken'](),_0xc4c914;}else{const _0x370131=_0x5da503[_0x13251d(0x176)](_0x41c382=>{const _0x3d8b7b=_0x13251d;try{const _0x3040be=JSON[_0x3d8b7b(0x1b2)](JSON[_0x3d8b7b(0x174)](_0x47fa14));return _0x3040be[_0x3d8b7b(0x1ac)]=_0x41c382,_0x3040be;}catch(_0x44b260){console[_0x3d8b7b(0x173)](_0x3d8b7b(0x190),_0x44b260);}}),_0x1ee78c=await this[_0x13251d(0x1a9)]['save'](_0x370131);return await this['initCalcKey'](),_0x1ee78c;}}}catch(_0xbc9761){console[_0x13251d(0x173)](_0x13251d(0x1b4),_0xbc9761);}}async['delModel']({id:_0x15fb53}){const _0x2cf7a4=_0x4ba93e;if(!_0x15fb53)throw new common_1[(_0x2cf7a4(0x163))](_0x2cf7a4(0x179),common_1[_0x2cf7a4(0x1b8)]['BAD_REQUEST']);const _0x4b155a=await this[_0x2cf7a4(0x1a9)]['findOne']({'where':{'id':_0x15fb53}});if(!_0x4b155a)throw new common_1['HttpException'](_0x2cf7a4(0x162),common_1[_0x2cf7a4(0x1b8)][_0x2cf7a4(0x185)]);const _0x1bc865=await this[_0x2cf7a4(0x1a9)][_0x2cf7a4(0x170)]({'id':_0x15fb53});return await this[_0x2cf7a4(0x17b)](),_0x1bc865;}async[_0x4ba93e(0x199)](_0x57ee59,_0x41644f){const _0x1c4cb1=_0x4ba93e,{role:_0x201e34}=_0x57ee59[_0x1c4cb1(0x1a4)],{keyType:_0x55fbea,key:_0x162cb7,status:_0x27880d,model:_0x26d6fa,page:page=0x1,size:size=0xa}=_0x41644f;let _0x4defa5={};_0x55fbea&&(_0x4defa5[_0x1c4cb1(0x17c)]=_0x55fbea),_0x26d6fa&&(_0x4defa5['model']=_0x26d6fa),_0x27880d&&(_0x4defa5[_0x1c4cb1(0x1a1)]=Number(_0x27880d)===0x1?!![]:![]),_0x162cb7&&(_0x4defa5[_0x1c4cb1(0x1ac)]=(0x0,typeorm_2['Like'])('%'+_0x162cb7+'%'));const [_0x278f2f,_0x5bc4c2]=await this[_0x1c4cb1(0x1a9)][_0x1c4cb1(0x180)]({'where':_0x4defa5,'skip':(page-0x1)*size,'take':size});return _0x201e34!==_0x1c4cb1(0x196)&&_0x278f2f[_0x1c4cb1(0x160)](_0x553f14=>{const _0x7a8041=_0x1c4cb1;_0x553f14[_0x7a8041(0x1ac)]&&(_0x553f14[_0x7a8041(0x1ac)]=(0x0,utils_1[_0x7a8041(0x15f)])(_0x553f14[_0x7a8041(0x1ac)])),_0x553f14[_0x7a8041(0x1b9)]&&(_0x553f14['secret']=(0x0,utils_1[_0x7a8041(0x15f)])(_0x553f14['secret']));}),{'rows':_0x278f2f,'count':_0x5bc4c2};}async[_0x4ba93e(0x1a6)](){const _0x513269=_0x4ba93e,_0x4a26cf=JSON['parse'](JSON[_0x513269(0x174)](this[_0x513269(0x182)]));return Object['keys'](_0x4a26cf)[_0x513269(0x160)](_0x584e96=>{const _0x5f34e1=_0x513269;_0x4a26cf[_0x584e96]=Array['from'](_0x4a26cf[_0x584e96][_0x5f34e1(0x18a)](_0x210c34=>_0x210c34[_0x5f34e1(0x1ab)]!==_0x5f34e1(0x16f)&&_0x210c34[_0x5f34e1(0x1ab)]!==_0x5f34e1(0x1a3))[_0x5f34e1(0x176)](_0x50d48e=>{const {modelName:_0x54b6b0,model:_0x2b6a61,deduct:_0x5e57be,deductType:_0x14b63a,maxRounds:_0x4270d7}=_0x50d48e;return{'modelName':_0x54b6b0,'model':_0x2b6a61,'deduct':_0x5e57be,'deductType':_0x14b63a,'maxRounds':_0x4270d7};})[_0x5f34e1(0x1a7)]((_0x3e5745,_0x5ea1df)=>_0x3e5745['set'](_0x5ea1df[_0x5f34e1(0x187)],_0x5ea1df),new Map())[_0x5f34e1(0x18d)]());}),{'modelTypeList':this[_0x513269(0x191)],'modelMaps':_0x4a26cf};}async[_0x4ba93e(0x17e)](_0x10ab56,_0x48699d){const _0x173bf8=_0x4ba93e;await this[_0x173bf8(0x1a9)][_0x173bf8(0x197)]()['update'](models_entity_1[_0x173bf8(0x184)])['set']({'useCount':()=>_0x173bf8(0x198),'useToken':()=>_0x173bf8(0x175)+_0x48699d})[_0x173bf8(0x16c)](_0x173bf8(0x1aa),{'id':_0x10ab56})['execute']();}async[_0x4ba93e(0x1bd)](){const _0xa7da21=_0x4ba93e,_0x3dc353=await this[_0xa7da21(0x1a9)]['find']({'where':{'keyType':0x2}}),_0x167a1e={};_0x3dc353[_0xa7da21(0x160)](_0x208154=>{const _0x3a367b=_0xa7da21,{key:_0x48a17e,secret:_0x5d6928}=_0x208154;!_0x167a1e['key']?_0x167a1e[_0x48a17e]=[{'keyInfo':_0x208154}]:_0x167a1e[_0x48a17e][_0x3a367b(0x1a2)](_0x208154);}),Object['keys'](_0x167a1e)[_0xa7da21(0x160)](async _0x28337b=>{const _0x1076b4=_0xa7da21,{secret:_0x421cda,id:_0x4486ec}=_0x167a1e[_0x28337b][0x0][_0x1076b4(0x18b)],_0x5be8b4=await(0x0,baidu_1[_0x1076b4(0x1c1)])(_0x28337b,_0x421cda);await this[_0x1076b4(0x1a9)][_0x1076b4(0x1b7)]({'key':_0x28337b},{'accessToken':_0x5be8b4});}),setTimeout(()=>{const _0x53f150=_0xa7da21;this[_0x53f150(0x17b)]();},0x3e8);}async[_0x4ba93e(0x1be)](){const _0x310dfc=_0x4ba93e,_0x343d5e=await this[_0x310dfc(0x1a9)]['find']({'where':{'isDraw':!![],'status':!![]}});if(!_0x343d5e[_0x310dfc(0x172)])throw new common_1[(_0x310dfc(0x163))](_0x310dfc(0x177),common_1[_0x310dfc(0x1b8)][_0x310dfc(0x185)]);return(0x0,utils_1[_0x310dfc(0x1bc)])(_0x343d5e);}async[_0x4ba93e(0x15e)](){const _0x59862b=_0x4ba93e;return await this[_0x59862b(0x1a9)]['find']();}async[_0x4ba93e(0x195)](_0x45cd25){return 0x1;}async['setModelType'](_0x39437c){return 0x1;}async['delModelType'](_0x3c7bc7){return 0x1;}};ModelsService=__decorate([(0x0,common_1[_0x4ba93e(0x19f)])(),__param(0x0,(0x0,typeorm_1[_0x4ba93e(0x1b1)])(models_entity_1['ModelsEntity'])),__param(0x1,(0x0,typeorm_1['InjectRepository'])(modelType_entity_1['ModelsTypeEntity'])),__metadata(_0x4ba93e(0x16d),[typeorm_2[_0x4ba93e(0x19d)],typeorm_2[_0x4ba93e(0x19d)]])],ModelsService),exports['ModelsService']=ModelsService;