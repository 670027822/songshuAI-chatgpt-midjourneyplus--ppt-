'use strict';function _0xa0bd(_0x19ad63,_0x2bba30){var _0x57e5b7=_0x57e5();return _0xa0bd=function(_0xa0bd56,_0x3f48a2){_0xa0bd56=_0xa0bd56-0x125;var _0x59444e=_0x57e5b7[_0xa0bd56];return _0x59444e;},_0xa0bd(_0x19ad63,_0x2bba30);}var _0xf600be=_0xa0bd;(function(_0x3d6242,_0x4246c5){var _0x494836=_0xa0bd,_0xea9e3b=_0x3d6242();while(!![]){try{var _0x29f0a5=-parseInt(_0x494836(0x138))/0x1+-parseInt(_0x494836(0x146))/0x2*(parseInt(_0x494836(0x12a))/0x3)+-parseInt(_0x494836(0x128))/0x4+-parseInt(_0x494836(0x141))/0x5*(parseInt(_0x494836(0x14a))/0x6)+parseInt(_0x494836(0x145))/0x7+-parseInt(_0x494836(0x14d))/0x8+parseInt(_0x494836(0x143))/0x9;if(_0x29f0a5===_0x4246c5)break;else _0xea9e3b['push'](_0xea9e3b['shift']());}catch(_0xc61ef0){_0xea9e3b['push'](_0xea9e3b['shift']());}}}(_0x57e5,0x4f6da));function _0x57e5(){var _0x23bfe4=['1157096CdjnBK','套餐价格￥','交易ID（服务商）','userId','order','paydAt','808208GAGRNu','metadata','14106kkdrRw','goodsId','design:type','object','price','total','../../common/entity/baseEntity','prototype','Column','订单总金额','datetime','typeorm','decimal','支付平台【epay|hupi】）','459930JHfohz','status','orderId','__decorate','channel','订单状态（0：未支付、1：已支付、2、支付失败、3：支付超时）','订单ID','商品ID','length','5aQjlpP','decorate','17280288AXUuZW','getOwnPropertyDescriptor','602630LbbNKh','104wfrjBY','defineProperty','BaseEntity','count','3777966qbzdpC','__esModule','__metadata'];_0x57e5=function(){return _0x23bfe4;};return _0x57e5();}var __decorate=this&&this[_0xf600be(0x13b)]||function(_0x55d15c,_0x40b906,_0x3bf945,_0x280885){var _0x4be866=_0xf600be,_0x522600=arguments[_0x4be866(0x140)],_0x346966=_0x522600<0x3?_0x40b906:_0x280885===null?_0x280885=Object[_0x4be866(0x144)](_0x40b906,_0x3bf945):_0x280885,_0x5ac7d9;if(typeof Reflect===_0x4be866(0x12d)&&typeof Reflect[_0x4be866(0x142)]==='function')_0x346966=Reflect[_0x4be866(0x142)](_0x55d15c,_0x40b906,_0x3bf945,_0x280885);else{for(var _0xaa92a0=_0x55d15c[_0x4be866(0x140)]-0x1;_0xaa92a0>=0x0;_0xaa92a0--)if(_0x5ac7d9=_0x55d15c[_0xaa92a0])_0x346966=(_0x522600<0x3?_0x5ac7d9(_0x346966):_0x522600>0x3?_0x5ac7d9(_0x40b906,_0x3bf945,_0x346966):_0x5ac7d9(_0x40b906,_0x3bf945))||_0x346966;}return _0x522600>0x3&&_0x346966&&Object[_0x4be866(0x147)](_0x40b906,_0x3bf945,_0x346966),_0x346966;},__metadata=this&&this[_0xf600be(0x14c)]||function(_0x21b9e4,_0x47cdad){var _0x294bc6=_0xf600be;if(typeof Reflect==='object'&&typeof Reflect[_0x294bc6(0x129)]==='function')return Reflect['metadata'](_0x21b9e4,_0x47cdad);};Object[_0xf600be(0x147)](exports,_0xf600be(0x14b),{'value':!![]}),exports['OrderEntity']=void 0x0;const typeorm_1=require(_0xf600be(0x135)),baseEntity_1=require(_0xf600be(0x130));let OrderEntity=class OrderEntity extends baseEntity_1[_0xf600be(0x148)]{};__decorate([(0x0,typeorm_1[_0xf600be(0x132)])({'unique':!![],'comment':_0xf600be(0x13e),'length':0x40}),__metadata('design:type',String)],OrderEntity[_0xf600be(0x131)],_0xf600be(0x13a),void 0x0),__decorate([(0x0,typeorm_1[_0xf600be(0x132)])({'unique':!![],'comment':_0xf600be(0x14f),'length':0x20,'nullable':!![]}),__metadata(_0xf600be(0x12c),String)],OrderEntity[_0xf600be(0x131)],'tradeId',void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0xf600be(0x137),'length':0x20,'nullable':!![]}),__metadata(_0xf600be(0x12c),String)],OrderEntity[_0xf600be(0x131)],'payPlatform',void 0x0),__decorate([(0x0,typeorm_1[_0xf600be(0x132)])({'comment':'用户ID','nullable':!![]}),__metadata('design:type',Number)],OrderEntity[_0xf600be(0x131)],_0xf600be(0x125),void 0x0),__decorate([(0x0,typeorm_1[_0xf600be(0x132)])({'comment':_0xf600be(0x13f),'nullable':!![]}),__metadata(_0xf600be(0x12c),Number)],OrderEntity[_0xf600be(0x131)],_0xf600be(0x12b),void 0x0),__decorate([(0x0,typeorm_1[_0xf600be(0x132)])({'comment':'数量','default':0x1}),__metadata(_0xf600be(0x12c),Number)],OrderEntity[_0xf600be(0x131)],_0xf600be(0x149),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0xf600be(0x14e),'type':_0xf600be(0x136),'scale':0x2,'precision':0xa}),__metadata(_0xf600be(0x12c),Number)],OrderEntity[_0xf600be(0x131)],_0xf600be(0x12e),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0xf600be(0x133),'type':_0xf600be(0x136),'scale':0x2,'precision':0xa}),__metadata(_0xf600be(0x12c),Number)],OrderEntity[_0xf600be(0x131)],_0xf600be(0x12f),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0xf600be(0x13d),'default':0x0}),__metadata('design:type',Number)],OrderEntity['prototype'],_0xf600be(0x139),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'type':_0xf600be(0x134),'length':0x0,'nullable':!![],'comment':'支付时间'}),__metadata('design:type',Date)],OrderEntity[_0xf600be(0x131)],_0xf600be(0x127),void 0x0),__decorate([(0x0,typeorm_1[_0xf600be(0x132)])({'comment':'支付渠道）','length':0x20,'nullable':!![]}),__metadata(_0xf600be(0x12c),String)],OrderEntity[_0xf600be(0x131)],_0xf600be(0x13c),void 0x0),OrderEntity=__decorate([(0x0,typeorm_1['Entity'])({'name':_0xf600be(0x126)})],OrderEntity),exports['OrderEntity']=OrderEntity;