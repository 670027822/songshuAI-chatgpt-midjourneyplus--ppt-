'use strict';const _0x12a876=_0x5705;(function(_0x3934d2,_0x2d8be1){const _0x330481=_0x5705,_0x54169d=_0x3934d2();while(!![]){try{const _0x172f45=parseInt(_0x330481(0x1e6))/0x1*(parseInt(_0x330481(0x203))/0x2)+parseInt(_0x330481(0x20a))/0x3+-parseInt(_0x330481(0x1db))/0x4*(-parseInt(_0x330481(0x1ea))/0x5)+-parseInt(_0x330481(0x1df))/0x6*(parseInt(_0x330481(0x1f5))/0x7)+-parseInt(_0x330481(0x1f4))/0x8+parseInt(_0x330481(0x1d7))/0x9+-parseInt(_0x330481(0x1dd))/0xa*(parseInt(_0x330481(0x1f2))/0xb);if(_0x172f45===_0x2d8be1)break;else _0x54169d['push'](_0x54169d['shift']());}catch(_0x1fb97f){_0x54169d['push'](_0x54169d['shift']());}}}(_0x49b7,0x5e5a1));function _0x5705(_0x1b9cc3,_0x4376f6){const _0x49b725=_0x49b7();return _0x5705=function(_0x57057e,_0x3ae4f6){_0x57057e=_0x57057e-0x1d2;let _0x48fc8a=_0x49b725[_0x57057e];return _0x48fc8a;},_0x5705(_0x1b9cc3,_0x4376f6);}function _0x49b7(){const _0x433444=['JWT_SECRET','6095968atVTAk','2863VyanDk','ModuleRef','checkTokenAuth','user','jsonwebtoken','../../modules/globalConfig/globalConfig.service','AuthService','extractToken','metadata','validateToken','fingerprint','defineProperty','createTokenFromFingerprint','authService','630212nLRVHy','GlobalConfigService','RedisCacheService','HttpException','getRequest','moduleRef','get','1734648vWFYVe','getNineAiToken','split','JwtAuthGuard','getOwnPropertyDescriptor','../../modules/auth/auth.service','x-website-domain','4975497DKPBXE','redisCacheService','length','AuthGuard','944708MJdiHl','亲爱的用户,请登录后继续操作,我们正在等您的到来！','120GKRDGn','decorate','11136WHpnSO','slice','headers','object','HttpStatus','__decorate','design:paramtypes','1rEZuQJ','verify','log','UnauthorizedException','10xbMsJm','env','Injectable','authorization','UNAUTHORIZED','toString','function','@nestjs/passport','10032Sdcyep'];_0x49b7=function(){return _0x433444;};return _0x49b7();}var __decorate=this&&this[_0x12a876(0x1e4)]||function(_0x28b162,_0x4d2d4a,_0x4c650b,_0x289ed3){const _0x5ac269=_0x12a876;var _0x5adf9a=arguments[_0x5ac269(0x1d9)],_0xe5f704=_0x5adf9a<0x3?_0x4d2d4a:_0x289ed3===null?_0x289ed3=Object[_0x5ac269(0x1d4)](_0x4d2d4a,_0x4c650b):_0x289ed3,_0x51c0e0;if(typeof Reflect===_0x5ac269(0x1e2)&&typeof Reflect['decorate']===_0x5ac269(0x1f0))_0xe5f704=Reflect[_0x5ac269(0x1de)](_0x28b162,_0x4d2d4a,_0x4c650b,_0x289ed3);else{for(var _0x4e5a2d=_0x28b162[_0x5ac269(0x1d9)]-0x1;_0x4e5a2d>=0x0;_0x4e5a2d--)if(_0x51c0e0=_0x28b162[_0x4e5a2d])_0xe5f704=(_0x5adf9a<0x3?_0x51c0e0(_0xe5f704):_0x5adf9a>0x3?_0x51c0e0(_0x4d2d4a,_0x4c650b,_0xe5f704):_0x51c0e0(_0x4d2d4a,_0x4c650b))||_0xe5f704;}return _0x5adf9a>0x3&&_0xe5f704&&Object[_0x5ac269(0x200)](_0x4d2d4a,_0x4c650b,_0xe5f704),_0xe5f704;},__metadata=this&&this['__metadata']||function(_0x191d04,_0x29230b){const _0x2f2a65=_0x12a876;if(typeof Reflect===_0x2f2a65(0x1e2)&&typeof Reflect['metadata']===_0x2f2a65(0x1f0))return Reflect[_0x2f2a65(0x1fd)](_0x191d04,_0x29230b);};Object[_0x12a876(0x200)](exports,'__esModule',{'value':!![]}),exports[_0x12a876(0x1d3)]=void 0x0;const redisCache_service_1=require('../../modules/redisCache/redisCache.service'),common_1=require('@nestjs/common'),passport_1=require(_0x12a876(0x1f1)),jwt=require(_0x12a876(0x1f9)),core_1=require('@nestjs/core'),globalConfig_service_1=require(_0x12a876(0x1fa)),auth_service_1=require(_0x12a876(0x1d5));let JwtAuthGuard=class JwtAuthGuard extends(0x0,passport_1[_0x12a876(0x1da)])('jwt'){constructor(_0x38e7d5,_0xad065b,_0x1a1536,_0x159aa3){const _0xdf8b12=_0x12a876;super(),this['redisCacheService']=_0x38e7d5,this['moduleRef']=_0xad065b,this['globalConfigService']=_0x1a1536,this[_0xdf8b12(0x202)]=_0x159aa3;}async['canActivate'](_0x503b47){const _0x302f50=_0x12a876;!this['redisCacheService']&&(this[_0x302f50(0x1d8)]=this[_0x302f50(0x208)][_0x302f50(0x209)](redisCache_service_1[_0x302f50(0x205)],{'strict':![]}));const _0x37ffbc=_0x503b47['switchToHttp']()[_0x302f50(0x207)](),_0x46ec1f=_0x37ffbc[_0x302f50(0x1e1)][_0x302f50(0x1d6)],_0x396153=this[_0x302f50(0x1fc)](_0x37ffbc);_0x37ffbc[_0x302f50(0x1f8)]=this[_0x302f50(0x1fe)](_0x396153);const _0x1321c9=this['globalConfigService'][_0x302f50(0x20b)]();return await this[_0x302f50(0x1d8)][_0x302f50(0x1f7)](_0x396153,_0x37ffbc),!![];}[_0x12a876(0x1fc)](_0x46532e){const _0x4f1064=_0x12a876;if(!_0x46532e[_0x4f1064(0x1e1)][_0x4f1064(0x1ed)]){if(_0x46532e[_0x4f1064(0x1e1)]['fingerprint']){let _0x4774ae=_0x46532e[_0x4f1064(0x1e1)][_0x4f1064(0x1ff)];_0x4774ae>0x7fffffff&&(_0x4774ae=_0x4774ae[_0x4f1064(0x1ef)]()[_0x4f1064(0x1e0)](-0x9),_0x4774ae=Number(String(Number(_0x4774ae))));const _0x564d99=this[_0x4f1064(0x202)][_0x4f1064(0x201)](_0x4774ae);return _0x564d99;}return null;}const _0x1c346f=_0x46532e[_0x4f1064(0x1e1)][_0x4f1064(0x1ed)][_0x4f1064(0x1d2)]('\x20');if(_0x1c346f[_0x4f1064(0x1d9)]!==0x2||_0x1c346f[0x0]!=='Bearer')return null;return _0x1c346f[0x1];}[_0x12a876(0x1fe)](_0x4cabad){const _0x2ef75a=_0x12a876;try{return jwt[_0x2ef75a(0x1e7)](_0x4cabad,process[_0x2ef75a(0x1eb)][_0x2ef75a(0x1f3)]);}catch(_0x44987f){throw new common_1[(_0x2ef75a(0x206))](_0x2ef75a(0x1dc),common_1[_0x2ef75a(0x1e3)][_0x2ef75a(0x1ee)]);}}['handleRequest'](_0x89fe12,_0x47a28c,_0x2cdb97){const _0x211699=_0x12a876;if(_0x89fe12||!_0x47a28c){console[_0x211699(0x1e8)]('err:\x20',_0x89fe12);throw _0x89fe12||new common_1[(_0x211699(0x1e9))]();}return _0x47a28c;}};JwtAuthGuard=__decorate([(0x0,common_1[_0x12a876(0x1ec)])(),__metadata(_0x12a876(0x1e5),[redisCache_service_1[_0x12a876(0x205)],core_1[_0x12a876(0x1f6)],globalConfig_service_1[_0x12a876(0x204)],auth_service_1[_0x12a876(0x1fb)]])],JwtAuthGuard),exports[_0x12a876(0x1d3)]=JwtAuthGuard;