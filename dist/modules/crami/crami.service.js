'use strict';const _0x277180=_0x2e97;function _0x3025(){const _0x507c50=['50BSBJlW','maskCrami','2303448WHUUFX','__esModule','findAndCount','4kidzYS','object','decorate','generateCramiCode','当前卡密不存在、请确认您要删除的卡密是否存在！','当前卡密已被使用、请确认您输入的卡密是否正确！','2378745jryXAi','@nestjs/typeorm','更新套餐失败、请重试！','当前套餐下存在卡密、请先删除卡密后才可删除套餐！','当前卡密已被使用、已使用的卡密禁止删除！','删除卡密失败、请重试！','delCrami','CramiPackageEntity','../../common/constants/balance.constant','save','cramiEntity','batchDelCrami','create','6256tlhOgL','update','当前卡密不存在、请确认您输入的卡密是否正确！','HttpException','affected','queryAllPackage','DESC','name','LessThanOrEqual','HttpStatus','1996965HBDjGQ','6251DmNhvJ','queryOnePackage','当前套餐不存在、请检查你的输入参数！','../../common/utils','Not','当前套餐不存在、请确认您选择的套餐是否存在！','saveRecordRechargeLog','Injectable','useId','userBalanceService','1161134ihjeRj','使用卡密成功','delete','315942UCkaKI','UserBalanceService','push','../user/user.entity','Repository','generateCrami','__metadata','findOne','packageName','userEntity','log','map','role','every','自定义卡密必须至少一项余额不为0️零！','super','count','defineProperty','__decorate','typeorm','packageId','code','getOwnPropertyDescriptor','username','BAD_REQUEST','forEach','status','套餐名称或套餐等级重复、请检查！','find','./crami.entity','email','metadata','CramiEntity','maskEmail','862047hlDdKD','length','__param','function','user','error:\x20','design:paramtypes','./cramiPackage.entity','cramiPackageEntity','RechargeType','MoreThan','assign','InjectRepository','PACKAGE_GIFT','updatePackage','useCrami'];_0x3025=function(){return _0x507c50;};return _0x3025();}(function(_0x553621,_0x60c7a0){const _0x2a3b6f=_0x2e97,_0x3cdb72=_0x553621();while(!![]){try{const _0xb8eb81=parseInt(_0x2a3b6f(0x204))/0x1+parseInt(_0x2a3b6f(0x1df))/0x2+-parseInt(_0x2a3b6f(0x1e2))/0x3*(-parseInt(_0x2a3b6f(0x219))/0x4)+parseInt(_0x2a3b6f(0x21f))/0x5+parseInt(_0x2a3b6f(0x216))/0x6+-parseInt(_0x2a3b6f(0x1d5))/0x7*(parseInt(_0x2a3b6f(0x1ca))/0x8)+-parseInt(_0x2a3b6f(0x1d4))/0x9*(parseInt(_0x2a3b6f(0x214))/0xa);if(_0xb8eb81===_0x60c7a0)break;else _0x3cdb72['push'](_0x3cdb72['shift']());}catch(_0x55b318){_0x3cdb72['push'](_0x3cdb72['shift']());}}}(_0x3025,0x9271a));var __decorate=this&&this[_0x277180(0x1f4)]||function(_0x30830d,_0x2d9a0c,_0x6c6456,_0x3dfd07){const _0x1ed71e=_0x277180;var _0x574fd4=arguments[_0x1ed71e(0x205)],_0x1b66ad=_0x574fd4<0x3?_0x2d9a0c:_0x3dfd07===null?_0x3dfd07=Object[_0x1ed71e(0x1f8)](_0x2d9a0c,_0x6c6456):_0x3dfd07,_0x27bf1b;if(typeof Reflect===_0x1ed71e(0x21a)&&typeof Reflect['decorate']===_0x1ed71e(0x207))_0x1b66ad=Reflect[_0x1ed71e(0x21b)](_0x30830d,_0x2d9a0c,_0x6c6456,_0x3dfd07);else{for(var _0x1687fb=_0x30830d['length']-0x1;_0x1687fb>=0x0;_0x1687fb--)if(_0x27bf1b=_0x30830d[_0x1687fb])_0x1b66ad=(_0x574fd4<0x3?_0x27bf1b(_0x1b66ad):_0x574fd4>0x3?_0x27bf1b(_0x2d9a0c,_0x6c6456,_0x1b66ad):_0x27bf1b(_0x2d9a0c,_0x6c6456))||_0x1b66ad;}return _0x574fd4>0x3&&_0x1b66ad&&Object[_0x1ed71e(0x1f3)](_0x2d9a0c,_0x6c6456,_0x1b66ad),_0x1b66ad;},__metadata=this&&this[_0x277180(0x1e8)]||function(_0x50d74e,_0x5f4bbf){const _0x11f4ee=_0x277180;if(typeof Reflect===_0x11f4ee(0x21a)&&typeof Reflect[_0x11f4ee(0x201)]===_0x11f4ee(0x207))return Reflect[_0x11f4ee(0x201)](_0x50d74e,_0x5f4bbf);},__param=this&&this[_0x277180(0x206)]||function(_0xe03bbd,_0x57638f){return function(_0x5baa74,_0x13b22b){_0x57638f(_0x5baa74,_0x13b22b,_0xe03bbd);};};Object[_0x277180(0x1f3)](exports,_0x277180(0x217),{'value':!![]}),exports['CramiService']=void 0x0;const common_1=require('@nestjs/common'),crami_entity_1=require(_0x277180(0x1ff)),typeorm_1=require(_0x277180(0x220)),typeorm_2=require(_0x277180(0x1f5)),cramiPackage_entity_1=require(_0x277180(0x20b)),utils_1=require(_0x277180(0x1d8)),user_entity_1=require(_0x277180(0x1e5)),userBalance_service_1=require('../userBalance/userBalance.service'),balance_constant_1=require(_0x277180(0x1c5));function _0x2e97(_0x4bd4be,_0x40a440){const _0x3025b4=_0x3025();return _0x2e97=function(_0x2e9781,_0x4cd5a0){_0x2e9781=_0x2e9781-0x1c1;let _0x21c15d=_0x3025b4[_0x2e9781];return _0x21c15d;},_0x2e97(_0x4bd4be,_0x40a440);}let CramiService=class CramiService{constructor(_0x54c4c3,_0x11cf11,_0x70646,_0x10eacb){const _0x506fbf=_0x277180;this[_0x506fbf(0x1c7)]=_0x54c4c3,this[_0x506fbf(0x20c)]=_0x11cf11,this[_0x506fbf(0x1eb)]=_0x70646,this[_0x506fbf(0x1de)]=_0x10eacb;}async[_0x277180(0x1d6)](_0x3ab33d){const _0xea610c=_0x277180;return await this[_0xea610c(0x20c)][_0xea610c(0x1e9)]({'where':{'id':_0x3ab33d}});}async[_0x277180(0x1cf)](_0x2893ca){const _0x3b166f=_0x277180;try{const {page:page=0x1,size:size=0xa,name:_0x2601d5,status:_0x2fd0a1,type:_0x12fa6c}=_0x2893ca,_0x224e0f={};_0x2601d5&&Object[_0x3b166f(0x20f)](_0x224e0f,{'name':(0x0,typeorm_2['Like'])('%'+_0x2601d5+'%')}),_0x2fd0a1&&Object[_0x3b166f(0x20f)](_0x224e0f,{'status':_0x2fd0a1});_0x12fa6c&&(_0x12fa6c>0x0?Object['assign'](_0x224e0f,{'days':(0x0,typeorm_2[_0x3b166f(0x20e)])(0x0)}):Object[_0x3b166f(0x20f)](_0x224e0f,{'days':(0x0,typeorm_2[_0x3b166f(0x1d2)])(0x0)}));const [_0x120f9f,_0x1090a1]=await this['cramiPackageEntity'][_0x3b166f(0x218)]({'skip':(page-0x1)*size,'take':size,'where':_0x224e0f,'order':{'order':_0x3b166f(0x1d0)}});return{'rows':_0x120f9f,'count':_0x1090a1};}catch(_0xee9a75){console[_0x3b166f(0x1ec)](_0x3b166f(0x209),_0xee9a75);}}async['createPackage'](_0x27ffa7){const _0x4c5501=_0x277180,{name:_0x5c88a5,weight:_0x379409}=_0x27ffa7,_0x58e6f2=await this[_0x4c5501(0x20c)][_0x4c5501(0x1e9)]({'where':[{'name':_0x5c88a5},{'weight':_0x379409}]});if(_0x58e6f2)throw new common_1[(_0x4c5501(0x1cd))](_0x4c5501(0x1fd),common_1[_0x4c5501(0x1d3)]['BAD_REQUEST']);try{return await this[_0x4c5501(0x20c)]['save'](_0x27ffa7);}catch(_0x344dda){console[_0x4c5501(0x1ec)]('error:\x20',_0x344dda);throw new common_1[(_0x4c5501(0x1cd))](_0x344dda,common_1['HttpStatus'][_0x4c5501(0x1fa)]);}}async[_0x277180(0x212)](_0x6d3fcf){const _0x405efd=_0x277180,{id:_0x82ba99,name:_0x9e4036,weight:_0x228146}=_0x6d3fcf,_0x5e62ed=await this[_0x405efd(0x20c)]['findOne']({'where':{'id':_0x82ba99}});if(!_0x5e62ed)throw new common_1[(_0x405efd(0x1cd))](_0x405efd(0x1d7),common_1['HttpStatus'][_0x405efd(0x1fa)]);const _0xe26b83=await this[_0x405efd(0x20c)][_0x405efd(0x1f2)]({'where':[{'name':_0x9e4036,'id':(0x0,typeorm_2[_0x405efd(0x1d9)])(_0x82ba99)},{'weight':_0x228146,'id':(0x0,typeorm_2[_0x405efd(0x1d9)])(_0x82ba99)}]});if(_0xe26b83)throw new common_1['HttpException'](_0x405efd(0x1fd),common_1['HttpStatus'][_0x405efd(0x1fa)]);const _0x59655c=await this[_0x405efd(0x20c)]['update']({'id':_0x82ba99},_0x6d3fcf);if(_0x59655c['affected']>0x0)return'更新套餐成功！';else throw new common_1['HttpException'](_0x405efd(0x221),common_1[_0x405efd(0x1d3)][_0x405efd(0x1fa)]);}async['delPackage'](_0x54d476){const _0x4577d2=_0x277180,{id:_0x2173c0}=_0x54d476,_0x4b365f=await this[_0x4577d2(0x1c7)][_0x4577d2(0x1f2)]({'where':{'packageId':_0x2173c0}});if(_0x4b365f)throw new common_1[(_0x4577d2(0x1cd))](_0x4577d2(0x222),common_1[_0x4577d2(0x1d3)]['BAD_REQUEST']);return await this[_0x4577d2(0x20c)][_0x4577d2(0x1e1)]({'id':_0x2173c0});}async['createCrami'](_0xa5ebcc){const _0x1064f0=_0x277180,{packageId:_0x213c0e,count:count=0x1}=_0xa5ebcc;if(_0x213c0e){const _0xa2667a=await this[_0x1064f0(0x20c)][_0x1064f0(0x1e9)]({'where':{'id':_0x213c0e}});if(!_0xa2667a)throw new common_1[(_0x1064f0(0x1cd))](_0x1064f0(0x1da),common_1['HttpStatus'][_0x1064f0(0x1fa)]);const {days:days=-0x1,model3Count:model3Count=0x0,model4Count:model4Count=0x0,drawMjCount:drawMjCount=0x0}=_0xa2667a,_0x111917={'packageId':_0x213c0e,'days':days,'model3Count':model3Count,'model4Count':model4Count,'drawMjCount':drawMjCount};return await this[_0x1064f0(0x1e7)](_0x111917,count);}if(!_0x213c0e){const {model3Count:model3Count=0x0,model4Count:model4Count=0x0,drawMjCount:drawMjCount=0x0}=_0xa5ebcc;if([model3Count,model4Count,drawMjCount][_0x1064f0(0x1ef)](_0x4da836=>!_0x4da836))throw new common_1[(_0x1064f0(0x1cd))](_0x1064f0(0x1f0),common_1[_0x1064f0(0x1d3)]['BAD_REQUEST']);const _0x12dac8={'days':-0x1,'model3Count':model3Count,'model4Count':model4Count,'drawMjCount':drawMjCount};return await this['generateCrami'](_0x12dac8,count);}}async[_0x277180(0x1e7)](_0xf6a98,_0x32ad4f){const _0x5d4d39=_0x277180,_0x34d86d=[];for(let _0x55afcf=0x0;_0x55afcf<_0x32ad4f;_0x55afcf++){const _0x5e766c=(0x0,utils_1[_0x5d4d39(0x21c)])(),_0xd0596a=this[_0x5d4d39(0x1c7)][_0x5d4d39(0x1c9)](Object['assign'](Object[_0x5d4d39(0x20f)]({},_0xf6a98),{'code':_0x5e766c}));_0x34d86d[_0x5d4d39(0x1e4)](_0xd0596a);}return await this[_0x5d4d39(0x1c7)][_0x5d4d39(0x1c6)](_0x34d86d);}async[_0x277180(0x213)](_0x451c08,_0xaa83ca){const _0x782333=_0x277180,{id:_0x59aaac}=_0x451c08[_0x782333(0x208)],_0x5d833d=await this[_0x782333(0x1c7)]['findOne']({'where':{'code':_0xaa83ca[_0x782333(0x1f7)]}});if(!_0x5d833d)throw new common_1[(_0x782333(0x1cd))](_0x782333(0x1cc),common_1[_0x782333(0x1d3)][_0x782333(0x1fa)]);const {status:_0x1e92fa,days:days=-0x1,model3Count:model3Count=0x0,model4Count:model4Count=0x0,drawMjCount:drawMjCount=0x0,packageId:_0x346a4}=_0x5d833d;if(_0x1e92fa===0x1)throw new common_1[(_0x782333(0x1cd))](_0x782333(0x21e),common_1[_0x782333(0x1d3)][_0x782333(0x1fa)]);const _0x16966e={'model3Count':model3Count,'model4Count':model4Count,'drawMjCount':drawMjCount,'packageId':_0x346a4};return await this[_0x782333(0x1de)]['addBalanceToUser'](_0x59aaac,Object[_0x782333(0x20f)]({},_0x16966e),days),await this[_0x782333(0x1de)][_0x782333(0x1db)]({'userId':_0x59aaac,'rechargeType':balance_constant_1[_0x782333(0x20d)][_0x782333(0x211)],'model3Count':model3Count,'model4Count':model4Count,'drawMjCount':drawMjCount,'days':days}),await this[_0x782333(0x1c7)][_0x782333(0x1cb)]({'code':_0xaa83ca['code']},{'useId':_0x59aaac,'status':0x1}),_0x782333(0x1e0);}async['queryAllCrami'](_0xd7da21,_0x9a353b){const _0xa6e7a2=_0x277180,{page:page=0x1,size:size=0xa,status:_0x234e0a,useId:_0x1fe04c}=_0xd7da21,_0x1b5650={};_0x234e0a&&Object['assign'](_0x1b5650,{'status':_0x234e0a}),_0x1fe04c&&Object[_0xa6e7a2(0x20f)](_0x1b5650,{'useId':_0x1fe04c});const [_0x583e86,_0x5625e7]=await this[_0xa6e7a2(0x1c7)][_0xa6e7a2(0x218)]({'skip':(page-0x1)*size,'take':size,'order':{'createdAt':_0xa6e7a2(0x1d0)},'where':_0x1b5650}),_0x2f14a6=_0x583e86[_0xa6e7a2(0x1ed)](_0x188cda=>_0x188cda[_0xa6e7a2(0x1dd)]),_0x308cd2=_0x583e86[_0xa6e7a2(0x1ed)](_0x179759=>_0x179759[_0xa6e7a2(0x1f6)]),_0x47a270=await this['userEntity'][_0xa6e7a2(0x1fe)]({'where':{'id':(0x0,typeorm_2['In'])(_0x2f14a6)}}),_0x2e3f7c=await this[_0xa6e7a2(0x20c)][_0xa6e7a2(0x1fe)]({'where':{'id':(0x0,typeorm_2['In'])(_0x308cd2)}});return _0x583e86['forEach'](_0x3d8a51=>{const _0x4a48d1=_0xa6e7a2;var _0x2fbca7,_0x1f4e1e,_0x39c84f;_0x3d8a51[_0x4a48d1(0x1f9)]=(_0x2fbca7=_0x47a270[_0x4a48d1(0x1fe)](_0x138816=>_0x138816['id']===_0x3d8a51['useId']))===null||_0x2fbca7===void 0x0?void 0x0:_0x2fbca7['username'],_0x3d8a51[_0x4a48d1(0x200)]=(_0x1f4e1e=_0x47a270[_0x4a48d1(0x1fe)](_0x58a4fb=>_0x58a4fb['id']===_0x3d8a51[_0x4a48d1(0x1dd)]))===null||_0x1f4e1e===void 0x0?void 0x0:_0x1f4e1e[_0x4a48d1(0x200)],_0x3d8a51[_0x4a48d1(0x1ea)]=(_0x39c84f=_0x2e3f7c[_0x4a48d1(0x1fe)](_0x27a075=>_0x27a075['id']===_0x3d8a51[_0x4a48d1(0x1f6)]))===null||_0x39c84f===void 0x0?void 0x0:_0x39c84f[_0x4a48d1(0x1d1)];}),_0x9a353b[_0xa6e7a2(0x208)]['role']!==_0xa6e7a2(0x1f1)&&_0x583e86[_0xa6e7a2(0x1fb)](_0x4d1352=>_0x4d1352[_0xa6e7a2(0x200)]=(0x0,utils_1[_0xa6e7a2(0x203)])(_0x4d1352['email'])),_0x9a353b[_0xa6e7a2(0x208)][_0xa6e7a2(0x1ee)]!==_0xa6e7a2(0x1f1)&&_0x583e86[_0xa6e7a2(0x1fb)](_0x3f5a88=>_0x3f5a88[_0xa6e7a2(0x1f7)]=(0x0,utils_1[_0xa6e7a2(0x215)])(_0x3f5a88[_0xa6e7a2(0x1f7)])),{'rows':_0x583e86,'count':_0x5625e7};}async[_0x277180(0x1c3)](_0x13fd32){const _0x2c6133=_0x277180,_0x221fe9=await this[_0x2c6133(0x1c7)][_0x2c6133(0x1e9)]({'where':{'id':_0x13fd32}});if(!_0x221fe9)throw new common_1[(_0x2c6133(0x1cd))](_0x2c6133(0x21d),common_1['HttpStatus']['BAD_REQUEST']);if(_0x221fe9[_0x2c6133(0x1fc)]===0x1)throw new common_1[(_0x2c6133(0x1cd))](_0x2c6133(0x1c1),common_1[_0x2c6133(0x1d3)][_0x2c6133(0x1fa)]);return await this[_0x2c6133(0x1c7)][_0x2c6133(0x1e1)]({'id':_0x13fd32});}async[_0x277180(0x1c8)](_0x175b4b){const _0xa935e4=_0x277180,{ids:_0x4f0470}=_0x175b4b,_0x173115=await this[_0xa935e4(0x1c7)][_0xa935e4(0x1e1)](_0x4f0470);if(_0x173115[_0xa935e4(0x1ce)]>0x0)return'删除卡密成功！';else throw new common_1[(_0xa935e4(0x1cd))](_0xa935e4(0x1c2),common_1[_0xa935e4(0x1d3)]['BAD_REQUEST']);}};CramiService=__decorate([(0x0,common_1[_0x277180(0x1dc)])(),__param(0x0,(0x0,typeorm_1[_0x277180(0x210)])(crami_entity_1[_0x277180(0x202)])),__param(0x1,(0x0,typeorm_1[_0x277180(0x210)])(cramiPackage_entity_1[_0x277180(0x1c4)])),__param(0x2,(0x0,typeorm_1[_0x277180(0x210)])(user_entity_1['UserEntity'])),__metadata(_0x277180(0x20a),[typeorm_2[_0x277180(0x1e6)],typeorm_2[_0x277180(0x1e6)],typeorm_2[_0x277180(0x1e6)],userBalance_service_1[_0x277180(0x1e3)]])],CramiService),exports['CramiService']=CramiService;