"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.webviewMessager=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),ECLASS_API="eclassExtends",Messager=function(){function e(){(0,_classCallCheck2.default)(this,e),(0,_defineProperty2.default)(this,"send",void 0),(0,_defineProperty2.default)(this,"onready",void 0),this.onCreate()}return(0,_createClass2.default)(e,[{key:"onCreate",value:function(){var e=this;window[ECLASS_API]||(window[ECLASS_API]={}),window[ECLASS_API].sendAction&&Object.defineProperty(window[ECLASS_API],"sendAction",{get:function(){return e.send},set:function(r){e.send=r,e.onready&&e.onready()}})}},{key:"getCheckServiceType",value:function(){return"common.requestFunctions"}},{key:"onReceiveMessage",value:function(e){window[ECLASS_API].callback||(window[ECLASS_API].callback=function(r){var n=JSON.parse(r);e(n)})}},{key:"sendAction",value:function(e){var r=JSON.stringify(e);return!!window[ECLASS_API].sendAction&&(window[ECLASS_API].sendAction(r),!0)}}]),e}(),webviewMessager=new Messager;exports.webviewMessager=webviewMessager;