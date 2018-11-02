Object.defineProperty(exports,"__esModule",{
value:true});

var actions=exports.actions={


DISPLAY_INFO:'@@VIEWGLOBAL/DISPLAY_VIEW_GLOBAL',
HIDE:'@@VIEWGLOBAL/HIDE_VIEW_GLOBAL'};



var toastAction=function toastAction(title,message,duration,type){
return{
type:type,
payload:{
title:title,
message:message,
duration:duration}};


};



var actionCreators=exports.actionCreators={
hide:function hide(){
return{
type:actions.HIDE,
payload:{}};


},








displayViewGlobal:function displayInfo(title,message){
var duration=arguments.length>2&&arguments[2]!==undefined?arguments[2]:4000;
return toastAction(title,message,duration,actions.DISPLAY_INFO);
}};