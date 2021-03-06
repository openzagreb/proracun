(function(window,undefined){var
rootjQuery,readyList,core_strundefined=typeof
undefined,location=window.location,document=window.document,docElem=
document.documentElement,_jQuery=window.jQuery,_$=window.$,class2type={}
,core_deletedIds=[],core_version="2.0.3",core_concat=core_deletedIds.
concat,core_push=core_deletedIds.push,core_slice=core_deletedIds.slice,
core_indexOf=core_deletedIds.indexOf,core_toString=class2type.toString,
core_hasOwn=class2type.hasOwnProperty,core_trim=core_version.trim,jQuery
=function(selector,context){return new
jQuery.fn.init(selector,context,rootjQuery)},core_pnum=/[+-]?(?:\d*\.|)\
d+(?:[eE][+-]?\d+|)/.source,core_rnotwhite=/\S+/g,rquickExpr=/^(?:\s*(<[
\w\W]+>)[^>]*|#([\w-]*))$/,rsingleTag=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,
rmsPrefix=/^-ms-/,rdashAlpha=/-([\da-z])/gi,fcamelCase=function(all,
letter){return
letter.toUpperCase()},completed=function(){document.removeEventListener(
"DOMContentLoaded",completed,false);window.removeEventListener("load",
completed,false);jQuery.ready()};jQuery.fn=jQuery.prototype={jquery:
core_version,constructor:jQuery,init:function(selector,context,
rootjQuery){var match,elem;if(!selector){return this}if(typeof
selector==="string"){if(selector.charAt(0)==="<"&&selector.charAt(
selector.length-1)===">"&&selector.length>=3){match=[null,selector,null]
}else{match=rquickExpr.exec(selector)}if(match&&(match[1]||!context)){if
(match[1]){context=context instanceof
jQuery?context[0]:context;jQuery.merge(this,jQuery.parseHTML(match[1],
context&&context.nodeType?context.ownerDocument||context:document,true))
;if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match
in
context){if(jQuery.isFunction(this[match])){this[match](context[match])}
else{this.attr(match,context[match])}}}return
this}else{elem=document.getElementById(match[2]);if(elem&&elem.
parentNode){this.length=1;this[0]=elem}this.context=document;this.
selector=selector;return this}}else
if(!context||context.jquery){return(context||rootjQuery).find(selector)}
else{return this.constructor(context).find(selector)}}else
if(selector.nodeType){this.context=this[0]=selector;this.length=1;return
this}else if(jQuery.isFunction(selector)){return
rootjQuery.ready(selector)}if(selector.selector!==undefined){this.
selector=selector.selector;this.context=selector.context}return
jQuery.makeArray(selector,this)},selector:"",length:0,toArray:function()
{return core_slice.call(this)},get:function(num){return
num==null?this.toArray():num<0?this[this.length+num]:this[num]},
pushStack:function(elems){var
ret=jQuery.merge(this.constructor(),elems);ret.prevObject=this;ret.
context=this.context;return ret},each:function(callback,args){return
jQuery.each(this,callback,args)},ready:function(fn){jQuery.ready.promise
().done(fn);return this},slice:function(){return
this.pushStack(core_slice.apply(this,arguments))},first:function(){
return this.eq(0)},last:function(){return
this.eq(-1)},eq:function(i){var len=this.length,j=+i+(i<0?len:0);return
this.pushStack(j>=0&&j<len?[this[j]]:[])},map:function(callback){return
this.pushStack(jQuery.map(this,function(elem,i){return
callback.call(elem,i,elem)}))},end:function(){return
this.prevObject||this.constructor(null)},push:core_push,sort:[].sort,
splice:[].splice};jQuery.fn.init.prototype=jQuery.fn;jQuery.extend=
jQuery.fn.extend=function(){var
options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,
length=arguments.length,deep=false;if(typeof
target==="boolean"){deep=target;target=arguments[1]||{};i=2}if(typeof
target!=="object"&&!jQuery.isFunction(target)){target={}}if(length===i){
target=this;--i}for(;i<length;i++){if((options=arguments[i])!=null){for(
name in
options){src=target[name];copy=options[name];if(target===copy){continue}
if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(
copy)))){if(copyIsArray){copyIsArray=false;clone=src&&jQuery.isArray(src
)?src:[]}else{clone=src&&jQuery.isPlainObject(src)?src:{}}target[name]=
jQuery.extend(deep,clone,copy)}else
if(copy!==undefined){target[name]=copy}}}}return
target};jQuery.extend({expando:"jQuery"+(core_version+Math.random()).
replace(/\D/g,""),noConflict:function(deep){if(window.$===jQuery){window
.$=_$}if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery}return
jQuery},isReady:false,readyWait:1,holdReady:function(hold){if(hold){
jQuery.readyWait++}else{jQuery.ready(true)}},ready:function(wait){if(
wait===true?--jQuery.readyWait:jQuery.isReady){return}jQuery.isReady=
true;if(wait!==true&&--jQuery.readyWait>0){return}readyList.resolveWith(
document,[jQuery]);if(jQuery.fn.trigger){jQuery(document).trigger("ready
").off("ready")}},isFunction:function(obj){return
jQuery.type(obj)==="function"},isArray:Array.isArray,isWindow:function(
obj){return
obj!=null&&obj===obj.window},isNumeric:function(obj){return!isNaN(
parseFloat(obj))&&isFinite(obj)},type:function(obj){if(obj==null){return
String(obj)}return typeof obj==="object"||typeof
obj==="function"?class2type[core_toString.call(obj)]||"object":typeof
obj},isPlainObject:function(obj){if(jQuery.type(obj)!=="object"||obj.
nodeType||jQuery.isWindow(obj)){return
false}try{if(obj.constructor&&!core_hasOwn.call(obj.constructor.
prototype,"isPrototypeOf")){return false}}catch(e){return false}return
true},isEmptyObject:function(obj){var name;for(name in obj){return
false}return true},error:function(msg){throw new
Error(msg)},parseHTML:function(data,context,keepScripts){if(!data||
typeof data!=="string"){return null}if(typeof
context==="boolean"){keepScripts=context;context=false}context=context||
document;var
parsed=rsingleTag.exec(data),scripts=!keepScripts&&[];if(parsed){return[
context.createElement(parsed[1])]}parsed=jQuery.buildFragment([data],
context,scripts);if(scripts){jQuery(scripts).remove()}return
jQuery.merge([],parsed.childNodes)},parseJSON:JSON.parse,parseXML:
function(data){var xml,tmp;if(!data||typeof data!=="string"){return
null}try{tmp=new
DOMParser;xml=tmp.parseFromString(data,"text/xml")}catch(e){xml=
undefined}if(!xml||xml.getElementsByTagName("parsererror").length){
jQuery.error("Invalid XML: "+data)}return
xml},noop:function(){},globalEval:function(code){var
script,indirect=eval;code=jQuery.trim(code);if(code){if(code.indexOf("
use
strict")===1){script=document.createElement("script");script.text=code;
document.head.appendChild(script).parentNode.removeChild(script)}else{
indirect(code)}}},camelCase:function(string){return
string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase)},nodeName
:function(elem,name){return
elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase()},each:
function(obj,callback,args){var
value,i=0,length=obj.length,isArray=isArraylike(obj);if(args){if(isArray
){for(;i<length;i++){value=callback.apply(obj[i],args);if(value===false)
{break}}}else{for(i in
obj){value=callback.apply(obj[i],args);if(value===false){break}}}}else{
if(isArray){for(;i<length;i++){value=callback.call(obj[i],i,obj[i]);if(
value===false){break}}}else{for(i in
obj){value=callback.call(obj[i],i,obj[i]);if(value===false){break}}}}
return obj},trim:function(text){return
text==null?"":core_trim.call(text)},makeArray:function(arr,results){var
ret=results||[];if(arr!=null){if(isArraylike(Object(arr))){jQuery.merge(
ret,typeof
arr==="string"?[arr]:arr)}else{core_push.call(ret,arr)}}return
ret},inArray:function(elem,arr,i){return
arr==null?-1:core_indexOf.call(arr,elem,i)},merge:function(first,second)
{var l=second.length,i=first.length,j=0;if(typeof
l==="number"){for(;j<l;j++){first[i++]=second[j]}}else{while(second[j]!=
=undefined){first[i++]=second[j++]}}first.length=i;return
first},grep:function(elems,callback,inv){var
retVal,ret=[],i=0,length=elems.length;inv=!!inv;for(;i<length;i++){
retVal=!!callback(elems[i],i);if(inv!==retVal){ret.push(elems[i])}}
return ret},map:function(elems,callback,arg){var
value,i=0,length=elems.length,isArray=isArraylike(elems),ret=[];if(
isArray){for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=
null){ret[ret.length]=value}}}else{for(i in
elems){value=callback(elems[i],i,arg);if(value!=null){ret[ret.length]=
value}}}return
core_concat.apply([],ret)},guid:1,proxy:function(fn,context){var
tmp,args,proxy;if(typeof
context==="string"){tmp=fn[context];context=fn;fn=tmp}if(!jQuery.
isFunction(fn)){return
undefined}args=core_slice.call(arguments,2);proxy=function(){return
fn.apply(context||this,args.concat(core_slice.call(arguments)))};proxy.
guid=fn.guid=fn.guid||jQuery.guid++;return
proxy},access:function(elems,fn,key,value,chainable,emptyGet,raw){var
i=0,length=elems.length,bulk=key==null;if(jQuery.type(key)==="object"){
chainable=true;for(i in
key){jQuery.access(elems,fn,i,key[i],true,emptyGet,raw)}}else
if(value!==undefined){chainable=true;if(!jQuery.isFunction(value)){raw=
true}if(bulk){if(raw){fn.call(elems,value);fn=null}else{bulk=fn;fn=
function(elem,key,value){return
bulk.call(jQuery(elem),value)}}}if(fn){for(;i<length;i++){fn(elems[i],
key,raw?value:value.call(elems[i],i,fn(elems[i],key)))}}}return
chainable?elems:bulk?fn.call(elems):length?fn(elems[0],key):emptyGet},
now:Date.now,swap:function(elem,options,callback,args){var
ret,name,old={};for(name in
options){old[name]=elem.style[name];elem.style[name]=options[name]}ret=
callback.apply(elem,args||[]);for(name in
options){elem.style[name]=old[name]}return
ret}});jQuery.ready.promise=function(obj){if(!readyList){readyList=
jQuery.Deferred();if(document.readyState==="complete"){setTimeout(jQuery
.ready)}else{document.addEventListener("DOMContentLoaded",completed,
false);window.addEventListener("load",completed,false)}}return
readyList.promise(obj)};jQuery.each("Boolean Number String Function
Array Date RegExp Object Error".split("
"),function(i,name){class2type["[object
"+name+"]"]=name.toLowerCase()});function isArraylike(obj){var
length=obj.length,type=jQuery.type(obj);if(jQuery.isWindow(obj)){return
false}if(obj.nodeType===1&&length){return true}return
type==="array"||type!=="function"&&(length===0||typeof
length==="number"&&length>0&&length-1 in
obj)}rootjQuery=jQuery(document);(function(window,undefined){var
i,support,cachedruns,Expr,getText,isXML,compile,outermostContext,
sortInput,setDocument,document,docElem,documentIsHTML,rbuggyQSA,
rbuggyMatches,matches,contains,expando="sizzle"+-new
Date,preferredDoc=window.document,dirruns=0,done=0,classCache=
createCache(),tokenCache=createCache(),compilerCache=createCache(),
hasDuplicate=false,sortOrder=function(a,b){if(a===b){hasDuplicate=true;
return 0}return 0},strundefined=typeof
undefined,MAX_NEGATIVE=1<<31,hasOwn={}.hasOwnProperty,arr=[],pop=arr.pop
,push_native=arr.push,push=arr.push,slice=arr.slice,indexOf=arr.indexOf|
|function(elem){var
i=0,len=this.length;for(;i<len;i++){if(this[i]===elem){return
i}}return-1},booleans="checked|selected|async|autofocus|autoplay|
controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|
required|scoped",whitespace="[\\x20\\t\\r\\n\\f]",characterEncoding="(?:
\\\\.|[\\w-]|[^\\x00-\\xa0])+",identifier=characterEncoding.replace("w",
"w#"),attributes="\\["+whitespace+"*("+characterEncoding+")"+whitespace+
"*(?:([*^$|!~]?=)"+whitespace+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+
identifier+")|)|)"+whitespace+"*\\]",pseudos=":("+characterEncoding+")(?
:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+
attributes.replace(3,8)+")*)|.*)\\)|)",rtrim=new
RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g")
,rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new
RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rsibling
=new RegExp(whitespace+"*[+~]"),rattributeQuotes=new
RegExp("="+whitespace+"*([^\\]'\"]*)"+whitespace+"*\\]","g"),rpseudo=new
RegExp(pseudos),ridentifier=new
RegExp("^"+identifier+"$"),matchExpr={ID:new
RegExp("^#("+characterEncoding+")"),CLASS:new
RegExp("^\\.("+characterEncoding+")"),TAG:new
RegExp("^("+characterEncoding.replace("w","w*")+")"),ATTR:new
RegExp("^"+attributes),PSEUDO:new RegExp("^"+pseudos),CHILD:new
RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+
whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+
whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),bool:new
RegExp("^(?:"+booleans+")$","i"),needsContext:new
RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("
+whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},
rnative=/^[^{]+\{\s*\[native
\w/,rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rinputs=/^(?:input|
select|textarea|button)$/i,rheader=/^h\d$/i,rescape=/'|\\/g,runescape=
new
RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),
funescape=function(_,escaped,escapedWhitespace){var
high="0x"+escaped-65536;return
high!==high||escapedWhitespace?escaped:high<0?String.fromCharCode(high+
65536):String.fromCharCode(high>>10|55296,high&1023|56320)};try{push.
apply(arr=slice.call(preferredDoc.childNodes),preferredDoc.childNodes);
arr[preferredDoc.childNodes.length].nodeType}catch(e){push={apply:arr.
length?function(target,els){push_native.apply(target,slice.call(els))}:
function(target,els){var
j=target.length,i=0;while(target[j++]=els[i++]){}target.length=j-1}}}
function Sizzle(selector,context,results,seed){var
match,elem,m,nodeType,i,groups,old,nid,newContext,newSelector;if((
context?context.ownerDocument||context:preferredDoc)!==document){
setDocument(context)}context=context||document;results=results||[];if(!
selector||typeof selector!=="string"){return
results}if((nodeType=context.nodeType)!==1&&nodeType!==9){return[]}if(
documentIsHTML&&!seed){if(match=rquickExpr.exec(selector)){if(m=match[1]
){if(nodeType===9){elem=context.getElementById(m);if(elem&&elem.
parentNode){if(elem.id===m){results.push(elem);return
results}}else{return
results}}else{if(context.ownerDocument&&(elem=context.ownerDocument.
getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(
elem);return results}}}else
if(match[2]){push.apply(results,context.getElementsByTagName(selector));
return results}else
if((m=match[3])&&support.getElementsByClassName&&context.
getElementsByClassName){push.apply(results,context.
getElementsByClassName(m));return
results}}if(support.qsa&&(!rbuggyQSA||!rbuggyQSA.test(selector))){nid=
old=expando;newContext=context;newSelector=nodeType===9&&selector;if(
nodeType===1&&context.nodeName.toLowerCase()!=="object"){groups=tokenize
(selector);if(old=context.getAttribute("id")){nid=old.replace(rescape,"\
\$&")}else{context.setAttribute("id",nid)}nid="[id='"+nid+"']
";i=groups.length;while(i--){groups[i]=nid+toSelector(groups[i])}
newContext=rsibling.test(selector)&&context.parentNode||context;
newSelector=groups.join(",")}if(newSelector){try{push.apply(results,
newContext.querySelectorAll(newSelector));return
results}catch(qsaError){}finally{if(!old){context.removeAttribute("id")}
}}}}return
select(selector.replace(rtrim,"$1"),context,results,seed)}function
createCache(){var keys=[];function cache(key,value){if(keys.push(key+="
")>Expr.cacheLength){delete cache[keys.shift()]}return
cache[key]=value}return cache}function
markFunction(fn){fn[expando]=true;return fn}function assert(fn){var
div=document.createElement("div");try{return!!fn(div)}catch(e){return
false}finally{if(div.parentNode){div.parentNode.removeChild(div)}div=
null}}function addHandle(attrs,handler){var
arr=attrs.split("|"),i=attrs.length;while(i--){Expr.attrHandle[arr[i]]=
handler}}function siblingCheck(a,b){var
cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&(~b.sourceIndex||
MAX_NEGATIVE)-(~a.sourceIndex||MAX_NEGATIVE);if(diff){return
diff}if(cur){while(cur=cur.nextSibling){if(cur===b){return-1}}}return
a?1:-1}function createInputPseudo(type){return function(elem){var
name=elem.nodeName.toLowerCase();return
name==="input"&&elem.type===type}}function
createButtonPseudo(type){return function(elem){var
name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")
&&elem.type===type}}function createPositionalPseudo(fn){return
markFunction(function(argument){argument=+argument;return
markFunction(function(seed,matches){var
j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;while(i
--){if(seed[j=matchIndexes[i]]){seed[j]=!(matches[j]=seed[j])}}})})}
isXML=Sizzle.isXML=function(elem){var
documentElement=elem&&(elem.ownerDocument||elem).documentElement;return
documentElement?documentElement.nodeName!=="HTML":false};support=Sizzle.
support={};setDocument=Sizzle.setDocument=function(node){var
doc=node?node.ownerDocument||node:preferredDoc,parent=doc.defaultView;if
(doc===document||doc.nodeType!==9||!doc.documentElement){return
document}document=doc;docElem=doc.documentElement;documentIsHTML=!isXML(
doc);if(parent&&parent.attachEvent&&parent!==parent.top){parent.
attachEvent("onbeforeunload",function(){setDocument()})}support.
attributes=assert(function(div){div.className="i";return!div.
getAttribute("className")});support.getElementsByTagName=assert(function
(div){div.appendChild(doc.createComment(""));return!div.
getElementsByTagName("*").length});support.getElementsByClassName=assert
(function(div){div.innerHTML="<div class='a'></div><div class='a
i'></div>";div.firstChild.className="i";return
div.getElementsByClassName("i").length===2});support.getById=assert(
function(div){docElem.appendChild(div).id=expando;return!doc.
getElementsByName||!doc.getElementsByName(expando).length});if(support.
getById){Expr.find["ID"]=function(id,context){if(typeof
context.getElementById!==strundefined&&documentIsHTML){var
m=context.getElementById(id);return
m&&m.parentNode?[m]:[]}};Expr.filter["ID"]=function(id){var
attrId=id.replace(runescape,funescape);return function(elem){return
elem.getAttribute("id")===attrId}}}else{delete
Expr.find["ID"];Expr.filter["ID"]=function(id){var
attrId=id.replace(runescape,funescape);return function(elem){var
node=typeof
elem.getAttributeNode!==strundefined&&elem.getAttributeNode("id");return
node&&node.value===attrId}}}Expr.find["TAG"]=support.
getElementsByTagName?function(tag,context){if(typeof
context.getElementsByTagName!==strundefined){return
context.getElementsByTagName(tag)}}:function(tag,context){var
elem,tmp=[],i=0,results=context.getElementsByTagName(tag);if(tag==="*"){
while(elem=results[i++]){if(elem.nodeType===1){tmp.push(elem)}}return
tmp}return
results};Expr.find["CLASS"]=support.getElementsByClassName&&function(
className,context){if(typeof
context.getElementsByClassName!==strundefined&&documentIsHTML){return
context.getElementsByClassName(className)}};rbuggyMatches=[];rbuggyQSA=[
];if(support.qsa=rnative.test(doc.querySelectorAll)){assert(function(div
){div.innerHTML="<select><option
selected=''></option></select>";if(!div.querySelectorAll("[selected]").
length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")")}if(!
div.querySelectorAll(":checked").length){rbuggyQSA.push(":checked")}});
assert(function(div){var
input=doc.createElement("input");input.setAttribute("type","hidden");div
.appendChild(input).setAttribute("t","");if(div.querySelectorAll("[t^=''
]").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")")}if(!div.
querySelectorAll(":enabled").length){rbuggyQSA.push(":enabled",":
disabled")}div.querySelectorAll("*,:x");rbuggyQSA.push(",.*:")})}if(
support.matchesSelector=rnative.test(matches=docElem.
webkitMatchesSelector||docElem.mozMatchesSelector||docElem.
oMatchesSelector||docElem.msMatchesSelector)){assert(function(div){
support.disconnectedMatch=matches.call(div,"div");matches.call(div,"[s!=
'']:x");rbuggyMatches.push("!=",pseudos)})}rbuggyQSA=rbuggyQSA.length&&
new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new
RegExp(rbuggyMatches.join("|"));contains=rnative.test(docElem.contains)|
|docElem.compareDocumentPosition?function(a,b){var
adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return
a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a
.compareDocumentPosition&&a.compareDocumentPosition(bup)&16))}:function(
a,b){if(b){while(b=b.parentNode){if(b===a){return true}}}return
false};sortOrder=docElem.compareDocumentPosition?function(a,b){if(a===b)
{hasDuplicate=true;return 0}var
compare=b.compareDocumentPosition&&a.compareDocumentPosition&&a.
compareDocumentPosition(b);if(compare){if(compare&1||!support.
sortDetached&&b.compareDocumentPosition(a)===compare){if(a===doc||
contains(preferredDoc,a)){return-1}if(b===doc||contains(preferredDoc,b))
{return 1}return
sortInput?indexOf.call(sortInput,a)-indexOf.call(sortInput,b):0}return
compare&4?-1:1}return a.compareDocumentPosition?-1:1}:function(a,b){var
cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];if(a===b){
hasDuplicate=true;return 0}else if(!aup||!bup){return
a===doc?-1:b===doc?1:aup?-1:bup?1:sortInput?indexOf.call(sortInput,a)-
indexOf.call(sortInput,b):0}else if(aup===bup){return
siblingCheck(a,b)}cur=a;while(cur=cur.parentNode){ap.unshift(cur)}cur=b;
while(cur=cur.parentNode){bp.unshift(cur)}while(ap[i]===bp[i]){i++}
return
i?siblingCheck(ap[i],bp[i]):ap[i]===preferredDoc?-1:bp[i]===preferredDoc
?1:0};return doc};Sizzle.matches=function(expr,elements){return
Sizzle(expr,null,null,elements)};Sizzle.matchesSelector=function(elem,
expr){if((elem.ownerDocument||elem)!==document){setDocument(elem)}expr=
expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector&&
documentIsHTML&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA
||!rbuggyQSA.test(expr))){try{var
ret=matches.call(elem,expr);if(ret||support.disconnectedMatch||elem.
document&&elem.document.nodeType!==11){return ret}}catch(e){}}return
Sizzle(expr,document,null,[elem]).length>0};Sizzle.contains=function(
context,elem){if((context.ownerDocument||context)!==document){
setDocument(context)}return
contains(context,elem)};Sizzle.attr=function(elem,name){if((elem.
ownerDocument||elem)!==document){setDocument(elem)}var
fn=Expr.attrHandle[name.toLowerCase()],val=fn&&hasOwn.call(Expr.
attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;
return
val===undefined?support.attributes||!documentIsHTML?elem.getAttribute(
name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null:
val};Sizzle.error=function(msg){throw new Error("Syntax error,
unrecognized expression: "+msg)};Sizzle.uniqueSort=function(results){var
elem,duplicates=[],j=0,i=0;hasDuplicate=!support.detectDuplicates;
sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);
if(hasDuplicate){while(elem=results[i++]){if(elem===results[i]){j=
duplicates.push(i)}}while(j--){results.splice(duplicates[j],1)}}return
results};getText=Sizzle.getText=function(elem){var
node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){for(;node=elem[i];i
++){ret+=getText(node)}}else
if(nodeType===1||nodeType===9||nodeType===11){if(typeof
elem.textContent==="string"){return
elem.textContent}else{for(elem=elem.firstChild;elem;elem=elem.
nextSibling){ret+=getText(elem)}}}else
if(nodeType===3||nodeType===4){return elem.nodeValue}return
ret};Expr=Sizzle.selectors={cacheLength:50,createPseudo:markFunction,
match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",
first:true},"
":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"
previousSibling"}},preFilter:{ATTR:function(match){match[1]=match[1].
replace(runescape,funescape);match[3]=(match[4]||match[5]||"").replace(
runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+"
"}return
match.slice(0,4)},CHILD:function(match){match[1]=match[1].toLowerCase();
if(match[1].slice(0,3)==="nth"){if(!match[3]){Sizzle.error(match[0])}
match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3
]==="odd"));match[5]=+(match[7]+match[8]||match[3]==="odd")}else
if(match[3]){Sizzle.error(match[0])}return
match},PSEUDO:function(match){var
excess,unquoted=!match[5]&&match[2];if(matchExpr["CHILD"].test(match[0])
){return null}if(match[3]&&match[4]!==undefined){match[2]=match[4]}else
if(unquoted&&rpseudo.test(unquoted)&&(excess=tokenize(unquoted,true))&&(
excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){
match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess)}
return match.slice(0,3)}},filter:{TAG:function(nodeNameSelector){var
nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();
return nodeNameSelector==="*"?function(){return
true}:function(elem){return
elem.nodeName&&elem.nodeName.toLowerCase()===nodeName}},CLASS:function(
className){var pattern=classCache[className+" "];return
pattern||(pattern=new
RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache
(className,function(elem){return pattern.test(typeof
elem.className==="string"&&elem.className||typeof
elem.getAttribute!==strundefined&&elem.getAttribute("class")||"")})},
ATTR:function(name,operator,check){return function(elem){var
result=Sizzle.attr(elem,name);if(result==null){return
operator==="!="}if(!operator){return true}result+="";return
operator==="="?result===check:operator==="!="?result!==check:operator===
"^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.
indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===
check:operator==="~="?(" "+result+"
").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,
check.length+1)===check+"-":false}},CHILD:function(type,what,argument,
first,last){var
simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=
what==="of-type";return
first===1&&last===0?function(elem){return!!elem.parentNode}:function(
elem,context,xml){var
cache,outerCache,node,diff,nodeIndex,start,dir=simple!==forward?"
nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.
nodeName.toLowerCase(),useCache=!xml&&!ofType;if(parent){if(simple){
while(dir){node=elem;while(node=node[dir]){if(ofType?node.nodeName.
toLowerCase()===name:node.nodeType===1){return
false}}start=dir=type==="only"&&!start&&"nextSibling"}return
true}start=[forward?parent.firstChild:parent.lastChild];if(forward&&
useCache){outerCache=parent[expando]||(parent[expando]={});cache=
outerCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=cache[0
]===dirruns&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while
(node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop()){if(
node.nodeType===1&&++diff&&node===elem){outerCache[type]=[dirruns,
nodeIndex,diff];break}}}else
if(useCache&&(cache=(elem[expando]||(elem[expando]={}))[type])&&cache[0]
===dirruns){diff=cache[1]}else{while(node=++nodeIndex&&node&&node[dir]||
(diff=nodeIndex=0)||start.pop()){if((ofType?node.nodeName.toLowerCase()=
==name:node.nodeType===1)&&++diff){if(useCache){(node[expando]||(node[
expando]={}))[type]=[dirruns,diff]}if(node===elem){break}}}}diff-=last;
return
diff===first||diff%first===0&&diff/first>=0}}},PSEUDO:function(pseudo,
argument){var
args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||
Sizzle.error("unsupported pseudo: "+pseudo);if(fn[expando]){return
fn(argument)}if(fn.length>1){args=[pseudo,pseudo,"",argument];return
Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(
function(seed,matches){var
idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf.
call(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i])}}):function(
elem){return fn(elem,0,args)}}return
fn}},pseudos:{not:markFunction(function(selector){var
input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return
matcher[expando]?markFunction(function(seed,matches,context,xml){var
elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;while(i--){if(
elem=unmatched[i]){seed[i]=!(matches[i]=elem)}}}):function(elem,context,
xml){input[0]=elem;matcher(input,null,xml,results);return!results.pop()}
}),has:markFunction(function(selector){return function(elem){return
Sizzle(selector,elem).length>0}}),contains:markFunction(function(text){
return
function(elem){return(elem.textContent||elem.innerText||getText(elem)).
indexOf(text)>-1}}),lang:markFunction(function(lang){if(!ridentifier.
test(lang||"")){Sizzle.error("unsupported lang:
"+lang)}lang=lang.replace(runescape,funescape).toLowerCase();return
function(elem){var
elemLang;do{if(elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:
lang")||elem.getAttribute("lang")){elemLang=elemLang.toLowerCase();
return
elemLang===lang||elemLang.indexOf(lang+"-")===0}}while((elem=elem.
parentNode)&&elem.nodeType===1);return
false}}),target:function(elem){var
hash=window.location&&window.location.hash;return
hash&&hash.slice(1)===elem.id},root:function(elem){return
elem===docElem},focus:function(elem){return
elem===document.activeElement&&(!document.hasFocus||document.hasFocus())
&&!!(elem.type||elem.href||~elem.tabIndex)},enabled:function(elem){
return elem.disabled===false},disabled:function(elem){return
elem.disabled===true},checked:function(elem){var
nodeName=elem.nodeName.toLowerCase();return
nodeName==="input"&&!!elem.checked||nodeName==="option"&&!!elem.selected
},selected:function(elem){if(elem.parentNode){elem.parentNode.
selectedIndex}return
elem.selected===true},empty:function(elem){for(elem=elem.firstChild;elem
;elem=elem.nextSibling){if(elem.nodeName>"@"||elem.nodeType===3||elem.
nodeType===4){return false}}return
true},parent:function(elem){return!Expr.pseudos["empty"](elem)},header:
function(elem){return
rheader.test(elem.nodeName)},input:function(elem){return
rinputs.test(elem.nodeName)},button:function(elem){var
name=elem.nodeName.toLowerCase();return
name==="input"&&elem.type==="button"||name==="button"},text:function(
elem){var attr;return
elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&((attr=elem.
getAttribute("type"))==null||attr.toLowerCase()===elem.type)},first:
createPositionalPseudo(function(){return[0]}),last:
createPositionalPseudo(function(matchIndexes,length){return[length-1]}),
eq:createPositionalPseudo(function(matchIndexes,length,argument){return[
argument<0?argument+length:argument]}),even:createPositionalPseudo(
function(matchIndexes,length){var
i=0;for(;i<length;i+=2){matchIndexes.push(i)}return
matchIndexes}),odd:createPositionalPseudo(function(matchIndexes,length){
var i=1;for(;i<length;i+=2){matchIndexes.push(i)}return
matchIndexes}),lt:createPositionalPseudo(function(matchIndexes,length,
argument){var
i=argument<0?argument+length:argument;for(;--i>=0;){matchIndexes.push(i)
}return
matchIndexes}),gt:createPositionalPseudo(function(matchIndexes,length,
argument){var
i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.
push(i)}return
matchIndexes})}};Expr.pseudos["nth"]=Expr.pseudos["eq"];for(i
in{radio:true,checkbox:true,file:true,password:true,image:true}){Expr.
pseudos[i]=createInputPseudo(i)}for(i
in{submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i)}
function
setFilters(){}setFilters.prototype=Expr.filters=Expr.pseudos;Expr.
setFilters=new setFilters;function tokenize(selector,parseOnly){var
matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[
selector+" "];if(cached){return
parseOnly?0:cached.slice(0)}soFar=selector;groups=[];preFilters=Expr.
preFilter;while(soFar){if(!matched||(match=rcomma.exec(soFar))){if(match
){soFar=soFar.slice(match[0].length)||soFar}groups.push(tokens=[])}
matched=false;if(match=rcombinators.exec(soFar)){matched=match.shift();
tokens.push({value:matched,type:match[0].replace(rtrim,"
")});soFar=soFar.slice(matched.length)}for(type in
Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]|
|(match=preFilters[type](match)))){matched=match.shift();tokens.push({
value:matched,type:type,matches:match});soFar=soFar.slice(matched.length
)}}if(!matched){break}}return
parseOnly?soFar.length:soFar?Sizzle.error(selector):tokenCache(selector,
groups).slice(0)}function toSelector(tokens){var
i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].
value}return selector}function
addCombinator(matcher,combinator,base){var
dir=combinator.dir,checkNonElements=base&&dir==="parentNode",doneName=
done++;return
combinator.first?function(elem,context,xml){while(elem=elem[dir]){if(
elem.nodeType===1||checkNonElements){return
matcher(elem,context,xml)}}}:function(elem,context,xml){var
data,cache,outerCache,dirkey=dirruns+"
"+doneName;if(xml){while(elem=elem[dir]){if(elem.nodeType===1||
checkNonElements){if(matcher(elem,context,xml)){return
true}}}}else{while(elem=elem[dir]){if(elem.nodeType===1||
checkNonElements){outerCache=elem[expando]||(elem[expando]={});
if((cache=outerCache[dir])&&cache[0]===dirkey){if((data=cache[1])===true
||data===cachedruns){return
data===true}}else{cache=outerCache[dir]=[dirkey];cache[1]=matcher(elem,
context,xml)||cachedruns;if(cache[1]===true){return true}}}}}}}function
elementMatcher(matchers){return
matchers.length>1?function(elem,context,xml){var
i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return
false}}return true}:matchers[0]}function
condense(unmatched,map,filter,context,xml){var
elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<
len;i++){if(elem=unmatched[i]){if(!filter||filter(elem,context,xml)){
newUnmatched.push(elem);if(mapped){map.push(i)}}}}return
newUnmatched}function
setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector
){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter)
}if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,
postSelector)}return markFunction(function(seed,results,context,xml){var
temp,i,elem,preMap=[],postMap=[],preexisting=results.length,elems=seed||
multipleContexts(selector||"*",context.nodeType?[context]:context,[]),
matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,
context,xml):elems,matcherOut=matcher?postFinder||(seed?preFilter:
preexisting||postFilter)?[]:results:matcherIn;if(matcher){matcher(
matcherIn,matcherOut,context,xml)}if(postFilter){temp=condense(
matcherOut,postMap);postFilter(temp,[],context,xml);i=temp.length;while(
i--){if(elem=temp[i]){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=
elem)}}}if(seed){if(postFinder||preFilter){if(postFinder){temp=[];i=
matcherOut.length;while(i--){if(elem=matcherOut[i]){temp.push(matcherIn[
i]=elem)}}postFinder(null,matcherOut=[],temp,xml)}i=matcherOut.length;
while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf.call(seed,
elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem)}}}}else{matcherOut
=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.
length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,
xml)}else{push.apply(results,matcherOut)}}})}function
matcherFromTokens(tokens){var
checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[
tokens[0].type],implicitRelative=leadingRelative||Expr.relative["
"],i=leadingRelative?1:0,matchContext=addCombinator(function(elem){
return
elem===checkContext},implicitRelative,true),matchAnyContext=
addCombinator(function(elem){return
indexOf.call(checkContext,elem)>-1},implicitRelative,true),matchers=[
function(elem,context,xml){return!leadingRelative&&(xml||context!==
outermostContext)||((checkContext=context).nodeType?matchContext(elem,
context,xml):matchAnyContext(elem,context,xml))}];for(;i<len;i++){if(
matcher=Expr.relative[tokens[i].type]){matchers=[addCombinator(
elementMatcher(matchers),matcher)]}else{matcher=Expr.filter[tokens[i].
type].apply(null,tokens[i].matches);if(matcher[expando]){j=++i;for(;j<
len;j++){if(Expr.relative[tokens[j].type]){break}}return
setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(tokens.slice(0,
i-1).concat({value:tokens[i-2].type==="
"?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.
slice(i,j)),j<len&&matcherFromTokens(tokens=tokens.slice(j)),j<len&&
toSelector(tokens))}matchers.push(matcher)}}return
elementMatcher(matchers)}function
matcherFromGroupMatchers(elementMatchers,setMatchers){var
matcherCachedRuns=0,bySet=setMatchers.length>0,byElement=elementMatchers
.length>0,superMatcher=function(seed,context,xml,results,expandContext){
var
elem,j,matcher,setMatched=[],matchedCount=0,i="0",unmatched=seed&&[],
outermost=expandContext!=null,contextBackup=outermostContext,elems=seed|
|byElement&&Expr.find["TAG"]("*",expandContext&&context.parentNode||
context),dirrunsUnique=dirruns+=contextBackup==null?1:Math.random()||.1;
if(outermost){outermostContext=context!==document&&context;cachedruns=
matcherCachedRuns}for(;(elem=elems[i])!=null;i++){if(byElement&&elem){j=
0;while(matcher=elementMatchers[j++]){if(matcher(elem,context,xml)){
results.push(elem);break}}if(outermost){dirruns=dirrunsUnique;cachedruns
=++matcherCachedRuns}}if(bySet){if(elem=!matcher&&elem){matchedCount--}
if(seed){unmatched.push(elem)}}}matchedCount+=i;if(bySet&&i!==
matchedCount){j=0;while(matcher=setMatchers[j++]){matcher(unmatched,
setMatched,context,xml)}if(seed){if(matchedCount>0){while(i--){if(!(
unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results)}}}
setMatched=condense(setMatched)}push.apply(results,setMatched);if(
outermost&&!seed&&setMatched.length>0&&matchedCount+setMatchers.length>1
){Sizzle.uniqueSort(results)}}if(outermost){dirruns=dirrunsUnique;
outermostContext=contextBackup}return unmatched};return
bySet?markFunction(superMatcher):superMatcher}compile=Sizzle.compile=
function(selector,group){var
i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+"
"];if(!cached){if(!group){group=tokenize(selector)}i=group.length;while(
i--){cached=matcherFromTokens(group[i]);if(cached[expando]){setMatchers.
push(cached)}else{elementMatchers.push(cached)}}cached=compilerCache(
selector,matcherFromGroupMatchers(elementMatchers,setMatchers))}return
cached};function multipleContexts(selector,contexts,results){var
i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],
results)}return results}function
select(selector,context,results,seed){var
i,tokens,token,type,find,match=tokenize(selector);if(!seed){if(match.
length===1){tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token
=tokens[0]).type==="ID"&&support.getById&&context.nodeType===9&&
documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find["ID"](
token.matches[0].replace(runescape,funescape),context)||[])[0];if(!
context){return
results}selector=selector.slice(tokens.shift().value.length)}i=matchExpr
["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[
i];if(Expr.relative[type=token.type]){break}if(find=Expr.find[type]){if(
seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(
tokens[0].type)&&context.parentNode||context)){tokens.splice(i,1);
selector=seed.length&&toSelector(tokens);if(!selector){push.apply(
results,seed);return
results}break}}}}}compile(selector,match)(seed,context,!documentIsHTML,
results,rsibling.test(selector));return
results}support.sortStable=expando.split("").sort(sortOrder).join("")===
expando;support.detectDuplicates=hasDuplicate;setDocument();support.
sortDetached=assert(function(div1){return
div1.compareDocumentPosition(document.createElement("div"))&1});if(!
assert(function(div){div.innerHTML="<a href='#'></a>";return
div.firstChild.getAttribute("href")==="#"})){addHandle("type|href|height
|width",function(elem,name,isXML){if(!isXML){return
elem.getAttribute(name,name.toLowerCase()==="type"?1:2)}})}if(!support.
attributes||!assert(function(div){div.innerHTML="<input/>";div.
firstChild.setAttribute("value","");return
div.firstChild.getAttribute("value")===""})){addHandle("value",function(
elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){
return elem.defaultValue}})}if(!assert(function(div){return
div.getAttribute("disabled")==null})){addHandle(booleans,function(elem,
name,isXML){var
val;if(!isXML){return(val=elem.getAttributeNode(name))&&val.specified?
val.value:elem[name]===true?name.toLowerCase():null}})}jQuery.find=
Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.pseudos
;jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.
isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains})(window);var
optionsCache={};function createOptions(options){var
object=optionsCache[options]={};jQuery.each(options.match(core_rnotwhite
)||[],function(_,flag){object[flag]=true});return
object}jQuery.Callbacks=function(options){options=typeof
options==="string"?optionsCache[options]||createOptions(options):jQuery.
extend({},options);var
memory,fired,firing,firingStart,firingLength,firingIndex,list=[],stack=!
options.once&&[],fire=function(data){memory=options.memory&&data;fired=
true;firingIndex=firingStart||0;firingStart=0;firingLength=list.length;
firing=true;for(;list&&firingIndex<firingLength;firingIndex++){if(list[
firingIndex].apply(data[0],data[1])===false&&options.stopOnFalse){memory
=false;break}}firing=false;if(list){if(stack){if(stack.length){fire(
stack.shift())}}else
if(memory){list=[]}else{self.disable()}}},self={add:function(){if(list){
var start=list.length;(function
add(args){jQuery.each(args,function(_,arg){var
type=jQuery.type(arg);if(type==="function"){if(!options.unique||!self.
has(arg)){list.push(arg)}}else
if(arg&&arg.length&&type!=="string"){add(arg)}})})(arguments);if(firing)
{firingLength=list.length}else
if(memory){firingStart=start;fire(memory)}}return
this},remove:function(){if(list){jQuery.each(arguments,function(_,arg){
var
index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index
,1);if(firing){if(index<=firingLength){firingLength--}if(index<=
firingIndex){firingIndex--}}}})}return this},has:function(fn){return
fn?jQuery.inArray(fn,list)>-1:!!(list&&list.length)},empty:function(){
list=[];firingLength=0;return
this},disable:function(){list=stack=memory=undefined;return
this},disabled:function(){return!list},lock:function(){stack=undefined;
if(!memory){self.disable()}return
this},locked:function(){return!stack},fireWith:function(context,args){if
(list&&(!fired||stack)){args=args||[];args=[context,args.slice?args.
slice():args];if(firing){stack.push(args)}else{fire(args)}}return
this},fire:function(){self.fireWith(this,arguments);return
this},fired:function(){return!!fired}};return
self};jQuery.extend({Deferred:function(func){var
tuples=[["resolve","done",jQuery.Callbacks("once
memory"),"resolved"],["reject","fail",jQuery.Callbacks("once
memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory")]],
state="pending",promise={state:function(){return
state},always:function(){deferred.done(arguments).fail(arguments);return
this},then:function(){var fns=arguments;return
jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){
var
action=tuple[0],fn=jQuery.isFunction(fns[i])&&fns[i];deferred[tuple[1]](
function(){var
returned=fn&&fn.apply(this,arguments);if(returned&&jQuery.isFunction(
returned.promise)){returned.promise().done(newDefer.resolve).fail(
newDefer.reject).progress(newDefer.notify)}else{newDefer[action+"With"](
this===promise?newDefer.promise():this,fn?[returned]:arguments)}})});fns
=null}).promise()},promise:function(obj){return
obj!=null?jQuery.extend(obj,promise):promise}},deferred={};promise.pipe=
promise.then;jQuery.each(tuples,function(i,tuple){var
list=tuple[2],stateString=tuple[3];promise[tuple[1]]=list.add;if(
stateString){list.add(function(){state=stateString},tuples[i^1][2].
disable,tuples[2][2].lock)}deferred[tuple[0]]=function(){deferred[tuple[
0]+"With"](this===deferred?promise:this,arguments);return
this};deferred[tuple[0]+"With"]=list.fireWith});promise.promise(deferred
);if(func){func.call(deferred,deferred)}return
deferred},when:function(subordinate){var
i=0,resolveValues=core_slice.call(arguments),length=resolveValues.length
,remaining=length!==1||subordinate&&jQuery.isFunction(subordinate.
promise)?length:0,deferred=remaining===1?subordinate:jQuery.Deferred(),
updateFunc=function(i,contexts,values){return
function(value){contexts[i]=this;values[i]=arguments.length>1?core_slice
.call(arguments):value;if(values===progressValues){deferred.notifyWith(
contexts,values)}else
if(!--remaining){deferred.resolveWith(contexts,values)}}},progressValues
,progressContexts,resolveContexts;if(length>1){progressValues=new
Array(length);progressContexts=new Array(length);resolveContexts=new
Array(length);for(;i<length;i++){if(resolveValues[i]&&jQuery.isFunction(
resolveValues[i].promise)){resolveValues[i].promise().done(updateFunc(i,
resolveContexts,resolveValues)).fail(deferred.reject).progress(
updateFunc(i,progressContexts,progressValues))}else{--remaining}}}if(!
remaining){deferred.resolveWith(resolveContexts,resolveValues)}return
deferred.promise()}});jQuery.support=function(support){var
input=document.createElement("input"),fragment=document.
createDocumentFragment(),div=document.createElement("div"),select=
document.createElement("select"),opt=select.appendChild(document.
createElement("option"));if(!input.type){return
support}input.type="checkbox";support.checkOn=input.value!=="";support.
optSelected=opt.selected;support.reliableMarginRight=true;support.
boxSizingReliable=true;support.pixelPosition=false;input.checked=true;
support.noCloneChecked=input.cloneNode(true).checked;select.disabled=
true;support.optDisabled=!opt.disabled;input=document.createElement("
input");input.value="t";input.type="radio";support.radioValue=input.
value==="t";input.setAttribute("checked","t");input.setAttribute("name",
"t");fragment.appendChild(input);support.checkClone=fragment.cloneNode(
true).cloneNode(true).lastChild.checked;support.focusinBubbles="
onfocusin"in
window;div.style.backgroundClip="content-box";div.cloneNode(true).style.
backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="
content-box";jQuery(function(){var
container,marginDiv,divReset="padding:0;margin:0;border:0;display:block;
-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:
content-box",body=document.getElementsByTagName("body")[0];if(!body){
return}container=document.createElement("div");container.style.cssText="
border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-
top:1px";body.appendChild(container).appendChild(div);div.innerHTML="";
div.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-
box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px
;margin-top:1%;position:absolute;top:1%";jQuery.swap(body,body.style.
zoom!=null?{zoom:1}:{},function(){support.boxSizing=div.offsetWidth===4}
);if(window.getComputedStyle){support.pixelPosition=(window.
getComputedStyle(div,null)||{}).top!=="1%";support.boxSizingReliable=(
window.getComputedStyle(div,null)||{width:"4px"}).width==="4px";
marginDiv=div.appendChild(document.createElement("div"));marginDiv.style
.cssText=div.style.cssText=divReset;marginDiv.style.marginRight=
marginDiv.style.width="0";div.style.width="1px";support.
reliableMarginRight=!parseFloat((window.getComputedStyle(marginDiv,null)
||{}).marginRight)}body.removeChild(container)});return support}({});var
data_user,data_priv,rbrace=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,rmultiDash=/([
A-Z])/g;function
Data(){Object.defineProperty(this.cache={},0,{get:function(){return{}}})
;this.expando=jQuery.expando+Math.random()}Data.uid=1;Data.accepts=
function(owner){return
owner.nodeType?owner.nodeType===1||owner.nodeType===9:true};Data.
prototype={key:function(owner){if(!Data.accepts(owner)){return 0}var
descriptor={},unlock=owner[this.expando];if(!unlock){unlock=Data.uid++;
try{descriptor[this.expando]={value:unlock};Object.defineProperties(
owner,descriptor)}catch(e){descriptor[this.expando]=unlock;jQuery.extend
(owner,descriptor)}}if(!this.cache[unlock]){this.cache[unlock]={}}return
unlock},set:function(owner,data,value){var
prop,unlock=this.key(owner),cache=this.cache[unlock];if(typeof
data==="string"){cache[data]=value}else{if(jQuery.isEmptyObject(cache)){
jQuery.extend(this.cache[unlock],data)}else{for(prop in
data){cache[prop]=data[prop]}}}return cache},get:function(owner,key){var
cache=this.cache[this.key(owner)];return
key===undefined?cache:cache[key]},access:function(owner,key,value){var
stored;if(key===undefined||key&&typeof
key==="string"&&value===undefined){stored=this.get(owner,key);return
stored!==undefined?stored:this.get(owner,jQuery.camelCase(key))}this.set
(owner,key,value);return
value!==undefined?value:key},remove:function(owner,key){var
i,name,camel,unlock=this.key(owner),cache=this.cache[unlock];if(key===
undefined){this.cache[unlock]={}}else{if(jQuery.isArray(key)){name=key.
concat(key.map(jQuery.camelCase))}else{camel=jQuery.camelCase(key);if(
key in cache){name=[key,camel]}else{name=camel;name=name in
cache?[name]:name.match(core_rnotwhite)||[]}}i=name.length;while(i--){
delete
cache[name[i]]}}},hasData:function(owner){return!jQuery.isEmptyObject(
this.cache[owner[this.expando]]||{})},discard:function(owner){if(owner[
this.expando]){delete this.cache[owner[this.expando]]}}};data_user=new
Data;data_priv=new
Data;jQuery.extend({acceptData:Data.accepts,hasData:function(elem){
return
data_user.hasData(elem)||data_priv.hasData(elem)},data:function(elem,
name,data){return
data_user.access(elem,name,data)},removeData:function(elem,name){
data_user.remove(elem,name)},_data:function(elem,name,data){return
data_priv.access(elem,name,data)},_removeData:function(elem,name){
data_priv.remove(elem,name)}});jQuery.fn.extend({data:function(key,value
){var
attrs,name,elem=this[0],i=0,data=null;if(key===undefined){if(this.length
){data=data_user.get(elem);if(elem.nodeType===1&&!data_priv.get(elem,"
hasDataAttrs")){attrs=elem.attributes;for(;i<attrs.length;i++){name=
attrs[i].name;if(name.indexOf("data-")===0){name=jQuery.camelCase(name.
slice(5));dataAttr(elem,name,data[name])}}data_priv.set(elem,"
hasDataAttrs",true)}}return data}if(typeof key==="object"){return
this.each(function(){data_user.set(this,key)})}return
jQuery.access(this,function(value){var
data,camelKey=jQuery.camelCase(key);if(elem&&value===undefined){data=
data_user.get(elem,key);if(data!==undefined){return
data}data=data_user.get(elem,camelKey);if(data!==undefined){return
data}data=dataAttr(elem,camelKey,undefined);if(data!==undefined){return
data}return}this.each(function(){var
data=data_user.get(this,camelKey);data_user.set(this,camelKey,value);if(
key.indexOf("-")!==-1&&data!==undefined){data_user.set(this,key,value)}}
)},null,value,arguments.length>1,null,true)},removeData:function(key){
return this.each(function(){data_user.remove(this,key)})}});function
dataAttr(elem,key,data){var
name;if(data===undefined&&elem.nodeType===1){name="data-"+key.replace(
rmultiDash,"-$1").toLowerCase();data=elem.getAttribute(name);if(typeof
data==="string"){try{data=data==="true"?true:data==="false"?false:data==
="null"?null:+data+""===data?+data:rbrace.test(data)?JSON.parse(data):
data}catch(e){}data_user.set(elem,key,data)}else{data=undefined}}return
data}jQuery.extend({queue:function(elem,type,data){var
queue;if(elem){type=(type||"fx")+"queue";queue=data_priv.get(elem,type);
if(data){if(!queue||jQuery.isArray(data)){queue=data_priv.access(elem,
type,jQuery.makeArray(data))}else{queue.push(data)}}return
queue||[]}},dequeue:function(elem,type){type=type||"fx";var
queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),
hooks=jQuery._queueHooks(elem,type),next=function(){jQuery.dequeue(elem,
type)};if(fn==="inprogress"){fn=queue.shift();startLength--}if(fn){if(
type==="fx"){queue.unshift("inprogress")}delete
hooks.stop;fn.call(elem,next,hooks)}if(!startLength&&hooks){hooks.empty.
fire()}},_queueHooks:function(elem,type){var
key=type+"queueHooks";return
data_priv.get(elem,key)||data_priv.access(elem,key,{empty:jQuery.
Callbacks("once
memory").add(function(){data_priv.remove(elem,[type+"queue",key])})})}})
;jQuery.fn.extend({queue:function(type,data){var setter=2;if(typeof
type!=="string"){data=type;type="fx";setter--}if(arguments.length<setter
){return jQuery.queue(this[0],type)}return
data===undefined?this:this.each(function(){var
queue=jQuery.queue(this,type,data);jQuery._queueHooks(this,type);if(type
==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type)}})},dequeue:
function(type){return
this.each(function(){jQuery.dequeue(this,type)})},delay:function(time,
type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";
return this.queue(type,function(next,hooks){var
timeout=setTimeout(next,time);hooks.stop=function(){clearTimeout(timeout
)}})},clearQueue:function(type){return
this.queue(type||"fx",[])},promise:function(type,obj){var
tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=
function(){if(!--count){defer.resolveWith(elements,[elements])}};if(
typeof
type!=="string"){obj=type;type=undefined}type=type||"fx";while(i--){tmp=
data_priv.get(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;
tmp.empty.add(resolve)}}resolve();return defer.promise(obj)}});var
nodeHook,boolHook,rclass=/[\t\r\n\f]/g,rreturn=/\r/g,rfocusable=/^(?:
input|select|textarea|button)$/i;jQuery.fn.extend({attr:function(name,
value){return
jQuery.access(this,jQuery.attr,name,value,arguments.length>1)},
removeAttr:function(name){return
this.each(function(){jQuery.removeAttr(this,name)})},prop:function(name,
value){return
jQuery.access(this,jQuery.prop,name,value,arguments.length>1)},
removeProp:function(name){return this.each(function(){delete
this[jQuery.propFix[name]||name]})},addClass:function(value){var
classes,elem,cur,clazz,j,i=0,len=this.length,proceed=typeof
value==="string"&&value;if(jQuery.isFunction(value)){return
this.each(function(j){jQuery(this).addClass(value.call(this,j,this.
className))})}if(proceed){classes=(value||"").match(core_rnotwhite)||[];
for(;i<len;i++){elem=this[i];cur=elem.nodeType===1&&(elem.className?("
"+elem.className+" ").replace(rclass," "):"
");if(cur){j=0;while(clazz=classes[j++]){if(cur.indexOf(" "+clazz+"
")<0){cur+=clazz+" "}}elem.className=jQuery.trim(cur)}}}return
this},removeClass:function(value){var
classes,elem,cur,clazz,j,i=0,len=this.length,proceed=arguments.length===
0||typeof value==="string"&&value;if(jQuery.isFunction(value)){return
this.each(function(j){jQuery(this).removeClass(value.call(this,j,this.
className))})}if(proceed){classes=(value||"").match(core_rnotwhite)||[];
for(;i<len;i++){elem=this[i];cur=elem.nodeType===1&&(elem.className?("
"+elem.className+" ").replace(rclass,"
"):"");if(cur){j=0;while(clazz=classes[j++]){while(cur.indexOf("
"+clazz+" ")>=0){cur=cur.replace(" "+clazz+" ","
")}}elem.className=value?jQuery.trim(cur):""}}}return
this},toggleClass:function(value,stateVal){var type=typeof
value;if(typeof stateVal==="boolean"&&type==="string"){return
stateVal?this.addClass(value):this.removeClass(value)}if(jQuery.
isFunction(value)){return
this.each(function(i){jQuery(this).toggleClass(value.call(this,i,this.
className,stateVal),stateVal)})}return
this.each(function(){if(type==="string"){var
className,i=0,self=jQuery(this),classNames=value.match(core_rnotwhite)||
[];while(className=classNames[i++]){if(self.hasClass(className)){self.
removeClass(className)}else{self.addClass(className)}}}else
if(type===core_strundefined||type==="boolean"){if(this.className){
data_priv.set(this,"__className__",this.className)}this.className=this.
className||value===false?"":data_priv.get(this,"__className__")||""}})},
hasClass:function(selector){var className=" "+selector+"
",i=0,l=this.length;for(;i<l;i++){if(this[i].nodeType===1&&("
"+this[i].className+" ").replace(rclass,"
").indexOf(className)>=0){return true}}return
false},val:function(value){var
hooks,ret,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks=
jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()]
;if(hooks&&"get"in
hooks&&(ret=hooks.get(elem,"value"))!==undefined){return
ret}ret=elem.value;return typeof
ret==="string"?ret.replace(rreturn,""):ret==null?"":ret}return}
isFunction=jQuery.isFunction(value);return this.each(function(i){var
val;if(this.nodeType!==1){return}if(isFunction){val=value.call(this,i,
jQuery(this).val())}else{val=value}if(val==null){val=""}else if(typeof
val==="number"){val+=""}else
if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return
value==null?"":value+""})}hooks=jQuery.valHooks[this.type]||jQuery.
valHooks[this.nodeName.toLowerCase()];if(!hooks||!("set"in
hooks)||hooks.set(this,val,"value")===undefined){this.value=val}})}});
jQuery.extend({valHooks:{option:{get:function(elem){var
val=elem.attributes.value;return!val||val.specified?elem.value:elem.text
}},select:{get:function(elem){var
value,option,options=elem.options,index=elem.selectedIndex,one=elem.type
==="select-one"||index<0,values=one?null:[],max=one?index+1:options.
length,i=index<0?max:one?index:0;for(;i<max;i++){option=options[i];if((
option.selected||i===index)&&(jQuery.support.optDisabled?!option.
disabled:option.getAttribute("disabled")===null)&&(!option.parentNode.
disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){value=jQuery(
option).val();if(one){return value}values.push(value)}}return
values},set:function(elem,value){var
optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=
options.length;while(i--){option=options[i];if(option.selected=jQuery.
inArray(jQuery(option).val(),values)>=0){optionSet=true}}if(!optionSet){
elem.selectedIndex=-1}return
values}}},attr:function(elem,name,value){var
hooks,ret,nType=elem.nodeType;if(!elem||nType===3||nType===8||nType===2)
{return}if(typeof elem.getAttribute===core_strundefined){return
jQuery.prop(elem,name,value)}if(nType!==1||!jQuery.isXMLDoc(elem)){name=
name.toLowerCase();hooks=jQuery.attrHooks[name]||(jQuery.expr.match.bool
.test(name)?boolHook:nodeHook)}if(value!==undefined){if(value===null){
jQuery.removeAttr(elem,name)}else if(hooks&&"set"in
hooks&&(ret=hooks.set(elem,value,name))!==undefined){return
ret}else{elem.setAttribute(name,value+"");return value}}else
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return
ret}else{ret=jQuery.find.attr(elem,name);return
ret==null?undefined:ret}},removeAttr:function(elem,value){var
name,propName,i=0,attrNames=value&&value.match(core_rnotwhite);if(
attrNames&&elem.nodeType===1){while(name=attrNames[i++]){propName=jQuery
.propFix[name]||name;if(jQuery.expr.match.bool.test(name)){elem[propName
]=false}elem.removeAttribute(name)}}},attrHooks:{type:{set:function(elem
,value){if(!jQuery.support.radioValue&&value==="radio"&&jQuery.nodeName(
elem,"input")){var
val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val}
return
value}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(
elem,name,value){var
ret,hooks,notxml,nType=elem.nodeType;if(!elem||nType===3||nType===8||
nType===2){return}notxml=nType!==1||!jQuery.isXMLDoc(elem);if(notxml){
name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name]}if(value!==
undefined){return hooks&&"set"in
hooks&&(ret=hooks.set(elem,value,name))!==undefined?ret:elem[name]=value
}else{return hooks&&"get"in
hooks&&(ret=hooks.get(elem,name))!==null?ret:elem[name]}},propHooks:{
tabIndex:{get:function(elem){return
elem.hasAttribute("tabindex")||rfocusable.test(elem.nodeName)||elem.href
?elem.tabIndex:-1}}}});boolHook={set:function(elem,value,name){if(value=
==false){jQuery.removeAttr(elem,name)}else{elem.setAttribute(name,name)}
return
name}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(
i,name){var
getter=jQuery.expr.attrHandle[name]||jQuery.find.attr;jQuery.expr.
attrHandle[name]=function(elem,name,isXML){var
fn=jQuery.expr.attrHandle[name],ret=isXML?undefined:(jQuery.expr.
attrHandle[name]=undefined)!=getter(elem,name,isXML)?name.toLowerCase():
null;jQuery.expr.attrHandle[name]=fn;return
ret}});if(!jQuery.support.optSelected){jQuery.propHooks.selected={get:
function(elem){var
parent=elem.parentNode;if(parent&&parent.parentNode){parent.parentNode.
selectedIndex}return
null}}}jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","
cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable
"],function(){jQuery.propFix[this.toLowerCase()]=this});jQuery.each(["
radio","checkbox"],function(){jQuery.valHooks[this]={set:function(elem,
value){if(jQuery.isArray(value)){return
elem.checked=jQuery.inArray(jQuery(elem).val(),value)>=0}}};if(!jQuery.
support.checkOn){jQuery.valHooks[this].get=function(elem){return
elem.getAttribute("value")===null?"on":elem.value}}});var
rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|contextmenu)|click/,rfocusMorph=
/^(?:focusinfocus|focusoutblur)$/,rtypenamespace=/^([^.]*)(?:\.(.+)|)$/;
function returnTrue(){return true}function returnFalse(){return
false}function safeActiveElement(){try{return
document.activeElement}catch(err){}}jQuery.event={global:{},add:function
(elem,types,handler,data,selector){var
handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,
namespaces,origType,elemData=data_priv.get(elem);if(!elemData){return}if
(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;
selector=handleObjIn.selector}if(!handler.guid){handler.guid=jQuery.guid
++}if(!(events=elemData.events)){events=elemData.events={}}if(!(
eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){
return typeof
jQuery!==core_strundefined&&(!e||jQuery.event.triggered!==e.type)?jQuery
.event.dispatch.apply(eventHandle.elem,arguments):undefined};eventHandle
.elem=elem}types=(types||"").match(core_rnotwhite)||[""];t=types.length;
while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];
namespaces=(tmp[2]||"").split(".").sort();if(!type){continue}special=
jQuery.event.special[type]||{};type=(selector?special.delegateType:
special.bindType)||type;special=jQuery.event.special[type]||{};handleObj
=jQuery.extend({type:type,origType:origType,data:data,handler:handler,
guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.
match.needsContext.test(selector),namespace:namespaces.join(".")},
handleObjIn);if(!(handlers=events[type])){handlers=events[type]=[];
handlers.delegateCount=0;if(!special.setup||special.setup.call(elem,data
,namespaces,eventHandle)===false){if(elem.addEventListener){elem.
addEventListener(type,eventHandle,false)}}}if(special.add){special.add.
call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=
handler.guid}}if(selector){handlers.splice(handlers.delegateCount++,0,
handleObj)}else{handlers.push(handleObj)}jQuery.event.global[type]=true}
elem=null},remove:function(elem,types,handler,selector,mappedTypes){var
j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,
origType,elemData=data_priv.hasData(elem)&&data_priv.get(elem);if(!
elemData||!(events=elemData.events)){return}types=(types||"").match(
core_rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(
types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").
sort();if(!type){for(type in
events){jQuery.event.remove(elem,type+types[t],handler,selector,true)}
continue}special=jQuery.event.special[type]||{};type=(selector?special.
delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2
]&&new
RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");origCount=j
=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||
origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid
)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===
handleObj.selector||selector==="**"&&handleObj.selector)){handlers.
splice(j,1);if(handleObj.selector){handlers.delegateCount--}if(special.
remove){special.remove.call(elem,handleObj)}}}if(origCount&&!handlers.
length){if(!special.teardown||special.teardown.call(elem,namespaces,
elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle)}
delete events[type]}}if(jQuery.isEmptyObject(events)){delete
elemData.handle;data_priv.remove(elem,"events")}},trigger:function(event
,data,elem,onlyHandlers){var
i,cur,tmp,bubbleType,ontype,handle,special,eventPath=[elem||document],
type=core_hasOwn.call(event,"type")?event.type:event,namespaces=
core_hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=
tmp=elem=elem||document;if(elem.nodeType===3||elem.nodeType===8){return}
if(rfocusMorph.test(type+jQuery.event.triggered)){return}if(type.indexOf
(".")>=0){namespaces=type.split(".");type=namespaces.shift();namespaces.
sort()}ontype=type.indexOf(":")<0&&"on"+type;event=event[jQuery.expando]
?event:new jQuery.Event(type,typeof
event==="object"&&event);event.isTrigger=onlyHandlers?2:3;event.
namespace=namespaces.join(".");event.namespace_re=event.namespace?new
RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;event.
result=undefined;if(!event.target){event.target=elem}data=data==null?[
event]:jQuery.makeArray(data,[event]);special=jQuery.event.special[type]
||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)
===false){return}if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(
elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(
bubbleType+type)){cur=cur.parentNode
}for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur}if(tmp===(elem
}.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.
}parentWindow||window)}}i=0;while((cur=eventPath[i++])&&!event.
}isPropagationStopped()){event.type=i>1?bubbleType:special.bindType||
}type;handle=(data_priv.get(cur,"events")||{})[event.type]&&data_priv.
}get(cur,"handle");if(handle){handle.apply(cur,data)}handle=ontype&&cur[
}ontype];if(handle&&jQuery.acceptData(cur)&&handle.apply&&handle.apply(
}cur,data)===false){event.preventDefault()}}event.type=type;if(!
}onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||
}special._default.apply(eventPath.pop(),data)===false)&&jQuery.
}acceptData(elem)){if(ontype&&jQuery.isFunction(elem[type])&&!jQuery.
}isWindow(elem)){tmp=elem[ontype];if(tmp){elem[ontype]=null}jQuery.event
}.triggered=type;elem[type]();jQuery.event.triggered=undefined;if(tmp){
}elem[ontype]=tmp}}}}return
}event.result},dispatch:function(event){event=jQuery.event.fix(event);
}var
}i,j,ret,matched,handleObj,handlerQueue=[],args=core_slice.call(
}arguments),handlers=(data_priv.get(this,"events")||{})[event.type]||[],
}special=jQuery.event.special[event.type]||{};args[0]=event;event.
}delegateTarget=this;if(special.preDispatch&&special.preDispatch.call(
}this,event)===false){return}handlerQueue=jQuery.event.handlers.call(
}this,event,handlers);i=0;while((matched=handlerQueue[i++])&&!event.
}isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((
}handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped(
})){if(!event.namespace_re||event.namespace_re.test(handleObj.namespace)
}){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.
}event.special[handleObj.origType]||{}).handle||handleObj.handler).apply
}(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){
}event.preventDefault();event.stopPropagation()}}}}}if(special.
}postDispatch){special.postDispatch.call(this,event)}return
}event.result},handlers:function(event,handlers){var
}i,matches,sel,handleObj,handlerQueue=[],delegateCount=handlers.
}delegateCount,cur=event.target;if(delegateCount&&cur.nodeType&&(!event.
}button||event.type!=="click")){for(;cur!==this;cur=cur.parentNode||this
}){if(cur.disabled!==true||event.type!=="click"){matches=[];for(i=0;i<
}delegateCount;i++){handleObj=handlers[i];sel=handleObj.selector+"
}";if(matches[sel]===undefined){matches[sel]=handleObj.needsContext?
}jQuery(sel,this).index(cur)>=0:jQuery.find(sel,this,null,[cur]).length}
}if(matches[sel]){matches.push(handleObj)}}if(matches.length){
}handlerQueue.push({elem:cur,handlers:matches})}}}}if(delegateCount<
}handlers.length){handlerQueue.push({elem:this,handlers:handlers.slice(
}delegateCount)})}return handlerQueue},props:"altKey bubbles cancelable
}ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target
}timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char
}charCode key keyCode".split("
}"),filter:function(event,original){if(event.which==null){event.which=
}original.charCode!=null?original.charCode:original.keyCode}return
}event}},mouseHooks:{props:"button buttons clientX clientY offsetX
}offsetY pageX pageY screenX screenY toElement".split("
}"),filter:function(event,original){var
}eventDoc,doc,body,button=original.button;if(event.pageX==null&&original
}.clientX!=null){eventDoc=event.target.ownerDocument||document;doc=
}eventDoc.documentElement;body=eventDoc.body;event.pageX=original.
}clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.
}clientLeft||body&&body.clientLeft||0);event.pageY=original.clientY+(doc
}&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&
}body.clientTop||0)}if(!event.which&&button!==undefined){event.which=
}button&1?1:button&2?3:button&4?2:0}return
}event}},fix:function(event){if(event[jQuery.expando]){return event}var
}i,prop,copy,type=event.type,originalEvent=event,fixHook=this.fixHooks[
}type];if(!fixHook){this.fixHooks[type]=fixHook=rmouseEvent.test(type)?
}this.mouseHooks:rkeyEvent.test(type)?this.keyHooks:{}}copy=fixHook.
}props?this.props.concat(fixHook.props):this.props;event=new
}jQuery.Event(originalEvent);i=copy.length;while(i--){prop=copy[i];event
}[prop]=originalEvent[prop]}if(!event.target){event.target=document}if(
}event.target.nodeType===3){event.target=event.target.parentNode}return
}fixHook.filter?fixHook.filter(event,originalEvent):event},special:{load
}:{noBubble:true},focus:{trigger:function(){if(this!==safeActiveElement(
})&&this.focus){this.focus();return
}false}},delegateType:"focusin"},blur:{trigger:function(){if(this===
}safeActiveElement()&&this.blur){this.blur();return
}false}},delegateType:"focusout"},click:{trigger:function(){if(this.type
}==="checkbox"&&this.click&&jQuery.nodeName(this,"input")){this.click();
}return false}},_default:function(event){return
}jQuery.nodeName(event.target,"a")}},beforeunload:{postDispatch:function
}(event){if(event.result!==undefined){event.originalEvent.returnValue=
}event.result}}}},simulate:function(type,elem,event,bubble){var
}e=jQuery.extend(new
}jQuery.Event,event,{type:type,isSimulated:true,originalEvent:{}});if(
}bubble){jQuery.event.trigger(e,null,elem)}else{jQuery.event.dispatch.
}call(elem,e)}if(e.isDefaultPrevented()){event.preventDefault()}}};
}jQuery.removeEvent=function(elem,type,handle){if(elem.
}removeEventListener){elem.removeEventListener(type,handle,false)}};
}jQuery.Event=function(src,props){if(!(this instanceof
}jQuery.Event)){return new
}jQuery.Event(src,props)}if(src&&src.type){this.originalEvent=src;this.
}type=src.type;this.isDefaultPrevented=src.defaultPrevented||src.
}getPreventDefault&&src.getPreventDefault()?returnTrue:returnFalse}else{
}this.type=src}if(props){jQuery.extend(this,props)}this.timeStamp=src&&
}src.timeStamp||jQuery.now();this[jQuery.expando]=true};jQuery.Event.
}prototype={isDefaultPrevented:returnFalse,isPropagationStopped:
}returnFalse,isImmediatePropagationStopped:returnFalse,preventDefault:
}function(){var
}e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(e&&e.
}preventDefault){e.preventDefault()}},stopPropagation:function(){var
}e=this.originalEvent;this.isPropagationStopped=returnTrue;if(e&&e.
}stopPropagation){e.stopPropagation()}},stopImmediatePropagation:
}function(){this.isImmediatePropagationStopped=returnTrue;this.
}stopPropagation()}};jQuery.each({mouseenter:"mouseover",mouseleave:"
}mouseout"},function(orig,fix){jQuery.event.special[orig]={delegateType:
}fix,bindType:fix,handle:function(event){var
}ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;
}if(!related||related!==target&&!jQuery.contains(target,related)){event.
}type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);
}event.type=fix}return
}ret}}});if(!jQuery.support.focusinBubbles){jQuery.each({focus:"focusin"
},blur:"focusout"},function(orig,fix){var
}attaches=0,handler=function(event){jQuery.event.simulate(fix,event.
}target,jQuery.event.fix(event),true)};jQuery.event.special[fix]={setup:
}function(){if(attaches++===0){document.addEventListener(orig,handler,
}true)}},teardown:function(){if(--attaches===0){document.
}removeEventListener(orig,handler,true)}}}})}jQuery.fn.extend({on:
}function(types,selector,data,fn,one){var origFn,type;if(typeof
}types==="object"){if(typeof
}selector!=="string"){data=data||selector;selector=undefined}for(type in
}types){this.on(type,selector,data,types[type],one)}return
}this}if(data==null&&fn==null){fn=selector;data=selector=undefined}else
}if(fn==null){if(typeof
}selector==="string"){fn=data;data=undefined}else{fn=data;data=selector;
}selector=undefined}}if(fn===false){fn=returnFalse}else if(!fn){return
}this}if(one===1){origFn=fn;fn=function(event){jQuery().off(event);
}return
}origFn.apply(this,arguments)};fn.guid=origFn.guid||(origFn.guid=jQuery.
}guid++)}return
}this.each(function(){jQuery.event.add(this,types,fn,data,selector)})},
}one:function(types,selector,data,fn){return
}this.on(types,selector,data,fn,1)},off:function(types,selector,fn){var
}handleObj,type;if(types&&types.preventDefault&&types.handleObj){
}handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.
}namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType
},handleObj.selector,handleObj.handler);return this}if(typeof
}types==="object"){for(type in
}types){this.off(type,selector,types[type])}return
}this}if(selector===false||typeof
}selector==="function"){fn=selector;selector=undefined}if(fn===false){fn
}=returnFalse}return
}this.each(function(){jQuery.event.remove(this,types,fn,selector)})},
}trigger:function(type,data){return
}this.each(function(){jQuery.event.trigger(type,data,this)})},
}triggerHandler:function(type,data){var elem=this[0];if(elem){return
}jQuery.event.trigger(type,data,elem,true)}}});var
}isSimple=/^.[^:#\[\.,]*$/,rparentsprev=/^(?:parents|prev(?:Until|All))/
},rneedsContext=jQuery.expr.match.needsContext,guaranteedUnique={
}children:true,contents:true,next:true,prev:true};jQuery.fn.extend({find
}:function(selector){var i,ret=[],self=this,len=self.length;if(typeof
}selector!=="string"){return
}this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if
}(jQuery.contains(self[i],this)){return
}true}}}))}for(i=0;i<len;i++){jQuery.find(selector,self[i],ret)}ret=this
}.pushStack(len>1?jQuery.unique(ret):ret);ret.selector=this.selector?
}this.selector+" "+selector:selector;return
}ret},has:function(target){var
}targets=jQuery(target,this),l=targets.length;return
}this.filter(function(){var
}i=0;for(;i<l;i++){if(jQuery.contains(this,targets[i])){return
}true}}})},not:function(selector){return
}this.pushStack(winnow(this,selector||[],true))},filter:function(
}selector){return
}this.pushStack(winnow(this,selector||[],false))},is:function(selector){
}return!!winnow(this,typeof
}selector==="string"&&rneedsContext.test(selector)?jQuery(selector):
}selector||[],false).length},closest:function(selectors,context){var
}cur,i=0,l=this.length,matched=[],pos=rneedsContext.test(selectors)||
}typeof
}selectors!=="string"?jQuery(selectors,context||this.context):0;for(;i<l
};i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){if(cur.
}nodeType<11&&(pos?pos.index(cur)>-1:cur.nodeType===1&&jQuery.find.
}matchesSelector(cur,selectors))){cur=matched.push(cur);break}}}return
}this.pushStack(matched.length>1?jQuery.unique(matched):matched)},index:
}function(elem){if(!elem){return
}this[0]&&this[0].parentNode?this.first().prevAll().length:-1}if(typeof
}elem==="string"){return core_indexOf.call(jQuery(elem),this[0])}return
}core_indexOf.call(this,elem.jquery?elem[0]:elem)},add:function(selector
},context){var set=typeof
}selector==="string"?jQuery(selector,context):jQuery.makeArray(selector&
}&selector.nodeType?[selector]:selector),all=jQuery.merge(this.get(),set
});return
}this.pushStack(jQuery.unique(all))},addBack:function(selector){return
}this.add(selector==null?this.prevObject:this.prevObject.filter(selector
}))}});function
}sibling(cur,dir){while((cur=cur[dir])&&cur.nodeType!==1){}return
}cur}jQuery.each({parent:function(elem){var
}parent=elem.parentNode;return
}parent&&parent.nodeType!==11?parent:null},parents:function(elem){return
}jQuery.dir(elem,"parentNode")},parentsUntil:function(elem,i,until){
}return jQuery.dir(elem,"parentNode",until)},next:function(elem){return
}sibling(elem,"nextSibling")},prev:function(elem){return
}sibling(elem,"previousSibling")},nextAll:function(elem){return
}jQuery.dir(elem,"nextSibling")},prevAll:function(elem){return
}jQuery.dir(elem,"previousSibling")},nextUntil:function(elem,i,until){
}return
}jQuery.dir(elem,"nextSibling",until)},prevUntil:function(elem,i,until){
}return
}jQuery.dir(elem,"previousSibling",until)},siblings:function(elem){
}return
}jQuery.sibling((elem.parentNode||{}).firstChild,elem)},children:
}function(elem){return
}jQuery.sibling(elem.firstChild)},contents:function(elem){return
}elem.contentDocument||jQuery.merge([],elem.childNodes)}},function(name,
}fn){jQuery.fn[name]=function(until,selector){var
}matched=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector
}=until}if(selector&&typeof
}selector==="string"){matched=jQuery.filter(selector,matched)}if(this.
}length>1){if(!guaranteedUnique[name]){jQuery.unique(matched)}if(
}rparentsprev.test(name)){matched.reverse()}}return
}this.pushStack(matched)}});jQuery.extend({filter:function(expr,elems,
}not){var elem=elems[0];if(not){expr=":not("+expr+")"}return
}elems.length===1&&elem.nodeType===1?jQuery.find.matchesSelector(elem,
}expr)?[elem]:[]:jQuery.find.matches(expr,jQuery.grep(elems,function(
}elem){return elem.nodeType===1}))},dir:function(elem,dir,until){var
}matched=[],truncate=until!==undefined;while((elem=elem[dir])&&elem.
}nodeType!==9){if(elem.nodeType===1){if(truncate&&jQuery(elem).is(until)
}){break}matched.push(elem)}}return
}matched},sibling:function(n,elem){var
}matched=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){matched
}.push(n)}}return matched}});function
}winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier)){return
}jQuery.grep(elements,function(elem,i){return!!qualifier.call(elem,i,
}elem)!==not})}if(qualifier.nodeType){return
}jQuery.grep(elements,function(elem){return
}elem===qualifier!==not})}if(typeof
}qualifier==="string"){if(isSimple.test(qualifier)){return
}jQuery.filter(qualifier,elements,not)}qualifier=jQuery.filter(qualifier
},elements)}return jQuery.grep(elements,function(elem){return
}core_indexOf.call(qualifier,elem)>=0!==not})}var
}rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)
}[^>]*)\/>/gi,rtagName=/<([\w:]+)/,rhtml=/<|&#?\w+;/,rnoInnerhtml=/<(?:
}script|style|link)/i,manipulation_rcheckableType=/^(?:checkbox|radio)$/
}i,rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptType=/^$|\/(?:
}java|ecma)script/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!
}(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,wrapMap={option:[1,"<select
}multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[
}2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</
}tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],
}_default:[0,"",""]};wrapMap.optgroup=wrapMap.option;wrapMap.tbody=
}wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th
}=wrapMap.td;jQuery.fn.extend({text:function(value){return
}jQuery.access(this,function(value){return
}value===undefined?jQuery.text(this):this.empty().append((this[0]&&this[
}0].ownerDocument||document).createTextNode(value))},null,value,
}arguments.length)},append:function(){return
}this.domManip(arguments,function(elem){if(this.nodeType===1||this.
}nodeType===11||this.nodeType===9){var
}target=manipulationTarget(this,elem);target.appendChild(elem)}})},
}prepend:function(){return
}this.domManip(arguments,function(elem){if(this.nodeType===1||this.
}nodeType===11||this.nodeType===9){var
}target=manipulationTarget(this,elem);target.insertBefore(elem,target.
}firstChild)}})},before:function(){return
}this.domManip(arguments,function(elem){if(this.parentNode){this.
}parentNode.insertBefore(elem,this)}})},after:function(){return
}this.domManip(arguments,function(elem){if(this.parentNode){this.
}parentNode.insertBefore(elem,this.nextSibling)}})},remove:function(
}selector,keepData){var
}elem,elems=selector?jQuery.filter(selector,this):this,i=0;for(;(elem=
}elems[i])!=null;i++){if(!keepData&&elem.nodeType===1){jQuery.cleanData(
}getAll(elem))}if(elem.parentNode){if(keepData&&jQuery.contains(elem.
}ownerDocument,elem)){setGlobalEval(getAll(elem,"script"))}elem.
}parentNode.removeChild(elem)}}return this},empty:function(){var
}elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){jQuery.
}cleanData(getAll(elem,false));elem.textContent=""}}return
}this},clone:function(dataAndEvents,deepDataAndEvents){dataAndEvents=
}dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=
}deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return
}this.map(function(){return
}jQuery.clone(this,dataAndEvents,deepDataAndEvents)})},html:function(
}value){return jQuery.access(this,function(value){var
}elem=this[0]||{},i=0,l=this.length;if(value===undefined&&elem.nodeType=
}==1){return elem.innerHTML}if(typeof
}value==="string"&&!rnoInnerhtml.test(value)&&!wrapMap[(rtagName.exec(
}value)||["",""])[1].toLowerCase()]){value=value.replace(rxhtmlTag,"<$1>
}</$2>");try{for(;i<l;i++){elem=this[i]||{};if(elem.nodeType===1){jQuery
}.cleanData(getAll(elem,false));elem.innerHTML=value}}elem=0}catch(e){}}
}if(elem){this.empty().append(value)}},null,value,arguments.length)},
}replaceWith:function(){var
}args=jQuery.map(this,function(elem){return[elem.nextSibling,elem.
}parentNode]}),i=0;this.domManip(arguments,function(elem){var
}next=args[i++],parent=args[i++];if(parent){if(next&&next.parentNode!==
}parent){next=this.nextSibling}jQuery(this).remove();parent.insertBefore
}(elem,next)}},true);return
}i?this:this.remove()},detach:function(selector){return
}this.remove(selector,true)},domManip:function(args,callback,
}allowIntersection){args=core_concat.apply([],args);var
}fragment,first,scripts,hasScripts,node,doc,i=0,l=this.length,set=this,
}iNoClone=l-1,value=args[0],isFunction=jQuery.isFunction(value);if(
}isFunction||!(l<=1||typeof
}value!=="string"||jQuery.support.checkClone||!rchecked.test(value))){
}return this.each(function(index){var
}self=set.eq(index);if(isFunction){args[0]=value.call(this,index,self.
}html())}self.domManip(args,callback,allowIntersection)})}if(l){fragment
}=jQuery.buildFragment(args,this[0].ownerDocument,false,!
}allowIntersection&&this);first=fragment.firstChild;if(fragment.
}childNodes.length===1){fragment=first}if(first){scripts=jQuery.map(
}getAll(fragment,"script"),disableScript);hasScripts=scripts.length;for(
};i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,
}true);if(hasScripts){jQuery.merge(scripts,getAll(node,"script"))}}
}callback.call(this[i],node,i)}if(hasScripts){doc=scripts[scripts.length
}-1].ownerDocument;jQuery.map(scripts,restoreScript);for(i=0;i<
}hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!
}data_priv.access(node,"globalEval")&&jQuery.contains(doc,node)){if(node
}.src){jQuery._evalUrl(node.src)}else{jQuery.globalEval(node.textContent
}.replace(rcleanScript,""))}}}}}}return
}this}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore
}:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,
}original){jQuery.fn[name]=function(selector){var
}elems,ret=[],insert=jQuery(selector),last=insert.length-1,i=0;for(;i<=
}last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[
}original](elems);core_push.apply(ret,elems.get())}return
}this.pushStack(ret)}});jQuery.extend({clone:function(elem,dataAndEvents
},deepDataAndEvents){var
}i,l,srcElements,destElements,clone=elem.cloneNode(true),inPage=jQuery.
}contains(elem.ownerDocument,elem);if(!jQuery.support.noCloneChecked&&(
}elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){
}destElements=getAll(clone);srcElements=getAll(elem);for(i=0,l=
}srcElements.length;i<l;i++){fixInput(srcElements[i],destElements[i])}}
}if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll
}(elem);destElements=destElements||getAll(clone);for(i=0,l=srcElements.
}length;i<l;i++){cloneCopyEvent(srcElements[i],destElements[i])}}else{
}cloneCopyEvent(elem,clone)}}destElements=getAll(clone,"script");if(
}destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,
}"script"))}return
}clone},buildFragment:function(elems,context,scripts,selection){var
}elem,tmp,tag,wrap,contains,j,i=0,l=elems.length,fragment=context.
}createDocumentFragment(),nodes=[];for(;i<l;i++){elem=elems[i];if(elem||
}elem===0){if(jQuery.type(elem)==="object"){jQuery.merge(nodes,elem.
}nodeType?[elem]:elem)}else
}if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem))}else{tmp
}=tmp||fragment.appendChild(context.createElement("div"));tag=(rtagName.
}exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap.
}_default;tmp.innerHTML=wrap[1]+elem.replace(rxhtmlTag,"<$1></$2>")+wrap
}[2];j=wrap[0];while(j--){tmp=tmp.lastChild}jQuery.merge(nodes,tmp.
}childNodes);tmp=fragment.firstChild;tmp.textContent=""}}}fragment.
}textContent="";i=0;while(elem=nodes[i++]){if(selection&&jQuery.inArray(
}elem,selection)!==-1){continue}contains=jQuery.contains(elem.
}ownerDocument,elem);tmp=getAll(fragment.appendChild(elem),"script");if(
}contains){setGlobalEval(tmp)}if(scripts){j=0;while(elem=tmp[j++]){if(
}rscriptType.test(elem.type||"")){scripts.push(elem)}}}}return
}fragment},cleanData:function(elems){var
}data,elem,events,type,key,j,special=jQuery.event.special,i=0;for(;(elem
}=elems[i])!==undefined;i++){if(Data.accepts(elem)){key=elem[data_priv.
}expando];if(key&&(data=data_priv.cache[key])){events=Object.keys(data.
}events||{});if(events.length){for(j=0;(type=events[j])!==undefined;j++)
}{if(special[type]){jQuery.event.remove(elem,type)}else{jQuery.
}removeEvent(elem,type,data.handle)}}}if(data_priv.cache[key]){delete
}data_priv.cache[key]}}}delete
}data_user.cache[elem[data_user.expando]]}},_evalUrl:function(url){
}return
}jQuery.ajax({url:url,type:"GET",dataType:"script",async:false,global:
}false,"throws":true})}});function
}manipulationTarget(elem,content){return
}jQuery.nodeName(elem,"table")&&jQuery.nodeName(content.nodeType===1?
}content:content.firstChild,"tr")?elem.getElementsByTagName("tbody")[0]|
}|elem.appendChild(elem.ownerDocument.createElement("tbody")):elem}
}function
}disableScript(elem){elem.type=(elem.getAttribute("type")!==null)+"/"+
}elem.type;return elem}function restoreScript(elem){var
}match=rscriptTypeMasked.exec(elem.type);if(match){elem.type=match[1]}
}else{elem.removeAttribute("type")}return elem}function
}setGlobalEval(elems,refElements){var
}l=elems.length,i=0;for(;i<l;i++){data_priv.set(elems[i],"globalEval",!
}refElements||data_priv.get(refElements[i],"globalEval"))}}function
}cloneCopyEvent(src,dest){var
}i,l,type,pdataOld,pdataCur,udataOld,udataCur,events;if(dest.nodeType!==
}1){return}if(data_priv.hasData(src)){pdataOld=data_priv.access(src);
}pdataCur=data_priv.set(dest,pdataOld);events=pdataOld.events;if(events)
}{delete pdataCur.handle;pdataCur.events={};for(type in
}events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,
}type,events[type][i])}}}}if(data_user.hasData(src)){udataOld=data_user.
}access(src);udataCur=jQuery.extend({},udataOld);data_user.set(dest,
}udataCur)}}function getAll(context,tag){var
}ret=context.getElementsByTagName?context.getElementsByTagName(tag||"*")
}:context.querySelectorAll?context.querySelectorAll(tag||"*"):[];return
}tag===undefined||tag&&jQuery.nodeName(context,tag)?jQuery.merge([
}context],ret):ret}function fixInput(src,dest){var
}nodeName=dest.nodeName.toLowerCase();if(nodeName==="input"&&
}manipulation_rcheckableType.test(src.type)){dest.checked=src.checked}
}else
}if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.
}defaultValue}}jQuery.fn.extend({wrapAll:function(html){var
}wrap;if(jQuery.isFunction(html)){return
}this.each(function(i){jQuery(this).wrapAll(html.call(this,i))})}if(this
}[0]){wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[
}0].parentNode){wrap.insertBefore(this[0])}wrap.map(function(){var
}elem=this;while(elem.firstElementChild){elem=elem.firstElementChild}
}return elem}).append(this)}return
}this},wrapInner:function(html){if(jQuery.isFunction(html)){return
}this.each(function(i){jQuery(this).wrapInner(html.call(this,i))})}
}return this.each(function(){var
}self=jQuery(this),contents=self.contents();if(contents.length){contents
}.wrapAll(html)}else{self.append(html)}})},wrap:function(html){var
}isFunction=jQuery.isFunction(html);return
}this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i)
}:html)})},unwrap:function(){return
}this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(
}this).replaceWith(this.childNodes)}}).end()}});var
}curCSS,iframe,rdisplayswap=/^(none|table(?!-c[ea]).+)/,rmargin=/^margin
}/,rnumsplit=new RegExp("^("+core_pnum+")(.*)$","i"),rnumnonpx=new
}RegExp("^("+core_pnum+")(?!px)[a-z%]+$","i"),rrelNum=new
}RegExp("^([+-])=("+core_pnum+")","i"),elemdisplay={BODY:"block"},
}cssShow={position:"absolute",visibility:"hidden",display:"block"},
}cssNormalTransform={letterSpacing:0,fontWeight:400},cssExpand=["Top","
}Right","Bottom","Left"],cssPrefixes=["Webkit","O","Moz","ms"];function
}vendorPropName(style,name){if(name in style){return name}var
}capName=name.charAt(0).toUpperCase()+name.slice(1),origName=name,i=
}cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in
}style){return name}}return origName}function
}isHidden(elem,el){elem=el||elem;return
}jQuery.css(elem,"display")==="none"||!jQuery.contains(elem.
}ownerDocument,elem)}function getStyles(elem){return
}window.getComputedStyle(elem,null)}function showHide(elements,show){var
}display,elem,hidden,values=[],index=0,length=elements.length;for(;index
}<length;index++){elem=elements[index];if(!elem.style){continue}values[
}index]=data_priv.get(elem,"olddisplay");display=elem.style.display;if(
}show){if(!values[index]&&display==="none"){elem.style.display=""}if(
}elem.style.display===""&&isHidden(elem)){values[index]=data_priv.access
}(elem,"olddisplay",css_defaultDisplay(elem.nodeName))}}else{if(!values[
}index]){hidden=isHidden(elem);if(display&&display!=="none"||!hidden){
}data_priv.set(elem,"olddisplay",hidden?display:jQuery.css(elem,"display
}"))}}}}for(index=0;index<length;index++){elem=elements[index];if(!elem.
}style){continue}if(!show||elem.style.display==="none"||elem.style.
}display===""){elem.style.display=show?values[index]||"":"none"}}return
}elements}jQuery.fn.extend({css:function(name,value){return
}jQuery.access(this,function(elem,name,value){var
}styles,len,map={},i=0;if(jQuery.isArray(name)){styles=getStyles(elem);
}len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],
}false,styles)}return map}return
}value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name)},
}name,value,arguments.length>1)},show:function(){return
}showHide(this,true)},hide:function(){return
}showHide(this)},toggle:function(state){if(typeof
}state==="boolean"){return state?this.show():this.hide()}return
}this.each(function(){if(isHidden(this)){jQuery(this).show()}else{jQuery
}(this).hide()}})}});jQuery.extend({cssHooks:{opacity:{get:function(elem
},computed){if(computed){var ret=curCSS(elem,"opacity");return
}ret===""?"1":ret}}}},cssNumber:{columnCount:true,fillOpacity:true,
}fontWeight:true,lineHeight:true,opacity:true,order:true,orphans:true,
}widows:true,zIndex:true,zoom:true},cssProps:{"float":"cssFloat"},style:
}function(elem,name,value,extra){if(!elem||elem.nodeType===3||elem.
}nodeType===8||!elem.style){return}var
}ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;name=
}jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(
}style,origName));hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName]
};if(value!==undefined){type=typeof
}value;if(type==="string"&&(ret=rrelNum.exec(value))){value=(ret[1]+1)*
}ret[2]+parseFloat(jQuery.css(elem,name));type="number"}if(value==null||
}type==="number"&&isNaN(value)){return}if(type==="number"&&!jQuery.
}cssNumber[origName]){value+="px"}if(!jQuery.support.clearCloneStyle&&
}value===""&&name.indexOf("background")===0){style[name]="inherit"}if(!
}hooks||!("set"in
}hooks)||(value=hooks.set(elem,value,extra))!==undefined){style[name]=
}value}}else{if(hooks&&"get"in
}hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret}return
}style[name]}},css:function(elem,name,extra,styles){var
}val,num,hooks,origName=jQuery.camelCase(name);name=jQuery.cssProps[
}origName]||(jQuery.cssProps[origName]=vendorPropName(elem.style,
}origName));hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(
}hooks&&"get"in
}hooks){val=hooks.get(elem,true,extra)}if(val===undefined){val=curCSS(
}elem,name,styles)}if(val==="normal"&&name in
}cssNormalTransform){val=cssNormalTransform[name]}if(extra===""||extra){
}num=parseFloat(val);return
}extra===true||jQuery.isNumeric(num)?num||0:val}return
}val}});curCSS=function(elem,name,_computed){var
}width,minWidth,maxWidth,computed=_computed||getStyles(elem),ret=
}computed?computed.getPropertyValue(name)||computed[name]:undefined,
}style=elem.style;if(computed){if(ret===""&&!jQuery.contains(elem.
}ownerDocument,elem)){ret=jQuery.style(elem,name)}if(rnumnonpx.test(ret)
}&&rmargin.test(name)){width=style.width;minWidth=style.minWidth;
}maxWidth=style.maxWidth;style.minWidth=style.maxWidth=style.width=ret;
}ret=computed.width;style.width=width;style.minWidth=minWidth;style.
}maxWidth=maxWidth}}return ret};function
}setPositiveNumber(elem,value,subtract){var
}matches=rnumsplit.exec(value);return
}matches?Math.max(0,matches[1]-(subtract||0))+(matches[2]||"px"):value}
}function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var
}i=extra===(isBorderBox?"border":"content")?4:name==="width"?1:0,val=0;
}for(;i<4;i+=2){if(extra==="margin"){val+=jQuery.css(elem,extra+
}cssExpand[i],true,styles)}if(isBorderBox){if(extra==="content"){val-=
}jQuery.css(elem,"padding"+cssExpand[i],true,styles)}if(extra!=="margin"
}){val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles)}}else
}{val+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);if(extra!=="
}padding"){val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,
}styles)}}}return val}function getWidthOrHeight(elem,name,extra){var
}valueIsBorderBox=true,val=name==="width"?elem.offsetWidth:elem.
}offsetHeight,styles=getStyles(elem),isBorderBox=jQuery.support.
}boxSizing&&jQuery.css(elem,"boxSizing",false,styles)==="border-box";if(
}val<=0||val==null){val=curCSS(elem,name,styles);if(val<0||val==null){
}val=elem.style[name]}if(rnumnonpx.test(val)){return
}val}valueIsBorderBox=isBorderBox&&(jQuery.support.boxSizingReliable||
}val===elem.style[name]);val=parseFloat(val)||0}return
}val+augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"
}content"),valueIsBorderBox,styles)+"px"}function
}css_defaultDisplay(nodeName){var
}doc=document,display=elemdisplay[nodeName];if(!display){display=
}actualDisplay(nodeName,doc);if(display==="none"||!display){iframe=(
}iframe||jQuery("<iframe frameborder='0' width='0'
}height='0'/>").css("cssText","display:block
}!important")).appendTo(doc.documentElement);doc=(iframe[0].
}contentWindow||iframe[0].contentDocument).document;doc.write("<!doctype
}html><html><body>");doc.close();display=actualDisplay(nodeName,doc);
}iframe.detach()}elemdisplay[nodeName]=display}return display}function
}actualDisplay(name,doc){var
}elem=jQuery(doc.createElement(name)).appendTo(doc.body),display=jQuery.
}css(elem[0],"display");elem.remove();return
}display}jQuery.each(["height","width"],function(i,name){jQuery.cssHooks
}[name]={get:function(elem,computed,extra){if(computed){return
}elem.offsetWidth===0&&rdisplayswap.test(jQuery.css(elem,"display"))?
}jQuery.swap(elem,cssShow,function(){return
}getWidthOrHeight(elem,name,extra)}):getWidthOrHeight(elem,name,extra)}}
},set:function(elem,value,extra){var
}styles=extra&&getStyles(elem);return
}setPositiveNumber(elem,value,extra?augmentWidthOrHeight(elem,name,extra
},jQuery.support.boxSizing&&jQuery.css(elem,"boxSizing",false,styles)===
}"border-box",styles):0)}}});jQuery(function(){if(!jQuery.support.
}reliableMarginRight){jQuery.cssHooks.marginRight={get:function(elem,
}computed){if(computed){return
}jQuery.swap(elem,{display:"inline-block"},curCSS,[elem,"marginRight"])}
}}}}if(!jQuery.support.pixelPosition&&jQuery.fn.position){jQuery.each(["
}top","left"],function(i,prop){jQuery.cssHooks[prop]={get:function(elem,
}computed){if(computed){computed=curCSS(elem,prop);return
}rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed}}}
}})}});if(jQuery.expr&&jQuery.expr.filters){jQuery.expr.filters.hidden=
}function(elem){return
}elem.offsetWidth<=0&&elem.offsetHeight<=0};jQuery.expr.filters.visible=
}function(elem){return!jQuery.expr.filters.hidden(elem)}}jQuery.each({
}margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.
}cssHooks[prefix+suffix]={expand:function(value){var
}i=0,expanded={},parts=typeof value==="string"?value.split("
}"):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]|
}|parts[i-2]||parts[0]}return
}expanded}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+suffix].set
}=setPositiveNumber}});var
}r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|
}button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|
}keygen)/i;jQuery.fn.extend({serialize:function(){return
}jQuery.param(this.serializeArray())},serializeArray:function(){return
}this.map(function(){var elements=jQuery.prop(this,"elements");return
}elements?jQuery.makeArray(elements):this ).filter(function(){var
}type=this.type;return
}this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.
}nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!
}manipulation_rcheckableType.test(type))}).map(function(i,elem){var
}val=jQuery(this).val();return
}val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val){return{
}name:elem.name,value:val.replace(rCRLF,"\r\n")}}):{name:elem.name,value
}:val.replace(rCRLF,"\r\n")}}).get()}});jQuery.param=function(a,
}traditional){var
}prefix,s=[],add=function(key,value){value=jQuery.isFunction(value)?
}value():value==null?"":value;s[s.length]=encodeURIComponent(key)+"="+
}encodeURIComponent(value)};if(traditional===undefined){traditional=
}jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional}if(jQuery.isArray(
}a)||a.jquery&&!jQuery.isPlainObject(a)){jQuery.each(a,function(){add(
}this.name,this.value)})}else{for(prefix in
}a){buildParams(prefix,a[prefix],traditional,add)}}return
}s.join("&").replace(r20,"+")};function
}buildParams(prefix,obj,traditional,add){var
}name;if(jQuery.isArray(obj)){jQuery.each(obj,function(i,v){if(
}traditional||rbracket.test(prefix)){add(prefix,v)}else{buildParams(
}prefix+"["+(typeof v==="object"?i:"")+"]",v,traditional,add)}})}else
}if(!traditional&&jQuery.type(obj)==="object"){for(name in
}obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add)}}else{
}add(prefix,obj)}}jQuery.each(("blur focus focusin focusout load resize
}scroll unload click dblclick "+"mousedown mouseup mousemove mouseover
}mouseout mouseenter mouseleave "+"change select submit keydown keypress
}keyup error contextmenu").split("
}"),function(i,name){jQuery.fn[name]=function(data,fn){return
}arguments.length>0?this.on(name,null,data,fn):this.trigger(name)}});
}jQuery.fn.extend({hover:function(fnOver,fnOut){return
}this.mouseenter(fnOver).mouseleave(fnOut||fnOver)},bind:function(types,
}data,fn){return
}this.on(types,null,data,fn)},unbind:function(types,fn){return
}this.off(types,null,fn)},delegate:function(selector,types,data,fn){
}return
}this.on(types,selector,data,fn)},undelegate:function(selector,types,fn)
}{return
}arguments.length===1?this.off(selector,"**"):this.off(types,selector||"
}**",fn)}});var
}ajaxLocParts,ajaxLocation,ajax_nonce=jQuery.now(),ajax_rquery=/\?/,
}rhash=/#.*$/,rts=/([?&])_=[^&]*/,rheaders=/^(.*?):[
}\t]*([^\r\n]*)$/gm,rlocalProtocol=/^(?:about|app|app-storage|.+-
}extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\
}/\//,rurl=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,_load=jQuery.fn
}.load,prefilters={},transports={},allTypes="*/".concat("*");try{
}ajaxLocation=location.href}catch(e){ajaxLocation=document.createElement
}("a");ajaxLocation.href="";ajaxLocation=ajaxLocation.href}ajaxLocParts=
}rurl.exec(ajaxLocation.toLowerCase())||[];function
}addToPrefiltersOrTransports(structure){return
}function(dataTypeExpression,func){if(typeof
}dataTypeExpression!=="string"){func=dataTypeExpression;
}dataTypeExpression="*"}var
}dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(
}core_rnotwhite)||[];if(jQuery.isFunction(func)){while(dataType=
}dataTypes[i++]){if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(
}structure[dataType]=structure[dataType]||[]).unshift(func)}else{(
}structure[dataType]=structure[dataType]||[]).push(func)}}}}}function
}inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){
}var inspected={},seekingTransport=structure===transports;function
}inspect(dataType){var
}selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],
}function(_,prefilterOrFactory){var
}dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);
}if(typeof
}dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[
}dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);
}inspect(dataTypeOrTransport);return false}else
}if(seekingTransport){return!(selected=dataTypeOrTransport)}});return
}selected}return
}inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*")}function
}ajaxExtend(target,src){var
}key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in
}src){if(src[key]!==undefined){(flatOptions[key]?target:deep||(deep={}))
}[key]=src[key]}}if(deep){jQuery.extend(true,target,deep)}return
}target}jQuery.fn.load=function(url,params,callback){if(typeof
}url!=="string"&&_load){return _load.apply(this,arguments)}var
}selector,type,response,self=this,off=url.indexOf("
}");if(off>=0){selector=url.slice(off);url=url.slice(0,off)}if(jQuery.
}isFunction(params)){callback=params;params=undefined}else
}if(params&&typeof
}params==="object"){type="POST"}if(self.length>0){jQuery.ajax({url:url,
}type:type,dataType:"html",data:params}).done(function(responseText){
}response=arguments;self.html(selector?jQuery("<div>").append(jQuery.
}parseHTML(responseText)).find(selector):responseText)}).complete(
}callback&&function(jqXHR,status){self.each(callback,response||[jqXHR.
}responseText,status,jqXHR])})}return
}this};jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","
}ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){
}return
}this.on(type,fn)}});jQuery.extend({active:0,lastModified:{},etag:{},
}ajaxSettings:{url:ajaxLocation,type:"GET",isLocal:rlocalProtocol.test(
}ajaxLocParts[1]),global:true,processData:true,async:true,contentType:"
}application/x-www-form-urlencoded;
}charset=UTF-8",accepts:{"*":allTypes,text:"text/plain",html:"text/html"
},xml:"application/xml, text/xml",json:"application/json,
}text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},
}responseFields:{xml:"responseXML",text:"responseText",json:"
}responseJSON"},converters:{"* text":String,"text html":true,"text
}json":jQuery.parseJSON,"text
}xml":jQuery.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:
}function(target,settings){return
}settings?ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):
}ajaxExtend(jQuery.ajaxSettings,target)},ajaxPrefilter:
}addToPrefiltersOrTransports(prefilters),ajaxTransport:
}addToPrefiltersOrTransports(transports),ajax:function(url,options){if(
}typeof
}url==="object"){options=url;url=undefined}options=options||{};var
}transport,cacheURL,responseHeadersString,responseHeaders,timeoutTimer,
}parts,fireGlobals,i,s=jQuery.ajaxSetup({},options),callbackContext=s.
}context||s,globalEventContext=s.context&&(callbackContext.nodeType||
}callbackContext.jquery)?jQuery(callbackContext):jQuery.event,deferred=
}jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once
}memory"),statusCode=s.statusCode||{},requestHeaders={},
}requestHeadersNames={},state=0,strAbort="canceled",jqXHR={readyState:0,
}getResponseHeader:function(key){var
}match;if(state===2){if(!responseHeaders){responseHeaders={};while(match
}=rheaders.exec(responseHeadersString)){responseHeaders[match[1].
}toLowerCase()]=match[2]}}match=responseHeaders[key.toLowerCase()]}
}return match==null?null:match},getAllResponseHeaders:function(){return
}state===2?responseHeadersString:null},setRequestHeader:function(name,
}value){var
}lname=name.toLowerCase();if(!state){name=requestHeadersNames[lname]=
}requestHeadersNames[lname]||name;requestHeaders[name]=value}return
}this},overrideMimeType:function(type){if(!state){s.mimeType=type}return
}this},statusCode:function(map){var code;if(map){if(state<2){for(code in
}map){statusCode[code]=[statusCode[code],map[code]]}}else{jqXHR.always(
}map[jqXHR.status])}}return this},abort:function(statusText){var
}finalText=statusText||strAbort;if(transport){transport.abort(finalText)
}}done(0,finalText);return
}this}};deferred.promise(jqXHR).complete=completeDeferred.add;jqXHR.
}success=jqXHR.done;jqXHR.error=jqXHR.fail;s.url=((url||s.url||
}ajaxLocation)+"").replace(rhash,"").replace(rprotocol,ajaxLocParts[1]+"
}//");s.type=options.method||options.type||s.method||s.type;s.dataTypes=
}jQuery.trim(s.dataType||"*").toLowerCase().match(core_rnotwhite)||[""];
}if(s.crossDomain==null){parts=rurl.exec(s.url.toLowerCase());s.
}crossDomain=!!(parts&&(parts[1]!==ajaxLocParts[1]||parts[2]!==
}ajaxLocParts[2]||(parts[3]||(parts[1]==="http:"?"80":"443"))!==(
}ajaxLocParts[3]||(ajaxLocParts[1]==="http:"?"80":"443"))))}if(s.data&&s
}.processData&&typeof
}s.data!=="string"){s.data=jQuery.param(s.data,s.traditional)}
}inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);if(state===2)
}{return
}jqXHR}fireGlobals=s.global;if(fireGlobals&&jQuery.active++===0){jQuery.
}event.trigger("ajaxStart")}s.type=s.type.toUpperCase();s.hasContent=!
}rnoContent.test(s.type);cacheURL=s.url;if(!s.hasContent){if(s.data){
}cacheURL=s.url+=(ajax_rquery.test(cacheURL)?"&":"?")+s.data;delete
}s.data}if(s.cache===false){s.url=rts.test(cacheURL)?cacheURL.replace(
}rts,"$1_="+ajax_nonce++):cacheURL+(ajax_rquery.test(cacheURL)?"&":"?")+
}"_="+ajax_nonce++}}if(s.ifModified){if(jQuery.lastModified[cacheURL]){
}jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL
}])}if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",
}jQuery.etag[cacheURL])}}if(s.data&&s.hasContent&&s.contentType!==false|
}|options.contentType){jqXHR.setRequestHeader("Content-Type",s.
}contentType)}jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[
}s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?",
}"+allTypes+"; q=0.01":""):s.accepts["*"]);for(i in
}s.headers){jqXHR.setRequestHeader(i,s.headers[i])}if(s.beforeSend&&(s.
}beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){return
}jqXHR.abort()}strAbort="abort";for(i
}in{success:1,error:1,complete:1}){jqXHR[i](s[i])}transport=
}inspectPrefiltersOrTransports(transports,s,options,jqXHR);if(!transport
}){done(-1,"No
}Transport")}else{jqXHR.readyState=1;if(fireGlobals){globalEventContext.
}trigger("ajaxSend",[jqXHR,s])}if(s.async&&s.timeout>0){timeoutTimer=
}setTimeout(function(){jqXHR.abort("timeout")},s.timeout)}try{state=1;
}transport.send(requestHeaders,done)}catch(e){if(state<2){done(-1,e)}
}else{throw e}}}function
}done(status,nativeStatusText,responses,headers){var
}isSuccess,success,error,response,modified,statusText=nativeStatusText;
}if(state===2){return}state=2;if(timeoutTimer){clearTimeout(timeoutTimer
})}transport=undefined;responseHeadersString=headers||"";jqXHR.
}readyState=status>0?4:0;isSuccess=status>=200&&status<300||status===304
};if(responses){response=ajaxHandleResponses(s,jqXHR,responses)}response
}=ajaxConvert(s,response,jqXHR,isSuccess);if(isSuccess){if(s.ifModified)
}{modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.
}lastModified[cacheURL]=modified}modified=jqXHR.getResponseHeader("etag"
});if(modified){jQuery.etag[cacheURL]=modified}}if(status===204||s.type=
}=="HEAD"){statusText="nocontent"}else
}if(status===304){statusText="notmodified"}else{statusText=response.
}state;success=response.data;error=response.error;isSuccess=!error}}else
}{error=statusText;if(status||!statusText){statusText="error";if(status<
}0){status=0}}}jqXHR.status=status;jqXHR.statusText=(nativeStatusText||
}statusText)+"";if(isSuccess){deferred.resolveWith(callbackContext,[
}success,statusText,jqXHR])}else{deferred.rejectWith(callbackContext,[
}jqXHR,statusText,error])}jqXHR.statusCode(statusCode);statusCode=
}undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"
}ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error])}
}completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(
}fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);if(!-
}-jQuery.active){jQuery.event.trigger("ajaxStop")}}}return
}jqXHR},getJSON:function(url,data,callback){return
}jQuery.get(url,data,callback,"json")},getScript:function(url,callback){
}return
}jQuery.get(url,undefined,callback,"script")}});jQuery.each(["get","post
}"],function(i,method){jQuery[method]=function(url,data,callback,type){
}if(jQuery.isFunction(data)){type=type||callback;callback=data;data=
}undefined}return
}jQuery.ajax({url:url,type:method,dataType:type,data:data,success:
}callback})}});function ajaxHandleResponses(s,jqXHR,responses){var
}ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.
}dataTypes;while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined
}){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type")}}if(ct){for(
}type in
}contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift
}(type);break}}}if(dataTypes[0]in
}responses){finalDataType=dataTypes[0]}else{for(type in
}responses){if(!dataTypes[0]||s.converters[type+"
}"+dataTypes[0]]){finalDataType=type;break}if(!firstDataType){
}firstDataType=type}}finalDataType=finalDataType||firstDataType}if(
}finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(
}finalDataType)}return responses[finalDataType]}}function
}ajaxConvert(s,response,jqXHR,isSuccess){var
}conv2,current,conv,tmp,prev,converters={},dataTypes=s.dataTypes.slice()
};if(dataTypes[1]){for(conv in
}s.converters){converters[conv.toLowerCase()]=s.converters[conv]}}
}current=dataTypes.shift();while(current){if(s.responseFields[current]){
}jqXHR[s.responseFields[current]]=response}if(!prev&&isSuccess&&s.
}dataFilter){response=s.dataFilter(response,s.dataType)}prev=current;
}current=dataTypes.shift();if(current){if(current==="*"){current=prev}
}else if(prev!=="*"&&prev!==current){conv=converters[prev+"
}"+current]||converters["* "+current];if(!conv){for(conv2 in
}converters){tmp=conv2.split("
}");if(tmp[1]===current){conv=converters[prev+" "+tmp[0]]||converters["*
}"+tmp[0]];if(conv){if(conv===true){conv=converters[conv2]}else
}if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1])}
}break}}}}if(conv!==true){if(conv&&s["throws"]){response=conv(response)}
}else{try{response=conv(response)}catch(e){return{state:"parsererror",
}error:conv?e:"No conversion from "+prev+" to
}"+current}}}}}}}return{state:"success",data:response}}jQuery.ajaxSetup(
}{accepts:{script:"text/javascript, application/javascript,
}application/ecmascript,
}application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},
}converters:{"text script":function(text){jQuery.globalEval(text);return
}text}}});jQuery.ajaxPrefilter("script",function(s){if(s.cache===
}undefined){s.cache=false}if(s.crossDomain){s.type="GET"}});jQuery.
}ajaxTransport("script",function(s){if(s.crossDomain){var
}script,callback;return{send:function(_,complete){script=jQuery("<script
}>").prop({async:true,charset:s.scriptCharset,src:s.url}).on("load
}error",callback=function(evt){script.remove();callback=null;if(evt){
}complete(evt.type==="error"?404:200,evt.type)}});document.head.
}appendChild(script[0])},abort:function(){if(callback){callback()}}}}});
}var
}oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;jQuery.ajaxSetup({jsonp:"
}callback",jsonpCallback:function(){var
}callback=oldCallbacks.pop()||jQuery.expando+"_"+ajax_nonce++;this[
}callback]=true;return callback}});jQuery.ajaxPrefilter("json
}jsonp",function(s,originalSettings,jqXHR){var
}callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(
}rjsonp.test(s.url)?"url":typeof
}s.data==="string"&&!(s.contentType||"").indexOf("application/x-www-form
}-urlencoded")&&rjsonp.test(s.data)&&"data");if(jsonProp||s.dataTypes[0]
}==="jsonp"){callbackName=s.jsonpCallback=jQuery.isFunction(s.
}jsonpCallback)?s.jsonpCallback():s.jsonpCallback;if(jsonProp){s[
}jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName)}else
}if(s.jsonp!==false){s.url+=(ajax_rquery.test(s.url)?"&":"?")+s.jsonp+"=
}"+callbackName}s.converters["script
}json"]=function(){if(!responseContainer){jQuery.error(callbackName+"
}was not called")}return
}responseContainer[0]};s.dataTypes[0]="json";overwritten=window[
}callbackName];window[callbackName]=function(){responseContainer=
}arguments};jqXHR.always(function(){window[callbackName]=overwritten;if(
}s[callbackName]){s.jsonpCallback=originalSettings.jsonpCallback;
}oldCallbacks.push(callbackName)}if(responseContainer&&jQuery.isFunction
}(overwritten)){overwritten(responseContainer[0])}responseContainer=
}overwritten=undefined});return"script"}});jQuery.ajaxSettings.xhr=
}function(){try{return new XMLHttpRequest}catch(e){}};var
}xhrSupported=jQuery.ajaxSettings.xhr(),xhrSuccessStatus={0:200,1223:204
}},xhrId=0,xhrCallbacks={};if(window.ActiveXObject){jQuery(window).on("
}unload",function(){for(var key in
}xhrCallbacks){xhrCallbacks[key]()}xhrCallbacks=undefined})}jQuery.
}support.cors=!!xhrSupported&&"withCredentials"in
}xhrSupported;jQuery.support.ajax=xhrSupported=!!xhrSupported;jQuery.
}ajaxTransport(function(options){var
}callback;if(jQuery.support.cors||xhrSupported&&!options.crossDomain){
}return{send:function(headers,complete){var
}i,id,xhr=options.xhr();xhr.open(options.type,options.url,options.async,
}options.username,options.password);if(options.xhrFields){for(i in
}options.xhrFields){xhr[i]=options.xhrFields[i]}}if(options.mimeType&&
}xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType)}if(!
}options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested
}-With"]="XMLHttpRequest"}for(i in
}headers){xhr.setRequestHeader(i,headers[i])}callback=function(type){
}return function(){if(callback){delete
}xhrCallbacks[id];callback=xhr.onload=xhr.onerror=null;if(type==="abort"
}){xhr.abort()}else
}if(type==="error"){complete(xhr.status||404,xhr.statusText)}else{
}complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText,typeof
}xhr.responseText==="string"?{text:xhr.responseText}:undefined,xhr.
}getAllResponseHeaders())}}}};xhr.onload=callback();xhr.onerror=callback
}("error");callback=xhrCallbacks[id=xhrId++]=callback("abort");xhr.send(
}options.hasContent&&options.data||null)},abort:function(){if(callback){
}callback()}}}}});var
}fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rfxnum=new
}RegExp("^(?:([+-])=|)("+core_pnum+")([a-z%]*)$","i"),rrun=/queueHooks$/
},animationPrefilters=[defaultPrefilter],tweeners={"*":[function(prop,
}value){var
}tween=this.createTween(prop,value),target=tween.cur(),parts=rfxnum.exec
}(value),unit=parts&&parts[3]||(jQuery.cssNumber[prop]?"":"px"),start=(
}jQuery.cssNumber[prop]||unit!=="px"&&+target)&&rfxnum.exec(jQuery.css(
}tween.elem,prop)),scale=1,maxIterations=20;if(start&&start[3]!==unit){
}unit=unit||start[3];parts=parts||[];start=+target||1;do{scale=scale||".
}5";start=start/scale;jQuery.style(tween.elem,prop,start+unit)}while(
}scale!==(scale=tween.cur()/target)&&scale!==1&&--maxIterations)}if(
}parts){start=tween.start=+start||+target||0;tween.unit=unit;tween.end=
}parts[1]?start+(parts[1]+1)*parts[2]:+parts[2]}return tween}]};function
}createFxNow(){setTimeout(function(){fxNow=undefined});return
}fxNow=jQuery.now()}function createTween(value,prop,animation){var
}tween,collection=(tweeners[prop]||[]).concat(tweeners["*"]),index=0,
}length=collection.length;for(;index<length;index++){if(tween=collection
}[index].call(animation,prop,value)){return tween}}}function
}Animation(elem,properties,options){var
}result,stopped,index=0,length=animationPrefilters.length,deferred=
}jQuery.Deferred().always(function(){delete
}tick.elem}),tick=function(){if(stopped){return false}var
}currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.
}startTime+animation.duration-currentTime),temp=remaining/animation.
}duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;
}index<length;index++){animation.tweens[index].run(percent)}deferred.
}notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){
}return remaining}else{deferred.resolveWith(elem,[animation]);return
}false}},animation=deferred.promise({elem:elem,props:jQuery.extend({},
}properties),opts:jQuery.extend(true,{specialEasing:{}},options),
}originalProperties:properties,originalOptions:options,startTime:fxNow||
}createFxNow(),duration:options.duration,tweens:[],createTween:function(
}prop,end){var
}tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.
}specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween
});return tween},stop:function(gotoEnd){var
}index=0,length=gotoEnd?animation.tweens.length:0;if(stopped){return
}this}stopped=true;for(;index<length;index++){animation.tweens[index].
}run(1)}if(gotoEnd){deferred.resolveWith(elem,[animation,gotoEnd])}else{
}deferred.rejectWith(elem,[animation,gotoEnd])}return
}this}}),props=animation.props;propFilter(props,animation.opts.
}specialEasing);for(;index<length;index++){result=animationPrefilters[
}index].call(animation,elem,props,animation.opts);if(result){return
}result}}jQuery.map(props,createTween,animation);if(jQuery.isFunction(
}animation.opts.start)){animation.opts.start.call(elem,animation)}jQuery
}.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.
}opts.queue}));return
}animation.progress(animation.opts.progress).done(animation.opts.done,
}animation.opts.complete).fail(animation.opts.fail).always(animation.
}opts.always)}function propFilter(props,specialEasing){var
}index,name,easing,value,hooks;for(index in
}props){name=jQuery.camelCase(index);easing=specialEasing[name];value=
}props[index];if(jQuery.isArray(value)){easing=value[1];value=props[
}index]=value[0]}if(index!==name){props[name]=value;delete
}props[index]}hooks=jQuery.cssHooks[name];if(hooks&&"expand"in
}hooks){value=hooks.expand(value);delete props[name];for(index in
}value){if(!(index in
}props)){props[index]=value[index];specialEasing[index]=easing}}}else{
}specialEasing[name]=easing}}}jQuery.Animation=jQuery.extend(Animation,{
}tweener:function(props,callback){if(jQuery.isFunction(props)){callback=
}props;props=["*"]}else{props=props.split(" ")}var
}prop,index=0,length=props.length;for(;index<length;index++){prop=props[
}index];tweeners[prop]=tweeners[prop]||[];tweeners[prop].unshift(
}callback)}},prefilter:function(callback,prepend){if(prepend){
}animationPrefilters.unshift(callback)}else{animationPrefilters.push(
}callback)}}});function defaultPrefilter(elem,props,opts){var
}prop,value,toggle,tween,hooks,oldfire,anim=this,orig={},style=elem.
}style,hidden=elem.nodeType&&isHidden(elem),dataShow=data_priv.get(elem,
}"fxshow");if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.
}unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.
}fire=function(){if(!hooks.unqueued){oldfire()}}}hooks.unqueued++;anim.
}always(function(){anim.always(function(){hooks.unqueued--;if(!jQuery.
}queue(elem,"fx").length){hooks.empty.fire()}})})}if(elem.nodeType===1&&
}("height"in props||"width"in
}props)){opts.overflow=[style.overflow,style.overflowX,style.overflowY];
}if(jQuery.css(elem,"display")==="inline"&&jQuery.css(elem,"float")==="
}none"){style.display="inline-block"}}if(opts.overflow){style.overflow="
}hidden";anim.always(function(){style.overflow=opts.overflow[0];style.
}overflowX=opts.overflow[1];style.overflowY=opts.overflow[2]})}for(prop
}in props){value=props[prop];if(rfxtypes.exec(value)){delete
}props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"
}show")){if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden
}=true}else{continue}}orig[prop]=dataShow&&dataShow[prop]||jQuery.style(
}elem,prop)}}if(!jQuery.isEmptyObject(orig)){if(dataShow){if("hidden"in
}dataShow){hidden=dataShow.hidden}}else{dataShow=data_priv.access(elem,"
}fxshow",{})}if(toggle){dataShow.hidden=!hidden}if(hidden){jQuery(elem).
}show()}else{anim.done(function(){jQuery(elem).hide()})}anim.done(
}function(){var prop;data_priv.remove(elem,"fxshow");for(prop in
}orig){jQuery.style(elem,prop,orig[prop])}});for(prop in
}orig){tween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in
}dataShow)){dataShow[prop]=tween.start;if(hidden){tween.end=tween.start;
}tween.start=prop==="width"||prop==="height"?1:0}}}}}function
}Tween(elem,options,prop,end,easing){return new
}Tween.prototype.init(elem,options,prop,end,easing)}jQuery.Tween=Tween;
}Tween.prototype={constructor:Tween,init:function(elem,options,prop,end,
}easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||"swing";
}this.options=options;this.start=this.now=this.cur();this.end=end;this.
}unit=unit||(jQuery.cssNumber[prop]?"":"px")},cur:function(){var
}hooks=Tween.propHooks[this.prop];return
}hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this)},
}run:function(percent){var
}eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.
}pos=eased=jQuery.easing[this.easing](percent,this.options.duration*
}percent,0,1,this.options.duration)}else{this.pos=eased=percent}this.now
}=(this.end-this.start)*eased+this.start;if(this.options.step){this.
}options.step.call(this.elem,this.now,this)}if(hooks&&hooks.set){hooks.
}set(this)}else{Tween.propHooks._default.set(this)}return
}this}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={
}_default:{get:function(tween){var
}result;if(tween.elem[tween.prop]!=null&&(!tween.elem.style||tween.elem.
}style[tween.prop]==null)){return
}tween.elem[tween.prop]}result=jQuery.css(tween.elem,tween.prop,"");
}return!result||result==="auto"?0:result},set:function(tween){if(jQuery.
}fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween)}else
}if(tween.elem.style&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=
}null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,
}tween.now+tween.unit)}else{tween.elem[tween.prop]=tween.now}}}};Tween.
}propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function(tween){if(
}tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=
}tween.now}}};jQuery.each(["toggle","show","hide"],function(i,name){var
}cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){
}return speed==null||typeof
}speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,
}true),speed,easing,callback)}});jQuery.fn.extend({fadeTo:function(speed
},to,easing,callback){return
}this.filter(isHidden).css("opacity",0).show().end().animate({opacity:to
}},speed,easing,callback)},animate:function(prop,speed,easing,callback){
}var
}empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,
}callback),doAnimation=function(){var
}anim=Animation(this,jQuery.extend({},prop),optall);if(empty||data_priv.
}get(this,"finish")){anim.stop(true)}};doAnimation.finish=doAnimation;
}return
}empty||optall.queue===false?this.each(doAnimation):this.queue(optall.
}queue,doAnimation)},stop:function(type,clearQueue,gotoEnd){var
}stopQueue=function(hooks){var stop=hooks.stop;delete
}hooks.stop;stop(gotoEnd)};if(typeof
}type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined}if(
}clearQueue&&type!==false){this.queue(type||"fx",[])}return
}this.each(function(){var
}dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,
}data=data_priv.get(this);if(index){if(data[index]&&data[index].stop){
}stopQueue(data[index])}}else{for(index in
}data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(
}data[index])}}}for(index=timers.length;index--;){if(timers[index].elem=
}==this&&(type==null||timers[index].queue===type)){timers[index].anim.
}stop(gotoEnd);dequeue=false;timers.splice(index,1)}}if(dequeue||!
}gotoEnd){jQuery.dequeue(this,type)}})},finish:function(type){if(type!==
}false){type=type||"fx"}return this.each(function(){var
}index,data=data_priv.get(this),queue=data[type+"queue"],hooks=data[type
}+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;data.
}finish=true;jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop
}.call(this,true)}for(index=timers.length;index--;){if(timers[index].
}elem===this&&timers[index].queue===type){timers[index].anim.stop(true);
}timers.splice(index,1)}}for(index=0;index<length;index++){if(queue[
}index]&&queue[index].finish){queue[index].finish.call(this)}}delete
}data.finish})}});function genFx(type,includeWidth){var
}which,attrs={height:type},i=0;includeWidth=includeWidth?1:0;for(;i<4;i+
}=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["
}padding"+which]=type}if(includeWidth){attrs.opacity=attrs.width=type}
}return
}attrs}jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),
}slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"
}hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[
}name]=function(speed,easing,callback){return
}this.animate(props,speed,easing,callback)}});jQuery.speed=function(
}speed,easing,fn){var opt=speed&&typeof
}speed==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||
}jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||
}easing&&!jQuery.isFunction(easing)&&easing};opt.duration=jQuery.fx.off?
}0:typeof opt.duration==="number"?opt.duration:opt.duration in
}jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds.
}_default;if(opt.queue==null||opt.queue===true){opt.queue="fx"}opt.old=
}opt.complete;opt.complete=function(){if(jQuery.isFunction(opt.old)){opt
}.old.call(this)}if(opt.queue){jQuery.dequeue(this,opt.queue)}};return
}opt};jQuery.easing={linear:function(p){return
}p},swing:function(p){return.5-Math.cos(p*Math.PI)/2}};jQuery.timers=[];
}jQuery.fx=Tween.prototype.init;jQuery.fx.tick=function(){var
}timer,timers=jQuery.timers,i=0;fxNow=jQuery.now();for(;i<timers.length;
}i++){timer=timers[i];if(!timer()&&timers[i]===timer){timers.splice(i--,
}1)}}if(!timers.length){jQuery.fx.stop()}fxNow=undefined};jQuery.fx.
}timer=function(timer){if(timer()&&jQuery.timers.push(timer)){jQuery.fx.
}start()}};jQuery.fx.interval=13;jQuery.fx.start=function(){if(!timerId)
}{timerId=setInterval(jQuery.fx.tick,jQuery.fx.interval)}};jQuery.fx.
}stop=function(){clearInterval(timerId);timerId=null};jQuery.fx.speeds={
}slow:600,fast:200,_default:400};jQuery.fx.step={};if(jQuery.expr&&
}jQuery.expr.filters){jQuery.expr.filters.animated=function(elem){return
}jQuery.grep(jQuery.timers,function(fn){return
}elem===fn.elem}).length}}jQuery.fn.offset=function(options){if(
}arguments.length){return
}options===undefined?this:this.each(function(i){jQuery.offset.setOffset(
}this,options,i)})}var
}docElem,win,elem=this[0],box={top:0,left:0},doc=elem&&elem.
}ownerDocument;if(!doc){return}docElem=doc.documentElement;if(!jQuery.
}contains(docElem,elem)){return box}if(typeof
}elem.getBoundingClientRect!==core_strundefined){box=elem.
}getBoundingClientRect()}win=getWindow(doc);return{top:box.top+win.
}pageYOffset-docElem.clientTop,left:box.left+win.pageXOffset-docElem.
}clientLeft}};jQuery.offset={setOffset:function(elem,options,i){var
}curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,
}calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(
}elem),props={};if(position==="static"){elem.style.position="relative"}
}curOffset=curElem.offset();curCSSTop=jQuery.css(elem,"top");curCSSLeft=
}jQuery.css(elem,"left");calculatePosition=(position==="absolute"||
}position==="fixed")&&(curCSSTop+curCSSLeft).indexOf("auto")>-1;if(
}calculatePosition){curPosition=curElem.position();curTop=curPosition.
}top;curLeft=curPosition.left}else{curTop=parseFloat(curCSSTop)||0;
}curLeft=parseFloat(curCSSLeft)||0}if(jQuery.isFunction(options)){
}options=options.call(elem,i,curOffset)}if(options.top!=null){props.top=
}options.top-curOffset.top+curTop}if(options.left!=null){props.left=
}options.left-curOffset.left+curLeft}if("using"in
}options){options.using.call(elem,props)}else{curElem.css(props)}}};
}jQuery.fn.extend({position:function(){if(!this[0]){return}var
}offsetParent,offset,elem=this[0],parentOffset={top:0,left:0};if(jQuery.
}css(elem,"position")==="fixed"){offset=elem.getBoundingClientRect()}
}else{offsetParent=this.offsetParent();offset=this.offset();if(!jQuery.
}nodeName(offsetParent[0],"html")){parentOffset=offsetParent.offset()}
}parentOffset.top+=jQuery.css(offsetParent[0],"borderTopWidth",true);
}parentOffset.left+=jQuery.css(offsetParent[0],"borderLeftWidth",true)}
}return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true
}),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)
}}},offsetParent:function(){return this.map(function(){var
}offsetParent=this.offsetParent||docElem;while(offsetParent&&(!jQuery.
}nodeName(offsetParent,"html")&&jQuery.css(offsetParent,"position")==="
}static")){offsetParent=offsetParent.offsetParent}return
}offsetParent||docElem})}});jQuery.each({scrollLeft:"pageXOffset",
}scrollTop:"pageYOffset"},function(method,prop){var
}top="pageYOffset"===prop;jQuery.fn[method]=function(val){return
}jQuery.access(this,function(elem,method,val){var
}win=getWindow(elem);if(val===undefined){return
}win?win[prop]:elem[method]}if(win){win.scrollTo(!top?val:window.
}pageXOffset,top?val:window.pageYOffset)}else{elem[method]=val}},method,
}val,arguments.length,null)}});function getWindow(elem){return
}jQuery.isWindow(elem)?elem:elem.nodeType===9&&elem.defaultView}jQuery.
}each({Height:"height",Width:"width"},function(name,type){jQuery.each({
}padding:"inner"+name,content:type,"":"outer"+name},function(
}defaultExtra,funcName){jQuery.fn[funcName]=function(margin,value){var
}chainable=arguments.length&&(defaultExtra||typeof
}margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"
}margin":"border");
return jQuery.access(this,function(elem,type,value){var
doc;if(jQuery.isWindow(elem)){return
elem.document.documentElement["client"+name]}if(elem.nodeType===9){doc=
elem.documentElement;return
Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+
name],doc["offset"+name],doc["client"+name])}return
value===undefined?jQuery.css(elem,type,extra):jQuery.style(elem,type,
value,extra)},type,chainable?margin:undefined,chainable,null)}})});
jQuery.fn.size=function(){return
this.length};jQuery.fn.andSelf=jQuery.fn.addBack;if(typeof
module==="object"&&module&&typeof
module.exports==="object"){module.exports=jQuery}else{if(typeof
define==="function"&&define.amd){define("jquery",[],function(){return
jQuery})}}if(typeof window==="object"&&typeof
window.document==="object"){window.jQuery=window.$=jQuery}})(window);+
function($){"use strict";var
Collapse=function(element,options){this.$element=$(element);this.options
=$.extend({},Collapse.DEFAULTS,options);this.transitioning=null;if(this.
options.parent)this.$parent=$(this.options.parent);if(this.options.
toggle)this.toggle()};Collapse.DEFAULTS={toggle:true};Collapse.prototype
.dimension=function(){var
hasWidth=this.$element.hasClass("width");return
hasWidth?"width":"height"};Collapse.prototype.show=function(){if(this.
transitioning||this.$element.hasClass("in"))return;var
startEvent=$.Event("show.bs.collapse");this.$element.trigger(startEvent)
;if(startEvent.isDefaultPrevented())return;var
actives=this.$parent&&this.$parent.find("> .panel >
.in");if(actives&&actives.length){var
hasData=actives.data("bs.collapse");if(hasData&&hasData.transitioning)
return;actives.collapse("hide");hasData||actives.data("bs.collapse",null
)}var
dimension=this.dimension();this.$element.removeClass("collapse").
addClass("collapsing")[dimension](0);this.transitioning=1;var
complete=function(){this.$element.removeClass("collapsing").addClass("in
")[dimension]("auto");this.transitioning=0;this.$element.trigger("shown.
bs.collapse")};if(!$.support.transition)return complete.call(this);var
scrollSize=$.camelCase(["scroll",dimension].join("-"));this.$element.one
($.support.transition.end,$.proxy(complete,this)).emulateTransitionEnd(
350)[dimension](this.$element[0][scrollSize])};Collapse.prototype.hide=
function(){if(this.transitioning||!this.$element.hasClass("in"))return;
var
startEvent=$.Event("hide.bs.collapse");this.$element.trigger(startEvent)
;if(startEvent.isDefaultPrevented())return;var
dimension=this.dimension();this.$element[dimension](this.$element[
dimension]())[0].offsetHeight;this.$element.addClass("collapsing").
removeClass("collapse").removeClass("in");this.transitioning=1;var
complete=function(){this.transitioning=0;this.$element.trigger("hidden.
bs.collapse").removeClass("collapsing").addClass("collapse")};if(!$.
support.transition)return
complete.call(this);this.$element[dimension](0).one($.support.transition
.end,$.proxy(complete,this)).emulateTransitionEnd(350)};Collapse.
prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"
show"]()};var old=$.fn.collapse;$.fn.collapse=function(option){return
this.each(function(){var $this=$(this);var
data=$this.data("bs.collapse");var
options=$.extend({},Collapse.DEFAULTS,$this.data(),typeof
option=="object"&&option);if(!data)$this.data("bs.collapse",data=new
Collapse(this,options));if(typeof
option=="string")data[option]()})};$.fn.collapse.Constructor=Collapse;$.
fn.collapse.noConflict=function(){$.fn.collapse=old;return
this};$(document).on("click.bs.collapse.data-api","[data-toggle=collapse
]",function(e){var $this=$(this),href;var
target=$this.attr("data-target")||e.preventDefault()||(href=$this.attr("
href"))&&href.replace(/.*(?=#[^\s]+$)/,"");var $target=$(target);var
data=$target.data("bs.collapse");var
option=data?"toggle":$this.data();var
parent=$this.attr("data-parent");var
$parent=parent&&$(parent);if(!data||!data.transitioning){if($parent)$
parent.find('[data-toggle=collapse][data-parent="'+parent+'"]').not($
this).addClass("collapsed");$this[$target.hasClass("in")?"addClass":"
removeClass"]("collapsed")}$target.collapse(option)})}(window.jQuery);+
function($){"use strict";var backdrop=".dropdown-backdrop";var
toggle="[data-toggle=dropdown]";var Dropdown=function(element){var
$el=$(element).on("click.bs.dropdown",this.toggle)};Dropdown.prototype.
toggle=function(e){var $this=$(this);if($this.is(".disabled,
:disabled"))return;var $parent=getParent($this);var
isActive=$parent.hasClass("open");clearMenus();if(!isActive){if("
ontouchstart"in
document.documentElement&&!$parent.closest(".navbar-nav").length){$('<
div
class="dropdown-backdrop"/>').insertAfter($(this)).on("click",clearMenus
)}$parent.trigger(e=$.Event("show.bs.dropdown"));if(e.isDefaultPrevented
())return;$parent.toggleClass("open").trigger("shown.bs.dropdown");$this
.focus()}return
false};Dropdown.prototype.keydown=function(e){if(!/(38|40|27)/.test(e.
keyCode))return;var
$this=$(this);e.preventDefault();e.stopPropagation();if($this.is(".
disabled, :disabled"))return;var $parent=getParent($this);var
isActive=$parent.hasClass("open");if(!isActive||isActive&&e.keyCode==27)
{if(e.which==27)$parent.find(toggle).focus();return $this.click()}var
$items=$("[role=menu] li:not(.divider):visible
a",$parent);if(!$items.length)return;var
index=$items.index($items.filter(":focus"));if(e.keyCode==38&&index>0)
index--;if(e.keyCode==40&&index<$items.length-1)index++;if(!~index)index
=0;$items.eq(index).focus()};function
clearMenus(){$(backdrop).remove();$(toggle).each(function(e){var
$parent=getParent($(this));if(!$parent.hasClass("open"))return;$parent.
trigger(e=$.Event("hide.bs.dropdown"));if(e.isDefaultPrevented())return;
$parent.removeClass("open").trigger("hidden.bs.dropdown")})}function
getParent($this){var
selector=$this.attr("data-target");if(!selector){selector=$this.attr("
href");selector=selector&&/#/.test(selector)&&selector.replace(/.*(?=#[^
\s]*$)/,"")}var $parent=selector&&$(selector);return
$parent&&$parent.length?$parent:$this.parent()}var
old=$.fn.dropdown;$.fn.dropdown=function(option){return
this.each(function(){var $this=$(this);var
data=$this.data("dropdown");if(!data)$this.data("dropdown",data=new
Dropdown(this));if(typeof
option=="string")data[option].call($this)})};$.fn.dropdown.Constructor=
Dropdown;$.fn.dropdown.noConflict=function(){$.fn.dropdown=old;return
this};$(document).on("click.bs.dropdown.data-api",clearMenus).on("click.
bs.dropdown.data-api",".dropdown
form",function(e){e.stopPropagation()}).on("click.bs.dropdown.data-api",
toggle,Dropdown.prototype.toggle).on("keydown.bs.dropdown.data-api",
toggle+", [role=menu]",Dropdown.prototype.keydown)}(window.jQuery);var
Handlebars=function(){var __module4__=function(){"use strict";var
__exports__;function
SafeString(string){this.string=string}SafeString.prototype.toString=
function(){return""+this.string};__exports__=SafeString;return
__exports__}();var __module3__=function(__dependency1__){"use
strict";var __exports__={};var SafeString=__dependency1__;var
escape={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":
"&#x60;"};var badChars=/[&<>"'`]/g;var possible=/[&<>"'`]/;function
escapeChar(chr){return escape[chr]||"&amp;"}function
extend(obj,value){for(var key in
value){if(value.hasOwnProperty(key)){obj[key]=value[key]}}}__exports__.
extend=extend;var
toString=Object.prototype.toString;__exports__.toString=toString;var
isFunction=function(value){return typeof
value==="function"};if(isFunction(/x/)){isFunction=function(value){
return typeof value==="function"&&toString.call(value)==="[object
Function]"}}var isFunction;__exports__.isFunction=isFunction;var
isArray=Array.isArray||function(value){return value&&typeof
value==="object"?toString.call(value)==="[object
Array]":false};__exports__.isArray=isArray;function
escapeExpression(string){if(string instanceof SafeString){return
string.toString()}else
if(!string&&string!==0){return""}string=""+string;if(!possible.test(
string)){return string}return
string.replace(badChars,escapeChar)}__exports__.escapeExpression=
escapeExpression;function isEmpty(value){if(!value&&value!==0){return
true}else if(isArray(value)&&value.length===0){return true}else{return
false}}__exports__.isEmpty=isEmpty;return __exports__}(__module4__);var
__module5__=function(){"use strict";var __exports__;var
errorProps=["description","fileName","lineNumber","message","name","
number","stack"];function Exception(){var
tmp=Error.prototype.constructor.apply(this,arguments);for(var
idx=0;idx<errorProps.length;idx++){this[errorProps[idx]]=tmp[errorProps[
idx]]}}Exception.prototype=new Error;__exports__=Exception;return
__exports__}();var
__module2__=function(__dependency1__,__dependency2__){"use strict";var
__exports__={};var Utils=__dependency1__;var
Exception=__dependency2__;var
VERSION="1.1.2";__exports__.VERSION=VERSION;var
COMPILER_REVISION=4;__exports__.COMPILER_REVISION=COMPILER_REVISION;var
REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"==
1.0.0-rc.4",4:">=
1.0.0"};__exports__.REVISION_CHANGES=REVISION_CHANGES;var
isArray=Utils.isArray,isFunction=Utils.isFunction,toString=Utils.
toString,objectType="[object Object]";function
HandlebarsEnvironment(helpers,partials){this.helpers=helpers||{};this.
partials=partials||{};registerDefaultHelpers(this)}__exports__.
HandlebarsEnvironment=HandlebarsEnvironment;HandlebarsEnvironment.
prototype={constructor:HandlebarsEnvironment,logger:logger,log:log,
registerHelper:function(name,fn,inverse){if(toString.call(name)===
objectType){if(inverse||fn){throw new Exception("Arg not supported with
multiple
helpers")}Utils.extend(this.helpers,name)}else{if(inverse){fn.not=
inverse}this.helpers[name]=fn}},registerPartial:function(name,str){if(
toString.call(name)===objectType){Utils.extend(this.partials,name)}else{
this.partials[name]=str}}};function
registerDefaultHelpers(instance){instance.registerHelper("helperMissing"
,function(arg){if(arguments.length===2){return undefined}else{throw new
Error("Missing helper:
'"+arg+"'")}});instance.registerHelper("blockHelperMissing",function(
context,options){var
inverse=options.inverse||function(){},fn=options.fn;if(isFunction(
context)){context=context.call(this)}if(context===true){return
fn(this)}else if(context===false||context==null){return
inverse(this)}else if(isArray(context)){if(context.length>0){return
instance.helpers.each(context,options)}else{return
inverse(this)}}else{return
fn(context)}});instance.registerHelper("each",function(context,options){
var fn=options.fn,inverse=options.inverse;var
i=0,ret="",data;if(isFunction(context)){context=context.call(this)}if(
options.data){data=createFrame(options.data)}if(context&&typeof
context==="object"){if(isArray(context)){for(var
j=context.length;i<j;i++){if(data){data.index=i;data.first=i===0;data.
last=i===context.length-1}ret=ret+fn(context[i],{data:data})}}else{for(
var key in
context){if(context.hasOwnProperty(key)){if(data){data.key=key}ret=ret+
fn(context[key],{data:data});i++}}}}if(i===0){ret=inverse(this)}return
ret});instance.registerHelper("if",function(conditional,options){if(
isFunction(conditional)){conditional=conditional.call(this)}if(!options.
hash.includeZero&&!conditional||Utils.isEmpty(conditional)){return
options.inverse(this)}else{return
options.fn(this)}});instance.registerHelper("unless",function(
conditional,options){return
instance.helpers["if"].call(this,conditional,{fn:options.inverse,inverse
:options.fn,hash:options.hash})});instance.registerHelper("with",
function(context,options){if(isFunction(context)){context=context.call(
this)}if(!Utils.isEmpty(context))return
options.fn(context)});instance.registerHelper("log",function(context,
options){var
level=options.data&&options.data.level!=null?parseInt(options.data.level
,10):1;instance.log(level,context)})}var
logger={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1
,WARN:2,ERROR:3,level:3,log:function(level,obj){if(logger.level<=level){
var method=logger.methodMap[level];if(typeof
console!=="undefined"&&console[method]){console[method].call(console,obj
)}}}};__exports__.logger=logger;function
log(level,obj){logger.log(level,obj)}__exports__.log=log;var
createFrame=function(object){var obj={};Utils.extend(obj,object);return
obj};__exports__.createFrame=createFrame;return
__exports__}(__module3__,__module5__);var
__module6__=function(__dependency1__,__dependency2__,__dependency3__){"
use strict";var __exports__={};var Utils=__dependency1__;var
Exception=__dependency2__;var
COMPILER_REVISION=__dependency3__.COMPILER_REVISION;var
REVISION_CHANGES=__dependency3__.REVISION_CHANGES;function
checkRevision(compilerInfo){var
compilerRevision=compilerInfo&&compilerInfo[0]||1,currentRevision=
COMPILER_REVISION;if(compilerRevision!==currentRevision){if(
compilerRevision<currentRevision){var
runtimeVersions=REVISION_CHANGES[currentRevision],compilerVersions=
REVISION_CHANGES[compilerRevision];throw new Error("Template was
precompiled with an older version of Handlebars than the current
runtime. "+"Please update your precompiler to a newer version
("+runtimeVersions+") or downgrade your runtime to an older version
("+compilerVersions+").")}else{throw new Error("Template was precompiled
with a newer version of Handlebars than the current runtime. "+"Please
update your runtime to a newer version
("+compilerInfo[1]+").")}}}function
template(templateSpec,env){if(!env){throw new Error("No environment
passed to template")}var
invokePartialWrapper;if(env.compile){invokePartialWrapper=function(
partial,name,context,helpers,partials,data){var
result=invokePartial.apply(this,arguments);if(result){return result}var
options={helpers:helpers,partials:partials,data:data};partials[name]=env
.compile(partial,{data:data!==undefined},env);return
partials[name](context,options)}}else{invokePartialWrapper=function(
partial,name){var
result=invokePartial.apply(this,arguments);if(result){return
result}throw new Exception("The partial "+name+" could not be compiled
when running in runtime-only mode")}}var
container={escapeExpression:Utils.escapeExpression,invokePartial:
invokePartialWrapper,programs:[],program:function(i,fn,data){var
programWrapper=this.programs[i];if(data){programWrapper=program(i,fn,
data)}else
if(!programWrapper){programWrapper=this.programs[i]=program(i,fn)}return
programWrapper},merge:function(param,common){var
ret=param||common;if(param&&common&&param!==common){ret={};Utils.extend(
ret,common);Utils.extend(ret,param)}return
ret},programWithDepth:programWithDepth,noop:noop,compilerInfo:null};
return function(context,options){options=options||{};var
namespace=options.partial?options:env,helpers,partials;if(!options.
partial){helpers=options.helpers;partials=options.partials}var
result=templateSpec.call(container,namespace,context,helpers,partials,
options.data);if(!options.partial){checkRevision(container.compilerInfo)
}return result}}__exports__.template=template;function
programWithDepth(i,fn,data){var
args=Array.prototype.slice.call(arguments,3);var
prog=function(context,options){options=options||{};return
fn.apply(this,[context,options.data||data].concat(args))};prog.program=i
;prog.depth=args.length;return
prog}__exports__.programWithDepth=programWithDepth;function
program(i,fn,data){var
prog=function(context,options){options=options||{};return
fn(context,options.data||data)};prog.program=i;prog.depth=0;return
prog}__exports__.program=program;function
invokePartial(partial,name,context,helpers,partials,data){var
options={partial:true,helpers:helpers,partials:partials,data:data};if(
partial===undefined){throw new Exception("The partial "+name+" could not
be found")}else if(partial instanceof Function){return
partial(context,options)}}__exports__.invokePartial=invokePartial;
function noop(){return""}__exports__.noop=noop;return
__exports__}(__module3__,__module5__,__module2__);var
__module1__=function(__dependency1__,__dependency2__,__dependency3__,
__dependency4__,__dependency5__){"use strict";var __exports__;var
base=__dependency1__;var SafeString=__dependency2__;var
Exception=__dependency3__;var Utils=__dependency4__;var
runtime=__dependency5__;var create=function(){var hb=new
base.HandlebarsEnvironment;Utils.extend(hb,base);hb.SafeString=
SafeString;hb.Exception=Exception;hb.Utils=Utils;hb.VM=runtime;hb.
template=function(spec){return runtime.template(spec,hb)};return hb};var
Handlebars=create();Handlebars.create=create;__exports__=Handlebars;
return
__exports__}(__module2__,__module4__,__module5__,__module3__,__module6__
);var __module7__=function(__dependency1__){"use strict";var
__exports__={};var Exception=__dependency1__;function
ProgramNode(statements,inverseStrip,inverse){this.type="program";this.
statements=statements;this.strip={};if(inverse){this.inverse=new
ProgramNode(inverse,inverseStrip);this.strip.right=inverseStrip.left}
else
if(inverseStrip){this.strip.left=inverseStrip.right}}__exports__.
ProgramNode=ProgramNode;function
MustacheNode(rawParams,hash,open,strip){this.type="mustache";this.hash=
hash;this.strip=strip;var
escapeFlag=open[3]||open[2];this.escaped=escapeFlag!=="{"&&escapeFlag!==
"&";var id=this.id=rawParams[0];var
params=this.params=rawParams.slice(1);var
eligibleHelper=this.eligibleHelper=id.isSimple;this.isHelper=
eligibleHelper&&(params.length||hash)}__exports__.MustacheNode=
MustacheNode;function
PartialNode(partialName,context,strip){this.type="partial";this.
partialName=partialName;this.context=context;this.strip=strip}
__exports__.PartialNode=PartialNode;function
BlockNode(mustache,program,inverse,close){if(mustache.id.original!==
close.path.original){throw new Exception(mustache.id.original+" doesn't
match
"+close.path.original)}this.type="block";this.mustache=mustache;this.
program=program;this.inverse=inverse;this.strip={left:mustache.strip.
left,right:close.strip.right};(program||inverse).strip.left=mustache.
strip.right;(inverse||program).strip.right=close.strip.left;if(inverse&&
!program){this.isInverse=true}}__exports__.BlockNode=BlockNode;function
ContentNode(string){this.type="content";this.string=string}__exports__.
ContentNode=ContentNode;function
HashNode(pairs){this.type="hash";this.pairs=pairs}__exports__.HashNode=
HashNode;function IdNode(parts){this.type="ID";var
original="",dig=[],depth=0;for(var i=0,l=parts.length;i<l;i++){var
part=parts[i].part;original+=(parts[i].separator||"")+part;if(part==="..
"||part==="."||part==="this"){if(dig.length>0){throw new
Exception("Invalid path: "+original)}else
if(part===".."){depth++}else{this.isScoped=true}}else{dig.push(part)}}
this.original=original;this.parts=dig;this.string=dig.join(".");this.
depth=depth;this.isSimple=parts.length===1&&!this.isScoped&&depth===0;
this.stringModeValue=this.string}__exports__.IdNode=IdNode;function
PartialNameNode(name){this.type="PARTIAL_NAME";this.name=name.original}
__exports__.PartialNameNode=PartialNameNode;function
DataNode(id){this.type="DATA";this.id=id}__exports__.DataNode=DataNode;
function
StringNode(string){this.type="STRING";this.original=this.string=this.
stringModeValue=string}__exports__.StringNode=StringNode;function
IntegerNode(integer){this.type="INTEGER";this.original=this.integer=
integer;this.stringModeValue=Number(integer)}__exports__.IntegerNode=
IntegerNode;function
BooleanNode(bool){this.type="BOOLEAN";this.bool=bool;this.
stringModeValue=bool==="true"}__exports__.BooleanNode=BooleanNode;
function
CommentNode(comment){this.type="comment";this.comment=comment}
__exports__.CommentNode=CommentNode;return __exports__}(__module5__);var
__module9__=function(){"use strict";var __exports__;var
handlebars=function(){var parser={trace:function
trace(){},yy:{},symbols_:{error:2,root:3,statements:4,EOF:5,program:6,
simpleInverse:7,statement:8,openInverse:9,closeBlock:10,openBlock:11,
mustache:12,partial:13,CONTENT:14,COMMENT:15,OPEN_BLOCK:16,inMustache:17
,CLOSE:18,OPEN_INVERSE:19,OPEN_ENDBLOCK:20,path:21,OPEN:22,
OPEN_UNESCAPED:23,CLOSE_UNESCAPED:24,OPEN_PARTIAL:25,partialName:26,
partial_option0:27,inMustache_repetition0:28,inMustache_option0:29,
dataName:30,param:31,STRING:32,INTEGER:33,BOOLEAN:34,hash:35,
hash_repetition_plus0:36,hashSegment:37,ID:38,EQUALS:39,DATA:40,
pathSegments:41,SEP:42,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",
14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",
20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"CLOSE_UNESCAPED",25
:"OPEN_PARTIAL",32:"STRING",33:"INTEGER",34:"BOOLEAN",38:"ID",39:"EQUALS
",40:"DATA",42:"SEP"},productions_:[0,[3,2],[3,1],[6,2],[6,3],[6,2],[6,1
],[6,1],[6,0],[4,1],[4,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,
3],[10,3],[12,3],[12,3],[13,4],[7,2],[17,3],[17,1],[31,1],[31,1],[31,1],
[31,1],[31,1],[35,1],[37,3],[26,1],[26,1],[26,1],[30,2],[21,1],[41,3],[
41,1],[27,0],[27,1],[28,0],[28,2],[29,0],[29,1],[36,1],[36,2]],
performAction:function
anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$){var
$0=$$.length-1;switch(yystate){case 1:return new
yy.ProgramNode($$[$0-1]);break;case 2:return new
yy.ProgramNode([]);break;case 3:this.$=new
yy.ProgramNode([],$$[$0-1],$$[$0]);break;case 4:this.$=new
yy.ProgramNode($$[$0-2],$$[$0-1],$$[$0]);break;case 5:this.$=new
yy.ProgramNode($$[$0-1],$$[$0],[]);break;case 6:this.$=new
yy.ProgramNode($$[$0]);break;case 7:this.$=new
yy.ProgramNode([]);break;case 8:this.$=new yy.ProgramNode([]);break;case
9:this.$=[$$[$0]];break;case
10:$$[$0-1].push($$[$0]);this.$=$$[$0-1];break;case 11:this.$=new
yy.BlockNode($$[$0-2],$$[$0-1].inverse,$$[$0-1],$$[$0]);break;case
12:this.$=new
yy.BlockNode($$[$0-2],$$[$0-1],$$[$0-1].inverse,$$[$0]);break;case
13:this.$=$$[$0];break;case 14:this.$=$$[$0];break;case 15:this.$=new
yy.ContentNode($$[$0]);break;case 16:this.$=new
yy.CommentNode($$[$0]);break;case 17:this.$=new
yy.MustacheNode($$[$0-1][0],$$[$0-1][1],$$[$0-2],stripFlags($$[$0-2],$$[
$0]));break;case 18:this.$=new
yy.MustacheNode($$[$0-1][0],$$[$0-1][1],$$[$0-2],stripFlags($$[$0-2],$$[
$0]));break;case
19:this.$={path:$$[$0-1],strip:stripFlags($$[$0-2],$$[$0])};break;case
20:this.$=new
yy.MustacheNode($$[$0-1][0],$$[$0-1][1],$$[$0-2],stripFlags($$[$0-2],$$[
$0]));break;case 21:this.$=new
yy.MustacheNode($$[$0-1][0],$$[$0-1][1],$$[$0-2],stripFlags($$[$0-2],$$[
$0]));break;case 22:this.$=new
yy.PartialNode($$[$0-2],$$[$0-1],stripFlags($$[$0-3],$$[$0]));break;case
23:this.$=stripFlags($$[$0-1],$$[$0]);break;case
24:this.$=[[$$[$0-2]].concat($$[$0-1]),$$[$0]];break;case
25:this.$=[[$$[$0]],null];break;case 26:this.$=$$[$0];break;case
27:this.$=new yy.StringNode($$[$0]);break;case 28:this.$=new
yy.IntegerNode($$[$0]);break;case 29:this.$=new
yy.BooleanNode($$[$0]);break;case 30:this.$=$$[$0];break;case
31:this.$=new yy.HashNode($$[$0]);break;case
32:this.$=[$$[$0-2],$$[$0]];break;case 33:this.$=new
yy.PartialNameNode($$[$0]);break;case 34:this.$=new
yy.PartialNameNode(new yy.StringNode($$[$0]));break;case 35:this.$=new
yy.PartialNameNode(new yy.IntegerNode($$[$0]));break;case 36:this.$=new
yy.DataNode($$[$0]);break;case 37:this.$=new
yy.IdNode($$[$0]);break;case
38:$$[$0-2].push({part:$$[$0],separator:$$[$0-1]});this.$=$$[$0-2];break
;case 39:this.$=[{part:$$[$0]}];break;case 42:this.$=[];break;case
43:$$[$0-1].push($$[$0]);break;case 46:this.$=[$$[$0]];break;case
47:$$[$0-1].push($$[$0]);break}},table:[{3:1,4:2,5:[1,3],8:4,9:5,11:6,12
:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1
,15]},{1:[3]},{5:[1,16],8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1
,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[2,2]},{5:[2,9],14:[2,9
],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],25:[2,9]},{4:20,
6:18,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],
20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{4:20,6:22,7:19,8:4,9:5,11:6,12:
7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,
14],25:[1,15]},{5:[2,13],14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,
13],22:[2,13],23:[2,13],25:[2,13]},{5:[2,14],14:[2,14],15:[2,14],16:[2,
14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],25:[2,14]},{5:[2,15],14:[2,
15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],25:[2,15
]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16]
,23:[2,16],25:[2,16]},{17:23,21:24,30:25,38:[1,28],40:[1,27],41:26},{17:
29,21:24,30:25,38:[1,28],40:[1,27],41:26},{17:30,21:24,30:25,38:[1,28],
40:[1,27],41:26},{17:31,21:24,30:25,38:[1,28],40:[1,27],41:26},{21:33,26
:32,32:[1,34],33:[1,35],38:[1,28],41:26},{1:[2,1]},{5:[2,10],14:[2,10],
15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],25:[2,10]},{
10:36,20:[1,37]},{4:38,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,
12],19:[1,11],20:[2,7],22:[1,13],23:[1,14],25:[1,15]},{7:39,8:17,9:5,11:
6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,6],22:[1,13],23
:[1,14],25:[1,15]},{17:23,18:[1,40],21:24,30:25,38:[1,28],40:[1,27],41:
26},{10:41,20:[1,37]},{18:[1,42]},{18:[2,42],24:[2,42],28:43,32:[2,42],
33:[2,42],34:[2,42],38:[2,42],40:[2,42]},{18:[2,25],24:[2,25]},{18:[2,37
],24:[2,37],32:[2,37],33:[2,37],34:[2,37],38:[2,37],40:[2,37],42:[1,44]}
,{21:45,38:[1,28],41:26},{18:[2,39],24:[2,39],32:[2,39],33:[2,39],34:[2,
39],38:[2,39],40:[2,39],42:[2,39]},{18:[1,46]},{18:[1,47]},{24:[1,48]},{
18:[2,40],21:50,27:49,38:[1,28],41:26},{18:[2,33],38:[2,33]},{18:[2,34],
38:[2,34]},{18:[2,35],38:[2,35]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11]
,19:[2,11],20:[2,11],22:[2,11],23:[2,11],25:[2,11]},{21:51,38:[1,28],41:
26},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[
2,3],22:[1,13],23:[1,14],25:[1,15]},{4:52,8:4,9:5,11:6,12:7,13:8,14:[1,9
],15:[1,10],16:[1,12],19:[1,11],20:[2,5],22:[1,13],23:[1,14],25:[1,15]},
{14:[2,23],15:[2,23],16:[2,23],19:[2,23],20:[2,23],22:[2,23],23:[2,23],
25:[2,23]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],
22:[2,12],23:[2,12],25:[2,12]},{14:[2,18],15:[2,18],16:[2,18],19:[2,18],
20:[2,18],22:[2,18],23:[2,18],25:[2,18]},{18:[2,44],21:56,24:[2,44],29:
53,30:60,31:54,32:[1,57],33:[1,58],34:[1,59],35:55,36:61,37:62,38:[1,63]
,40:[1,27],41:26},{38:[1,64]},{18:[2,36],24:[2,36],32:[2,36],33:[2,36],
34:[2,36],38:[2,36],40:[2,36]},{14:[2,17],15:[2,17],16:[2,17],19:[2,17],
20:[2,17],22:[2,17],23:[2,17],25:[2,17]},{5:[2,20],14:[2,20],15:[2,20],
16:[2,20],19:[2,20],20:[2,20],22:[2,20],23:[2,20],25:[2,20]},{5:[2,21],
14:[2,21],15:[2,21],16:[2,21],19:[2,21],20:[2,21],22:[2,21],23:[2,21],25
:[2,21]},{18:[1,65]},{18:[2,41]},{18:[1,66]},{8:17,9:5,11:6,12:7,13:8,14
:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],25:[1,
15]},{18:[2,24],24:[2,24]},{18:[2,43],24:[2,43],32:[2,43],33:[2,43],34:[
2,43],38:[2,43],40:[2,43]},{18:[2,45],24:[2,45]},{18:[2,26],24:[2,26],32
:[2,26],33:[2,26],34:[2,26],38:[2,26],40:[2,26]},{18:[2,27],24:[2,27],32
:[2,27],33:[2,27],34:[2,27],38:[2,27],40:[2,27]},{18:[2,28],24:[2,28],32
:[2,28],33:[2,28],34:[2,28],38:[2,28],40:[2,28]},{18:[2,29],24:[2,29],32
:[2,29],33:[2,29],34:[2,29],38:[2,29],40:[2,29]},{18:[2,30],24:[2,30],32
:[2,30],33:[2,30],34:[2,30],38:[2,30],40:[2,30]},{18:[2,31],24:[2,31],37
:67,38:[1,68]},{18:[2,46],24:[2,46],38:[2,46]},{18:[2,39],24:[2,39],32:[
2,39],33:[2,39],34:[2,39],38:[2,39],39:[1,69],40:[2,39],42:[2,39]},{18:[
2,38],24:[2,38],32:[2,38],33:[2,38],34:[2,38],38:[2,38],40:[2,38],42:[2,
38]},{5:[2,22],14:[2,22],15:[2,22],16:[2,22],19:[2,22],20:[2,22],22:[2,
22],23:[2,22],25:[2,22]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,
19],20:[2,19],22:[2,19],23:[2,19],25:[2,19]},{18:[2,47],24:[2,47],38:[2,
47]},{39:[1,69]},{21:56,30:60,31:70,32:[1,57],33:[1,58],34:[1,59],38:[1,
28],40:[1,27],41:26},{18:[2,32],24:[2,32],38:[2,32]}],defaultActions:{3:
[2,2],16:[2,1],50:[2,41]},parseError:function parseError(str,hash){throw
new Error(str)},parse:function parse(input){var
self=this,stack=[0],vstack=[null],lstack=[],table=this.table,yytext="",
yylineno=0,yyleng=0,recovering=0,TERROR=2,EOF=1;this.lexer.setInput(
input);this.lexer.yy=this.yy;this.yy.lexer=this.lexer;this.yy.parser=
this;if(typeof this.lexer.yylloc=="undefined")this.lexer.yylloc={};var
yyloc=this.lexer.yylloc;lstack.push(yyloc);var
ranges=this.lexer.options&&this.lexer.options.ranges;if(typeof
this.yy.parseError==="function")this.parseError=this.yy.parseError;
function
popStack(n){stack.length=stack.length-2*n;vstack.length=vstack.length-n;
lstack.length=lstack.length-n}function lex(){var
token;token=self.lexer.lex()||1;if(typeof
token!=="number"){token=self.symbols_[token]||token}return token}var
symbol,preErrorSymbol,state,action,a,r,yyval={},p,len,newState,expected;
while(true){state=stack[stack.length-1];if(this.defaultActions[state]){
action=this.defaultActions[state]}else{if(symbol===null||typeof
symbol=="undefined"){symbol=lex()}action=table[state]&&table[state][
symbol]}if(typeof action==="undefined"||!action.length||!action[0]){var
errStr="";if(!recovering){expected=[];for(p in
table[state])if(this.terminals_[p]&&p>2){expected.push("'"+this.
terminals_[p]+"'")}if(this.lexer.showPosition){errStr="Parse error on
line "+(yylineno+1)+":\n"+this.lexer.showPosition()+"\nExpecting
"+expected.join(", ")+", got
'"+(this.terminals_[symbol]||symbol)+"'"}else{errStr="Parse error on
line "+(yylineno+1)+": Unexpected "+(symbol==1?"end of
input":"'"+(this.terminals_[symbol]||symbol)+"'")}this.parseError(errStr
,{text:this.lexer.match,token:this.terminals_[symbol]||symbol,line:this.
lexer.yylineno,loc:yyloc,expected:expected})}}if(action[0]instanceof
Array&&action.length>1){throw new Error("Parse Error: multiple actions
possible at state: "+state+", token: "+symbol)}switch(action[0]){case
1:stack.push(symbol);vstack.push(this.lexer.yytext);lstack.push(this.
lexer.yylloc);stack.push(action[1]);symbol=null;if(!preErrorSymbol){
yyleng=this.lexer.yyleng;yytext=this.lexer.yytext;yylineno=this.lexer.
yylineno;yyloc=this.lexer.yylloc;if(recovering>0)recovering--}else{
symbol=preErrorSymbol;preErrorSymbol=null}break;case
2:len=this.productions_[action[1]][1];yyval.$=vstack[vstack.length-len];
yyval._$={first_line:lstack[lstack.length-(len||1)].first_line,last_line
:lstack[lstack.length-1].last_line,first_column:lstack[lstack.length-(
len||1)].first_column,last_column:lstack[lstack.length-1].last_column};
if(ranges){yyval._$.range=[lstack[lstack.length-(len||1)].range[0],
lstack[lstack.length-1].range[1]]}r=this.performAction.call(yyval,yytext
,yyleng,yylineno,this.yy,action[1],vstack,lstack);if(typeof
r!=="undefined"){return
r}if(len){stack=stack.slice(0,-1*len*2);vstack=vstack.slice(0,-1*len);
lstack=lstack.slice(0,-1*len)}stack.push(this.productions_[action[1]][0]
);vstack.push(yyval.$);lstack.push(yyval._$);newState=table[stack[stack.
length-2]][stack[stack.length-1]];stack.push(newState);break;case
3:return true}}return true}};function
stripFlags(open,close){return{left:open[2]==="~",right:close[0]==="~"||
close[1]==="~"}}var lexer=function(){var
lexer={EOF:1,parseError:function
parseError(str,hash){if(this.yy.parser){this.yy.parser.parseError(str,
hash)}else{throw new
Error(str)}},setInput:function(input){this._input=input;this._more=this.
_less=this.done=false;this.yylineno=this.yyleng=0;this.yytext=this.
matched=this.match="";this.conditionStack=["INITIAL"];this.yylloc={
first_line:1,first_column:0,last_line:1,last_column:0};if(this.options.
ranges)this.yylloc.range=[0,0];this.offset=0;return
this},input:function(){var
ch=this._input[0];this.yytext+=ch;this.yyleng++;this.offset++;this.match
+=ch;this.matched+=ch;var
lines=ch.match(/(?:\r\n?|\n).*/g);if(lines){this.yylineno++;this.yylloc.
last_line++}else{this.yylloc.last_column++}if(this.options.ranges)this.
yylloc.range[1]++;this._input=this._input.slice(1);return
ch},unput:function(ch){var len=ch.length;var
lines=ch.split(/(?:\r\n?|\n)/g);this._input=ch+this._input;this.yytext=
this.yytext.substr(0,this.yytext.length-len-1);this.offset-=len;var
oldLines=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(
0,this.match.length-1);this.matched=this.matched.substr(0,this.matched.
length-1);if(lines.length-1)this.yylineno-=lines.length-1;var
r=this.yylloc.range;this.yylloc={first_line:this.yylloc.first_line,
last_line:this.yylineno+1,first_column:this.yylloc.first_column,
last_column:lines?(lines.length===oldLines.length?this.yylloc.
first_column:0)+oldLines[oldLines.length-lines.length].length-lines[0].
length:this.yylloc.first_column-len};
if(this.options.ranges){this.yylloc.range=[r[0],r[0]+this.yyleng-len]}
return this},more:function(){this._more=true;return
this},less:function(n){this.unput(this.match.slice(n))},pastInput:
function(){var
past=this.matched.substr(0,this.matched.length-this.match.length);return
(past.length>20?"...":"")+past.substr(-20).replace(/\n/g,"")},
upcomingInput:function(){var
next=this.match;if(next.length<20){next+=this._input.substr(0,20-next.
length)}return(next.substr(0,20)+(next.length>20?"...":"")).replace(/\n/
g,"")},showPosition:function(){var pre=this.pastInput();var c=new
Array(pre.length+1).join("-");return
pre+this.upcomingInput()+"\n"+c+"^"},next:function(){if(this.done){
return this.EOF}if(!this._input)this.done=true;var
token,match,tempMatch,index,col,lines;if(!this._more){this.yytext="";
this.match=""}var rules=this._currentRules();for(var
i=0;i<rules.length;i++){tempMatch=this._input.match(this.rules[rules[i]]
);if(tempMatch&&(!match||tempMatch[0].length>match[0].length)){match=
tempMatch;index=i;if(!this.options.flex)break}}if(match){lines=match[0].
match(/(?:\r\n?|\n).*/g);if(lines)this.yylineno+=lines.length;this.
yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,
first_column:this.yylloc.last_column,last_column:lines?lines[lines.
length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length:this.
yylloc.last_column+match[0].length};this.yytext+=match[0];this.match+=
match[0];this.matches=match;this.yyleng=this.yytext.length;if(this.
options.ranges){this.yylloc.range=[this.offset,this.offset+=this.yyleng]
}this._more=false;this._input=this._input.slice(match[0].length);this.
matched+=match[0];token=this.performAction.call(this,this.yy,this,rules[
index],this.conditionStack[this.conditionStack.length-1]);if(this.done&&
this._input)this.done=false;if(token)return token;else
return}if(this._input===""){return this.EOF}else{return
this.parseError("Lexical error on line "+(this.yylineno+1)+".
Unrecognized
text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}},
lex:function lex(){var r=this.next();if(typeof r!=="undefined"){return
r}else{return this.lex()}},begin:function
begin(condition){this.conditionStack.push(condition)},popState:function
popState(){return this.conditionStack.pop()},_currentRules:function
_currentRules(){return
this.conditions[this.conditionStack[this.conditionStack.length-1]].rules
},topState:function(){return
this.conditionStack[this.conditionStack.length-2]},pushState:function
begin(condition){this.begin(condition)}};lexer.options={};lexer.
performAction=function
anonymous(yy,yy_,$avoiding_name_collisions,YY_START){function
strip(start,end){return
yy_.yytext=yy_.yytext.substr(start,yy_.yyleng-end)}var
YYSTATE=YY_START;switch($avoiding_name_collisions){case
0:if(yy_.yytext.slice(-2)==="\\\\"){strip(0,1);this.begin("mu")}else
if(yy_.yytext.slice(-1)==="\\"){strip(0,1);this.begin("emu")}else{this.
begin("mu")}if(yy_.yytext)return 14;break;case 1:return 14;break;case
2:if(yy_.yytext.slice(-1)!=="\\")this.popState();if(yy_.yytext.slice(-1)
==="\\")strip(0,1);return 14;break;case
3:strip(0,4);this.popState();return 15;break;case 4:return 25;break;case
5:return 16;break;case 6:return 20;break;case 7:return 19;break;case
8:return 19;break;case 9:return 23;break;case 10:return 22;break;case
11:this.popState();this.begin("com");break;case
12:strip(3,5);this.popState();return 15;break;case 13:return
22;break;case 14:return 39;break;case 15:return 38;break;case 16:return
38;break;case 17:return 42;break;case 18:break;case
19:this.popState();return 24;break;case 20:this.popState();return
18;break;case 21:yy_.yytext=strip(1,2).replace(/\\"/g,'"');return
32;break;case 22:yy_.yytext=strip(1,2).replace(/\\'/g,"'");return
32;break;case 23:return 40;break;case 24:return 34;break;case 25:return
34;break;case 26:return 33;break;case 27:return 38;break;case
28:yy_.yytext=strip(1,2);return 38;break;case
29:return"INVALID";break;case 30:return
5;break}};lexer.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[
^\x00]{2,}?(?=(\{\{|$)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{
\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/
^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})
/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.])))/,/^(?:[\
/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")
/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s])))/,/^(?:false(?=(
[~}\s])))/,/^(?:-?[0-9]+(?=([~}\s])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-
~]+(?=([=~}\s\/.]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/];lexer.
conditions={mu:{rules:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,
22,23,24,25,26,27,28,29,30],inclusive:false},emu:{rules:[2],inclusive:
false},com:{rules:[3],inclusive:false},INITIAL:{rules:[0,1,30],inclusive
:true}};return lexer}();parser.lexer=lexer;function
Parser(){this.yy={}}Parser.prototype=parser;parser.Parser=Parser;return
new Parser}();__exports__=handlebars;return __exports__}();var
__module8__=function(__dependency1__,__dependency2__){"use strict";var
__exports__={};var parser=__dependency1__;var
AST=__dependency2__;__exports__.parser=parser;function
parse(input){if(input.constructor===AST.ProgramNode){return
input}parser.yy=AST;return
parser.parse(input)}__exports__.parse=parse;return
__exports__}(__module9__,__module7__);var
__module11__=function(__dependency1__){"use strict";var __exports__;var
COMPILER_REVISION=__dependency1__.COMPILER_REVISION;var
REVISION_CHANGES=__dependency1__.REVISION_CHANGES;var
log=__dependency1__.log;function
Literal(value){this.value=value}function
JavaScriptCompiler(){}JavaScriptCompiler.prototype={nameLookup:function(
parent,name){var
wrap,ret;if(parent.indexOf("depth")===0){wrap=true}if(/^[0-9]+$/.test(
name)){ret=parent+"["+name+"]"}else
if(JavaScriptCompiler.isValidJavaScriptVariableName(name)){ret=parent+".
"+name}else{ret=parent+"['"+name+"']"}if(wrap){return"("+parent+" &&
"+ret+")"}else{return
ret}},appendToBuffer:function(string){if(this.environment.isSimple){
return"return
"+string+";"}else{return{appendToBuffer:true,content:string,toString:
function(){return"buffer +=
"+string+";"}}}},initializeBuffer:function(){return
this.quotedString("")},namespace:"Handlebars",compile:function(
environment,options,context,asObject){this.environment=environment;this.
options=options||{};log("debug",this.environment.disassemble()+"\n\n");
this.name=this.environment.name;this.isChild=!!context;this.context=
context||{programs:[],environments:[],aliases:{}};this.preamble();this.
stackSlot=0;this.stackVars=[];this.registers={list:[]};this.compileStack
=[];this.inlineStack=[];this.compileChildren(environment,options);var
opcodes=environment.opcodes,opcode;this.i=0;for(var
l=opcodes.length;this.i<l;this.i++){opcode=opcodes[this.i];if(opcode.
opcode==="DECLARE"){this[opcode.name]=opcode.value}else{this[opcode.
opcode].apply(this,opcode.args)}if(opcode.opcode!==this.stripNext){this.
stripNext=false}}this.pushSource("");return
this.createFunctionContext(asObject)},preamble:function(){var
out=[];if(!this.isChild){var namespace=this.namespace;var
copies="helpers = this.merge(helpers,
"+namespace+".helpers);";if(this.environment.usePartial){copies=copies+"
partials = this.merge(partials,
"+namespace+".partials);"}if(this.options.data){copies=copies+" data =
data ||
{};"}out.push(copies)}else{out.push("")}if(!this.environment.isSimple){
out.push(", buffer =
"+this.initializeBuffer())}else{out.push("")}this.lastContext=0;this.
source=out},createFunctionContext:function(asObject){var
locals=this.stackVars.concat(this.registers.list);if(locals.length>0){
this.source[1]=this.source[1]+", "+locals.join(",
")}if(!this.isChild){for(var alias in
this.context.aliases){if(this.context.aliases.hasOwnProperty(alias)){
this.source[1]=this.source[1]+",
"+alias+"="+this.context.aliases[alias]}}}if(this.source[1]){this.source
[1]="var
"+this.source[1].substring(2)+";"}if(!this.isChild){this.source[1]+="\n"
+this.context.programs.join("\n")+"\n"}if(!this.environment.isSimple){
this.pushSource("return buffer;")}var
params=this.isChild?["depth0","data"]:["Handlebars","depth0","helpers","
partials","data"];for(var
i=0,l=this.environment.depths.list.length;i<l;i++){params.push("depth"+
this.environment.depths.list[i])}var
source=this.mergeSource();if(!this.isChild){var
revision=COMPILER_REVISION,versions=REVISION_CHANGES[revision];source="
this.compilerInfo =
["+revision+",'"+versions+"'];\n"+source}if(asObject){params.push(source
);return Function.apply(this,params)}else{var functionSource="function
"+(this.name||"")+"("+params.join(",")+") {\n 
"+source+"}";log("debug",functionSource+"\n\n");return
functionSource}},mergeSource:function(){var source="",buffer;for(var
i=0,len=this.source.length;i<len;i++){var
line=this.source[i];if(line.appendToBuffer){if(buffer){buffer=buffer+"\n
   +
"+line.content}else{buffer=line.content}}else{if(buffer){source+="buffer
+= "+buffer+";\n  ";buffer=undefined}source+=line+"\n  "}}return
source},blockValue:function(){this.context.aliases.blockHelperMissing="
helpers.blockHelperMissing";var
params=["depth0"];this.setupParams(0,params);this.replaceStack(function(
current){params.splice(1,0,current);return"blockHelperMissing.call("+
params.join(",
")+")"})},ambiguousBlockValue:function(){this.context.aliases.
blockHelperMissing="helpers.blockHelperMissing";var
params=["depth0"];this.setupParams(0,params);var
current=this.topStack();params.splice(1,0,current);params[params.length-
1]="options";this.pushSource("if (!"+this.lastHelper+") { "+current+" =
blockHelperMissing.call("+params.join(", ")+");
}")},appendContent:function(content){if(this.pendingContent){content=
this.pendingContent+content}if(this.stripNext){content=content.replace(/
^\s+/,"")}this.pendingContent=content},strip:function(){if(this.
pendingContent){this.pendingContent=this.pendingContent.replace(/\s+$/,"
")}this.stripNext="strip"},append:function(){this.flushInline();var
local=this.popStack();this.pushSource("if("+local+" || "+local+" === 0)
{ "+this.appendToBuffer(local)+"
}");if(this.environment.isSimple){this.pushSource("else {
"+this.appendToBuffer("''")+"
}")}},appendEscaped:function(){this.context.aliases.escapeExpression="
this.escapeExpression";this.pushSource(this.appendToBuffer("
escapeExpression("+this.popStack()+")"))},getContext:function(depth){if(
this.lastContext!==depth){this.lastContext=depth}},lookupOnContext:
function(name){this.push(this.nameLookup("depth"+this.lastContext,name,"
context"))},pushContext:function(){this.pushStackLiteral("depth"+this.
lastContext)},resolvePossibleLambda:function(){this.context.aliases.
functionType='"function"';this.replaceStack(function(current){return"
typeof "+current+" === functionType ? "+current+".apply(depth0) :
"+current})},lookup:function(name){this.replaceStack(function(current){
return current+" == null || "+current+" === false ? "+current+" :
"+this.nameLookup(current,name,"context")})},lookupData:function(){this.
push("data")},pushStringParam:function(string,type){this.
pushStackLiteral("depth"+this.lastContext);this.pushString(type);if(
typeof
string==="string"){this.pushString(string)}else{this.pushStackLiteral(
string)}},emptyHash:function(){this.pushStackLiteral("{}");if(this.
options.stringParams){this.register("hashTypes","{}");this.register("
hashContexts","{}")}},pushHash:function(){this.hash={values:[],types:[],
contexts:[]}},popHash:function(){var
hash=this.hash;this.hash=undefined;if(this.options.stringParams){this.
register("hashContexts","{"+hash.contexts.join(",")+"}");this.register("
hashTypes","{"+hash.types.join(",")+"}")}this.push("{\n   
"+hash.values.join(",\n    ")+"\n 
}")},pushString:function(string){this.pushStackLiteral(this.quotedString
(string))},push:function(expr){this.inlineStack.push(expr);return
expr},pushLiteral:function(value){this.pushStackLiteral(value)},
pushProgram:function(guid){if(guid!=null){this.pushStackLiteral(this.
programExpression(guid))}else{this.pushStackLiteral(null)}},invokeHelper
:function(paramSize,name){this.context.aliases.helperMissing="helpers.
helperMissing";var
helper=this.lastHelper=this.setupHelper(paramSize,name,true);var
nonHelper=this.nameLookup("depth"+this.lastContext,name,"context");this.
push(helper.name+" ||
"+nonHelper);this.replaceStack(function(name){return name+" ?
"+name+".call("+helper.callParams+") "+":
helperMissing.call("+helper.helperMissingParams+")"})},invokeKnownHelper
:function(paramSize,name){var
helper=this.setupHelper(paramSize,name);this.push(helper.name+".call("+
helper.callParams+")")},invokeAmbiguous:function(name,helperCall){this.
context.aliases.functionType='"function"';this.pushStackLiteral("{}");
var helper=this.setupHelper(0,name,helperCall);var
helperName=this.lastHelper=this.nameLookup("helpers",name,"helper");var
nonHelper=this.nameLookup("depth"+this.lastContext,name,"context");var
nextStack=this.nextStack();this.pushSource("if ("+nextStack+" =
"+helperName+") { "+nextStack+" =
"+nextStack+".call("+helper.callParams+"); }");this.pushSource("else {
"+nextStack+" = "+nonHelper+"; "+nextStack+" = typeof "+nextStack+" ===
functionType ? "+nextStack+".call("+helper.callParams+") :
"+nextStack+"; }")},invokePartial:function(name){var
params=[this.nameLookup("partials",name,"partial"),"'"+name+"'",this.
popStack(),"helpers","partials"];if(this.options.data){params.push("data
")}this.context.aliases.self="this";this.push("self.invokePartial("+
params.join(", ")+")")},assignToHash:function(key){var
value=this.popStack(),context,type;if(this.options.stringParams){type=
this.popStack();context=this.popStack()}var
hash=this.hash;if(context){hash.contexts.push("'"+key+"':
"+context)}if(type){hash.types.push("'"+key+"':
"+type)}hash.values.push("'"+key+"':
("+value+")")},compiler:JavaScriptCompiler,compileChildren:function(
environment,options){var
children=environment.children,child,compiler;for(var
i=0,l=children.length;i<l;i++){child=children[i];compiler=new
this.compiler;var
index=this.matchExistingProgram(child);if(index==null){this.context.
programs.push("");index=this.context.programs.length;child.index=index;
child.name="program"+index;this.context.programs[index]=compiler.compile
(child,options,this.context);this.context.environments[index]=child}else
{child.index=index;child.name="program"+index}}},matchExistingProgram:
function(child){for(var
i=0,len=this.context.environments.length;i<len;i++){var
environment=this.context.environments[i];if(environment&&environment.
equals(child)){return
i}}},programExpression:function(guid){this.context.aliases.self="this";
if(guid==null){return"self.noop"}var
child=this.environment.children[guid],depths=child.depths.list,depth;var
programParams=[child.index,child.name,"data"];for(var
i=0,l=depths.length;i<l;i++){depth=depths[i];if(depth===1){programParams
.push("depth0")}else{programParams.push("depth"+(depth-1))}}return(
depths.length===0?"self.program(":"self.programWithDepth(")+
programParams.join(",
")+")"},register:function(name,val){this.useRegister(name);this.
pushSource(name+" =
"+val+";")},useRegister:function(name){if(!this.registers[name]){this.
registers[name]=true;this.registers.list.push(name)}},pushStackLiteral:
function(item){return this.push(new
Literal(item))},pushSource:function(source){if(this.pendingContent){this
.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))
);this.pendingContent=undefined}if(source){this.source.push(source)}},
pushStack:function(item){this.flushInline();var
stack=this.incrStack();if(item){this.pushSource(stack+" =
"+item+";")}this.compileStack.push(stack);return
stack},replaceStack:function(callback){var
prefix="",inline=this.isInline(),stack;if(inline){var
top=this.popStack(true);if(top instanceof
Literal){stack=top.value}else{var
name=this.stackSlot?this.topStackName():this.incrStack();prefix="("+this
.push(name)+" =
"+top+"),";stack=this.topStack()}}else{stack=this.topStack()}var
item=callback.call(this,stack);if(inline){if(this.inlineStack.length||
this.compileStack.length){this.popStack()}this.push("("+prefix+item+")")
}else{if(!/^stack/.test(stack)){stack=this.nextStack()}this.pushSource(
stack+" = ("+prefix+item+");")}return stack},nextStack:function(){return
this.pushStack()},incrStack:function(){this.stackSlot++;if(this.
stackSlot>this.stackVars.length){this.stackVars.push("stack"+this.
stackSlot)}return
this.topStackName()},topStackName:function(){return"stack"+this.
stackSlot},flushInline:function(){var
inlineStack=this.inlineStack;if(inlineStack.length){this.inlineStack=[];
for(var i=0,len=inlineStack.length;i<len;i++){var
entry=inlineStack[i];if(entry instanceof
Literal){this.compileStack.push(entry)}else{this.pushStack(entry)}}}},
isInline:function(){return
this.inlineStack.length},popStack:function(wrapped){var
inline=this.isInline(),item=(inline?this.inlineStack:this.compileStack).
pop();if(!wrapped&&item instanceof Literal){return
item.value}else{if(!inline){this.stackSlot--}return
item}},topStack:function(wrapped){var
stack=this.isInline()?this.inlineStack:this.compileStack,item=stack[
stack.length-1];if(!wrapped&&item instanceof Literal){return
item.value}else{return
item}},quotedString:function(str){return'"'+str.replace(/\\/g,"\\\\").
replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\
u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},setupHelper:
function(paramSize,name,missingParams){var
params=[];this.setupParams(paramSize,params,missingParams);var
foundHelper=this.nameLookup("helpers",name,"helper");return{params:
params,name:foundHelper,callParams:["depth0"].concat(params).join(",
"),helperMissingParams:missingParams&&["depth0",this.quotedString(name)]
.concat(params).join(",
")}},setupParams:function(paramSize,params,useRegister){var
options=[],contexts=[],types=[],param,inverse,program;options.push("hash
:"+this.popStack());inverse=this.popStack();program=this.popStack();if(
program||inverse){if(!program){this.context.aliases.self="this";program=
"self.noop"}if(!inverse){this.context.aliases.self="this";inverse="self.
noop"}options.push("inverse:"+inverse);options.push("fn:"+program)}for(
var
i=0;i<paramSize;i++){param=this.popStack();params.push(param);if(this.
options.stringParams){types.push(this.popStack());contexts.push(this.
popStack())}}if(this.options.stringParams){options.push("contexts:["+
contexts.join(",")+"]");options.push("types:["+types.join(",")+"]");
options.push("hashContexts:hashContexts");options.push("hashTypes:
hashTypes")}if(this.options.data){options.push("data:data")}options="{"+
options.join(",")+"}";if(useRegister){this.register("options",options);
params.push("options")}else{params.push(options)}return params.join(",
")}};var reservedWords=("break else new var"+" case finally return
void"+" catch for switch while"+" continue function this with"+" default
if throw"+" delete in try"+" do instanceof typeof"+" abstract enum int
short"+" boolean export interface static"+" byte extends long super"+"
char final native synchronized"+" class float package throws"+" const
goto private transient"+" debugger implements protected volatile"+"
double import public let yield").split(" ");var
compilerWords=JavaScriptCompiler.RESERVED_WORDS={};for(var
i=0,l=reservedWords.length;i<l;i++){compilerWords[reservedWords[i]]=true
}JavaScriptCompiler.isValidJavaScriptVariableName=function(name){if(!
JavaScriptCompiler.RESERVED_WORDS[name]&&/^[a-zA-Z_$][0-9a-zA-Z_$]+$/.
test(name)){return true}return
false};__exports__=JavaScriptCompiler;return
__exports__}(__module2__);var
__module10__=function(__dependency1__,__dependency2__,__dependency3__,
__dependency4__){"use strict";var __exports__={};var
Exception=__dependency1__;var parse=__dependency2__.parse;var
JavaScriptCompiler=__dependency3__;var AST=__dependency4__;function
Compiler(){}__exports__.Compiler=Compiler;Compiler.prototype={compiler:
Compiler,disassemble:function(){var
opcodes=this.opcodes,opcode,out=[],params,param;for(var
i=0,l=opcodes.length;i<l;i++){opcode=opcodes[i];if(opcode.opcode==="
DECLARE"){out.push("DECLARE
"+opcode.name+"="+opcode.value)}else{params=[];for(var
j=0;j<opcode.args.length;j++){param=opcode.args[j];if(typeof
param==="string"){param='"'+param.replace("\n","\\n")+'"'}params.push(
param)}out.push(opcode.opcode+" "+params.join(" "))}}return
out.join("\n")},equals:function(other){var
len=this.opcodes.length;if(other.opcodes.length!==len){return
false}for(var i=0;i<len;i++){var
opcode=this.opcodes[i],otherOpcode=other.opcodes[i];if(opcode.opcode!==
otherOpcode.opcode||opcode.args.length!==otherOpcode.args.length){return
false}for(var
j=0;j<opcode.args.length;j++){if(opcode.args[j]!==otherOpcode.args[j]){
return
false}}}len=this.children.length;if(other.children.length!==len){return
false}for(i=0;i<len;i++){if(!this.children[i].equals(other.children[i]))
{return false}}return
true},guid:0,compile:function(program,options){this.opcodes=[];this.
children=[];this.depths={list:[]};this.options=options;var
knownHelpers=this.options.knownHelpers;this.options.knownHelpers={
helperMissing:true,blockHelperMissing:true,each:true,"if":true,unless:
true,"with":true,log:true};if(knownHelpers){for(var name in
knownHelpers){this.options.knownHelpers[name]=knownHelpers[name]}}return
this.accept(program)},accept:function(node){var
strip=node.strip||{},ret;if(strip.left){this.opcode("strip")}ret=this[
node.type](node);if(strip.right){this.opcode("strip")}return
ret},program:function(program){var statements=program.statements;for(var
i=0,l=statements.length;i<l;i++){this.accept(statements[i])}this.
isSimple=l===1;this.depths.list=this.depths.list.sort(function(a,b){
return a-b});return this},compileProgram:function(program){var
result=(new this.compiler).compile(program,this.options);var
guid=this.guid++,depth;this.usePartial=this.usePartial||result.
usePartial;this.children[guid]=result;for(var
i=0,l=result.depths.list.length;i<l;i++){depth=result.depths.list[i];if(
depth<2){continue}else{this.addDepth(depth-1)}}return
guid},block:function(block){var
mustache=block.mustache,program=block.program,inverse=block.inverse;if(
program){program=this.compileProgram(program)}if(inverse){inverse=this.
compileProgram(inverse)}var
type=this.classifyMustache(mustache);if(type==="helper"){this.
helperMustache(mustache,program,inverse)}else
if(type==="simple"){this.simpleMustache(mustache);this.opcode("
pushProgram",program);this.opcode("pushProgram",inverse);this.opcode("
emptyHash");this.opcode("blockValue")}else{this.ambiguousMustache(
mustache,program,inverse);this.opcode("pushProgram",program);this.opcode
("pushProgram",inverse);this.opcode("emptyHash");this.opcode("
ambiguousBlockValue")}this.opcode("append")},hash:function(hash){var
pairs=hash.pairs,pair,val;this.opcode("pushHash");for(var
i=0,l=pairs.length;i<l;i++){pair=pairs[i];val=pair[1];if(this.options.
stringParams){if(val.depth){this.addDepth(val.depth)}this.opcode("
getContext",val.depth||0);this.opcode("pushStringParam",val.
stringModeValue,val.type)}else{this.accept(val)}this.opcode("
assignToHash",pair[0])}this.opcode("popHash")},partial:function(partial)
{var
partialName=partial.partialName;this.usePartial=true;if(partial.context)
{this.ID(partial.context)}else{this.opcode("push","depth0")}this.opcode(
"invokePartial",partialName.name);this.opcode("append")},content:
function(content){this.opcode("appendContent",content.string)},mustache:
function(mustache){var options=this.options;var
type=this.classifyMustache(mustache);if(type==="simple"){this.
simpleMustache(mustache)}else
if(type==="helper"){this.helperMustache(mustache)}else{this.
ambiguousMustache(mustache)}if(mustache.escaped&&!options.noEscape){this
.opcode("appendEscaped")}else{this.opcode("append")}},ambiguousMustache:
function(mustache,program,inverse){var
id=mustache.id,name=id.parts[0],isBlock=program!=null||inverse!=null;
this.opcode("getContext",id.depth);this.opcode("pushProgram",program);
this.opcode("pushProgram",inverse);this.opcode("invokeAmbiguous",name,
isBlock)},simpleMustache:function(mustache){var
id=mustache.id;if(id.type==="DATA"){this.DATA(id)}else
if(id.parts.length){this.ID(id)}else{this.addDepth(id.depth);this.opcode
("getContext",id.depth);this.opcode("pushContext")}this.opcode("
resolvePossibleLambda")},helperMustache:function(mustache,program,
inverse){var
params=this.setupFullMustacheParams(mustache,program,inverse),name=
mustache.id.parts[0];if(this.options.knownHelpers[name]){this.opcode("
invokeKnownHelper",params.length,name)}else
if(this.options.knownHelpersOnly){throw new Error("You specified
knownHelpersOnly, but used the unknown helper
"+name)}else{this.opcode("invokeHelper",params.length,name)}},ID:
function(id){this.addDepth(id.depth);this.opcode("getContext",id.depth);
var
name=id.parts[0];if(!name){this.opcode("pushContext")}else{this.opcode("
lookupOnContext",id.parts[0])}for(var
i=1,l=id.parts.length;i<l;i++){this.opcode("lookup",id.parts[i])}},DATA:
function(data){this.options.data=true;if(data.id.isScoped||data.id.depth
){throw new Exception("Scoped data references are not supported:
"+data.original)}this.opcode("lookupData");var
parts=data.id.parts;for(var
i=0,l=parts.length;i<l;i++){this.opcode("lookup",parts[i])}},STRING:
function(string){this.opcode("pushString",string.string)},INTEGER:
function(integer){this.opcode("pushLiteral",integer.integer)},BOOLEAN:
function(bool){this.opcode("pushLiteral",bool.bool)},comment:function(){
},opcode:function(name){this.opcodes.push({opcode:name,args:[].slice.
call(arguments,1)})},declare:function(name,value){this.opcodes.push({
opcode:"DECLARE",name:name,value:value})},addDepth:function(depth){if(
isNaN(depth)){throw new
Error("EWOT")}if(depth===0){return}if(!this.depths[depth]){this.depths[
depth]=true;this.depths.list.push(depth)}},classifyMustache:function(
mustache){var isHelper=mustache.isHelper;var
isEligible=mustache.eligibleHelper;var
options=this.options;if(isEligible&&!isHelper){var
name=mustache.id.parts[0];if(options.knownHelpers[name]){isHelper=true}
else
if(options.knownHelpersOnly){isEligible=false}}if(isHelper){return"
helper"}else
if(isEligible){return"ambiguous"}else{return"simple"}},pushParams:
function(params){var
i=params.length,param;while(i--){param=params[i];if(this.options.
stringParams){if(param.depth){this.addDepth(param.depth)}this.opcode("
getContext",param.depth||0);this.opcode("pushStringParam",param.
stringModeValue,param.type)}else{this[param.type](param)}}},
setupMustacheParams:function(mustache){var
params=mustache.params;this.pushParams(params);if(mustache.hash){this.
hash(mustache.hash)}else{this.opcode("emptyHash")}return
params},setupFullMustacheParams:function(mustache,program,inverse){var
params=mustache.params;this.pushParams(params);this.opcode("pushProgram"
,program);this.opcode("pushProgram",inverse);if(mustache.hash){this.hash
(mustache.hash)}else{this.opcode("emptyHash")}return params}};function
precompile(input,options){if(input==null||typeof
input!=="string"&&input.constructor!==AST.ProgramNode){throw new
Exception("You must pass a string or Handlebars AST to
Handlebars.precompile. You passed
"+input)}options=options||{};if(!("data"in
options)){options.data=true}var ast=parse(input);var environment=(new
Compiler).compile(ast,options);return(new
JavaScriptCompiler).compile(environment,options)}__exports__.precompile=
precompile;function compile(input,options,env){if(input==null||typeof
input!=="string"&&input.constructor!==AST.ProgramNode){throw new
Exception("You must pass a string or Handlebars AST to
Handlebars.compile. You passed
"+input)}options=options||{};if(!("data"in
options)){options.data=true}var compiled;function compileInput(){var
ast=parse(input);var environment=(new Compiler).compile(ast,options);var
templateSpec=(new
JavaScriptCompiler).compile(environment,options,undefined,true);return
env.template(templateSpec)}return
function(context,options){if(!compiled){compiled=compileInput()}return
compiled.call(this,context,options)}}__exports__.compile=compile;return
__exports__}(__module5__,__module8__,__module11__,__module7__);var
__module0__=function(__dependency1__,__dependency2__,__dependency3__,
__dependency4__,__dependency5__){"use strict";var __exports__;var
Handlebars=__dependency1__;var AST=__dependency2__;var
Parser=__dependency3__.parser;var parse=__dependency3__.parse;var
Compiler=__dependency4__.Compiler;var
compile=__dependency4__.compile;var
precompile=__dependency4__.precompile;var
JavaScriptCompiler=__dependency5__;var _create=Handlebars.create;var
create=function(){var
hb=_create();hb.compile=function(input,options){return
compile(input,options,hb)};hb.precompile=precompile;hb.AST=AST;hb.
Compiler=Compiler;hb.JavaScriptCompiler=JavaScriptCompiler;hb.Parser=
Parser;hb.parse=parse;return
hb};Handlebars=create();Handlebars.create=create;__exports__=Handlebars;
return
__exports__}(__module1__,__module7__,__module8__,__module10__,
__module11__);return __module0__}();(function(root,undefined){var
lib={};lib.version="0.3.2";lib.settings={currency:{symbol:"$",format:"%s
%v",decimal:".",thousand:",",precision:2,grouping:3},number:{precision:0
,grouping:3,thousand:",",decimal:"."}};var
nativeMap=Array.prototype.map,nativeIsArray=Array.isArray,toString=
Object.prototype.toString;function
isString(obj){return!!(obj===""||obj&&obj.charCodeAt&&obj.substr)}
function isArray(obj){return
nativeIsArray?nativeIsArray(obj):toString.call(obj)==="[object
Array]"}function isObject(obj){return toString.call(obj)==="[object
Object]"}function defaults(object,defs){var
key;object=object||{};defs=defs||{};for(key in
defs){if(defs.hasOwnProperty(key)){if(object[key]==null)object[key]=defs
[key]}}return object}function map(obj,iterator,context){var
results=[],i,j;if(!obj)return
results;if(nativeMap&&obj.map===nativeMap)return
obj.map(iterator,context);for(i=0,j=obj.length;i<j;i++){results[i]=
iterator.call(context,obj[i],i,obj)}return results}function
checkPrecision(val,base){val=Math.round(Math.abs(val));return
isNaN(val)?base:val}function checkCurrencyFormat(format){var
defaults=lib.settings.currency.format;if(typeof
format==="function")format=format();if(isString(format)&&format.match("%
v")){return{pos:format,neg:format.replace("-","").replace("%v","-%v"),
zero:format}}else
if(!format||!format.pos||!format.pos.match("%v")){return!isString(
defaults)?defaults:lib.settings.currency.format={pos:defaults,neg:
defaults.replace("%v","-%v"),zero:defaults}}return format}var
unformat=lib.unformat=lib.parse=function(value,decimal){if(isArray(value
)){return map(value,function(val){return
unformat(val,decimal)})}value=value||0;if(typeof value==="number")return
value;decimal=decimal||".";var regex=new
RegExp("[^0-9-"+decimal+"]",["g"]),unformatted=parseFloat((""+value).
replace(/\((.*)\)/,"-$1").replace(regex,"").replace(decimal,"."));return
!isNaN(unformatted)?unformatted:0};var
toFixed=lib.toFixed=function(value,precision){precision=checkPrecision(
precision,lib.settings.number.precision);var
power=Math.pow(10,precision);return(Math.round(lib.unformat(value)*power
)/power).toFixed(precision)};var
formatNumber=lib.formatNumber=function(number,precision,thousand,decimal
){if(isArray(number)){return map(number,function(val){return
formatNumber(val,precision,thousand,decimal)})}number=unformat(number);
var
opts=defaults(isObject(precision)?precision:{precision:precision,
thousand:thousand,decimal:decimal},lib.settings.number),usePrecision=
checkPrecision(opts.precision),negative=number<0?"-":"",base=parseInt(
toFixed(Math.abs(number||0),usePrecision),10)+"",mod=base.length>3?base.
length%3:0;return
negative+(mod?base.substr(0,mod)+opts.thousand:"")+base.substr(mod).
replace(/(\d{3})(?=\d)/g,"$1"+opts.thousand)+(usePrecision?opts.decimal+
toFixed(Math.abs(number),usePrecision).split(".")[1]:"")};var
formatMoney=lib.formatMoney=function(number,symbol,precision,thousand,
decimal,format){if(isArray(number)){return
map(number,function(val){return
formatMoney(val,symbol,precision,thousand,decimal,format)})}number=
unformat(number);var
opts=defaults(isObject(symbol)?symbol:{symbol:symbol,precision:precision
,thousand:thousand,decimal:decimal,format:format},lib.settings.currency)
,formats=checkCurrencyFormat(opts.format),useFormat=number>0?formats.pos
:number<0?formats.neg:formats.zero; return
useFormat.replace("%s",opts.symbol).replace("%v",formatNumber(Math.abs(
number),checkPrecision(opts.precision),opts.thousand,opts.decimal))};lib
.formatColumn=function(list,symbol,precision,thousand,decimal,format){if
(!list)return[];var
opts=defaults(isObject(symbol)?symbol:{symbol:symbol,precision:precision
,thousand:thousand,decimal:decimal,format:format},lib.settings.currency)
,formats=checkCurrencyFormat(opts.format),padAfterSymbol=formats.pos.
indexOf("%s")<formats.pos.indexOf("%v")?true:false,maxLength=0,formatted
=map(list,function(val,i){if(isArray(val)){return
lib.formatColumn(val,opts)}else{val=unformat(val);var
useFormat=val>0?formats.pos:val<0?formats.neg:formats.zero,fVal=
useFormat.replace("%s",opts.symbol).replace("%v",formatNumber(Math.abs(
val),checkPrecision(opts.precision),opts.thousand,opts.decimal));if(fVal
.length>maxLength)maxLength=fVal.length;return fVal}});return
map(formatted,function(val,i){if(isString(val)&&val.length<maxLength){
return padAfterSymbol?val.replace(opts.symbol,opts.symbol+new
Array(maxLength-val.length+1).join(" ")):new
Array(maxLength-val.length+1).join(" ")+val}return val})};if(typeof
exports!=="undefined"){if(typeof
module!=="undefined"&&module.exports){exports=module.exports=lib}exports
.accounting=lib}else if(typeof
define==="function"&&define.amd){define([],function(){return
lib})}else{lib.noConflict=function(oldAccounting){return
function(){root.accounting=oldAccounting;lib.noConflict=undefined;return
lib}}(root.accounting);root["accounting"]=lib}})(this);d3=function(){var
d3={version:"3.3.13"};if(!Date.now)Date.now=function(){return+new
Date};var d3_arraySlice=[].slice,d3_array=function(list){return
d3_arraySlice.call(list)};var
d3_document=document,d3_documentElement=d3_document.documentElement,
d3_window=window;try{d3_array(d3_documentElement.childNodes)[0].nodeType
}catch(e){d3_array=function(list){var i=list.length,array=new
Array(i);while(i--)array[i]=list[i];return
array}}try{d3_document.createElement("div").style.setProperty("opacity",
0,"")}catch(error){var
d3_element_prototype=d3_window.Element.prototype,d3_element_setAttribute
=d3_element_prototype.setAttribute,d3_element_setAttributeNS=
d3_element_prototype.setAttributeNS,d3_style_prototype=d3_window.
CSSStyleDeclaration.prototype,d3_style_setProperty=d3_style_prototype.
setProperty;d3_element_prototype.setAttribute=function(name,value){
d3_element_setAttribute.call(this,name,value+"")};d3_element_prototype.
setAttributeNS=function(space,local,value){d3_element_setAttributeNS.
call(this,space,local,value+"")};d3_style_prototype.setProperty=function
(name,value,priority){d3_style_setProperty.call(this,name,value+"",
priority)}}d3.ascending=function(a,b){return
a<b?-1:a>b?1:a>=b?0:NaN};d3.descending=function(a,b){return
b<a?-1:b>a?1:b>=a?0:NaN};d3.min=function(array,f){var
i=-1,n=array.length,a,b;if(arguments.length===1){while(++i<n&&!((a=array
[i])!=null&&a<=a))a=undefined;while(++i<n)if((b=array[i])!=null&&a>b)a=b
}else{while(++i<n&&!((a=f.call(array,array[i],i))!=null&&a<=a))a=
undefined;while(++i<n)if((b=f.call(array,array[i],i))!=null&&a>b)a=b}
return a};d3.max=function(array,f){var
i=-1,n=array.length,a,b;if(arguments.length===1){while(++i<n&&!((a=array
[i])!=null&&a<=a))a=undefined;while(++i<n)if((b=array[i])!=null&&b>a)a=b
}else{while(++i<n&&!((a=f.call(array,array[i],i))!=null&&a<=a))a=
undefined;while(++i<n)if((b=f.call(array,array[i],i))!=null&&b>a)a=b}
return a};d3.extent=function(array,f){var
i=-1,n=array.length,a,b,c;if(arguments.length===1){while(++i<n&&!((a=c=
array[i])!=null&&a<=a))a=c=undefined;while(++i<n)if((b=array[i])!=null){
if(a>b)a=b;if(c<b)c=b}}else{while(++i<n&&!((a=c=f.call(array,array[i],i)
)!=null&&a<=a))a=undefined;while(++i<n)if((b=f.call(array,array[i],i))!=
null){if(a>b)a=b;if(c<b)c=b}}return[a,c]};d3.sum=function(array,f){var
s=0,n=array.length,a,i=-1;if(arguments.length===1){while(++i<n)if(!isNaN
(a=+array[i]))s+=a}else{while(++i<n)if(!isNaN(a=+f.call(array,array[i],i
)))s+=a}return s};function d3_number(x){return
x!=null&&!isNaN(x)}d3.mean=function(array,f){var
n=array.length,a,m=0,i=-1,j=0;if(arguments.length===1){while(++i<n)if(
d3_number(a=array[i]))m+=(a-m)/++j}else{while(++i<n)if(d3_number(a=f.
call(array,array[i],i)))m+=(a-m)/++j}return
j?m:undefined};d3.quantile=function(values,p){var
H=(values.length-1)*p+1,h=Math.floor(H),v=+values[h-1],e=H-h;return
e?v+e*(values[h]-v):v};d3.median=function(array,f){if(arguments.length>1
)array=array.map(f);array=array.filter(d3_number);return
array.length?d3.quantile(array.sort(d3.ascending),.5):undefined};d3.
bisector=function(f){return{left:function(a,x,lo,hi){if(arguments.length
<3)lo=0;if(arguments.length<4)hi=a.length;while(lo<hi){var
mid=lo+hi>>>1;if(f.call(a,a[mid],mid)<x)lo=mid+1;else hi=mid}return
lo},right:function(a,x,lo,hi){if(arguments.length<3)lo=0;if(arguments.
length<4)hi=a.length;while(lo<hi){var
mid=lo+hi>>>1;if(x<f.call(a,a[mid],mid))hi=mid;else lo=mid+1}return
lo}}};var d3_bisector=d3.bisector(function(d){return
d});d3.bisectLeft=d3_bisector.left;d3.bisect=d3.bisectRight=d3_bisector.
right;d3.shuffle=function(array){var
m=array.length,t,i;while(m){i=Math.random()*m--|0;t=array[m],array[m]=
array[i],array[i]=t}return array};d3.permute=function(array,indexes){var
i=indexes.length,permutes=new
Array(i);while(i--)permutes[i]=array[indexes[i]];return
permutes};d3.pairs=function(array){var
i=0,n=array.length-1,p0,p1=array[0],pairs=new
Array(n<0?0:n);while(i<n)pairs[i]=[p0=p1,p1=array[++i]];return
pairs};d3.zip=function(){if(!(n=arguments.length))return[];for(var
i=-1,m=d3.min(arguments,d3_zipLength),zips=new Array(m);++i<m;){for(var
j=-1,n,zip=zips[i]=new Array(n);++j<n;){zip[j]=arguments[j][i]}}return
zips};function d3_zipLength(d){return
d.length}d3.transpose=function(matrix){return
d3.zip.apply(d3,matrix)};d3.keys=function(map){var keys=[];for(var key
in map)keys.push(key);return keys};d3.values=function(map){var
values=[];for(var key in map)values.push(map[key]);return
values};d3.entries=function(map){var entries=[];for(var key in
map)entries.push({key:key,value:map[key]});return
entries};d3.merge=function(arrays){var
n=arrays.length,m,i=-1,j=0,merged,array;while(++i<n)j+=arrays[i].length;
merged=new
Array(j);while(--n>=0){array=arrays[n];m=array.length;while(--m>=0){
merged[--j]=array[m]}}return merged};var
abs=Math.abs;d3.range=function(start,stop,step){if(arguments.length<3){
step=1;if(arguments.length<2){stop=start;start=0}}if((stop-start)/step==
=Infinity)throw new Error("infinite range");var
range=[],k=d3_range_integerScale(abs(step)),i=-1,j;start*=k,stop*=k,step
*=k;if(step<0)while((j=start+step*++i)>stop)range.push(j/k);else
while((j=start+step*++i)<stop)range.push(j/k);return range};function
d3_range_integerScale(x){var k=1;while(x*k%1)k*=10;return k}function
d3_class(ctor,properties){try{for(var key in
properties){Object.defineProperty(ctor.prototype,key,{value:properties[
key],enumerable:false})}}catch(e){ctor.prototype=properties}}d3.map=
function(object){var map=new d3_Map;if(object instanceof
d3_Map)object.forEach(function(key,value){map.set(key,value)});else
for(var key in object)map.set(key,object[key]);return map};function
d3_Map(){}d3_class(d3_Map,{has:function(key){return d3_map_prefix+key in
this},get:function(key){return
this[d3_map_prefix+key]},set:function(key,value){return
this[d3_map_prefix+key]=value},remove:function(key){key=d3_map_prefix+
key;return key in this&&delete this[key]},keys:function(){var
keys=[];this.forEach(function(key){keys.push(key)});return
keys},values:function(){var
values=[];this.forEach(function(key,value){values.push(value)});return
values},entries:function(){var
entries=[];this.forEach(function(key,value){entries.push({key:key,value:
value})});return entries},forEach:function(f){for(var key in
this){if(key.charCodeAt(0)===d3_map_prefixCode){f.call(this,key.
substring(1),this[key])}}}});var
d3_map_prefix="\x00",d3_map_prefixCode=d3_map_prefix.charCodeAt(0);d3.
nest=function(){var
nest={},keys=[],sortKeys=[],sortValues,rollup;function
map(mapType,array,depth){if(depth>=keys.length)return
rollup?rollup.call(nest,array):sortValues?array.sort(sortValues):array;
var
i=-1,n=array.length,key=keys[depth++],keyValue,object,setter,valuesByKey
=new
d3_Map,values;while(++i<n){if(values=valuesByKey.get(keyValue=key(object
=array[i]))){values.push(object)}else{valuesByKey.set(keyValue,[object])
}}if(mapType){object=mapType();setter=function(keyValue,values){object.
set(keyValue,map(mapType,values,depth))}}else{object={};setter=function(
keyValue,values){object[keyValue]=map(mapType,values,depth)}}valuesByKey
.forEach(setter);return object}function
entries(map,depth){if(depth>=keys.length)return map;var
array=[],sortKey=sortKeys[depth++];map.forEach(function(key,keyMap){
array.push({key:key,values:entries(keyMap,depth)})});return
sortKey?array.sort(function(a,b){return
sortKey(a.key,b.key)}):array}nest.map=function(array,mapType){return
map(mapType,array,0)};nest.entries=function(array){return
entries(map(d3.map,array,0),0)};nest.key=function(d){keys.push(d);return
nest};nest.sortKeys=function(order){sortKeys[keys.length-1]=order;return
nest};nest.sortValues=function(order){sortValues=order;return
nest};nest.rollup=function(f){rollup=f;return nest};return
nest};d3.set=function(array){var set=new d3_Set;if(array)for(var
i=0,n=array.length;i<n;++i)set.add(array[i]);return set};function
d3_Set(){}d3_class(d3_Set,{has:function(value){return
d3_map_prefix+value in
this},add:function(value){this[d3_map_prefix+value]=true;return
value},remove:function(value){value=d3_map_prefix+value;return value in
this&&delete this[value]},values:function(){var
values=[];this.forEach(function(value){values.push(value)});return
values},forEach:function(f){for(var value in
this){if(value.charCodeAt(0)===d3_map_prefixCode){f.call(this,value.
substring(1))}}}});d3.behavior={};d3.rebind=function(target,source){var
i=1,n=arguments.length,method;while(++i<n)target[method=arguments[i]]=
d3_rebind(target,source,source[method]);return target};function
d3_rebind(target,source,method){return function(){var
value=method.apply(source,arguments);return
value===source?target:value}}function
d3_vendorSymbol(object,name){if(name in object)return
name;name=name.charAt(0).toUpperCase()+name.substring(1);for(var
i=0,n=d3_vendorPrefixes.length;i<n;++i){var
prefixName=d3_vendorPrefixes[i]+name;if(prefixName in object)return
prefixName}}var
d3_vendorPrefixes=["webkit","ms","moz","Moz","o","O"];function
d3_noop(){}d3.dispatch=function(){var dispatch=new
d3_dispatch,i=-1,n=arguments.length;while(++i<n)dispatch[arguments[i]]=
d3_dispatch_event(dispatch);return dispatch};function
d3_dispatch(){}d3_dispatch.prototype.on=function(type,listener){var
i=type.indexOf("."),name="";if(i>=0){name=type.substring(i+1);type=type.
substring(0,i)}if(type)return
arguments.length<2?this[type].on(name):this[type].on(name,listener);if(
arguments.length===2){if(listener==null)for(type in
this){if(this.hasOwnProperty(type))this[type].on(name,null)}return
this}};function d3_dispatch_event(dispatch){var
listeners=[],listenerByName=new d3_Map;function event(){var
z=listeners,i=-1,n=z.length,l;while(++i<n)if(l=z[i].on)l.apply(this,
arguments);return dispatch}event.on=function(name,listener){var
l=listenerByName.get(name),i;if(arguments.length<2)return
l&&l.on;if(l){l.on=null;listeners=listeners.slice(0,i=listeners.indexOf(
l)).concat(listeners.slice(i+1));listenerByName.remove(name)}if(listener
)listeners.push(listenerByName.set(name,{on:listener}));return
dispatch};return event}d3.event=null;function
d3_eventPreventDefault(){d3.event.preventDefault()}function
d3_eventSource(){var e=d3.event,s;while(s=e.sourceEvent)e=s;return
e}function d3_eventDispatch(target){var dispatch=new
d3_dispatch,i=0,n=arguments.length;while(++i<n)dispatch[arguments[i]]=
d3_dispatch_event(dispatch);dispatch.of=function(thiz,argumentz){return
function(e1){try{var
e0=e1.sourceEvent=d3.event;e1.target=target;d3.event=e1;dispatch[e1.type
].apply(thiz,argumentz)}finally{d3.event=e0}}};return
dispatch}d3.requote=function(s){return
s.replace(d3_requote_re,"\\$&")};var
d3_requote_re=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;var
d3_subclass={}.__proto__?function(object,prototype){object.__proto__=
prototype}:function(object,prototype){for(var property in
prototype)object[property]=prototype[property]};function
d3_selection(groups){d3_subclass(groups,d3_selectionPrototype);return
groups}var d3_select=function(s,n){return
n.querySelector(s)},d3_selectAll=function(s,n){return
n.querySelectorAll(s)},d3_selectMatcher=d3_documentElement[
d3_vendorSymbol(d3_documentElement,"matchesSelector")],d3_selectMatches=
function(n,s){return d3_selectMatcher.call(n,s)};if(typeof
Sizzle==="function"){d3_select=function(s,n){return
Sizzle(s,n)[0]||null};d3_selectAll=function(s,n){return
Sizzle.uniqueSort(Sizzle(s,n))};d3_selectMatches=Sizzle.matchesSelector}
d3.selection=function(){return d3_selectionRoot};var
d3_selectionPrototype=d3.selection.prototype=[];d3_selectionPrototype.
select=function(selector){var
subgroups=[],subgroup,subnode,group,node;selector=d3_selection_selector(
selector);for(var
j=-1,m=this.length;++j<m;){subgroups.push(subgroup=[]);subgroup.
parentNode=(group=this[j]).parentNode;for(var
i=-1,n=group.length;++i<n;){if(node=group[i]){subgroup.push(subnode=
selector.call(node,node.__data__,i,j));if(subnode&&"__data__"in
node)subnode.__data__=node.__data__}else{subgroup.push(null)}}}return
d3_selection(subgroups)};function d3_selection_selector(selector){return
typeof selector==="function"?selector:function(){return
d3_select(selector,this)}}d3_selectionPrototype.selectAll=function(
selector){var
subgroups=[],subgroup,node;selector=d3_selection_selectorAll(selector);
for(var j=-1,m=this.length;++j<m;){for(var
group=this[j],i=-1,n=group.length;++i<n;){if(node=group[i]){subgroups.
push(subgroup=d3_array(selector.call(node,node.__data__,i,j)));subgroup.
parentNode=node}}}return d3_selection(subgroups)};function
d3_selection_selectorAll(selector){return typeof
selector==="function"?selector:function(){return
d3_selectAll(selector,this)}}var
d3_nsPrefix={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/
1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/
XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};d3.ns={prefix
:d3_nsPrefix,qualify:function(name){var
i=name.indexOf(":"),prefix=name;if(i>=0){prefix=name.substring(0,i);name
=name.substring(i+1)}return
d3_nsPrefix.hasOwnProperty(prefix)?{space:d3_nsPrefix[prefix],local:name
}:name}};d3_selectionPrototype.attr=function(name,value){if(arguments.
length<2){if(typeof name==="string"){var
node=this.node();name=d3.ns.qualify(name);return
name.local?node.getAttributeNS(name.space,name.local):node.getAttribute(
name)}for(value in
name)this.each(d3_selection_attr(value,name[value]));return this}return
this.each(d3_selection_attr(name,value))};function
d3_selection_attr(name,value){name=d3.ns.qualify(name);function
attrNull(){this.removeAttribute(name)}function
attrNullNS(){this.removeAttributeNS(name.space,name.local)}function
attrConstant(){this.setAttribute(name,value)}function
attrConstantNS(){this.setAttributeNS(name.space,name.local,value)}
function attrFunction(){var
x=value.apply(this,arguments);if(x==null)this.removeAttribute(name);else
this.setAttribute(name,x)}function attrFunctionNS(){var
x=value.apply(this,arguments);if(x==null)this.removeAttributeNS(name.
space,name.local);else
this.setAttributeNS(name.space,name.local,x)}return
value==null?name.local?attrNullNS:attrNull:typeof
value==="function"?name.local?attrFunctionNS:attrFunction:name.local?
attrConstantNS:attrConstant}function d3_collapse(s){return
s.trim().replace(/\s+/g,"
")}d3_selectionPrototype.classed=function(name,value){if(arguments.
length<2){if(typeof name==="string"){var
node=this.node(),n=(name=d3_selection_classes(name)).length,i=-1;if(
value=node.classList){while(++i<n)if(!value.contains(name[i]))return
false}else{value=node.getAttribute("class");while(++i<n)if(!
d3_selection_classedRe(name[i]).test(value))return false}return
true}for(value in
name)this.each(d3_selection_classed(value,name[value]));return
this}return this.each(d3_selection_classed(name,value))};function
d3_selection_classedRe(name){return new
RegExp("(?:^|\\s+)"+d3.requote(name)+"(?:\\s+|$)","g")}function
d3_selection_classes(name){return name.trim().split(/^|\s+/)}function
d3_selection_classed(name,value){name=d3_selection_classes(name).map(
d3_selection_classedName);var n=name.length;function
classedConstant(){var i=-1;while(++i<n)name[i](this,value)}function
classedFunction(){var
i=-1,x=value.apply(this,arguments);while(++i<n)name[i](this,x)}return
typeof value==="function"?classedFunction:classedConstant}function
d3_selection_classedName(name){var
re=d3_selection_classedRe(name);return
function(node,value){if(c=node.classList)return
value?c.add(name):c.remove(name);var
c=node.getAttribute("class")||"";if(value){re.lastIndex=0;if(!re.test(c)
)node.setAttribute("class",d3_collapse(c+"
"+name))}else{node.setAttribute("class",d3_collapse(c.replace(re,"
")))}}}d3_selectionPrototype.style=function(name,value,priority){var
n=arguments.length;if(n<3){if(typeof
name!=="string"){if(n<2)value="";for(priority in
name)this.each(d3_selection_style(priority,name[priority],value));return
this}if(n<2)return
d3_window.getComputedStyle(this.node(),null).getPropertyValue(name);
priority=""}return
this.each(d3_selection_style(name,value,priority))};function
d3_selection_style(name,value,priority){function
styleNull(){this.style.removeProperty(name)}function
styleConstant(){this.style.setProperty(name,value,priority)}function
styleFunction(){var
x=value.apply(this,arguments);if(x==null)this.style.removeProperty(name)
;else this.style.setProperty(name,x,priority)}return
value==null?styleNull:typeof
value==="function"?styleFunction:styleConstant}d3_selectionPrototype.
property=function(name,value){if(arguments.length<2){if(typeof
name==="string")return this.node()[name];for(value in
name)this.each(d3_selection_property(value,name[value]));return
this}return this.each(d3_selection_property(name,value))};function
d3_selection_property(name,value){function propertyNull(){delete
this[name]}function propertyConstant(){this[name]=value}function
propertyFunction(){var x=value.apply(this,arguments);if(x==null)delete
this[name];else this[name]=x}return value==null?propertyNull:typeof
value==="function"?propertyFunction:propertyConstant}
d3_selectionPrototype.text=function(value){return
arguments.length?this.each(typeof value==="function"?function(){var
v=value.apply(this,arguments);this.textContent=v==null?"":v}:value==null
?function(){this.textContent=""}:function(){this.textContent=value}):
this.node().textContent};d3_selectionPrototype.html=function(value){
return arguments.length?this.each(typeof
value==="function"?function(){var
v=value.apply(this,arguments);this.innerHTML=v==null?"":v}:value==null?
function(){this.innerHTML=""}:function(){this.innerHTML=value}):this.
node().innerHTML};d3_selectionPrototype.append=function(name){name=
d3_selection_creator(name);return this.select(function(){return
this.appendChild(name.apply(this,arguments))})};function
d3_selection_creator(name){return typeof
name==="function"?name:(name=d3.ns.qualify(name)).local?function(){
return
this.ownerDocument.createElementNS(name.space,name.local)}:function(){
return
this.ownerDocument.createElementNS(this.namespaceURI,name)}}
d3_selectionPrototype.insert=function(name,before){name=
d3_selection_creator(name);before=d3_selection_selector(before);return
this.select(function(){return
this.insertBefore(name.apply(this,arguments),before.apply(this,arguments
)||null)})};d3_selectionPrototype.remove=function(){return
this.each(function(){var
parent=this.parentNode;if(parent)parent.removeChild(this)})};
d3_selectionPrototype.data=function(value,key){var
i=-1,n=this.length,group,node;if(!arguments.length){value=new
Array(n=(group=this[0]).length);while(++i<n){if(node=group[i]){value[i]=
node.__data__}}return value}function bind(group,groupData){var
i,n=group.length,m=groupData.length,n0=Math.min(n,m),updateNodes=new
Array(m),enterNodes=new Array(m),exitNodes=new
Array(n),node,nodeData;if(key){var nodeByKeyValue=new
d3_Map,dataByKeyValue=new
d3_Map,keyValues=[],keyValue;for(i=-1;++i<n;){keyValue=key.call(node=
group[i],node.__data__,i);if(nodeByKeyValue.has(keyValue)){exitNodes[i]=
node}else{nodeByKeyValue.set(keyValue,node)}keyValues.push(keyValue)}for
(i=-1;++i<m;){keyValue=key.call(groupData,nodeData=groupData[i],i);if(
node=nodeByKeyValue.get(keyValue)){updateNodes[i]=node;node.__data__=
nodeData}else
if(!dataByKeyValue.has(keyValue)){enterNodes[i]=d3_selection_dataNode(
nodeData)}dataByKeyValue.set(keyValue,nodeData);nodeByKeyValue.remove(
keyValue)}for(i=-1;++i<n;){if(nodeByKeyValue.has(keyValues[i])){
exitNodes[i]=group[i]}}}else{for(i=-1;++i<n0;){node=group[i];nodeData=
groupData[i];if(node){node.__data__=nodeData;updateNodes[i]=node}else{
enterNodes[i]=d3_selection_dataNode(nodeData)}}for(;i<m;++i){enterNodes[
i]=d3_selection_dataNode(groupData[i])}for(;i<n;++i){exitNodes[i]=group[
i]}}enterNodes.update=updateNodes;enterNodes.parentNode=updateNodes.
parentNode=exitNodes.parentNode=group.parentNode;enter.push(enterNodes);
update.push(updateNodes);exit.push(exitNodes)}var
enter=d3_selection_enter([]),update=d3_selection([]),exit=d3_selection([
]);if(typeof
value==="function"){while(++i<n){bind(group=this[i],value.call(group,
group.parentNode.__data__,i))}}else{while(++i<n){bind(group=this[i],
value)}}update.enter=function(){return
enter};update.exit=function(){return exit};return update};function
d3_selection_dataNode(data){return{__data__:data}}d3_selectionPrototype.
datum=function(value){return
arguments.length?this.property("__data__",value):this.property("__data__
")};d3_selectionPrototype.filter=function(filter){var
subgroups=[],subgroup,group,node;if(typeof
filter!=="function")filter=d3_selection_filter(filter);for(var
j=0,m=this.length;j<m;j++){subgroups.push(subgroup=[]);subgroup.
parentNode=(group=this[j]).parentNode;for(var
i=0,n=group.length;i<n;i++){if((node=group[i])&&filter.call(node,node.
__data__,i,j)){subgroup.push(node)}}}return
d3_selection(subgroups)};function d3_selection_filter(selector){return
function(){return
d3_selectMatches(this,selector)}}d3_selectionPrototype.order=function(){
for(var j=-1,m=this.length;++j<m;){for(var
group=this[j],i=group.length-1,next=group[i],node;--i>=0;){if(node=group
[i]){if(next&&next!==node.nextSibling)next.parentNode.insertBefore(node,
next);next=node}}}return
this};d3_selectionPrototype.sort=function(comparator){comparator=
d3_selection_sortComparator.apply(this,arguments);for(var
j=-1,m=this.length;++j<m;)this[j].sort(comparator);return
this.order()};function
d3_selection_sortComparator(comparator){if(!arguments.length)comparator=
d3.ascending;return function(a,b){return
a&&b?comparator(a.__data__,b.__data__):!a-!b}}d3_selectionPrototype.each
=function(callback){return
d3_selection_each(this,function(node,i,j){callback.call(node,node.
__data__,i,j)})};function d3_selection_each(groups,callback){for(var
j=0,m=groups.length;j<m;j++){for(var
group=groups[j],i=0,n=group.length,node;i<n;i++){if(node=group[i])
callback(node,i,j)}}return
groups}d3_selectionPrototype.call=function(callback){var
args=d3_array(arguments);callback.apply(args[0]=this,args);return
this};d3_selectionPrototype.empty=function(){return!this.node()};
d3_selectionPrototype.node=function(){for(var
j=0,m=this.length;j<m;j++){for(var
group=this[j],i=0,n=group.length;i<n;i++){var
node=group[i];if(node)return node}}return
null};d3_selectionPrototype.size=function(){var
n=0;this.each(function(){++n});return n};function
d3_selection_enter(selection){d3_subclass(selection,
d3_selection_enterPrototype);return selection}var
d3_selection_enterPrototype=[];d3.selection.enter=d3_selection_enter;d3.
selection.enter.prototype=d3_selection_enterPrototype;
d3_selection_enterPrototype.append=d3_selectionPrototype.append;
d3_selection_enterPrototype.empty=d3_selectionPrototype.empty;
d3_selection_enterPrototype.node=d3_selectionPrototype.node;
d3_selection_enterPrototype.call=d3_selectionPrototype.call;
d3_selection_enterPrototype.size=d3_selectionPrototype.size;
d3_selection_enterPrototype.select=function(selector){var
subgroups=[],subgroup,subnode,upgroup,group,node;for(var
j=-1,m=this.length;++j<m;){upgroup=(group=this[j]).update;subgroups.push
(subgroup=[]);subgroup.parentNode=group.parentNode;for(var
i=-1,n=group.length;++i<n;){if(node=group[i]){subgroup.push(upgroup[i]=
subnode=selector.call(group.parentNode,node.__data__,i,j));subnode.
__data__=node.__data__}else{subgroup.push(null)}}}return
d3_selection(subgroups)};d3_selection_enterPrototype.insert=function(
name,before){if(arguments.length<2)before=d3_selection_enterInsertBefore
(this);return
d3_selectionPrototype.insert.call(this,name,before)};function
d3_selection_enterInsertBefore(enter){var i0,j0;return
function(d,i,j){var
group=enter[j].update,n=group.length,node;if(j!=j0)j0=j,i0=0;if(i>=i0)i0
=i+1;while(!(node=group[i0])&&++i0<n);return
node}}d3_selectionPrototype.transition=function(){var
id=d3_transitionInheritId||++d3_transitionId,subgroups=[],subgroup,node,
transition=d3_transitionInherit||{time:Date.now(),ease:
d3_ease_cubicInOut,delay:0,duration:250};for(var
j=-1,m=this.length;++j<m;){subgroups.push(subgroup=[]);for(var
group=this[j],i=-1,n=group.length;++i<n;){if(node=group[i])
d3_transitionNode(node,i,id,transition);subgroup.push(node)}}return
d3_transition(subgroups,id)};d3_selectionPrototype.interrupt=function(){
return this.each(d3_selection_interrupt)};function
d3_selection_interrupt(){var
lock=this.__transition__;if(lock)++lock.active}d3.select=function(node){
var group=[typeof
node==="string"?d3_select(node,d3_document):node];group.parentNode=
d3_documentElement;return
d3_selection([group])};d3.selectAll=function(nodes){var
group=d3_array(typeof
nodes==="string"?d3_selectAll(nodes,d3_document):nodes);group.parentNode
=d3_documentElement;return d3_selection([group])};var
d3_selectionRoot=d3.select(d3_documentElement);d3_selectionPrototype.on=
function(type,listener,capture){var n=arguments.length;if(n<3){if(typeof
type!=="string"){if(n<2)listener=false;for(capture in
type)this.each(d3_selection_on(capture,type[capture],listener));return
this}if(n<2)return(n=this.node()["__on"+type])&&n._;capture=false}return
this.each(d3_selection_on(type,listener,capture))};function
d3_selection_on(type,listener,capture){var
name="__on"+type,i=type.indexOf("."),wrap=d3_selection_onListener;if(i>0
)type=type.substring(0,i);var
filter=d3_selection_onFilters.get(type);if(filter)type=filter,wrap=
d3_selection_onFilter;function onRemove(){var
l=this[name];if(l){this.removeEventListener(type,l,l.$);delete
this[name]}}function onAdd(){var
l=wrap(listener,d3_array(arguments));onRemove.call(this);this.
addEventListener(type,this[name]=l,l.$=capture);l._=listener}function
removeAll(){var re=new
RegExp("^__on([^.]+)"+d3.requote(type)+"$"),match;for(var name in
this){if(match=name.match(re)){var
l=this[name];this.removeEventListener(match[1],l,l.$);delete
this[name]}}}return
i?listener?onAdd:onRemove:listener?d3_noop:removeAll}var
d3_selection_onFilters=d3.map({mouseenter:"mouseover",mouseleave:"
mouseout"});d3_selection_onFilters.forEach(function(k){if("on"+k in
d3_document)d3_selection_onFilters.remove(k)});function
d3_selection_onListener(listener,argumentz){return function(e){var
o=d3.event;d3.event=e;argumentz[0]=this.__data__;try{listener.apply(this
,argumentz)}finally{d3.event=o}}}function
d3_selection_onFilter(listener,argumentz){var
l=d3_selection_onListener(listener,argumentz);return function(e){var
target=this,related=e.relatedTarget;if(!related||related!==target&&!(
related.compareDocumentPosition(target)&8)){l.call(target,e)}}}var
d3_event_dragSelect="onselectstart"in
d3_document?null:d3_vendorSymbol(d3_documentElement.style,"userSelect"),
d3_event_dragId=0;function d3_event_dragSuppress(){var
name=".dragsuppress-"+
++d3_event_dragId,click="click"+name,w=d3.select(d3_window).on("
touchmove"+name,d3_eventPreventDefault).on("dragstart"+name,
d3_eventPreventDefault).on("selectstart"+name,d3_eventPreventDefault);if
(d3_event_dragSelect){var
style=d3_documentElement.style,select=style[d3_event_dragSelect];style[
d3_event_dragSelect]="none"}return
function(suppressClick){w.on(name,null);if(d3_event_dragSelect)style[
d3_event_dragSelect]=select;if(suppressClick){function
off(){w.on(click,null)}w.on(click,function(){d3_eventPreventDefault();
off()},true);setTimeout(off,0)}}}d3.mouse=function(container){return
d3_mousePoint(container,d3_eventSource())};var
d3_mouse_bug44083=/WebKit/.test(d3_window.navigator.userAgent)?-1:0;
function
d3_mousePoint(container,e){if(e.changedTouches)e=e.changedTouches[0];var
svg=container.ownerSVGElement||container;if(svg.createSVGPoint){var
point=svg.createSVGPoint();if(d3_mouse_bug44083<0&&(d3_window.scrollX||
d3_window.scrollY)){svg=d3.select("body").append("svg").style({position:
"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");
var
ctm=svg[0][0].getScreenCTM();d3_mouse_bug44083=!(ctm.f||ctm.e);svg.
remove()}if(d3_mouse_bug44083)point.x=e.pageX,point.y=e.pageY;else
point.x=e.clientX,point.y=e.clientY;point=point.matrixTransform(
container.getScreenCTM().inverse());return[point.x,point.y]}var
rect=container.getBoundingClientRect();return[e.clientX-rect.left-
container.clientLeft,e.clientY-rect.top-container.clientTop]}d3.touches=
function(container,touches){if(arguments.length<2)touches=d3_eventSource
().touches;return touches?d3_array(touches).map(function(touch){var
point=d3_mousePoint(container,touch);point.identifier=touch.identifier;
return point}):[]};d3.behavior.drag=function(){var
event=d3_eventDispatch(drag,"drag","dragstart","dragend"),origin=null,
mousedown=dragstart(d3_noop,d3.mouse,"mousemove","mouseup"),touchstart=
dragstart(touchid,touchposition,"touchmove","touchend");function
drag(){this.on("mousedown.drag",mousedown).on("touchstart.drag",
touchstart)}function touchid(){return
d3.event.changedTouches[0].identifier}function
touchposition(parent,id){return
d3.touches(parent).filter(function(p){return
p.identifier===id})[0]}function dragstart(id,position,move,end){return
function(){var
target=this,parent=target.parentNode,event_=event.of(target,arguments),
eventTarget=d3.event.target,eventId=id(),drag=eventId==null?"drag":"drag
-"+eventId,origin_=position(parent,eventId),dragged=0,offset,w=d3.select
(d3_window).on(move+"."+drag,moved).on(end+"."+drag,ended),dragRestore=
d3_event_dragSuppress();if(origin){offset=origin.apply(target,arguments)
;offset=[offset.x-origin_[0],offset.y-origin_[1]]}else{offset=[0,0]}
event_({type:"dragstart"});function moved(){var
p=position(parent,eventId),dx=p[0]-origin_[0],dy=p[1]-origin_[1];dragged
|=dx|dy;origin_=p;event_({type:"drag",x:p[0]+offset[0],y:p[1]+offset[1],
dx:dx,dy:dy})}function
ended(){w.on(move+"."+drag,null).on(end+"."+drag,null);dragRestore(
dragged&&d3.event.target===eventTarget);event_({type:"dragend"})}}}drag.
origin=function(x){if(!arguments.length)return origin;origin=x;return
drag};return d3.rebind(drag,event,"on")};var
π=Math.PI,τ=2*π,halfπ=π/2,ε=1e-6,ε2=ε*ε,d3_radians=π/180,d3_degrees=180/
π;function d3_sgn(x){return x>0?1:x<0?-1:0}function d3_acos(x){return
x>1?0:x<-1?π:Math.acos(x)}function d3_asin(x){return
x>1?halfπ:x<-1?-halfπ:Math.asin(x)}function
d3_sinh(x){return((x=Math.exp(x))-1/x)/2}function
d3_cosh(x){return((x=Math.exp(x))+1/x)/2}function
d3_tanh(x){return((x=Math.exp(2*x))-1)/(x+1)}function
d3_haversin(x){return(x=Math.sin(x/2))*x}var
ρ=Math.SQRT2,ρ2=2,ρ4=4;d3.interpolateZoom=function(p0,p1){var
ux0=p0[0],uy0=p0[1],w0=p0[2],ux1=p1[0],uy1=p1[1],w1=p1[2];var
dx=ux1-ux0,dy=uy1-uy0,d2=dx*dx+dy*dy,d1=Math.sqrt(d2),b0=(w1*w1-w0*w0+ρ4
*d2)/(2*w0*ρ2*d1),b1=(w1*w1-w0*w0-ρ4*d2)/(2*w1*ρ2*d1),r0=Math.log(Math.
sqrt(b0*b0+1)-b0),r1=Math.log(Math.sqrt(b1*b1+1)-b1),dr=r1-r0,S=(dr||
Math.log(w1/w0))/ρ;function interpolate(t){var s=t*S;if(dr){var
coshr0=d3_cosh(r0),u=w0/(ρ2*d1)*(coshr0*d3_tanh(ρ*s+r0)-d3_sinh(r0));
return[ux0+u*dx,uy0+u*dy,w0*coshr0/d3_cosh(ρ*s+r0)]}return[ux0+t*dx,uy0+
t*dy,w0*Math.exp(ρ*s)]}interpolate.duration=S*1e3;return
interpolate};d3.behavior.zoom=function(){var
view={x:0,y:0,k:1},translate0,center,size=[960,500],scaleExtent=
d3_behavior_zoomInfinity,mousedown="mousedown.zoom",mousemove="mousemove
.zoom",mouseup="mouseup.zoom",mousewheelTimer,touchstart="touchstart.
zoom",touchtime,event=d3_eventDispatch(zoom,"zoomstart","zoom","zoomend"
),x0,x1,y0,y1;function
zoom(g){g.on(mousedown,mousedowned).on(d3_behavior_zoomWheel+".zoom",
mousewheeled).on(mousemove,mousewheelreset).on("dblclick.zoom",
dblclicked).on(touchstart,touchstarted)}zoom.event=function(g){g.each(
function(){var
event_=event.of(this,arguments),view1=view;if(d3_transitionInheritId){d3
.select(this).transition().each("start.zoom",function(){view=this.
__chart__||{x:0,y:0,k:1};zoomstarted(event_)}).tween("zoom:zoom",
function(){var
dx=size[0],dy=size[1],cx=dx/2,cy=dy/2,i=d3.interpolateZoom([(cx-view.x)/
view.k,(cy-view.y)/view.k,dx/view.k],[(cx-view1.x)/view1.k,(cy-view1.y)/
view1.k,dx/view1.k]);return function(t){var
l=i(t),k=dx/l[2];this.__chart__=view={x:cx-l[0]*k,y:cy-l[1]*k,k:k};
zoomed(event_)}}).each("end.zoom",function(){zoomended(event_)})}else{
this.__chart__=view;zoomstarted(event_);zoomed(event_);zoomended(event_)
}})};zoom.translate=function(_){if(!arguments.length)return[view.x,view.
y];view={x:+_[0],y:+_[1],k:view.k};rescale();return
zoom};zoom.scale=function(_){if(!arguments.length)return
view.k;view={x:view.x,y:view.y,k:+_};rescale();return
zoom};zoom.scaleExtent=function(_){if(!arguments.length)return
scaleExtent;scaleExtent=_==null?d3_behavior_zoomInfinity:[+_[0],+_[1]];
return zoom};zoom.center=function(_){if(!arguments.length)return
center;center=_&&[+_[0],+_[1]];return
zoom};zoom.size=function(_){if(!arguments.length)return
size;size=_&&[+_[0],+_[1]];return
zoom};zoom.x=function(z){if(!arguments.length)return
x1;x1=z;x0=z.copy();view={x:0,y:0,k:1};return
zoom};zoom.y=function(z){if(!arguments.length)return
y1;y1=z;y0=z.copy();view={x:0,y:0,k:1};return zoom};function
location(p){return[(p[0]-view.x)/view.k,(p[1]-view.y)/view.k]}function
point(l){return[l[0]*view.k+view.x,l[1]*view.k+view.y]}function
scaleTo(s){view.k=Math.max(scaleExtent[0],Math.min(scaleExtent[1],s))}
function
translateTo(p,l){l=point(l);view.x+=p[0]-l[0];view.y+=p[1]-l[1]}function
rescale(){if(x1)x1.domain(x0.range().map(function(x){return(x-view.x)/
view.k}).map(x0.invert));if(y1)y1.domain(y0.range().map(function(y){
return(y-view.y)/view.k}).map(y0.invert))}function
zoomstarted(event){event({type:"zoomstart"})}function
zoomed(event){rescale();event({type:"zoom",scale:view.k,translate:[view.
x,view.y]})}function zoomended(event){event({type:"zoomend"})}function
mousedowned(){var
target=this,event_=event.of(target,arguments),eventTarget=d3.event.
target,dragged=0,w=d3.select(d3_window).on(mousemove,moved).on(mouseup,
ended),l=location(d3.mouse(target)),dragRestore=d3_event_dragSuppress();
d3_selection_interrupt.call(target);zoomstarted(event_);function
moved(){dragged=1;translateTo(d3.mouse(target),l);zoomed(event_)}
function
ended(){w.on(mousemove,d3_window===target?mousewheelreset:null).on(
mouseup,null);dragRestore(dragged&&d3.event.target===eventTarget);
zoomended(event_)}}function touchstarted(){var
target=this,event_=event.of(target,arguments),locations0={},distance0=0,
scale0,eventId=d3.event.changedTouches[0].identifier,touchmove="
touchmove.zoom-"+eventId,touchend="touchend.zoom-"+eventId,w=d3.select(
d3_window).on(touchmove,moved).on(touchend,ended),t=d3.select(target).on
(mousedown,null).on(touchstart,started),dragRestore=
d3_event_dragSuppress();d3_selection_interrupt.call(target);started();
zoomstarted(event_);function relocate(){var
touches=d3.touches(target);scale0=view.k;touches.forEach(function(t){if(
t.identifier in locations0)locations0[t.identifier]=location(t)});return
touches}function started(){var changed=d3.event.changedTouches;for(var
i=0,n=changed.length;i<n;++i){locations0[changed[i].identifier]=null}var
touches=relocate(),now=Date.now();if(touches.length===1){if(now-
touchtime<500){var
p=touches[0],l=locations0[p.identifier];scaleTo(view.k*2);translateTo(p,
l);d3_eventPreventDefault();zoomed(event_)}touchtime=now}else
if(touches.length>1){var
p=touches[0],q=touches[1],dx=p[0]-q[0],dy=p[1]-q[1];distance0=dx*dx+dy*
dy}}function moved(){var touches=d3.touches(target),p0,l0,p1,l1;for(var
i=0,n=touches.length;i<n;++i,l1=null){p1=touches[i];if(l1=locations0[p1.
identifier]){if(l0)break;p0=p1,l0=l1}}if(l1){var
distance1=(distance1=p1[0]-p0[0])*distance1+(distance1=p1[1]-p0[1])*
distance1,scale1=distance0&&Math.sqrt(distance1/distance0);p0=[(p0[0]+p1
[0])/2,(p0[1]+p1[1])/2];l0=[(l0[0]+l1[0])/2,(l0[1]+l1[1])/2];scaleTo(
scale1*scale0)}touchtime=null;translateTo(p0,l0);zoomed(event_)}function
ended(){if(d3.event.touches.length){var
changed=d3.event.changedTouches;for(var
i=0,n=changed.length;i<n;++i){delete
locations0[changed[i].identifier]}for(var identifier in
locations0){return void
relocate()}}w.on(touchmove,null).on(touchend,null);t.on(mousedown,
mousedowned).on(touchstart,touchstarted);dragRestore();zoomended(event_)
}}function mousewheeled(){var
event_=event.of(this,arguments);if(mousewheelTimer)clearTimeout(
mousewheelTimer);else
d3_selection_interrupt.call(this),zoomstarted(event_);mousewheelTimer=
setTimeout(function(){mousewheelTimer=null;zoomended(event_)},50);
d3_eventPreventDefault();var
point=center||d3.mouse(this);if(!translate0)translate0=location(point);
scaleTo(Math.pow(2,d3_behavior_zoomDelta()*.002)*view.k);translateTo(
point,translate0);zoomed(event_)}function
mousewheelreset(){translate0=null}function dblclicked(){var
event_=event.of(this,arguments),p=d3.mouse(this),l=location(p),k=Math.
log(view.k)/Math.LN2;zoomstarted(event_);scaleTo(Math.pow(2,d3.event.
shiftKey?Math.ceil(k)-1:Math.floor(k)+1));translateTo(p,l);zoomed(event_
);zoomended(event_)}return d3.rebind(zoom,event,"on")};var
d3_behavior_zoomInfinity=[0,Infinity];var
d3_behavior_zoomDelta,d3_behavior_zoomWheel="onwheel"in
d3_document?(d3_behavior_zoomDelta=function(){return-d3.event.deltaY*(d3
.event.deltaMode?120:1)},"wheel"):"onmousewheel"in
d3_document?(d3_behavior_zoomDelta=function(){return
d3.event.wheelDelta},"mousewheel"):(d3_behavior_zoomDelta=function(){
return-d3.event.detail},"MozMousePixelScroll");function
d3_Color(){}d3_Color.prototype.toString=function(){return
this.rgb()+""};d3.hsl=function(h,s,l){return arguments.length===1?h
instanceof
d3_Hsl?d3_hsl(h.h,h.s,h.l):d3_rgb_parse(""+h,d3_rgb_hsl,d3_hsl):d3_hsl(+
h,+s,+l)};function d3_hsl(h,s,l){return new d3_Hsl(h,s,l)}function
d3_Hsl(h,s,l){this.h=h;this.s=s;this.l=l}var
d3_hslPrototype=d3_Hsl.prototype=new
d3_Color;d3_hslPrototype.brighter=function(k){k=Math.pow(.7,arguments.
length?k:1);return
d3_hsl(this.h,this.s,this.l/k)};d3_hslPrototype.darker=function(k){k=
Math.pow(.7,arguments.length?k:1);return
d3_hsl(this.h,this.s,k*this.l)};d3_hslPrototype.rgb=function(){return
d3_hsl_rgb(this.h,this.s,this.l)};function d3_hsl_rgb(h,s,l){var
m1,m2;h=isNaN(h)?0:(h%=360)<0?h+360:h;s=isNaN(s)?0:s<0?0:s>1?1:s;l=l<0?0
:l>1?1:l;m2=l<=.5?l*(1+s):l+s-l*s;m1=2*l-m2;function
v(h){if(h>360)h-=360;else if(h<0)h+=360;if(h<60)return
m1+(m2-m1)*h/60;if(h<180)return m2;if(h<240)return
m1+(m2-m1)*(240-h)/60;return m1}function vv(h){return
Math.round(v(h)*255)}return
d3_rgb(vv(h+120),vv(h),vv(h-120))}d3.hcl=function(h,c,l){return
arguments.length===1?h instanceof d3_Hcl?d3_hcl(h.h,h.c,h.l):h
instanceof
d3_Lab?d3_lab_hcl(h.l,h.a,h.b):d3_lab_hcl((h=d3_rgb_lab((h=d3.rgb(h)).r,
h.g,h.b)).l,h.a,h.b):d3_hcl(+h,+c,+l)};function d3_hcl(h,c,l){return new
d3_Hcl(h,c,l)}function d3_Hcl(h,c,l){this.h=h;this.c=c;this.l=l}var
d3_hclPrototype=d3_Hcl.prototype=new
d3_Color;d3_hclPrototype.brighter=function(k){return
d3_hcl(this.h,this.c,Math.min(100,this.l+d3_lab_K*(arguments.length?k:1)
))};d3_hclPrototype.darker=function(k){return
d3_hcl(this.h,this.c,Math.max(0,this.l-d3_lab_K*(arguments.length?k:1)))
};d3_hclPrototype.rgb=function(){return
d3_hcl_lab(this.h,this.c,this.l).rgb()};function
d3_hcl_lab(h,c,l){if(isNaN(h))h=0;if(isNaN(c))c=0;return
d3_lab(l,Math.cos(h*=d3_radians)*c,Math.sin(h)*c)}d3.lab=function(l,a,b)
{return arguments.length===1?l instanceof d3_Lab?d3_lab(l.l,l.a,l.b):l
instanceof
d3_Hcl?d3_hcl_lab(l.l,l.c,l.h):d3_rgb_lab((l=d3.rgb(l)).r,l.g,l.b):
d3_lab(+l,+a,+b)};function d3_lab(l,a,b){return new
d3_Lab(l,a,b)}function d3_Lab(l,a,b){this.l=l;this.a=a;this.b=b}var
d3_lab_K=18;var d3_lab_X=.95047,d3_lab_Y=1,d3_lab_Z=1.08883;var
d3_labPrototype=d3_Lab.prototype=new
d3_Color;d3_labPrototype.brighter=function(k){return
d3_lab(Math.min(100,this.l+d3_lab_K*(arguments.length?k:1)),this.a,this.
b)};d3_labPrototype.darker=function(k){return
d3_lab(Math.max(0,this.l-d3_lab_K*(arguments.length?k:1)),this.a,this.b)
};d3_labPrototype.rgb=function(){return
d3_lab_rgb(this.l,this.a,this.b)};function d3_lab_rgb(l,a,b){var
y=(l+16)/116,x=y+a/500,z=y-b/200;x=d3_lab_xyz(x)*d3_lab_X;y=d3_lab_xyz(y
)*d3_lab_Y;z=d3_lab_xyz(z)*d3_lab_Z;return
d3_rgb(d3_xyz_rgb(3.2404542*x-1.5371385*y-.4985314*z),d3_xyz_rgb(-.
969266*x+1.8760108*y+.041556*z),d3_xyz_rgb(.0556434*x-.2040259*y+1.
0572252*z))}function d3_lab_hcl(l,a,b){return
l>0?d3_hcl(Math.atan2(b,a)*d3_degrees,Math.sqrt(a*a+b*b),l):d3_hcl(NaN,
NaN,l)}function d3_lab_xyz(x){return
x>.206893034?x*x*x:(x-4/29)/7.787037}function d3_xyz_lab(x){return
x>.008856?Math.pow(x,1/3):7.787037*x+4/29}function d3_xyz_rgb(r){return
Math.round(255*(r<=.00304?12.92*r:1.055*Math.pow(r,1/2.4)-.055))}d3.rgb=
function(r,g,b){return arguments.length===1?r instanceof
d3_Rgb?d3_rgb(r.r,r.g,r.b):d3_rgb_parse(""+r,d3_rgb,d3_hsl_rgb):d3_rgb(~
~r,~~g,~~b)};function d3_rgbNumber(value){return
d3_rgb(value>>16,value>>8&255,value&255)}function
d3_rgbString(value){return d3_rgbNumber(value)+""}function
d3_rgb(r,g,b){return new d3_Rgb(r,g,b)}function
d3_Rgb(r,g,b){this.r=r;this.g=g;this.b=b}var
d3_rgbPrototype=d3_Rgb.prototype=new
d3_Color;d3_rgbPrototype.brighter=function(k){k=Math.pow(.7,arguments.
length?k:1);var r=this.r,g=this.g,b=this.b,i=30;if(!r&&!g&&!b)return
d3_rgb(i,i,i);if(r&&r<i)r=i;if(g&&g<i)g=i;if(b&&b<i)b=i;return
d3_rgb(Math.min(255,~~(r/k)),Math.min(255,~~(g/k)),Math.min(255,~~(b/k))
)};d3_rgbPrototype.darker=function(k){k=Math.pow(.7,arguments.length?k:1
);return
d3_rgb(~~(k*this.r),~~(k*this.g),~~(k*this.b))};d3_rgbPrototype.hsl=
function(){return
d3_rgb_hsl(this.r,this.g,this.b)};d3_rgbPrototype.toString=function(){
return"#"+d3_rgb_hex(this.r)+d3_rgb_hex(this.g)+d3_rgb_hex(this.b)};
function d3_rgb_hex(v){return
v<16?"0"+Math.max(0,v).toString(16):Math.min(255,v).toString(16)}
function d3_rgb_parse(format,rgb,hsl){var
r=0,g=0,b=0,m1,m2,name;m1=/([a-z]+)\((.*)\)/i.exec(format);if(m1){m2=m1[
2].split(",");switch(m1[1]){case"hsl":{return
hsl(parseFloat(m2[0]),parseFloat(m2[1])/100,parseFloat(m2[2])/100)}case"
rgb":{return
rgb(d3_rgb_parseNumber(m2[0]),d3_rgb_parseNumber(m2[1]),
d3_rgb_parseNumber(m2[2]))}}}if(name=d3_rgb_names.get(format))return
rgb(name.r,name.g,name.b);if(format!=null&&format.charAt(0)==="#"){if(
format.length===4){r=format.charAt(1);r+=r;g=format.charAt(2);g+=g;b=
format.charAt(3);b+=b}else
if(format.length===7){r=format.substring(1,3);g=format.substring(3,5);b=
format.substring(5,7)}r=parseInt(r,16);g=parseInt(g,16);b=parseInt(b,16)
}return rgb(r,g,b)}function d3_rgb_hsl(r,g,b){var
min=Math.min(r/=255,g/=255,b/=255),max=Math.max(r,g,b),d=max-min,h,s,l=(
max+min)/2;if(d){s=l<.5?d/(max+min):d/(2-max-min);if(r==max)h=(g-b)/d+(g
<b?6:0);else if(g==max)h=(b-r)/d+2;else
h=(r-g)/d+4;h*=60}else{h=NaN;s=l>0&&l<1?0:h}return
d3_hsl(h,s,l)}function
d3_rgb_lab(r,g,b){r=d3_rgb_xyz(r);g=d3_rgb_xyz(g);b=d3_rgb_xyz(b);var
x=d3_xyz_lab((.4124564*r+.3575761*g+.1804375*b)/d3_lab_X),y=d3_xyz_lab((
.2126729*r+.7151522*g+.072175*b)/d3_lab_Y),z=d3_xyz_lab((.0193339*r+.
119192*g+.9503041*b)/d3_lab_Z);return
d3_lab(116*y-16,500*(x-y),200*(y-z))}function
d3_rgb_xyz(r){return(r/=255)<=.04045?r/12.92:Math.pow((r+.055)/1.055,2.4
)}function d3_rgb_parseNumber(c){var f=parseFloat(c);return
c.charAt(c.length-1)==="%"?Math.round(f*2.55):f}var
d3_rgb_names=d3.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535
,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:
0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,
burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:
13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson
:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,
darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,
darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,
darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:
9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:
3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,
deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,
firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:
16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:
14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,
honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,
ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,
lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:
15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:
13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,
lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,
lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,
lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta
:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,
mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,
mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,
mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,
mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,
oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,
orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:
10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:
16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,
powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,
royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:
16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:
12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:
7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,
teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:
15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:
16776960,yellowgreen:10145074});d3_rgb_names.forEach(function(key,value)
{d3_rgb_names.set(key,d3_rgbNumber(value))});function
d3_functor(v){return typeof v==="function"?v:function(){return
v}}d3.functor=d3_functor;function d3_identity(d){return
d}d3.xhr=d3_xhrType(d3_identity);function d3_xhrType(response){return
function(url,mimeType,callback){if(arguments.length===2&&typeof
mimeType==="function")callback=mimeType,mimeType=null;return
d3_xhr(url,mimeType,response,callback)}}function
d3_xhr(url,mimeType,response,callback){var
xhr={},dispatch=d3.dispatch("beforesend","progress","load","error"),
headers={},request=new
XMLHttpRequest,responseType=null;if(d3_window.XDomainRequest&&!("
withCredentials"in request)&&/^(http(s)?:)?\/\//.test(url))request=new
XDomainRequest;"onload"in
request?request.onload=request.onerror=respond:request.
onreadystatechange=function(){request.readyState>3&&respond()};function
respond(){var
status=request.status,result;if(!status&&request.responseText||status>=
200&&status<300||status===304){try{result=response.call(xhr,request)}
catch(e){dispatch.error.call(xhr,e);return}dispatch.load.call(xhr,result
)}else{dispatch.error.call(xhr,request)}}request.onprogress=function(
event){var
o=d3.event;d3.event=event;try{dispatch.progress.call(xhr,request)}
finally{d3.event=o}};xhr.header=function(name,value){name=(name+"").
toLowerCase();if(arguments.length<2)return
headers[name];if(value==null)delete headers[name];else
headers[name]=value+"";return
xhr};xhr.mimeType=function(value){if(!arguments.length)return
mimeType;mimeType=value==null?null:value+"";return
xhr};xhr.responseType=function(value){if(!arguments.length)return
responseType;responseType=value;return
xhr};xhr.response=function(value){response=value;return
xhr};["get","post"].forEach(function(method){xhr[method]=function(){
return
xhr.send.apply(xhr,[method].concat(d3_array(arguments)))}});xhr.send=
function(method,data,callback){if(arguments.length===2&&typeof
data==="function")callback=data,data=null;request.open(method,url,true);
if(mimeType!=null&&!("accept"in
headers))headers["accept"]=mimeType+",*/*";if(request.setRequestHeader)
for(var name in
headers)request.setRequestHeader(name,headers[name]);if(mimeType!=null&&
request.overrideMimeType)request.overrideMimeType(mimeType);if(
responseType!=null)request.responseType=responseType;if(callback!=null)
xhr.on("error",callback).on("load",function(request){callback(null,
request)});dispatch.beforesend.call(xhr,request);request.send(data==null
?null:data);return xhr};xhr.abort=function(){request.abort();return
xhr};d3.rebind(xhr,dispatch,"on");return
callback==null?xhr:xhr.get(d3_xhr_fixCallback(callback))}function
d3_xhr_fixCallback(callback){return
callback.length===1?function(error,request){callback(error==null?request
:null)}:callback}d3.dsv=function(delimiter,mimeType){var reFormat=new
RegExp('["'+delimiter+"\n]"),delimiterCode=delimiter.charCodeAt(0);
function
dsv(url,row,callback){if(arguments.length<3)callback=row,row=null;var
xhr=d3_xhr(url,mimeType,row==null?response:typedResponse(row),callback);
xhr.row=function(_){return
arguments.length?xhr.response((row=_)==null?response:typedResponse(_)):
row};return xhr}function response(request){return
dsv.parse(request.responseText)}function typedResponse(f){return
function(request){return
dsv.parse(request.responseText,f)}}dsv.parse=function(text,f){var
o;return dsv.parseRows(text,function(row,i){if(o)return o(row,i-1);var
a=new Function("d","return {"+row.map(function(name,i){return
JSON.stringify(name)+":
d["+i+"]"}).join(",")+"}");o=f?function(row,i){return
f(a(row),i)}:a})};dsv.parseRows=function(text,f){var
EOL={},EOF={},rows=[],N=text.length,I=0,n=0,t,eol;function
token(){if(I>=N)return EOF;if(eol)return eol=false,EOL;var
j=I;if(text.charCodeAt(j)===34){var
i=j;while(i++<N){if(text.charCodeAt(i)===34){if(text.charCodeAt(i+1)!==
34)break;++i}}I=i+2;var
c=text.charCodeAt(i+1);if(c===13){eol=true;if(text.charCodeAt(i+2)===10)
++I}else if(c===10){eol=true}return
text.substring(j+1,i).replace(/""/g,'"')}while(I<N){var
c=text.charCodeAt(I++),k=1;if(c===10)eol=true;else
if(c===13){eol=true;if(text.charCodeAt(I)===10)++I,++k}else
if(c!==delimiterCode)continue;return text.substring(j,I-k)}return
text.substring(j)}while((t=token())!==EOF){var
a=[];while(t!==EOL&&t!==EOF){a.push(t);t=token()}if(f&&!(a=f(a,n++)))
continue;rows.push(a)}return
rows};dsv.format=function(rows){if(Array.isArray(rows[0]))return
dsv.formatRows(rows);var fieldSet=new
d3_Set,fields=[];rows.forEach(function(row){for(var field in
row){if(!fieldSet.has(field)){fields.push(fieldSet.add(field))}}});
return[fields.map(formatValue).join(delimiter)].concat(rows.map(function
(row){return fields.map(function(field){return
formatValue(row[field])}).join(delimiter)})).join("\n")};dsv.formatRows=
function(rows){return rows.map(formatRow).join("\n")};function
formatRow(row){return row.map(formatValue).join(delimiter)}function
formatValue(text){return
reFormat.test(text)?'"'+text.replace(/\"/g,'""')+'"':text}return
dsv};d3.csv=d3.dsv(",","text/csv");d3.tsv=d3.dsv("	","text/tab-
separated-values");var
d3_timer_queueHead,d3_timer_queueTail,d3_timer_interval,d3_timer_timeout
,d3_timer_active,d3_timer_frame=d3_window[d3_vendorSymbol(d3_window,"
requestAnimationFrame")]||function(callback){setTimeout(callback,17)};d3
.timer=function(callback,delay,then){var
n=arguments.length;if(n<2)delay=0;if(n<3)then=Date.now();var
time=then+delay,timer={c:callback,t:time,f:false,n:null};if(
d3_timer_queueTail)d3_timer_queueTail.n=timer;else
d3_timer_queueHead=timer;d3_timer_queueTail=timer;if(!d3_timer_interval)
{d3_timer_timeout=clearTimeout(d3_timer_timeout);d3_timer_interval=1;
d3_timer_frame(d3_timer_step)}};function d3_timer_step(){var
now=d3_timer_mark(),delay=d3_timer_sweep()-now;if(delay>24){if(isFinite(
delay)){clearTimeout(d3_timer_timeout);d3_timer_timeout=setTimeout(
d3_timer_step,delay)}d3_timer_interval=0}else{d3_timer_interval=1;
d3_timer_frame(d3_timer_step)}}d3.timer.flush=function(){d3_timer_mark()
;d3_timer_sweep()};function d3_timer_mark(){var
now=Date.now();d3_timer_active=d3_timer_queueHead;while(d3_timer_active)
{if(now>=d3_timer_active.t)d3_timer_active.f=d3_timer_active.c(now-
d3_timer_active.t);d3_timer_active=d3_timer_active.n}return now}function
d3_timer_sweep(){var
t0,t1=d3_timer_queueHead,time=Infinity;while(t1){if(t1.f){t1=t0?t0.n=t1.
n:d3_timer_queueHead=t1.n}else{if(t1.t<time)time=t1.t;t1=(t0=t1).n}}
d3_timer_queueTail=t0;return time}var
d3_format_decimalPoint=".",d3_format_thousandsSeparator=",",
d3_format_grouping=[3,3],d3_format_currencySymbol="$";var
d3_formatPrefixes=["y","z","a","f","p","n","µ","m","","k","M","G","T","P
","E","Z","Y"].map(d3_formatPrefix);d3.formatPrefix=function(value,
precision){var
i=0;if(value){if(value<0)value*=-1;if(precision)value=d3.round(value,
d3_format_precision(value,precision));i=1+Math.floor(1e-12+Math.log(
value)/Math.LN10);i=Math.max(-24,Math.min(24,Math.floor((i<=0?i+1:i-1)/3
)*3))}return d3_formatPrefixes[8+i/3]};function d3_formatPrefix(d,i){var
k=Math.pow(10,abs(8-i)*3);return{scale:i>8?function(d){return
d/k}:function(d){return d*k},symbol:d}}d3.round=function(x,n){return
n?Math.round(x*(n=Math.pow(10,n)))/n:Math.round(x)};d3.format=function(
specifier){var match=d3_format_re.exec(specifier),fill=match[1]||"
",align=match[2]||">",sign=match[3]||"",symbol=match[4]||"",zfill=match[
5],width=+match[6],comma=match[7],precision=match[8],type=match[9],scale
=1,suffix="",integer=false;if(precision)precision=+precision.substring(1
);if(zfill||fill==="0"&&align==="="){zfill=fill="0";align="=";if(comma)
width-=Math.floor((width-1)/4)}switch(type){case"n":comma=true;type="g";
break;case"%":scale=100;suffix="%";type="f";break;case"p":scale=100;
suffix="%";type="r";break;case"b":case"o":case"x":case"X":if(symbol==="#
")symbol="0"+type.toLowerCase();case"c":case"d":integer=true;precision=0
;break;case"s":scale=-1;type="r";break}if(symbol==="#")symbol="";else
if(symbol==="$")symbol=d3_format_currencySymbol;if(type=="r"&&!precision
)type="g";if(precision!=null){if(type=="g")precision=Math.max(1,Math.min
(21,precision));else
if(type=="e"||type=="f")precision=Math.max(0,Math.min(20,precision))}
type=d3_format_types.get(type)||d3_format_typeDefault;var
zcomma=zfill&&comma;return
function(value){if(integer&&value%1)return"";var
negative=value<0||value===0&&1/value<0?(value=-value,"-"):sign;if(scale<
0){var
prefix=d3.formatPrefix(value,precision);value=prefix.scale(value);suffix
=prefix.symbol}else{value*=scale}value=type(value,precision);var
i=value.lastIndexOf("."),before=i<0?value:value.substring(0,i),after=i<0
?"":d3_format_decimalPoint+value.substring(i+1);if(!zfill&&comma)before=
d3_format_group(before);var
length=symbol.length+before.length+after.length+(zcomma?0:negative.
length),padding=length<width?new
Array(length=width-length+1).join(fill):"";if(zcomma)before=
d3_format_group(padding+before);negative+=symbol;value=before+after;
return(align==="<"?negative+value+padding:align===">"?padding+negative+
value:align==="^"?padding.substring(0,length>>=1)+negative+value+padding
.substring(length):negative+(zcomma?value:padding+value))+suffix}};var
d3_format_re=/(?:([^{])?([<>=^]))?([+\-
])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i;var
d3_format_types=d3.map({b:function(x){return
x.toString(2)},c:function(x){return
String.fromCharCode(x)},o:function(x){return
x.toString(8)},x:function(x){return x.toString(16)},X:function(x){return
x.toString(16).toUpperCase()},g:function(x,p){return
x.toPrecision(p)},e:function(x,p){return
x.toExponential(p)},f:function(x,p){return
x.toFixed(p)},r:function(x,p){return(x=d3.round(x,d3_format_precision(x,
p))).toFixed(Math.max(0,Math.min(20,d3_format_precision(x*(1+1e-15),p)))
)}});function d3_format_precision(x,p){return
p-(x?Math.ceil(Math.log(x)/Math.LN10):1)}function
d3_format_typeDefault(x){return x+""}var
d3_format_group=d3_identity;if(d3_format_grouping){var
d3_format_groupingLength=d3_format_grouping.length;d3_format_group=
function(value){var
i=value.length,t=[],j=0,g=d3_format_grouping[0];while(i>0&&g>0){t.push(
value.substring(i-=g,i+g));g=d3_format_grouping[j=(j+1)%
d3_format_groupingLength]}return
t.reverse().join(d3_format_thousandsSeparator)}}d3.geo={};function
d3_adder(){}d3_adder.prototype={s:0,t:0,add:function(y){d3_adderSum(y,
this.t,d3_adderTemp);d3_adderSum(d3_adderTemp.s,this.s,this);if(this.s)
this.t+=d3_adderTemp.t;else
this.s=d3_adderTemp.t},reset:function(){this.s=this.t=0},valueOf:
function(){return this.s}};var d3_adderTemp=new d3_adder;function
d3_adderSum(a,b,o){var
x=o.s=a+b,bv=x-a,av=x-bv;o.t=a-av+(b-bv)}d3.geo.stream=function(object,
listener){if(object&&d3_geo_streamObjectType.hasOwnProperty(object.type)
){d3_geo_streamObjectType[object.type](object,listener)}else{
d3_geo_streamGeometry(object,listener)}};function
d3_geo_streamGeometry(geometry,listener){if(geometry&&
d3_geo_streamGeometryType.hasOwnProperty(geometry.type)){
d3_geo_streamGeometryType[geometry.type](geometry,listener)}}var
d3_geo_streamObjectType={Feature:function(feature,listener){
d3_geo_streamGeometry(feature.geometry,listener)},FeatureCollection:
function(object,listener){var
features=object.features,i=-1,n=features.length;while(++i<n)
d3_geo_streamGeometry(features[i].geometry,listener)}};var
d3_geo_streamGeometryType={Sphere:function(object,listener){listener.
sphere()},Point:function(object,listener){object=object.coordinates;
listener.point(object[0],object[1],object[2])},MultiPoint:function(
object,listener){var
coordinates=object.coordinates,i=-1,n=coordinates.length;while(++i<n)
object=coordinates[i],listener.point(object[0],object[1],object[2])},
LineString:function(object,listener){d3_geo_streamLine(object.
coordinates,listener,0)},MultiLineString:function(object,listener){var
coordinates=object.coordinates,i=-1,n=coordinates.length;while(++i<n)
d3_geo_streamLine(coordinates[i],listener,0)},Polygon:function(object,
listener){d3_geo_streamPolygon(object.coordinates,listener)},
MultiPolygon:function(object,listener){var
coordinates=object.coordinates,i=-1,n=coordinates.length;while(++i<n)
d3_geo_streamPolygon(coordinates[i],listener)},GeometryCollection:
function(object,listener){var
geometries=object.geometries,i=-1,n=geometries.length;while(++i<n)
d3_geo_streamGeometry(geometries[i],listener)}};function
d3_geo_streamLine(coordinates,listener,closed){var
i=-1,n=coordinates.length-closed,coordinate;listener.lineStart();while(+
+i<n)coordinate=coordinates[i],listener.point(coordinate[0],coordinate[1
],coordinate[2]);listener.lineEnd()}function
d3_geo_streamPolygon(coordinates,listener){var
i=-1,n=coordinates.length;listener.polygonStart();while(++i<n)
d3_geo_streamLine(coordinates[i],listener,1);listener.polygonEnd()}d3.
geo.area=function(object){d3_geo_areaSum=0;d3.geo.stream(object,
d3_geo_area);return d3_geo_areaSum};var
d3_geo_areaSum,d3_geo_areaRingSum=new d3_adder;var
d3_geo_area={sphere:function(){d3_geo_areaSum+=4*π},point:d3_noop,
lineStart:d3_noop,lineEnd:d3_noop,polygonStart:function(){
d3_geo_areaRingSum.reset();d3_geo_area.lineStart=d3_geo_areaRingStart},
polygonEnd:function(){var
area=2*d3_geo_areaRingSum;d3_geo_areaSum+=area<0?4*π+area:area;
d3_geo_area.lineStart=d3_geo_area.lineEnd=d3_geo_area.point=d3_noop}};
function d3_geo_areaRingStart(){var
λ00,φ00,λ0,cosφ0,sinφ0;d3_geo_area.point=function(λ,φ){d3_geo_area.point
=nextPoint;λ0=(λ00=λ)*d3_radians,cosφ0=Math.cos(φ=(φ00=φ)*d3_radians/2+π
/4),sinφ0=Math.sin(φ)};function
nextPoint(λ,φ){λ*=d3_radians;φ=φ*d3_radians/2+π/4;var
dλ=λ-λ0,cosφ=Math.cos(φ),sinφ=Math.sin(φ),k=sinφ0*sinφ,u=cosφ0*cosφ+k*
Math.cos(dλ),v=k*Math.sin(dλ);d3_geo_areaRingSum.add(Math.atan2(v,u));λ0
=λ,cosφ0=cosφ,sinφ0=sinφ}d3_geo_area.lineEnd=function(){nextPoint(λ00,
φ00)}}function d3_geo_cartesian(spherical){var
λ=spherical[0],φ=spherical[1],cosφ=Math.cos(φ);return[cosφ*Math.cos(λ),
cosφ*Math.sin(λ),Math.sin(φ)]}function d3_geo_cartesianDot(a,b){return
a[0]*b[0]+a[1]*b[1]+a[2]*b[2]}function
d3_geo_cartesianCross(a,b){return[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2
],a[0]*b[1]-a[1]*b[0]]}function
d3_geo_cartesianAdd(a,b){a[0]+=b[0];a[1]+=b[1];a[2]+=b[2]}function
d3_geo_cartesianScale(vector,k){return[vector[0]*k,vector[1]*k,vector[2]
*k]}function d3_geo_cartesianNormalize(d){var
l=Math.sqrt(d[0]*d[0]+d[1]*d[1]+d[2]*d[2]);d[0]/=l;d[1]/=l;d[2]/=l}
function
d3_geo_spherical(cartesian){return[Math.atan2(cartesian[1],cartesian[0])
,d3_asin(cartesian[2])]}function d3_geo_sphericalEqual(a,b){return
abs(a[0]-b[0])<ε&&abs(a[1]-b[1])<ε}d3.geo.bounds=function(){var
λ0,φ0,λ1,φ1,λ_,λ__,φ__,p0,dλSum,ranges,range;var
bound={point:point,lineStart:lineStart,lineEnd:lineEnd,polygonStart:
function(){bound.point=ringPoint;bound.lineStart=ringStart;bound.lineEnd
=ringEnd;dλSum=0;d3_geo_area.polygonStart()},polygonEnd:function(){
d3_geo_area.polygonEnd();bound.point=point;bound.lineStart=lineStart;
bound.lineEnd=lineEnd;if(d3_geo_areaRingSum<0)λ0=-(λ1=180),φ0=-(φ1=90);
else if(dλSum>ε)φ1=90;else
if(dλSum<-ε)φ0=-90;range[0]=λ0,range[1]=λ1}};function
point(λ,φ){ranges.push(range=[λ0=λ,λ1=λ]);if(φ<φ0)φ0=φ;if(φ>φ1)φ1=φ}
function linePoint(λ,φ){var
p=d3_geo_cartesian([λ*d3_radians,φ*d3_radians]);if(p0){var
normal=d3_geo_cartesianCross(p0,p),equatorial=[normal[1],-normal[0],0],
inflection=d3_geo_cartesianCross(equatorial,normal);
d3_geo_cartesianNormalize(inflection);inflection=d3_geo_spherical(
inflection);var
dλ=λ-λ_,s=dλ>0?1:-1,λi=inflection[0]*d3_degrees*s,antimeridian=abs(dλ)>
180;if(antimeridian^(s*λ_<λi&&λi<s*λ)){var
φi=inflection[1]*d3_degrees;if(φi>φ1)φ1=φi}else
if(λi=(λi+360)%360-180,antimeridian^(s*λ_<λi&&λi<s*λ)){var
φi=-inflection[1]*d3_degrees;if(φi<φ0)φ0=φi}else{if(φ<φ0)φ0=φ;if(φ>φ1)φ1
=φ}if(antimeridian){if(λ<λ_){if(angle(λ0,λ)>angle(λ0,λ1))λ1=λ}else{if(
angle(λ,λ1)>angle(λ0,λ1))λ0=λ}}else{if(λ1>=λ0){if(λ<λ0)λ0=λ;if(λ>λ1)λ1=λ
}else{if(λ>λ_){if(angle(λ0,λ)>angle(λ0,λ1))λ1=λ}else{if(angle(λ,λ1)>
angle(λ0,λ1))λ0=λ}}}}else{point(λ,φ)}p0=p,λ_=λ}function
lineStart(){bound.point=linePoint}function
lineEnd(){range[0]=λ0,range[1]=λ1;bound.point=point;p0=null}function
ringPoint(λ,φ){if(p0){var
dλ=λ-λ_;dλSum+=abs(dλ)>180?dλ+(dλ>0?360:-360):dλ}else
λ__=λ,φ__=φ;d3_geo_area.point(λ,φ);linePoint(λ,φ)}function
ringStart(){d3_geo_area.lineStart()}function
ringEnd(){ringPoint(λ__,φ__);d3_geo_area.lineEnd();if(abs(dλSum)>ε)λ0=-(
λ1=180);range[0]=λ0,range[1]=λ1;p0=null}function
angle(λ0,λ1){return(λ1-=λ0)<0?λ1+360:λ1}function
compareRanges(a,b){return a[0]-b[0]}function withinRange(x,range){return
range[0]<=range[1]?range[0]<=x&&x<=range[1]:x<range[0]||range[1]<x}
return
function(feature){φ1=λ1=-(λ0=φ0=Infinity);ranges=[];d3.geo.stream(
feature,bound);var
n=ranges.length;if(n){ranges.sort(compareRanges);for(var
i=1,a=ranges[0],b,merged=[a];i<n;++i){b=ranges[i];if(withinRange(b[0],a)
||withinRange(b[1],a)){if(angle(a[0],b[1])>angle(a[0],a[1]))a[1]=b[1];if
(angle(b[0],a[1])>angle(a[0],a[1]))a[0]=b[0]}else{merged.push(a=b)}}var
best=-Infinity,dλ;for(var
n=merged.length-1,i=0,a=merged[n],b;i<=n;a=b,++i){b=merged[i];if((dλ=
angle(a[1],b[0]))>best)best=dλ,λ0=b[0],λ1=a[1]}}ranges=range=null;return
λ0===Infinity||φ0===Infinity?[[NaN,NaN],[NaN,NaN]]:[[λ0,φ0],[λ1,φ1]]}}()
;d3.geo.centroid=function(object){d3_geo_centroidW0=d3_geo_centroidW1=
d3_geo_centroidX0=d3_geo_centroidY0=d3_geo_centroidZ0=d3_geo_centroidX1=
d3_geo_centroidY1=d3_geo_centroidZ1=d3_geo_centroidX2=d3_geo_centroidY2=
d3_geo_centroidZ2=0; d3.geo.stream(object,d3_geo_centroid);var
x=d3_geo_centroidX2,y=d3_geo_centroidY2,z=d3_geo_centroidZ2,m=x*x+y*y+z*
z;if(m<ε2){x=d3_geo_centroidX1,y=d3_geo_centroidY1,z=d3_geo_centroidZ1;
if(d3_geo_centroidW1<ε)x=d3_geo_centroidX0,y=d3_geo_centroidY0,z=
d3_geo_centroidZ0;m=x*x+y*y+z*z;if(m<ε2)return[NaN,NaN]}return[Math.
atan2(y,x)*d3_degrees,d3_asin(z/Math.sqrt(m))*d3_degrees]};var
d3_geo_centroidW0,d3_geo_centroidW1,d3_geo_centroidX0,d3_geo_centroidY0,
d3_geo_centroidZ0,d3_geo_centroidX1,d3_geo_centroidY1,d3_geo_centroidZ1,
d3_geo_centroidX2,d3_geo_centroidY2,d3_geo_centroidZ2;var
d3_geo_centroid={sphere:d3_noop,point:d3_geo_centroidPoint,lineStart:
d3_geo_centroidLineStart,lineEnd:d3_geo_centroidLineEnd,polygonStart:
function(){d3_geo_centroid.lineStart=d3_geo_centroidRingStart},
polygonEnd:function(){d3_geo_centroid.lineStart=d3_geo_centroidLineStart
}};function d3_geo_centroidPoint(λ,φ){λ*=d3_radians;var
cosφ=Math.cos(φ*=d3_radians);d3_geo_centroidPointXYZ(cosφ*Math.cos(λ),
cosφ*Math.sin(λ),Math.sin(φ))}function
d3_geo_centroidPointXYZ(x,y,z){++d3_geo_centroidW0;d3_geo_centroidX0+=(x
-d3_geo_centroidX0)/d3_geo_centroidW0;d3_geo_centroidY0+=(y-
d3_geo_centroidY0)/d3_geo_centroidW0;d3_geo_centroidZ0+=(z-
d3_geo_centroidZ0)/d3_geo_centroidW0}function
d3_geo_centroidLineStart(){var
x0,y0,z0;d3_geo_centroid.point=function(λ,φ){λ*=d3_radians;var
cosφ=Math.cos(φ*=d3_radians);x0=cosφ*Math.cos(λ);y0=cosφ*Math.sin(λ);z0=
Math.sin(φ);d3_geo_centroid.point=nextPoint;d3_geo_centroidPointXYZ(x0,
y0,z0)};function nextPoint(λ,φ){λ*=d3_radians;var
cosφ=Math.cos(φ*=d3_radians),x=cosφ*Math.cos(λ),y=cosφ*Math.sin(λ),z=
Math.sin(φ),w=Math.atan2(Math.sqrt((w=y0*z-z0*y)*w+(w=z0*x-x0*z)*w+(w=x0
*y-y0*x)*w),x0*x+y0*y+z0*z);d3_geo_centroidW1+=w;d3_geo_centroidX1+=w*(
x0+(x0=x));d3_geo_centroidY1+=w*(y0+(y0=y));d3_geo_centroidZ1+=w*(z0+(z0
=z));d3_geo_centroidPointXYZ(x0,y0,z0)}}function
d3_geo_centroidLineEnd(){d3_geo_centroid.point=d3_geo_centroidPoint}
function d3_geo_centroidRingStart(){var
λ00,φ00,x0,y0,z0;d3_geo_centroid.point=function(λ,φ){λ00=λ,φ00=φ;
d3_geo_centroid.point=nextPoint;λ*=d3_radians;var
cosφ=Math.cos(φ*=d3_radians);x0=cosφ*Math.cos(λ);y0=cosφ*Math.sin(λ);z0=
Math.sin(φ);d3_geo_centroidPointXYZ(x0,y0,z0)};d3_geo_centroid.lineEnd=
function(){nextPoint(λ00,φ00);d3_geo_centroid.lineEnd=
d3_geo_centroidLineEnd;d3_geo_centroid.point=d3_geo_centroidPoint};
function nextPoint(λ,φ){λ*=d3_radians;var
cosφ=Math.cos(φ*=d3_radians),x=cosφ*Math.cos(λ),y=cosφ*Math.sin(λ),z=
Math.sin(φ),cx=y0*z-z0*y,cy=z0*x-x0*z,cz=x0*y-y0*x,m=Math.sqrt(cx*cx+cy*
cy+cz*cz),u=x0*x+y0*y+z0*z,v=m&&-d3_acos(u)/m,w=Math.atan2(m,u);
d3_geo_centroidX2+=v*cx;d3_geo_centroidY2+=v*cy;d3_geo_centroidZ2+=v*cz;
d3_geo_centroidW1+=w;d3_geo_centroidX1+=w*(x0+(x0=x));d3_geo_centroidY1+
=w*(y0+(y0=y));d3_geo_centroidZ1+=w*(z0+(z0=z));d3_geo_centroidPointXYZ(
x0,y0,z0)}}function d3_true(){return true}function
d3_geo_clipPolygon(segments,compare,clipStartInside,interpolate,listener
){var
subject=[],clip=[];segments.forEach(function(segment){if((n=segment.
length-1)<=0)return;var
n,p0=segment[0],p1=segment[n];if(d3_geo_sphericalEqual(p0,p1)){listener.
lineStart();for(var
i=0;i<n;++i)listener.point((p0=segment[i])[0],p0[1]);listener.lineEnd();
return}var a=new
d3_geo_clipPolygonIntersection(p0,segment,null,true),b=new
d3_geo_clipPolygonIntersection(p0,null,a,false);a.o=b;subject.push(a);
clip.push(b);a=new
d3_geo_clipPolygonIntersection(p1,segment,null,false);b=new
d3_geo_clipPolygonIntersection(p1,null,a,true);a.o=b;subject.push(a);
clip.push(b)});clip.sort(compare);d3_geo_clipPolygonLinkCircular(subject
);d3_geo_clipPolygonLinkCircular(clip);if(!subject.length)return;for(var
i=0,entry=clipStartInside,n=clip.length;i<n;++i){clip[i].e=entry=!entry}
var start=subject[0],points,point;while(1){var
current=start,isSubject=true;while(current.v)if((current=current.n)===
start)return;points=current.z;listener.lineStart();do{current.v=current.
o.v=true;if(current.e){if(isSubject){for(var
i=0,n=points.length;i<n;++i)listener.point((point=points[i])[0],point[1]
)}else{interpolate(current.x,current.n.x,1,listener)}current=current.n}
else{if(isSubject){points=current.p.z;for(var
i=points.length-1;i>=0;--i)listener.point((point=points[i])[0],point[1])
}else{interpolate(current.x,current.p.x,-1,listener)}current=current.p}
current=current.o;points=current.z;isSubject=!isSubject}while(!current.v
);listener.lineEnd()}}function
d3_geo_clipPolygonLinkCircular(array){if(!(n=array.length))return;var
n,i=0,a=array[0],b;while(++i<n){a.n=b=array[i];b.p=a;a=b}a.n=b=array[0];
b.p=a}function
d3_geo_clipPolygonIntersection(point,points,other,entry){this.x=point;
this.z=points;this.o=other;this.e=entry;this.v=false;this.n=this.p=null}
function d3_geo_clip(pointVisible,clipLine,interpolate,clipStart){return
function(rotate,listener){var
line=clipLine(listener),rotatedClipStart=rotate.invert(clipStart[0],
clipStart[1]);var
clip={point:point,lineStart:lineStart,lineEnd:lineEnd,polygonStart:
function(){clip.point=pointRing;clip.lineStart=ringStart;clip.lineEnd=
ringEnd;segments=[];polygon=[];listener.polygonStart()},polygonEnd:
function(){clip.point=point;clip.lineStart=lineStart;clip.lineEnd=
lineEnd;segments=d3.merge(segments);var
clipStartInside=d3_geo_pointInPolygon(rotatedClipStart,polygon);if(
segments.length){d3_geo_clipPolygon(segments,d3_geo_clipSort,
clipStartInside,interpolate,listener)}else
if(clipStartInside){listener.lineStart();interpolate(null,null,1,
listener);listener.lineEnd()}listener.polygonEnd();segments=polygon=null
},sphere:function(){listener.polygonStart();listener.lineStart();
interpolate(null,null,1,listener);listener.lineEnd();listener.polygonEnd
()}};function point(λ,φ){var
point=rotate(λ,φ);if(pointVisible(λ=point[0],φ=point[1]))listener.point(
λ,φ)}function pointLine(λ,φ){var
point=rotate(λ,φ);line.point(point[0],point[1])}function
lineStart(){clip.point=pointLine;line.lineStart()}function
lineEnd(){clip.point=point;line.lineEnd()}var segments;var
buffer=d3_geo_clipBufferListener(),ringListener=clipLine(buffer),polygon
,ring;function pointRing(λ,φ){ring.push([λ,φ]);var
point=rotate(λ,φ);ringListener.point(point[0],point[1])}function
ringStart(){ringListener.lineStart();ring=[]}function
ringEnd(){pointRing(ring[0][0],ring[0][1]);ringListener.lineEnd();var
clean=ringListener.clean(),ringSegments=buffer.buffer(),segment,n=
ringSegments.length;ring.pop();polygon.push(ring);ring=null;if(!n)return
;if(clean&1){segment=ringSegments[0];var
n=segment.length-1,i=-1,point;listener.lineStart();while(++i<n)listener.
point((point=segment[i])[0],point[1]);listener.lineEnd();return}if(n>1&&
clean&2)ringSegments.push(ringSegments.pop().concat(ringSegments.shift()
));segments.push(ringSegments.filter(d3_geo_clipSegmentLength1))}return
clip}}function d3_geo_clipSegmentLength1(segment){return
segment.length>1}function d3_geo_clipBufferListener(){var
lines=[],line;return{lineStart:function(){lines.push(line=[])},point:
function(λ,φ){line.push([λ,φ])},lineEnd:d3_noop,buffer:function(){var
buffer=lines;lines=[];line=null;return
buffer},rejoin:function(){if(lines.length>1)lines.push(lines.pop().
concat(lines.shift()))}}}function
d3_geo_clipSort(a,b){return((a=a.x)[0]<0?a[1]-halfπ-ε:halfπ-a[1])-((b=b.
x)[0]<0?b[1]-halfπ-ε:halfπ-b[1])}function
d3_geo_pointInPolygon(point,polygon){var
meridian=point[0],parallel=point[1],meridianNormal=[Math.sin(meridian),-
Math.cos(meridian),0],polarAngle=0,winding=0;d3_geo_areaRingSum.reset();
for(var i=0,n=polygon.length;i<n;++i){var
ring=polygon[i],m=ring.length;if(!m)continue;var
point0=ring[0],λ0=point0[0],φ0=point0[1]/2+π/4,sinφ0=Math.sin(φ0),cosφ0=
Math.cos(φ0),j=1;while(true){if(j===m)j=0;point=ring[j];var
λ=point[0],φ=point[1]/2+π/4,sinφ=Math.sin(φ),cosφ=Math.cos(φ),dλ=λ-λ0,
antimeridian=abs(dλ)>π,k=sinφ0*sinφ;d3_geo_areaRingSum.add(Math.atan2(k*
Math.sin(dλ),cosφ0*cosφ+k*Math.cos(dλ)));polarAngle+=antimeridian?dλ+(dλ
>=0?τ:-τ):dλ;if(antimeridian^λ0>=meridian^λ>=meridian){var
arc=d3_geo_cartesianCross(d3_geo_cartesian(point0),d3_geo_cartesian(
point));d3_geo_cartesianNormalize(arc);var
intersection=d3_geo_cartesianCross(meridianNormal,arc);
d3_geo_cartesianNormalize(intersection);var
φarc=(antimeridian^dλ>=0?-1:1)*d3_asin(intersection[2]);if(parallel>φarc
||parallel===φarc&&(arc[0]||arc[1])){winding+=antimeridian^dλ>=0?1:-1}}
if(!j++)break;λ0=λ,sinφ0=sinφ,cosφ0=cosφ,point0=point}}return(polarAngle
<-ε||polarAngle<ε&&d3_geo_areaRingSum<0)^winding&1}var
d3_geo_clipAntimeridian=d3_geo_clip(d3_true,d3_geo_clipAntimeridianLine,
d3_geo_clipAntimeridianInterpolate,[-π,-π/2]);function
d3_geo_clipAntimeridianLine(listener){var
λ0=NaN,φ0=NaN,sλ0=NaN,clean;return{lineStart:function(){listener.
lineStart();clean=1},point:function(λ1,φ1){var
sλ1=λ1>0?π:-π,dλ=abs(λ1-λ0);if(abs(dλ-π)<ε){listener.point(λ0,φ0=(φ0+φ1)
/2>0?halfπ:-halfπ);listener.point(sλ0,φ0);listener.lineEnd();listener.
lineStart();listener.point(sλ1,φ0);listener.point(λ1,φ0);clean=0}else
if(sλ0!==sλ1&&dλ>=π){if(abs(λ0-sλ0)<ε)λ0-=sλ0*ε;if(abs(λ1-sλ1)<ε)λ1-=sλ1
*ε;φ0=d3_geo_clipAntimeridianIntersect(λ0,φ0,λ1,φ1);listener.point(sλ0,
φ0);listener.lineEnd();listener.lineStart();listener.point(sλ1,φ0);clean
=0}listener.point(λ0=λ1,φ0=φ1);sλ0=sλ1},lineEnd:function(){listener.
lineEnd();λ0=φ0=NaN},clean:function(){return 2-clean}}}function
d3_geo_clipAntimeridianIntersect(λ0,φ0,λ1,φ1){var
cosφ0,cosφ1,sinλ0_λ1=Math.sin(λ0-λ1);return
abs(sinλ0_λ1)>ε?Math.atan((Math.sin(φ0)*(cosφ1=Math.cos(φ1))*Math.sin(λ1
)-Math.sin(φ1)*(cosφ0=Math.cos(φ0))*Math.sin(λ0))/(cosφ0*cosφ1*sinλ0_λ1)
):(φ0+φ1)/2}function
d3_geo_clipAntimeridianInterpolate(from,to,direction,listener){var
φ;if(from==null){φ=direction*halfπ;listener.point(-π,φ);listener.point(0
,φ);listener.point(π,φ);listener.point(π,0);listener.point(π,-φ);
listener.point(0,-φ);listener.point(-π,-φ);listener.point(-π,0);listener
.point(-π,φ)}else if(abs(from[0]-to[0])>ε){var
s=from[0]<to[0]?π:-π;φ=direction*s/2;listener.point(-s,φ);listener.point
(0,φ);listener.point(s,φ)}else{listener.point(to[0],to[1])}}function
d3_geo_clipCircle(radius){var
cr=Math.cos(radius),smallRadius=cr>0,notHemisphere=abs(cr)>ε,interpolate
=d3_geo_circleInterpolate(radius,6*d3_radians);return
d3_geo_clip(visible,clipLine,interpolate,smallRadius?[0,-radius]:[-π,
radius-π]);function visible(λ,φ){return
Math.cos(λ)*Math.cos(φ)>cr}function clipLine(listener){var
point0,c0,v0,v00,clean;return{lineStart:function(){v00=v0=false;clean=1}
,point:function(λ,φ){var
point1=[λ,φ],point2,v=visible(λ,φ),c=smallRadius?v?0:code(λ,φ):v?code(λ+
(λ<0?π:-π),φ):0;if(!point0&&(v00=v0=v))listener.lineStart();if(v!==v0){
point2=intersect(point0,point1);if(d3_geo_sphericalEqual(point0,point2)|
|d3_geo_sphericalEqual(point1,point2)){point1[0]+=ε;point1[1]+=ε;v=
visible(point1[0],point1[1])}}if(v!==v0){clean=0;if(v){listener.
lineStart();point2=intersect(point1,point0);listener.point(point2[0],
point2[1])}else{point2=intersect(point0,point1);listener.point(point2[0]
,point2[1]);listener.lineEnd()}point0=point2}else
if(notHemisphere&&point0&&smallRadius^v){var
t;if(!(c&c0)&&(t=intersect(point1,point0,true))){clean=0;if(smallRadius)
{listener.lineStart();listener.point(t[0][0],t[0][1]);listener.point(t[1
][0],t[1][1]);listener.lineEnd()}else{listener.point(t[1][0],t[1][1]);
listener.lineEnd();listener.lineStart();listener.point(t[0][0],t[0][1])}
}}if(v&&(!point0||!d3_geo_sphericalEqual(point0,point1))){listener.point
(point1[0],point1[1])}point0=point1,v0=v,c0=c},lineEnd:function(){if(v0)
listener.lineEnd();point0=null},clean:function(){return
clean|(v00&&v0)<<1}}}function intersect(a,b,two){var
pa=d3_geo_cartesian(a),pb=d3_geo_cartesian(b);var
n1=[1,0,0],n2=d3_geo_cartesianCross(pa,pb),n2n2=d3_geo_cartesianDot(n2,
n2),n1n2=n2[0],determinant=n2n2-n1n2*n1n2;if(!determinant)return!two&&a;
var
c1=cr*n2n2/determinant,c2=-cr*n1n2/determinant,n1xn2=
d3_geo_cartesianCross(n1,n2),A=d3_geo_cartesianScale(n1,c1),B=
d3_geo_cartesianScale(n2,c2);d3_geo_cartesianAdd(A,B);var
u=n1xn2,w=d3_geo_cartesianDot(A,u),uu=d3_geo_cartesianDot(u,u),t2=w*w-uu
*(d3_geo_cartesianDot(A,A)-1);if(t2<0)return;var
t=Math.sqrt(t2),q=d3_geo_cartesianScale(u,(-w-t)/uu);d3_geo_cartesianAdd
(q,A);q=d3_geo_spherical(q);if(!two)return q;var
λ0=a[0],λ1=b[0],φ0=a[1],φ1=b[1],z;if(λ1<λ0)z=λ0,λ0=λ1,λ1=z;var
δλ=λ1-λ0,polar=abs(δλ-π)<ε,meridian=polar||δλ<ε;if(!polar&&φ1<φ0)z=φ0,φ0
=φ1,φ1=z;if(meridian?polar?φ0+φ1>0^q[1]<(abs(q[0]-λ0)<ε?φ0:φ1):φ0<=q[1]&
&q[1]<=φ1:δλ>π^(λ0<=q[0]&&q[0]<=λ1)){var
q1=d3_geo_cartesianScale(u,(-w+t)/uu);d3_geo_cartesianAdd(q1,A);return[q
,d3_geo_spherical(q1)]}}function code(λ,φ){var
r=smallRadius?radius:π-radius,code=0;if(λ<-r)code|=1;else
if(λ>r)code|=2;if(φ<-r)code|=4;else if(φ>r)code|=8;return code}}function
d3_geom_clipLine(x0,y0,x1,y1){return function(line){var
a=line.a,b=line.b,ax=a.x,ay=a.y,bx=b.x,by=b.y,t0=0,t1=1,dx=bx-ax,dy=by-
ay,r;r=x0-ax;if(!dx&&r>0)return;r/=dx;if(dx<0){if(r<t0)return;if(r<t1)t1
=r}else
if(dx>0){if(r>t1)return;if(r>t0)t0=r}r=x1-ax;if(!dx&&r<0)return;r/=dx;if
(dx<0){if(r>t1)return;if(r>t0)t0=r}else
if(dx>0){if(r<t0)return;if(r<t1)t1=r}r=y0-ay;if(!dy&&r>0)return;r/=dy;if
(dy<0){if(r<t0)return;if(r<t1)t1=r}else
if(dy>0){if(r>t1)return;if(r>t0)t0=r}r=y1-ay;if(!dy&&r<0)return;r/=dy;if
(dy<0){if(r>t1)return;if(r>t0)t0=r}else
if(dy>0){if(r<t0)return;if(r<t1)t1=r}if(t0>0)line.a={x:ax+t0*dx,y:ay+t0*
dy};if(t1<1)line.b={x:ax+t1*dx,y:ay+t1*dy};return line}}var
d3_geo_clipExtentMAX=1e9;d3.geo.clipExtent=function(){var
x0,y0,x1,y1,stream,clip,clipExtent={stream:function(output){if(stream)
stream.valid=false;stream=clip(output);stream.valid=true;return
stream},extent:function(_){if(!arguments.length)return[[x0,y0],[x1,y1]];
clip=d3_geo_clipExtent(x0=+_[0][0],y0=+_[0][1],x1=+_[1][0],y1=+_[1][1]);
if(stream)stream.valid=false,stream=null;return clipExtent}};return
clipExtent.extent([[0,0],[960,500]])};function
d3_geo_clipExtent(x0,y0,x1,y1){return function(listener){var
listener_=listener,bufferListener=d3_geo_clipBufferListener(),clipLine=
d3_geom_clipLine(x0,y0,x1,y1),segments,polygon,ring;var
clip={point:point,lineStart:lineStart,lineEnd:lineEnd,polygonStart:
function(){listener=bufferListener;segments=[];polygon=[];clean=true},
polygonEnd:function(){listener=listener_;segments=d3.merge(segments);var
clipStartInside=insidePolygon([x0,y1]),inside=clean&&clipStartInside,
visible=segments.length;if(inside||visible){listener.polygonStart();if(
inside){listener.lineStart();interpolate(null,null,1,listener);listener.
lineEnd()}if(visible){d3_geo_clipPolygon(segments,compare,
clipStartInside,interpolate,listener)}listener.polygonEnd()}segments=
polygon=ring=null}};function insidePolygon(p){var
wn=0,n=polygon.length,y=p[1];for(var i=0;i<n;++i){for(var
j=1,v=polygon[i],m=v.length,a=v[0],b;j<m;++j){b=v[j];if(a[1]<=y){if(b[1]
>y&&isLeft(a,b,p)>0)++wn}else{if(b[1]<=y&&isLeft(a,b,p)<0)--wn}a=b}}
return wn!==0}function
isLeft(a,b,c){return(b[0]-a[0])*(c[1]-a[1])-(c[0]-a[0])*(b[1]-a[1])}
function interpolate(from,to,direction,listener){var
a=0,a1=0;if(from==null||(a=corner(from,direction))!==(a1=corner(to,
direction))||comparePoints(from,to)<0^direction>0){do{listener.point(a==
=0||a===3?x0:x1,a>1?y1:y0)}while((a=(a+direction+4)%4)!==a1)}else{
listener.point(to[0],to[1])}}function pointVisible(x,y){return
x0<=x&&x<=x1&&y0<=y&&y<=y1}function
point(x,y){if(pointVisible(x,y))listener.point(x,y)}var
x__,y__,v__,x_,y_,v_,first,clean;function
lineStart(){clip.point=linePoint;if(polygon)polygon.push(ring=[]);first=
true;v_=false;x_=y_=NaN}function
lineEnd(){if(segments){linePoint(x__,y__);if(v__&&v_)bufferListener.
rejoin();segments.push(bufferListener.buffer())}clip.point=point;if(v_)
listener.lineEnd()}function
linePoint(x,y){x=Math.max(-d3_geo_clipExtentMAX,Math.min(
d3_geo_clipExtentMAX,x));y=Math.max(-d3_geo_clipExtentMAX,Math.min(
d3_geo_clipExtentMAX,y));var
v=pointVisible(x,y);if(polygon)ring.push([x,y]);if(first){x__=x,y__=y,
v__=v;first=false;if(v){listener.lineStart();listener.point(x,y)}}else{
if(v&&v_)listener.point(x,y);else{var
l={a:{x:x_,y:y_},b:{x:x,y:y}};if(clipLine(l)){if(!v_){listener.lineStart
();listener.point(l.a.x,l.a.y)}listener.point(l.b.x,l.b.y);if(!v)
listener.lineEnd();clean=false}else
if(v){listener.lineStart();listener.point(x,y);clean=false}}}x_=x,y_=y,
v_=v}return clip};function corner(p,direction){return
abs(p[0]-x0)<ε?direction>0?0:3:abs(p[0]-x1)<ε?direction>0?2:1:abs(p[1]-
y0)<ε?direction>0?1:0:direction>0?3:2}function compare(a,b){return
comparePoints(a.x,b.x)}function comparePoints(a,b){var
ca=corner(a,1),cb=corner(b,1);return
ca!==cb?ca-cb:ca===0?b[1]-a[1]:ca===1?a[0]-b[0]:ca===2?a[1]-b[1]:b[0]-a[
0]}}function d3_geo_compose(a,b){function compose(x,y){return
x=a(x,y),b(x[0],x[1])}if(a.invert&&b.invert)compose.invert=function(x,y)
{return x=b.invert(x,y),x&&a.invert(x[0],x[1])};return compose}function
d3_geo_conic(projectAt){var
φ0=0,φ1=π/3,m=d3_geo_projectionMutator(projectAt),p=m(φ0,φ1);p.parallels
=function(_){if(!arguments.length)return[φ0/π*180,φ1/π*180];return
m(φ0=_[0]*π/180,φ1=_[1]*π/180)};return p}function
d3_geo_conicEqualArea(φ0,φ1){var
sinφ0=Math.sin(φ0),n=(sinφ0+Math.sin(φ1))/2,C=1+sinφ0*(2*n-sinφ0),ρ0=
Math.sqrt(C)/n;function forward(λ,φ){var
ρ=Math.sqrt(C-2*n*Math.sin(φ))/n;return[ρ*Math.sin(λ*=n),ρ0-ρ*Math.cos(λ
)]}forward.invert=function(x,y){var
ρ0_y=ρ0-y;return[Math.atan2(x,ρ0_y)/n,d3_asin((C-(x*x+ρ0_y*ρ0_y)*n*n)/(2
*n))]};return forward}(d3.geo.conicEqualArea=function(){return
d3_geo_conic(d3_geo_conicEqualArea)}).raw=d3_geo_conicEqualArea;d3.geo.
albers=function(){return
d3.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.
5,45.5]).scale(1070)};d3.geo.albersUsa=function(){var
lower48=d3.geo.albers();var
alaska=d3.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).
parallels([55,65]);var
hawaii=d3.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).
parallels([8,18]);var
point,pointStream={point:function(x,y){point=[x,y]}},lower48Point,
alaskaPoint,hawaiiPoint;function albersUsa(coordinates){var
x=coordinates[0],y=coordinates[1];point=null;(lower48Point(x,y),point)||
(alaskaPoint(x,y),point)||hawaiiPoint(x,y);return
point}albersUsa.invert=function(coordinates){var
k=lower48.scale(),t=lower48.translate(),x=(coordinates[0]-t[0])/k,y=(
coordinates[1]-t[1])/k;return(y>=.12&&y<.234&&x>=-.425&&x<-.214?alaska:y
>=.166&&y<.234&&x>=-.214&&x<-.115?hawaii:lower48).invert(coordinates)};
albersUsa.stream=function(stream){var
lower48Stream=lower48.stream(stream),alaskaStream=alaska.stream(stream),
hawaiiStream=hawaii.stream(stream);return{point:function(x,y){
lower48Stream.point(x,y);alaskaStream.point(x,y);hawaiiStream.point(x,y)
},sphere:function(){lower48Stream.sphere();alaskaStream.sphere();
hawaiiStream.sphere()},lineStart:function(){lower48Stream.lineStart();
alaskaStream.lineStart();hawaiiStream.lineStart()},lineEnd:function(){
lower48Stream.lineEnd();alaskaStream.lineEnd();hawaiiStream.lineEnd()},
polygonStart:function(){lower48Stream.polygonStart();alaskaStream.
polygonStart();hawaiiStream.polygonStart()},polygonEnd:function(){
lower48Stream.polygonEnd();alaskaStream.polygonEnd();hawaiiStream.
polygonEnd()}}};albersUsa.precision=function(_){if(!arguments.length)
return
lower48.precision();lower48.precision(_);alaska.precision(_);hawaii.
precision(_);return
albersUsa};albersUsa.scale=function(_){if(!arguments.length)return
lower48.scale();lower48.scale(_);alaska.scale(_*.35);hawaii.scale(_);
return
albersUsa.translate(lower48.translate())};albersUsa.translate=function(_
){if(!arguments.length)return lower48.translate();var
k=lower48.scale(),x=+_[0],y=+_[1];lower48Point=lower48.translate(_).
clipExtent([[x-.455*k,y-.238*k],[x+.455*k,y+.238*k]]).stream(pointStream
).point;alaskaPoint=alaska.translate([x-.307*k,y+.201*k]).clipExtent([[x
-.425*k+ε,y+.12*k+ε],[x-.214*k-ε,y+.234*k-ε]]).stream(pointStream).point
;hawaiiPoint=hawaii.translate([x-.205*k,y+.212*k]).clipExtent([[x-.214*k
+ε,y+.166*k+ε],[x-.115*k-ε,y+.234*k-ε]]).stream(pointStream).point;
return albersUsa};return albersUsa.scale(1070)};var
d3_geo_pathAreaSum,d3_geo_pathAreaPolygon,d3_geo_pathArea={point:d3_noop
,lineStart:d3_noop,lineEnd:d3_noop,polygonStart:function(){
d3_geo_pathAreaPolygon=0;d3_geo_pathArea.lineStart=
d3_geo_pathAreaRingStart},polygonEnd:function(){d3_geo_pathArea.
lineStart=d3_geo_pathArea.lineEnd=d3_geo_pathArea.point=d3_noop;
d3_geo_pathAreaSum+=abs(d3_geo_pathAreaPolygon/2)}};function
d3_geo_pathAreaRingStart(){var
x00,y00,x0,y0;d3_geo_pathArea.point=function(x,y){d3_geo_pathArea.point=
nextPoint;x00=x0=x,y00=y0=y};function
nextPoint(x,y){d3_geo_pathAreaPolygon+=y0*x-x0*y;x0=x,y0=y}
d3_geo_pathArea.lineEnd=function(){nextPoint(x00,y00)}}var
d3_geo_pathBoundsX0,d3_geo_pathBoundsY0,d3_geo_pathBoundsX1,
d3_geo_pathBoundsY1;var
d3_geo_pathBounds={point:d3_geo_pathBoundsPoint,lineStart:d3_noop,
lineEnd:d3_noop,polygonStart:d3_noop,polygonEnd:d3_noop};function
d3_geo_pathBoundsPoint(x,y){if(x<d3_geo_pathBoundsX0)d3_geo_pathBoundsX0
=x;if(x>d3_geo_pathBoundsX1)d3_geo_pathBoundsX1=x;if(y<
d3_geo_pathBoundsY0)d3_geo_pathBoundsY0=y;if(y>d3_geo_pathBoundsY1)
d3_geo_pathBoundsY1=y}function d3_geo_pathBuffer(){var
pointCircle=d3_geo_pathBufferCircle(4.5),buffer=[];var
stream={point:point,lineStart:function(){stream.point=pointLineStart},
lineEnd:lineEnd,polygonStart:function(){stream.lineEnd=lineEndPolygon},
polygonEnd:function(){stream.lineEnd=lineEnd;stream.point=point},
pointRadius:function(_){pointCircle=d3_geo_pathBufferCircle(_);return
stream},result:function(){if(buffer.length){var
result=buffer.join("");buffer=[];return result}}};function
point(x,y){buffer.push("M",x,",",y,pointCircle)}function
pointLineStart(x,y){buffer.push("M",x,",",y);stream.point=pointLine}
function pointLine(x,y){buffer.push("L",x,",",y)}function
lineEnd(){stream.point=point}function
lineEndPolygon(){buffer.push("Z")}return stream}function
d3_geo_pathBufferCircle(radius){return"m0,"+radius+"a"+radius+","+radius
+" 0 1,1 0,"+-2*radius+"a"+radius+","+radius+" 0 1,1
0,"+2*radius+"z"}var
d3_geo_pathCentroid={point:d3_geo_pathCentroidPoint,lineStart:
d3_geo_pathCentroidLineStart,lineEnd:d3_geo_pathCentroidLineEnd,
polygonStart:function(){d3_geo_pathCentroid.lineStart=
d3_geo_pathCentroidRingStart},polygonEnd:function(){d3_geo_pathCentroid.
point=d3_geo_pathCentroidPoint;d3_geo_pathCentroid.lineStart=
d3_geo_pathCentroidLineStart;d3_geo_pathCentroid.lineEnd=
d3_geo_pathCentroidLineEnd}};function
d3_geo_pathCentroidPoint(x,y){d3_geo_centroidX0+=x;d3_geo_centroidY0+=y;
++d3_geo_centroidZ0}function d3_geo_pathCentroidLineStart(){var
x0,y0;d3_geo_pathCentroid.point=function(x,y){d3_geo_pathCentroid.point=
nextPoint;d3_geo_pathCentroidPoint(x0=x,y0=y)};function
nextPoint(x,y){var
dx=x-x0,dy=y-y0,z=Math.sqrt(dx*dx+dy*dy);d3_geo_centroidX1+=z*(x0+x)/2;
d3_geo_centroidY1+=z*(y0+y)/2;d3_geo_centroidZ1+=z;
d3_geo_pathCentroidPoint(x0=x,y0=y)}}function
d3_geo_pathCentroidLineEnd(){d3_geo_pathCentroid.point=
d3_geo_pathCentroidPoint}function d3_geo_pathCentroidRingStart(){var
x00,y00,x0,y0;d3_geo_pathCentroid.point=function(x,y){
d3_geo_pathCentroid.point=nextPoint;d3_geo_pathCentroidPoint(x00=x0=x,
y00=y0=y)};function nextPoint(x,y){var
dx=x-x0,dy=y-y0,z=Math.sqrt(dx*dx+dy*dy);d3_geo_centroidX1+=z*(x0+x)/2;
d3_geo_centroidY1+=z*(y0+y)/2;d3_geo_centroidZ1+=z;z=y0*x-x0*y;
d3_geo_centroidX2+=z*(x0+x);d3_geo_centroidY2+=z*(y0+y);
d3_geo_centroidZ2+=z*3;d3_geo_pathCentroidPoint(x0=x,y0=y)}
d3_geo_pathCentroid.lineEnd=function(){nextPoint(x00,y00)}}function
d3_geo_pathContext(context){var pointRadius=4.5;var
stream={point:point,lineStart:function(){stream.point=pointLineStart},
lineEnd:lineEnd,polygonStart:function(){stream.lineEnd=lineEndPolygon},
polygonEnd:function(){stream.lineEnd=lineEnd;stream.point=point},
pointRadius:function(_){pointRadius=_;return
stream},result:d3_noop};function
point(x,y){context.moveTo(x,y);context.arc(x,y,pointRadius,0,τ)}function
pointLineStart(x,y){context.moveTo(x,y);stream.point=pointLine}function
pointLine(x,y){context.lineTo(x,y)}function
lineEnd(){stream.point=point}function
lineEndPolygon(){context.closePath()}return stream}function
d3_geo_resample(project){var
δ2=.5,cosMinDistance=Math.cos(30*d3_radians),maxDepth=16;function
resample(stream){return(maxDepth?resampleRecursive:resampleNone)(stream)
}function resampleNone(stream){return
d3_geo_transformPoint(stream,function(x,y){x=project(x,y);stream.point(x
[0],x[1])})}function resampleRecursive(stream){var
λ00,φ00,x00,y00,a00,b00,c00,λ0,x0,y0,a0,b0,c0;var
resample={point:point,lineStart:lineStart,lineEnd:lineEnd,polygonStart:
function(){stream.polygonStart();resample.lineStart=ringStart},
polygonEnd:function(){stream.polygonEnd();resample.lineStart=lineStart}}
;function point(x,y){x=project(x,y);stream.point(x[0],x[1])}function
lineStart(){x0=NaN;resample.point=linePoint;stream.lineStart()}function
linePoint(λ,φ){var
c=d3_geo_cartesian([λ,φ]),p=project(λ,φ);resampleLineTo(x0,y0,λ0,a0,b0,
c0,x0=p[0],y0=p[1],λ0=λ,a0=c[0],b0=c[1],c0=c[2],maxDepth,stream);stream.
point(x0,y0)}function
lineEnd(){resample.point=point;stream.lineEnd()}function
ringStart(){lineStart();resample.point=ringPoint;resample.lineEnd=
ringEnd}function
ringPoint(λ,φ){linePoint(λ00=λ,φ00=φ),x00=x0,y00=y0,a00=a0,b00=b0,c00=c0
;resample.point=linePoint}function
ringEnd(){resampleLineTo(x0,y0,λ0,a0,b0,c0,x00,y00,λ00,a00,b00,c00,
maxDepth,stream);resample.lineEnd=lineEnd;lineEnd()}return
resample}function
resampleLineTo(x0,y0,λ0,a0,b0,c0,x1,y1,λ1,a1,b1,c1,depth,stream){var
dx=x1-x0,dy=y1-y0,d2=dx*dx+dy*dy;if(d2>4*δ2&&depth--){var
a=a0+a1,b=b0+b1,c=c0+c1,m=Math.sqrt(a*a+b*b+c*c),φ2=Math.asin(c/=m),λ2=
abs(abs(c)-1)<ε||abs(λ0-λ1)<ε?(λ0+λ1)/2:Math.atan2(b,a),p=project(λ2,φ2)
,x2=p[0],y2=p[1],dx2=x2-x0,dy2=y2-y0,dz=dy*dx2-dx*dy2;if(dz*dz/d2>δ2||
abs((dx*dx2+dy*dy2)/d2-.5)>.3||a0*a1+b0*b1+c0*c1<cosMinDistance){
resampleLineTo(x0,y0,λ0,a0,b0,c0,x2,y2,λ2,a/=m,b/=m,c,depth,stream);
stream.point(x2,y2);resampleLineTo(x2,y2,λ2,a,b,c,x1,y1,λ1,a1,b1,c1,
depth,stream)}}}resample.precision=function(_){if(!arguments.length)
return Math.sqrt(δ2);maxDepth=(δ2=_*_)>0&&16;return resample};return
resample}d3.geo.path=function(){var
pointRadius=4.5,projection,context,projectStream,contextStream,
cacheStream;function path(object){if(object){if(typeof
pointRadius==="function")contextStream.pointRadius(+pointRadius.apply(
this,arguments));if(!cacheStream||!cacheStream.valid)cacheStream=
projectStream(contextStream);d3.geo.stream(object,cacheStream)}return
contextStream.result()}path.area=function(object){d3_geo_pathAreaSum=0;
d3.geo.stream(object,projectStream(d3_geo_pathArea));return
d3_geo_pathAreaSum};path.centroid=function(object){d3_geo_centroidX0=
d3_geo_centroidY0=d3_geo_centroidZ0=d3_geo_centroidX1=d3_geo_centroidY1=
d3_geo_centroidZ1=d3_geo_centroidX2=d3_geo_centroidY2=d3_geo_centroidZ2=
0;d3.geo.stream(object,projectStream(d3_geo_pathCentroid));return
d3_geo_centroidZ2?[d3_geo_centroidX2/d3_geo_centroidZ2,d3_geo_centroidY2
/d3_geo_centroidZ2]:d3_geo_centroidZ1?[d3_geo_centroidX1/
d3_geo_centroidZ1,d3_geo_centroidY1/d3_geo_centroidZ1]:d3_geo_centroidZ0
?[d3_geo_centroidX0/d3_geo_centroidZ0,d3_geo_centroidY0/
d3_geo_centroidZ0]:[NaN,NaN]};path.bounds=function(object){
d3_geo_pathBoundsX1=d3_geo_pathBoundsY1=-(d3_geo_pathBoundsX0=
d3_geo_pathBoundsY0=Infinity);d3.geo.stream(object,projectStream(
d3_geo_pathBounds));return[[d3_geo_pathBoundsX0,d3_geo_pathBoundsY0],[
d3_geo_pathBoundsX1,d3_geo_pathBoundsY1]]};path.projection=function(_){
if(!arguments.length)return
projection;projectStream=(projection=_)?_.stream||
d3_geo_pathProjectStream(_):d3_identity;return
reset()};path.context=function(_){if(!arguments.length)return
context;contextStream=(context=_)==null?new d3_geo_pathBuffer:new
d3_geo_pathContext(_);if(typeof
pointRadius!=="function")contextStream.pointRadius(pointRadius);return
reset()};path.pointRadius=function(_){if(!arguments.length)return
pointRadius;pointRadius=typeof
_==="function"?_:(contextStream.pointRadius(+_),+_);return
path};function reset(){cacheStream=null;return path}return
path.projection(d3.geo.albersUsa()).context(null)};function
d3_geo_pathProjectStream(project){var
resample=d3_geo_resample(function(x,y){return
project([x*d3_degrees,y*d3_degrees])});return function(stream){return
d3_geo_projectionRadians(resample(stream))}}d3.geo.transform=function(
methods){return{stream:function(stream){var transform=new
d3_geo_transform(stream);for(var k in
methods)transform[k]=methods[k];return transform}}};function
d3_geo_transform(stream){this.stream=stream}d3_geo_transform.prototype={
point:function(x,y){this.stream.point(x,y)},sphere:function(){this.
stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:
function(){this.stream.lineEnd()},polygonStart:function(){this.stream.
polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};
function
d3_geo_transformPoint(stream,point){return{point:point,sphere:function()
{stream.sphere()},lineStart:function(){stream.lineStart()},lineEnd:
function(){stream.lineEnd()},polygonStart:function(){stream.polygonStart
()},polygonEnd:function(){stream.polygonEnd()}}}d3.geo.projection=
d3_geo_projection;d3.geo.projectionMutator=d3_geo_projectionMutator;
function d3_geo_projection(project){return
d3_geo_projectionMutator(function(){return project})()}function
d3_geo_projectionMutator(projectAt){var
project,rotate,projectRotate,projectResample=d3_geo_resample(function(x,
y){x=project(x,y);return[x[0]*k+δx,δy-x[1]*k]}),k=150,x=480,y=250,λ=0,φ=
0,δλ=0,δφ=0,δγ=0,δx,δy,preclip=d3_geo_clipAntimeridian,postclip=
d3_identity,clipAngle=null,clipExtent=null,stream;function
projection(point){point=projectRotate(point[0]*d3_radians,point[1]*
d3_radians);return[point[0]*k+δx,δy-point[1]*k]}function
invert(point){point=projectRotate.invert((point[0]-δx)/k,(δy-point[1])/k
);return
point&&[point[0]*d3_degrees,point[1]*d3_degrees]}projection.stream=
function(output){if(stream)stream.valid=false;stream=
d3_geo_projectionRadians(preclip(rotate,projectResample(postclip(output)
)));stream.valid=true;return
stream};projection.clipAngle=function(_){if(!arguments.length)return
clipAngle;preclip=_==null?(clipAngle=_,d3_geo_clipAntimeridian):
d3_geo_clipCircle((clipAngle=+_)*d3_radians);return
invalidate()};projection.clipExtent=function(_){if(!arguments.length)
return
clipExtent;clipExtent=_;postclip=_?d3_geo_clipExtent(_[0][0],_[0][1],_[1
][0],_[1][1]):d3_identity;return
invalidate()};projection.scale=function(_){if(!arguments.length)return
k;k=+_;return
reset()};projection.translate=function(_){if(!arguments.length)return[x,
y];x=+_[0];y=+_[1];return
reset()};projection.center=function(_){if(!arguments.length)return[λ*
d3_degrees,φ*d3_degrees];λ=_[0]%360*d3_radians;φ=_[1]%360*d3_radians;
return
reset()};projection.rotate=function(_){if(!arguments.length)return[δλ*
d3_degrees,δφ*d3_degrees,δγ*d3_degrees];δλ=_[0]%360*d3_radians;δφ=_[1]%
360*d3_radians;δγ=_.length>2?_[2]%360*d3_radians:0;return
reset()};d3.rebind(projection,projectResample,"precision");function
reset(){projectRotate=d3_geo_compose(rotate=d3_geo_rotation(δλ,δφ,δγ),
project);var
center=project(λ,φ);δx=x-center[0]*k;δy=y+center[1]*k;return
invalidate()}function
invalidate(){if(stream)stream.valid=false,stream=null;return
projection}return
function(){project=projectAt.apply(this,arguments);projection.invert=
project.invert&&invert;return reset()}}function
d3_geo_projectionRadians(stream){return
d3_geo_transformPoint(stream,function(x,y){stream.point(x*d3_radians,y*
d3_radians)})}function
d3_geo_equirectangular(λ,φ){return[λ,φ]}(d3.geo.equirectangular=function
(){return
d3_geo_projection(d3_geo_equirectangular)}).raw=d3_geo_equirectangular.
invert=d3_geo_equirectangular;d3.geo.rotation=function(rotate){rotate=
d3_geo_rotation(rotate[0]%360*d3_radians,rotate[1]*d3_radians,rotate.
length>2?rotate[2]*d3_radians:0);function
forward(coordinates){coordinates=rotate(coordinates[0]*d3_radians,
coordinates[1]*d3_radians);return
coordinates[0]*=d3_degrees,coordinates[1]*=d3_degrees,coordinates}
forward.invert=function(coordinates){coordinates=rotate.invert(
coordinates[0]*d3_radians,coordinates[1]*d3_radians);return
coordinates[0]*=d3_degrees,coordinates[1]*=d3_degrees,coordinates};
return forward};function
d3_geo_identityRotation(λ,φ){return[λ>π?λ-τ:λ<-π?λ+τ:λ,φ]}
d3_geo_identityRotation.invert=d3_geo_equirectangular; function
d3_geo_rotation(δλ,δφ,δγ){return
δλ?δφ||δγ?d3_geo_compose(d3_geo_rotationλ(δλ),d3_geo_rotationφγ(δφ,δγ)):
d3_geo_rotationλ(δλ):δφ||δγ?d3_geo_rotationφγ(δφ,δγ):
d3_geo_identityRotation}function d3_geo_forwardRotationλ(δλ){return
function(λ,φ){return λ+=δλ,[λ>π?λ-τ:λ<-π?λ+τ:λ,φ]}}function
d3_geo_rotationλ(δλ){var
rotation=d3_geo_forwardRotationλ(δλ);rotation.invert=
d3_geo_forwardRotationλ(-δλ);return rotation}function
d3_geo_rotationφγ(δφ,δγ){var
cosδφ=Math.cos(δφ),sinδφ=Math.sin(δφ),cosδγ=Math.cos(δγ),sinδγ=Math.sin(
δγ);function rotation(λ,φ){var
cosφ=Math.cos(φ),x=Math.cos(λ)*cosφ,y=Math.sin(λ)*cosφ,z=Math.sin(φ),k=z
*cosδφ+x*sinδφ;return[Math.atan2(y*cosδγ-k*sinδγ,x*cosδφ-z*sinδφ),
d3_asin(k*cosδγ+y*sinδγ)]}rotation.invert=function(λ,φ){var
cosφ=Math.cos(φ),x=Math.cos(λ)*cosφ,y=Math.sin(λ)*cosφ,z=Math.sin(φ),k=z
*cosδγ-y*sinδγ;return[Math.atan2(y*cosδγ+z*sinδγ,x*cosδφ+k*sinδφ),
d3_asin(k*cosδφ-x*sinδφ)]};return rotation}d3.geo.circle=function(){var
origin=[0,0],angle,precision=6,interpolate;function circle(){var
center=typeof
origin==="function"?origin.apply(this,arguments):origin,rotate=
d3_geo_rotation(-center[0]*d3_radians,-center[1]*d3_radians,0).invert,
ring=[];interpolate(null,null,1,{point:function(x,y){ring.push(x=rotate(
x,y));x[0]*=d3_degrees,x[1]*=d3_degrees}});return{type:"Polygon",
coordinates:[ring]}}circle.origin=function(x){if(!arguments.length)
return origin;origin=x;return
circle};circle.angle=function(x){if(!arguments.length)return
angle;interpolate=d3_geo_circleInterpolate((angle=+x)*d3_radians,
precision*d3_radians);return
circle};circle.precision=function(_){if(!arguments.length)return
precision;interpolate=d3_geo_circleInterpolate(angle*d3_radians,(
precision=+_)*d3_radians);return circle};return
circle.angle(90)};function
d3_geo_circleInterpolate(radius,precision){var
cr=Math.cos(radius),sr=Math.sin(radius);return
function(from,to,direction,listener){var
step=direction*precision;if(from!=null){from=d3_geo_circleAngle(cr,from)
;to=d3_geo_circleAngle(cr,to);if(direction>0?from<to:from>to)from+=
direction*τ}else{from=radius+direction*τ;to=radius-.5*step}for(var
point,t=from;direction>0?t>to:t<to;t-=step){listener.point((point=
d3_geo_spherical([cr,-sr*Math.cos(t),-sr*Math.sin(t)]))[0],point[1])}}}
function d3_geo_circleAngle(cr,point){var
a=d3_geo_cartesian(point);a[0]-=cr;d3_geo_cartesianNormalize(a);var
angle=d3_acos(-a[1]);return((-a[2]<0?-angle:angle)+2*Math.PI-ε)%(2*Math.
PI)}d3.geo.distance=function(a,b){var
Δλ=(b[0]-a[0])*d3_radians,φ0=a[1]*d3_radians,φ1=b[1]*d3_radians,sinΔλ=
Math.sin(Δλ),cosΔλ=Math.cos(Δλ),sinφ0=Math.sin(φ0),cosφ0=Math.cos(φ0),
sinφ1=Math.sin(φ1),cosφ1=Math.cos(φ1),t;return
Math.atan2(Math.sqrt((t=cosφ1*sinΔλ)*t+(t=cosφ0*sinφ1-sinφ0*cosφ1*cosΔλ)
*t),sinφ0*sinφ1+cosφ0*cosφ1*cosΔλ)};d3.geo.graticule=function(){var
x1,x0,X1,X0,y1,y0,Y1,Y0,dx=10,dy=dx,DX=90,DY=360,x,y,X,Y,precision=2.5;
function
graticule(){return{type:"MultiLineString",coordinates:lines()}}function
lines(){return
d3.range(Math.ceil(X0/DX)*DX,X1,DX).map(X).concat(d3.range(Math.ceil(Y0/
DY)*DY,Y1,DY).map(Y)).concat(d3.range(Math.ceil(x0/dx)*dx,x1,dx).filter(
function(x){return
abs(x%DX)>ε}).map(x)).concat(d3.range(Math.ceil(y0/dy)*dy,y1,dy).filter(
function(y){return
abs(y%DY)>ε}).map(y))}graticule.lines=function(){return
lines().map(function(coordinates){return{type:"LineString",coordinates:
coordinates}})};graticule.outline=function(){return{type:"Polygon",
coordinates:[X(X0).concat(Y(Y1).slice(1),X(X1).reverse().slice(1),Y(Y0).
reverse().slice(1))]}};graticule.extent=function(_){if(!arguments.length
)return graticule.minorExtent();return
graticule.majorExtent(_).minorExtent(_)};graticule.majorExtent=function(
_){if(!arguments.length)return[[X0,Y0],[X1,Y1]];X0=+_[0][0],X1=+_[1][0];
Y0=+_[0][1],Y1=+_[1][1];if(X0>X1)_=X0,X0=X1,X1=_;if(Y0>Y1)_=Y0,Y0=Y1,Y1=
_;return
graticule.precision(precision)};graticule.minorExtent=function(_){if(!
arguments.length)return[[x0,y0],[x1,y1]];x0=+_[0][0],x1=+_[1][0];y0=+_[0
][1],y1=+_[1][1];if(x0>x1)_=x0,x0=x1,x1=_;if(y0>y1)_=y0,y0=y1,y1=_;
return
graticule.precision(precision)};graticule.step=function(_){if(!arguments
.length)return graticule.minorStep();return
graticule.majorStep(_).minorStep(_)};graticule.majorStep=function(_){if(
!arguments.length)return[DX,DY];DX=+_[0],DY=+_[1];return
graticule};graticule.minorStep=function(_){if(!arguments.length)return[
dx,dy];dx=+_[0],dy=+_[1];return
graticule};graticule.precision=function(_){if(!arguments.length)return
precision;precision=+_;x=d3_geo_graticuleX(y0,y1,90);y=d3_geo_graticuleY
(x0,x1,precision);X=d3_geo_graticuleX(Y0,Y1,90);Y=d3_geo_graticuleY(X0,
X1,precision);return graticule};return
graticule.majorExtent([[-180,-90+ε],[180,90-ε]]).minorExtent([[-180,-80-
ε],[180,80+ε]])};function d3_geo_graticuleX(y0,y1,dy){var
y=d3.range(y0,y1-ε,dy).concat(y1);return function(x){return
y.map(function(y){return[x,y]})}}function
d3_geo_graticuleY(x0,x1,dx){var x=d3.range(x0,x1-ε,dx).concat(x1);return
function(y){return x.map(function(x){return[x,y]})}}function
d3_source(d){return d.source}function d3_target(d){return
d.target}d3.geo.greatArc=function(){var
source=d3_source,source_,target=d3_target,target_;function
greatArc(){return{type:"LineString",coordinates:[source_||source.apply(
this,arguments),target_||target.apply(this,arguments)]}}greatArc.
distance=function(){return
d3.geo.distance(source_||source.apply(this,arguments),target_||target.
apply(this,arguments))};greatArc.source=function(_){if(!arguments.length
)return source;source=_,source_=typeof _==="function"?null:_;return
greatArc};greatArc.target=function(_){if(!arguments.length)return
target;target=_,target_=typeof _==="function"?null:_;return
greatArc};greatArc.precision=function(){return
arguments.length?greatArc:0};return
greatArc};d3.geo.interpolate=function(source,target){return
d3_geo_interpolate(source[0]*d3_radians,source[1]*d3_radians,target[0]*
d3_radians,target[1]*d3_radians)};function
d3_geo_interpolate(x0,y0,x1,y1){var
cy0=Math.cos(y0),sy0=Math.sin(y0),cy1=Math.cos(y1),sy1=Math.sin(y1),kx0=
cy0*Math.cos(x0),ky0=cy0*Math.sin(x0),kx1=cy1*Math.cos(x1),ky1=cy1*Math.
sin(x1),d=2*Math.asin(Math.sqrt(d3_haversin(y1-y0)+cy0*cy1*d3_haversin(
x1-x0))),k=1/Math.sin(d);var interpolate=d?function(t){var
B=Math.sin(t*=d)*k,A=Math.sin(d-t)*k,x=A*kx0+B*kx1,y=A*ky0+B*ky1,z=A*sy0
+B*sy1;return[Math.atan2(y,x)*d3_degrees,Math.atan2(z,Math.sqrt(x*x+y*y)
)*d3_degrees]}:function(){return[x0*d3_degrees,y0*d3_degrees]};
interpolate.distance=d;return
interpolate}d3.geo.length=function(object){d3_geo_lengthSum=0;d3.geo.
stream(object,d3_geo_length);return d3_geo_lengthSum};var
d3_geo_lengthSum;var
d3_geo_length={sphere:d3_noop,point:d3_noop,lineStart:
d3_geo_lengthLineStart,lineEnd:d3_noop,polygonStart:d3_noop,polygonEnd:
d3_noop};function d3_geo_lengthLineStart(){var
λ0,sinφ0,cosφ0;d3_geo_length.point=function(λ,φ){λ0=λ*d3_radians,sinφ0=
Math.sin(φ*=d3_radians),cosφ0=Math.cos(φ);d3_geo_length.point=nextPoint}
;d3_geo_length.lineEnd=function(){d3_geo_length.point=d3_geo_length.
lineEnd=d3_noop};function nextPoint(λ,φ){var
sinφ=Math.sin(φ*=d3_radians),cosφ=Math.cos(φ),t=abs((λ*=d3_radians)-λ0),
cosΔλ=Math.cos(t);d3_geo_lengthSum+=Math.atan2(Math.sqrt((t=cosφ*Math.
sin(t))*t+(t=cosφ0*sinφ-sinφ0*cosφ*cosΔλ)*t),sinφ0*sinφ+cosφ0*cosφ*cosΔλ
);λ0=λ,sinφ0=sinφ,cosφ0=cosφ}}function
d3_geo_azimuthal(scale,angle){function azimuthal(λ,φ){var
cosλ=Math.cos(λ),cosφ=Math.cos(φ),k=scale(cosλ*cosφ);return[k*cosφ*Math.
sin(λ),k*Math.sin(φ)]}azimuthal.invert=function(x,y){var
ρ=Math.sqrt(x*x+y*y),c=angle(ρ),sinc=Math.sin(c),cosc=Math.cos(c);return
[Math.atan2(x*sinc,ρ*cosc),Math.asin(ρ&&y*sinc/ρ)]};return azimuthal}var
d3_geo_azimuthalEqualArea=d3_geo_azimuthal(function(cosλcosφ){return
Math.sqrt(2/(1+cosλcosφ))},function(ρ){return
2*Math.asin(ρ/2)});(d3.geo.azimuthalEqualArea=function(){return
d3_geo_projection(d3_geo_azimuthalEqualArea)}).raw=
d3_geo_azimuthalEqualArea;var
d3_geo_azimuthalEquidistant=d3_geo_azimuthal(function(cosλcosφ){var
c=Math.acos(cosλcosφ);return
c&&c/Math.sin(c)},d3_identity);(d3.geo.azimuthalEquidistant=function(){
return
d3_geo_projection(d3_geo_azimuthalEquidistant)}).raw=
d3_geo_azimuthalEquidistant;function d3_geo_conicConformal(φ0,φ1){var
cosφ0=Math.cos(φ0),t=function(φ){return
Math.tan(π/4+φ/2)},n=φ0===φ1?Math.sin(φ0):Math.log(cosφ0/Math.cos(φ1))/
Math.log(t(φ1)/t(φ0)),F=cosφ0*Math.pow(t(φ0),n)/n;if(!n)return
d3_geo_mercator;function forward(λ,φ){var
ρ=abs(abs(φ)-halfπ)<ε?0:F/Math.pow(t(φ),n);return[ρ*Math.sin(n*λ),F-ρ*
Math.cos(n*λ)]}forward.invert=function(x,y){var
ρ0_y=F-y,ρ=d3_sgn(n)*Math.sqrt(x*x+ρ0_y*ρ0_y);return[Math.atan2(x,ρ0_y)/
n,2*Math.atan(Math.pow(F/ρ,1/n))-halfπ]};return
forward}(d3.geo.conicConformal=function(){return
d3_geo_conic(d3_geo_conicConformal)}).raw=d3_geo_conicConformal;function
d3_geo_conicEquidistant(φ0,φ1){var
cosφ0=Math.cos(φ0),n=φ0===φ1?Math.sin(φ0):(cosφ0-Math.cos(φ1))/(φ1-φ0),G
=cosφ0/n+φ0;if(abs(n)<ε)return d3_geo_equirectangular;function
forward(λ,φ){var
ρ=G-φ;return[ρ*Math.sin(n*λ),G-ρ*Math.cos(n*λ)]}forward.invert=function(
x,y){var
ρ0_y=G-y;return[Math.atan2(x,ρ0_y)/n,G-d3_sgn(n)*Math.sqrt(x*x+ρ0_y*ρ0_y
)]};return forward}(d3.geo.conicEquidistant=function(){return
d3_geo_conic(d3_geo_conicEquidistant)}).raw=d3_geo_conicEquidistant;var
d3_geo_gnomonic=d3_geo_azimuthal(function(cosλcosφ){return
1/cosλcosφ},Math.atan);(d3.geo.gnomonic=function(){return
d3_geo_projection(d3_geo_gnomonic)}).raw=d3_geo_gnomonic;function
d3_geo_mercator(λ,φ){return[λ,Math.log(Math.tan(π/4+φ/2))]}
d3_geo_mercator.invert=function(x,y){return[x,2*Math.atan(Math.exp(y))-
halfπ]};function d3_geo_mercatorProjection(project){var
m=d3_geo_projection(project),scale=m.scale,translate=m.translate,
clipExtent=m.clipExtent,clipAuto;m.scale=function(){var
v=scale.apply(m,arguments);return
v===m?clipAuto?m.clipExtent(null):m:v};m.translate=function(){var
v=translate.apply(m,arguments);return
v===m?clipAuto?m.clipExtent(null):m:v};m.clipExtent=function(_){var
v=clipExtent.apply(m,arguments);if(v===m){if(clipAuto=_==null){var
k=π*scale(),t=translate();clipExtent([[t[0]-k,t[1]-k],[t[0]+k,t[1]+k]])}
}else if(clipAuto){v=null}return v};return
m.clipExtent(null)}(d3.geo.mercator=function(){return
d3_geo_mercatorProjection(d3_geo_mercator)}).raw=d3_geo_mercator;var
d3_geo_orthographic=d3_geo_azimuthal(function(){return
1},Math.asin);(d3.geo.orthographic=function(){return
d3_geo_projection(d3_geo_orthographic)}).raw=d3_geo_orthographic;var
d3_geo_stereographic=d3_geo_azimuthal(function(cosλcosφ){return
1/(1+cosλcosφ)},function(ρ){return
2*Math.atan(ρ)});(d3.geo.stereographic=function(){return
d3_geo_projection(d3_geo_stereographic)}).raw=d3_geo_stereographic;
function
d3_geo_transverseMercator(λ,φ){return[Math.log(Math.tan(π/4+φ/2)),-λ]}
d3_geo_transverseMercator.invert=function(x,y){return[-y,2*Math.atan(
Math.exp(x))-halfπ]};(d3.geo.transverseMercator=function(){var
projection=d3_geo_mercatorProjection(d3_geo_transverseMercator),center=
projection.center,rotate=projection.rotate;projection.center=function(_)
{return
_?center([-_[1],_[0]]):(_=center(),[-_[1],_[0]])};projection.rotate=
function(_){return
_?rotate([_[0],_[1],_.length>2?_[2]+90:90]):(_=rotate(),[_[0],_[1],_[2]-
90])};return
projection.rotate([0,0])}).raw=d3_geo_transverseMercator;d3.geom={};
function d3_geom_pointX(d){return d[0]}function d3_geom_pointY(d){return
d[1]}d3.geom.hull=function(vertices){var
x=d3_geom_pointX,y=d3_geom_pointY;if(arguments.length)return
hull(vertices);function hull(data){if(data.length<3)return[];var
fx=d3_functor(x),fy=d3_functor(y),n=data.length,vertices,plen=n-1,points
=[],stack=[],d,i,j,h=0,x1,y1,x2,y2,u,v,a,sp;if(fx===d3_geom_pointX&&y===
d3_geom_pointY)vertices=data;else
for(i=0,vertices=[];i<n;++i){vertices.push([+fx.call(this,d=data[i],i),+
fy.call(this,d,i)])}for(i=1;i<n;++i){if(vertices[i][1]<vertices[h][1]||
vertices[i][1]==vertices[h][1]&&vertices[i][0]<vertices[h][0])h=i}for(i=
0;i<n;++i){if(i===h)continue;y1=vertices[i][1]-vertices[h][1];x1=
vertices[i][0]-vertices[h][0];points.push({angle:Math.atan2(y1,x1),index
:i})}points.sort(function(a,b){return
a.angle-b.angle});a=points[0].angle;v=points[0].index;u=0;for(i=1;i<plen
;++i){j=points[i].index;if(a==points[i].angle){x1=vertices[v][0]-
vertices[h][0];y1=vertices[v][1]-vertices[h][1];x2=vertices[j][0]-
vertices[h][0];y2=vertices[j][1]-vertices[h][1];if(x1*x1+y1*y1>=x2*x2+y2
*y2){points[i].index=-1;continue}else{points[u].index=-1}}a=points[i].
angle;u=i;v=j}stack.push(h);for(i=0,j=0;i<2;++j){if(points[j].index>-1){
stack.push(points[j].index);i++}}sp=stack.length;for(;j<plen;++j){if(
points[j].index<0)continue;while(!d3_geom_hullCCW(stack[sp-2],stack[sp-1
],points[j].index,vertices)){--sp}stack[sp++]=points[j].index}var
poly=[];for(i=sp-1;i>=0;--i)poly.push(data[stack[i]]);return
poly}hull.x=function(_){return
arguments.length?(x=_,hull):x};hull.y=function(_){return
arguments.length?(y=_,hull):y};return hull};function
d3_geom_hullCCW(i1,i2,i3,v){var
t,a,b,c,d,e,f;t=v[i1];a=t[0];b=t[1];t=v[i2];c=t[0];d=t[1];t=v[i3];e=t[0]
;f=t[1];return(f-b)*(c-a)-(d-b)*(e-a)>0}d3.geom.polygon=function(
coordinates){d3_subclass(coordinates,d3_geom_polygonPrototype);return
coordinates};var
d3_geom_polygonPrototype=d3.geom.polygon.prototype=[];
d3_geom_polygonPrototype.area=function(){var
i=-1,n=this.length,a,b=this[n-1],area=0;while(++i<n){a=b;b=this[i];area+
=a[1]*b[0]-a[0]*b[1]}return
area*.5};d3_geom_polygonPrototype.centroid=function(k){var
i=-1,n=this.length,x=0,y=0,a,b=this[n-1],c;if(!arguments.length)k=-1/(6*
this.area());while(++i<n){a=b;b=this[i];c=a[0]*b[1]-b[0]*a[1];x+=(a[0]+b
[0])*c;y+=(a[1]+b[1])*c}return[x*k,y*k]};d3_geom_polygonPrototype.clip=
function(subject){var
input,closed=d3_geom_polygonClosed(subject),i=-1,n=this.length-
d3_geom_polygonClosed(this),j,m,a=this[n-1],b,c,d;while(++i<n){input=
subject.slice();subject.length=0;b=this[i];c=input[(m=input.length-
closed)-1];j=-1;while(++j<m){d=input[j];if(d3_geom_polygonInside(d,a,b))
{if(!d3_geom_polygonInside(c,a,b)){subject.push(d3_geom_polygonIntersect
(c,d,a,b))}subject.push(d)}else
if(d3_geom_polygonInside(c,a,b)){subject.push(d3_geom_polygonIntersect(c
,d,a,b))}c=d}if(closed)subject.push(subject[0]);a=b}return
subject};function
d3_geom_polygonInside(p,a,b){return(b[0]-a[0])*(p[1]-a[1])<(b[1]-a[1])*(
p[0]-a[0])}function d3_geom_polygonIntersect(c,d,a,b){var
x1=c[0],x3=a[0],x21=d[0]-x1,x43=b[0]-x3,y1=c[1],y3=a[1],y21=d[1]-y1,y43=
b[1]-y3,ua=(x43*(y1-y3)-y43*(x1-x3))/(y43*x21-x43*y21);return[x1+ua*x21,
y1+ua*y21]}function d3_geom_polygonClosed(coordinates){var
a=coordinates[0],b=coordinates[coordinates.length-1];return!(a[0]-b[0]||
a[1]-b[1])}var
d3_geom_voronoiEdges,d3_geom_voronoiCells,d3_geom_voronoiBeaches,
d3_geom_voronoiBeachPool=[],d3_geom_voronoiFirstCircle,
d3_geom_voronoiCircles,d3_geom_voronoiCirclePool=[];function
d3_geom_voronoiBeach(){d3_geom_voronoiRedBlackNode(this);this.edge=this.
site=this.circle=null}function d3_geom_voronoiCreateBeach(site){var
beach=d3_geom_voronoiBeachPool.pop()||new
d3_geom_voronoiBeach;beach.site=site;return beach}function
d3_geom_voronoiDetachBeach(beach){d3_geom_voronoiDetachCircle(beach);
d3_geom_voronoiBeaches.remove(beach);d3_geom_voronoiBeachPool.push(beach
);d3_geom_voronoiRedBlackNode(beach)}function
d3_geom_voronoiRemoveBeach(beach){var
circle=beach.circle,x=circle.x,y=circle.cy,vertex={x:x,y:y},previous=
beach.P,next=beach.N,disappearing=[beach];d3_geom_voronoiDetachBeach(
beach);var
lArc=previous;while(lArc.circle&&abs(x-lArc.circle.x)<ε&&abs(y-lArc.
circle.cy)<ε){previous=lArc.P;disappearing.unshift(lArc);
d3_geom_voronoiDetachBeach(lArc);lArc=previous}disappearing.unshift(lArc
);d3_geom_voronoiDetachCircle(lArc);var
rArc=next;while(rArc.circle&&abs(x-rArc.circle.x)<ε&&abs(y-rArc.circle.
cy)<ε){next=rArc.N;disappearing.push(rArc);d3_geom_voronoiDetachBeach(
rArc);rArc=next}disappearing.push(rArc);d3_geom_voronoiDetachCircle(rArc
);var
nArcs=disappearing.length,iArc;for(iArc=1;iArc<nArcs;++iArc){rArc=
disappearing[iArc];lArc=disappearing[iArc-1];d3_geom_voronoiSetEdgeEnd(
rArc.edge,lArc.site,rArc.site,vertex)}lArc=disappearing[0];rArc=
disappearing[nArcs-1];rArc.edge=d3_geom_voronoiCreateEdge(lArc.site,rArc
.site,null,vertex);d3_geom_voronoiAttachCircle(lArc);
d3_geom_voronoiAttachCircle(rArc)}function
d3_geom_voronoiAddBeach(site){var
x=site.x,directrix=site.y,lArc,rArc,dxl,dxr,node=d3_geom_voronoiBeaches.
_;while(node){dxl=d3_geom_voronoiLeftBreakPoint(node,directrix)-x;if(dxl
>ε)node=node.L;else{dxr=x-d3_geom_voronoiRightBreakPoint(node,directrix)
;if(dxr>ε){if(!node.R){lArc=node;break}node=node.R}else{if(dxl>-ε){lArc=
node.P;rArc=node}else
if(dxr>-ε){lArc=node;rArc=node.N}else{lArc=rArc=node}break}}}var
newArc=d3_geom_voronoiCreateBeach(site);d3_geom_voronoiBeaches.insert(
lArc,newArc);if(!lArc&&!rArc)return;if(lArc===rArc){
d3_geom_voronoiDetachCircle(lArc);rArc=d3_geom_voronoiCreateBeach(lArc.
site);d3_geom_voronoiBeaches.insert(newArc,rArc);newArc.edge=rArc.edge=
d3_geom_voronoiCreateEdge(lArc.site,newArc.site);
d3_geom_voronoiAttachCircle(lArc);d3_geom_voronoiAttachCircle(rArc);
return}if(!rArc){newArc.edge=d3_geom_voronoiCreateEdge(lArc.site,newArc.
site);return}d3_geom_voronoiDetachCircle(lArc);
d3_geom_voronoiDetachCircle(rArc);var
lSite=lArc.site,ax=lSite.x,ay=lSite.y,bx=site.x-ax,by=site.y-ay,rSite=
rArc.site,cx=rSite.x-ax,cy=rSite.y-ay,d=2*(bx*cy-by*cx),hb=bx*bx+by*by,
hc=cx*cx+cy*cy,vertex={x:(cy*hb-by*hc)/d+ax,y:(bx*hc-cx*hb)/d+ay};
d3_geom_voronoiSetEdgeEnd(rArc.edge,lSite,rSite,vertex);newArc.edge=
d3_geom_voronoiCreateEdge(lSite,site,null,vertex);rArc.edge=
d3_geom_voronoiCreateEdge(site,rSite,null,vertex);
d3_geom_voronoiAttachCircle(lArc);d3_geom_voronoiAttachCircle(rArc)}
function d3_geom_voronoiLeftBreakPoint(arc,directrix){var
site=arc.site,rfocx=site.x,rfocy=site.y,pby2=rfocy-directrix;if(!pby2)
return rfocx;var lArc=arc.P;if(!lArc)return-Infinity;site=lArc.site;var
lfocx=site.x,lfocy=site.y,plby2=lfocy-directrix;if(!plby2)return
lfocx;var
hl=lfocx-rfocx,aby2=1/pby2-1/plby2,b=hl/plby2;if(aby2)return(-b+Math.
sqrt(b*b-2*aby2*(hl*hl/(-2*plby2)-lfocy+plby2/2+rfocy-pby2/2)))/aby2+
rfocx;return(rfocx+lfocx)/2}function
d3_geom_voronoiRightBreakPoint(arc,directrix){var
rArc=arc.N;if(rArc)return
d3_geom_voronoiLeftBreakPoint(rArc,directrix);var site=arc.site;return
site.y===directrix?site.x:Infinity}function
d3_geom_voronoiCell(site){this.site=site;this.edges=[]}
d3_geom_voronoiCell.prototype.prepare=function(){var
halfEdges=this.edges,iHalfEdge=halfEdges.length,edge;while(iHalfEdge--){
edge=halfEdges[iHalfEdge].edge;if(!edge.b||!edge.a)halfEdges.splice(
iHalfEdge,1)}halfEdges.sort(d3_geom_voronoiHalfEdgeOrder);return
halfEdges.length};function d3_geom_voronoiCloseCells(extent){var
x0=extent[0][0],x1=extent[1][0],y0=extent[0][1],y1=extent[1][1],x2,y2,x3
,y3,cells=d3_geom_voronoiCells,iCell=cells.length,cell,iHalfEdge,
halfEdges,nHalfEdges,start,end;while(iCell--){cell=cells[iCell];if(!cell
||!cell.prepare())continue;halfEdges=cell.edges;nHalfEdges=halfEdges.
length;iHalfEdge=0;while(iHalfEdge<nHalfEdges){end=halfEdges[iHalfEdge].
end(),x3=end.x,y3=end.y;start=halfEdges[++iHalfEdge%nHalfEdges].start(),
x2=start.x,y2=start.y;if(abs(x3-x2)>ε||abs(y3-y2)>ε){halfEdges.splice(
iHalfEdge,0,new
d3_geom_voronoiHalfEdge(d3_geom_voronoiCreateBorderEdge(cell.site,end,
abs(x3-x0)<ε&&y1-y3>ε?{x:x0,y:abs(x2-x0)<ε?y2:y1}:abs(y3-y1)<ε&&x1-x3>ε?
{x:abs(y2-y1)<ε?x2:x1,y:y1}:abs(x3-x1)<ε&&y3-y0>ε?{x:x1,y:abs(x2-x1)<ε?
y2:y0}:abs(y3-y0)<ε&&x3-x0>ε?{x:abs(y2-y0)<ε?x2:x0,y:y0}:null),cell.site
,null));++nHalfEdges}}}}function
d3_geom_voronoiHalfEdgeOrder(a,b){return b.angle-a.angle}function
d3_geom_voronoiCircle(){d3_geom_voronoiRedBlackNode(this);this.x=this.y=
this.arc=this.site=this.cy=null}function
d3_geom_voronoiAttachCircle(arc){var
lArc=arc.P,rArc=arc.N;if(!lArc||!rArc)return;var
lSite=lArc.site,cSite=arc.site,rSite=rArc.site;if(lSite===rSite)return;
var
bx=cSite.x,by=cSite.y,ax=lSite.x-bx,ay=lSite.y-by,cx=rSite.x-bx,cy=rSite
.y-by;var d=2*(ax*cy-ay*cx);if(d>=-ε2)return;var
ha=ax*ax+ay*ay,hc=cx*cx+cy*cy,x=(cy*ha-ay*hc)/d,y=(ax*hc-cx*ha)/d,cy=y+
by;var circle=d3_geom_voronoiCirclePool.pop()||new
d3_geom_voronoiCircle;circle.arc=arc;circle.site=cSite;circle.x=x+bx;
circle.y=cy+Math.sqrt(x*x+y*y);circle.cy=cy;arc.circle=circle;var
before=null,node=d3_geom_voronoiCircles._;while(node){if(circle.y<node.y
||circle.y===node.y&&circle.x<=node.x){if(node.L)node=node.L;else{before
=node.P;break}}else{if(node.R)node=node.R;else{before=node;break}}}
d3_geom_voronoiCircles.insert(before,circle);if(!before)
d3_geom_voronoiFirstCircle=circle}function
d3_geom_voronoiDetachCircle(arc){var
circle=arc.circle;if(circle){if(!circle.P)d3_geom_voronoiFirstCircle=
circle.N;d3_geom_voronoiCircles.remove(circle);d3_geom_voronoiCirclePool
.push(circle);d3_geom_voronoiRedBlackNode(circle);arc.circle=null}}
function d3_geom_voronoiClipEdges(extent){var
edges=d3_geom_voronoiEdges,clip=d3_geom_clipLine(extent[0][0],extent[0][
1],extent[1][0],extent[1][1]),i=edges.length,e;while(i--){e=edges[i];if(
!d3_geom_voronoiConnectEdge(e,extent)||!clip(e)||abs(e.a.x-e.b.x)<ε&&abs
(e.a.y-e.b.y)<ε){e.a=e.b=null;edges.splice(i,1)}}}function
d3_geom_voronoiConnectEdge(edge,extent){var vb=edge.b;if(vb)return
true;var
va=edge.a,x0=extent[0][0],x1=extent[1][0],y0=extent[0][1],y1=extent[1][1
],lSite=edge.l,rSite=edge.r,lx=lSite.x,ly=lSite.y,rx=rSite.x,ry=rSite.y,
fx=(lx+rx)/2,fy=(ly+ry)/2,fm,fb;if(ry===ly){if(fx<x0||fx>=x1)return;if(
lx>rx){if(!va)va={x:fx,y:y0};else
if(va.y>=y1)return;vb={x:fx,y:y1}}else{if(!va)va={x:fx,y:y1};else
if(va.y<y0)return;vb={x:fx,y:y0}}}else{fm=(lx-rx)/(ry-ly);fb=fy-fm*fx;if
(fm<-1||fm>1){if(lx>rx){if(!va)va={x:(y0-fb)/fm,y:y0};else
if(va.y>=y1)return;vb={x:(y1-fb)/fm,y:y1}}else{if(!va)va={x:(y1-fb)/fm,y
:y1};else
if(va.y<y0)return;vb={x:(y0-fb)/fm,y:y0}}}else{if(ly<ry){if(!va)va={x:x0
,y:fm*x0+fb};else
if(va.x>=x1)return;vb={x:x1,y:fm*x1+fb}}else{if(!va)va={x:x1,y:fm*x1+fb}
;else
if(va.x<x0)return;vb={x:x0,y:fm*x0+fb}}}}edge.a=va;edge.b=vb;return
true}function
d3_geom_voronoiEdge(lSite,rSite){this.l=lSite;this.r=rSite;this.a=this.b
=null}function d3_geom_voronoiCreateEdge(lSite,rSite,va,vb){var edge=new
d3_geom_voronoiEdge(lSite,rSite);d3_geom_voronoiEdges.push(edge);if(va)
d3_geom_voronoiSetEdgeEnd(edge,lSite,rSite,va);if(vb)
d3_geom_voronoiSetEdgeEnd(edge,rSite,lSite,vb);d3_geom_voronoiCells[
lSite.i].edges.push(new
d3_geom_voronoiHalfEdge(edge,lSite,rSite));d3_geom_voronoiCells[rSite.i]
.edges.push(new d3_geom_voronoiHalfEdge(edge,rSite,lSite));return
edge}function d3_geom_voronoiCreateBorderEdge(lSite,va,vb){var edge=new
d3_geom_voronoiEdge(lSite,null);edge.a=va;edge.b=vb;d3_geom_voronoiEdges
.push(edge);return edge}function
d3_geom_voronoiSetEdgeEnd(edge,lSite,rSite,vertex){if(!edge.a&&!edge.b){
edge.a=vertex;edge.l=lSite;edge.r=rSite}else
if(edge.l===rSite){edge.b=vertex}else{edge.a=vertex}}function
d3_geom_voronoiHalfEdge(edge,lSite,rSite){var
va=edge.a,vb=edge.b;this.edge=edge;this.site=lSite;this.angle=rSite?Math
.atan2(rSite.y-lSite.y,rSite.x-lSite.x):edge.l===lSite?Math.atan2(vb.x-
va.x,va.y-vb.y):Math.atan2(va.x-vb.x,vb.y-va.y)}d3_geom_voronoiHalfEdge.
prototype={start:function(){return
this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return
this.edge.l===this.site?this.edge.b:this.edge.a}};function
d3_geom_voronoiRedBlackTree(){this._=null}function
d3_geom_voronoiRedBlackNode(node){node.U=node.C=node.L=node.R=node.P=
node.N=null}d3_geom_voronoiRedBlackTree.prototype={insert:function(after
,node){var
parent,grandpa,uncle;if(after){node.P=after;node.N=after.N;if(after.N)
after.N.P=node;after.N=node;if(after.R){after=after.R;while(after.L)
after=after.L;after.L=node}else{after.R=node}parent=after}else
if(this._){after=d3_geom_voronoiRedBlackFirst(this._);node.P=null;node.N
=after;after.P=after.L=node;parent=after}else{node.P=node.N=null;this._=
node;parent=null}node.L=node.R=null;node.U=parent;node.C=true;after=node
;while(parent&&parent.C){grandpa=parent.U;if(parent===grandpa.L){uncle=
grandpa.R;if(uncle&&uncle.C){parent.C=uncle.C=false;grandpa.C=true;after
=grandpa}else{if(after===parent.R){d3_geom_voronoiRedBlackRotateLeft(
this,parent);after=parent;parent=after.U}parent.C=false;grandpa.C=true;
d3_geom_voronoiRedBlackRotateRight(this,grandpa)}}else{uncle=grandpa.L;
if(uncle&&uncle.C){parent.C=uncle.C=false;grandpa.C=true;after=grandpa}
else{if(after===parent.L){d3_geom_voronoiRedBlackRotateRight(this,parent
);after=parent;parent=after.U}parent.C=false;grandpa.C=true;
d3_geom_voronoiRedBlackRotateLeft(this,grandpa)}}parent=after.U}this._.C
=false},remove:function(node){if(node.N)node.N.P=node.P;if(node.P)node.P
.N=node.N;node.N=node.P=null;var
parent=node.U,sibling,left=node.L,right=node.R,next,red;if(!left)next=
right;else if(!right)next=left;else
next=d3_geom_voronoiRedBlackFirst(right);if(parent){if(parent.L===node)
parent.L=next;else
parent.R=next}else{this._=next}if(left&&right){red=next.C;next.C=node.C;
next.L=left;left.U=next;if(next!==right){parent=next.U;next.U=node.U;
node=next.R;parent.L=node;next.R=right;right.U=next}else{next.U=parent;
parent=next;node=next.R}}else{red=node.C;node=next}if(node)node.U=parent
;if(red)return;if(node&&node.C){node.C=false;return}do{if(node===this._)
break;if(node===parent.L){sibling=parent.R;if(sibling.C){sibling.C=false
;parent.C=true;d3_geom_voronoiRedBlackRotateLeft(this,parent);sibling=
parent.R}if(sibling.L&&sibling.L.C||sibling.R&&sibling.R.C){if(!sibling.
R||!sibling.R.C){sibling.L.C=false;sibling.C=true;
d3_geom_voronoiRedBlackRotateRight(this,sibling);sibling=parent.R}
sibling.C=parent.C;parent.C=sibling.R.C=false;
d3_geom_voronoiRedBlackRotateLeft(this,parent);node=this._;break}}else{
sibling=parent.L;if(sibling.C){sibling.C=false;parent.C=true;
d3_geom_voronoiRedBlackRotateRight(this,parent);sibling=parent.L}if(
sibling.L&&sibling.L.C||sibling.R&&sibling.R.C){if(!sibling.L||!sibling.
L.C){sibling.R.C=false;sibling.C=true;d3_geom_voronoiRedBlackRotateLeft(
this,sibling);sibling=parent.L}sibling.C=parent.C;parent.C=sibling.L.C=
false;d3_geom_voronoiRedBlackRotateRight(this,parent);node=this._;break}
}sibling.C=true;node=parent;parent=parent.U}while(!node.C);if(node)node.
C=false}};function d3_geom_voronoiRedBlackRotateLeft(tree,node){var
p=node,q=node.R,parent=p.U;if(parent){if(parent.L===p)parent.L=q;else
parent.R=q}else{tree._=q}q.U=parent;p.U=q;p.R=q.L;if(p.R)p.R.U=p;q.L=p}
function d3_geom_voronoiRedBlackRotateRight(tree,node){var
p=node,q=node.L,parent=p.U;if(parent){if(parent.L===p)parent.L=q;else
parent.R=q}else{tree._=q}q.U=parent;p.U=q;p.L=q.R;if(p.L)p.L.U=p;q.R=p}
function
d3_geom_voronoiRedBlackFirst(node){while(node.L)node=node.L;return
node}function d3_geom_voronoi(sites,bbox){var
site=sites.sort(d3_geom_voronoiVertexOrder).pop(),x0,y0,circle;
d3_geom_voronoiEdges=[];d3_geom_voronoiCells=new
Array(sites.length);d3_geom_voronoiBeaches=new
d3_geom_voronoiRedBlackTree;d3_geom_voronoiCircles=new
d3_geom_voronoiRedBlackTree;while(true){circle=
d3_geom_voronoiFirstCircle;if(site&&(!circle||site.y<circle.y||site.y===
circle.y&&site.x<circle.x)){if(site.x!==x0||site.y!==y0){
d3_geom_voronoiCells[site.i]=new
d3_geom_voronoiCell(site);d3_geom_voronoiAddBeach(site);x0=site.x,y0=
site.y}site=sites.pop()}else
if(circle){d3_geom_voronoiRemoveBeach(circle.arc)}else{break}}if(bbox)
d3_geom_voronoiClipEdges(bbox),d3_geom_voronoiCloseCells(bbox);var
diagram={cells:d3_geom_voronoiCells,edges:d3_geom_voronoiEdges};
d3_geom_voronoiBeaches=d3_geom_voronoiCircles=d3_geom_voronoiEdges=
d3_geom_voronoiCells=null;return diagram}function
d3_geom_voronoiVertexOrder(a,b){return
b.y-a.y||b.x-a.x}d3.geom.voronoi=function(points){var
x=d3_geom_pointX,y=d3_geom_pointY,fx=x,fy=y,clipExtent=
d3_geom_voronoiClipExtent;if(points)return voronoi(points);function
voronoi(data){var polygons=new
Array(data.length),x0=clipExtent[0][0],y0=clipExtent[0][1],x1=clipExtent
[1][0],y1=clipExtent[1][1];d3_geom_voronoi(sites(data),clipExtent).cells
.forEach(function(cell,i){var
edges=cell.edges,site=cell.site,polygon=polygons[i]=edges.length?edges.
map(function(e){var
s=e.start();return[s.x,s.y]}):site.x>=x0&&site.x<=x1&&site.y>=y0&&site.y
<=y1?[[x0,y1],[x1,y1],[x1,y0],[x0,y0]]:[];polygon.point=data[i]});return
polygons}function sites(data){return
data.map(function(d,i){return{x:Math.round(fx(d,i)/ε)*ε,y:Math.round(fy(
d,i)/ε)*ε,i:i}})}voronoi.links=function(data){return
d3_geom_voronoi(sites(data)).edges.filter(function(edge){return
edge.l&&edge.r}).map(function(edge){return{source:data[edge.l.i],target:
data[edge.r.i]}})};voronoi.triangles=function(data){var
triangles=[];d3_geom_voronoi(sites(data)).cells.forEach(function(cell,i)
{var
site=cell.site,edges=cell.edges.sort(d3_geom_voronoiHalfEdgeOrder),j=-1,
m=edges.length,e0,s0,e1=edges[m-1].edge,s1=e1.l===site?e1.r:e1.l;while(+
+j<m){e0=e1;s0=s1;e1=edges[j].edge;s1=e1.l===site?e1.r:e1.l;if(i<s0.i&&i
<s1.i&&d3_geom_voronoiTriangleArea(site,s0,s1)<0){triangles.push([data[i
],data[s0.i],data[s1.i]])}}});return
triangles};voronoi.x=function(_){return
arguments.length?(fx=d3_functor(x=_),voronoi):x};voronoi.y=function(_){
return
arguments.length?(fy=d3_functor(y=_),voronoi):y};voronoi.clipExtent=
function(_){if(!arguments.length)return
clipExtent===d3_geom_voronoiClipExtent?null:clipExtent;clipExtent=_==
null?d3_geom_voronoiClipExtent:_;return
voronoi};voronoi.size=function(_){if(!arguments.length)return
clipExtent===d3_geom_voronoiClipExtent?null:clipExtent&&clipExtent[1];
return voronoi.clipExtent(_&&[[0,0],_])};return voronoi};var
d3_geom_voronoiClipExtent=[[-1e6,-1e6],[1e6,1e6]];function
d3_geom_voronoiTriangleArea(a,b,c){return(a.x-c.x)*(b.y-a.y)-(a.x-b.x)*(
c.y-a.y)}d3.geom.delaunay=function(vertices){return
d3.geom.voronoi().triangles(vertices)};d3.geom.quadtree=function(points,
x1,y1,x2,y2){var
x=d3_geom_pointX,y=d3_geom_pointY,compat;if(compat=arguments.length){x=
d3_geom_quadtreeCompatX;y=d3_geom_quadtreeCompatY;if(compat===3){y2=y1;
x2=x1;y1=x1=0}return quadtree(points)}function quadtree(data){var
d,fx=d3_functor(x),fy=d3_functor(y),xs,ys,i,n,x1_,y1_,x2_,y2_;if(x1!=
null){x1_=x1,y1_=y1,x2_=x2,y2_=y2}else{x2_=y2_=-(x1_=y1_=Infinity);xs=[]
,ys=[];n=data.length;if(compat)for(i=0;i<n;++i){d=data[i];if(d.x<x1_)x1_
=d.x;if(d.y<y1_)y1_=d.y;if(d.x>x2_)x2_=d.x;if(d.y>y2_)y2_=d.y;xs.push(d.
x);ys.push(d.y)}else for(i=0;i<n;++i){var
x_=+fx(d=data[i],i),y_=+fy(d,i);if(x_<x1_)x1_=x_;if(y_<y1_)y1_=y_;if(x_>
x2_)x2_=x_;if(y_>y2_)y2_=y_;xs.push(x_);ys.push(y_)}}var
dx=x2_-x1_,dy=y2_-y1_;if(dx>dy)y2_=y1_+dx;else x2_=x1_+dy;function
insert(n,d,x,y,x1,y1,x2,y2){if(isNaN(x)||isNaN(y))return;if(n.leaf){var
nx=n.x,ny=n.y;if(nx!=null){if(abs(nx-x)+abs(ny-y)<.01){insertChild(n,d,x
,y,x1,y1,x2,y2)}else{var
nPoint=n.point;n.x=n.y=n.point=null;insertChild(n,nPoint,nx,ny,x1,y1,x2,
y2);insertChild(n,d,x,y,x1,y1,x2,y2)}}else{n.x=x,n.y=y,n.point=d}}else{
insertChild(n,d,x,y,x1,y1,x2,y2)}}function
insertChild(n,d,x,y,x1,y1,x2,y2){var
sx=(x1+x2)*.5,sy=(y1+y2)*.5,right=x>=sx,bottom=y>=sy,i=(bottom<<1)+right
;n.leaf=false;n=n.nodes[i]||(n.nodes[i]=d3_geom_quadtreeNode());if(right
)x1=sx;else x2=sx;if(bottom)y1=sy;else
y2=sy;insert(n,d,x,y,x1,y1,x2,y2)}var
root=d3_geom_quadtreeNode();root.add=function(d){insert(root,d,+fx(d,++i
),+fy(d,i),x1_,y1_,x2_,y2_)};root.visit=function(f){
d3_geom_quadtreeVisit(f,root,x1_,y1_,x2_,y2_)};i=-1;if(x1==null){while(+
+i<n){insert(root,data[i],xs[i],ys[i],x1_,y1_,x2_,y2_)}--i}else
data.forEach(root.add);xs=ys=data=d=null;return
root}quadtree.x=function(_){return
arguments.length?(x=_,quadtree):x};quadtree.y=function(_){return
arguments.length?(y=_,quadtree):y};quadtree.extent=function(_){if(!
arguments.length)return
x1==null?null:[[x1,y1],[x2,y2]];if(_==null)x1=y1=x2=y2=null;else
x1=+_[0][0],y1=+_[0][1],x2=+_[1][0],y2=+_[1][1];return
quadtree};quadtree.size=function(_){if(!arguments.length)return
x1==null?null:[x2-x1,y2-y1];if(_==null)x1=y1=x2=y2=null;else
x1=y1=0,x2=+_[0],y2=+_[1];return quadtree};return quadtree};function
d3_geom_quadtreeCompatX(d){return d.x}function
d3_geom_quadtreeCompatY(d){return d.y}function
d3_geom_quadtreeNode(){return{leaf:true,nodes:[],point:null,x:null,y:
null}}function
d3_geom_quadtreeVisit(f,node,x1,y1,x2,y2){if(!f(node,x1,y1,x2,y2)){var
sx=(x1+x2)*.5,sy=(y1+y2)*.5,children=node.nodes;
if(children[0])d3_geom_quadtreeVisit(f,children[0],x1,y1,sx,sy);if(
children[1])d3_geom_quadtreeVisit(f,children[1],sx,y1,x2,sy);if(children
[2])d3_geom_quadtreeVisit(f,children[2],x1,sy,sx,y2);if(children[3])
d3_geom_quadtreeVisit(f,children[3],sx,sy,x2,y2)}}d3.interpolateRgb=
d3_interpolateRgb;function
d3_interpolateRgb(a,b){a=d3.rgb(a);b=d3.rgb(b);var
ar=a.r,ag=a.g,ab=a.b,br=b.r-ar,bg=b.g-ag,bb=b.b-ab;return
function(t){return"#"+d3_rgb_hex(Math.round(ar+br*t))+d3_rgb_hex(Math.
round(ag+bg*t))+d3_rgb_hex(Math.round(ab+bb*t))}}d3.interpolateObject=
d3_interpolateObject;function d3_interpolateObject(a,b){var
i={},c={},k;for(k in a){if(k in
b){i[k]=d3_interpolate(a[k],b[k])}else{c[k]=a[k]}}for(k in b){if(!(k in
a)){c[k]=b[k]}}return function(t){for(k in i)c[k]=i[k](t);return
c}}d3.interpolateNumber=d3_interpolateNumber;function
d3_interpolateNumber(a,b){b-=a=+a;return function(t){return
a+b*t}}d3.interpolateString=d3_interpolateString;function
d3_interpolateString(a,b){var
m,i,j,s0=0,s1=0,s=[],q=[],n,o;a=a+"",b=b+"";d3_interpolate_number.
lastIndex=0;for(i=0;m=d3_interpolate_number.exec(b);++i){if(m.index)s.
push(b.substring(s0,s1=m.index));q.push({i:s.length,x:m[0]});s.push(null
);s0=d3_interpolate_number.lastIndex}if(s0<b.length)s.push(b.substring(
s0));for(i=0,n=q.length;(m=d3_interpolate_number.exec(a))&&i<n;++i){o=q[
i];if(o.x==m[0]){if(o.i){if(s[o.i+1]==null){s[o.i-1]+=o.x;s.splice(o.i,1
);for(j=i+1;j<n;++j)q[j].i--}else{s[o.i-1]+=o.x+s[o.i+1];s.splice(o.i,2)
;for(j=i+1;j<n;++j)q[j].i-=2}}else{if(s[o.i+1]==null){s[o.i]=o.x}else{s[
o.i]=o.x+s[o.i+1];s.splice(o.i+1,1);for(j=i+1;j<n;++j)q[j].i--}}q.splice
(i,1);n--;i--}else{o.x=d3_interpolateNumber(parseFloat(m[0]),parseFloat(
o.x))}}while(i<n){o=q.pop();if(s[o.i+1]==null){s[o.i]=o.x}else{s[o.i]=o.
x+s[o.i+1];s.splice(o.i+1,1)}n--}if(s.length===1){return
s[0]==null?(o=q[0].x,function(t){return o(t)+""}):function(){return
b}}return function(t){for(i=0;i<n;++i)s[(o=q[i]).i]=o.x(t);return
s.join("")}}var
d3_interpolate_number=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;d3.
interpolate=d3_interpolate;function d3_interpolate(a,b){var
i=d3.interpolators.length,f;while(--i>=0&&!(f=d3.interpolators[i](a,b)))
;return f}d3.interpolators=[function(a,b){var t=typeof
b;return(t==="string"?d3_rgb_names.has(b)||/^(#|rgb\(|hsl\()/.test(b)?
d3_interpolateRgb:d3_interpolateString:b instanceof
d3_Color?d3_interpolateRgb:t==="object"?Array.isArray(b)?
d3_interpolateArray:d3_interpolateObject:d3_interpolateNumber)(a,b)}];d3
.interpolateArray=d3_interpolateArray;function
d3_interpolateArray(a,b){var
x=[],c=[],na=a.length,nb=b.length,n0=Math.min(a.length,b.length),i;for(i
=0;i<n0;++i)x.push(d3_interpolate(a[i],b[i]));for(;i<na;++i)c[i]=a[i];
for(;i<nb;++i)c[i]=b[i];return
function(t){for(i=0;i<n0;++i)c[i]=x[i](t);return c}}var
d3_ease_default=function(){return d3_identity};var
d3_ease=d3.map({linear:d3_ease_default,poly:d3_ease_poly,quad:function()
{return d3_ease_quad},cubic:function(){return
d3_ease_cubic},sin:function(){return d3_ease_sin},exp:function(){return
d3_ease_exp},circle:function(){return
d3_ease_circle},elastic:d3_ease_elastic,back:d3_ease_back,bounce:
function(){return d3_ease_bounce}});var
d3_ease_mode=d3.map({"in":d3_identity,out:d3_ease_reverse,"in-out":
d3_ease_reflect,"out-in":function(f){return
d3_ease_reflect(d3_ease_reverse(f))}});d3.ease=function(name){var
i=name.indexOf("-"),t=i>=0?name.substring(0,i):name,m=i>=0?name.
substring(i+1):"in";t=d3_ease.get(t)||d3_ease_default;m=d3_ease_mode.get
(m)||d3_identity;return
d3_ease_clamp(m(t.apply(null,d3_arraySlice.call(arguments,1))))};
function d3_ease_clamp(f){return function(t){return
t<=0?0:t>=1?1:f(t)}}function d3_ease_reverse(f){return
function(t){return 1-f(1-t)}}function d3_ease_reflect(f){return
function(t){return.5*(t<.5?f(2*t):2-f(2-2*t))}}function
d3_ease_quad(t){return t*t}function d3_ease_cubic(t){return
t*t*t}function d3_ease_cubicInOut(t){if(t<=0)return 0;if(t>=1)return
1;var t2=t*t,t3=t2*t;return 4*(t<.5?t3:3*(t-t2)+t3-.75)}function
d3_ease_poly(e){return function(t){return Math.pow(t,e)}}function
d3_ease_sin(t){return 1-Math.cos(t*halfπ)}function d3_ease_exp(t){return
Math.pow(2,10*(t-1))}function d3_ease_circle(t){return
1-Math.sqrt(1-t*t)}function d3_ease_elastic(a,p){var
s;if(arguments.length<2)p=.45;if(arguments.length)s=p/τ*Math.asin(1/a);
else a=1,s=p/4;return function(t){return
1+a*Math.pow(2,-10*t)*Math.sin((t-s)*τ/p)}}function
d3_ease_back(s){if(!s)s=1.70158;return function(t){return
t*t*((s+1)*t-s)}}function d3_ease_bounce(t){return
t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.
5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}d3.
interpolateHcl=d3_interpolateHcl;function
d3_interpolateHcl(a,b){a=d3.hcl(a);b=d3.hcl(b);var
ah=a.h,ac=a.c,al=a.l,bh=b.h-ah,bc=b.c-ac,bl=b.l-al;if(isNaN(bc))bc=0,ac=
isNaN(ac)?b.c:ac;if(isNaN(bh))bh=0,ah=isNaN(ah)?b.h:ah;else
if(bh>180)bh-=360;else if(bh<-180)bh+=360;return function(t){return
d3_hcl_lab(ah+bh*t,ac+bc*t,al+bl*t)+""}}d3.interpolateHsl=
d3_interpolateHsl;function
d3_interpolateHsl(a,b){a=d3.hsl(a);b=d3.hsl(b);var
ah=a.h,as=a.s,al=a.l,bh=b.h-ah,bs=b.s-as,bl=b.l-al;if(isNaN(bs))bs=0,as=
isNaN(as)?b.s:as;if(isNaN(bh))bh=0,ah=isNaN(ah)?b.h:ah;else
if(bh>180)bh-=360;else if(bh<-180)bh+=360;return function(t){return
d3_hsl_rgb(ah+bh*t,as+bs*t,al+bl*t)+""}}d3.interpolateLab=
d3_interpolateLab;function
d3_interpolateLab(a,b){a=d3.lab(a);b=d3.lab(b);var
al=a.l,aa=a.a,ab=a.b,bl=b.l-al,ba=b.a-aa,bb=b.b-ab;return
function(t){return
d3_lab_rgb(al+bl*t,aa+ba*t,ab+bb*t)+""}}d3.interpolateRound=
d3_interpolateRound;function d3_interpolateRound(a,b){b-=a;return
function(t){return Math.round(a+b*t)}}d3.transform=function(string){var
g=d3_document.createElementNS(d3.ns.prefix.svg,"g");return(d3.transform=
function(string){if(string!=null){g.setAttribute("transform",string);var
t=g.transform.baseVal.consolidate()}return new
d3_transform(t?t.matrix:d3_transformIdentity)})(string)};function
d3_transform(m){var
r0=[m.a,m.b],r1=[m.c,m.d],kx=d3_transformNormalize(r0),kz=
d3_transformDot(r0,r1),ky=d3_transformNormalize(d3_transformCombine(r1,
r0,-kz))||0;if(r0[0]*r1[1]<r1[0]*r0[1]){r0[0]*=-1;r0[1]*=-1;kx*=-1;kz*=-
1}this.rotate=(kx?Math.atan2(r0[1],r0[0]):Math.atan2(-r1[0],r1[1]))*
d3_degrees;this.translate=[m.e,m.f];this.scale=[kx,ky];this.skew=ky?Math
.atan2(kz,ky)*d3_degrees:0}d3_transform.prototype.toString=function(){
return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.
skew+")scale("+this.scale+")"};function d3_transformDot(a,b){return
a[0]*b[0]+a[1]*b[1]}function d3_transformNormalize(a){var
k=Math.sqrt(d3_transformDot(a,a));if(k){a[0]/=k;a[1]/=k}return
k}function d3_transformCombine(a,b,k){a[0]+=k*b[0];a[1]+=k*b[1];return
a}var
d3_transformIdentity={a:1,b:0,c:0,d:1,e:0,f:0};d3.interpolateTransform=
d3_interpolateTransform;function d3_interpolateTransform(a,b){var
s=[],q=[],n,A=d3.transform(a),B=d3.transform(b),ta=A.translate,tb=B.
translate,ra=A.rotate,rb=B.rotate,wa=A.skew,wb=B.skew,ka=A.scale,kb=B.
scale;if(ta[0]!=tb[0]||ta[1]!=tb[1]){s.push("translate(",null,",",null,"
)");q.push({i:1,x:d3_interpolateNumber(ta[0],tb[0])},{i:3,x:
d3_interpolateNumber(ta[1],tb[1])})}else
if(tb[0]||tb[1]){s.push("translate("+tb+")")}else{s.push("")}if(ra!=rb){
if(ra-rb>180)rb+=360;else
if(rb-ra>180)ra+=360;q.push({i:s.push(s.pop()+"rotate(",null,")")-2,x:
d3_interpolateNumber(ra,rb)})}else
if(rb){s.push(s.pop()+"rotate("+rb+")")}if(wa!=wb){q.push({i:s.push(s.
pop()+"skewX(",null,")")-2,x:d3_interpolateNumber(wa,wb)})}else
if(wb){s.push(s.pop()+"skewX("+wb+")")}if(ka[0]!=kb[0]||ka[1]!=kb[1]){n=
s.push(s.pop()+"scale(",null,",",null,")");q.push({i:n-4,x:
d3_interpolateNumber(ka[0],kb[0])},{i:n-2,x:d3_interpolateNumber(ka[1],
kb[1])})}else
if(kb[0]!=1||kb[1]!=1){s.push(s.pop()+"scale("+kb+")")}n=q.length;return
function(t){var i=-1,o;while(++i<n)s[(o=q[i]).i]=o.x(t);return
s.join("")}}function
d3_uninterpolateNumber(a,b){b=b-(a=+a)?1/(b-a):0;return
function(x){return(x-a)*b}}function
d3_uninterpolateClamp(a,b){b=b-(a=+a)?1/(b-a):0;return
function(x){return
Math.max(0,Math.min(1,(x-a)*b))}}d3.layout={};d3.layout.bundle=function(
){return function(links){var
paths=[],i=-1,n=links.length;while(++i<n)paths.push(d3_layout_bundlePath
(links[i]));return paths}};function d3_layout_bundlePath(link){var
start=link.source,end=link.target,lca=
d3_layout_bundleLeastCommonAncestor(start,end),points=[start];while(
start!==lca){start=start.parent;points.push(start)}var
k=points.length;while(end!==lca){points.splice(k,0,end);end=end.parent}
return points}function d3_layout_bundleAncestors(node){var
ancestors=[],parent=node.parent;while(parent!=null){ancestors.push(node)
;node=parent;parent=parent.parent}ancestors.push(node);return
ancestors}function
d3_layout_bundleLeastCommonAncestor(a,b){if(a===b)return a;var
aNodes=d3_layout_bundleAncestors(a),bNodes=d3_layout_bundleAncestors(b),
aNode=aNodes.pop(),bNode=bNodes.pop(),sharedNode=null;while(aNode===
bNode){sharedNode=aNode;aNode=aNodes.pop();bNode=bNodes.pop()}return
sharedNode}d3.layout.chord=function(){var
chord={},chords,groups,matrix,n,padding=0,sortGroups,sortSubgroups,
sortChords;function relayout(){var
subgroups={},groupSums=[],groupIndex=d3.range(n),subgroupIndex=[],k,x,x0
,i,j;chords=[];groups=[];k=0,i=-1;while(++i<n){x=0,j=-1;while(++j<n){x+=
matrix[i][j]}groupSums.push(x);subgroupIndex.push(d3.range(n));k+=x}if(
sortGroups){groupIndex.sort(function(a,b){return
sortGroups(groupSums[a],groupSums[b])})}if(sortSubgroups){subgroupIndex.
forEach(function(d,i){d.sort(function(a,b){return
sortSubgroups(matrix[i][a],matrix[i][b])})})}k=(τ-padding*n)/k;x=0,i=-1;
while(++i<n){x0=x,j=-1;while(++j<n){var
di=groupIndex[i],dj=subgroupIndex[di][j],v=matrix[di][dj],a0=x,a1=x+=v*k
;subgroups[di+"-"+dj]={index:di,subindex:dj,startAngle:a0,endAngle:a1,
value:v}}groups[di]={index:di,startAngle:x0,endAngle:x,value:(x-x0)/k};x
+=padding}i=-1;while(++i<n){j=i-1;while(++j<n){var
source=subgroups[i+"-"+j],target=subgroups[j+"-"+i];if(source.value||
target.value){chords.push(source.value<target.value?{source:target,
target:source}:{source:source,target:target})}}}if(sortChords)resort()}
function resort(){chords.sort(function(a,b){return
sortChords((a.source.value+a.target.value)/2,(b.source.value+b.target.
value)/2)})}chord.matrix=function(x){if(!arguments.length)return
matrix;n=(matrix=x)&&matrix.length;chords=groups=null;return
chord};chord.padding=function(x){if(!arguments.length)return
padding;padding=x;chords=groups=null;return
chord};chord.sortGroups=function(x){if(!arguments.length)return
sortGroups;sortGroups=x;chords=groups=null;return
chord};chord.sortSubgroups=function(x){if(!arguments.length)return
sortSubgroups;sortSubgroups=x;chords=null;return
chord};chord.sortChords=function(x){if(!arguments.length)return
sortChords;sortChords=x;if(chords)resort();return
chord};chord.chords=function(){if(!chords)relayout();return
chords};chord.groups=function(){if(!groups)relayout();return
groups};return chord};d3.layout.force=function(){var
force={},event=d3.dispatch("start","tick","end"),size=[1,1],drag,alpha,
friction=.9,linkDistance=d3_layout_forceLinkDistance,linkStrength=
d3_layout_forceLinkStrength,charge=-30,gravity=.1,theta=.8,nodes=[],
links=[],distances,strengths,charges;function repulse(node){return
function(quad,x1,_,x2){if(quad.point!==node){var
dx=quad.cx-node.x,dy=quad.cy-node.y,dn=1/Math.sqrt(dx*dx+dy*dy);if((x2-
x1)*dn<theta){var k=quad.charge*dn*dn;node.px-=dx*k;node.py-=dy*k;return
true}if(quad.point&&isFinite(dn)){var
k=quad.pointCharge*dn*dn;node.px-=dx*k;node.py-=dy*k}}return!quad.charge
}}force.tick=function(){if((alpha*=.99)<.005){event.end({type:"end",
alpha:alpha=0});return true}var
n=nodes.length,m=links.length,q,i,o,s,t,l,k,x,y;for(i=0;i<m;++i){o=links
[i];s=o.source;t=o.target;x=t.x-s.x;y=t.y-s.y;if(l=x*x+y*y){l=alpha*
strengths[i]*((l=Math.sqrt(l))-distances[i])/l;x*=l;y*=l;t.x-=x*(k=s.
weight/(t.weight+s.weight));t.y-=y*k;s.x+=x*(k=1-k);s.y+=y*k}}if(k=alpha
*gravity){x=size[0]/2;y=size[1]/2;i=-1;if(k)while(++i<n){o=nodes[i];o.x+
=(x-o.x)*k;o.y+=(y-o.y)*k}}if(charge){d3_layout_forceAccumulate(q=d3.
geom.quadtree(nodes),alpha,charges);i=-1;while(++i<n){if(!(o=nodes[i]).
fixed){q.visit(repulse(o))}}}i=-1;while(++i<n){o=nodes[i];if(o.fixed){o.
x=o.px;o.y=o.py}else{o.x-=(o.px-(o.px=o.x))*friction;o.y-=(o.py-(o.py=o.
y))*friction}}event.tick({type:"tick",alpha:alpha})};force.nodes=
function(x){if(!arguments.length)return nodes;nodes=x;return
force};force.links=function(x){if(!arguments.length)return
links;links=x;return
force};force.size=function(x){if(!arguments.length)return
size;size=x;return
force};force.linkDistance=function(x){if(!arguments.length)return
linkDistance;linkDistance=typeof x==="function"?x:+x;return
force};force.distance=force.linkDistance;force.linkStrength=function(x){
if(!arguments.length)return linkStrength;linkStrength=typeof
x==="function"?x:+x;return
force};force.friction=function(x){if(!arguments.length)return
friction;friction=+x;return
force};force.charge=function(x){if(!arguments.length)return
charge;charge=typeof x==="function"?x:+x;return
force};force.gravity=function(x){if(!arguments.length)return
gravity;gravity=+x;return
force};force.theta=function(x){if(!arguments.length)return
theta;theta=+x;return
force};force.alpha=function(x){if(!arguments.length)return
alpha;x=+x;if(alpha){if(x>0)alpha=x;else alpha=0}else
if(x>0){event.start({type:"start",alpha:alpha=x});d3.timer(force.tick)}
return force};force.start=function(){var
i,n=nodes.length,m=links.length,w=size[0],h=size[1],neighbors,o;for(i=0;
i<n;++i){(o=nodes[i]).index=i;o.weight=0}for(i=0;i<m;++i){o=links[i];if(
typeof o.source=="number")o.source=nodes[o.source];if(typeof
o.target=="number")o.target=nodes[o.target];++o.source.weight;++o.target
.weight}for(i=0;i<n;++i){o=nodes[i];if(isNaN(o.x))o.x=position("x",w);if
(isNaN(o.y))o.y=position("y",h);if(isNaN(o.px))o.px=o.x;if(isNaN(o.py))o
.py=o.y}distances=[];if(typeof
linkDistance==="function")for(i=0;i<m;++i)distances[i]=+linkDistance.
call(this,links[i],i);else
for(i=0;i<m;++i)distances[i]=linkDistance;strengths=[];if(typeof
linkStrength==="function")for(i=0;i<m;++i)strengths[i]=+linkStrength.
call(this,links[i],i);else
for(i=0;i<m;++i)strengths[i]=linkStrength;charges=[];if(typeof
charge==="function")for(i=0;i<n;++i)charges[i]=+charge.call(this,nodes[i
],i);else for(i=0;i<n;++i)charges[i]=charge;function
position(dimension,size){if(!neighbors){neighbors=new
Array(n);for(j=0;j<n;++j){neighbors[j]=[]}for(j=0;j<m;++j){var
o=links[j];neighbors[o.source.index].push(o.target);neighbors[o.target.
index].push(o.source)}}var
candidates=neighbors[i],j=-1,m=candidates.length,x;while(++j<m)if(!isNaN
(x=candidates[j][dimension]))return x;return Math.random()*size}return
force.resume()};force.resume=function(){return
force.alpha(.1)};force.stop=function(){return
force.alpha(0)};force.drag=function(){if(!drag)drag=d3.behavior.drag().
origin(d3_identity).on("dragstart.force",d3_layout_forceDragstart).on("
drag.force",dragmove).on("dragend.force",d3_layout_forceDragend);if(!
arguments.length)return
drag;this.on("mouseover.force",d3_layout_forceMouseover).on("mouseout.
force",d3_layout_forceMouseout).call(drag)};function
dragmove(d){d.px=d3.event.x,d.py=d3.event.y;force.resume()}return
d3.rebind(force,event,"on")};function
d3_layout_forceDragstart(d){d.fixed|=2}function
d3_layout_forceDragend(d){d.fixed&=~6}function
d3_layout_forceMouseover(d){d.fixed|=4;d.px=d.x,d.py=d.y}function
d3_layout_forceMouseout(d){d.fixed&=~4}function
d3_layout_forceAccumulate(quad,alpha,charges){var
cx=0,cy=0;quad.charge=0;if(!quad.leaf){var
nodes=quad.nodes,n=nodes.length,i=-1,c;while(++i<n){c=nodes[i];if(c==
null)continue;d3_layout_forceAccumulate(c,alpha,charges);quad.charge+=c.
charge;cx+=c.charge*c.cx;cy+=c.charge*c.cy}}if(quad.point){if(!quad.leaf
){quad.point.x+=Math.random()-.5;quad.point.y+=Math.random()-.5}var
k=alpha*charges[quad.point.index];quad.charge+=quad.pointCharge=k;cx+=k*
quad.point.x;cy+=k*quad.point.y}quad.cx=cx/quad.charge;quad.cy=cy/quad.
charge}var
d3_layout_forceLinkDistance=20,d3_layout_forceLinkStrength=1;d3.layout.
hierarchy=function(){var
sort=d3_layout_hierarchySort,children=d3_layout_hierarchyChildren,value=
d3_layout_hierarchyValue;function recurse(node,depth,nodes){var
childs=children.call(hierarchy,node,depth);node.depth=depth;nodes.push(
node);if(childs&&(n=childs.length)){var i=-1,n,c=node.children=new
Array(n),v=0,j=depth+1,d;while(++i<n){d=c[i]=recurse(childs[i],j,nodes);
d.parent=node;v+=d.value}if(sort)c.sort(sort);if(value)node.value=v}else
{delete
node.children;if(value){node.value=+value.call(hierarchy,node,depth)||0}
}return node}function revalue(node,depth){var
children=node.children,v=0;if(children&&(n=children.length)){var
i=-1,n,j=depth+1;while(++i<n)v+=revalue(children[i],j)}else
if(value){v=+value.call(hierarchy,node,depth)||0}if(value)node.value=v;
return v}function hierarchy(d){var nodes=[];recurse(d,0,nodes);return
nodes}hierarchy.sort=function(x){if(!arguments.length)return
sort;sort=x;return
hierarchy};hierarchy.children=function(x){if(!arguments.length)return
children;children=x;return
hierarchy};hierarchy.value=function(x){if(!arguments.length)return
value;value=x;return
hierarchy};hierarchy.revalue=function(root){revalue(root,0);return
root};return hierarchy};function
d3_layout_hierarchyRebind(object,hierarchy){d3.rebind(object,hierarchy,"
sort","children","value");object.nodes=object;object.links=
d3_layout_hierarchyLinks;return object}function
d3_layout_hierarchyChildren(d){return d.children}function
d3_layout_hierarchyValue(d){return d.value}function
d3_layout_hierarchySort(a,b){return b.value-a.value}function
d3_layout_hierarchyLinks(nodes){return
d3.merge(nodes.map(function(parent){return(parent.children||[]).map(
function(child){return{source:parent,target:child}})}))}d3.layout.
partition=function(){var
hierarchy=d3.layout.hierarchy(),size=[1,1];function
position(node,x,dx,dy){var
children=node.children;node.x=x;node.y=node.depth*dy;node.dx=dx;node.dy=
dy;if(children&&(n=children.length)){var
i=-1,n,c,d;dx=node.value?dx/node.value:0;while(++i<n){position(c=
children[i],x,d=c.value*dx,dy);x+=d}}}function depth(node){var
children=node.children,d=0;if(children&&(n=children.length)){var
i=-1,n;while(++i<n)d=Math.max(d,depth(children[i]))}return 1+d}function
partition(d,i){var
nodes=hierarchy.call(this,d,i);position(nodes[0],0,size[0],size[1]/depth
(nodes[0]));return
nodes}partition.size=function(x){if(!arguments.length)return
size;size=x;return partition};return
d3_layout_hierarchyRebind(partition,hierarchy)};d3.layout.pie=function()
{var
value=Number,sort=d3_layout_pieSortByValue,startAngle=0,endAngle=τ;
function pie(data){var
values=data.map(function(d,i){return+value.call(pie,d,i)});var
a=+(typeof
startAngle==="function"?startAngle.apply(this,arguments):startAngle);var
k=((typeof
endAngle==="function"?endAngle.apply(this,arguments):endAngle)-a)/d3.sum
(values);var
index=d3.range(data.length);if(sort!=null)index.sort(sort===
d3_layout_pieSortByValue?function(i,j){return
values[j]-values[i]}:function(i,j){return sort(data[i],data[j])});var
arcs=[];index.forEach(function(i){var
d;arcs[i]={data:data[i],value:d=values[i],startAngle:a,endAngle:a+=d*k}}
);return arcs}pie.value=function(x){if(!arguments.length)return
value;value=x;return
pie};pie.sort=function(x){if(!arguments.length)return sort;sort=x;return
pie};pie.startAngle=function(x){if(!arguments.length)return
startAngle;startAngle=x;return
pie};pie.endAngle=function(x){if(!arguments.length)return
endAngle;endAngle=x;return pie};return pie};var
d3_layout_pieSortByValue={};d3.layout.stack=function(){var
values=d3_identity,order=d3_layout_stackOrderDefault,offset=
d3_layout_stackOffsetZero,out=d3_layout_stackOut,x=d3_layout_stackX,y=
d3_layout_stackY;function stack(data,index){var
series=data.map(function(d,i){return values.call(stack,d,i)});var
points=series.map(function(d){return
d.map(function(v,i){return[x.call(stack,v,i),y.call(stack,v,i)]})});var
orders=order.call(stack,points,index);series=d3.permute(series,orders);
points=d3.permute(points,orders);var
offsets=offset.call(stack,points,index);var
n=series.length,m=series[0].length,i,j,o;for(j=0;j<m;++j){out.call(stack
,series[0][j],o=offsets[j],points[0][j][1]);for(i=1;i<n;++i){out.call(
stack,series[i][j],o+=points[i-1][j][1],points[i][j][1])}}return
data}stack.values=function(x){if(!arguments.length)return
values;values=x;return
stack};stack.order=function(x){if(!arguments.length)return
order;order=typeof
x==="function"?x:d3_layout_stackOrders.get(x)||
d3_layout_stackOrderDefault;return
stack};stack.offset=function(x){if(!arguments.length)return
offset;offset=typeof
x==="function"?x:d3_layout_stackOffsets.get(x)||
d3_layout_stackOffsetZero;return
stack};stack.x=function(z){if(!arguments.length)return x;x=z;return
stack};stack.y=function(z){if(!arguments.length)return y;y=z;return
stack};stack.out=function(z){if(!arguments.length)return
out;out=z;return stack};return stack};function
d3_layout_stackX(d){return d.x}function d3_layout_stackY(d){return
d.y}function d3_layout_stackOut(d,y0,y){d.y0=y0;d.y=y}var
d3_layout_stackOrders=d3.map({"inside-out":function(data){var
n=data.length,i,j,max=data.map(d3_layout_stackMaxIndex),sums=data.map(
d3_layout_stackReduceSum),index=d3.range(n).sort(function(a,b){return
max[a]-max[b]}),top=0,bottom=0,tops=[],bottoms=[];for(i=0;i<n;++i){j=
index[i];if(top<bottom){top+=sums[j];tops.push(j)}else{bottom+=sums[j];
bottoms.push(j)}}return
bottoms.reverse().concat(tops)},reverse:function(data){return
d3.range(data.length).reverse()},"default":d3_layout_stackOrderDefault})
;var d3_layout_stackOffsets=d3.map({silhouette:function(data){var
n=data.length,m=data[0].length,sums=[],max=0,i,j,o,y0=[];for(j=0;j<m;++j
){for(i=0,o=0;i<n;i++)o+=data[i][j][1];if(o>max)max=o;sums.push(o)}for(j
=0;j<m;++j){y0[j]=(max-sums[j])/2}return y0},wiggle:function(data){var
n=data.length,x=data[0],m=x.length,i,j,k,s1,s2,s3,dx,o,o0,y0=[];y0[0]=o=
o0=0;for(j=1;j<m;++j){for(i=0,s1=0;i<n;++i)s1+=data[i][j][1];for(i=0,s2=
0,dx=x[j][0]-x[j-1][0];i<n;++i){for(k=0,s3=(data[i][j][1]-data[i][j-1][1
])/(2*dx);k<i;++k){s3+=(data[k][j][1]-data[k][j-1][1])/dx}s2+=s3*data[i]
[j][1]}y0[j]=o-=s1?s2/s1*dx:0;if(o<o0)o0=o}for(j=0;j<m;++j)y0[j]-=o0;
return y0},expand:function(data){var
n=data.length,m=data[0].length,k=1/n,i,j,o,y0=[];for(j=0;j<m;++j){for(i=
0,o=0;i<n;i++)o+=data[i][j][1];if(o)for(i=0;i<n;i++)data[i][j][1]/=o;
else for(i=0;i<n;i++)data[i][j][1]=k}for(j=0;j<m;++j)y0[j]=0;return
y0},zero:d3_layout_stackOffsetZero});function
d3_layout_stackOrderDefault(data){return d3.range(data.length)}function
d3_layout_stackOffsetZero(data){var
j=-1,m=data[0].length,y0=[];while(++j<m)y0[j]=0;return y0}function
d3_layout_stackMaxIndex(array){var
i=1,j=0,v=array[0][1],k,n=array.length;for(;i<n;++i){if((k=array[i][1])>
v){j=i;v=k}}return j}function d3_layout_stackReduceSum(d){return
d.reduce(d3_layout_stackSum,0)}function d3_layout_stackSum(p,d){return
p+d[1]}d3.layout.histogram=function(){var
frequency=true,valuer=Number,ranger=d3_layout_histogramRange,binner=
d3_layout_histogramBinSturges;function histogram(data,i){var
bins=[],values=data.map(valuer,this),range=ranger.call(this,values,i),
thresholds=binner.call(this,range,values,i),bin,i=-1,n=values.length,m=
thresholds.length-1,k=frequency?1:1/n,x;while(++i<m){bin=bins[i]=[];bin.
dx=thresholds[i+1]-(bin.x=thresholds[i]);bin.y=0}if(m>0){i=-1;while(++i<
n){x=values[i];if(x>=range[0]&&x<=range[1]){bin=bins[d3.bisect(
thresholds,x,1,m)-1];bin.y+=k;bin.push(data[i])}}}return
bins}histogram.value=function(x){if(!arguments.length)return
valuer;valuer=x;return
histogram};histogram.range=function(x){if(!arguments.length)return
ranger;ranger=d3_functor(x);return
histogram};histogram.bins=function(x){if(!arguments.length)return
binner;binner=typeof x==="number"?function(range){return
d3_layout_histogramBinFixed(range,x)}:d3_functor(x);return
histogram};histogram.frequency=function(x){if(!arguments.length)return
frequency;frequency=!!x;return histogram};return histogram};function
d3_layout_histogramBinSturges(range,values){return
d3_layout_histogramBinFixed(range,Math.ceil(Math.log(values.length)/Math
.LN2+1))}function d3_layout_histogramBinFixed(range,n){var
x=-1,b=+range[0],m=(range[1]-b)/n,f=[];while(++x<=n)f[x]=m*x+b;return
f}function
d3_layout_histogramRange(values){return[d3.min(values),d3.max(values)]}
d3.layout.tree=function(){var
hierarchy=d3.layout.hierarchy().sort(null).value(null),separation=
d3_layout_treeSeparation,size=[1,1],nodeSize=false;function
tree(d,i){var nodes=hierarchy.call(this,d,i),root=nodes[0];function
firstWalk(node,previousSibling){var
children=node.children,layout=node._tree;if(children&&(n=children.length
)){var
n,firstChild=children[0],previousChild,ancestor=firstChild,child,i=-1;
while(++i<n){child=children[i];firstWalk(child,previousChild);ancestor=
apportion(child,previousChild,ancestor);previousChild=child}
d3_layout_treeShift(node);var
midpoint=.5*(firstChild._tree.prelim+child._tree.prelim);if(
previousSibling){layout.prelim=previousSibling._tree.prelim+separation(
node,previousSibling);layout.mod=layout.prelim-midpoint}else{layout.
prelim=midpoint}}else{if(previousSibling){layout.prelim=previousSibling.
_tree.prelim+separation(node,previousSibling)}}}function
secondWalk(node,x){node.x=node._tree.prelim+x;var
children=node.children;if(children&&(n=children.length)){var
i=-1,n;x+=node._tree.mod;while(++i<n){secondWalk(children[i],x)}}}
function
apportion(node,previousSibling,ancestor){if(previousSibling){var
vip=node,vop=node,vim=previousSibling,vom=node.parent.children[0],sip=
vip._tree.mod,sop=vop._tree.mod,sim=vim._tree.mod,som=vom._tree.mod,
shift;while(vim=d3_layout_treeRight(vim),vip=d3_layout_treeLeft(vip),vim
&&vip){vom=d3_layout_treeLeft(vom);vop=d3_layout_treeRight(vop);vop.
_tree.ancestor=node;shift=vim._tree.prelim+sim-vip._tree.prelim-sip+
separation(vim,vip);if(shift>0){d3_layout_treeMove(
d3_layout_treeAncestor(vim,node,ancestor),node,shift);sip+=shift;sop+=
shift}sim+=vim._tree.mod;sip+=vip._tree.mod;som+=vom._tree.mod;sop+=vop.
_tree.mod}if(vim&&!d3_layout_treeRight(vop)){vop._tree.thread=vim;vop.
_tree.mod+=sim-sop}if(vip&&!d3_layout_treeLeft(vom)){vom._tree.thread=
vip;vom._tree.mod+=sip-som;ancestor=node}}return
ancestor}d3_layout_treeVisitAfter(root,function(node,previousSibling){
node._tree={ancestor:node,prelim:0,mod:0,change:0,shift:0,number:
previousSibling?previousSibling._tree.number+1:0}});firstWalk(root);
secondWalk(root,-root._tree.prelim);var
left=d3_layout_treeSearch(root,d3_layout_treeLeftmost),right=
d3_layout_treeSearch(root,d3_layout_treeRightmost),deep=
d3_layout_treeSearch(root,d3_layout_treeDeepest),x0=left.x-separation(
left,right)/2,x1=right.x+separation(right,left)/2,y1=deep.depth||1;
d3_layout_treeVisitAfter(root,nodeSize?function(node){node.x*=size[0];
node.y=node.depth*size[1];delete
node._tree}:function(node){node.x=(node.x-x0)/(x1-x0)*size[0];node.y=
node.depth/y1*size[1];delete node._tree});return
nodes}tree.separation=function(x){if(!arguments.length)return
separation;separation=x;return
tree};tree.size=function(x){if(!arguments.length)return
nodeSize?null:size;nodeSize=(size=x)==null;return
tree};tree.nodeSize=function(x){if(!arguments.length)return
nodeSize?size:null;nodeSize=(size=x)!=null;return tree};return
d3_layout_hierarchyRebind(tree,hierarchy)};function
d3_layout_treeSeparation(a,b){return a.parent==b.parent?1:2}function
d3_layout_treeLeft(node){var children=node.children;return
children&&children.length?children[0]:node._tree.thread}function
d3_layout_treeRight(node){var children=node.children,n;return
children&&(n=children.length)?children[n-1]:node._tree.thread}function
d3_layout_treeSearch(node,compare){var
children=node.children;if(children&&(n=children.length)){var
child,n,i=-1;while(++i<n){if(compare(child=d3_layout_treeSearch(children
[i],compare),node)>0){node=child}}}return node}function
d3_layout_treeRightmost(a,b){return a.x-b.x}function
d3_layout_treeLeftmost(a,b){return b.x-a.x}function
d3_layout_treeDeepest(a,b){return a.depth-b.depth}function
d3_layout_treeVisitAfter(node,callback){function
visit(node,previousSibling){var
children=node.children;if(children&&(n=children.length)){var
child,previousChild=null,i=-1,n;while(++i<n){child=children[i];visit(
child,previousChild);previousChild=child}}callback(node,previousSibling)
}visit(node,null)}function d3_layout_treeShift(node){var
shift=0,change=0,children=node.children,i=children.length,child;while(--
i>=0){child=children[i]._tree;child.prelim+=shift;child.mod+=shift;shift
+=child.shift+(change+=child.change)}}function
d3_layout_treeMove(ancestor,node,shift){ancestor=ancestor._tree;node=
node._tree;var
change=shift/(node.number-ancestor.number);ancestor.change+=change;node.
change-=change;node.shift+=shift;node.prelim+=shift;node.mod+=shift}
function d3_layout_treeAncestor(vim,node,ancestor){return
vim._tree.ancestor.parent==node.parent?vim._tree.ancestor:ancestor}d3.
layout.pack=function(){var
hierarchy=d3.layout.hierarchy().sort(d3_layout_packSort),padding=0,size=
[1,1],radius;function pack(d,i){var
nodes=hierarchy.call(this,d,i),root=nodes[0],w=size[0],h=size[1],r=
radius==null?Math.sqrt:typeof
radius==="function"?radius:function(){return
radius};root.x=root.y=0;d3_layout_treeVisitAfter(root,function(d){d.r=+r
(d.value)});d3_layout_treeVisitAfter(root,d3_layout_packSiblings);if(
padding){var
dr=padding*(radius?1:Math.max(2*root.r/w,2*root.r/h))/2;
d3_layout_treeVisitAfter(root,function(d){d.r+=dr});
d3_layout_treeVisitAfter(root,d3_layout_packSiblings);
d3_layout_treeVisitAfter(root,function(d){d.r-=dr})}
d3_layout_packTransform(root,w/2,h/2,radius?1:1/Math.max(2*root.r/w,2*
root.r/h));return
nodes}pack.size=function(_){if(!arguments.length)return
size;size=_;return
pack};pack.radius=function(_){if(!arguments.length)return
radius;radius=_==null||typeof _==="function"?_:+_;return
pack};pack.padding=function(_){if(!arguments.length)return
padding;padding=+_;return pack};return
d3_layout_hierarchyRebind(pack,hierarchy)};function
d3_layout_packSort(a,b){return a.value-b.value}function
d3_layout_packInsert(a,b){var
c=a._pack_next;a._pack_next=b;b._pack_prev=a;b._pack_next=c;c._pack_prev
=b}function
d3_layout_packSplice(a,b){a._pack_next=b;b._pack_prev=a}function
d3_layout_packIntersects(a,b){var
dx=b.x-a.x,dy=b.y-a.y,dr=a.r+b.r;return.999*dr*dr>dx*dx+dy*dy}function
d3_layout_packSiblings(node){if(!(nodes=node.children)||!(n=nodes.length
))return;var
nodes,xMin=Infinity,xMax=-Infinity,yMin=Infinity,yMax=-Infinity,a,b,c,i,
j,k,n;function
bound(node){xMin=Math.min(node.x-node.r,xMin);xMax=Math.max(node.x+node.
r,xMax);yMin=Math.min(node.y-node.r,yMin);yMax=Math.max(node.y+node.r,
yMax)}nodes.forEach(d3_layout_packLink);a=nodes[0];a.x=-a.r;a.y=0;bound(
a);if(n>1){b=nodes[1];b.x=b.r;b.y=0;bound(b);if(n>2){c=nodes[2];
d3_layout_packPlace(a,b,c);bound(c);d3_layout_packInsert(a,c);a.
_pack_prev=c;d3_layout_packInsert(c,b);b=a._pack_next;for(i=3;i<n;i++){
d3_layout_packPlace(a,b,c=nodes[i]);var
isect=0,s1=1,s2=1;for(j=b._pack_next;j!==b;j=j._pack_next,s1++){if(
d3_layout_packIntersects(j,c)){isect=1;break}}if(isect==1){for(k=a.
_pack_prev;k!==j._pack_prev;k=k._pack_prev,s2++){if(
d3_layout_packIntersects(k,c)){break}}}if(isect){if(s1<s2||s1==s2&&b.r<a
.r)d3_layout_packSplice(a,b=j);else
d3_layout_packSplice(a=k,b);i--}else{d3_layout_packInsert(a,c);b=c;bound
(c)}}}}var
cx=(xMin+xMax)/2,cy=(yMin+yMax)/2,cr=0;for(i=0;i<n;i++){c=nodes[i];c.x-=
cx;c.y-=cy;cr=Math.max(cr,c.r+Math.sqrt(c.x*c.x+c.y*c.y))}node.r=cr;
nodes.forEach(d3_layout_packUnlink)}function
d3_layout_packLink(node){node._pack_next=node._pack_prev=node}function
d3_layout_packUnlink(node){delete node._pack_next;delete
node._pack_prev}function d3_layout_packTransform(node,x,y,k){var
children=node.children;node.x=x+=k*node.x;node.y=y+=k*node.y;node.r*=k;
if(children){var
i=-1,n=children.length;while(++i<n)d3_layout_packTransform(children[i],x
,y,k)}}function d3_layout_packPlace(a,b,c){var
db=a.r+c.r,dx=b.x-a.x,dy=b.y-a.y;if(db&&(dx||dy)){var
da=b.r+c.r,dc=dx*dx+dy*dy;da*=da;db*=db;var
x=.5+(db-da)/(2*dc),y=Math.sqrt(Math.max(0,2*da*(db+dc)-(db-=dc)*db-da*
da))/(2*dc);
c.x=a.x+x*dx+y*dy;c.y=a.y+x*dy-y*dx}else{c.x=a.x+db;c.y=a.y}}d3.layout.
cluster=function(){var
hierarchy=d3.layout.hierarchy().sort(null).value(null),separation=
d3_layout_treeSeparation,size=[1,1],nodeSize=false;function
cluster(d,i){var
nodes=hierarchy.call(this,d,i),root=nodes[0],previousNode,x=0;
d3_layout_treeVisitAfter(root,function(node){var
children=node.children;if(children&&children.length){node.x=
d3_layout_clusterX(children);node.y=d3_layout_clusterY(children)}else{
node.x=previousNode?x+=separation(node,previousNode):0;node.y=0;
previousNode=node}});var
left=d3_layout_clusterLeft(root),right=d3_layout_clusterRight(root),x0=
left.x-separation(left,right)/2,x1=right.x+separation(right,left)/2;
d3_layout_treeVisitAfter(root,nodeSize?function(node){node.x=(node.x-
root.x)*size[0];node.y=(root.y-node.y)*size[1]}:function(node){node.x=(
node.x-x0)/(x1-x0)*size[0];node.y=(1-(root.y?node.y/root.y:1))*size[1]})
;return nodes}cluster.separation=function(x){if(!arguments.length)return
separation;separation=x;return
cluster};cluster.size=function(x){if(!arguments.length)return
nodeSize?null:size;nodeSize=(size=x)==null;return
cluster};cluster.nodeSize=function(x){if(!arguments.length)return
nodeSize?size:null;nodeSize=(size=x)!=null;return cluster};return
d3_layout_hierarchyRebind(cluster,hierarchy)};function
d3_layout_clusterY(children){return
1+d3.max(children,function(child){return child.y})}function
d3_layout_clusterX(children){return
children.reduce(function(x,child){return
x+child.x},0)/children.length}function d3_layout_clusterLeft(node){var
children=node.children;return
children&&children.length?d3_layout_clusterLeft(children[0]):node}
function d3_layout_clusterRight(node){var
children=node.children,n;return
children&&(n=children.length)?d3_layout_clusterRight(children[n-1]):node
}d3.layout.treemap=function(){var
hierarchy=d3.layout.hierarchy(),round=Math.round,size=[1,1],padding=null
,pad=d3_layout_treemapPadNull,sticky=false,stickies,mode="squarify",
ratio=.5*(1+Math.sqrt(5));function scale(children,k){var
i=-1,n=children.length,child,area;while(++i<n){area=(child=children[i]).
value*(k<0?0:k);child.area=isNaN(area)||area<=0?0:area}}function
squarify(node){var
children=node.children;if(children&&children.length){var
rect=pad(node),row=[],remaining=children.slice(),child,best=Infinity,
score,u=mode==="slice"?rect.dx:mode==="dice"?rect.dy:mode==="slice-dice"
?node.depth&1?rect.dy:rect.dx:Math.min(rect.dx,rect.dy),n;scale(
remaining,rect.dx*rect.dy/node.value);row.area=0;while((n=remaining.
length)>0){row.push(child=remaining[n-1]);row.area+=child.area;if(mode!=
="squarify"||(score=worst(row,u))<=best){remaining.pop();best=score}else
{row.area-=row.pop().area;position(row,u,rect,false);u=Math.min(rect.dx,
rect.dy);row.length=row.area=0;best=Infinity}}if(row.length){position(
row,u,rect,true);row.length=row.area=0}children.forEach(squarify)}}
function stickify(node){var
children=node.children;if(children&&children.length){var
rect=pad(node),remaining=children.slice(),child,row=[];scale(remaining,
rect.dx*rect.dy/node.value);row.area=0;while(child=remaining.pop()){row.
push(child);row.area+=child.area;if(child.z!=null){position(row,child.z?
rect.dx:rect.dy,rect,!remaining.length);row.length=row.area=0}}children.
forEach(stickify)}}function worst(row,u){var
s=row.area,r,rmax=0,rmin=Infinity,i=-1,n=row.length;while(++i<n){if(!(r=
row[i].area))continue;if(r<rmin)rmin=r;if(r>rmax)rmax=r}s*=s;u*=u;return
s?Math.max(u*rmax*ratio/s,s/(u*rmin*ratio)):Infinity}function
position(row,u,rect,flush){var
i=-1,n=row.length,x=rect.x,y=rect.y,v=u?round(row.area/u):0,o;if(u==rect
.dx){if(flush||v>rect.dy)v=rect.dy;while(++i<n){o=row[i];o.x=x;o.y=y;o.
dy=v;x+=o.dx=Math.min(rect.x+rect.dx-x,v?round(o.area/v):0)}o.z=true;o.
dx+=rect.x+rect.dx-x;rect.y+=v;rect.dy-=v}else{if(flush||v>rect.dx)v=
rect.dx;while(++i<n){o=row[i];o.x=x;o.y=y;o.dx=v;y+=o.dy=Math.min(rect.y
+rect.dy-y,v?round(o.area/v):0)}o.z=false;o.dy+=rect.y+rect.dy-y;rect.x+
=v;rect.dx-=v}}function treemap(d){var
nodes=stickies||hierarchy(d),root=nodes[0];root.x=0;root.y=0;root.dx=
size[0];root.dy=size[1];if(stickies)hierarchy.revalue(root);scale([root]
,root.dx*root.dy/root.value);(stickies?stickify:squarify)(root);if(
sticky)stickies=nodes;return
nodes}treemap.size=function(x){if(!arguments.length)return
size;size=x;return
treemap};treemap.padding=function(x){if(!arguments.length)return
padding;function padFunction(node){var
p=x.call(treemap,node,node.depth);return
p==null?d3_layout_treemapPadNull(node):d3_layout_treemapPad(node,typeof
p==="number"?[p,p,p,p]:p)}function padConstant(node){return
d3_layout_treemapPad(node,x)}var
type;pad=(padding=x)==null?d3_layout_treemapPadNull:(type=typeof
x)==="function"?padFunction:type==="number"?(x=[x,x,x,x],padConstant):
padConstant;return
treemap};treemap.round=function(x){if(!arguments.length)return
round!=Number;round=x?Math.round:Number;return
treemap};treemap.sticky=function(x){if(!arguments.length)return
sticky;sticky=x;stickies=null;return
treemap};treemap.ratio=function(x){if(!arguments.length)return
ratio;ratio=x;return
treemap};treemap.mode=function(x){if(!arguments.length)return
mode;mode=x+"";return treemap};return
d3_layout_hierarchyRebind(treemap,hierarchy)};function
d3_layout_treemapPadNull(node){return{x:node.x,y:node.y,dx:node.dx,dy:
node.dy}}function d3_layout_treemapPad(node,padding){var
x=node.x+padding[3],y=node.y+padding[0],dx=node.dx-padding[1]-padding[3]
,dy=node.dy-padding[0]-padding[2];if(dx<0){x+=dx/2;dx=0}if(dy<0){y+=dy/2
;dy=0}return{x:x,y:y,dx:dx,dy:dy}}d3.random={normal:function(µ,σ){var
n=arguments.length;if(n<2)σ=1;if(n<1)µ=0;return function(){var
x,y,r;do{x=Math.random()*2-1;y=Math.random()*2-1;r=x*x+y*y}while(!r||r>1
);return µ+σ*x*Math.sqrt(-2*Math.log(r)/r)}},logNormal:function(){var
random=d3.random.normal.apply(d3,arguments);return function(){return
Math.exp(random())}},bates:function(m){var
random=d3.random.irwinHall(m);return function(){return
random()/m}},irwinHall:function(m){return function(){for(var
s=0,j=0;j<m;j++)s+=Math.random();return s}}};d3.scale={};function
d3_scaleExtent(domain){var
start=domain[0],stop=domain[domain.length-1];return
start<stop?[start,stop]:[stop,start]}function
d3_scaleRange(scale){return
scale.rangeExtent?scale.rangeExtent():d3_scaleExtent(scale.range())}
function d3_scale_bilinear(domain,range,uninterpolate,interpolate){var
u=uninterpolate(domain[0],domain[1]),i=interpolate(range[0],range[1]);
return function(x){return i(u(x))}}function
d3_scale_nice(domain,nice){var
i0=0,i1=domain.length-1,x0=domain[i0],x1=domain[i1],dx;if(x1<x0){dx=i0,
i0=i1,i1=dx;dx=x0,x0=x1,x1=dx}domain[i0]=nice.floor(x0);domain[i1]=nice.
ceil(x1);return domain}function d3_scale_niceStep(step){return
step?{floor:function(x){return
Math.floor(x/step)*step},ceil:function(x){return
Math.ceil(x/step)*step}}:d3_scale_niceIdentity}var
d3_scale_niceIdentity={floor:d3_identity,ceil:d3_identity};function
d3_scale_polylinear(domain,range,uninterpolate,interpolate){var
u=[],i=[],j=0,k=Math.min(domain.length,range.length)-1;if(domain[k]<
domain[0]){domain=domain.slice().reverse();range=range.slice().reverse()
}while(++j<=k){u.push(uninterpolate(domain[j-1],domain[j]));i.push(
interpolate(range[j-1],range[j]))}return function(x){var
j=d3.bisect(domain,x,1,k)-1;return
i[j](u[j](x))}}d3.scale.linear=function(){return
d3_scale_linear([0,1],[0,1],d3_interpolate,false)};function
d3_scale_linear(domain,range,interpolate,clamp){var
output,input;function rescale(){var
linear=Math.min(domain.length,range.length)>2?d3_scale_polylinear:
d3_scale_bilinear,uninterpolate=clamp?d3_uninterpolateClamp:
d3_uninterpolateNumber;output=linear(domain,range,uninterpolate,
interpolate);input=linear(range,domain,uninterpolate,d3_interpolate);
return scale}function scale(x){return
output(x)}scale.invert=function(y){return
input(y)};scale.domain=function(x){if(!arguments.length)return
domain;domain=x.map(Number);return
rescale()};scale.range=function(x){if(!arguments.length)return
range;range=x;return rescale()};scale.rangeRound=function(x){return
scale.range(x).interpolate(d3_interpolateRound)};scale.clamp=function(x)
{if(!arguments.length)return clamp;clamp=x;return
rescale()};scale.interpolate=function(x){if(!arguments.length)return
interpolate;interpolate=x;return
rescale()};scale.ticks=function(m){return
d3_scale_linearTicks(domain,m)};scale.tickFormat=function(m,format){
return
d3_scale_linearTickFormat(domain,m,format)};scale.nice=function(m){
d3_scale_linearNice(domain,m);return
rescale()};scale.copy=function(){return
d3_scale_linear(domain,range,interpolate,clamp)};return
rescale()}function d3_scale_linearRebind(scale,linear){return
d3.rebind(scale,linear,"range","rangeRound","interpolate","clamp")}
function d3_scale_linearNice(domain,m){return
d3_scale_nice(domain,d3_scale_niceStep(d3_scale_linearTickRange(domain,m
)[2]))}function d3_scale_linearTickRange(domain,m){if(m==null)m=10;var
extent=d3_scaleExtent(domain),span=extent[1]-extent[0],step=Math.pow(10,
Math.floor(Math.log(span/m)/Math.LN10)),err=m/span*step;if(err<=.15)step
*=10;else if(err<=.35)step*=5;else
if(err<=.75)step*=2;extent[0]=Math.ceil(extent[0]/step)*step;extent[1]=
Math.floor(extent[1]/step)*step+step*.5;extent[2]=step;return
extent}function d3_scale_linearTicks(domain,m){return
d3.range.apply(d3,d3_scale_linearTickRange(domain,m))}function
d3_scale_linearTickFormat(domain,m,format){var
range=d3_scale_linearTickRange(domain,m);return
d3.format(format?format.replace(d3_format_re,function(a,b,c,d,e,f,g,h,i,
j){return[b,c,d,e,f,g,h,i||"."+d3_scale_linearFormatPrecision(j,range),j
].join("")}):",."+d3_scale_linearPrecision(range[2])+"f")}var
d3_scale_linearFormatSignificant={s:1,g:1,p:1,r:1,e:1};function
d3_scale_linearPrecision(value){return-Math.floor(Math.log(value)/Math.
LN10+.01)}function d3_scale_linearFormatPrecision(type,range){var
p=d3_scale_linearPrecision(range[2]);return type in
d3_scale_linearFormatSignificant?Math.abs(p-d3_scale_linearPrecision(
Math.max(Math.abs(range[0]),Math.abs(range[1]))))+
+(type!=="e"):p-(type==="%")*2}d3.scale.log=function(){return
d3_scale_log(d3.scale.linear().domain([0,1]),10,true,[1,10])};function
d3_scale_log(linear,base,positive,domain){function
log(x){return(positive?Math.log(x<0?0:x):-Math.log(x>0?0:-x))/Math.log(
base)}function pow(x){return
positive?Math.pow(base,x):-Math.pow(base,-x)}function scale(x){return
linear(log(x))}scale.invert=function(x){return
pow(linear.invert(x))};scale.domain=function(x){if(!arguments.length)
return
domain;positive=x[0]>=0;linear.domain((domain=x.map(Number)).map(log));
return scale};scale.base=function(_){if(!arguments.length)return
base;base=+_;linear.domain(domain.map(log));return
scale};scale.nice=function(){var
niced=d3_scale_nice(domain.map(log),positive?Math:
d3_scale_logNiceNegative);linear.domain(niced);domain=niced.map(pow);
return scale};scale.ticks=function(){var
extent=d3_scaleExtent(domain),ticks=[],u=extent[0],v=extent[1],i=Math.
floor(log(u)),j=Math.ceil(log(v)),n=base%1?2:base;if(isFinite(j-i)){if(
positive){for(;i<j;i++)for(var
k=1;k<n;k++)ticks.push(pow(i)*k);ticks.push(pow(i))}else{ticks.push(pow(
i));for(;i++<j;)for(var
k=n-1;k>0;k--)ticks.push(pow(i)*k)}for(i=0;ticks[i]<u;i++){}for(j=ticks.
length;ticks[j-1]>v;j--){}ticks=ticks.slice(i,j)}return
ticks};scale.tickFormat=function(n,format){if(!arguments.length)return
d3_scale_logFormat;if(arguments.length<2)format=d3_scale_logFormat;else
if(typeof format!=="function")format=d3.format(format);var
k=Math.max(.1,n/scale.ticks().length),f=positive?(e=1e-12,Math.ceil):(e=
-1e-12,Math.floor),e;return function(d){return
d/pow(f(log(d)+e))<=k?format(d):""}};scale.copy=function(){return
d3_scale_log(linear.copy(),base,positive,domain)};return
d3_scale_linearRebind(scale,linear)}var
d3_scale_logFormat=d3.format(".0e"),d3_scale_logNiceNegative={floor:
function(x){return-Math.ceil(-x)},ceil:function(x){return-Math.floor(-x)
}};d3.scale.pow=function(){return
d3_scale_pow(d3.scale.linear(),1,[0,1])};function
d3_scale_pow(linear,exponent,domain){var
powp=d3_scale_powPow(exponent),powb=d3_scale_powPow(1/exponent);function
scale(x){return linear(powp(x))}scale.invert=function(x){return
powb(linear.invert(x))};scale.domain=function(x){if(!arguments.length)
return domain;linear.domain((domain=x.map(Number)).map(powp));return
scale};scale.ticks=function(m){return
d3_scale_linearTicks(domain,m)};scale.tickFormat=function(m,format){
return
d3_scale_linearTickFormat(domain,m,format)};scale.nice=function(m){
return
scale.domain(d3_scale_linearNice(domain,m))};scale.exponent=function(x){
if(!arguments.length)return
exponent;powp=d3_scale_powPow(exponent=x);powb=d3_scale_powPow(1/
exponent);linear.domain(domain.map(powp));return
scale};scale.copy=function(){return
d3_scale_pow(linear.copy(),exponent,domain)};return
d3_scale_linearRebind(scale,linear)}function d3_scale_powPow(e){return
function(x){return
x<0?-Math.pow(-x,e):Math.pow(x,e)}}d3.scale.sqrt=function(){return
d3.scale.pow().exponent(.5)};d3.scale.ordinal=function(){return
d3_scale_ordinal([],{t:"range",a:[[]]})};function
d3_scale_ordinal(domain,ranger){var index,range,rangeBand;function
scale(x){return
range[((index.get(x)||ranger.t==="range"&&index.set(x,domain.push(x)))-1
)%range.length]}function steps(start,step){return
d3.range(domain.length).map(function(i){return
start+step*i})}scale.domain=function(x){if(!arguments.length)return
domain;domain=[];index=new d3_Map;var
i=-1,n=x.length,xi;while(++i<n)if(!index.has(xi=x[i]))index.set(xi,
domain.push(xi));return
scale[ranger.t].apply(scale,ranger.a)};scale.range=function(x){if(!
arguments.length)return
range;range=x;rangeBand=0;ranger={t:"range",a:arguments};return
scale};scale.rangePoints=function(x,padding){if(arguments.length<2)
padding=0;var
start=x[0],stop=x[1],step=(stop-start)/(Math.max(1,domain.length-1)+
padding);range=steps(domain.length<2?(start+stop)/2:start+step*padding/2
,step);rangeBand=0;ranger={t:"rangePoints",a:arguments};return
scale};scale.rangeBands=function(x,padding,outerPadding){if(arguments.
length<2)padding=0;if(arguments.length<3)outerPadding=padding;var
reverse=x[1]<x[0],start=x[reverse-0],stop=x[1-reverse],step=(stop-start)
/(domain.length-padding+2*outerPadding);range=steps(start+step*
outerPadding,step);if(reverse)range.reverse();rangeBand=step*(1-padding)
;ranger={t:"rangeBands",a:arguments};return
scale};scale.rangeRoundBands=function(x,padding,outerPadding){if(
arguments.length<2)padding=0;if(arguments.length<3)outerPadding=padding;
var
reverse=x[1]<x[0],start=x[reverse-0],stop=x[1-reverse],step=Math.floor((
stop-start)/(domain.length-padding+2*outerPadding)),error=stop-start-(
domain.length-padding)*step;range=steps(start+Math.round(error/2),step);
if(reverse)range.reverse();rangeBand=Math.round(step*(1-padding));ranger
={t:"rangeRoundBands",a:arguments};return
scale};scale.rangeBand=function(){return
rangeBand};scale.rangeExtent=function(){return
d3_scaleExtent(ranger.a[0])};scale.copy=function(){return
d3_scale_ordinal(domain,ranger)};return
scale.domain(domain)}d3.scale.category10=function(){return
d3.scale.ordinal().range(d3_category10)};d3.scale.category20=function(){
return
d3.scale.ordinal().range(d3_category20)};d3.scale.category20b=function()
{return
d3.scale.ordinal().range(d3_category20b)};d3.scale.category20c=function(
){return d3.scale.ordinal().range(d3_category20c)};var
d3_category10=[2062260,16744206,2924588,14034728,9725885,9197131,
14907330,8355711,12369186,1556175].map(d3_rgbString);var
d3_category20=[2062260,11454440,16744206,16759672,2924588,10018698,
14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,
8355711,13092807,12369186,14408589,1556175,10410725].map(d3_rgbString);
var
d3_category20b=[3750777,5395619,7040719,10264286,6519097,9216594,
11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,
14049643,15177372,8077683,10834324,13528509,14589654].map(d3_rgbString);
var
d3_category20c=[3244733,7057110,10406625,13032431,15095053,16616764,
16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,
12369372,14342891,6513507,9868950,12434877,14277081].map(d3_rgbString);
d3.scale.quantile=function(){return d3_scale_quantile([],[])};function
d3_scale_quantile(domain,range){var thresholds;function rescale(){var
k=0,q=range.length;thresholds=[];while(++k<q)thresholds[k-1]=d3.quantile
(domain,k/q);return scale}function scale(x){if(!isNaN(x=+x))return
range[d3.bisect(thresholds,x)]}scale.domain=function(x){if(!arguments.
length)return
domain;domain=x.filter(function(d){return!isNaN(d)}).sort(d3.ascending);
return rescale()};scale.range=function(x){if(!arguments.length)return
range;range=x;return rescale()};scale.quantiles=function(){return
thresholds};scale.invertExtent=function(y){y=range.indexOf(y);return
y<0?[NaN,NaN]:[y>0?thresholds[y-1]:domain[0],y<thresholds.length?
thresholds[y]:domain[domain.length-1]]};scale.copy=function(){return
d3_scale_quantile(domain,range)};return
rescale()}d3.scale.quantize=function(){return
d3_scale_quantize(0,1,[0,1])};function
d3_scale_quantize(x0,x1,range){var kx,i;function scale(x){return
range[Math.max(0,Math.min(i,Math.floor(kx*(x-x0))))]}function
rescale(){kx=range.length/(x1-x0);i=range.length-1;return
scale}scale.domain=function(x){if(!arguments.length)return[x0,x1];x0=+x[
0];x1=+x[x.length-1];return
rescale()};scale.range=function(x){if(!arguments.length)return
range;range=x;return
rescale()};scale.invertExtent=function(y){y=range.indexOf(y);y=y<0?NaN:y
/kx+x0;return[y,y+1/kx]};scale.copy=function(){return
d3_scale_quantize(x0,x1,range)};return
rescale()}d3.scale.threshold=function(){return
d3_scale_threshold([.5],[0,1])};function
d3_scale_threshold(domain,range){function scale(x){if(x<=x)return
range[d3.bisect(domain,x)]}scale.domain=function(_){if(!arguments.length
)return domain;domain=_;return
scale};scale.range=function(_){if(!arguments.length)return
range;range=_;return
scale};scale.invertExtent=function(y){y=range.indexOf(y);return[domain[y
-1],domain[y]]};scale.copy=function(){return
d3_scale_threshold(domain,range)};return
scale}d3.scale.identity=function(){return
d3_scale_identity([0,1])};function d3_scale_identity(domain){function
identity(x){return+x}identity.invert=identity;identity.domain=identity.
range=function(x){if(!arguments.length)return
domain;domain=x.map(identity);return
identity};identity.ticks=function(m){return
d3_scale_linearTicks(domain,m)};identity.tickFormat=function(m,format){
return
d3_scale_linearTickFormat(domain,m,format)};identity.copy=function(){
return d3_scale_identity(domain)};return
identity}d3.svg={};d3.svg.arc=function(){var
innerRadius=d3_svg_arcInnerRadius,outerRadius=d3_svg_arcOuterRadius,
startAngle=d3_svg_arcStartAngle,endAngle=d3_svg_arcEndAngle;function
arc(){var
r0=innerRadius.apply(this,arguments),r1=outerRadius.apply(this,arguments
),a0=startAngle.apply(this,arguments)+d3_svg_arcOffset,a1=endAngle.apply
(this,arguments)+d3_svg_arcOffset,da=(a1<a0&&(da=a0,a0=a1,a1=da),a1-a0),
df=da<π?"0":"1",c0=Math.cos(a0),s0=Math.sin(a0),c1=Math.cos(a1),s1=Math.
sin(a1);return da>=d3_svg_arcMax?r0?"M0,"+r1+"A"+r1+","+r1+" 0 1,1
0,"+-r1+"A"+r1+","+r1+" 0 1,1 0,"+r1+"M0,"+r0+"A"+r0+","+r0+" 0 1,0
0,"+-r0+"A"+r0+","+r0+" 0 1,0 0,"+r0+"Z":"M0,"+r1+"A"+r1+","+r1+" 0 1,1
0,"+-r1+"A"+r1+","+r1+" 0 1,1
0,"+r1+"Z":r0?"M"+r1*c0+","+r1*s0+"A"+r1+","+r1+" 0 "+df+",1
"+r1*c1+","+r1*s1+"L"+r0*c1+","+r0*s1+"A"+r0+","+r0+" 0 "+df+",0
"+r0*c0+","+r0*s0+"Z":"M"+r1*c0+","+r1*s0+"A"+r1+","+r1+" 0 "+df+",1
"+r1*c1+","+r1*s1+"L0,0"+"Z"}arc.innerRadius=function(v){if(!arguments.
length)return innerRadius;innerRadius=d3_functor(v);return
arc};arc.outerRadius=function(v){if(!arguments.length)return
outerRadius;outerRadius=d3_functor(v);return
arc};arc.startAngle=function(v){if(!arguments.length)return
startAngle;startAngle=d3_functor(v);return
arc};arc.endAngle=function(v){if(!arguments.length)return
endAngle;endAngle=d3_functor(v);return arc};arc.centroid=function(){var
r=(innerRadius.apply(this,arguments)+outerRadius.apply(this,arguments))/
2,a=(startAngle.apply(this,arguments)+endAngle.apply(this,arguments))/2+
d3_svg_arcOffset;return[Math.cos(a)*r,Math.sin(a)*r]};return arc};var
d3_svg_arcOffset=-halfπ,d3_svg_arcMax=τ-ε;function
d3_svg_arcInnerRadius(d){return d.innerRadius}function
d3_svg_arcOuterRadius(d){return d.outerRadius}function
d3_svg_arcStartAngle(d){return d.startAngle}function
d3_svg_arcEndAngle(d){return d.endAngle}function
d3_svg_line(projection){var
x=d3_geom_pointX,y=d3_geom_pointY,defined=d3_true,interpolate=
d3_svg_lineLinear,interpolateKey=interpolate.key,tension=.7;function
line(data){var
segments=[],points=[],i=-1,n=data.length,d,fx=d3_functor(x),fy=
d3_functor(y);function
segment(){segments.push("M",interpolate(projection(points),tension))}
while(++i<n){if(defined.call(this,d=data[i],i)){points.push([+fx.call(
this,d,i),+fy.call(this,d,i)])}else
if(points.length){segment();points=[]}}if(points.length)segment();return
segments.length?segments.join(""):null}line.x=function(_){if(!arguments.
length)return x;x=_;return
line};line.y=function(_){if(!arguments.length)return y;y=_;return
line};line.defined=function(_){if(!arguments.length)return
defined;defined=_;return
line};line.interpolate=function(_){if(!arguments.length)return
interpolateKey;if(typeof
_==="function")interpolateKey=interpolate=_;else
interpolateKey=(interpolate=d3_svg_lineInterpolators.get(_)||
d3_svg_lineLinear).key;return
line};line.tension=function(_){if(!arguments.length)return
tension;tension=_;return line};return line}d3.svg.line=function(){return
d3_svg_line(d3_identity)};var
d3_svg_lineInterpolators=d3.map({linear:d3_svg_lineLinear,"linear-closed
":d3_svg_lineLinearClosed,step:d3_svg_lineStep,"step-before":
d3_svg_lineStepBefore,"step-after":d3_svg_lineStepAfter,basis:
d3_svg_lineBasis,"basis-open":d3_svg_lineBasisOpen,"basis-closed":
d3_svg_lineBasisClosed,bundle:d3_svg_lineBundle,cardinal:
d3_svg_lineCardinal,"cardinal-open":d3_svg_lineCardinalOpen,"cardinal-
closed":d3_svg_lineCardinalClosed,monotone:d3_svg_lineMonotone});
d3_svg_lineInterpolators.forEach(function(key,value){value.key=key;value
.closed=/-closed$/.test(key)});function d3_svg_lineLinear(points){return
points.join("L")}function d3_svg_lineLinearClosed(points){return
d3_svg_lineLinear(points)+"Z"}function d3_svg_lineStep(points){var
i=0,n=points.length,p=points[0],path=[p[0],",",p[1]];while(++i<n)path.
push("H",(p[0]+(p=points[i])[0])/2,"V",p[1]);if(n>1)path.push("H",p[0]);
return path.join("")}function d3_svg_lineStepBefore(points){var
i=0,n=points.length,p=points[0],path=[p[0],",",p[1]];while(++i<n)path.
push("V",(p=points[i])[1],"H",p[0]);return path.join("")}function
d3_svg_lineStepAfter(points){var
i=0,n=points.length,p=points[0],path=[p[0],",",p[1]];while(++i<n)path.
push("H",(p=points[i])[0],"V",p[1]);return path.join("")}function
d3_svg_lineCardinalOpen(points,tension){return
points.length<4?d3_svg_lineLinear(points):points[1]+d3_svg_lineHermite(
points.slice(1,points.length-1),d3_svg_lineCardinalTangents(points,
tension))}function d3_svg_lineCardinalClosed(points,tension){return
points.length<3?d3_svg_lineLinear(points):points[0]+d3_svg_lineHermite((
points.push(points[0]),points),d3_svg_lineCardinalTangents([points[
points.length-2]].concat(points,[points[1]]),tension))}function
d3_svg_lineCardinal(points,tension){return
points.length<3?d3_svg_lineLinear(points):points[0]+d3_svg_lineHermite(
points,d3_svg_lineCardinalTangents(points,tension))}function
d3_svg_lineHermite(points,tangents){if(tangents.length<1||points.length!
=tangents.length&&points.length!=tangents.length+2){return
d3_svg_lineLinear(points)}var
quad=points.length!=tangents.length,path="",p0=points[0],p=points[1],t0=
tangents[0],t=t0,pi=1;if(quad){path+="Q"+(p[0]-t0[0]*2/3)+","+(p[1]-t0[1
]*2/3)+","+p[0]+","+p[1];p0=points[1];pi=2}if(tangents.length>1){t=
tangents[1];p=points[pi];pi++;path+="C"+(p0[0]+t0[0])+","+(p0[1]+t0[1])+
","+(p[0]-t[0])+","+(p[1]-t[1])+","+p[0]+","+p[1];for(var
i=2;i<tangents.length;i++,pi++){p=points[pi];t=tangents[i];path+="S"+(p[
0]-t[0])+","+(p[1]-t[1])+","+p[0]+","+p[1]}}if(quad){var
lp=points[pi];path+="Q"+(p[0]+t[0]*2/3)+","+(p[1]+t[1]*2/3)+","+lp[0]+",
"+lp[1]}return path}function
d3_svg_lineCardinalTangents(points,tension){var
tangents=[],a=(1-tension)/2,p0,p1=points[0],p2=points[1],i=1,n=points.
length;while(++i<n){p0=p1;p1=p2;p2=points[i];tangents.push([a*(p2[0]-p0[
0]),a*(p2[1]-p0[1])])}return tangents}function
d3_svg_lineBasis(points){if(points.length<3)return
d3_svg_lineLinear(points);var
i=1,n=points.length,pi=points[0],x0=pi[0],y0=pi[1],px=[x0,x0,x0,(pi=
points[1])[0]],py=[y0,y0,y0,pi[1]],path=[x0,",",y0,"L",d3_svg_lineDot4(
d3_svg_lineBasisBezier3,px),",",d3_svg_lineDot4(d3_svg_lineBasisBezier3,
py)];points.push(points[n-1]);while(++i<=n){pi=points[i];px.shift();px.
push(pi[0]);py.shift();py.push(pi[1]);d3_svg_lineBasisBezier(path,px,py)
}points.pop();path.push("L",pi);return path.join("")}function
d3_svg_lineBasisOpen(points){if(points.length<4)return
d3_svg_lineLinear(points);var
path=[],i=-1,n=points.length,pi,px=[0],py=[0];while(++i<3){pi=points[i];
px.push(pi[0]);py.push(pi[1])}path.push(d3_svg_lineDot4(
d3_svg_lineBasisBezier3,px)+","+d3_svg_lineDot4(d3_svg_lineBasisBezier3,
py));--i;while(++i<n){pi=points[i];px.shift();px.push(pi[0]);py.shift();
py.push(pi[1]);d3_svg_lineBasisBezier(path,px,py)}return
path.join("")}function d3_svg_lineBasisClosed(points){var
path,i=-1,n=points.length,m=n+4,pi,px=[],py=[];while(++i<4){pi=points[i%
n];px.push(pi[0]);py.push(pi[1])}path=[d3_svg_lineDot4(
d3_svg_lineBasisBezier3,px),",",d3_svg_lineDot4(d3_svg_lineBasisBezier3,
py)];--i;while(++i<m){pi=points[i%n];px.shift();px.push(pi[0]);py.shift(
);py.push(pi[1]);d3_svg_lineBasisBezier(path,px,py)}return
path.join("")}function d3_svg_lineBundle(points,tension){var
n=points.length-1;if(n){var
x0=points[0][0],y0=points[0][1],dx=points[n][0]-x0,dy=points[n][1]-y0,i=
-1,p,t;while(++i<=n){p=points[i];t=i/n;p[0]=tension*p[0]+(1-tension)*(x0
+t*dx);p[1]=tension*p[1]+(1-tension)*(y0+t*dy)}}return
d3_svg_lineBasis(points)}function d3_svg_lineDot4(a,b){return
a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3]}var
d3_svg_lineBasisBezier1=[0,2/3,1/3,0],d3_svg_lineBasisBezier2=[0,1/3,2/3
,0],d3_svg_lineBasisBezier3=[0,1/6,2/3,1/6];function
d3_svg_lineBasisBezier(path,x,y){path.push("C",d3_svg_lineDot4(
d3_svg_lineBasisBezier1,x),",",d3_svg_lineDot4(d3_svg_lineBasisBezier1,y
),",",d3_svg_lineDot4(d3_svg_lineBasisBezier2,x),",",d3_svg_lineDot4(
d3_svg_lineBasisBezier2,y),",",d3_svg_lineDot4(d3_svg_lineBasisBezier3,x
),",",d3_svg_lineDot4(d3_svg_lineBasisBezier3,y))}function
d3_svg_lineSlope(p0,p1){return(p1[1]-p0[1])/(p1[0]-p0[0])}function
d3_svg_lineFiniteDifferences(points){var
i=0,j=points.length-1,m=[],p0=points[0],p1=points[1],d=m[0]=
d3_svg_lineSlope(p0,p1);while(++i<j){m[i]=(d+(d=d3_svg_lineSlope(p0=p1,
p1=points[i+1])))/2}m[i]=d;return m}function
d3_svg_lineMonotoneTangents(points){var
tangents=[],d,a,b,s,m=d3_svg_lineFiniteDifferences(points),i=-1,j=points
.length-1;while(++i<j){d=d3_svg_lineSlope(points[i],points[i+1]);if(abs(
d)<ε){m[i]=m[i+1]=0}else{a=m[i]/d;b=m[i+1]/d;s=a*a+b*b;if(s>9){s=d*3/
Math.sqrt(s);m[i]=s*a;m[i+1]=s*b}}}i=-1;while(++i<=j){s=(points[Math.min
(j,i+1)][0]-points[Math.max(0,i-1)][0])/(6*(1+m[i]*m[i]));tangents.push(
[s||0,m[i]*s||0])}return tangents}function
d3_svg_lineMonotone(points){return
points.length<3?d3_svg_lineLinear(points):points[0]+d3_svg_lineHermite(
points,d3_svg_lineMonotoneTangents(points))}d3.svg.line.radial=function(
){var line=d3_svg_line(d3_svg_lineRadial);line.radius=line.x,delete
line.x;line.angle=line.y,delete line.y;return line};function
d3_svg_lineRadial(points){var
point,i=-1,n=points.length,r,a;while(++i<n){point=points[i];r=point[0];a
=point[1]+d3_svg_arcOffset;point[0]=r*Math.cos(a);point[1]=r*Math.sin(a)
}return points}function d3_svg_area(projection){var
x0=d3_geom_pointX,x1=d3_geom_pointX,y0=0,y1=d3_geom_pointY,defined=
d3_true,interpolate=d3_svg_lineLinear,interpolateKey=interpolate.key,
interpolateReverse=interpolate,L="L",tension=.7;function area(data){var
segments=[],points0=[],points1=[],i=-1,n=data.length,d,fx0=d3_functor(x0
),fy0=d3_functor(y0),fx1=x0===x1?function(){return
x}:d3_functor(x1),fy1=y0===y1?function(){return
y}:d3_functor(y1),x,y;function
segment(){segments.push("M",interpolate(projection(points1),tension),L,
interpolateReverse(projection(points0.reverse()),tension),"Z")}while(++i
<n){if(defined.call(this,d=data[i],i)){points0.push([x=+fx0.call(this,d,
i),y=+fy0.call(this,d,i)]);points1.push([+fx1.call(this,d,i),+fy1.call(
this,d,i)])}else
if(points0.length){segment();points0=[];points1=[]}}if(points0.length)
segment();return
segments.length?segments.join(""):null}area.x=function(_){if(!arguments.
length)return x1;x0=x1=_;return
area};area.x0=function(_){if(!arguments.length)return x0;x0=_;return
area};area.x1=function(_){if(!arguments.length)return x1;x1=_;return
area};area.y=function(_){if(!arguments.length)return y1;y0=y1=_;return
area};area.y0=function(_){if(!arguments.length)return y0;y0=_;return
area};area.y1=function(_){if(!arguments.length)return y1;y1=_;return
area};area.defined=function(_){if(!arguments.length)return
defined;defined=_;return
area};area.interpolate=function(_){if(!arguments.length)return
interpolateKey;if(typeof
_==="function")interpolateKey=interpolate=_;else
interpolateKey=(interpolate=d3_svg_lineInterpolators.get(_)||
d3_svg_lineLinear).key;interpolateReverse=interpolate.reverse||
interpolate;L=interpolate.closed?"M":"L";return
area};area.tension=function(_){if(!arguments.length)return
tension;tension=_;return area};return
area}d3_svg_lineStepBefore.reverse=d3_svg_lineStepAfter;
d3_svg_lineStepAfter.reverse=d3_svg_lineStepBefore;d3.svg.area=function(
){return d3_svg_area(d3_identity)};d3.svg.area.radial=function(){var
area=d3_svg_area(d3_svg_lineRadial);area.radius=area.x,delete
area.x;area.innerRadius=area.x0,delete
area.x0;area.outerRadius=area.x1,delete area.x1;area.angle=area.y,delete
area.y;area.startAngle=area.y0,delete
area.y0;area.endAngle=area.y1,delete area.y1;return
area};d3.svg.chord=function(){var
source=d3_source,target=d3_target,radius=d3_svg_chordRadius,startAngle=
d3_svg_arcStartAngle,endAngle=d3_svg_arcEndAngle;function chord(d,i){var
s=subgroup(this,source,d,i),t=subgroup(this,target,d,i);return"M"+s.p0+
arc(s.r,s.p1,s.a1-s.a0)+(equals(s,t)?curve(s.r,s.p1,s.r,s.p0):curve(s.r,
s.p1,t.r,t.p0)+arc(t.r,t.p1,t.a1-t.a0)+curve(t.r,t.p1,s.r,s.p0))+"Z"}
function subgroup(self,f,d,i){var
subgroup=f.call(self,d,i),r=radius.call(self,subgroup,i),a0=startAngle.
call(self,subgroup,i)+d3_svg_arcOffset,a1=endAngle.call(self,subgroup,i)
+d3_svg_arcOffset;return{r:r,a0:a0,a1:a1,p0:[r*Math.cos(a0),r*Math.sin(
a0)],p1:[r*Math.cos(a1),r*Math.sin(a1)]}}function equals(a,b){return
a.a0==b.a0&&a.a1==b.a1}function arc(r,p,a){return"A"+r+","+r+" 0 "+
+(a>π)+",1 "+p}function curve(r0,p0,r1,p1){return"Q 0,0
"+p1}chord.radius=function(v){if(!arguments.length)return
radius;radius=d3_functor(v);return
chord};chord.source=function(v){if(!arguments.length)return
source;source=d3_functor(v);return
chord};chord.target=function(v){if(!arguments.length)return
target;target=d3_functor(v);return
chord};chord.startAngle=function(v){if(!arguments.length)return
startAngle;startAngle=d3_functor(v);return
chord};chord.endAngle=function(v){if(!arguments.length)return
endAngle;endAngle=d3_functor(v);return chord};return chord};function
d3_svg_chordRadius(d){return d.radius}d3.svg.diagonal=function(){var
source=d3_source,target=d3_target,projection=d3_svg_diagonalProjection;
function diagonal(d,i){var
p0=source.call(this,d,i),p3=target.call(this,d,i),m=(p0.y+p3.y)/2,p=[p0,
{x:p0.x,y:m},{x:p3.x,y:m},p3];p=p.map(projection);return"M"+p[0]+"C"+p[1
]+" "+p[2]+"
"+p[3]}diagonal.source=function(x){if(!arguments.length)return
source;source=d3_functor(x);return
diagonal};diagonal.target=function(x){if(!arguments.length)return
target;target=d3_functor(x);return
diagonal};diagonal.projection=function(x){if(!arguments.length)return
projection;projection=x;return diagonal};return diagonal};function
d3_svg_diagonalProjection(d){return[d.x,d.y]
}d3.svg.diagonal.radial=function(){var
}diagonal=d3.svg.diagonal(),projection=d3_svg_diagonalProjection,
}projection_=diagonal.projection;diagonal.projection=function(x){return
}arguments.length?projection_(d3_svg_diagonalRadialProjection(projection
}=x)):projection};return diagonal};function
}d3_svg_diagonalRadialProjection(projection){return function(){var
}d=projection.apply(this,arguments),r=d[0],a=d[1]+d3_svg_arcOffset;
}return[r*Math.cos(a),r*Math.sin(a)]}}d3.svg.symbol=function(){var
}type=d3_svg_symbolType,size=d3_svg_symbolSize;function
}symbol(d,i){return(d3_svg_symbols.get(type.call(this,d,i))||
}d3_svg_symbolCircle)(size.call(this,d,i))}symbol.type=function(x){if(!
}arguments.length)return type;type=d3_functor(x);return
}symbol};symbol.size=function(x){if(!arguments.length)return
}size;size=d3_functor(x);return symbol};return symbol};function
}d3_svg_symbolSize(){return 64}function
}d3_svg_symbolType(){return"circle"}function
}d3_svg_symbolCircle(size){var
}r=Math.sqrt(size/π);return"M0,"+r+"A"+r+","+r+" 0 1,1
}0,"+-r+"A"+r+","+r+" 0 1,1 0,"+r+"Z"}var
}d3_svg_symbols=d3.map({circle:d3_svg_symbolCircle,cross:function(size){
}var
}r=Math.sqrt(size/5)/2;return"M"+-3*r+","+-r+"H"+-r+"V"+-3*r+"H"+r+"V"+-
}r+"H"+3*r+"V"+r+"H"+r+"V"+3*r+"H"+-r+"V"+r+"H"+-3*r+"Z"},diamond:
}function(size){var
}ry=Math.sqrt(size/(2*d3_svg_symbolTan30)),rx=ry*d3_svg_symbolTan30;
}return"M0,"+-ry+"L"+rx+",0"+" 0,"+ry+"
}"+-rx+",0"+"Z"},square:function(size){var
}r=Math.sqrt(size)/2;return"M"+-r+","+-r+"L"+r+","+-r+" "+r+","+r+"
}"+-r+","+r+"Z"},"triangle-down":function(size){var
}rx=Math.sqrt(size/d3_svg_symbolSqrt3),ry=rx*d3_svg_symbolSqrt3/2;return
}"M0,"+ry+"L"+rx+","+-ry+"
}"+-rx+","+-ry+"Z"},"triangle-up":function(size){var
}rx=Math.sqrt(size/d3_svg_symbolSqrt3),ry=rx*d3_svg_symbolSqrt3/2;return
}"M0,"+-ry+"L"+rx+","+ry+"
}"+-rx+","+ry+"Z"}});d3.svg.symbolTypes=d3_svg_symbols.keys();var
}d3_svg_symbolSqrt3=Math.sqrt(3),d3_svg_symbolTan30=Math.tan(30*
}d3_radians);function
}d3_transition(groups,id){d3_subclass(groups,d3_transitionPrototype);
}groups.id=id;return groups}var
}d3_transitionPrototype=[],d3_transitionId=0,d3_transitionInheritId,
}d3_transitionInherit;d3_transitionPrototype.call=d3_selectionPrototype.
}call;d3_transitionPrototype.empty=d3_selectionPrototype.empty;
}d3_transitionPrototype.node=d3_selectionPrototype.node;
}d3_transitionPrototype.size=d3_selectionPrototype.size;d3.transition=
}function(selection){return
}arguments.length?d3_transitionInheritId?selection.transition():
}selection:d3_selectionRoot.transition()};d3.transition.prototype=
}d3_transitionPrototype;d3_transitionPrototype.select=function(selector)
}{var
}id=this.id,subgroups=[],subgroup,subnode,node;selector=
}d3_selection_selector(selector);for(var
}j=-1,m=this.length;++j<m;){subgroups.push(subgroup=[]);for(var
}group=this[j],i=-1,n=group.length;++i<n;){if((node=group[i])&&(subnode=
}selector.call(node,node.__data__,i,j))){if("__data__"in
}node)subnode.__data__=node.__data__;d3_transitionNode(subnode,i,id,node
}.__transition__[id]);subgroup.push(subnode)}else{subgroup.push(null)}}}
}return
}d3_transition(subgroups,id)};d3_transitionPrototype.selectAll=function(
}selector){var
}id=this.id,subgroups=[],subgroup,subnodes,node,subnode,transition;
}selector=d3_selection_selectorAll(selector);for(var
}j=-1,m=this.length;++j<m;){for(var
}group=this[j],i=-1,n=group.length;++i<n;){if(node=group[i]){transition=
}node.__transition__[id];subnodes=selector.call(node,node.__data__,i,j);
}subgroups.push(subgroup=[]);for(var
}k=-1,o=subnodes.length;++k<o;){if(subnode=subnodes[k])d3_transitionNode
}(subnode,k,id,transition);subgroup.push(subnode)}}}}return
}d3_transition(subgroups,id)};d3_transitionPrototype.filter=function(
}filter){var subgroups=[],subgroup,group,node;if(typeof
}filter!=="function")filter=d3_selection_filter(filter);for(var
}j=0,m=this.length;j<m;j++){subgroups.push(subgroup=[]);for(var
}group=this[j],i=0,n=group.length;i<n;i++){if((node=group[i])&&filter.
}call(node,node.__data__,i,j)){subgroup.push(node)}}}return
}d3_transition(subgroups,this.id)};d3_transitionPrototype.tween=function
}(name,tween){var id=this.id;if(arguments.length<2)return
}this.node().__transition__[id].tween.get(name);return
}d3_selection_each(this,tween==null?function(node){node.__transition__[
}id].tween.remove(name)}:function(node){node.__transition__[id].tween.
}set(name,tween)})};function
}d3_transition_tween(groups,name,value,tween){var id=groups.id;return
}d3_selection_each(groups,typeof
}value==="function"?function(node,i,j){node.__transition__[id].tween.set
}(name,tween(value.call(node,node.__data__,i,j)))}:(value=tween(value),
}function(node){node.__transition__[id].tween.set(name,value)}))}
}d3_transitionPrototype.attr=function(nameNS,value){if(arguments.length<
}2){for(value in nameNS)this.attr(value,nameNS[value]);return this}var
}interpolate=nameNS=="transform"?d3_interpolateTransform:d3_interpolate,
}name=d3.ns.qualify(nameNS);function
}attrNull(){this.removeAttribute(name)}function
}attrNullNS(){this.removeAttributeNS(name.space,name.local)}function
}attrTween(b){return b==null?attrNull:(b+="",function(){var
}a=this.getAttribute(name),i;return
}a!==b&&(i=interpolate(a,b),function(t){this.setAttribute(name,i(t))})})
}}function attrTweenNS(b){return
}b==null?attrNullNS:(b+="",function(){var
}a=this.getAttributeNS(name.space,name.local),i;return
}a!==b&&(i=interpolate(a,b),function(t){this.setAttributeNS(name.space,
}name.local,i(t))})})}return
}d3_transition_tween(this,"attr."+nameNS,value,name.local?attrTweenNS:
}attrTween)};d3_transitionPrototype.attrTween=function(nameNS,tween){var
}name=d3.ns.qualify(nameNS);function attrTween(d,i){var
}f=tween.call(this,d,i,this.getAttribute(name));return
}f&&function(t){this.setAttribute(name,f(t))}}function
}attrTweenNS(d,i){var
}f=tween.call(this,d,i,this.getAttributeNS(name.space,name.local));
}return
}f&&function(t){this.setAttributeNS(name.space,name.local,f(t))}}return
}this.tween("attr."+nameNS,name.local?attrTweenNS:attrTween)};
}d3_transitionPrototype.style=function(name,value,priority){var
}n=arguments.length;if(n<3){if(typeof
}name!=="string"){if(n<2)value="";for(priority in
}name)this.style(priority,name[priority],value);return
}this}priority=""}function
}styleNull(){this.style.removeProperty(name)}function
}styleString(b){return b==null?styleNull:(b+="",function(){var
}a=d3_window.getComputedStyle(this,null).getPropertyValue(name),i;return
}a!==b&&(i=d3_interpolate(a,b),function(t){this.style.setProperty(name,i
}(t),priority)})})}return
}d3_transition_tween(this,"style."+name,value,styleString)};
}d3_transitionPrototype.styleTween=function(name,tween,priority){if(
}arguments.length<3)priority="";function styleTween(d,i){var
}f=tween.call(this,d,i,d3_window.getComputedStyle(this,null).
}getPropertyValue(name));return
}f&&function(t){this.style.setProperty(name,f(t),priority)}}return
}this.tween("style."+name,styleTween)};d3_transitionPrototype.text=
}function(value){return
}d3_transition_tween(this,"text",value,d3_transition_text)};function
}d3_transition_text(b){if(b==null)b="";return
}function(){this.textContent=b}}d3_transitionPrototype.remove=function()
}{return this.each("end.transition",function(){var
}p;if(this.__transition__.count<2&&(p=this.parentNode))p.removeChild(
}this)})};d3_transitionPrototype.ease=function(value){var
}id=this.id;if(arguments.length<1)return
}this.node().__transition__[id].ease;if(typeof
}value!=="function")value=d3.ease.apply(d3,arguments);return
}d3_selection_each(this,function(node){node.__transition__[id].ease=
}value})};d3_transitionPrototype.delay=function(value){var
}id=this.id;return d3_selection_each(this,typeof
}value==="function"?function(node,i,j){node.__transition__[id].delay=+
}value.call(node,node.__data__,i,j)}:(value=+value,function(node){node.
}__transition__[id].delay=value}))};d3_transitionPrototype.duration=
}function(value){var id=this.id;return d3_selection_each(this,typeof
}value==="function"?function(node,i,j){node.__transition__[id].duration=
}Math.max(1,value.call(node,node.__data__,i,j))}:(value=Math.max(1,value
}),function(node){node.__transition__[id].duration=value}))};
}d3_transitionPrototype.each=function(type,listener){var
}id=this.id;if(arguments.length<2){var
}inherit=d3_transitionInherit,inheritId=d3_transitionInheritId;
}d3_transitionInheritId=id;d3_selection_each(this,function(node,i,j){
}d3_transitionInherit=node.__transition__[id];type.call(node,node.
}__data__,i,j)});d3_transitionInherit=inherit;d3_transitionInheritId=
}inheritId}else{d3_selection_each(this,function(node){var
}transition=node.__transition__[id];(transition.event||(transition.event
}=d3.dispatch("start","end"))).on(type,listener)})}return
}this};d3_transitionPrototype.transition=function(){var
}id0=this.id,id1=++d3_transitionId,subgroups=[],subgroup,group,node,
}transition;for(var
}j=0,m=this.length;j<m;j++){subgroups.push(subgroup=[]);for(var
}group=this[j],i=0,n=group.length;i<n;i++){if(node=group[i]){transition=
}Object.create(node.__transition__[id0]);transition.delay+=transition.
}duration;d3_transitionNode(node,i,id1,transition)}subgroup.push(node)}}
}return d3_transition(subgroups,id1)};function
}d3_transitionNode(node,i,id,inherit){var
}lock=node.__transition__||(node.__transition__={active:0,count:0}),
}transition=lock[id];if(!transition){var
}time=inherit.time;transition=lock[id]={tween:new
}d3_Map,time:time,ease:inherit.ease,delay:inherit.delay,duration:inherit
}.duration};++lock.count;d3.timer(function(elapsed){var
}d=node.__data__,ease=transition.ease,delay=transition.delay,duration=
}transition.duration,timer=d3_timer_active,tweened=[];timer.t=delay+time
};if(delay<=elapsed)return start(elapsed-delay);timer.c=start;function
}start(elapsed){if(lock.active>id)return
}stop();lock.active=id;transition.event&&transition.event.start.call(
}node,d,i);transition.tween.forEach(function(key,value){if(value=value.
}call(node,d,i)){tweened.push(value)}});d3.timer(function(){timer.c=tick
}(elapsed||1)?d3_true:tick;return 1},0,time)}function
}tick(elapsed){if(lock.active!==id)return stop();var
}t=elapsed/duration,e=ease(t),n=tweened.length;while(n>0){tweened[--n].
}call(node,e)}if(t>=1){transition.event&&transition.event.end.call(node,
}d,i);return stop()}}function stop(){if(--lock.count)delete
}lock[id];else delete node.__transition__;return
}1}},0,time)}}d3.svg.axis=function(){var
}scale=d3.scale.linear(),orient=d3_svg_axisDefaultOrient,innerTickSize=6
},outerTickSize=6,tickPadding=3,tickArguments_=[10],tickValues=null,
}tickFormat_;function axis(g){g.each(function(){var
}g=d3.select(this);var
}scale0=this.__chart__||scale,scale1=this.__chart__=scale.copy();var
}ticks=tickValues==null?scale1.ticks?scale1.ticks.apply(scale1,
}tickArguments_):scale1.domain():tickValues,tickFormat=tickFormat_==null
}?scale1.tickFormat?scale1.tickFormat.apply(scale1,tickArguments_):
}d3_identity:tickFormat_,tick=g.selectAll(".tick").data(ticks,scale1),
}tickEnter=tick.enter().insert("g",".domain").attr("class","tick").style
}("opacity",ε),tickExit=d3.transition(tick.exit()).style("opacity",ε).
}remove(),tickUpdate=d3.transition(tick).style("opacity",1),
}tickTransform;var
}range=d3_scaleRange(scale1),path=g.selectAll(".domain").data([0]),
}pathUpdate=(path.enter().append("path").attr("class","domain"),d3.
}transition(path));tickEnter.append("line");tickEnter.append("text");var
}lineEnter=tickEnter.select("line"),lineUpdate=tickUpdate.select("line")
},text=tick.select("text").text(tickFormat),textEnter=tickEnter.select("
}text"),textUpdate=tickUpdate.select("text");switch(orient){case"bottom"
}:{tickTransform=d3_svg_axisX;lineEnter.attr("y2",innerTickSize);
}textEnter.attr("y",Math.max(innerTickSize,0)+tickPadding);lineUpdate.
}attr("x2",0).attr("y2",innerTickSize);textUpdate.attr("x",0).attr("y",
}Math.max(innerTickSize,0)+tickPadding);text.attr("dy",".71em").style("
}text-anchor","middle");pathUpdate.attr("d","M"+range[0]+","+
}outerTickSize+"V0H"+range[1]+"V"+outerTickSize);break}case"top":{
}tickTransform=d3_svg_axisX;lineEnter.attr("y2",-innerTickSize);
}textEnter.attr("y",-(Math.max(innerTickSize,0)+tickPadding));lineUpdate
}.attr("x2",0).attr("y2",-innerTickSize);textUpdate.attr("x",0).attr("y"
},-(Math.max(innerTickSize,0)+tickPadding));text.attr("dy","0em").style(
}"text-anchor","middle");pathUpdate.attr("d","M"+range[0]+","+-
}outerTickSize+"V0H"+range[1]+"V"+-outerTickSize);break}case"left":{
}tickTransform=d3_svg_axisY;lineEnter.attr("x2",-innerTickSize);
}textEnter.attr("x",-(Math.max(innerTickSize,0)+tickPadding));lineUpdate
}.attr("x2",-innerTickSize).attr("y2",0);textUpdate.attr("x",-(Math.max(
}innerTickSize,0)+tickPadding)).attr("y",0);text.attr("dy",".32em").
}style("text-anchor","end");pathUpdate.attr("d","M"+-outerTickSize+","+
}range[0]+"H0V"+range[1]+"H"+-outerTickSize);break}case"right":{
}tickTransform=d3_svg_axisY;lineEnter.attr("x2",innerTickSize);textEnter
}.attr("x",Math.max(innerTickSize,0)+tickPadding);lineUpdate.attr("x2",
}innerTickSize).attr("y2",0);textUpdate.attr("x",Math.max(innerTickSize,
}0)+tickPadding).attr("y",0);text.attr("dy",".32em").style("text-anchor"
},"start");pathUpdate.attr("d","M"+outerTickSize+","+range[0]+"H0V"+
}range[1]+"H"+outerTickSize);break}}if(scale1.rangeBand){var
}x=scale1,dx=x.rangeBand()/2;scale0=scale1=function(d){return
}x(d)+dx}}else
}if(scale0.rangeBand){scale0=scale1}else{tickExit.call(tickTransform,
}scale1)}tickEnter.call(tickTransform,scale0);tickUpdate.call(
}tickTransform,scale1)})}axis.scale=function(x){if(!arguments.length)
}return scale;scale=x;return
}axis};axis.orient=function(x){if(!arguments.length)return
}orient;orient=x in
}d3_svg_axisOrients?x+"":d3_svg_axisDefaultOrient;return
}axis};axis.ticks=function(){if(!arguments.length)return
}tickArguments_;tickArguments_=arguments;return
}axis};axis.tickValues=function(x){if(!arguments.length)return
}tickValues;tickValues=x;return
}axis};axis.tickFormat=function(x){if(!arguments.length)return
}tickFormat_;tickFormat_=x;return axis};axis.tickSize=function(x){var
}n=arguments.length;if(!n)return
}innerTickSize;innerTickSize=+x;outerTickSize=+arguments[n-1];return
}axis};axis.innerTickSize=function(x){if(!arguments.length)return
}innerTickSize;innerTickSize=+x;return
}axis};axis.outerTickSize=function(x){if(!arguments.length)return
}outerTickSize;outerTickSize=+x;return
}axis};axis.tickPadding=function(x){if(!arguments.length)return
}tickPadding;tickPadding=+x;return
}axis};axis.tickSubdivide=function(){return
}arguments.length&&axis};return axis};var
}d3_svg_axisDefaultOrient="bottom",d3_svg_axisOrients={top:1,right:1,
}bottom:1,left:1};function
}d3_svg_axisX(selection,x){selection.attr("transform",function(d){return
}"translate("+x(d)+",0)"})}function
}d3_svg_axisY(selection,y){selection.attr("transform",function(d){return
}"translate(0,"+y(d)+")"})}d3.svg.brush=function(){var
}event=d3_eventDispatch(brush,"brushstart","brush","brushend"),x=null,y=
}null,xExtent=[0,0],yExtent=[0,0],xExtentDomain,yExtentDomain,xClamp=
}true,yClamp=true,resizes=d3_svg_brushResizes[0];function
}brush(g){g.each(function(){var
}g=d3.select(this).style("pointer-events","all").style("-webkit-tap-
}highlight-color","rgba(0,0,0,0)").on("mousedown.brush",brushstart).on("
}touchstart.brush",brushstart);var
}background=g.selectAll(".background").data([0]);background.enter().
}append("rect").attr("class","background").style("visibility","hidden").
}style("cursor","crosshair");g.selectAll(".extent").data([0]).enter().
}append("rect").attr("class","extent").style("cursor","move");var
}resize=g.selectAll(".resize").data(resizes,d3_identity);resize.exit().
}remove();resize.enter().append("g").attr("class",function(d){return"
}resize "+d}).style("cursor",function(d){return
}d3_svg_brushCursor[d]}).append("rect").attr("x",function(d){return/[ew]
}$/.test(d)?-3:null}).attr("y",function(d){return/^[ns]/.test(d)?-3:null
}}).attr("width",6).attr("height",6).style("visibility","hidden");resize
}.style("display",brush.empty()?"none":null);var
}gUpdate=d3.transition(g),backgroundUpdate=d3.transition(background),
}range;if(x){range=d3_scaleRange(x);backgroundUpdate.attr("x",range[0]).
}attr("width",range[1]-range[0]);redrawX(gUpdate)}if(y){range=
}d3_scaleRange(y);backgroundUpdate.attr("y",range[0]).attr("height",
}range[1]-range[0]);redrawY(gUpdate)}redraw(gUpdate)})}brush.event=
}function(g){g.each(function(){var
}event_=event.of(this,arguments),extent1={x:xExtent,y:yExtent,i:
}xExtentDomain,j:yExtentDomain},extent0=this.__chart__||extent1;this.
}__chart__=extent1;if(d3_transitionInheritId){d3.select(this).transition
}().each("start.brush",function(){xExtentDomain=extent0.i;yExtentDomain=
}extent0.j;xExtent=extent0.x;yExtent=extent0.y;event_({type:"brushstart"
}})}).tween("brush:brush",function(){var
}xi=d3_interpolateArray(xExtent,extent1.x),yi=d3_interpolateArray(
}yExtent,extent1.y);xExtentDomain=yExtentDomain=null;return
}function(t){xExtent=extent1.x=xi(t);yExtent=extent1.y=yi(t);event_({
}type:"brush",mode:"resize"})}}).each("end.brush",function(){
}xExtentDomain=extent1.i;yExtentDomain=extent1.j;event_({type:"brush",
}mode:"resize"});event_({type:"brushend"})})}else{event_({type:"
}brushstart"});event_({type:"brush",mode:"resize"});event_({type:"
}brushend"})}})};function
}redraw(g){g.selectAll(".resize").attr("transform",function(d){return"
}translate("+xExtent[+/e$/.test(d)]+","+yExtent[+/^s/.test(d)]+")"})}
}function
}redrawX(g){g.select(".extent").attr("x",xExtent[0]);g.selectAll(".
}extent,.n>rect,.s>rect").attr("width",xExtent[1]-xExtent[0])}function
}redrawY(g){g.select(".extent").attr("y",yExtent[0]);g.selectAll(".
}extent,.e>rect,.w>rect").attr("height",yExtent[1]-yExtent[0])}function
}brushstart(){var
}target=this,eventTarget=d3.select(d3.event.target),event_=event.of(
}target,arguments),g=d3.select(target),resizing=eventTarget.datum(),
}resizingX=!/^(n|s)$/.test(resizing)&&x,resizingY=!/^(e|w)$/.test(
}resizing)&&y,dragging=eventTarget.classed("extent"),dragRestore=
}d3_event_dragSuppress(),center,origin=d3.mouse(target),offset;var
}w=d3.select(d3_window).on("keydown.brush",keydown).on("keyup.brush",
}keyup);if(d3.event.changedTouches){w.on("touchmove.brush",brushmove).on
}("touchend.brush",brushend)}else{w.on("mousemove.brush",brushmove).on("
}mouseup.brush",brushend)}g.interrupt().selectAll("*").interrupt();if(
}dragging){origin[0]=xExtent[0]-origin[0];origin[1]=yExtent[0]-origin[1]
}}else if(resizing){var
}ex=+/w$/.test(resizing),ey=+/^n/.test(resizing);offset=[xExtent[1-ex]-
}origin[0],yExtent[1-ey]-origin[1]];origin[0]=xExtent[ex];origin[1]=
}yExtent[ey]}else
}if(d3.event.altKey)center=origin.slice();g.style("pointer-events","none
}").selectAll(".resize").style("display",null);d3.select("body").style("
}cursor",eventTarget.style("cursor"));event_({type:"brushstart"});
}brushmove();function
}keydown(){if(d3.event.keyCode==32){if(!dragging){center=null;origin[0]-
}=xExtent[1];origin[1]-=yExtent[1];dragging=2}d3_eventPreventDefault()}}
}function
}keyup(){if(d3.event.keyCode==32&&dragging==2){origin[0]+=xExtent[1];
}origin[1]+=yExtent[1];dragging=0;d3_eventPreventDefault()}}function
}brushmove(){var
}point=d3.mouse(target),moved=false;if(offset){point[0]+=offset[0];point
}[1]+=offset[1]}if(!dragging){if(d3.event.altKey){if(!center)center=[(
}xExtent[0]+xExtent[1])/2,(yExtent[0]+yExtent[1])/2];origin[0]=xExtent[+
}(point[0]<center[0])];origin[1]=yExtent[+(point[1]<center[1])]}else
}center=null}if(resizingX&&move1(point,x,0)){redrawX(g);moved=true}if(
}resizingY&&move1(point,y,1)){redrawY(g);moved=true}if(moved){redraw(g);
}event_({type:"brush",mode:dragging?"move":"resize"})}}function
}move1(point,scale,i){var
}range=d3_scaleRange(scale),r0=range[0],r1=range[1],position=origin[i],
}extent=i?yExtent:xExtent,size=extent[1]-extent[0],min,max;if(dragging){
}r0-=position;r1-=size+position}min=(i?yClamp:xClamp)?Math.max(r0,Math.
}min(r1,point[i])):point[i];if(dragging){max=(min+=position)+size}else{
}if(center)position=Math.max(r0,Math.min(r1,2*center[i]-min));if(
}position<min){max=min;min=position}else{max=position}}if(extent[0]!=min
}||extent[1]!=max){if(i)yExtentDomain=null;else
}xExtentDomain=null;extent[0]=min;extent[1]=max;return true}}function
}brushend(){brushmove();g.style("pointer-events","all").selectAll(".
}resize").style("display",brush.empty()?"none":null);d3.select("body").
}style("cursor",null);w.on("mousemove.brush",null).on("mouseup.brush",
}null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.
}brush",null).on("keyup.brush",null);dragRestore();event_({type:"
}brushend"})}}brush.x=function(z){if(!arguments.length)return
}x;x=z;resizes=d3_svg_brushResizes[!x<<1|!y];return
}brush};brush.y=function(z){if(!arguments.length)return
}y;y=z;resizes=d3_svg_brushResizes[!x<<1|!y];return
}brush};brush.clamp=function(z){if(!arguments.length)return
}x&&y?[xClamp,yClamp]:x?xClamp:y?yClamp:null;if(x&&y)xClamp=!!z[0],
}yClamp=!!z[1];else if(x)xClamp=!!z;else if(y)yClamp=!!z;return
}brush};brush.extent=function(z){var
}x0,x1,y0,y1,t;if(!arguments.length){if(x){if(xExtentDomain){x0=
}xExtentDomain[0],x1=xExtentDomain[1]}else{x0=xExtent[0],x1=xExtent[1];
}if(x.invert)x0=x.invert(x0),x1=x.invert(x1);if(x1<x0)t=x0,x0=x1,x1=t}}
}if(y){if(yExtentDomain){y0=yExtentDomain[0],y1=yExtentDomain[1]}else{y0
}=yExtent[0],y1=yExtent[1];if(y.invert)y0=y.invert(y0),y1=y.invert(y1);
}if(y1<y0)t=y0,y0=y1,y1=t}}return
}x&&y?[[x0,y0],[x1,y1]]:x?[x0,x1]:y&&[y0,y1]}if(x){x0=z[0],x1=z[1];if(y)
}x0=x0[0],x1=x1[0];xExtentDomain=[x0,x1];if(x.invert)x0=x(x0),x1=x(x1);
}if(x1<x0)t=x0,x0=x1,x1=t;if(x0!=xExtent[0]||x1!=xExtent[1])xExtent=[x0,
}x1]}if(y){y0=z[0],y1=z[1];if(x)y0=y0[1],y1=y1[1];yExtentDomain=[y0,y1];
}if(y.invert)y0=y(y0),y1=y(y1);if(y1<y0)t=y0,y0=y1,y1=t;if(y0!=yExtent[0
}]||y1!=yExtent[1])yExtent=[y0,y1]}return
}brush};brush.clear=function(){if(!brush.empty()){xExtent=[0,0],yExtent=
}[0,0];xExtentDomain=yExtentDomain=null}return
}brush};brush.empty=function(){return!!x&&xExtent[0]==xExtent[1]||!!y&&
}yExtent[0]==yExtent[1]};return d3.rebind(brush,event,"on")};var
}d3_svg_brushCursor={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-
}resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-
}resize"};var
}d3_svg_brushResizes=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["
}n","s"],[]];var
}d3_time=d3.time={},d3_date=Date,d3_time_daySymbols=["Sunday","Monday","
}Tuesday","Wednesday","Thursday","Friday","Saturday"];function
}d3_date_utc(){this._=new
}Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}
}d3_date_utc.prototype={getDate:function(){return
}this._.getUTCDate()},getDay:function(){return
}this._.getUTCDay()},getFullYear:function(){return
}this._.getUTCFullYear()},getHours:function(){return
}this._.getUTCHours()},getMilliseconds:function(){return
}this._.getUTCMilliseconds()},getMinutes:function(){return
}this._.getUTCMinutes()},getMonth:function(){return
}this._.getUTCMonth()},getSeconds:function(){return
}this._.getUTCSeconds()},getTime:function(){return
}this._.getTime()},getTimezoneOffset:function(){return
}0},valueOf:function(){return
}this._.valueOf()},setDate:function(){d3_time_prototype.setUTCDate.apply
}(this._,arguments)},setDay:function(){d3_time_prototype.setUTCDay.apply
}(this._,arguments)},setFullYear:function(){d3_time_prototype.
}setUTCFullYear.apply(this._,arguments)},setHours:function(){
}d3_time_prototype.setUTCHours.apply(this._,arguments)},setMilliseconds:
}function(){d3_time_prototype.setUTCMilliseconds.apply(this._,arguments)
}},setMinutes:function(){d3_time_prototype.setUTCMinutes.apply(this._,
}arguments)},setMonth:function(){d3_time_prototype.setUTCMonth.apply(
}this._,arguments)},setSeconds:function(){d3_time_prototype.
}setUTCSeconds.apply(this._,arguments)},setTime:function(){
}d3_time_prototype.setTime.apply(this._,arguments)}};var
}d3_time_prototype=Date.prototype;var d3_time_formatDateTime="%a %b %e
}%X %Y",d3_time_formatDate="%m/%d/%Y",d3_time_formatTime="%H:%M:%S";var
}d3_time_days=["Sunday","Monday","Tuesday","Wednesday","Thursday","
}Friday","Saturday"],d3_time_dayAbbreviations=["Sun","Mon","Tue","Wed","
}Thu","Fri","Sat"],d3_time_months=["January","February","March","April",
}"May","June","July","August","September","October","November","December
}"],d3_time_monthAbbreviations=["Jan","Feb","Mar","Apr","May","Jun","Jul
}","Aug","Sep","Oct","Nov","Dec"];function
}d3_time_interval(local,step,number){function round(date){var
}d0=local(date),d1=offset(d0,1);return date-d0<d1-date?d0:d1}function
}ceil(date){step(date=local(new d3_date(date-1)),1);return date}function
}offset(date,k){step(date=new d3_date(+date),k);return date}function
}range(t0,t1,dt){var
}time=ceil(t0),times=[];if(dt>1){while(time<t1){if(!(number(time)%dt))
}times.push(new
}Date(+time));step(time,1)}}else{while(time<t1)times.push(new
}Date(+time)),step(time,1)}return times}function
}range_utc(t0,t1,dt){try{d3_date=d3_date_utc;var utc=new
}d3_date_utc;utc._=t0;return
}range(utc,t1,dt)}finally{d3_date=Date}}local.floor=local;local.round=
}round;local.ceil=ceil;local.offset=offset;local.range=range;var
}utc=local.utc=d3_time_interval_utc(local);utc.floor=utc;utc.round=
}d3_time_interval_utc(round);utc.ceil=d3_time_interval_utc(ceil);utc.
}offset=d3_time_interval_utc(offset);utc.range=range_utc;return
}local}function d3_time_interval_utc(method){return
}function(date,k){try{d3_date=d3_date_utc;var utc=new
}d3_date_utc;utc._=date;return
}method(utc,k)._}finally{d3_date=Date}}}d3_time.year=d3_time_interval(
}function(date){date=d3_time.day(date);date.setMonth(0,1);return
}date},function(date,offset){date.setFullYear(date.getFullYear()+offset)
}},function(date){return
}date.getFullYear()});d3_time.years=d3_time.year.range;d3_time.years.utc
}=d3_time.year.utc.range;d3_time.day=d3_time_interval(function(date){var
}day=new
}d3_date(2e3,0);day.setFullYear(date.getFullYear(),date.getMonth(),date.
}getDate());return
}day},function(date,offset){date.setDate(date.getDate()+offset)},
}function(date){return
}date.getDate()-1});d3_time.days=d3_time.day.range;d3_time.days.utc=
}d3_time.day.utc.range;d3_time.dayOfYear=function(date){var
}year=d3_time.year(date);return
}Math.floor((date-year-(date.getTimezoneOffset()-year.getTimezoneOffset(
}))*6e4)/864e5)};d3_time_daySymbols.forEach(function(day,i){day=day.
}toLowerCase();i=7-i;var
}interval=d3_time[day]=d3_time_interval(function(date){(date=d3_time.day
}(date)).setDate(date.getDate()-(date.getDay()+i)%7);return
}date},function(date,offset){date.setDate(date.getDate()+Math.floor(
}offset)*7)},function(date){var day=d3_time.year(date).getDay();return
}Math.floor((d3_time.dayOfYear(date)+(day+i)%7)/7)-(day!==i)});d3_time[
}day+"s"]=interval.range;d3_time[day+"s"].utc=interval.utc.range;d3_time
}[day+"OfYear"]=function(date){var
}day=d3_time.year(date).getDay();return
}Math.floor((d3_time.dayOfYear(date)+(day+i)%7)/7)}});d3_time.week=
}d3_time.sunday;d3_time.weeks=d3_time.sunday.range;d3_time.weeks.utc=
}d3_time.sunday.utc.range;d3_time.weekOfYear=d3_time.sundayOfYear;
}d3_time.format=d3_time_format;function d3_time_format(template){var
}n=template.length;function format(date){var
}string=[],i=-1,j=0,c,p,f;while(++i<n){if(template.charCodeAt(i)===37){
}string.push(template.substring(j,i));if((p=d3_time_formatPads[c=
}template.charAt(++i)])!=null)c=template.charAt(++i);if(f=
}d3_time_formats[c])c=f(date,p==null?c==="e"?"
}":"0":p);string.push(c);j=i+1}}string.push(template.substring(j,i));
}return string.join("")}format.parse=function(string){var
}d={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},i=d3_time_parse(d,template,
}string,0);if(i!=string.length)return null;if("p"in
}d)d.H=d.H%12+d.p*12;var
}localZ=d.Z!=null&&d3_date!==d3_date_utc,date=new(localZ?d3_date_utc:
}d3_date);if("j"in d)date.setFullYear(d.y,0,d.j);else if("w"in d&&("W"in
}d||"U"in d)){date.setFullYear(d.y,0,1);date.setFullYear(d.y,0,"W"in
}d?(d.w+6)%7+d.W*7-(date.getDay()+5)%7:d.w+d.U*7-(date.getDay()+6)%7)}
}else
}date.setFullYear(d.y,d.m,d.d);date.setHours(d.H+Math.floor(d.Z/100),d.M
}+d.Z%100,d.S,d.L);return
}localZ?date._:date};format.toString=function(){return template};return
}format}function d3_time_parse(date,template,string,j){var
}c,p,t,i=0,n=template.length,m=string.length;while(i<n){if(j>=m)return-1
};c=template.charCodeAt(i++);if(c===37){t=template.charAt(i++);p=
}d3_time_parsers[t in
}d3_time_formatPads?template.charAt(i++):t];if(!p||(j=p(date,string,j))<
}0)return-1}else if(c!=string.charCodeAt(j++)){return-1}}return
}j}function d3_time_formatRe(names){return new
}RegExp("^(?:"+names.map(d3.requote).join("|")+")","i")}function
}d3_time_formatLookup(names){var map=new
}d3_Map,i=-1,n=names.length;while(++i<n)map.set(names[i].toLowerCase(),i
});return map}function d3_time_formatPad(value,fill,width){var
}sign=value<0?"-":"",string=(sign?-value:value)+"",length=string.length;
}return sign+(length<width?new
}Array(width-length+1).join(fill)+string:string)}var
}d3_time_dayRe=d3_time_formatRe(d3_time_days),d3_time_dayLookup=
}d3_time_formatLookup(d3_time_days),d3_time_dayAbbrevRe=d3_time_formatRe
}(d3_time_dayAbbreviations),d3_time_dayAbbrevLookup=d3_time_formatLookup
}(d3_time_dayAbbreviations),d3_time_monthRe=d3_time_formatRe(
}d3_time_months),d3_time_monthLookup=d3_time_formatLookup(d3_time_months
}),d3_time_monthAbbrevRe=d3_time_formatRe(d3_time_monthAbbreviations),
}d3_time_monthAbbrevLookup=d3_time_formatLookup(
}d3_time_monthAbbreviations),d3_time_percentRe=/^%/;var
}d3_time_formatPads={"-":"",_:" ",0:"0"};var
}d3_time_formats={a:function(d){return
}d3_time_dayAbbreviations[d.getDay()]},A:function(d){return
}d3_time_days[d.getDay()]},b:function(d){return
}d3_time_monthAbbreviations[d.getMonth()]},B:function(d){return
}d3_time_months[d.getMonth()]},c:d3_time_format(d3_time_formatDateTime),
}d:function(d,p){return
}d3_time_formatPad(d.getDate(),p,2)},e:function(d,p){return
}d3_time_formatPad(d.getDate(),p,2)},H:function(d,p){return
}d3_time_formatPad(d.getHours(),p,2)},I:function(d,p){return
}d3_time_formatPad(d.getHours()%12||12,p,2)},j:function(d,p){return
}d3_time_formatPad(1+d3_time.dayOfYear(d),p,3)},L:function(d,p){return
}d3_time_formatPad(d.getMilliseconds(),p,3)},m:function(d,p){return
}d3_time_formatPad(d.getMonth()+1,p,2)},M:function(d,p){return
}d3_time_formatPad(d.getMinutes(),p,2)},p:function(d){return
}d.getHours()>=12?"PM":"AM"},S:function(d,p){return
}d3_time_formatPad(d.getSeconds(),p,2)},U:function(d,p){return
}d3_time_formatPad(d3_time.sundayOfYear(d),p,2)},w:function(d){return
}d.getDay()},W:function(d,p){return
}d3_time_formatPad(d3_time.mondayOfYear(d),p,2)},x:d3_time_format(
}d3_time_formatDate),X:d3_time_format(d3_time_formatTime),y:function(d,p
}){return
}d3_time_formatPad(d.getFullYear()%100,p,2)},Y:function(d,p){return
}d3_time_formatPad(d.getFullYear()%1e4,p,4)},Z:d3_time_zone,"%":function
}(){return"%"}};var
}d3_time_parsers={a:d3_time_parseWeekdayAbbrev,A:d3_time_parseWeekday,b:
}d3_time_parseMonthAbbrev,B:d3_time_parseMonth,c:d3_time_parseLocaleFull
},d:d3_time_parseDay,e:d3_time_parseDay,H:d3_time_parseHour24,I:
}d3_time_parseHour24,j:d3_time_parseDayOfYear,L:
}d3_time_parseMilliseconds,m:d3_time_parseMonthNumber,M:
}d3_time_parseMinutes,p:d3_time_parseAmPm,S:d3_time_parseSeconds,U:
}d3_time_parseWeekNumberSunday,w:d3_time_parseWeekdayNumber,W:
}d3_time_parseWeekNumberMonday,x:d3_time_parseLocaleDate,X:
}d3_time_parseLocaleTime,y:d3_time_parseYear,Y:d3_time_parseFullYear,Z:
}d3_time_parseZone,"%":d3_time_parseLiteralPercent};function
}d3_time_parseWeekdayAbbrev(date,string,i){d3_time_dayAbbrevRe.lastIndex
}=0;var n=d3_time_dayAbbrevRe.exec(string.substring(i));return
}n?(date.w=d3_time_dayAbbrevLookup.get(n[0].toLowerCase()),i+n[0].length
}):-1}function
}d3_time_parseWeekday(date,string,i){d3_time_dayRe.lastIndex=0;var
}n=d3_time_dayRe.exec(string.substring(i));return
}n?(date.w=d3_time_dayLookup.get(n[0].toLowerCase()),i+n[0].length):-1}
}function
}d3_time_parseWeekdayNumber(date,string,i){d3_time_numberRe.lastIndex=0;
}var n=d3_time_numberRe.exec(string.substring(i,i+1));return
}n?(date.w=+n[0],i+n[0].length):-1}function
}d3_time_parseWeekNumberSunday(date,string,i){d3_time_numberRe.lastIndex
}=0;var n=d3_time_numberRe.exec(string.substring(i));return
}n?(date.U=+n[0],i+n[0].length):-1}function
}d3_time_parseWeekNumberMonday(date,string,i){d3_time_numberRe.lastIndex
}=0;var n=d3_time_numberRe.exec(string.substring(i));return
}n?(date.W=+n[0],i+n[0].length):-1}function
}d3_time_parseMonthAbbrev(date,string,i){d3_time_monthAbbrevRe.lastIndex
}=0;var n=d3_time_monthAbbrevRe.exec(string.substring(i));return
}n?(date.m=d3_time_monthAbbrevLookup.get(n[0].toLowerCase()),i+n[0].
}length):-1}function
}d3_time_parseMonth(date,string,i){d3_time_monthRe.lastIndex=0;var
}n=d3_time_monthRe.exec(string.substring(i));
return
n?(date.m=d3_time_monthLookup.get(n[0].toLowerCase()),i+n[0].length):-1}
function d3_time_parseLocaleFull(date,string,i){return
d3_time_parse(date,d3_time_formats.c.toString(),string,i)}function
d3_time_parseLocaleDate(date,string,i){return
d3_time_parse(date,d3_time_formats.x.toString(),string,i)}function
d3_time_parseLocaleTime(date,string,i){return
d3_time_parse(date,d3_time_formats.X.toString(),string,i)}function
d3_time_parseFullYear(date,string,i){d3_time_numberRe.lastIndex=0;var
n=d3_time_numberRe.exec(string.substring(i,i+4));return
n?(date.y=+n[0],i+n[0].length):-1}function
d3_time_parseYear(date,string,i){d3_time_numberRe.lastIndex=0;var
n=d3_time_numberRe.exec(string.substring(i,i+2));return
n?(date.y=d3_time_expandYear(+n[0]),i+n[0].length):-1}function
d3_time_parseZone(date,string,i){return/^[+-]\d{4}$/.test(string=string.
substring(i,i+5))?(date.Z=+string,i+5):-1}function
d3_time_expandYear(d){return d+(d>68?1900:2e3)}function
d3_time_parseMonthNumber(date,string,i){d3_time_numberRe.lastIndex=0;var
n=d3_time_numberRe.exec(string.substring(i,i+2));return
n?(date.m=n[0]-1,i+n[0].length):-1}function
d3_time_parseDay(date,string,i){d3_time_numberRe.lastIndex=0;var
n=d3_time_numberRe.exec(string.substring(i,i+2));return
n?(date.d=+n[0],i+n[0].length):-1}function
d3_time_parseDayOfYear(date,string,i){d3_time_numberRe.lastIndex=0;var
n=d3_time_numberRe.exec(string.substring(i,i+3));return
n?(date.j=+n[0],i+n[0].length):-1}function
d3_time_parseHour24(date,string,i){d3_time_numberRe.lastIndex=0;var
n=d3_time_numberRe.exec(string.substring(i,i+2));return
n?(date.H=+n[0],i+n[0].length):-1}function
d3_time_parseMinutes(date,string,i){d3_time_numberRe.lastIndex=0;var
n=d3_time_numberRe.exec(string.substring(i,i+2));return
n?(date.M=+n[0],i+n[0].length):-1}function
d3_time_parseSeconds(date,string,i){d3_time_numberRe.lastIndex=0;var
n=d3_time_numberRe.exec(string.substring(i,i+2));return
n?(date.S=+n[0],i+n[0].length):-1}function
d3_time_parseMilliseconds(date,string,i){d3_time_numberRe.lastIndex=0;
var n=d3_time_numberRe.exec(string.substring(i,i+3));return
n?(date.L=+n[0],i+n[0].length):-1}var
d3_time_numberRe=/^\s*\d+/;function d3_time_parseAmPm(date,string,i){var
n=d3_time_amPmLookup.get(string.substring(i,i+=2).toLowerCase());return
n==null?-1:(date.p=n,i)}var
d3_time_amPmLookup=d3.map({am:0,pm:1});function d3_time_zone(d){var
z=d.getTimezoneOffset(),zs=z>0?"-":"+",zh=~~(abs(z)/60),zm=abs(z)%60;
return
zs+d3_time_formatPad(zh,"0",2)+d3_time_formatPad(zm,"0",2)}function
d3_time_parseLiteralPercent(date,string,i){d3_time_percentRe.lastIndex=0
;var n=d3_time_percentRe.exec(string.substring(i,i+1));return
n?i+n[0].length:-1}d3_time_format.utc=d3_time_formatUtc;function
d3_time_formatUtc(template){var local=d3_time_format(template);function
format(date){try{d3_date=d3_date_utc;var utc=new
d3_date;utc._=date;return
local(utc)}finally{d3_date=Date}}format.parse=function(string){try{
d3_date=d3_date_utc;var date=local.parse(string);return
date&&date._}finally{d3_date=Date}};format.toString=local.toString;
return format}var
d3_time_formatIso=d3_time_formatUtc("%Y-%m-%dT%H:%M:%S.%LZ");
d3_time_format.iso=Date.prototype.toISOString&&+new
Date("2000-01-01T00:00:00.000Z")?d3_time_formatIsoNative:
d3_time_formatIso;function d3_time_formatIsoNative(date){return
date.toISOString()}d3_time_formatIsoNative.parse=function(string){var
date=new Date(string);return
isNaN(date)?null:date};d3_time_formatIsoNative.toString=
d3_time_formatIso.toString;d3_time.second=d3_time_interval(function(date
){return new
d3_date(Math.floor(date/1e3)*1e3)},function(date,offset){date.setTime(
date.getTime()+Math.floor(offset)*1e3)},function(date){return
date.getSeconds()});d3_time.seconds=d3_time.second.range;d3_time.seconds
.utc=d3_time.second.utc.range;d3_time.minute=d3_time_interval(function(
date){return new
d3_date(Math.floor(date/6e4)*6e4)},function(date,offset){date.setTime(
date.getTime()+Math.floor(offset)*6e4)},function(date){return
date.getMinutes()});d3_time.minutes=d3_time.minute.range;d3_time.minutes
.utc=d3_time.minute.utc.range;d3_time.hour=d3_time_interval(function(
date){var timezone=date.getTimezoneOffset()/60;return new
d3_date((Math.floor(date/36e5-timezone)+timezone)*36e5)},function(date,
offset){date.setTime(date.getTime()+Math.floor(offset)*36e5)},function(
date){return
date.getHours()});d3_time.hours=d3_time.hour.range;d3_time.hours.utc=
d3_time.hour.utc.range;d3_time.month=d3_time_interval(function(date){
date=d3_time.day(date);date.setDate(1);return
date},function(date,offset){date.setMonth(date.getMonth()+offset)},
function(date){return
date.getMonth()});d3_time.months=d3_time.month.range;d3_time.months.utc=
d3_time.month.utc.range;function
d3_time_scale(linear,methods,format){function scale(x){return
linear(x)}scale.invert=function(x){return
d3_time_scaleDate(linear.invert(x))};scale.domain=function(x){if(!
arguments.length)return
linear.domain().map(d3_time_scaleDate);linear.domain(x);return
scale};function tickMethod(extent,count){var
span=extent[1]-extent[0],target=span/count,i=d3.bisect(
d3_time_scaleSteps,target);return
i==d3_time_scaleSteps.length?[methods.year,d3_scale_linearTickRange(
extent.map(function(d){return
d/31536e6}),count)[2]]:!i?[d3_time_scaleMilliseconds,
d3_scale_linearTickRange(extent,count)[2]]:methods[target/
d3_time_scaleSteps[i-1]<d3_time_scaleSteps[i]/target?i-1:i]}scale.nice=
function(interval,skip){var
domain=scale.domain(),extent=d3_scaleExtent(domain),method=interval==
null?tickMethod(extent,10):typeof
interval==="number"&&tickMethod(extent,interval);if(method)interval=
method[0],skip=method[1];function
skipped(date){return!isNaN(date)&&!interval.range(date,d3_time_scaleDate
(+date+1),skip).length}return
scale.domain(d3_scale_nice(domain,skip>1?{floor:function(date){while(
skipped(date=interval.floor(date)))date=d3_time_scaleDate(date-1);return
date},ceil:function(date){while(skipped(date=interval.ceil(date)))date=
d3_time_scaleDate(+date+1);return
date}}:interval))};scale.ticks=function(interval,skip){var
extent=d3_scaleExtent(scale.domain()),method=interval==null?tickMethod(
extent,10):typeof
interval==="number"?tickMethod(extent,interval):!interval.range&&[{range
:interval},skip];if(method)interval=method[0],skip=method[1];return
interval.range(extent[0],d3_time_scaleDate(+extent[1]+1),skip<1?1:skip)}
;scale.tickFormat=function(){return format};scale.copy=function(){return
d3_time_scale(linear.copy(),methods,format)};return
d3_scale_linearRebind(scale,linear)}function d3_time_scaleDate(t){return
new Date(t)}function d3_time_scaleFormat(formats){return
function(date){var
i=formats.length-1,f=formats[i];while(!f[1](date))f=formats[--i];return
f[0](date)}}var
d3_time_scaleSteps=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,
432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6];var
d3_time_scaleLocalMethods=[[d3_time.second,1],[d3_time.second,5],[
d3_time.second,15],[d3_time.second,30],[d3_time.minute,1],[d3_time.
minute,5],[d3_time.minute,15],[d3_time.minute,30],[d3_time.hour,1],[
d3_time.hour,3],[d3_time.hour,6],[d3_time.hour,12],[d3_time.day,1],[
d3_time.day,2],[d3_time.week,1],[d3_time.month,1],[d3_time.month,3],[
d3_time.year,1]];var
d3_time_scaleLocalFormats=[[d3_time_format("%Y"),d3_true],[
d3_time_format("%B"),function(d){return
d.getMonth()}],[d3_time_format("%b %d"),function(d){return
d.getDate()!=1}],[d3_time_format("%a %d"),function(d){return
d.getDay()&&d.getDate()!=1}],[d3_time_format("%I %p"),function(d){return
d.getHours()}],[d3_time_format("%I:%M"),function(d){return
d.getMinutes()}],[d3_time_format(":%S"),function(d){return
d.getSeconds()}],[d3_time_format(".%L"),function(d){return
d.getMilliseconds()}]];var
d3_time_scaleLocalFormat=d3_time_scaleFormat(d3_time_scaleLocalFormats);
d3_time_scaleLocalMethods.year=d3_time.year;d3_time.scale=function(){
return
d3_time_scale(d3.scale.linear(),d3_time_scaleLocalMethods,
d3_time_scaleLocalFormat)};var
d3_time_scaleMilliseconds={range:function(start,stop,step){return
d3.range(+start,+stop,step).map(d3_time_scaleDate)},floor:d3_identity,
ceil:d3_identity};var
d3_time_scaleUTCMethods=d3_time_scaleLocalMethods.map(function(m){return
[m[0].utc,m[1]]});var
d3_time_scaleUTCFormats=[[d3_time_formatUtc("%Y"),d3_true],[
d3_time_formatUtc("%B"),function(d){return
d.getUTCMonth()}],[d3_time_formatUtc("%b %d"),function(d){return
d.getUTCDate()!=1}],[d3_time_formatUtc("%a %d"),function(d){return
d.getUTCDay()&&d.getUTCDate()!=1}],[d3_time_formatUtc("%I
%p"),function(d){return
d.getUTCHours()}],[d3_time_formatUtc("%I:%M"),function(d){return
d.getUTCMinutes()}],[d3_time_formatUtc(":%S"),function(d){return
d.getUTCSeconds()}],[d3_time_formatUtc(".%L"),function(d){return
d.getUTCMilliseconds()}]];var
d3_time_scaleUTCFormat=d3_time_scaleFormat(d3_time_scaleUTCFormats);
d3_time_scaleUTCMethods.year=d3_time.year.utc;d3_time.scale.utc=function
(){return
d3_time_scale(d3.scale.linear(),d3_time_scaleUTCMethods,
d3_time_scaleUTCFormat)};d3.text=d3_xhrType(function(request){return
request.responseText});d3.json=function(url,callback){return
d3_xhr(url,"application/json",d3_json,callback)};function
d3_json(request){return
JSON.parse(request.responseText)}d3.html=function(url,callback){return
d3_xhr(url,"text/html",d3_html,callback)};function d3_html(request){var
range=d3_document.createRange();range.selectNode(d3_document.body);
return
range.createContextualFragment(request.responseText)}d3.xml=d3_xhrType(
function(request){return request.responseXML});return
d3}();!function(){var
topojson={version:"1.4.9",mesh:mesh,feature:featureOrCollection,
neighbors:neighbors,presimplify:presimplify};function
merge(topology,arcs){var
fragmentByStart={},fragmentByEnd={};arcs.forEach(function(i){var
e=ends(i),start=e[0],end=e[1],f,g;if(f=fragmentByEnd[start]){delete
fragmentByEnd[f.end];f.push(i);f.end=end;if(g=fragmentByStart[end]){
delete fragmentByStart[g.start];var
fg=g===f?f:f.concat(g);fragmentByStart[fg.start=f.start]=fragmentByEnd[
fg.end=g.end]=fg}else if(g=fragmentByEnd[end]){delete
fragmentByStart[g.start];delete fragmentByEnd[g.end];var
fg=f.concat(g.map(function(i){return~i}).reverse());fragmentByStart[fg.
start=f.start]=fragmentByEnd[fg.end=g.start]=fg}else{fragmentByStart[f.
start]=fragmentByEnd[f.end]=f}}else if(f=fragmentByStart[end]){delete
fragmentByStart[f.start];f.unshift(i);f.start=start;if(g=fragmentByEnd[
start]){delete fragmentByEnd[g.end];var
gf=g===f?f:g.concat(f);fragmentByStart[gf.start=g.start]=fragmentByEnd[
gf.end=f.end]=gf}else if(g=fragmentByStart[start]){delete
fragmentByStart[g.start];delete fragmentByEnd[g.end];var
gf=g.map(function(i){return~i}).reverse().concat(f);fragmentByStart[gf.
start=g.end]=fragmentByEnd[gf.end=f.end]=gf}else{fragmentByStart[f.start
]=fragmentByEnd[f.end]=f}}else if(f=fragmentByStart[start]){delete
fragmentByStart[f.start];f.unshift(~i);f.start=end;if(g=fragmentByEnd[
end]){delete fragmentByEnd[g.end];var
gf=g===f?f:g.concat(f);fragmentByStart[gf.start=g.start]=fragmentByEnd[
gf.end=f.end]=gf}else if(g=fragmentByStart[end]){delete
fragmentByStart[g.start];delete fragmentByEnd[g.end];var
gf=g.map(function(i){return~i}).reverse().concat(f);fragmentByStart[gf.
start=g.end]=fragmentByEnd[gf.end=f.end]=gf}else{fragmentByStart[f.start
]=fragmentByEnd[f.end]=f}}else if(f=fragmentByEnd[end]){delete
fragmentByEnd[f.end];f.push(~i);f.end=start;if(g=fragmentByEnd[start]){
delete fragmentByStart[g.start];var
fg=g===f?f:f.concat(g);fragmentByStart[fg.start=f.start]=fragmentByEnd[
fg.end=g.end]=fg}else if(g=fragmentByStart[start]){delete
fragmentByStart[g.start];delete fragmentByEnd[g.end];var
fg=f.concat(g.map(function(i){return~i}).reverse());fragmentByStart[fg.
start=f.start]=fragmentByEnd[fg.end=g.start]=fg}else{fragmentByStart[f.
start]=fragmentByEnd[f.end]=f}}else{f=[i];fragmentByStart[f.start=start]
=fragmentByEnd[f.end=end]=f}});function ends(i){var
arc=topology.arcs[i],p0=arc[0],p1=[0,0];arc.forEach(function(dp){p1[0]+=
dp[0],p1[1]+=dp[1]});return[p0,p1]}var fragments=[];for(var k in
fragmentByEnd)fragments.push(fragmentByEnd[k]);return fragments}function
mesh(topology,o,filter){var arcs=[];if(arguments.length>1){var
geomsByArc=[],geom;function
arc(i){if(i<0)i=~i;(geomsByArc[i]||(geomsByArc[i]=[])).push(geom)}
function line(arcs){arcs.forEach(arc)}function
polygon(arcs){arcs.forEach(line)}function
geometry(o){if(o.type==="GeometryCollection")o.geometries.forEach(
geometry);else if(o.type in
geometryType){geom=o;geometryType[o.type](o.arcs)}}var
geometryType={LineString:line,MultiLineString:polygon,Polygon:polygon,
MultiPolygon:function(arcs){arcs.forEach(polygon)}};geometry(o);
geomsByArc.forEach(arguments.length<3?function(geoms,i){arcs.push(i)}:
function(geoms,i){if(filter(geoms[0],geoms[geoms.length-1]))arcs.push(i)
})}else{for(var i=0,n=topology.arcs.length;i<n;++i)arcs.push(i)}return
object(topology,{type:"MultiLineString",arcs:merge(topology,arcs)})}
function featureOrCollection(topology,o){return
o.type==="GeometryCollection"?{type:"FeatureCollection",features:o.
geometries.map(function(o){return
feature(topology,o)})}:feature(topology,o)}function
feature(topology,o){var
f={type:"Feature",id:o.id,properties:o.properties||{},geometry:object(
topology,o)};if(o.id==null)delete f.id;return f}function
object(topology,o){var
absolute=transformAbsolute(topology.transform),arcs=topology.arcs;
function arc(i,points){if(points.length)points.pop();for(var
a=arcs[i<0?~i:i],k=0,n=a.length,p;k<n;++k){points.push(p=a[k].slice());
absolute(p,k)}if(i<0)reverse(points,n)}function
point(p){p=p.slice();absolute(p,0);return p}function line(arcs){var
points=[];for(var
i=0,n=arcs.length;i<n;++i)arc(arcs[i],points);if(points.length<2)points.
push(points[0].slice());return points}function ring(arcs){var
points=line(arcs);while(points.length<4)points.push(points[0].slice());
return points}function polygon(arcs){return arcs.map(ring)}function
geometry(o){var t=o.type;return
t==="GeometryCollection"?{type:t,geometries:o.geometries.map(geometry)}:
t in geometryType?{type:t,coordinates:geometryType[t](o)}:null}var
geometryType={Point:function(o){return
point(o.coordinates)},MultiPoint:function(o){return
o.coordinates.map(point)},LineString:function(o){return
line(o.arcs)},MultiLineString:function(o){return
o.arcs.map(line)},Polygon:function(o){return
polygon(o.arcs)},MultiPolygon:function(o){return
o.arcs.map(polygon)}};return geometry(o)}function reverse(array,n){var
t,j=array.length,i=j-n;while(i<--j)t=array[i],array[i++]=array[j],array[
j]=t}function bisect(a,x){var lo=0,hi=a.length;while(lo<hi){var
mid=lo+hi>>>1;if(a[mid]<x)lo=mid+1;else hi=mid}return lo}function
neighbors(objects){var
indexesByArc={},neighbors=objects.map(function(){return[]});function
line(arcs,i){arcs.forEach(function(a){if(a<0)a=~a;var
o=indexesByArc[a];if(o)o.push(i);else indexesByArc[a]=[i]})}function
polygon(arcs,i){arcs.forEach(function(arc){line(arc,i)})}function
geometry(o,i){if(o.type==="GeometryCollection")o.geometries.forEach(
function(o){geometry(o,i)});else if(o.type in
geometryType)geometryType[o.type](o.arcs,i)}var
geometryType={LineString:line,MultiLineString:polygon,Polygon:polygon,
MultiPolygon:function(arcs,i){arcs.forEach(function(arc){polygon(arc,i)}
)}};objects.forEach(geometry);for(var i in indexesByArc){for(var
indexes=indexesByArc[i],m=indexes.length,j=0;j<m;++j){for(var
k=j+1;k<m;++k){var
ij=indexes[j],ik=indexes[k],n;if((n=neighbors[ij])[i=bisect(n,ik)]!==ik)
n.splice(i,0,ik);if((n=neighbors[ik])[i=bisect(n,ij)]!==ij)n.splice(i,0,
ij)}}}return neighbors}function presimplify(topology,triangleArea){var
absolute=transformAbsolute(topology.transform),relative=
transformRelative(topology.transform),heap=minHeap(compareArea),maxArea=
0,triangle;if(!triangleArea)triangleArea=cartesianArea;topology.arcs.
forEach(function(arc){var triangles=[];arc.forEach(absolute);for(var
i=1,n=arc.length-1;i<n;++i){triangle=arc.slice(i-1,i+2);triangle[1][2]=
triangleArea(triangle);triangles.push(triangle);heap.push(triangle)}arc[
0][2]=arc[n][2]=Infinity;for(var
i=0,n=triangles.length;i<n;++i){triangle=triangles[i];triangle.previous=
triangles[i-1];triangle.next=triangles[i+1]}});while(triangle=heap.pop()
){var
previous=triangle.previous,next=triangle.next;if(triangle[1][2]<maxArea)
triangle[1][2]=maxArea;else
maxArea=triangle[1][2];if(previous){previous.next=next;previous[2]=
triangle[2];update(previous)}if(next){next.previous=previous;next[0]=
triangle[0];update(next)}}topology.arcs.forEach(function(arc){arc.
forEach(relative)});function
update(triangle){heap.remove(triangle);triangle[1][2]=triangleArea(
triangle);heap.push(triangle)}return topology}function
cartesianArea(triangle){return
Math.abs((triangle[0][0]-triangle[2][0])*(triangle[1][1]-triangle[0][1])
-(triangle[0][0]-triangle[1][0])*(triangle[2][1]-triangle[0][1]))}
function compareArea(a,b){return a[1][2]-b[1][2]}function
minHeap(compare){var heap={},array=[];heap.push=function(){for(var
i=0,n=arguments.length;i<n;++i){var
object=arguments[i];up(object.index=array.push(object)-1)}return
array.length};heap.pop=function(){var
removed=array[0],object=array.pop();if(array.length){array[object.index=
0]=object;down(0)}return removed};heap.remove=function(removed){var
i=removed.index,object=array.pop();if(i!==array.length){array[object.
index=i]=object;(compare(object,removed)<0?up:down)(i)}return
i};function up(i){var object=array[i];while(i>0){var
up=(i+1>>1)-1,parent=array[up];if(compare(object,parent)>=0)break;array[
parent.index=i]=parent;array[object.index=i=up]=object}}function
down(i){var object=array[i];while(true){var
right=i+1<<1,left=right-1,down=i,child=array[down];if(left<array.length&
&compare(array[left],child)<0)child=array[down=left];if(right<array.
length&&compare(array[right],child)<0)child=array[down=right];if(down===
i)break;array[child.index=i]=child;array[object.index=i=down]=object}}
return heap}function transformAbsolute(transform){if(!transform)return
noop;var
x0,y0,kx=transform.scale[0],ky=transform.scale[1],dx=transform.translate
[0],dy=transform.translate[1];return
function(point,i){if(!i)x0=y0=0;point[0]=(x0+=point[0])*kx+dx;point[1]=(
y0+=point[1])*ky+dy}}function
transformRelative(transform){if(!transform)return noop;var
x0,y0,kx=transform.scale[0],ky=transform.scale[1],dx=transform.translate
[0],dy=transform.translate[1];return function(point,i){if(!i)x0=y0=0;var
x1=(point[0]-dx)/kx|0,y1=(point[1]-dy)/ky|0;point[0]=x1-x0;point[1]=y1-
y0;x0=x1;y0=y1}}function noop(){}if(typeof
define==="function"&&define.amd)define(topojson);else if(typeof
module==="object"&&module.exports)module.exports=topojson;else
this.topojson=topojson}();var
hashtrack={frequency:100,last_hash:window.location.hash,
onhashchange_callbacks:[],onhashvarchange_callbacks:{},interval:null,
check_hash:function(){if(window.location.hash!=hashtrack.last_hash){
hashtrack.last_hash=location.hash;hashtrack.update();hashtrack.
call_onhashchange_callbacks()}},init:function(){if(hashtrack.interval===
null){hashtrack.interval=setInterval(hashtrack.check_hash,hashtrack.
frequency)}if(typeof
hashtrack.vars==="undefined"){hashtrack.vars={}}hashtrack.update();if(
window.location.hash){hashtrack.call_onhashchange_callbacks()}},
setFrequency:function(freq){if(hashtrack.frequency!=freq){hashtrack.
frequency=freq;if(hashtrack.interval){clearInterval(hashtrack.interval);
hashtrack.interval=setInterval(hashtrack.check_hash,hashtrack.frequency)
}}},stop:function(){clearInterval(hashtrack.interval);hashtrack.interval
=null},onhashchange:function(func,first_call){hashtrack.
onhashchange_callbacks.push(func);var
pq=hashtrack.parseHash(location.hash);func(location.hash.slice(1),pq.
path)},onhashvarchange:function(varname,func,first_call){if(!(varname in
hashtrack.onhashvarchange_callbacks)){hashtrack.
onhashvarchange_callbacks[varname]=[]}hashtrack.
onhashvarchange_callbacks[varname].push(func);func(varname,hashtrack.
getVar(name))},call_onhashchange_callbacks:function(){var
hash=window.location.hash.slice(1);for(var
i=0;i<hashtrack.onhashchange_callbacks.length;i++){var
f=hashtrack.onhashchange_callbacks[i];if(typeof
f==="function"){f(hash)}}},call_onhashvarchange_callbacks:function(name,
value){if(name in hashtrack.onhashvarchange_callbacks){for(var i in
hashtrack.onhashvarchange_callbacks[name]){var
f=hashtrack.onhashvarchange_callbacks[name][i];if(typeof
f==="function"){f(name,value)}}}},update:function(){var
vars=hashtrack.all();for(var k in
vars){if(hashtrack.vars[k]!=vars[k]){hashtrack.
call_onhashvarchange_callbacks(k,vars[k])}}hashtrack.vars=vars},all:
function(){var
hash=window.location.hash.slice(1,window.location.hash.length),vars,
result;hash=hash.split("?")[1]||hash;vars=hash.split("&"),result={};for(
var i=0;i<vars.length;i++){var
pair=vars[i].split("=");result[pair[0]]=pair[1]}return
result},getVar:function(key){return
hashtrack.vars[key]},setVar:function(variable,value){var
hash=window.location.hash.slice(1,window.location.hash.length);var
path=hash.replace(/\?.*/,"");var
qs;if(hash.match(/\?/)){qs=hash.replace(/.*\?/,"")}else{qs=""}var
new_qs;if(qs.indexOf(variable+"=")==-1){new_qs=qs+"&"+variable+"="+value
}else{new_qs=qs.replace(variable+"="+hashtrack.getVar(variable),variable
+"="+value)}window.location.hash=path+"?"+new_qs;hashtrack.vars[variable
]=value;hashtrack.call_onhashvarchange_callbacks(variable,value)},
getPath:function(){return
hashtrack.parseHash(location.hash).path},setPath:function(new_path){pq=
hashtrack.parseHash(location.hash);if(pq.path==new_path){return}else{if(
new_path[0]!=="/"){new_path="/"+new_path}pq.path=new_path;var
build=[];if(pq.path.length>0){build.push(pq.path)}if(pq.qs.length>0){
build.push("?");build.push(pq.qs)}location.hash=build.join("")}},
parseHash:function(string){var
path__qs=_path_qs(string);return{path:path__qs[0],qs:path__qs[1]}}};
function _path_qs(string){var string=string.replace(/^#/,"");var
path__qs=string.split("?");if(path__qs.length==1){if(string[0]=="/"){
return[path__qs[0],""]}else{return["",path__qs[0]]}}else{return[path__qs
[0],path__qs[1]]}}function _path(string){return
_path_qs(string)[0]}function _qs(string){return
_path_qs(string)[1]}function addHashQuery(a){var
href=$(a).attr("href");var
new_vars=hashtrack.all(_qs(href));$.each(new_vars,function(name,value){
hashtrack.set(name,value)});return false}if(typeof
route!="undefined"){hashtrack.path=function(match,func){route(match).
bind(function(){path_and_qs=routes.args.path.split("?");qs=path_and_qs[1
];path=[];$.each(path_and_qs[0].split("/"),function(){if(this.length>0){
path.push(this)}});func(path)})}}if(typeof
$!="undefined"){$(document).ready(hashtrack.init)}else if(typeof
jQuery!=="undefined"){jQuery(document).ready(hashtrack.init)}var
OSDE=OSDE?OSDE:{};OSDE.categoryColors=["#CF3D1E","#F15623","#F68B1F","#
FFC60B","#DFCE21","#BCD631","#95C93D","#48B85C","#00833D","#00B48D","#
60C4B1","#27C4F4","#478DCB","#3E67B1","#4251A3","#59449B","#6E3F7C","#
6A246D","#8A4873","#EB0080","#EF58A0","#C05A89"];OSDE.parseArgs=function
(args){var
queryString={};args.split("&").forEach(function(pair){if(pair==="")
return;var
parts=pair.split("=");queryString[parts[0]]=parts[1]&&decodeURIComponent
(parts[1].replace(/\+/g," "))});return
queryString};OSDE.mergeArgs=function(args){var queryString="";var
query=$.map(args,function(v,k){return
encodeURIComponent(k)+"="+encodeURIComponent(v)});return
query.join("&")};OSDE.amount=function(num){return
accounting.formatMoney(num)};