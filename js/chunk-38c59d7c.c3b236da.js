(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38c59d7c"],{"1c79":function(t,n,a){"use strict";a("632c")},"632c":function(t,n,a){},b6f9:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticStyle:{"font-size":"16px","text-align":"center"}},[a("span",{staticStyle:{"padding-left":"95px","font-size":"20px"}},[t._v("修改个人信息")]),a("span",{staticStyle:{"padding-left":"50px"},on:{click:t.ok}},[t._v("保存")]),a("div",{staticClass:"diva"},[a("span",[t._v("男")]),a("van-radio-group",{model:{value:t.radio,callback:function(n){t.radio=n},expression:"radio"}},[a("van-radio",{attrs:{name:"0","checked-color":"#ee0a24"}})],1)],1),a("div",{staticClass:"diva"},[a("span",[t._v("女")]),a("van-radio-group",{model:{value:t.radio,callback:function(n){t.radio=n},expression:"radio"}},[a("van-radio",{attrs:{name:"1","checked-color":"#ee0a24"}})],1)],1)])},o=[],c=a("adb5"),i={name:"",components:{},props:[],data:function(){return{radio:""}},computed:{},watch:{},created:function(){var t=this;Object(c["c"])().then((function(n){console.log(n),t.radio=String(n.sex)}))},mounted:function(){},methods:{ok:function(){var t=this;Object(c["h"])({sex:this.radio}).then((function(n){console.log(n),n&&(t.$toast.success("修改成功"),t.$router.go(-1))}))}}},s=i,r=(a("1c79"),a("5d22")),d=Object(r["a"])(s,e,o,!1,null,"13400e55",null);n["default"]=d.exports}}]);
//# sourceMappingURL=chunk-38c59d7c.c3b236da.js.map