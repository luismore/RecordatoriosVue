(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();var ip={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G=function(n,e){if(!n)throw ii(e)},ii=function(n){return new Error("Firebase Database ("+d_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},QI=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],o=n[t++],a=n[t++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Vl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],o=r+1<n.length,a=o?n[r+1]:0,c=r+2<n.length,u=c?n[r+2]:0,h=i>>2,f=(i&3)<<4|a>>4;let g=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(g=64)),s.push(t[h],t[f],t[g],t[m])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(f_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):QI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const u=r<n.length?t[n.charAt(r)]:64;++r;const f=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||a==null||u==null||f==null)throw new YI;const g=i<<2|a>>4;if(s.push(g),u!==64){const m=a<<4&240|u>>2;if(s.push(m),f!==64){const v=u<<6&192|f;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class YI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const p_=function(n){const e=f_(n);return Vl.encodeByteArray(e,!0)},Ka=function(n){return p_(n).replace(/\./g,"")},Ga=function(n){try{return Vl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(n){return g_(void 0,n)}function g_(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!JI(t)||(n[t]=g_(n[t],e[t]));return n}function JI(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew=()=>ZI().__FIREBASE_DEFAULTS__,tw=()=>{if(typeof process>"u"||typeof ip>"u")return;const n=ip.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},nw=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ga(n[1]);return e&&JSON.parse(e)},Ll=()=>{try{return ew()||tw()||nw()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},m_=n=>{var e,t;return(t=(e=Ll())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},sw=n=>{const e=m_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},__=()=>{var n;return(n=Ll())===null||n===void 0?void 0:n.config},y_=n=>{var e;return(e=Ll())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ka(JSON.stringify(t)),Ka(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ah(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ct())}function iw(){var n;const e=(n=Ll())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ow(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function aw(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function E_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lw(){const n=Ct();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function cw(){return d_.NODE_ADMIN===!0}function uw(){return!iw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function v_(){try{return typeof indexedDB=="object"}catch{return!1}}function hw(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw="FirebaseError";class Bn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=dw,Object.setPrototypeOf(this,Bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oi.prototype.create)}}class oi{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?fw(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Bn(r,a,s)}}function fw(n,e){return n.replace(pw,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const pw=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(n){return JSON.parse(n)}function ut(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_=function(n){let e={},t={},s={},r="";try{const i=n.split(".");e=ho(Ga(i[0])||""),t=ho(Ga(i[1])||""),r=i[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:r}},gw=function(n){const e=T_(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},mw=function(n){const e=T_(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Wr(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function vu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Qa(n,e,t){const s={};for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(s[r]=e.call(t,n[r],r,n));return s}function Ya(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],o=e[r];if(op(i)&&op(o)){if(!Ya(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function op(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let f=0;f<16;f++)s[f]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let f=16;f<80;f++){const g=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(g<<1|g>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,h;for(let f=0;f<80;f++){f<40?f<20?(u=a^i&(o^a),h=1518500249):(u=i^o^a,h=1859775393):f<60?(u=i&o|a&(i|o),h=2400959708):(u=i^o^a,h=3395469782);const g=(r<<5|r>>>27)+u+c+h+s[f]&4294967295;c=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=g}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<t;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function yw(n,e){const t=new Ew(n,e);return t.subscribe.bind(t)}class Ew{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");vw(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=$c),r.error===void 0&&(r.error=$c),r.complete===void 0&&(r.complete=$c);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vw(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function $c(){}function Tw(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,G(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):r<65536?(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Fl=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(n){return n&&n._delegate?n._delegate:n}class pn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new uo;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Aw(e))try{this.getOrInitializeService({instanceIdentifier:Ys})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Ys){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ys){return this.instances.has(e)}getOptions(e=Ys){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,t){var s;const r=this.normalizeInstanceIdentifier(t),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Rw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ys){return this.component?this.component.multipleInstances?e:Ys:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rw(n){return n===Ys?void 0:n}function Aw(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ww(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ge||(ge={}));const bw={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},Sw=ge.INFO,Pw={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},kw=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=Pw[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Do{constructor(e){this.name=e,this._logLevel=Sw,this._logHandler=kw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const Nw=(n,e)=>e.some(t=>n instanceof t);let ap,lp;function Ow(){return ap||(ap=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dw(){return lp||(lp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const I_=new WeakMap,Tu=new WeakMap,w_=new WeakMap,jc=new WeakMap,Ch=new WeakMap;function xw(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Rs(n.result)),r()},o=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&I_.set(t,n)}).catch(()=>{}),Ch.set(e,n),e}function Mw(n){if(Tu.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Tu.set(n,e)}let Iu={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Tu.get(n);if(e==="objectStoreNames")return n.objectStoreNames||w_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Rs(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Vw(n){Iu=n(Iu)}function Lw(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(qc(this),e,...t);return w_.set(s,e.sort?e.sort():[e]),Rs(s)}:Dw().includes(n)?function(...e){return n.apply(qc(this),e),Rs(I_.get(this))}:function(...e){return Rs(n.apply(qc(this),e))}}function Fw(n){return typeof n=="function"?Lw(n):(n instanceof IDBTransaction&&Mw(n),Nw(n,Ow())?new Proxy(n,Iu):n)}function Rs(n){if(n instanceof IDBRequest)return xw(n);if(jc.has(n))return jc.get(n);const e=Fw(n);return e!==n&&(jc.set(n,e),Ch.set(e,n)),e}const qc=n=>Ch.get(n);function Uw(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(n,e),a=Rs(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Rs(o.result),c.oldVersion,c.newVersion,Rs(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Bw=["get","getKey","getAll","getAllKeys","count"],$w=["put","add","delete","clear"],Wc=new Map;function cp(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Wc.get(e))return Wc.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=$w.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Bw.includes(t)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),r&&c.done]))[0]};return Wc.set(e,i),i}Vw(n=>({...n,get:(e,t,s)=>cp(e,t)||n.get(e,t,s),has:(e,t)=>!!cp(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(qw(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function qw(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wu="@firebase/app",up="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=new Do("@firebase/app"),Ww="@firebase/app-compat",Hw="@firebase/analytics-compat",zw="@firebase/analytics",Kw="@firebase/app-check-compat",Gw="@firebase/app-check",Qw="@firebase/auth",Yw="@firebase/auth-compat",Xw="@firebase/database",Jw="@firebase/data-connect",Zw="@firebase/database-compat",eR="@firebase/functions",tR="@firebase/functions-compat",nR="@firebase/installations",sR="@firebase/installations-compat",rR="@firebase/messaging",iR="@firebase/messaging-compat",oR="@firebase/performance",aR="@firebase/performance-compat",lR="@firebase/remote-config",cR="@firebase/remote-config-compat",uR="@firebase/storage",hR="@firebase/storage-compat",dR="@firebase/firestore",fR="@firebase/vertexai",pR="@firebase/firestore-compat",gR="firebase",mR="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru="[DEFAULT]",_R={[wu]:"fire-core",[Ww]:"fire-core-compat",[zw]:"fire-analytics",[Hw]:"fire-analytics-compat",[Gw]:"fire-app-check",[Kw]:"fire-app-check-compat",[Qw]:"fire-auth",[Yw]:"fire-auth-compat",[Xw]:"fire-rtdb",[Jw]:"fire-data-connect",[Zw]:"fire-rtdb-compat",[eR]:"fire-fn",[tR]:"fire-fn-compat",[nR]:"fire-iid",[sR]:"fire-iid-compat",[rR]:"fire-fcm",[iR]:"fire-fcm-compat",[oR]:"fire-perf",[aR]:"fire-perf-compat",[lR]:"fire-rc",[cR]:"fire-rc-compat",[uR]:"fire-gcs",[hR]:"fire-gcs-compat",[dR]:"fire-fst",[pR]:"fire-fst-compat",[fR]:"fire-vertex","fire-js":"fire-js",[gR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa=new Map,yR=new Map,Au=new Map;function hp(n,e){try{n.container.addComponent(e)}catch(t){ss.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function xn(n){const e=n.name;if(Au.has(e))return ss.debug(`There were multiple attempts to register component ${e}.`),!1;Au.set(e,n);for(const t of Xa.values())hp(t,n);for(const t of yR.values())hp(t,n);return!0}function bh(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function wn(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},As=new oi("app","Firebase",ER);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw As.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs=mR;function R_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ru,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw As.create("bad-app-name",{appName:String(r)});if(t||(t=__()),!t)throw As.create("no-options");const i=Xa.get(r);if(i){if(Ya(t,i.options)&&Ya(s,i.config))return i;throw As.create("duplicate-app",{appName:r})}const o=new Cw(r);for(const c of Au.values())o.addComponent(c);const a=new vR(t,s,o);return Xa.set(r,a),a}function Sh(n=Ru){const e=Xa.get(n);if(!e&&n===Ru&&__())return R_();if(!e)throw As.create("no-app",{appName:n});return e}function Ht(n,e,t){var s;let r=(s=_R[n])!==null&&s!==void 0?s:n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ss.warn(a.join(" "));return}xn(new pn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR="firebase-heartbeat-database",IR=1,fo="firebase-heartbeat-store";let Hc=null;function A_(){return Hc||(Hc=Uw(TR,IR,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(fo)}catch(t){console.warn(t)}}}}).catch(n=>{throw As.create("idb-open",{originalErrorMessage:n.message})})),Hc}async function wR(n){try{const t=(await A_()).transaction(fo),s=await t.objectStore(fo).get(C_(n));return await t.done,s}catch(e){if(e instanceof Bn)ss.warn(e.message);else{const t=As.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ss.warn(t.message)}}}async function dp(n,e){try{const s=(await A_()).transaction(fo,"readwrite");await s.objectStore(fo).put(e,C_(n)),await s.done}catch(t){if(t instanceof Bn)ss.warn(t.message);else{const s=As.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ss.warn(s.message)}}}function C_(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR=1024,AR=30*24*60*60*1e3;class CR{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new SR(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=fp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=AR}),this._storage.overwrite(this._heartbeatsCache))}catch(s){ss.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=fp(),{heartbeatsToSend:s,unsentEntries:r}=bR(this._heartbeatsCache.heartbeats),i=Ka(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return ss.warn(t),""}}}function fp(){return new Date().toISOString().substring(0,10)}function bR(n,e=RR){const t=[];let s=n.slice();for(const r of n){const i=t.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),pp(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),pp(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class SR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return v_()?hw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await wR(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return dp(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return dp(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function pp(n){return Ka(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PR(n){xn(new pn("platform-logger",e=>new jw(e),"PRIVATE")),xn(new pn("heartbeat",e=>new CR(e),"PRIVATE")),Ht(wu,up,n),Ht(wu,up,"esm2017"),Ht("fire-js","")}PR("");function Ph(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(n);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(n,s[r])&&(t[s[r]]=n[s[r]]);return t}function b_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kR=b_,S_=new oi("auth","Firebase",b_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=new Do("@firebase/auth");function NR(n,...e){Ja.logLevel<=ge.WARN&&Ja.warn(`Auth (${Fs}): ${n}`,...e)}function Na(n,...e){Ja.logLevel<=ge.ERROR&&Ja.error(`Auth (${Fs}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(n,...e){throw Nh(n,...e)}function cn(n,...e){return Nh(n,...e)}function kh(n,e,t){const s=Object.assign(Object.assign({},kR()),{[e]:t});return new oi("auth","Firebase",s).create(e,{appName:n.name})}function Cs(n){return kh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function OR(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Mn(n,"argument-error"),kh(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Nh(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return S_.create(n,...e)}function ue(n,e,...t){if(!n)throw Nh(e,...t)}function Yn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Na(e),new Error(e)}function rs(n,e){n||Yn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function DR(){return gp()==="http:"||gp()==="https:"}function gp(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(DR()||aw()||"connection"in navigator)?navigator.onLine:!0}function MR(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,t){this.shortDelay=e,this.longDelay=t,rs(t>e,"Short delay should be less than long delay!"),this.isMobile=Ah()||E_()}get(){return xR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(n,e){rs(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR=new xo(3e4,6e4);function Mo(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function dr(n,e,t,s,r={}){return k_(n,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=ai(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const u=Object.assign({method:e,headers:c},i);return ow()||(u.referrerPolicy="no-referrer"),P_.fetch()(O_(n,n.config.apiHost,t,a),u)})}async function k_(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},VR),e);try{const r=new UR(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ma(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ma(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ma(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw ma(n,"user-disabled",o);const h=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw kh(n,h,u);Mn(n,h)}}catch(r){if(r instanceof Bn)throw r;Mn(n,"network-request-failed",{message:String(r)})}}async function N_(n,e,t,s,r={}){const i=await dr(n,e,t,s,r);return"mfaPendingCredential"in i&&Mn(n,"multi-factor-auth-required",{_serverResponse:i}),i}function O_(n,e,t,s){const r=`${e}${t}?${s}`;return n.config.emulator?Oh(n.config,r):`${n.config.apiScheme}://${r}`}function FR(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class UR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(cn(this.auth,"network-request-failed")),LR.get())})}}function ma(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=cn(n,e,s);return r.customData._tokenResponse=t,r}function mp(n){return n!==void 0&&n.enterprise!==void 0}class BR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return FR(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function $R(n,e){return dr(n,"GET","/v2/recaptchaConfig",Mo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jR(n,e){return dr(n,"POST","/v1/accounts:delete",e)}async function D_(n,e){return dr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qR(n,e=!1){const t=it(n),s=await t.getIdToken(e),r=Dh(s);ue(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:zi(zc(r.auth_time)),issuedAtTime:zi(zc(r.iat)),expirationTime:zi(zc(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function zc(n){return Number(n)*1e3}function Dh(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Na("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ga(t);return r?JSON.parse(r):(Na("Failed to decode base64 JWT payload"),null)}catch(r){return Na("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function _p(n){const e=Dh(n);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function po(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Bn&&WR(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function WR({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=zi(this.lastLoginAt),this.creationTime=zi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Za(n){var e;const t=n.auth,s=await n.getIdToken(),r=await po(n,D_(t,{idToken:s}));ue(r==null?void 0:r.users.length,t,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?x_(i.providerUserInfo):[],a=KR(n.providerData,o),c=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),h=c?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new bu(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function zR(n){const e=it(n);await Za(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function KR(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function x_(n){return n.map(e=>{var{providerId:t}=e,s=Ph(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GR(n,e){const t=await k_(n,{},async()=>{const s=ai({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,o=O_(n,r,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",P_.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function QR(n,e){return dr(n,"POST","/v2/accounts:revokeToken",Mo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_p(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ue(e.length!==0,"internal-error");const t=_p(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ue(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await GR(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,o=new Dr;return s&&(ue(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(ue(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(ue(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Dr,this.toJSON())}_performRefresh(){return Yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(n,e){ue(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Xn{constructor(e){var{uid:t,auth:s,stsTokenManager:r}=e,i=Ph(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new HR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new bu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await po(this,this.stsTokenManager.getToken(this.auth,e));return ue(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return qR(this,e)}reload(){return zR(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Xn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Za(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wn(this.auth.app))return Promise.reject(Cs(this.auth));const e=await this.getIdToken();return await po(this,jR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,r,i,o,a,c,u,h;const f=(s=t.displayName)!==null&&s!==void 0?s:void 0,g=(r=t.email)!==null&&r!==void 0?r:void 0,m=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=t.photoURL)!==null&&o!==void 0?o:void 0,C=(a=t.tenantId)!==null&&a!==void 0?a:void 0,S=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,D=(u=t.createdAt)!==null&&u!==void 0?u:void 0,j=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:x,emailVerified:L,isAnonymous:ne,providerData:re,stsTokenManager:R}=t;ue(x&&R,e,"internal-error");const y=Dr.fromJSON(this.name,R);ue(typeof x=="string",e,"internal-error"),ps(f,e.name),ps(g,e.name),ue(typeof L=="boolean",e,"internal-error"),ue(typeof ne=="boolean",e,"internal-error"),ps(m,e.name),ps(v,e.name),ps(C,e.name),ps(S,e.name),ps(D,e.name),ps(j,e.name);const w=new Xn({uid:x,auth:e,email:g,emailVerified:L,displayName:f,isAnonymous:ne,photoURL:v,phoneNumber:m,tenantId:C,stsTokenManager:y,createdAt:D,lastLoginAt:j});return re&&Array.isArray(re)&&(w.providerData=re.map(A=>Object.assign({},A))),S&&(w._redirectEventId=S),w}static async _fromIdTokenResponse(e,t,s=!1){const r=new Dr;r.updateFromServerResponse(t);const i=new Xn({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Za(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];ue(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?x_(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new Dr;a.updateFromIdToken(s);const c=new Xn({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new bu(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp=new Map;function Jn(n){rs(n instanceof Function,"Expected a class definition");let e=yp.get(n);return e?(rs(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,yp.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}M_.type="NONE";const Ep=M_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(n,e,t){return`firebase:${n}:${e}:${t}`}class xr{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Oa(this.userKey,r.apiKey,i),this.fullPersistenceKey=Oa("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new xr(Jn(Ep),e,s);const r=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||Jn(Ep);const o=Oa(s,e.config.apiKey,e.name);let a=null;for(const u of t)try{const h=await u._get(o);if(h){const f=Xn._fromJSON(e,h);u!==i&&(a=f),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new xr(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new xr(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(U_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(V_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($_(e))return"Blackberry";if(j_(e))return"Webos";if(L_(e))return"Safari";if((e.includes("chrome/")||F_(e))&&!e.includes("edge/"))return"Chrome";if(B_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function V_(n=Ct()){return/firefox\//i.test(n)}function L_(n=Ct()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function F_(n=Ct()){return/crios\//i.test(n)}function U_(n=Ct()){return/iemobile/i.test(n)}function B_(n=Ct()){return/android/i.test(n)}function $_(n=Ct()){return/blackberry/i.test(n)}function j_(n=Ct()){return/webos/i.test(n)}function xh(n=Ct()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function YR(n=Ct()){var e;return xh(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function XR(){return lw()&&document.documentMode===10}function q_(n=Ct()){return xh(n)||B_(n)||j_(n)||$_(n)||/windows phone/i.test(n)||U_(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(n,e=[]){let t;switch(n){case"Browser":t=vp(Ct());break;case"Worker":t=`${vp(Ct())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Fs}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZR(n,e={}){return dr(n,"GET","/v2/passwordPolicy",Mo(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA=6;class tA{constructor(e){var t,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:eA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,r,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tp(this),this.idTokenSubscription=new Tp(this),this.beforeStateQueue=new JR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=S_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Jn(t)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await xr.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await D_(this,{idToken:e}),s=await Xn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(wn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Za(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=MR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wn(this.app))return Promise.reject(Cs(this));const t=e?it(e):null;return t&&ue(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wn(this.app)?Promise.reject(Cs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wn(this.app)?Promise.reject(Cs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ZR(this),t=new tA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new oi("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await QR(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Jn(e)||this._popupRedirectResolver;ue(t,this,"argument-error"),this.redirectPersistenceManager=await xr.create(this,[Jn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ue(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=W_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&NR(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function fr(n){return it(n)}class Tp{constructor(e){this.auth=e,this.observer=null,this.addObserver=yw(t=>this.observer=t)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ul={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sA(n){Ul=n}function H_(n){return Ul.loadJS(n)}function rA(){return Ul.recaptchaEnterpriseScript}function iA(){return Ul.gapiScript}function oA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class aA{constructor(){this.enterprise=new lA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class lA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const cA="recaptcha-enterprise",z_="NO_RECAPTCHA";class uA{constructor(e){this.type=cA,this.auth=fr(e)}async verify(e="verify",t=!1){async function s(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{$R(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new BR(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;mp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(z_)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new aA().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(a=>{if(!t&&mp(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=rA();c.length!==0&&(c+=a),H_(c).then(()=>{r(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Ip(n,e,t,s=!1,r=!1){const i=new uA(n);let o;if(r)o=z_;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const a=Object.assign({},e);return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function hA(n,e,t,s,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Ip(n,e,t,t==="getOobCode");return s(n,o)}else return s(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Ip(n,e,t,t==="getOobCode");return s(n,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(n,e){const t=bh(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(Ya(i,e??{}))return r;Mn(r,"already-initialized")}return t.initialize({options:e})}function dA(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Jn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function fA(n,e,t){const s=fr(n);ue(s._canInitEmulator,s,"emulator-config-failed"),ue(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=G_(e),{host:o,port:a}=pA(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),gA()}function G_(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function pA(n){const e=G_(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:wp(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:wp(o)}}}function wp(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function gA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Yn("not implemented")}_getIdTokenResponse(e){return Yn("not implemented")}_linkToIdToken(e,t){return Yn("not implemented")}_getReauthenticationResolver(e){return Yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mr(n,e){return N_(n,"POST","/v1/accounts:signInWithIdp",Mo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA="http://localhost";class rr extends Q_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new rr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Mn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=t,i=Ph(t,["providerId","signInMethod"]);if(!s||!r)return null;const o=new rr(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Mr(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Mr(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Mr(e,t)}buildRequest(){const e={requestUri:mA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ai(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo extends Mh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es extends Vo{constructor(){super("facebook.com")}static credential(e){return rr._fromParams({providerId:Es.PROVIDER_ID,signInMethod:Es.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Es.credentialFromTaggedObject(e)}static credentialFromError(e){return Es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Es.credential(e.oauthAccessToken)}catch{return null}}}Es.FACEBOOK_SIGN_IN_METHOD="facebook.com";Es.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends Vo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return rr._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return In.credential(t,s)}catch{return null}}}In.GOOGLE_SIGN_IN_METHOD="google.com";In.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs extends Vo{constructor(){super("github.com")}static credential(e){return rr._fromParams({providerId:vs.PROVIDER_ID,signInMethod:vs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vs.credentialFromTaggedObject(e)}static credentialFromError(e){return vs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vs.credential(e.oauthAccessToken)}catch{return null}}}vs.GITHUB_SIGN_IN_METHOD="github.com";vs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends Vo{constructor(){super("twitter.com")}static credential(e,t){return rr._fromParams({providerId:Ts.PROVIDER_ID,signInMethod:Ts.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ts.credentialFromTaggedObject(e)}static credentialFromError(e){return Ts.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Ts.credential(t,s)}catch{return null}}}Ts.TWITTER_SIGN_IN_METHOD="twitter.com";Ts.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _A(n,e){return N_(n,"POST","/v1/accounts:signUp",Mo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await Xn._fromIdTokenResponse(e,s,r),o=Rp(s);return new ir({user:i,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=Rp(s);return new ir({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function Rp(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el extends Bn{constructor(e,t,s,r){var i;super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,el.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new el(e,t,s,r)}}function Y_(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?el._fromErrorAndOperation(n,i,e,s):i})}async function yA(n,e,t=!1){const s=await po(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ir._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EA(n,e,t=!1){const{auth:s}=n;if(wn(s.app))return Promise.reject(Cs(s));const r="reauthenticate";try{const i=await po(n,Y_(s,r,e,n),t);ue(i.idToken,s,"internal-error");const o=Dh(i.idToken);ue(o,s,"internal-error");const{sub:a}=o;return ue(n.uid===a,s,"user-mismatch"),ir._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Mn(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vA(n,e,t=!1){if(wn(n.app))return Promise.reject(Cs(n));const s="signIn",r=await Y_(n,s,e),i=await ir._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TA(n){const e=fr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ap(n,e,t){if(wn(n.app))return Promise.reject(Cs(n));const s=fr(n),o=await hA(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",_A).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&TA(n),c}),a=await ir._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function X_(n,e,t,s){return it(n).onIdTokenChanged(e,t,s)}function IA(n,e,t){return it(n).beforeAuthStateChanged(e,t)}function wA(n){return it(n).signOut()}const tl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(tl,"1"),this.storage.removeItem(tl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA=1e3,AA=10;class Z_ extends J_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=q_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);XR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,AA):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},RA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Z_.type="LOCAL";const ey=Z_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty extends J_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ty.type="SESSION";const Vh=ty;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new Bl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(t.origin,i)),c=await CA(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Lh("",20);r.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(f){const g=f;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(g.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(){return window}function SA(n){Sn().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ny(){return typeof Sn().WorkerGlobalScope<"u"&&typeof Sn().importScripts=="function"}async function PA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function NA(){return ny()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy="firebaseLocalStorageDb",OA=1,nl="firebaseLocalStorage",ry="fbase_key";class Lo{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function $l(n,e){return n.transaction([nl],e?"readwrite":"readonly").objectStore(nl)}function DA(){const n=indexedDB.deleteDatabase(sy);return new Lo(n).toPromise()}function Su(){const n=indexedDB.open(sy,OA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(nl,{keyPath:ry})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(nl)?e(s):(s.close(),await DA(),e(await Su()))})})}async function Cp(n,e,t){const s=$l(n,!0).put({[ry]:e,value:t});return new Lo(s).toPromise()}async function xA(n,e){const t=$l(n,!1).get(e),s=await new Lo(t).toPromise();return s===void 0?null:s.value}function bp(n,e){const t=$l(n,!0).delete(e);return new Lo(t).toPromise()}const MA=800,VA=3;class iy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Su(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>VA)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ny()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bl._getInstance(NA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await PA(),!this.activeServiceWorker)return;this.sender=new bA(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Su();return await Cp(e,tl,"1"),await bp(e,tl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Cp(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>xA(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>bp(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=$l(r,!1).getAll();return new Lo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),MA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}iy.type="LOCAL";const oy=iy;new xo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(n,e){return e?Jn(e):(ue(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh extends Q_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Mr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Mr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Mr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function LA(n){return vA(n.auth,new Fh(n),n.bypassAuthState)}function FA(n){const{auth:e,user:t}=n;return ue(t,e,"internal-error"),EA(t,new Fh(n),n.bypassAuthState)}async function UA(n){const{auth:e,user:t}=n;return ue(t,e,"internal-error"),yA(t,new Fh(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return LA;case"linkViaPopup":case"linkViaRedirect":return UA;case"reauthViaPopup":case"reauthViaRedirect":return FA;default:Mn(this.auth,"internal-error")}}resolve(e){rs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA=new xo(2e3,1e4);async function $A(n,e,t){if(wn(n.app))return Promise.reject(cn(n,"operation-not-supported-in-this-environment"));const s=fr(n);OR(n,e,Mh);const r=ay(s,t);return new Zs(s,"signInViaPopup",e,r).executeNotNull()}class Zs extends ly{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Zs.currentPopupAction&&Zs.currentPopupAction.cancel(),Zs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){rs(this.filter.length===1,"Popup operations only handle one event");const e=Lh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,BA.get())};e()}}Zs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA="pendingRedirect",Da=new Map;class qA extends ly{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Da.get(this.auth._key());if(!e){try{const s=await WA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Da.set(this.auth._key(),e)}return this.bypassAuthState||Da.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function WA(n,e){const t=KA(e),s=zA(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function HA(n,e){Da.set(n._key(),e)}function zA(n){return Jn(n._redirectPersistence)}function KA(n){return Oa(jA,n.config.apiKey,n.name)}async function GA(n,e,t=!1){if(wn(n.app))return Promise.reject(Cs(n));const s=fr(n),r=ay(s,e),o=await new qA(s,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA=10*60*1e3;class YA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!XA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!cy(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(cn(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=QA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sp(e))}saveEventToCache(e){this.cachedEventUids.add(Sp(e)),this.lastProcessedEventTime=Date.now()}}function Sp(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function cy({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function XA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cy(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JA(n,e={}){return dr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eC=/^https?/;async function tC(n){if(n.config.emulator)return;const{authorizedDomains:e}=await JA(n);for(const t of e)try{if(nC(t))return}catch{}Mn(n,"unauthorized-domain")}function nC(n){const e=Cu(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!eC.test(t))return!1;if(ZA.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC=new xo(3e4,6e4);function Pp(){const n=Sn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function rC(n){return new Promise((e,t)=>{var s,r,i;function o(){Pp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pp(),t(cn(n,"network-request-failed"))},timeout:sC.get()})}if(!((r=(s=Sn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Sn().gapi)===null||i===void 0)&&i.load)o();else{const a=oA("iframefcb");return Sn()[a]=()=>{gapi.load?o():t(cn(n,"network-request-failed"))},H_(`${iA()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw xa=null,e})}let xa=null;function iC(n){return xa=xa||rC(n),xa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC=new xo(5e3,15e3),aC="__/auth/iframe",lC="emulator/auth/iframe",cC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hC(n){const e=n.config;ue(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Oh(e,lC):`https://${n.config.authDomain}/${aC}`,s={apiKey:e.apiKey,appName:n.name,v:Fs},r=uC.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${ai(s).slice(1)}`}async function dC(n){const e=await iC(n),t=Sn().gapi;return ue(t,n,"internal-error"),e.open({where:document.body,url:hC(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cC,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=cn(n,"network-request-failed"),a=Sn().setTimeout(()=>{i(o)},oC.get());function c(){Sn().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pC=500,gC=600,mC="_blank",_C="http://localhost";class kp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yC(n,e,t,s=pC,r=gC){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},fC),{width:s.toString(),height:r.toString(),top:i,left:o}),u=Ct().toLowerCase();t&&(a=F_(u)?mC:t),V_(u)&&(e=e||_C,c.scrollbars="yes");const h=Object.entries(c).reduce((g,[m,v])=>`${g}${m}=${v},`,"");if(YR(u)&&a!=="_self")return EC(e||"",a),new kp(null);const f=window.open(e||"",a,h);ue(f,n,"popup-blocked");try{f.focus()}catch{}return new kp(f)}function EC(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC="__/auth/handler",TC="emulator/auth/handler",IC=encodeURIComponent("fac");async function Np(n,e,t,s,r,i){ue(n.config.authDomain,n,"auth-domain-config-required"),ue(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Fs,eventId:r};if(e instanceof Mh){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",vu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof Vo){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await n._getAppCheckToken(),u=c?`#${IC}=${encodeURIComponent(c)}`:"";return`${wC(n)}?${ai(a).slice(1)}${u}`}function wC({config:n}){return n.emulator?Oh(n,TC):`https://${n.authDomain}/${vC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc="webStorageSupport";class RC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vh,this._completeRedirectFn=GA,this._overrideRedirectResult=HA}async _openPopup(e,t,s,r){var i;rs((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Np(e,t,s,Cu(),r);return yC(e,o,Lh())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await Np(e,t,s,Cu(),r);return SA(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(rs(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await dC(e),s=new YA(e);return t.register("authEvent",r=>(ue(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Kc,{type:Kc},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Kc];o!==void 0&&t(!!o),Mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tC(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return q_()||L_()||xh()}}const uy=RC;var Op="@firebase/auth",Dp="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bC(n){xn(new pn("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;ue(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:W_(n)},u=new nA(s,r,i,c);return dA(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),xn(new pn("auth-internal",e=>{const t=fr(e.getProvider("auth").getImmediate());return(s=>new AC(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ht(Op,Dp,CC(n)),Ht(Op,Dp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC=5*60,PC=y_("authIdTokenMaxAge")||SC;let xp=null;const kC=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>PC)return;const r=t==null?void 0:t.token;xp!==r&&(xp=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function NC(n=Sh()){const e=bh(n,"auth");if(e.isInitialized())return e.getImmediate();const t=K_(n,{popupRedirectResolver:uy,persistence:[oy,ey,Vh]}),s=y_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=kC(i.toString());IA(t,o,()=>o(t.currentUser)),X_(t,a=>o(a))}}const r=m_("auth");return r&&fA(t,`http://${r}`),t}function OC(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}sA({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=cn("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",OC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bC("Browser");/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Uh(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const xe={},Vr=[],Pn=()=>{},DC=()=>!1,jl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Bh=n=>n.startsWith("onUpdate:"),bt=Object.assign,$h=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},xC=Object.prototype.hasOwnProperty,Pe=(n,e)=>xC.call(n,e),ae=Array.isArray,Lr=n=>Fo(n)==="[object Map]",li=n=>Fo(n)==="[object Set]",Mp=n=>Fo(n)==="[object Date]",de=n=>typeof n=="function",Je=n=>typeof n=="string",Vn=n=>typeof n=="symbol",Ve=n=>n!==null&&typeof n=="object",hy=n=>(Ve(n)||de(n))&&de(n.then)&&de(n.catch),dy=Object.prototype.toString,Fo=n=>dy.call(n),MC=n=>Fo(n).slice(8,-1),fy=n=>Fo(n)==="[object Object]",jh=n=>Je(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ki=Uh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ql=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},VC=/-(\w)/g,tn=ql(n=>n.replace(VC,(e,t)=>t?t.toUpperCase():"")),LC=/\B([A-Z])/g,Us=ql(n=>n.replace(LC,"-$1").toLowerCase()),Wl=ql(n=>n.charAt(0).toUpperCase()+n.slice(1)),Gc=ql(n=>n?`on${Wl(n)}`:""),bs=(n,e)=>!Object.is(n,e),Ma=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},py=(n,e,t,s=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:s,value:t})},sl=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Vp;const Hl=()=>Vp||(Vp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function qh(n){if(ae(n)){const e={};for(let t=0;t<n.length;t++){const s=n[t],r=Je(s)?$C(s):qh(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(Je(n)||Ve(n))return n}const FC=/;(?![^(]*\))/g,UC=/:([^]+)/,BC=/\/\*[^]*?\*\//g;function $C(n){const e={};return n.replace(BC,"").split(FC).forEach(t=>{if(t){const s=t.split(UC);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function zl(n){let e="";if(Je(n))e=n;else if(ae(n))for(let t=0;t<n.length;t++){const s=zl(n[t]);s&&(e+=s+" ")}else if(Ve(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const jC="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qC=Uh(jC);function gy(n){return!!n||n===""}function WC(n,e){if(n.length!==e.length)return!1;let t=!0;for(let s=0;t&&s<n.length;s++)t=Uo(n[s],e[s]);return t}function Uo(n,e){if(n===e)return!0;let t=Mp(n),s=Mp(e);if(t||s)return t&&s?n.getTime()===e.getTime():!1;if(t=Vn(n),s=Vn(e),t||s)return n===e;if(t=ae(n),s=ae(e),t||s)return t&&s?WC(n,e):!1;if(t=Ve(n),s=Ve(e),t||s){if(!t||!s)return!1;const r=Object.keys(n).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in n){const a=n.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Uo(n[o],e[o]))return!1}}return String(n)===String(e)}function Wh(n,e){return n.findIndex(t=>Uo(t,e))}const my=n=>!!(n&&n.__v_isRef===!0),rl=n=>Je(n)?n:n==null?"":ae(n)||Ve(n)&&(n.toString===dy||!de(n.toString))?my(n)?rl(n.value):JSON.stringify(n,_y,2):String(n),_y=(n,e)=>my(e)?_y(n,e.value):Lr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[s,r],i)=>(t[Qc(s,i)+" =>"]=r,t),{})}:li(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Qc(t))}:Vn(e)?Qc(e):Ve(e)&&!ae(e)&&!fy(e)?String(e):e,Qc=(n,e="")=>{var t;return Vn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Nt;class yy{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Nt,!e&&Nt&&(this.index=(Nt.scopes||(Nt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Nt;try{return Nt=this,e()}finally{Nt=t}}}on(){Nt=this}off(){Nt=this.parent}stop(e){if(this._active){this._active=!1;let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(this.effects.length=0,t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function HC(n){return new yy(n)}function Ey(){return Nt}function zC(n,e=!1){Nt&&Nt.cleanups.push(n)}let Me;const Yc=new WeakSet;class vy{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Nt&&Nt.active&&Nt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Yc.has(this)&&(Yc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Iy(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Lp(this),wy(this);const e=Me,t=un;Me=this,un=!0;try{return this.fn()}finally{Ry(this),Me=e,un=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Kh(e);this.deps=this.depsTail=void 0,Lp(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Yc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Pu(this)&&this.run()}get dirty(){return Pu(this)}}let Ty=0,Gi,Qi;function Iy(n,e=!1){if(n.flags|=8,e){n.next=Qi,Qi=n;return}n.next=Gi,Gi=n}function Hh(){Ty++}function zh(){if(--Ty>0)return;if(Qi){let e=Qi;for(Qi=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Gi;){let e=Gi;for(Gi=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){n||(n=s)}e=t}}if(n)throw n}function wy(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ry(n){let e,t=n.depsTail,s=t;for(;s;){const r=s.prevDep;s.version===-1?(s===t&&(t=r),Kh(s),KC(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}n.deps=e,n.depsTail=t}function Pu(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ay(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Ay(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===go))return;n.globalVersion=go;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!Pu(n)){n.flags&=-3;return}const t=Me,s=un;Me=n,un=!0;try{wy(n);const r=n.fn(n._value);(e.version===0||bs(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Me=t,un=s,Ry(n),n.flags&=-3}}function Kh(n,e=!1){const{dep:t,prevSub:s,nextSub:r}=n;if(s&&(s.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=s,n.nextSub=void 0),t.subs===n&&(t.subs=s,!s&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)Kh(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function KC(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let un=!0;const Cy=[];function Bs(){Cy.push(un),un=!1}function $s(){const n=Cy.pop();un=n===void 0?!0:n}function Lp(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Me;Me=void 0;try{e()}finally{Me=t}}}let go=0;class GC{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Gh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Me||!un||Me===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Me)t=this.activeLink=new GC(Me,this),Me.deps?(t.prevDep=Me.depsTail,Me.depsTail.nextDep=t,Me.depsTail=t):Me.deps=Me.depsTail=t,by(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const s=t.nextDep;s.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=s),t.prevDep=Me.depsTail,t.nextDep=void 0,Me.depsTail.nextDep=t,Me.depsTail=t,Me.deps===t&&(Me.deps=s)}return t}trigger(e){this.version++,go++,this.notify(e)}notify(e){Hh();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{zh()}}}function by(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)by(s)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const ku=new WeakMap,nr=Symbol(""),Nu=Symbol(""),mo=Symbol("");function vt(n,e,t){if(un&&Me){let s=ku.get(n);s||ku.set(n,s=new Map);let r=s.get(t);r||(s.set(t,r=new Gh),r.map=s,r.key=t),r.track()}}function Gn(n,e,t,s,r,i){const o=ku.get(n);if(!o){go++;return}const a=c=>{c&&c.trigger()};if(Hh(),e==="clear")o.forEach(a);else{const c=ae(n),u=c&&jh(t);if(c&&t==="length"){const h=Number(s);o.forEach((f,g)=>{(g==="length"||g===mo||!Vn(g)&&g>=h)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),u&&a(o.get(mo)),e){case"add":c?u&&a(o.get("length")):(a(o.get(nr)),Lr(n)&&a(o.get(Nu)));break;case"delete":c||(a(o.get(nr)),Lr(n)&&a(o.get(Nu)));break;case"set":Lr(n)&&a(o.get(nr));break}}zh()}function Rr(n){const e=Se(n);return e===n?e:(vt(e,"iterate",mo),Zt(n)?e:e.map(Tt))}function Kl(n){return vt(n=Se(n),"iterate",mo),n}const QC={__proto__:null,[Symbol.iterator](){return Xc(this,Symbol.iterator,Tt)},concat(...n){return Rr(this).concat(...n.map(e=>ae(e)?Rr(e):e))},entries(){return Xc(this,"entries",n=>(n[1]=Tt(n[1]),n))},every(n,e){return Wn(this,"every",n,e,void 0,arguments)},filter(n,e){return Wn(this,"filter",n,e,t=>t.map(Tt),arguments)},find(n,e){return Wn(this,"find",n,e,Tt,arguments)},findIndex(n,e){return Wn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Wn(this,"findLast",n,e,Tt,arguments)},findLastIndex(n,e){return Wn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Wn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Jc(this,"includes",n)},indexOf(...n){return Jc(this,"indexOf",n)},join(n){return Rr(this).join(n)},lastIndexOf(...n){return Jc(this,"lastIndexOf",n)},map(n,e){return Wn(this,"map",n,e,void 0,arguments)},pop(){return ki(this,"pop")},push(...n){return ki(this,"push",n)},reduce(n,...e){return Fp(this,"reduce",n,e)},reduceRight(n,...e){return Fp(this,"reduceRight",n,e)},shift(){return ki(this,"shift")},some(n,e){return Wn(this,"some",n,e,void 0,arguments)},splice(...n){return ki(this,"splice",n)},toReversed(){return Rr(this).toReversed()},toSorted(n){return Rr(this).toSorted(n)},toSpliced(...n){return Rr(this).toSpliced(...n)},unshift(...n){return ki(this,"unshift",n)},values(){return Xc(this,"values",Tt)}};function Xc(n,e,t){const s=Kl(n),r=s[e]();return s!==n&&!Zt(n)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=t(i.value)),i}),r}const YC=Array.prototype;function Wn(n,e,t,s,r,i){const o=Kl(n),a=o!==n&&!Zt(n),c=o[e];if(c!==YC[e]){const f=c.apply(n,i);return a?Tt(f):f}let u=t;o!==n&&(a?u=function(f,g){return t.call(this,Tt(f),g,n)}:t.length>2&&(u=function(f,g){return t.call(this,f,g,n)}));const h=c.call(o,u,s);return a&&r?r(h):h}function Fp(n,e,t,s){const r=Kl(n);let i=t;return r!==n&&(Zt(n)?t.length>3&&(i=function(o,a,c){return t.call(this,o,a,c,n)}):i=function(o,a,c){return t.call(this,o,Tt(a),c,n)}),r[e](i,...s)}function Jc(n,e,t){const s=Se(n);vt(s,"iterate",mo);const r=s[e](...t);return(r===-1||r===!1)&&Xh(t[0])?(t[0]=Se(t[0]),s[e](...t)):r}function ki(n,e,t=[]){Bs(),Hh();const s=Se(n)[e].apply(n,t);return zh(),$s(),s}const XC=Uh("__proto__,__v_isRef,__isVue"),Sy=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Vn));function JC(n){Vn(n)||(n=String(n));const e=Se(this);return vt(e,"has",n),e.hasOwnProperty(n)}class Py{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,s){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return i;if(t==="__v_raw")return s===(r?i?lb:Dy:i?Oy:Ny).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=ae(e);if(!r){let c;if(o&&(c=QC[t]))return c;if(t==="hasOwnProperty")return JC}const a=Reflect.get(e,t,rt(e)?e:s);return(Vn(t)?Sy.has(t):XC(t))||(r||vt(e,"get",t),i)?a:rt(a)?o&&jh(t)?a:a.value:Ve(a)?r?My(a):Gl(a):a}}class ky extends Py{constructor(e=!1){super(!1,e)}set(e,t,s,r){let i=e[t];if(!this._isShallow){const c=or(i);if(!Zt(s)&&!or(s)&&(i=Se(i),s=Se(s)),!ae(e)&&rt(i)&&!rt(s))return c?!1:(i.value=s,!0)}const o=ae(e)&&jh(t)?Number(t)<e.length:Pe(e,t),a=Reflect.set(e,t,s,rt(e)?e:r);return e===Se(r)&&(o?bs(s,i)&&Gn(e,"set",t,s):Gn(e,"add",t,s)),a}deleteProperty(e,t){const s=Pe(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&s&&Gn(e,"delete",t,void 0),r}has(e,t){const s=Reflect.has(e,t);return(!Vn(t)||!Sy.has(t))&&vt(e,"has",t),s}ownKeys(e){return vt(e,"iterate",ae(e)?"length":nr),Reflect.ownKeys(e)}}class ZC extends Py{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const eb=new ky,tb=new ZC,nb=new ky(!0);const Ou=n=>n,_a=n=>Reflect.getPrototypeOf(n);function sb(n,e,t){return function(...s){const r=this.__v_raw,i=Se(r),o=Lr(i),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,u=r[n](...s),h=t?Ou:e?Du:Tt;return!e&&vt(i,"iterate",c?Nu:nr),{next(){const{value:f,done:g}=u.next();return g?{value:f,done:g}:{value:a?[h(f[0]),h(f[1])]:h(f),done:g}},[Symbol.iterator](){return this}}}}function ya(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function rb(n,e){const t={get(r){const i=this.__v_raw,o=Se(i),a=Se(r);n||(bs(r,a)&&vt(o,"get",r),vt(o,"get",a));const{has:c}=_a(o),u=e?Ou:n?Du:Tt;if(c.call(o,r))return u(i.get(r));if(c.call(o,a))return u(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!n&&vt(Se(r),"iterate",nr),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=Se(i),a=Se(r);return n||(bs(r,a)&&vt(o,"has",r),vt(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,c=Se(a),u=e?Ou:n?Du:Tt;return!n&&vt(c,"iterate",nr),a.forEach((h,f)=>r.call(i,u(h),u(f),o))}};return bt(t,n?{add:ya("add"),set:ya("set"),delete:ya("delete"),clear:ya("clear")}:{add(r){!e&&!Zt(r)&&!or(r)&&(r=Se(r));const i=Se(this);return _a(i).has.call(i,r)||(i.add(r),Gn(i,"add",r,r)),this},set(r,i){!e&&!Zt(i)&&!or(i)&&(i=Se(i));const o=Se(this),{has:a,get:c}=_a(o);let u=a.call(o,r);u||(r=Se(r),u=a.call(o,r));const h=c.call(o,r);return o.set(r,i),u?bs(i,h)&&Gn(o,"set",r,i):Gn(o,"add",r,i),this},delete(r){const i=Se(this),{has:o,get:a}=_a(i);let c=o.call(i,r);c||(r=Se(r),c=o.call(i,r)),a&&a.call(i,r);const u=i.delete(r);return c&&Gn(i,"delete",r,void 0),u},clear(){const r=Se(this),i=r.size!==0,o=r.clear();return i&&Gn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=sb(r,n,e)}),t}function Qh(n,e){const t=rb(n,e);return(s,r,i)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?s:Reflect.get(Pe(t,r)&&r in s?t:s,r,i)}const ib={get:Qh(!1,!1)},ob={get:Qh(!1,!0)},ab={get:Qh(!0,!1)};const Ny=new WeakMap,Oy=new WeakMap,Dy=new WeakMap,lb=new WeakMap;function cb(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ub(n){return n.__v_skip||!Object.isExtensible(n)?0:cb(MC(n))}function Gl(n){return or(n)?n:Yh(n,!1,eb,ib,Ny)}function xy(n){return Yh(n,!1,nb,ob,Oy)}function My(n){return Yh(n,!0,tb,ab,Dy)}function Yh(n,e,t,s,r){if(!Ve(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=r.get(n);if(i)return i;const o=ub(n);if(o===0)return n;const a=new Proxy(n,o===2?s:t);return r.set(n,a),a}function Fr(n){return or(n)?Fr(n.__v_raw):!!(n&&n.__v_isReactive)}function or(n){return!!(n&&n.__v_isReadonly)}function Zt(n){return!!(n&&n.__v_isShallow)}function Xh(n){return n?!!n.__v_raw:!1}function Se(n){const e=n&&n.__v_raw;return e?Se(e):n}function hb(n){return!Pe(n,"__v_skip")&&Object.isExtensible(n)&&py(n,"__v_skip",!0),n}const Tt=n=>Ve(n)?Gl(n):n,Du=n=>Ve(n)?My(n):n;function rt(n){return n?n.__v_isRef===!0:!1}function Ss(n){return Ly(n,!1)}function Vy(n){return Ly(n,!0)}function Ly(n,e){return rt(n)?n:new db(n,e)}class db{constructor(e,t){this.dep=new Gh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Se(e),this._value=t?e:Tt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,s=this.__v_isShallow||Zt(e)||or(e);e=s?e:Se(e),bs(e,t)&&(this._rawValue=e,this._value=s?e:Tt(e),this.dep.trigger())}}function kn(n){return rt(n)?n.value:n}function zn(n){return de(n)?n():kn(n)}const fb={get:(n,e,t)=>e==="__v_raw"?n:kn(Reflect.get(n,e,t)),set:(n,e,t,s)=>{const r=n[e];return rt(r)&&!rt(t)?(r.value=t,!0):Reflect.set(n,e,t,s)}};function Fy(n){return Fr(n)?n:new Proxy(n,fb)}class pb{constructor(e,t,s){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Gh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=go-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Me!==this)return Iy(this,!0),!0}get value(){const e=this.dep.track();return Ay(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function gb(n,e,t=!1){let s,r;return de(n)?s=n:(s=n.get,r=n.set),new pb(s,r,t)}const Ea={},il=new WeakMap;let Xs;function mb(n,e=!1,t=Xs){if(t){let s=il.get(t);s||il.set(t,s=[]),s.push(n)}}function _b(n,e,t=xe){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:c}=t,u=L=>r?L:Zt(L)||r===!1||r===0?Qn(L,1):Qn(L);let h,f,g,m,v=!1,C=!1;if(rt(n)?(f=()=>n.value,v=Zt(n)):Fr(n)?(f=()=>u(n),v=!0):ae(n)?(C=!0,v=n.some(L=>Fr(L)||Zt(L)),f=()=>n.map(L=>{if(rt(L))return L.value;if(Fr(L))return u(L);if(de(L))return c?c(L,2):L()})):de(n)?e?f=c?()=>c(n,2):n:f=()=>{if(g){Bs();try{g()}finally{$s()}}const L=Xs;Xs=h;try{return c?c(n,3,[m]):n(m)}finally{Xs=L}}:f=Pn,e&&r){const L=f,ne=r===!0?1/0:r;f=()=>Qn(L(),ne)}const S=Ey(),D=()=>{h.stop(),S&&S.active&&$h(S.effects,h)};if(i&&e){const L=e;e=(...ne)=>{L(...ne),D()}}let j=C?new Array(n.length).fill(Ea):Ea;const x=L=>{if(!(!(h.flags&1)||!h.dirty&&!L))if(e){const ne=h.run();if(r||v||(C?ne.some((re,R)=>bs(re,j[R])):bs(ne,j))){g&&g();const re=Xs;Xs=h;try{const R=[ne,j===Ea?void 0:C&&j[0]===Ea?[]:j,m];c?c(e,3,R):e(...R),j=ne}finally{Xs=re}}}else h.run()};return a&&a(x),h=new vy(f),h.scheduler=o?()=>o(x,!1):x,m=L=>mb(L,!1,h),g=h.onStop=()=>{const L=il.get(h);if(L){if(c)c(L,4);else for(const ne of L)ne();il.delete(h)}},e?s?x(!0):j=h.run():o?o(x.bind(null,!0),!0):h.run(),D.pause=h.pause.bind(h),D.resume=h.resume.bind(h),D.stop=D,D}function Qn(n,e=1/0,t){if(e<=0||!Ve(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,rt(n))Qn(n.value,e,t);else if(ae(n))for(let s=0;s<n.length;s++)Qn(n[s],e,t);else if(li(n)||Lr(n))n.forEach(s=>{Qn(s,e,t)});else if(fy(n)){for(const s in n)Qn(n[s],e,t);for(const s of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,s)&&Qn(n[s],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Bo(n,e,t,s){try{return s?n(...s):n()}catch(r){Ql(r,e,t)}}function Ln(n,e,t,s){if(de(n)){const r=Bo(n,e,t,s);return r&&hy(r)&&r.catch(i=>{Ql(i,e,t)}),r}if(ae(n)){const r=[];for(let i=0;i<n.length;i++)r.push(Ln(n[i],e,t,s));return r}}function Ql(n,e,t,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||xe;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const h=a.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](n,c,u)===!1)return}a=a.parent}if(i){Bs(),Bo(i,null,10,[n,c,u]),$s();return}}yb(n,t,r,s,o)}function yb(n,e,t,s=!0,r=!1){if(r)throw n;console.error(n)}const Ot=[];let vn=-1;const Ur=[];let ms=null,Ar=0;const Uy=Promise.resolve();let ol=null;function Jh(n){const e=ol||Uy;return n?e.then(this?n.bind(this):n):e}function Eb(n){let e=vn+1,t=Ot.length;for(;e<t;){const s=e+t>>>1,r=Ot[s],i=_o(r);i<n||i===n&&r.flags&2?e=s+1:t=s}return e}function Zh(n){if(!(n.flags&1)){const e=_o(n),t=Ot[Ot.length-1];!t||!(n.flags&2)&&e>=_o(t)?Ot.push(n):Ot.splice(Eb(e),0,n),n.flags|=1,By()}}function By(){ol||(ol=Uy.then(jy))}function vb(n){ae(n)?Ur.push(...n):ms&&n.id===-1?ms.splice(Ar+1,0,n):n.flags&1||(Ur.push(n),n.flags|=1),By()}function Up(n,e,t=vn+1){for(;t<Ot.length;t++){const s=Ot[t];if(s&&s.flags&2){if(n&&s.id!==n.uid)continue;Ot.splice(t,1),t--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function $y(n){if(Ur.length){const e=[...new Set(Ur)].sort((t,s)=>_o(t)-_o(s));if(Ur.length=0,ms){ms.push(...e);return}for(ms=e,Ar=0;Ar<ms.length;Ar++){const t=ms[Ar];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ms=null,Ar=0}}const _o=n=>n.id==null?n.flags&2?-1:1/0:n.id;function jy(n){try{for(vn=0;vn<Ot.length;vn++){const e=Ot[vn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Bo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;vn<Ot.length;vn++){const e=Ot[vn];e&&(e.flags&=-2)}vn=-1,Ot.length=0,$y(),ol=null,(Ot.length||Ur.length)&&jy()}}let Lt=null,qy=null;function al(n){const e=Lt;return Lt=n,qy=n&&n.type.__scopeId||null,e}function yo(n,e=Lt,t){if(!e||n._n)return n;const s=(...r)=>{s._d&&Qp(-1);const i=al(e);let o;try{o=n(...r)}finally{al(i),s._d&&Qp(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function xu(n,e){if(Lt===null)return n;const t=Zl(Lt),s=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,c=xe]=e[r];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&Qn(o),s.push({dir:i,instance:t,value:o,oldValue:void 0,arg:a,modifiers:c}))}return n}function Gs(n,e,t,s){const r=n.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Bs(),Ln(c,t,8,[n.el,a,n,e]),$s())}}const Tb=Symbol("_vte"),Ib=n=>n.__isTeleport;function ed(n,e){n.shapeFlag&6&&n.component?(n.transition=e,ed(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Wy(n,e){return de(n)?bt({name:n.name},e,{setup:n}):n}function Hy(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function ll(n,e,t,s,r=!1){if(ae(n)){n.forEach((v,C)=>ll(v,e&&(ae(e)?e[C]:e),t,s,r));return}if(Yi(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&ll(n,e,t,s.component.subTree);return}const i=s.shapeFlag&4?Zl(s.component):s.el,o=r?null:i,{i:a,r:c}=n,u=e&&e.r,h=a.refs===xe?a.refs={}:a.refs,f=a.setupState,g=Se(f),m=f===xe?()=>!1:v=>Pe(g,v);if(u!=null&&u!==c&&(Je(u)?(h[u]=null,m(u)&&(f[u]=null)):rt(u)&&(u.value=null)),de(c))Bo(c,a,12,[o,h]);else{const v=Je(c),C=rt(c);if(v||C){const S=()=>{if(n.f){const D=v?m(c)?f[c]:h[c]:c.value;r?ae(D)&&$h(D,i):ae(D)?D.includes(i)||D.push(i):v?(h[c]=[i],m(c)&&(f[c]=h[c])):(c.value=[i],n.k&&(h[n.k]=c.value))}else v?(h[c]=o,m(c)&&(f[c]=o)):C&&(c.value=o,n.k&&(h[n.k]=o))};o?(S.id=-1,Bt(S,t)):S()}}}Hl().requestIdleCallback;Hl().cancelIdleCallback;const Yi=n=>!!n.type.__asyncLoader,zy=n=>n.type.__isKeepAlive;function wb(n,e){Ky(n,"a",e)}function Rb(n,e){Ky(n,"da",e)}function Ky(n,e,t=ht){const s=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Yl(e,s,t),t){let r=t.parent;for(;r&&r.parent;)zy(r.parent.vnode)&&Ab(s,e,t,r),r=r.parent}}function Ab(n,e,t,s){const r=Yl(e,n,s,!0);Gy(()=>{$h(s[e],r)},t)}function Yl(n,e,t=ht,s=!1){if(t){const r=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...o)=>{Bs();const a=$o(t),c=Ln(e,t,n,o);return a(),$s(),c});return s?r.unshift(i):r.push(i),i}}const ls=n=>(e,t=ht)=>{(!To||n==="sp")&&Yl(n,(...s)=>e(...s),t)},Cb=ls("bm"),bb=ls("m"),Sb=ls("bu"),Pb=ls("u"),kb=ls("bum"),Gy=ls("um"),Qy=ls("sp"),Nb=ls("rtg"),Ob=ls("rtc");function Db(n,e=ht){Yl("ec",n,e)}const xb="components";function cl(n,e){return Vb(xb,n,!0,e)||n}const Mb=Symbol.for("v-ndc");function Vb(n,e,t=!0,s=!1){const r=Lt||ht;if(r){const i=r.type;{const a=AS(i,!1);if(a&&(a===e||a===tn(e)||a===Wl(tn(e))))return i}const o=Bp(r[n]||i[n],e)||Bp(r.appContext[n],e);return!o&&s?i:o}}function Bp(n,e){return n&&(n[e]||n[tn(e)]||n[Wl(tn(e))])}function Lb(n,e,t,s){let r;const i=t,o=ae(n);if(o||Je(n)){const a=o&&Fr(n);let c=!1;a&&(c=!Zt(n),n=Kl(n)),r=new Array(n.length);for(let u=0,h=n.length;u<h;u++)r[u]=e(c?Tt(n[u]):n[u],u,void 0,i)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,i)}else if(Ve(n))if(n[Symbol.iterator])r=Array.from(n,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(n);r=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const h=a[c];r[c]=e(n[h],h,c,i)}}else r=[];return r}const Mu=n=>n?_E(n)?Zl(n):Mu(n.parent):null,Xi=bt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Mu(n.parent),$root:n=>Mu(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Xy(n),$forceUpdate:n=>n.f||(n.f=()=>{Zh(n.update)}),$nextTick:n=>n.n||(n.n=Jh.bind(n.proxy)),$watch:n=>rS.bind(n)}),Zc=(n,e)=>n!==xe&&!n.__isScriptSetup&&Pe(n,e),Fb={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=n;let u;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return r[e];case 4:return t[e];case 3:return i[e]}else{if(Zc(s,e))return o[e]=1,s[e];if(r!==xe&&Pe(r,e))return o[e]=2,r[e];if((u=n.propsOptions[0])&&Pe(u,e))return o[e]=3,i[e];if(t!==xe&&Pe(t,e))return o[e]=4,t[e];Vu&&(o[e]=0)}}const h=Xi[e];let f,g;if(h)return e==="$attrs"&&vt(n.attrs,"get",""),h(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==xe&&Pe(t,e))return o[e]=4,t[e];if(g=c.config.globalProperties,Pe(g,e))return g[e]},set({_:n},e,t){const{data:s,setupState:r,ctx:i}=n;return Zc(r,e)?(r[e]=t,!0):s!==xe&&Pe(s,e)?(s[e]=t,!0):Pe(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!t[o]||n!==xe&&Pe(n,o)||Zc(e,o)||(a=i[0])&&Pe(a,o)||Pe(s,o)||Pe(Xi,o)||Pe(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Pe(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function $p(n){return ae(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Vu=!0;function Ub(n){const e=Xy(n),t=n.proxy,s=n.ctx;Vu=!1,e.beforeCreate&&jp(e.beforeCreate,n,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:h,beforeMount:f,mounted:g,beforeUpdate:m,updated:v,activated:C,deactivated:S,beforeDestroy:D,beforeUnmount:j,destroyed:x,unmounted:L,render:ne,renderTracked:re,renderTriggered:R,errorCaptured:y,serverPrefetch:w,expose:A,inheritAttrs:b,components:k,directives:I,filters:St}=e;if(u&&Bb(u,s,null),o)for(const ve in o){const me=o[ve];de(me)&&(s[ve]=me.bind(t))}if(r){const ve=r.call(t,t);Ve(ve)&&(n.data=Gl(ve))}if(Vu=!0,i)for(const ve in i){const me=i[ve],Ft=de(me)?me.bind(t,t):de(me.get)?me.get.bind(t,t):Pn,sn=!de(me)&&de(me.set)?me.set.bind(t):Pn,Qt=jt({get:Ft,set:sn});Object.defineProperty(s,ve,{enumerable:!0,configurable:!0,get:()=>Qt.value,set:je=>Qt.value=je})}if(a)for(const ve in a)Yy(a[ve],s,t,ve);if(c){const ve=de(c)?c.call(t):c;Reflect.ownKeys(ve).forEach(me=>{Va(me,ve[me])})}h&&jp(h,n,"c");function Ge(ve,me){ae(me)?me.forEach(Ft=>ve(Ft.bind(t))):me&&ve(me.bind(t))}if(Ge(Cb,f),Ge(bb,g),Ge(Sb,m),Ge(Pb,v),Ge(wb,C),Ge(Rb,S),Ge(Db,y),Ge(Ob,re),Ge(Nb,R),Ge(kb,j),Ge(Gy,L),Ge(Qy,w),ae(A))if(A.length){const ve=n.exposed||(n.exposed={});A.forEach(me=>{Object.defineProperty(ve,me,{get:()=>t[me],set:Ft=>t[me]=Ft})})}else n.exposed||(n.exposed={});ne&&n.render===Pn&&(n.render=ne),b!=null&&(n.inheritAttrs=b),k&&(n.components=k),I&&(n.directives=I),w&&Hy(n)}function Bb(n,e,t=Pn){ae(n)&&(n=Lu(n));for(const s in n){const r=n[s];let i;Ve(r)?"default"in r?i=zt(r.from||s,r.default,!0):i=zt(r.from||s):i=zt(r),rt(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function jp(n,e,t){Ln(ae(n)?n.map(s=>s.bind(e.proxy)):n.bind(e.proxy),e,t)}function Yy(n,e,t,s){let r=s.includes(".")?hE(t,s):()=>t[s];if(Je(n)){const i=e[n];de(i)&&Ji(r,i)}else if(de(n))Ji(r,n.bind(t));else if(Ve(n))if(ae(n))n.forEach(i=>Yy(i,e,t,s));else{const i=de(n.handler)?n.handler.bind(t):e[n.handler];de(i)&&Ji(r,i,n)}}function Xy(n){const e=n.type,{mixins:t,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=n.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!t&&!s?c=e:(c={},r.length&&r.forEach(u=>ul(c,u,o,!0)),ul(c,e,o)),Ve(e)&&i.set(e,c),c}function ul(n,e,t,s=!1){const{mixins:r,extends:i}=e;i&&ul(n,i,t,!0),r&&r.forEach(o=>ul(n,o,t,!0));for(const o in e)if(!(s&&o==="expose")){const a=$b[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const $b={data:qp,props:Wp,emits:Wp,methods:Fi,computed:Fi,beforeCreate:kt,created:kt,beforeMount:kt,mounted:kt,beforeUpdate:kt,updated:kt,beforeDestroy:kt,beforeUnmount:kt,destroyed:kt,unmounted:kt,activated:kt,deactivated:kt,errorCaptured:kt,serverPrefetch:kt,components:Fi,directives:Fi,watch:qb,provide:qp,inject:jb};function qp(n,e){return e?n?function(){return bt(de(n)?n.call(this,this):n,de(e)?e.call(this,this):e)}:e:n}function jb(n,e){return Fi(Lu(n),Lu(e))}function Lu(n){if(ae(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function kt(n,e){return n?[...new Set([].concat(n,e))]:e}function Fi(n,e){return n?bt(Object.create(null),n,e):e}function Wp(n,e){return n?ae(n)&&ae(e)?[...new Set([...n,...e])]:bt(Object.create(null),$p(n),$p(e??{})):e}function qb(n,e){if(!n)return e;if(!e)return n;const t=bt(Object.create(null),n);for(const s in e)t[s]=kt(n[s],e[s]);return t}function Jy(){return{app:null,config:{isNativeTag:DC,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wb=0;function Hb(n,e){return function(s,r=null){de(s)||(s=bt({},s)),r!=null&&!Ve(r)&&(r=null);const i=Jy(),o=new WeakSet,a=[];let c=!1;const u=i.app={_uid:Wb++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:bS,get config(){return i.config},set config(h){},use(h,...f){return o.has(h)||(h&&de(h.install)?(o.add(h),h.install(u,...f)):de(h)&&(o.add(h),h(u,...f))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,f){return f?(i.components[h]=f,u):i.components[h]},directive(h,f){return f?(i.directives[h]=f,u):i.directives[h]},mount(h,f,g){if(!c){const m=u._ceVNode||Ze(s,r);return m.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),n(m,h,g),c=!0,u._container=h,h.__vue_app__=u,Zl(m.component)}},onUnmount(h){a.push(h)},unmount(){c&&(Ln(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(h,f){return i.provides[h]=f,u},runWithContext(h){const f=Br;Br=u;try{return h()}finally{Br=f}}};return u}}let Br=null;function Va(n,e){if(ht){let t=ht.provides;const s=ht.parent&&ht.parent.provides;s===t&&(t=ht.provides=Object.create(s)),t[n]=e}}function zt(n,e,t=!1){const s=ht||Lt;if(s||Br){const r=Br?Br._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&de(e)?e.call(s&&s.proxy):e}}const Zy={},eE=()=>Object.create(Zy),tE=n=>Object.getPrototypeOf(n)===Zy;function zb(n,e,t,s=!1){const r={},i=eE();n.propsDefaults=Object.create(null),nE(n,e,r,i);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=s?r:xy(r):n.type.props?n.props=r:n.props=i,n.attrs=i}function Kb(n,e,t,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=n,a=Se(r),[c]=n.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let f=0;f<h.length;f++){let g=h[f];if(Xl(n.emitsOptions,g))continue;const m=e[g];if(c)if(Pe(i,g))m!==i[g]&&(i[g]=m,u=!0);else{const v=tn(g);r[v]=Fu(c,a,v,m,n,!1)}else m!==i[g]&&(i[g]=m,u=!0)}}}else{nE(n,e,r,i)&&(u=!0);let h;for(const f in a)(!e||!Pe(e,f)&&((h=Us(f))===f||!Pe(e,h)))&&(c?t&&(t[f]!==void 0||t[h]!==void 0)&&(r[f]=Fu(c,a,f,void 0,n,!0)):delete r[f]);if(i!==a)for(const f in i)(!e||!Pe(e,f))&&(delete i[f],u=!0)}u&&Gn(n.attrs,"set","")}function nE(n,e,t,s){const[r,i]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ki(c))continue;const u=e[c];let h;r&&Pe(r,h=tn(c))?!i||!i.includes(h)?t[h]=u:(a||(a={}))[h]=u:Xl(n.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=Se(t),u=a||xe;for(let h=0;h<i.length;h++){const f=i[h];t[f]=Fu(r,c,f,u[f],n,!Pe(u,f))}}return o}function Fu(n,e,t,s,r,i){const o=n[t];if(o!=null){const a=Pe(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&de(c)){const{propsDefaults:u}=r;if(t in u)s=u[t];else{const h=$o(r);s=u[t]=c.call(null,e),h()}}else s=c;r.ce&&r.ce._setProp(t,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Us(t))&&(s=!0))}return s}const Gb=new WeakMap;function sE(n,e,t=!1){const s=t?Gb:e.propsCache,r=s.get(n);if(r)return r;const i=n.props,o={},a=[];let c=!1;if(!de(n)){const h=f=>{c=!0;const[g,m]=sE(f,e,!0);bt(o,g),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!i&&!c)return Ve(n)&&s.set(n,Vr),Vr;if(ae(i))for(let h=0;h<i.length;h++){const f=tn(i[h]);Hp(f)&&(o[f]=xe)}else if(i)for(const h in i){const f=tn(h);if(Hp(f)){const g=i[h],m=o[f]=ae(g)||de(g)?{type:g}:bt({},g),v=m.type;let C=!1,S=!0;if(ae(v))for(let D=0;D<v.length;++D){const j=v[D],x=de(j)&&j.name;if(x==="Boolean"){C=!0;break}else x==="String"&&(S=!1)}else C=de(v)&&v.name==="Boolean";m[0]=C,m[1]=S,(C||Pe(m,"default"))&&a.push(f)}}const u=[o,a];return Ve(n)&&s.set(n,u),u}function Hp(n){return n[0]!=="$"&&!Ki(n)}const rE=n=>n[0]==="_"||n==="$stable",td=n=>ae(n)?n.map(Tn):[Tn(n)],Qb=(n,e,t)=>{if(e._n)return e;const s=yo((...r)=>td(e(...r)),t);return s._c=!1,s},iE=(n,e,t)=>{const s=n._ctx;for(const r in n){if(rE(r))continue;const i=n[r];if(de(i))e[r]=Qb(r,i,s);else if(i!=null){const o=td(i);e[r]=()=>o}}},oE=(n,e)=>{const t=td(e);n.slots.default=()=>t},aE=(n,e,t)=>{for(const s in e)(t||s!=="_")&&(n[s]=e[s])},Yb=(n,e,t)=>{const s=n.slots=eE();if(n.vnode.shapeFlag&32){const r=e._;r?(aE(s,e,t),t&&py(s,"_",r,!0)):iE(e,s)}else e&&oE(n,e)},Xb=(n,e,t)=>{const{vnode:s,slots:r}=n;let i=!0,o=xe;if(s.shapeFlag&32){const a=e._;a?t&&a===1?i=!1:aE(r,e,t):(i=!e.$stable,iE(e,r)),o=e}else e&&(oE(n,e),o={default:1});if(i)for(const a in r)!rE(a)&&o[a]==null&&delete r[a]},Bt=hS;function Jb(n){return Zb(n)}function Zb(n,e){const t=Hl();t.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:h,parentNode:f,nextSibling:g,setScopeId:m=Pn,insertStaticContent:v}=n,C=(E,T,P,V=null,$=null,F=null,K=void 0,H=null,W=!!T.dynamicChildren)=>{if(E===T)return;E&&!Ni(E,T)&&(V=M(E),je(E,$,F,!0),E=null),T.patchFlag===-2&&(W=!1,T.dynamicChildren=null);const{type:q,ref:ie,shapeFlag:Y}=T;switch(q){case Jl:S(E,T,P,V);break;case Eo:D(E,T,P,V);break;case La:E==null&&j(T,P,V,K);break;case on:k(E,T,P,V,$,F,K,H,W);break;default:Y&1?ne(E,T,P,V,$,F,K,H,W):Y&6?I(E,T,P,V,$,F,K,H,W):(Y&64||Y&128)&&q.process(E,T,P,V,$,F,K,H,W,ee)}ie!=null&&$&&ll(ie,E&&E.ref,F,T||E,!T)},S=(E,T,P,V)=>{if(E==null)s(T.el=a(T.children),P,V);else{const $=T.el=E.el;T.children!==E.children&&u($,T.children)}},D=(E,T,P,V)=>{E==null?s(T.el=c(T.children||""),P,V):T.el=E.el},j=(E,T,P,V)=>{[E.el,E.anchor]=v(E.children,T,P,V,E.el,E.anchor)},x=({el:E,anchor:T},P,V)=>{let $;for(;E&&E!==T;)$=g(E),s(E,P,V),E=$;s(T,P,V)},L=({el:E,anchor:T})=>{let P;for(;E&&E!==T;)P=g(E),r(E),E=P;r(T)},ne=(E,T,P,V,$,F,K,H,W)=>{T.type==="svg"?K="svg":T.type==="math"&&(K="mathml"),E==null?re(T,P,V,$,F,K,H,W):w(E,T,$,F,K,H,W)},re=(E,T,P,V,$,F,K,H)=>{let W,q;const{props:ie,shapeFlag:Y,transition:te,dirs:le}=E;if(W=E.el=o(E.type,F,ie&&ie.is,ie),Y&8?h(W,E.children):Y&16&&y(E.children,W,null,V,$,eu(E,F),K,H),le&&Gs(E,null,V,"created"),R(W,E,E.scopeId,K,V),ie){for(const pe in ie)pe!=="value"&&!Ki(pe)&&i(W,pe,null,ie[pe],F,V);"value"in ie&&i(W,"value",null,ie.value,F),(q=ie.onVnodeBeforeMount)&&En(q,V,E)}le&&Gs(E,null,V,"beforeMount");const oe=eS($,te);oe&&te.beforeEnter(W),s(W,T,P),((q=ie&&ie.onVnodeMounted)||oe||le)&&Bt(()=>{q&&En(q,V,E),oe&&te.enter(W),le&&Gs(E,null,V,"mounted")},$)},R=(E,T,P,V,$)=>{if(P&&m(E,P),V)for(let F=0;F<V.length;F++)m(E,V[F]);if($){let F=$.subTree;if(T===F||fE(F.type)&&(F.ssContent===T||F.ssFallback===T)){const K=$.vnode;R(E,K,K.scopeId,K.slotScopeIds,$.parent)}}},y=(E,T,P,V,$,F,K,H,W=0)=>{for(let q=W;q<E.length;q++){const ie=E[q]=H?_s(E[q]):Tn(E[q]);C(null,ie,T,P,V,$,F,K,H)}},w=(E,T,P,V,$,F,K)=>{const H=T.el=E.el;let{patchFlag:W,dynamicChildren:q,dirs:ie}=T;W|=E.patchFlag&16;const Y=E.props||xe,te=T.props||xe;let le;if(P&&Qs(P,!1),(le=te.onVnodeBeforeUpdate)&&En(le,P,T,E),ie&&Gs(T,E,P,"beforeUpdate"),P&&Qs(P,!0),(Y.innerHTML&&te.innerHTML==null||Y.textContent&&te.textContent==null)&&h(H,""),q?A(E.dynamicChildren,q,H,P,V,eu(T,$),F):K||me(E,T,H,null,P,V,eu(T,$),F,!1),W>0){if(W&16)b(H,Y,te,P,$);else if(W&2&&Y.class!==te.class&&i(H,"class",null,te.class,$),W&4&&i(H,"style",Y.style,te.style,$),W&8){const oe=T.dynamicProps;for(let pe=0;pe<oe.length;pe++){const Te=oe[pe],pt=Y[Te],ot=te[Te];(ot!==pt||Te==="value")&&i(H,Te,pt,ot,$,P)}}W&1&&E.children!==T.children&&h(H,T.children)}else!K&&q==null&&b(H,Y,te,P,$);((le=te.onVnodeUpdated)||ie)&&Bt(()=>{le&&En(le,P,T,E),ie&&Gs(T,E,P,"updated")},V)},A=(E,T,P,V,$,F,K)=>{for(let H=0;H<T.length;H++){const W=E[H],q=T[H],ie=W.el&&(W.type===on||!Ni(W,q)||W.shapeFlag&70)?f(W.el):P;C(W,q,ie,null,V,$,F,K,!0)}},b=(E,T,P,V,$)=>{if(T!==P){if(T!==xe)for(const F in T)!Ki(F)&&!(F in P)&&i(E,F,T[F],null,$,V);for(const F in P){if(Ki(F))continue;const K=P[F],H=T[F];K!==H&&F!=="value"&&i(E,F,H,K,$,V)}"value"in P&&i(E,"value",T.value,P.value,$)}},k=(E,T,P,V,$,F,K,H,W)=>{const q=T.el=E?E.el:a(""),ie=T.anchor=E?E.anchor:a("");let{patchFlag:Y,dynamicChildren:te,slotScopeIds:le}=T;le&&(H=H?H.concat(le):le),E==null?(s(q,P,V),s(ie,P,V),y(T.children||[],P,ie,$,F,K,H,W)):Y>0&&Y&64&&te&&E.dynamicChildren?(A(E.dynamicChildren,te,P,$,F,K,H),(T.key!=null||$&&T===$.subTree)&&lE(E,T,!0)):me(E,T,P,ie,$,F,K,H,W)},I=(E,T,P,V,$,F,K,H,W)=>{T.slotScopeIds=H,E==null?T.shapeFlag&512?$.ctx.activate(T,P,V,K,W):St(T,P,V,$,F,K,W):Gt(E,T,W)},St=(E,T,P,V,$,F,K)=>{const H=E.component=vS(E,V,$);if(zy(E)&&(H.ctx.renderer=ee),TS(H,!1,K),H.asyncDep){if($&&$.registerDep(H,Ge,K),!E.el){const W=H.subTree=Ze(Eo);D(null,W,T,P)}}else Ge(H,E,T,P,$,F,K)},Gt=(E,T,P)=>{const V=T.component=E.component;if(cS(E,T,P))if(V.asyncDep&&!V.asyncResolved){ve(V,T,P);return}else V.next=T,V.update();else T.el=E.el,V.vnode=T},Ge=(E,T,P,V,$,F,K)=>{const H=()=>{if(E.isMounted){let{next:Y,bu:te,u:le,parent:oe,vnode:pe}=E;{const gt=cE(E);if(gt){Y&&(Y.el=pe.el,ve(E,Y,K)),gt.asyncDep.then(()=>{E.isUnmounted||H()});return}}let Te=Y,pt;Qs(E,!1),Y?(Y.el=pe.el,ve(E,Y,K)):Y=pe,te&&Ma(te),(pt=Y.props&&Y.props.onVnodeBeforeUpdate)&&En(pt,oe,Y,pe),Qs(E,!0);const ot=Kp(E),Yt=E.subTree;E.subTree=ot,C(Yt,ot,f(Yt.el),M(Yt),E,$,F),Y.el=ot.el,Te===null&&uS(E,ot.el),le&&Bt(le,$),(pt=Y.props&&Y.props.onVnodeUpdated)&&Bt(()=>En(pt,oe,Y,pe),$)}else{let Y;const{el:te,props:le}=T,{bm:oe,m:pe,parent:Te,root:pt,type:ot}=E,Yt=Yi(T);Qs(E,!1),oe&&Ma(oe),!Yt&&(Y=le&&le.onVnodeBeforeMount)&&En(Y,Te,T),Qs(E,!0);{pt.ce&&pt.ce._injectChildStyle(ot);const gt=E.subTree=Kp(E);C(null,gt,P,V,E,$,F),T.el=gt.el}if(pe&&Bt(pe,$),!Yt&&(Y=le&&le.onVnodeMounted)){const gt=T;Bt(()=>En(Y,Te,gt),$)}(T.shapeFlag&256||Te&&Yi(Te.vnode)&&Te.vnode.shapeFlag&256)&&E.a&&Bt(E.a,$),E.isMounted=!0,T=P=V=null}};E.scope.on();const W=E.effect=new vy(H);E.scope.off();const q=E.update=W.run.bind(W),ie=E.job=W.runIfDirty.bind(W);ie.i=E,ie.id=E.uid,W.scheduler=()=>Zh(ie),Qs(E,!0),q()},ve=(E,T,P)=>{T.component=E;const V=E.vnode.props;E.vnode=T,E.next=null,Kb(E,T.props,V,P),Xb(E,T.children,P),Bs(),Up(E),$s()},me=(E,T,P,V,$,F,K,H,W=!1)=>{const q=E&&E.children,ie=E?E.shapeFlag:0,Y=T.children,{patchFlag:te,shapeFlag:le}=T;if(te>0){if(te&128){sn(q,Y,P,V,$,F,K,H,W);return}else if(te&256){Ft(q,Y,P,V,$,F,K,H,W);return}}le&8?(ie&16&&xt(q,$,F),Y!==q&&h(P,Y)):ie&16?le&16?sn(q,Y,P,V,$,F,K,H,W):xt(q,$,F,!0):(ie&8&&h(P,""),le&16&&y(Y,P,V,$,F,K,H,W))},Ft=(E,T,P,V,$,F,K,H,W)=>{E=E||Vr,T=T||Vr;const q=E.length,ie=T.length,Y=Math.min(q,ie);let te;for(te=0;te<Y;te++){const le=T[te]=W?_s(T[te]):Tn(T[te]);C(E[te],le,P,null,$,F,K,H,W)}q>ie?xt(E,$,F,!0,!1,Y):y(T,P,V,$,F,K,H,W,Y)},sn=(E,T,P,V,$,F,K,H,W)=>{let q=0;const ie=T.length;let Y=E.length-1,te=ie-1;for(;q<=Y&&q<=te;){const le=E[q],oe=T[q]=W?_s(T[q]):Tn(T[q]);if(Ni(le,oe))C(le,oe,P,null,$,F,K,H,W);else break;q++}for(;q<=Y&&q<=te;){const le=E[Y],oe=T[te]=W?_s(T[te]):Tn(T[te]);if(Ni(le,oe))C(le,oe,P,null,$,F,K,H,W);else break;Y--,te--}if(q>Y){if(q<=te){const le=te+1,oe=le<ie?T[le].el:V;for(;q<=te;)C(null,T[q]=W?_s(T[q]):Tn(T[q]),P,oe,$,F,K,H,W),q++}}else if(q>te)for(;q<=Y;)je(E[q],$,F,!0),q++;else{const le=q,oe=q,pe=new Map;for(q=oe;q<=te;q++){const at=T[q]=W?_s(T[q]):Tn(T[q]);at.key!=null&&pe.set(at.key,q)}let Te,pt=0;const ot=te-oe+1;let Yt=!1,gt=0;const us=new Array(ot);for(q=0;q<ot;q++)us[q]=0;for(q=le;q<=Y;q++){const at=E[q];if(pt>=ot){je(at,$,F,!0);continue}let Xt;if(at.key!=null)Xt=pe.get(at.key);else for(Te=oe;Te<=te;Te++)if(us[Te-oe]===0&&Ni(at,T[Te])){Xt=Te;break}Xt===void 0?je(at,$,F,!0):(us[Xt-oe]=q+1,Xt>=gt?gt=Xt:Yt=!0,C(at,T[Xt],P,null,$,F,K,H,W),pt++)}const _i=Yt?tS(us):Vr;for(Te=_i.length-1,q=ot-1;q>=0;q--){const at=oe+q,Xt=T[at],ea=at+1<ie?T[at+1].el:V;us[q]===0?C(null,Xt,P,ea,$,F,K,H,W):Yt&&(Te<0||q!==_i[Te]?Qt(Xt,P,ea,2):Te--)}}},Qt=(E,T,P,V,$=null)=>{const{el:F,type:K,transition:H,children:W,shapeFlag:q}=E;if(q&6){Qt(E.component.subTree,T,P,V);return}if(q&128){E.suspense.move(T,P,V);return}if(q&64){K.move(E,T,P,ee);return}if(K===on){s(F,T,P);for(let Y=0;Y<W.length;Y++)Qt(W[Y],T,P,V);s(E.anchor,T,P);return}if(K===La){x(E,T,P);return}if(V!==2&&q&1&&H)if(V===0)H.beforeEnter(F),s(F,T,P),Bt(()=>H.enter(F),$);else{const{leave:Y,delayLeave:te,afterLeave:le}=H,oe=()=>s(F,T,P),pe=()=>{Y(F,()=>{oe(),le&&le()})};te?te(F,oe,pe):pe()}else s(F,T,P)},je=(E,T,P,V=!1,$=!1)=>{const{type:F,props:K,ref:H,children:W,dynamicChildren:q,shapeFlag:ie,patchFlag:Y,dirs:te,cacheIndex:le}=E;if(Y===-2&&($=!1),H!=null&&ll(H,null,P,E,!0),le!=null&&(T.renderCache[le]=void 0),ie&256){T.ctx.deactivate(E);return}const oe=ie&1&&te,pe=!Yi(E);let Te;if(pe&&(Te=K&&K.onVnodeBeforeUnmount)&&En(Te,T,E),ie&6)yn(E.component,P,V);else{if(ie&128){E.suspense.unmount(P,V);return}oe&&Gs(E,null,T,"beforeUnmount"),ie&64?E.type.remove(E,T,P,ee,V):q&&!q.hasOnce&&(F!==on||Y>0&&Y&64)?xt(q,T,P,!1,!0):(F===on&&Y&384||!$&&ie&16)&&xt(W,T,P),V&&qe(E)}(pe&&(Te=K&&K.onVnodeUnmounted)||oe)&&Bt(()=>{Te&&En(Te,T,E),oe&&Gs(E,null,T,"unmounted")},P)},qe=E=>{const{type:T,el:P,anchor:V,transition:$}=E;if(T===on){cs(P,V);return}if(T===La){L(E);return}const F=()=>{r(P),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(E.shapeFlag&1&&$&&!$.persisted){const{leave:K,delayLeave:H}=$,W=()=>K(P,F);H?H(E.el,F,W):W()}else F()},cs=(E,T)=>{let P;for(;E!==T;)P=g(E),r(E),E=P;r(T)},yn=(E,T,P)=>{const{bum:V,scope:$,job:F,subTree:K,um:H,m:W,a:q}=E;zp(W),zp(q),V&&Ma(V),$.stop(),F&&(F.flags|=8,je(K,E,T,P)),H&&Bt(H,T),Bt(()=>{E.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},xt=(E,T,P,V=!1,$=!1,F=0)=>{for(let K=F;K<E.length;K++)je(E[K],T,P,V,$)},M=E=>{if(E.shapeFlag&6)return M(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const T=g(E.anchor||E.el),P=T&&T[Tb];return P?g(P):T};let X=!1;const Q=(E,T,P)=>{E==null?T._vnode&&je(T._vnode,null,null,!0):C(T._vnode||null,E,T,null,null,null,P),T._vnode=E,X||(X=!0,Up(),$y(),X=!1)},ee={p:C,um:je,m:Qt,r:qe,mt:St,mc:y,pc:me,pbc:A,n:M,o:n};return{render:Q,hydrate:void 0,createApp:Hb(Q)}}function eu({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Qs({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function eS(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function lE(n,e,t=!1){const s=n.children,r=e.children;if(ae(s)&&ae(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=_s(r[i]),a.el=o.el),!t&&a.patchFlag!==-2&&lE(o,a)),a.type===Jl&&(a.el=o.el)}}function tS(n){const e=n.slice(),t=[0];let s,r,i,o,a;const c=n.length;for(s=0;s<c;s++){const u=n[s];if(u!==0){if(r=t[t.length-1],n[r]<u){e[s]=r,t.push(s);continue}for(i=0,o=t.length-1;i<o;)a=i+o>>1,n[t[a]]<u?i=a+1:o=a;u<n[t[i]]&&(i>0&&(e[s]=t[i-1]),t[i]=s)}}for(i=t.length,o=t[i-1];i-- >0;)t[i]=o,o=e[o];return t}function cE(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:cE(e)}function zp(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const nS=Symbol.for("v-scx"),sS=()=>zt(nS);function Ji(n,e,t){return uE(n,e,t)}function uE(n,e,t=xe){const{immediate:s,deep:r,flush:i,once:o}=t,a=bt({},t),c=e&&s||!e&&i!=="post";let u;if(To){if(i==="sync"){const m=sS();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=Pn,m.resume=Pn,m.pause=Pn,m}}const h=ht;a.call=(m,v,C)=>Ln(m,h,v,C);let f=!1;i==="post"?a.scheduler=m=>{Bt(m,h&&h.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(m,v)=>{v?m():Zh(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,h&&(m.id=h.uid,m.i=h))};const g=_b(n,e,a);return To&&(u?u.push(g):c&&g()),g}function rS(n,e,t){const s=this.proxy,r=Je(n)?n.includes(".")?hE(s,n):()=>s[n]:n.bind(s,s);let i;de(e)?i=e:(i=e.handler,t=e);const o=$o(this),a=uE(r,i.bind(s),t);return o(),a}function hE(n,e){const t=e.split(".");return()=>{let s=n;for(let r=0;r<t.length&&s;r++)s=s[t[r]];return s}}const iS=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${tn(e)}Modifiers`]||n[`${Us(e)}Modifiers`];function oS(n,e,...t){if(n.isUnmounted)return;const s=n.vnode.props||xe;let r=t;const i=e.startsWith("update:"),o=i&&iS(s,e.slice(7));o&&(o.trim&&(r=t.map(h=>Je(h)?h.trim():h)),o.number&&(r=t.map(sl)));let a,c=s[a=Gc(e)]||s[a=Gc(tn(e))];!c&&i&&(c=s[a=Gc(Us(e))]),c&&Ln(c,n,6,r);const u=s[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Ln(u,n,6,r)}}function dE(n,e,t=!1){const s=e.emitsCache,r=s.get(n);if(r!==void 0)return r;const i=n.emits;let o={},a=!1;if(!de(n)){const c=u=>{const h=dE(u,e,!0);h&&(a=!0,bt(o,h))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!a?(Ve(n)&&s.set(n,null),null):(ae(i)?i.forEach(c=>o[c]=null):bt(o,i),Ve(n)&&s.set(n,o),o)}function Xl(n,e){return!n||!jl(e)?!1:(e=e.slice(2).replace(/Once$/,""),Pe(n,e[0].toLowerCase()+e.slice(1))||Pe(n,Us(e))||Pe(n,e))}function Kp(n){const{type:e,vnode:t,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:h,props:f,data:g,setupState:m,ctx:v,inheritAttrs:C}=n,S=al(n);let D,j;try{if(t.shapeFlag&4){const L=r||s,ne=L;D=Tn(u.call(ne,L,h,f,m,g,v)),j=a}else{const L=e;D=Tn(L.length>1?L(f,{attrs:a,slots:o,emit:c}):L(f,null)),j=e.props?a:aS(a)}}catch(L){Zi.length=0,Ql(L,n,1),D=Ze(Eo)}let x=D;if(j&&C!==!1){const L=Object.keys(j),{shapeFlag:ne}=x;L.length&&ne&7&&(i&&L.some(Bh)&&(j=lS(j,i)),x=Hr(x,j,!1,!0))}return t.dirs&&(x=Hr(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&ed(x,t.transition),D=x,al(S),D}const aS=n=>{let e;for(const t in n)(t==="class"||t==="style"||jl(t))&&((e||(e={}))[t]=n[t]);return e},lS=(n,e)=>{const t={};for(const s in n)(!Bh(s)||!(s.slice(9)in e))&&(t[s]=n[s]);return t};function cS(n,e,t){const{props:s,children:r,component:i}=n,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return s?Gp(s,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const g=h[f];if(o[g]!==s[g]&&!Xl(u,g))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Gp(s,o,u):!0:!!o;return!1}function Gp(n,e,t){const s=Object.keys(e);if(s.length!==Object.keys(n).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==n[i]&&!Xl(t,i))return!0}return!1}function uS({vnode:n,parent:e},t){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.el=n.el),s===n)(n=e.vnode).el=t,e=e.parent;else break}}const fE=n=>n.__isSuspense;function hS(n,e){e&&e.pendingBranch?ae(n)?e.effects.push(...n):e.effects.push(n):vb(n)}const on=Symbol.for("v-fgt"),Jl=Symbol.for("v-txt"),Eo=Symbol.for("v-cmt"),La=Symbol.for("v-stc"),Zi=[];let qt=null;function hn(n=!1){Zi.push(qt=n?null:[])}function dS(){Zi.pop(),qt=Zi[Zi.length-1]||null}let vo=1;function Qp(n,e=!1){vo+=n,n<0&&qt&&e&&(qt.hasOnce=!0)}function pE(n){return n.dynamicChildren=vo>0?qt||Vr:null,dS(),vo>0&&qt&&qt.push(n),n}function Nn(n,e,t,s,r,i){return pE(ze(n,e,t,s,r,i,!0))}function fS(n,e,t,s,r){return pE(Ze(n,e,t,s,r,!0))}function hl(n){return n?n.__v_isVNode===!0:!1}function Ni(n,e){return n.type===e.type&&n.key===e.key}const gE=({key:n})=>n??null,Fa=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Je(n)||rt(n)||de(n)?{i:Lt,r:n,k:e,f:!!t}:n:null);function ze(n,e=null,t=null,s=0,r=null,i=n===on?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&gE(e),ref:e&&Fa(e),scopeId:qy,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Lt};return a?(nd(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=Je(t)?8:16),vo>0&&!o&&qt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&qt.push(c),c}const Ze=pS;function pS(n,e=null,t=null,s=0,r=null,i=!1){if((!n||n===Mb)&&(n=Eo),hl(n)){const a=Hr(n,e,!0);return t&&nd(a,t),vo>0&&!i&&qt&&(a.shapeFlag&6?qt[qt.indexOf(n)]=a:qt.push(a)),a.patchFlag=-2,a}if(CS(n)&&(n=n.__vccOpts),e){e=gS(e);let{class:a,style:c}=e;a&&!Je(a)&&(e.class=zl(a)),Ve(c)&&(Xh(c)&&!ae(c)&&(c=bt({},c)),e.style=qh(c))}const o=Je(n)?1:fE(n)?128:Ib(n)?64:Ve(n)?4:de(n)?2:0;return ze(n,e,t,s,r,o,i,!0)}function gS(n){return n?Xh(n)||tE(n)?bt({},n):n:null}function Hr(n,e,t=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:c}=n,u=e?_S(r||{},e):r,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&gE(u),ref:e&&e.ref?t&&i?ae(i)?i.concat(Fa(e)):[i,Fa(e)]:Fa(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==on?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Hr(n.ssContent),ssFallback:n.ssFallback&&Hr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&s&&ed(h,c.clone(h)),h}function zr(n=" ",e=0){return Ze(Jl,null,n,e)}function mS(n,e){const t=Ze(La,null,n);return t.staticCount=e,t}function Tn(n){return n==null||typeof n=="boolean"?Ze(Eo):ae(n)?Ze(on,null,n.slice()):hl(n)?_s(n):Ze(Jl,null,String(n))}function _s(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Hr(n)}function nd(n,e){let t=0;const{shapeFlag:s}=n;if(e==null)e=null;else if(ae(e))t=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),nd(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!tE(e)?e._ctx=Lt:r===3&&Lt&&(Lt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:Lt},t=32):(e=String(e),s&64?(t=16,e=[zr(e)]):t=8);n.children=e,n.shapeFlag|=t}function _S(...n){const e={};for(let t=0;t<n.length;t++){const s=n[t];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=zl([e.class,s.class]));else if(r==="style")e.style=qh([e.style,s.style]);else if(jl(r)){const i=e[r],o=s[r];o&&i!==o&&!(ae(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function En(n,e,t,s=null){Ln(n,e,7,[t,s])}const yS=Jy();let ES=0;function vS(n,e,t){const s=n.type,r=(e?e.appContext:n.appContext)||yS,i={uid:ES++,vnode:n,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new yy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sE(s,r),emitsOptions:dE(s,r),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:s.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=oS.bind(null,i),n.ce&&n.ce(i),i}let ht=null;const mE=()=>ht||Lt;let dl,Uu;{const n=Hl(),e=(t,s)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};dl=e("__VUE_INSTANCE_SETTERS__",t=>ht=t),Uu=e("__VUE_SSR_SETTERS__",t=>To=t)}const $o=n=>{const e=ht;return dl(n),n.scope.on(),()=>{n.scope.off(),dl(e)}},Yp=()=>{ht&&ht.scope.off(),dl(null)};function _E(n){return n.vnode.shapeFlag&4}let To=!1;function TS(n,e=!1,t=!1){e&&Uu(e);const{props:s,children:r}=n.vnode,i=_E(n);zb(n,s,i,e),Yb(n,r,t);const o=i?IS(n,e):void 0;return e&&Uu(!1),o}function IS(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Fb);const{setup:s}=t;if(s){Bs();const r=n.setupContext=s.length>1?RS(n):null,i=$o(n),o=Bo(s,n,0,[n.props,r]),a=hy(o);if($s(),i(),(a||n.sp)&&!Yi(n)&&Hy(n),a){if(o.then(Yp,Yp),e)return o.then(c=>{Xp(n,c)}).catch(c=>{Ql(c,n,0)});n.asyncDep=o}else Xp(n,o)}else yE(n)}function Xp(n,e,t){de(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ve(e)&&(n.setupState=Fy(e)),yE(n)}function yE(n,e,t){const s=n.type;n.render||(n.render=s.render||Pn);{const r=$o(n);Bs();try{Ub(n)}finally{$s(),r()}}}const wS={get(n,e){return vt(n,"get",""),n[e]}};function RS(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,wS),slots:n.slots,emit:n.emit,expose:e}}function Zl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Fy(hb(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Xi)return Xi[t](n)},has(e,t){return t in e||t in Xi}})):n.proxy}function AS(n,e=!0){return de(n)?n.displayName||n.name:n.name||e&&n.__name}function CS(n){return de(n)&&"__vccOpts"in n}const jt=(n,e)=>gb(n,e,To);function EE(n,e,t){const s=arguments.length;return s===2?Ve(e)&&!ae(e)?hl(e)?Ze(n,null,[e]):Ze(n,e):Ze(n,null,e):(s>3?t=Array.prototype.slice.call(arguments,2):s===3&&hl(t)&&(t=[t]),Ze(n,e,t))}const bS="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bu;const Jp=typeof window<"u"&&window.trustedTypes;if(Jp)try{Bu=Jp.createPolicy("vue",{createHTML:n=>n})}catch{}const vE=Bu?n=>Bu.createHTML(n):n=>n,SS="http://www.w3.org/2000/svg",PS="http://www.w3.org/1998/Math/MathML",Kn=typeof document<"u"?document:null,Zp=Kn&&Kn.createElement("template"),kS={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,s)=>{const r=e==="svg"?Kn.createElementNS(SS,n):e==="mathml"?Kn.createElementNS(PS,n):t?Kn.createElement(n,{is:t}):Kn.createElement(n);return n==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:n=>Kn.createTextNode(n),createComment:n=>Kn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Kn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,s,r,i){const o=t?t.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===i||!(r=r.nextSibling)););else{Zp.innerHTML=vE(s==="svg"?`<svg>${n}</svg>`:s==="mathml"?`<math>${n}</math>`:n);const a=Zp.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},NS=Symbol("_vtc");function OS(n,e,t){const s=n[NS];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const eg=Symbol("_vod"),DS=Symbol("_vsh"),xS=Symbol(""),MS=/(^|;)\s*display\s*:/;function VS(n,e,t){const s=n.style,r=Je(t);let i=!1;if(t&&!r){if(e)if(Je(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Ua(s,a,"")}else for(const o in e)t[o]==null&&Ua(s,o,"");for(const o in t)o==="display"&&(i=!0),Ua(s,o,t[o])}else if(r){if(e!==t){const o=s[xS];o&&(t+=";"+o),s.cssText=t,i=MS.test(t)}}else e&&n.removeAttribute("style");eg in n&&(n[eg]=i?s.display:"",n[DS]&&(s.display="none"))}const tg=/\s*!important$/;function Ua(n,e,t){if(ae(t))t.forEach(s=>Ua(n,e,s));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const s=LS(n,e);tg.test(t)?n.setProperty(Us(s),t.replace(tg,""),"important"):n[s]=t}}const ng=["Webkit","Moz","ms"],tu={};function LS(n,e){const t=tu[e];if(t)return t;let s=tn(e);if(s!=="filter"&&s in n)return tu[e]=s;s=Wl(s);for(let r=0;r<ng.length;r++){const i=ng[r]+s;if(i in n)return tu[e]=i}return e}const sg="http://www.w3.org/1999/xlink";function rg(n,e,t,s,r,i=qC(e)){s&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(sg,e.slice(6,e.length)):n.setAttributeNS(sg,e,t):t==null||i&&!gy(t)?n.removeAttribute(e):n.setAttribute(e,i?"":Vn(t)?String(t):t)}function ig(n,e,t,s,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?vE(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(a!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=gy(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function Is(n,e,t,s){n.addEventListener(e,t,s)}function FS(n,e,t,s){n.removeEventListener(e,t,s)}const og=Symbol("_vei");function US(n,e,t,s,r=null){const i=n[og]||(n[og]={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=BS(e);if(s){const u=i[e]=qS(s,r);Is(n,a,u,c)}else o&&(FS(n,a,o,c),i[e]=void 0)}}const ag=/(?:Once|Passive|Capture)$/;function BS(n){let e;if(ag.test(n)){e={};let s;for(;s=n.match(ag);)n=n.slice(0,n.length-s[0].length),e[s[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Us(n.slice(2)),e]}let nu=0;const $S=Promise.resolve(),jS=()=>nu||($S.then(()=>nu=0),nu=Date.now());function qS(n,e){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;Ln(WS(s,t.value),e,5,[s])};return t.value=n,t.attached=jS(),t}function WS(n,e){if(ae(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const lg=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,HS=(n,e,t,s,r,i)=>{const o=r==="svg";e==="class"?OS(n,s,o):e==="style"?VS(n,t,s):jl(e)?Bh(e)||US(n,e,t,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):zS(n,e,s,o))?(ig(n,e,s),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&rg(n,e,s,o,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Je(s))?ig(n,tn(e),s,i,e):(e==="true-value"?n._trueValue=s:e==="false-value"&&(n._falseValue=s),rg(n,e,s,o))};function zS(n,e,t,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in n&&lg(e)&&de(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return lg(e)&&Je(t)?!1:e in n}const Kr=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ae(e)?t=>Ma(e,t):e};function KS(n){n.target.composing=!0}function cg(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const es=Symbol("_assign"),GS={created(n,{modifiers:{lazy:e,trim:t,number:s}},r){n[es]=Kr(r);const i=s||r.props&&r.props.type==="number";Is(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),i&&(a=sl(a)),n[es](a)}),t&&Is(n,"change",()=>{n.value=n.value.trim()}),e||(Is(n,"compositionstart",KS),Is(n,"compositionend",cg),Is(n,"change",cg))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:s,trim:r,number:i}},o){if(n[es]=Kr(o),n.composing)return;const a=(i||n.type==="number")&&!/^0\d/.test(n.value)?sl(n.value):n.value,c=e??"";a!==c&&(document.activeElement===n&&n.type!=="range"&&(s&&e===t||r&&n.value.trim()===c)||(n.value=c))}},QS={deep:!0,created(n,e,t){n[es]=Kr(t),Is(n,"change",()=>{const s=n._modelValue,r=Io(n),i=n.checked,o=n[es];if(ae(s)){const a=Wh(s,r),c=a!==-1;if(i&&!c)o(s.concat(r));else if(!i&&c){const u=[...s];u.splice(a,1),o(u)}}else if(li(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(TE(n,i))})},mounted:ug,beforeUpdate(n,e,t){n[es]=Kr(t),ug(n,e,t)}};function ug(n,{value:e,oldValue:t},s){n._modelValue=e;let r;if(ae(e))r=Wh(e,s.props.value)>-1;else if(li(e))r=e.has(s.props.value);else{if(e===t)return;r=Uo(e,TE(n,!0))}n.checked!==r&&(n.checked=r)}const YS={deep:!0,created(n,{value:e,modifiers:{number:t}},s){const r=li(e);Is(n,"change",()=>{const i=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?sl(Io(o)):Io(o));n[es](n.multiple?r?new Set(i):i:i[0]),n._assigning=!0,Jh(()=>{n._assigning=!1})}),n[es]=Kr(s)},mounted(n,{value:e}){hg(n,e)},beforeUpdate(n,e,t){n[es]=Kr(t)},updated(n,{value:e}){n._assigning||hg(n,e)}};function hg(n,e){const t=n.multiple,s=ae(e);if(!(t&&!s&&!li(e))){for(let r=0,i=n.options.length;r<i;r++){const o=n.options[r],a=Io(o);if(t)if(s){const c=typeof a;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=Wh(e,a)>-1}else o.selected=e.has(a);else if(Uo(Io(o),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Io(n){return"_value"in n?n._value:n.value}function TE(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const XS={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},JS=(n,e)=>{const t=n._withKeys||(n._withKeys={}),s=e.join(".");return t[s]||(t[s]=r=>{if(!("key"in r))return;const i=Us(r.key);if(e.some(o=>o===i||XS[o]===i))return n(r)})},ZS=bt({patchProp:HS},kS);let dg;function eP(){return dg||(dg=Jb(ZS))}const tP=(...n)=>{const e=eP().createApp(...n),{mount:t}=e;return e.mount=s=>{const r=sP(s);if(!r)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,nP(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function nP(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function sP(n){return Je(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rP=new Map,iP={activated:!1,tokenObservers:[]};function gn(n){return rP.get(n)||Object.assign({},iP)}const fg={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e,t,s,r,i){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=s,this.lowerBound=r,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=r,r>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new uo,this.pending.promise.catch(t=>{}),await aP(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new uo,this.pending.promise.catch(t=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function aP(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lP={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},fl=new oi("appCheck","AppCheck",lP);function IE(n){if(!gn(n).activated)throw fl.create("use-before-activation",{appName:n.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP="firebase-app-check-database",uP=1,$u="firebase-app-check-store";let va=null;function hP(){return va||(va=new Promise((n,e)=>{try{const t=indexedDB.open(cP,uP);t.onsuccess=s=>{n(s.target.result)},t.onerror=s=>{var r;e(fl.create("storage-open",{originalErrorMessage:(r=s.target.error)===null||r===void 0?void 0:r.message}))},t.onupgradeneeded=s=>{const r=s.target.result;switch(s.oldVersion){case 0:r.createObjectStore($u,{keyPath:"compositeKey"})}}}catch(t){e(fl.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}}),va)}function dP(n,e){return fP(pP(n),e)}async function fP(n,e){const s=(await hP()).transaction($u,"readwrite"),i=s.objectStore($u).put({compositeKey:n,value:e});return new Promise((o,a)=>{i.onsuccess=c=>{o()},s.onerror=c=>{var u;a(fl.create("storage-set",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}function pP(n){return`${n.options.appId}-${n.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=new Do("@firebase/app-check");function pg(n,e){return v_()?dP(n,e).catch(t=>{ju.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gP={error:"UNKNOWN_ERROR"};function mP(n){return Vl.encodeString(JSON.stringify(n),!1)}async function qu(n,e=!1){const t=n.app;IE(t);const s=gn(t);let r=s.token,i;if(r&&!Ui(r)&&(s.token=void 0,r=void 0),!r){const c=await s.cachedTokenPromise;c&&(Ui(c)?r=c:await pg(t,void 0))}if(!e&&r&&Ui(r))return{token:r.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),r=await gn(t).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?ju.warn(c.message):ju.error(c),i=c}let a;return r?i?Ui(r)?a={token:r.token,internalError:i}:a=mg(i):(a={token:r.token},s.token=r,await pg(t,r)):a=mg(i),o&&vP(t,a),a}async function _P(n){const e=n.app;IE(e);const{provider:t}=gn(e);{const{token:s}=await t.getToken();return{token:s}}}function yP(n,e,t,s){const{app:r}=n,i=gn(r),o={next:t,error:s,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&Ui(i.token)){const a=i.token;Promise.resolve().then(()=>{t({token:a.token}),gg(n)}).catch(()=>{})}i.cachedTokenPromise.then(()=>gg(n))}function wE(n,e){const t=gn(n),s=t.tokenObservers.filter(r=>r.next!==e);s.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=s}function gg(n){const{app:e}=n,t=gn(e);let s=t.tokenRefresher;s||(s=EP(n),t.tokenRefresher=s),!s.isRunning()&&t.isTokenAutoRefreshEnabled&&s.start()}function EP(n){const{app:e}=n;return new oP(async()=>{const t=gn(e);let s;if(t.token?s=await qu(n,!0):s=await qu(n),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const t=gn(e);if(t.token){let s=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const r=t.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,r),Math.max(0,s-Date.now())}else return 0},fg.RETRIAL_MIN_WAIT,fg.RETRIAL_MAX_WAIT)}function vP(n,e){const t=gn(n).tokenObservers;for(const s of t)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function Ui(n){return n.expireTimeMillis-Date.now()>0}function mg(n){return{token:mP(gP),error:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=gn(this.app);for(const t of e)wE(this.app,t.next);return Promise.resolve()}}function IP(n,e){return new TP(n,e)}function wP(n){return{getToken:e=>qu(n,e),getLimitedUseToken:()=>_P(n),addTokenListener:e=>yP(n,"INTERNAL",e),removeTokenListener:e=>wE(n.app,e)}}const RP="@firebase/app-check",AP="0.8.10",CP="app-check",_g="app-check-internal";function bP(){xn(new pn(CP,n=>{const e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return IP(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(_g).initialize()})),xn(new pn(_g,n=>{const e=n.getProvider("app-check").getImmediate();return wP(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Ht(RP,AP)}bP();var SP="firebase",PP="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ht(SP,PP,"app");const RE=Symbol("firebaseApp");function jo(n){return mE()&&zt(RE,null)||Sh(n)}const Rn=()=>{},kP=typeof window<"u";function sd(n,e){return e.split(".").reduce((t,s)=>t&&t[s],n)}function NP(n,e,t){const s=(""+e).split("."),r=s.pop(),i=s.reduce((o,a)=>o&&o[a],n);if(i!=null)return Array.isArray(i)?i.splice(Number(r),1,t):i[r]=t}function pr(n){return!!n&&typeof n=="object"}const OP=Object.prototype;function DP(n){return pr(n)&&Object.getPrototypeOf(n)===OP}function rd(n){return pr(n)&&n.type==="document"}function xP(n){return pr(n)&&n.type==="collection"}function MP(n){return rd(n)||xP(n)}function VP(n){return pr(n)&&n.type==="query"}function LP(n){return pr(n)&&"ref"in n}function FP(n){return pr(n)&&typeof n.bucket=="string"}function UP(n,e){let t;return()=>{if(!t)return t=!0,n(e())}}const BP=Symbol.for("v-scx");function $P(){return!!zt(BP,0)}const Ta=new WeakMap;function jP(n,e){if(!Ta.has(n)){const t=HC(!0);Ta.set(n,t);const{unmount:s}=e;e.unmount=()=>{s.call(e),t.stop(),Ta.delete(n)}}return Ta.get(n)}const AE=new WeakMap;function CE(n){return AE.get(jo(n))}const Ia=new WeakMap;function bE(n){const e=jo(n);if(!Ia.has(e)){let t;const r=[new Promise(i=>{t=i}),i=>{Ia.set(e,i),t(i.value)}];Ia.set(e,r)}return Ia.get(e)}function qP(n){const e=bE(n);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function WP(n,e){X_(e,t=>{const s=bE();n.value=t,Array.isArray(s)&&s[1](n)})}var yg={};const Eg="@firebase/database",vg="1.0.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let SE="";function HP(n){SE=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ut(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:ho(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return as(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new zP(e)}}catch{}return new KP},er=PE("localStorage"),GP=PE("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=new Do("@firebase/database"),QP=function(){let n=1;return function(){return n++}}(),kE=function(n){const e=Iw(n),t=new _w;t.update(e);const s=t.digest();return Vl.encodeByteArray(s)},qo=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=qo.apply(null,s):typeof s=="object"?e+=ut(s):e+=s,e+=" "}return e};let eo=null,Tg=!0;const YP=function(n,e){G(!0,"Can't turn on custom loggers persistently."),$r.logLevel=ge.VERBOSE,eo=$r.log.bind($r)},It=function(...n){if(Tg===!0&&(Tg=!1,eo===null&&GP.get("logging_enabled")===!0&&YP()),eo){const e=qo.apply(null,n);eo(e)}},Wo=function(n){return function(...e){It(n,...e)}},Wu=function(...n){const e="FIREBASE INTERNAL ERROR: "+qo(...n);$r.error(e)},ar=function(...n){const e=`FIREBASE FATAL ERROR: ${qo(...n)}`;throw $r.error(e),new Error(e)},Kt=function(...n){const e="FIREBASE WARNING: "+qo(...n);$r.warn(e)},XP=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Kt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},NE=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},JP=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Gr="[MIN_NAME]",lr="[MAX_NAME]",ci=function(n,e){if(n===e)return 0;if(n===Gr||e===lr)return-1;if(e===Gr||n===lr)return 1;{const t=Ig(n),s=Ig(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},ZP=function(n,e){return n===e?0:n<e?-1:1},Oi=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+ut(e))},id=function(n){if(typeof n!="object"||n===null)return ut(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=ut(e[s]),t+=":",t+=id(n[e[s]]);return t+="}",t},OE=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let r=0;r<t;r+=e)r+e>t?s.push(n.substring(r,t)):s.push(n.substring(r,r+e));return s};function nn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const DE=function(n){G(!NE(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let r,i,o,a,c;n===0?(i=0,o=0,r=1/n===-1/0?1:0):(r=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),i=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(i=0,o=Math.round(n/Math.pow(2,1-s-t))));const u=[];for(c=t;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(r?1:0),u.reverse();const h=u.join("");let f="";for(c=0;c<64;c+=8){let g=parseInt(h.substr(c,8),2).toString(16);g.length===1&&(g="0"+g),f=f+g}return f.toLowerCase()},ek=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},tk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},nk=new RegExp("^-?(0*)\\d{1,10}$"),sk=-2147483648,rk=2147483647,Ig=function(n){if(nk.test(n)){const e=Number(n);if(e>=sk&&e<=rk)return e}return null},Ho=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Kt("Exception was thrown by user callback.",t),e},Math.floor(0))}},ik=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},to=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Kt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(It("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Kt(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od="5",xE="v",ME="s",VE="r",LE="f",FE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,UE="ls",BE="p",Hu="ac",$E="websocket",jE="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(e,t,s,r,i=!1,o="",a=!1,c=!1){this.secure=t,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=er.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&er.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function ck(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function qE(n,e,t){G(typeof e=="string","typeof type must == string"),G(typeof t=="object","typeof params must == object");let s;if(e===$E)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===jE)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ck(n)&&(t.ns=n.namespace);const r=[];return nn(t,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(){this.counters_={}}incrementCounter(e,t=1){as(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return XI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su={},ru={};function ad(n){const e=n.toString();return su[e]||(su[e]=new uk),su[e]}function hk(n,e){const t=n.toString();return ru[t]||(ru[t]=e()),ru[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&Ho(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg="start",fk="close",pk="pLPCommand",gk="pRTLPCB",WE="id",HE="pw",zE="ser",mk="cb",_k="seg",yk="ts",Ek="d",vk="dframe",KE=1870,GE=30,Tk=KE-GE,Ik=25e3,wk=3e4;class Nr{constructor(e,t,s,r,i,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Wo(e),this.stats_=ad(t),this.urlFn=c=>(this.appCheckToken&&(c[Hu]=this.appCheckToken),qE(t,jE,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new dk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(wk)),JP(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ld((...i)=>{const[o,a,c,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===wg)this.id=a,this.password=c;else if(o===fk)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[wg]="t",s[zE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[mk]=this.scriptTagHolder.uniqueCallbackIdentifier),s[xE]=od,this.transportSessionId&&(s[ME]=this.transportSessionId),this.lastSessionId&&(s[UE]=this.lastSessionId),this.applicationId&&(s[BE]=this.applicationId),this.appCheckToken&&(s[Hu]=this.appCheckToken),typeof location<"u"&&location.hostname&&FE.test(location.hostname)&&(s[VE]=LE);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Nr.forceAllow_=!0}static forceDisallow(){Nr.forceDisallow_=!0}static isAvailable(){return Nr.forceAllow_?!0:!Nr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ek()&&!tk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ut(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=p_(t),r=OE(s,Tk);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[vk]="t",s[WE]=e,s[HE]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ut(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class ld{constructor(e,t,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=QP(),window[pk+this.uniqueCallbackIdentifier]=e,window[gk+this.uniqueCallbackIdentifier]=t,this.myIFrame=ld.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){It("frame writing exception"),a.stack&&It(a.stack),It(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||It("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[WE]=this.myID,e[HE]=this.myPW,e[zE]=this.currentSerial;let t=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+GE+s.length<=KE;){const o=this.pendingSegs.shift();s=s+"&"+_k+r+"="+o.seg+"&"+yk+r+"="+o.ts+"&"+Ek+r+"="+o.d,r++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(s,Math.floor(Ik)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{It("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=16384,Ak=45e3;let pl=null;typeof MozWebSocket<"u"?pl=MozWebSocket:typeof WebSocket<"u"&&(pl=WebSocket);class An{constructor(e,t,s,r,i,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Wo(this.connId),this.stats_=ad(t),this.connURL=An.connectionURL_(t,o,a,r,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,r,i){const o={};return o[xE]=od,typeof location<"u"&&location.hostname&&FE.test(location.hostname)&&(o[VE]=LE),t&&(o[ME]=t),s&&(o[UE]=s),r&&(o[Hu]=r),i&&(o[BE]=i),qE(e,$E,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,er.set("previous_websocket_failure",!0);try{let s;cw(),this.mySock=new pl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){An.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&pl!==null&&!An.forceDisallow_}static previouslyFailed(){return er.isInMemoryStorage||er.get("previous_websocket_failure")===!0}markConnectionHealthy(){er.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=ho(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(G(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=ut(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=OE(t,Rk);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ak))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}An.responsesRequiredToBeHealthy=2;An.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{static get ALL_TRANSPORTS(){return[Nr,An]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=An.isAvailable();let s=t&&!An.previouslyFailed();if(e.webSocketOnly&&(t||Kt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[An];else{const r=this.transports_=[];for(const i of wo.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);wo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}wo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck=6e4,bk=5e3,Sk=10*1024,Pk=100*1024,iu="t",Rg="d",kk="s",Ag="r",Nk="e",Cg="o",bg="a",Sg="n",Pg="p",Ok="h";class Dk{constructor(e,t,s,r,i,o,a,c,u,h){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Wo("c:"+this.id+":"),this.transportManager_=new wo(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=to(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Pk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Sk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(iu in e){const t=e[iu];t===bg?this.upgradeIfSecondaryHealthy_():t===Ag?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Cg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Oi("t",e),s=Oi("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Pg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:bg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Sg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Oi("t",e),s=Oi("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Oi(iu,e);if(Rg in e){const s=e[Rg];if(t===Ok){const r=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(t===Sg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===kk?this.onConnectionShutdown_(s):t===Ag?this.onReset_(s):t===Nk?Wu("Server Error: "+s):t===Cg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Wu("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),od!==s&&Kt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),to(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ck))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):to(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(bk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Pg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(er.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{put(e,t,s,r){}merge(e,t,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e){this.allowedEvents_=e,this.listeners_={},G(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const r=this.getInitialEvent(e);r&&t.apply(s,r)}off(e,t,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){G(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl extends YE{static getInstance(){return new gl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ah()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return G(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg=32,Ng=768;class $e{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Oe(){return new $e("")}function we(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ns(n){return n.pieces_.length-n.pieceNum_}function Ue(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new $e(n.pieces_,e)}function XE(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function xk(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function JE(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function ZE(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new $e(e,0)}function st(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof $e)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&t.push(s[r])}return new $e(t,0)}function Ee(n){return n.pieceNum_>=n.pieces_.length}function Jt(n,e){const t=we(n),s=we(e);if(t===null)return e;if(t===s)return Jt(Ue(n),Ue(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function ev(n,e){if(Ns(n)!==Ns(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function an(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Ns(n)>Ns(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Mk{constructor(e,t){this.errorPrefix_=t,this.parts_=JE(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Fl(this.parts_[s]);tv(this)}}function Vk(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Fl(e),tv(n)}function Lk(n){const e=n.parts_.pop();n.byteLength_-=Fl(e),n.parts_.length>0&&(n.byteLength_-=1)}function tv(n){if(n.byteLength_>Ng)throw new Error(n.errorPrefix_+"has a key path longer than "+Ng+" bytes ("+n.byteLength_+").");if(n.parts_.length>kg)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+kg+") or object contains a cycle "+Js(n))}function Js(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd extends YE{static getInstance(){return new cd}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return G(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=1e3,Fk=60*5*1e3,Og=30*1e3,Uk=1.3,Bk=3e4,$k="server_kill",Dg=3;class ts extends QE{constructor(e,t,s,r,i,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=ts.nextPersistentConnectionId_++,this.log_=Wo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Di,this.maxReconnectDelay_=Fk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");cd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&gl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const r=++this.requestNumber_,i={r,a:e,b:t};this.log_(ut(i)),G(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const t=new uo,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),G(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),G(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:s};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const c=a.d,u=a.s;ts.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&as(e,"w")){const s=Wr(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();Kt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||mw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Og)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=gw(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),G(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,t)}sendUnlisten_(e,t,s,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,r){const i={p:t,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,t,s,r){this.putInternal("p",e,t,s,r)}merge(e,t,s,r){this.putInternal("m",e,t,s,r)}putInternal(e,t,s,r,i){this.initConnection_();const o={p:t,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ut(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Wu("Unrecognized action received from server: "+ut(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){G(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Di,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Di,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Bk&&(this.reconnectDelay_=Di),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Uk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+ts.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},u=function(f){G(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:c,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,g]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?It("getToken() completed but was canceled"):(It("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=g&&g.token,a=new Dk(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,m=>{Kt(m+" ("+this.repoInfo_.toString()+")"),this.interrupt($k)},i))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Kt(f),c())}}}interrupt(e){It("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){It("Resuming connection for reason: "+e),delete this.interruptReasons_[e],vu(this.interruptReasons_)&&(this.reconnectDelay_=Di,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(i=>id(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const s=new $e(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(t),i.delete(t),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,t){It("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Dg&&(this.reconnectDelay_=Og,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){It("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Dg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+SE.replace(/\./g,"-")]=1,Ah()?e["framework.cordova"]=1:E_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=gl.getInstance().currentlyOnline();return vu(this.interruptReasons_)&&e}}ts.nextPersistentConnectionId_=0;ts.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Re(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new Re(Gr,e),r=new Re(Gr,t);return this.compare(s,r)!==0}minPost(){return Re.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wa;class nv extends ec{static get __EMPTY_NODE(){return wa}static set __EMPTY_NODE(e){wa=e}compare(e,t){return ci(e.name,t.name)}isDefinedOn(e){throw ii("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Re.MIN}maxPost(){return new Re(lr,wa)}makePost(e,t){return G(typeof e=="string","KeyIndex indexValue must always be a string."),new Re(e,wa)}toString(){return".key"}}const jr=new nv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ra=class{constructor(e,t,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},$t=class Bi{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??Bi.RED,this.left=r??Cn.EMPTY_NODE,this.right=i??Cn.EMPTY_NODE}copy(e,t,s,r,i){return new Bi(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r=r.copy(null,t,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Cn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,r;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Cn.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Bi.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Bi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};$t.RED=!0;$t.BLACK=!1;class jk{copy(e,t,s,r,i){return this}insert(e,t,s){return new $t(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Cn=class Ba{constructor(e,t=Ba.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ba(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,$t.BLACK,null,null))}remove(e){return new Ba(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,$t.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,r=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ra(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ra(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ra(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ra(this.root_,null,this.comparator_,!0,e)}};Cn.EMPTY_NODE=new jk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(n,e){return ci(n.name,e.name)}function ud(n,e){return ci(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zu;function Wk(n){zu=n}const sv=function(n){return typeof n=="number"?"number:"+DE(n):"string:"+n},rv=function(n){if(n.isLeafNode()){const e=n.val();G(typeof e=="string"||typeof e=="number"||typeof e=="object"&&as(e,".sv"),"Priority must be a string or number.")}else G(n===zu||n.isEmpty(),"priority of unexpected type.");G(n===zu||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xg;class tt{static set __childrenNodeConstructor(e){xg=e}static get __childrenNodeConstructor(){return xg}constructor(e,t=tt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,G(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),rv(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new tt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ee(e)?this:we(e)===".priority"?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:tt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=we(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(G(s!==".priority"||Ns(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,tt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ue(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+sv(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=DE(this.value_):e+=this.value_,this.lazyHash_=kE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===tt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof tt.__childrenNodeConstructor?-1:(G(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,r=tt.VALUE_TYPE_ORDER.indexOf(t),i=tt.VALUE_TYPE_ORDER.indexOf(s);return G(r>=0,"Unknown leaf type: "+t),G(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}tt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iv,ov;function Hk(n){iv=n}function zk(n){ov=n}class Kk extends ec{compare(e,t){const s=e.node.getPriority(),r=t.node.getPriority(),i=s.compareTo(r);return i===0?ci(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Re.MIN}maxPost(){return new Re(lr,new tt("[PRIORITY-POST]",ov))}makePost(e,t){const s=iv(e);return new Re(t,new tt("[PRIORITY-POST]",s))}toString(){return".priority"}}const At=new Kk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk=Math.log(2);class Qk{constructor(e){const t=i=>parseInt(Math.log(i)/Gk,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ml=function(n,e,t,s){n.sort(e);const r=function(c,u){const h=u-c;let f,g;if(h===0)return null;if(h===1)return f=n[c],g=t?t(f):f,new $t(g,f.node,$t.BLACK,null,null);{const m=parseInt(h/2,10)+c,v=r(c,m),C=r(m+1,u);return f=n[m],g=t?t(f):f,new $t(g,f.node,$t.BLACK,v,C)}},i=function(c){let u=null,h=null,f=n.length;const g=function(v,C){const S=f-v,D=f;f-=v;const j=r(S+1,D),x=n[S],L=t?t(x):x;m(new $t(L,x.node,C,null,j))},m=function(v){u?(u.left=v,u=v):(h=v,u=v)};for(let v=0;v<c.count;++v){const C=c.nextBitIsOne(),S=Math.pow(2,c.count-(v+1));C?g(S,$t.BLACK):(g(S,$t.BLACK),g(S,$t.RED))}return h},o=new Qk(n.length),a=i(o);return new Cn(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ou;const xi={};class Zn{static get Default(){return G(At,"ChildrenNode.ts has not been loaded"),ou=ou||new Zn({".priority":xi},{".priority":At}),ou}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Wr(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Cn?t:null}hasIndex(e){return as(this.indexSet_,e.toString())}addIndex(e,t){G(e!==jr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=t.getIterator(Re.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let a;r?a=ml(s,e.getCompare()):a=xi;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const h=Object.assign({},this.indexes_);return h[c]=a,new Zn(h,u)}addToIndexes(e,t){const s=Qa(this.indexes_,(r,i)=>{const o=Wr(this.indexSet_,i);if(G(o,"Missing index implementation for "+i),r===xi)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(Re.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&a.push(u),u=c.getNext();return a.push(e),ml(a,o.getCompare())}else return xi;else{const a=t.get(e.name);let c=r;return a&&(c=c.remove(new Re(e.name,a))),c.insert(e,e.node)}});return new Zn(s,this.indexSet_)}removeFromIndexes(e,t){const s=Qa(this.indexes_,r=>{if(r===xi)return r;{const i=t.get(e.name);return i?r.remove(new Re(e.name,i)):r}});return new Zn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mi;class ke{static get EMPTY_NODE(){return Mi||(Mi=new ke(new Cn(ud),null,Zn.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&rv(this.priorityNode_),this.children_.isEmpty()&&G(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Mi}updatePriority(e){return this.children_.isEmpty()?this:new ke(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Mi:t}}getChild(e){const t=we(e);return t===null?this:this.getImmediateChild(t).getChild(Ue(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(G(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new Re(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?Mi:this.priorityNode_;return new ke(r,o,i)}}updateChild(e,t){const s=we(e);if(s===null)return t;{G(we(e)!==".priority"||Ns(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(Ue(e),t);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,r=0,i=!0;if(this.forEachChild(At,(o,a)=>{t[o]=a.val(e),s++,i&&ke.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+sv(this.getPriority().val())+":"),this.forEachChild(At,(t,s)=>{const r=s.hash();r!==""&&(e+=":"+t+":"+r)}),this.lazyHash_=e===""?"":kE(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new Re(e,t));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Re(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Re(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>t(r.name,r.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,Re.Wrap);let i=r.peek();for(;i!=null&&t.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,Re.Wrap);let i=r.peek();for(;i!=null&&t.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===zo?-1:0}withIndex(e){if(e===jr||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ke(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===jr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(At),r=t.getIterator(At);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===jr?null:this.indexMap_.get(e.toString())}}ke.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Yk extends ke{constructor(){super(new Cn(ud),ke.EMPTY_NODE,Zn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ke.EMPTY_NODE}isEmpty(){return!1}}const zo=new Yk;Object.defineProperties(Re,{MIN:{value:new Re(Gr,ke.EMPTY_NODE)},MAX:{value:new Re(lr,zo)}});nv.__EMPTY_NODE=ke.EMPTY_NODE;tt.__childrenNodeConstructor=ke;Wk(zo);zk(zo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk=!0;function wt(n,e=null){if(n===null)return ke.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),G(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new tt(t,wt(e))}if(!(n instanceof Array)&&Xk){const t=[];let s=!1;if(nn(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=wt(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new Re(o,c)))}}),t.length===0)return ke.EMPTY_NODE;const i=ml(t,qk,o=>o.name,ud);if(s){const o=ml(t,At.getCompare());return new ke(i,wt(e),new Zn({".priority":o},{".priority":At}))}else return new ke(i,wt(e),Zn.Default)}else{let t=ke.EMPTY_NODE;return nn(n,(s,r)=>{if(as(n,s)&&s.substring(0,1)!=="."){const i=wt(r);(i.isLeafNode()||!i.isEmpty())&&(t=t.updateImmediateChild(s,i))}}),t.updatePriority(wt(e))}}Hk(wt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk extends ec{constructor(e){super(),this.indexPath_=e,G(!Ee(e)&&we(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),r=this.extractChild(t.node),i=s.compareTo(r);return i===0?ci(e.name,t.name):i}makePost(e,t){const s=wt(e),r=ke.EMPTY_NODE.updateChild(this.indexPath_,s);return new Re(t,r)}maxPost(){const e=ke.EMPTY_NODE.updateChild(this.indexPath_,zo);return new Re(lr,e)}toString(){return JE(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk extends ec{compare(e,t){const s=e.node.compareTo(t.node);return s===0?ci(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Re.MIN}maxPost(){return Re.MAX}makePost(e,t){const s=wt(e);return new Re(t,s)}toString(){return".value"}}const e0=new Zk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(n){return{type:"value",snapshotNode:n}}function n0(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function s0(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Mg(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function r0(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=At}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return G(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return G(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Gr}hasEnd(){return this.endSet_}getIndexEndValue(){return G(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return G(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:lr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return G(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===At}copy(){const e=new hd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Vg(n){const e={};if(n.isDefault())return e;let t;if(n.index_===At?t="$priority":n.index_===e0?t="$value":n.index_===jr?t="$key":(G(n.index_ instanceof Jk,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=ut(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=ut(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+ut(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=ut(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+ut(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Lg(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==At&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l extends QE{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(G(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=Wo("p:rest:"),this.listens_={}}listen(e,t,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=_l.getListenId_(e,s),a={};this.listens_[o]=a;const c=Vg(e._queryParams);this.restRequest_(i+".json",c,(u,h)=>{let f=h;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(i,f,!1,s),Wr(this.listens_,o)===a){let g;u?u===401?g="permission_denied":g="rest_error:"+u:g="ok",r(g,null)}})}unlisten(e,t){const s=_l.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Vg(e._queryParams),s=e._path.toString(),r=new uo;return this.restRequest_(s+".json",t,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(s,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ai(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=ho(a.responseText)}catch{Kt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&Kt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(){this.rootNode_=ke.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(){return{value:null,children:new Map}}function av(n,e,t){if(Ee(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=we(e);n.children.has(s)||n.children.set(s,yl());const r=n.children.get(s);e=Ue(e),av(r,e,t)}}function Ku(n,e,t){n.value!==null?t(e,n.value):o0(n,(s,r)=>{const i=new $e(e.toString()+"/"+s);Ku(r,i,t)})}function o0(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&nn(this.last_,(s,r)=>{t[s]=t[s]-r}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=10*1e3,l0=30*1e3,c0=5*60*1e3;class u0{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new a0(e);const s=Fg+(l0-Fg)*Math.random();to(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;nn(e,(r,i)=>{i>0&&as(this.statsToReport_,r)&&(t[r]=i,s=!0)}),s&&this.server_.reportStats(t),to(this.reportStats_.bind(this),Math.floor(Math.random()*2*c0))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bn;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(bn||(bn={}));function lv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function cv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function uv(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=bn.ACK_USER_WRITE,this.source=lv()}operationForChild(e){if(Ee(this.path)){if(this.affectedTree.value!=null)return G(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new $e(e));return new El(Oe(),t,this.revert)}}else return G(we(this.path)===e,"operationForChild called for unrelated child."),new El(Ue(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=bn.OVERWRITE}operationForChild(e){return Ee(this.path)?new cr(this.source,Oe(),this.snap.getImmediateChild(e)):new cr(this.source,Ue(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=bn.MERGE}operationForChild(e){if(Ee(this.path)){const t=this.children.subtree(new $e(e));return t.isEmpty()?null:t.value?new cr(this.source,Oe(),t.value):new Ro(this.source,Oe(),t)}else return G(we(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ro(this.source,Ue(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ee(e))return this.isFullyInitialized()&&!this.filtered_;const t=we(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function h0(n,e,t,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(r0(o.childName,o.snapshotNode))}),Vi(n,r,"child_removed",e,s,t),Vi(n,r,"child_added",e,s,t),Vi(n,r,"child_moved",i,s,t),Vi(n,r,"child_changed",e,s,t),Vi(n,r,"value",e,s,t),r}function Vi(n,e,t,s,r,i){const o=s.filter(a=>a.type===t);o.sort((a,c)=>f0(n,a,c)),o.forEach(a=>{const c=d0(n,a,i);r.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(c,n.query_))})})}function d0(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function f0(n,e,t){if(e.childName==null||t.childName==null)throw ii("Should only compare child_ events.");const s=new Re(e.childName,e.snapshotNode),r=new Re(t.childName,t.snapshotNode);return n.index_.compare(s,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(n,e){return{eventCache:n,serverCache:e}}function no(n,e,t,s){return hv(new dd(e,t,s),n.serverCache)}function dv(n,e,t,s){return hv(n.eventCache,new dd(e,t,s))}function Gu(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function ur(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let au;const p0=()=>(au||(au=new Cn(ZP)),au);class Fe{static fromObject(e){let t=new Fe(null);return nn(e,(s,r)=>{t=t.set(new $e(s),r)}),t}constructor(e,t=p0()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Oe(),value:this.value};if(Ee(e))return null;{const s=we(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(Ue(e),t);return i!=null?{path:st(new $e(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ee(e))return this;{const t=we(e),s=this.children.get(t);return s!==null?s.subtree(Ue(e)):new Fe(null)}}set(e,t){if(Ee(e))return new Fe(t,this.children);{const s=we(e),i=(this.children.get(s)||new Fe(null)).set(Ue(e),t),o=this.children.insert(s,i);return new Fe(this.value,o)}}remove(e){if(Ee(e))return this.children.isEmpty()?new Fe(null):new Fe(null,this.children);{const t=we(e),s=this.children.get(t);if(s){const r=s.remove(Ue(e));let i;return r.isEmpty()?i=this.children.remove(t):i=this.children.insert(t,r),this.value===null&&i.isEmpty()?new Fe(null):new Fe(this.value,i)}else return this}}get(e){if(Ee(e))return this.value;{const t=we(e),s=this.children.get(t);return s?s.get(Ue(e)):null}}setTree(e,t){if(Ee(e))return t;{const s=we(e),i=(this.children.get(s)||new Fe(null)).setTree(Ue(e),t);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new Fe(this.value,o)}}fold(e){return this.fold_(Oe(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(st(e,r),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,Oe(),t)}findOnPath_(e,t,s){const r=this.value?s(t,this.value):!1;if(r)return r;if(Ee(e))return null;{const i=we(e),o=this.children.get(i);return o?o.findOnPath_(Ue(e),st(t,i),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Oe(),t)}foreachOnPath_(e,t,s){if(Ee(e))return this;{this.value&&s(t,this.value);const r=we(e),i=this.children.get(r);return i?i.foreachOnPath_(Ue(e),st(t,r),s):new Fe(null)}}foreach(e){this.foreach_(Oe(),e)}foreach_(e,t){this.children.inorderTraversal((s,r)=>{r.foreach_(st(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.writeTree_=e}static empty(){return new dn(new Fe(null))}}function so(n,e,t){if(Ee(e))return new dn(new Fe(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=Jt(r,e);return i=i.updateChild(o,t),new dn(n.writeTree_.set(r,i))}else{const r=new Fe(t),i=n.writeTree_.setTree(e,r);return new dn(i)}}}function Ug(n,e,t){let s=n;return nn(t,(r,i)=>{s=so(s,st(e,r),i)}),s}function Bg(n,e){if(Ee(e))return dn.empty();{const t=n.writeTree_.setTree(e,new Fe(null));return new dn(t)}}function Qu(n,e){return gr(n,e)!=null}function gr(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Jt(t.path,e)):null}function $g(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(At,(s,r)=>{e.push(new Re(s,r))}):n.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new Re(s,r.value))}),e}function Ps(n,e){if(Ee(e))return n;{const t=gr(n,e);return t!=null?new dn(new Fe(t)):new dn(n.writeTree_.subtree(e))}}function Yu(n){return n.writeTree_.isEmpty()}function Qr(n,e){return fv(Oe(),n.writeTree_,e)}function fv(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(G(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):t=fv(st(n,r),i,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(st(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(n,e){return Ev(e,n)}function g0(n,e,t,s,r){G(s>n.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:r}),r&&(n.visibleWrites=so(n.visibleWrites,e,t)),n.lastWriteId=s}function m0(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function _0(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);G(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let r=s.visible,i=!1,o=n.allWrites.length-1;for(;r&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&y0(a,s.path)?r=!1:an(s.path,a.path)&&(i=!0)),o--}if(r){if(i)return E0(n),!0;if(s.snap)n.visibleWrites=Bg(n.visibleWrites,s.path);else{const a=s.children;nn(a,c=>{n.visibleWrites=Bg(n.visibleWrites,st(s.path,c))})}return!0}else return!1}function y0(n,e){if(n.snap)return an(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&an(st(n.path,t),e))return!0;return!1}function E0(n){n.visibleWrites=gv(n.allWrites,v0,Oe()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function v0(n){return n.visible}function gv(n,e,t){let s=dn.empty();for(let r=0;r<n.length;++r){const i=n[r];if(e(i)){const o=i.path;let a;if(i.snap)an(t,o)?(a=Jt(t,o),s=so(s,a,i.snap)):an(o,t)&&(a=Jt(o,t),s=so(s,Oe(),i.snap.getChild(a)));else if(i.children){if(an(t,o))a=Jt(t,o),s=Ug(s,a,i.children);else if(an(o,t))if(a=Jt(o,t),Ee(a))s=Ug(s,Oe(),i.children);else{const c=Wr(i.children,we(a));if(c){const u=c.getChild(Ue(a));s=so(s,Oe(),u)}}}else throw ii("WriteRecord should have .snap or .children")}}return s}function mv(n,e,t,s,r){if(!s&&!r){const i=gr(n.visibleWrites,e);if(i!=null)return i;{const o=Ps(n.visibleWrites,e);if(Yu(o))return t;if(t==null&&!Qu(o,Oe()))return null;{const a=t||ke.EMPTY_NODE;return Qr(o,a)}}}else{const i=Ps(n.visibleWrites,e);if(!r&&Yu(i))return t;if(!r&&t==null&&!Qu(i,Oe()))return null;{const o=function(u){return(u.visible||r)&&(!s||!~s.indexOf(u.writeId))&&(an(u.path,e)||an(e,u.path))},a=gv(n.allWrites,o,e),c=t||ke.EMPTY_NODE;return Qr(a,c)}}}function T0(n,e,t){let s=ke.EMPTY_NODE;const r=gr(n.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(At,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(t){const i=Ps(n.visibleWrites,e);return t.forEachChild(At,(o,a)=>{const c=Qr(Ps(i,new $e(o)),a);s=s.updateImmediateChild(o,c)}),$g(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=Ps(n.visibleWrites,e);return $g(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function I0(n,e,t,s,r){G(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=st(e,t);if(Qu(n.visibleWrites,i))return null;{const o=Ps(n.visibleWrites,i);return Yu(o)?r.getChild(t):Qr(o,r.getChild(t))}}function w0(n,e,t,s){const r=st(e,t),i=gr(n.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(t)){const o=Ps(n.visibleWrites,r);return Qr(o,s.getNode().getImmediateChild(t))}else return null}function R0(n,e){return gr(n.visibleWrites,e)}function A0(n,e,t,s,r,i,o){let a;const c=Ps(n.visibleWrites,e),u=gr(c,Oe());if(u!=null)a=u;else if(t!=null)a=Qr(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),g=i?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let m=g.getNext();for(;m&&h.length<r;)f(m,s)!==0&&h.push(m),m=g.getNext();return h}else return[]}function C0(){return{visibleWrites:dn.empty(),allWrites:[],lastWriteId:-1}}function Xu(n,e,t,s){return mv(n.writeTree,n.treePath,e,t,s)}function _v(n,e){return T0(n.writeTree,n.treePath,e)}function jg(n,e,t,s){return I0(n.writeTree,n.treePath,e,t,s)}function vl(n,e){return R0(n.writeTree,st(n.treePath,e))}function b0(n,e,t,s,r,i){return A0(n.writeTree,n.treePath,e,t,s,r,i)}function fd(n,e,t){return w0(n.writeTree,n.treePath,e,t)}function yv(n,e){return Ev(st(n.treePath,e),n.writeTree)}function Ev(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;G(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),G(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(t==="child_added"&&i==="child_removed")this.changeMap.set(s,Mg(s,e.snapshotNode,r.snapshotNode));else if(t==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&i==="child_changed")this.changeMap.set(s,s0(s,r.oldSnap));else if(t==="child_changed"&&i==="child_added")this.changeMap.set(s,n0(s,e.snapshotNode));else if(t==="child_changed"&&i==="child_changed")this.changeMap.set(s,Mg(s,e.snapshotNode,r.oldSnap));else throw ii("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const vv=new P0;class pd{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new dd(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return fd(this.writes_,e,s)}}getChildAfterChild(e,t,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ur(this.viewCache_),i=b0(this.writes_,r,t,1,s,e);return i.length===0?null:i[0]}}function k0(n,e){G(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),G(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function N0(n,e,t,s,r){const i=new S0;let o,a;if(t.type===bn.OVERWRITE){const u=t;u.source.fromUser?o=Ju(n,e,u.path,u.snap,s,r,i):(G(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!Ee(u.path),o=Tl(n,e,u.path,u.snap,s,r,a,i))}else if(t.type===bn.MERGE){const u=t;u.source.fromUser?o=D0(n,e,u.path,u.children,s,r,i):(G(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Zu(n,e,u.path,u.children,s,r,a,i))}else if(t.type===bn.ACK_USER_WRITE){const u=t;u.revert?o=V0(n,e,u.path,s,r,i):o=x0(n,e,u.path,u.affectedTree,s,r,i)}else if(t.type===bn.LISTEN_COMPLETE)o=M0(n,e,t.path,s,i);else throw ii("Unknown operation type: "+t.type);const c=i.getChanges();return O0(e,o,c),{viewCache:o,changes:c}}function O0(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=Gu(n);(t.length>0||!n.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&t.push(t0(Gu(e)))}}function Tv(n,e,t,s,r,i){const o=e.eventCache;if(vl(s,t)!=null)return e;{let a,c;if(Ee(t))if(G(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ur(e),h=u instanceof ke?u:ke.EMPTY_NODE,f=_v(s,h);a=n.filter.updateFullNode(e.eventCache.getNode(),f,i)}else{const u=Xu(s,ur(e));a=n.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=we(t);if(u===".priority"){G(Ns(t)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const f=jg(s,t,h,c);f!=null?a=n.filter.updatePriority(h,f):a=o.getNode()}else{const h=Ue(t);let f;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const g=jg(s,t,o.getNode(),c);g!=null?f=o.getNode().getImmediateChild(u).updateChild(h,g):f=o.getNode().getImmediateChild(u)}else f=fd(s,u,e.serverCache);f!=null?a=n.filter.updateChild(o.getNode(),u,f,h,r,i):a=o.getNode()}}return no(e,a,o.isFullyInitialized()||Ee(t),n.filter.filtersNodes())}}function Tl(n,e,t,s,r,i,o,a){const c=e.serverCache;let u;const h=o?n.filter:n.filter.getIndexedFilter();if(Ee(t))u=h.updateFullNode(c.getNode(),s,null);else if(h.filtersNodes()&&!c.isFiltered()){const m=c.getNode().updateChild(t,s);u=h.updateFullNode(c.getNode(),m,null)}else{const m=we(t);if(!c.isCompleteForPath(t)&&Ns(t)>1)return e;const v=Ue(t),S=c.getNode().getImmediateChild(m).updateChild(v,s);m===".priority"?u=h.updatePriority(c.getNode(),S):u=h.updateChild(c.getNode(),m,S,v,vv,null)}const f=dv(e,u,c.isFullyInitialized()||Ee(t),h.filtersNodes()),g=new pd(r,f,i);return Tv(n,f,t,r,g,a)}function Ju(n,e,t,s,r,i,o){const a=e.eventCache;let c,u;const h=new pd(r,e,i);if(Ee(t))u=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=no(e,u,!0,n.filter.filtersNodes());else{const f=we(t);if(f===".priority")u=n.filter.updatePriority(e.eventCache.getNode(),s),c=no(e,u,a.isFullyInitialized(),a.isFiltered());else{const g=Ue(t),m=a.getNode().getImmediateChild(f);let v;if(Ee(g))v=s;else{const C=h.getCompleteChild(f);C!=null?XE(g)===".priority"&&C.getChild(ZE(g)).isEmpty()?v=C:v=C.updateChild(g,s):v=ke.EMPTY_NODE}if(m.equals(v))c=e;else{const C=n.filter.updateChild(a.getNode(),f,v,g,h,o);c=no(e,C,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function qg(n,e){return n.eventCache.isCompleteForChild(e)}function D0(n,e,t,s,r,i,o){let a=e;return s.foreach((c,u)=>{const h=st(t,c);qg(e,we(h))&&(a=Ju(n,a,h,u,r,i,o))}),s.foreach((c,u)=>{const h=st(t,c);qg(e,we(h))||(a=Ju(n,a,h,u,r,i,o))}),a}function Wg(n,e,t){return t.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function Zu(n,e,t,s,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;Ee(t)?u=s:u=new Fe(null).setTree(t,s);const h=e.serverCache.getNode();return u.children.inorderTraversal((f,g)=>{if(h.hasChild(f)){const m=e.serverCache.getNode().getImmediateChild(f),v=Wg(n,m,g);c=Tl(n,c,new $e(f),v,r,i,o,a)}}),u.children.inorderTraversal((f,g)=>{const m=!e.serverCache.isCompleteForChild(f)&&g.value===null;if(!h.hasChild(f)&&!m){const v=e.serverCache.getNode().getImmediateChild(f),C=Wg(n,v,g);c=Tl(n,c,new $e(f),C,r,i,o,a)}}),c}function x0(n,e,t,s,r,i,o){if(vl(r,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(Ee(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Tl(n,e,t,c.getNode().getChild(t),r,i,a,o);if(Ee(t)){let u=new Fe(null);return c.getNode().forEachChild(jr,(h,f)=>{u=u.set(new $e(h),f)}),Zu(n,e,t,u,r,i,a,o)}else return e}else{let u=new Fe(null);return s.foreach((h,f)=>{const g=st(t,h);c.isCompleteForPath(g)&&(u=u.set(h,c.getNode().getChild(g)))}),Zu(n,e,t,u,r,i,a,o)}}function M0(n,e,t,s,r){const i=e.serverCache,o=dv(e,i.getNode(),i.isFullyInitialized()||Ee(t),i.isFiltered());return Tv(n,o,t,s,vv,r)}function V0(n,e,t,s,r,i){let o;if(vl(s,t)!=null)return e;{const a=new pd(s,e,r),c=e.eventCache.getNode();let u;if(Ee(t)||we(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Xu(s,ur(e));else{const f=e.serverCache.getNode();G(f instanceof ke,"serverChildren would be complete if leaf node"),h=_v(s,f)}h=h,u=n.filter.updateFullNode(c,h,i)}else{const h=we(t);let f=fd(s,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=c.getImmediateChild(h)),f!=null?u=n.filter.updateChild(c,h,f,Ue(t),a,i):e.eventCache.getNode().hasChild(h)?u=n.filter.updateChild(c,h,ke.EMPTY_NODE,Ue(t),a,i):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Xu(s,ur(e)),o.isLeafNode()&&(u=n.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||vl(s,Oe())!=null,no(e,u,o,n.filter.filtersNodes())}}function L0(n,e){const t=ur(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Ee(e)&&!t.getImmediateChild(we(e)).isEmpty())?t.getChild(e):null}function Hg(n,e,t,s){e.type===bn.MERGE&&e.source.queryId!==null&&(G(ur(n.viewCache_),"We should always have a full cache before handling merges"),G(Gu(n.viewCache_),"Missing event cache, even though we have a server cache"));const r=n.viewCache_,i=N0(n.processor_,r,e,t,s);return k0(n.processor_,i.viewCache),G(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=i.viewCache,F0(n,i.changes,i.viewCache.eventCache.getNode())}function F0(n,e,t,s){const r=n.eventRegistrations_;return h0(n.eventGenerator_,e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zg;function U0(n){G(!zg,"__referenceConstructor has already been defined"),zg=n}function gd(n,e,t,s){const r=e.source.queryId;if(r!==null){const i=n.views.get(r);return G(i!=null,"SyncTree gave us an op for an invalid query."),Hg(i,e,t,s)}else{let i=[];for(const o of n.views.values())i=i.concat(Hg(o,e,t,s));return i}}function md(n,e){let t=null;for(const s of n.views.values())t=t||L0(s,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kg;function B0(n){G(!Kg,"__referenceConstructor has already been defined"),Kg=n}class Gg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Fe(null),this.pendingWriteTree_=C0(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function $0(n,e,t,s,r){return g0(n.pendingWriteTree_,e,t,s,r),r?nc(n,new cr(lv(),e,t)):[]}function Or(n,e,t=!1){const s=m0(n.pendingWriteTree_,e);if(_0(n.pendingWriteTree_,e)){let i=new Fe(null);return s.snap!=null?i=i.set(Oe(),!0):nn(s.children,o=>{i=i.set(new $e(o),!0)}),nc(n,new El(s.path,i,t))}else return[]}function tc(n,e,t){return nc(n,new cr(cv(),e,t))}function j0(n,e,t){const s=Fe.fromObject(t);return nc(n,new Ro(cv(),e,s))}function q0(n,e,t,s){const r=Av(n,s);if(r!=null){const i=Cv(r),o=i.path,a=i.queryId,c=Jt(o,e),u=new cr(uv(a),c,t);return bv(n,o,u)}else return[]}function W0(n,e,t,s){const r=Av(n,s);if(r){const i=Cv(r),o=i.path,a=i.queryId,c=Jt(o,e),u=Fe.fromObject(t),h=new Ro(uv(a),c,u);return bv(n,o,h)}else return[]}function Iv(n,e,t){const r=n.pendingWriteTree_,i=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=Jt(o,e),u=md(a,c);if(u)return u});return mv(r,e,i,t,!0)}function nc(n,e){return wv(e,n.syncPointTree_,null,pv(n.pendingWriteTree_,Oe()))}function wv(n,e,t,s){if(Ee(n.path))return Rv(n,e,t,s);{const r=e.get(Oe());t==null&&r!=null&&(t=md(r,Oe()));let i=[];const o=we(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const u=t?t.getImmediateChild(o):null,h=yv(s,o);i=i.concat(wv(a,c,u,h))}return r&&(i=i.concat(gd(r,n,s,t))),i}}function Rv(n,e,t,s){const r=e.get(Oe());t==null&&r!=null&&(t=md(r,Oe()));let i=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,u=yv(s,o),h=n.operationForChild(o);h&&(i=i.concat(Rv(h,a,c,u)))}),r&&(i=i.concat(gd(r,n,s,t))),i}function Av(n,e){return n.tagToQueryMap.get(e)}function Cv(n){const e=n.indexOf("$");return G(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new $e(n.substr(0,e))}}function bv(n,e,t){const s=n.syncPointTree_.get(e);G(s,"Missing sync point for query tag that we're tracking");const r=pv(n.pendingWriteTree_,e);return gd(s,t,r,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new _d(t)}node(){return this.node_}}class yd{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=st(this.path_,e);return new yd(this.syncTree_,t)}node(){return Iv(this.syncTree_,this.path_)}}const H0=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Qg=function(n,e,t){if(!n||typeof n!="object")return n;if(G(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return z0(n[".sv"],e,t);if(typeof n[".sv"]=="object")return K0(n[".sv"],e);G(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},z0=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:G(!1,"Unexpected server value: "+n)}},K0=function(n,e,t){n.hasOwnProperty("increment")||G(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&G(!1,"Unexpected increment value: "+s);const r=e.node();if(G(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},G0=function(n,e,t,s){return Ed(e,new yd(t,n),s)},Q0=function(n,e,t){return Ed(n,new _d(e),t)};function Ed(n,e,t){const s=n.getPriority().val(),r=Qg(s,e.getImmediateChild(".priority"),t);let i;if(n.isLeafNode()){const o=n,a=Qg(o.getValue(),e,t);return a!==o.getValue()||r!==o.getPriority().val()?new tt(a,wt(r)):n}else{const o=n;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new tt(r))),o.forEachChild(At,(a,c)=>{const u=Ed(c,e.getImmediateChild(a),t);u!==c&&(i=i.updateImmediateChild(a,u))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Td(n,e){let t=e instanceof $e?e:new $e(e),s=n,r=we(t);for(;r!==null;){const i=Wr(s.node.children,r)||{children:{},childCount:0};s=new vd(r,s,i),t=Ue(t),r=we(t)}return s}function ui(n){return n.node.value}function Sv(n,e){n.node.value=e,eh(n)}function Pv(n){return n.node.childCount>0}function Y0(n){return ui(n)===void 0&&!Pv(n)}function sc(n,e){nn(n.node.children,(t,s)=>{e(new vd(t,n,s))})}function kv(n,e,t,s){t&&e(n),sc(n,r=>{kv(r,e,!0)})}function X0(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ko(n){return new $e(n.parent===null?n.name:Ko(n.parent)+"/"+n.name)}function eh(n){n.parent!==null&&J0(n.parent,n.name,n)}function J0(n,e,t){const s=Y0(t),r=as(n.node.children,e);s&&r?(delete n.node.children[e],n.node.childCount--,eh(n)):!s&&!r&&(n.node.children[e]=t.node,n.node.childCount++,eh(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0=/[\[\].#$\/\u0000-\u001F\u007F]/,eN=/[\[\].#$\u0000-\u001F\u007F]/,lu=10*1024*1024,Nv=function(n){return typeof n=="string"&&n.length!==0&&!Z0.test(n)},tN=function(n){return typeof n=="string"&&n.length!==0&&!eN.test(n)},nN=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),tN(n)},Ov=function(n,e,t){const s=t instanceof $e?new Mk(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Js(s));if(typeof e=="function")throw new Error(n+"contains a function "+Js(s)+" with contents = "+e.toString());if(NE(e))throw new Error(n+"contains "+e.toString()+" "+Js(s));if(typeof e=="string"&&e.length>lu/3&&Fl(e)>lu)throw new Error(n+"contains a string greater than "+lu+" utf8 bytes "+Js(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(nn(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!Nv(o)))throw new Error(n+" contains an invalid key ("+o+") "+Js(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Vk(s,o),Ov(n,a,s),Lk(s)}),r&&i)throw new Error(n+' contains ".value" child '+Js(s)+" in addition to actual children.")}},sN=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Nv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!nN(t))throw new Error(Tw(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function iN(n,e){let t=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();t!==null&&!ev(i,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:i}),t.events.push(r)}t&&n.eventLists_.push(t)}function mr(n,e,t){iN(n,t),oN(n,s=>an(s,e)||an(e,s))}function oN(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const r=n.eventLists_[s];if(r){const i=r.path;e(i)?(aN(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function aN(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();eo&&It("event: "+t.toString()),Ho(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN="repo_interrupt",cN=25;class uN{constructor(e,t,s,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new rN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=yl(),this.transactionQueueTree_=new vd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function hN(n,e,t){if(n.stats_=ad(n.repoInfo_),n.forceRestClient_||ik())n.server_=new _l(n.repoInfo_,(s,r,i,o)=>{Yg(n,s,r,i,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Xg(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ut(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new ts(n.repoInfo_,e,(s,r,i,o)=>{Yg(n,s,r,i,o)},s=>{Xg(n,s)},s=>{fN(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=hk(n.repoInfo_,()=>new u0(n.stats_,n.server_)),n.infoData_=new i0,n.infoSyncTree_=new Gg({startListening:(s,r,i,o)=>{let a=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(a=tc(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Id(n,"connected",!1),n.serverSyncTree_=new Gg({startListening:(s,r,i,o)=>(n.server_.listen(s,i,r,(a,c)=>{const u=o(a,c);mr(n.eventQueue_,s._path,u)}),[]),stopListening:(s,r)=>{n.server_.unlisten(s,r)}})}function dN(n){const t=n.infoData_.getNode(new $e(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Dv(n){return H0({timestamp:dN(n)})}function Yg(n,e,t,s,r){n.dataUpdateCount++;const i=new $e(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(r)if(s){const c=Qa(t,u=>wt(u));o=W0(n.serverSyncTree_,i,c,r)}else{const c=wt(t);o=q0(n.serverSyncTree_,i,c,r)}else if(s){const c=Qa(t,u=>wt(u));o=j0(n.serverSyncTree_,i,c)}else{const c=wt(t);o=tc(n.serverSyncTree_,i,c)}let a=i;o.length>0&&(a=Rd(n,i)),mr(n.eventQueue_,a,o)}function Xg(n,e){Id(n,"connected",e),e===!1&&gN(n)}function fN(n,e){nn(e,(t,s)=>{Id(n,t,s)})}function Id(n,e,t){const s=new $e("/.info/"+e),r=wt(t);n.infoData_.updateSnapshot(s,r);const i=tc(n.infoSyncTree_,s,r);mr(n.eventQueue_,s,i)}function pN(n){return n.nextWriteId_++}function gN(n){xv(n,"onDisconnectEvents");const e=Dv(n),t=yl();Ku(n.onDisconnect_,Oe(),(r,i)=>{const o=G0(r,i,n.serverSyncTree_,e);av(t,r,o)});let s=[];Ku(t,Oe(),(r,i)=>{s=s.concat(tc(n.serverSyncTree_,r,i));const o=EN(n,r);Rd(n,o)}),n.onDisconnect_=yl(),mr(n.eventQueue_,Oe(),s)}function mN(n){n.persistentConnection_&&n.persistentConnection_.interrupt(lN)}function xv(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),It(t,...e)}function Mv(n,e,t){return Iv(n.serverSyncTree_,e,t)||ke.EMPTY_NODE}function wd(n,e=n.transactionQueueTree_){if(e||rc(n,e),ui(e)){const t=Lv(n,e);G(t.length>0,"Sending zero length transaction queue"),t.every(r=>r.status===0)&&_N(n,Ko(e),t)}else Pv(e)&&sc(e,t=>{wd(n,t)})}function _N(n,e,t){const s=t.map(u=>u.currentWriteId),r=Mv(n,e,s);let i=r;const o=r.hash();for(let u=0;u<t.length;u++){const h=t[u];G(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=Jt(e,h.path);i=i.updateChild(f,h.currentOutputSnapshotRaw)}const a=i.val(!0),c=e;n.server_.put(c.toString(),a,u=>{xv(n,"transaction put response",{path:c.toString(),status:u});let h=[];if(u==="ok"){const f=[];for(let g=0;g<t.length;g++)t[g].status=2,h=h.concat(Or(n.serverSyncTree_,t[g].currentWriteId)),t[g].onComplete&&f.push(()=>t[g].onComplete(null,!0,t[g].currentOutputSnapshotResolved)),t[g].unwatcher();rc(n,Td(n.transactionQueueTree_,e)),wd(n,n.transactionQueueTree_),mr(n.eventQueue_,e,h);for(let g=0;g<f.length;g++)Ho(f[g])}else{if(u==="datastale")for(let f=0;f<t.length;f++)t[f].status===3?t[f].status=4:t[f].status=0;else{Kt("transaction at "+c.toString()+" failed: "+u);for(let f=0;f<t.length;f++)t[f].status=4,t[f].abortReason=u}Rd(n,e)}},o)}function Rd(n,e){const t=Vv(n,e),s=Ko(t),r=Lv(n,t);return yN(n,r,s),s}function yN(n,e,t){if(e.length===0)return;const s=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],u=Jt(t,c.path);let h=!1,f;if(G(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,f=c.abortReason,r=r.concat(Or(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=cN)h=!0,f="maxretry",r=r.concat(Or(n.serverSyncTree_,c.currentWriteId,!0));else{const g=Mv(n,c.path,o);c.currentInputSnapshot=g;const m=e[a].update(g.val());if(m!==void 0){Ov("transaction failed: Data returned ",m,c.path);let v=wt(m);typeof m=="object"&&m!=null&&as(m,".priority")||(v=v.updatePriority(g.getPriority()));const S=c.currentWriteId,D=Dv(n),j=Q0(v,g,D);c.currentOutputSnapshotRaw=v,c.currentOutputSnapshotResolved=j,c.currentWriteId=pN(n),o.splice(o.indexOf(S),1),r=r.concat($0(n.serverSyncTree_,c.path,j,c.currentWriteId,c.applyLocally)),r=r.concat(Or(n.serverSyncTree_,S,!0))}else h=!0,f="nodata",r=r.concat(Or(n.serverSyncTree_,c.currentWriteId,!0))}mr(n.eventQueue_,t,r),r=[],h&&(e[a].status=2,function(g){setTimeout(g,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(f),!1,null))))}rc(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)Ho(s[a]);wd(n,n.transactionQueueTree_)}function Vv(n,e){let t,s=n.transactionQueueTree_;for(t=we(e);t!==null&&ui(s)===void 0;)s=Td(s,t),e=Ue(e),t=we(e);return s}function Lv(n,e){const t=[];return Fv(n,e,t),t.sort((s,r)=>s.order-r.order),t}function Fv(n,e,t){const s=ui(e);if(s)for(let r=0;r<s.length;r++)t.push(s[r]);sc(e,r=>{Fv(n,r,t)})}function rc(n,e){const t=ui(e);if(t){let s=0;for(let r=0;r<t.length;r++)t[r].status!==2&&(t[s]=t[r],s++);t.length=s,Sv(e,t.length>0?t:void 0)}sc(e,s=>{rc(n,s)})}function EN(n,e){const t=Ko(Vv(n,e)),s=Td(n.transactionQueueTree_,e);return X0(s,r=>{cu(n,r)}),cu(n,s),kv(s,r=>{cu(n,r)}),t}function cu(n,e){const t=ui(e);if(t){const s=[];let r=[],i=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(G(i===o-1,"All SENT items should be at beginning of queue."),i=o,t[o].status=3,t[o].abortReason="set"):(G(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),r=r.concat(Or(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?Sv(e,void 0):t.length=i+1,mr(n.eventQueue_,Ko(e),r);for(let o=0;o<s.length;o++)Ho(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vN(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let r=t[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function TN(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Kt(`Invalid query segment '${t}' in query '${n}'`)}return e}const Jg=function(n,e){const t=IN(n),s=t.namespace;t.domain==="firebase.com"&&ar(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&ar("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||XP();const r=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new lk(t.host,t.secure,s,r,e,"",s!==t.subdomain),path:new $e(t.pathString)}},IN=function(n){let e="",t="",s="",r="",i="",o=!0,a="https",c=443;if(typeof n=="string"){let u=n.indexOf("//");u>=0&&(a=n.substring(0,u-1),n=n.substring(u+2));let h=n.indexOf("/");h===-1&&(h=n.length);let f=n.indexOf("?");f===-1&&(f=n.length),e=n.substring(0,Math.min(h,f)),h<f&&(r=vN(n.substring(h,f)));const g=TN(n.substring(Math.min(n.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")t="localhost";else if(m.split(".").length<=2)t=m;else{const v=e.indexOf(".");s=e.substring(0,v).toLowerCase(),t=e.substring(v+1),i=s}"ns"in g&&(i=g.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:a,pathString:r,namespace:i}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,t,s,r){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=r}get key(){return Ee(this._path)?null:XE(this._path)}get ref(){return new hi(this._repo,this._path)}get _queryIdentifier(){const e=Lg(this._queryParams),t=id(e);return t==="{}"?"default":t}get _queryObject(){return Lg(this._queryParams)}isEqual(e){if(e=it(e),!(e instanceof Ad))return!1;const t=this._repo===e._repo,s=ev(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+xk(this._path)}}class hi extends Ad{constructor(e,t){super(e,t,new hd,!1)}get parent(){const e=ZE(this._path);return e===null?null:new hi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}U0(hi);B0(hi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN="FIREBASE_DATABASE_EMULATOR_HOST",th={};let RN=!1;function AN(n,e,t,s,r){let i=s||n.options.databaseURL;i===void 0&&(n.options.projectId||ar("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),It("Using default host for project ",n.options.projectId),i=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Jg(i,r),a=o.repoInfo,c;typeof process<"u"&&yg&&(c=yg[wN]),c?(i=`http://${c}?ns=${a.namespace}`,o=Jg(i,r),a=o.repoInfo):o.repoInfo.secure;const u=new ak(n.name,n.options,e);sN("Invalid Firebase Database URL",o),Ee(o.path)||ar("Database URL must point to the root of a Firebase Database (not including a child path).");const h=bN(a,n,u,new ok(n.name,t));return new SN(h,n)}function CN(n,e){const t=th[e];(!t||t[n.key]!==n)&&ar(`Database ${e}(${n.repoInfo_}) has already been deleted.`),mN(n),delete t[n.key]}function bN(n,e,t,s){let r=th[e.name];r||(r={},th[e.name]=r);let i=r[n.toURLString()];return i&&ar("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new uN(n,RN,t,s),r[n.toURLString()]=i,i}class SN{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(hN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new hi(this._repo,Oe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(CN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ar("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PN(n){HP(Fs),xn(new pn("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return AN(s,r,i,t)},"PUBLIC").setMultipleInstances(!0)),Ht(Eg,vg,n),Ht(Eg,vg,"esm2017")}ts.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};ts.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};PN();var Zg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sr,Uv;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,y){function w(){}w.prototype=y.prototype,R.D=y.prototype,R.prototype=new w,R.prototype.constructor=R,R.C=function(A,b,k){for(var I=Array(arguments.length-2),St=2;St<arguments.length;St++)I[St-2]=arguments[St];return y.prototype[b].apply(A,I)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(R,y,w){w||(w=0);var A=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)A[b]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(b=0;16>b;++b)A[b]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=R.g[0],w=R.g[1],b=R.g[2];var k=R.g[3],I=y+(k^w&(b^k))+A[0]+3614090360&4294967295;y=w+(I<<7&4294967295|I>>>25),I=k+(b^y&(w^b))+A[1]+3905402710&4294967295,k=y+(I<<12&4294967295|I>>>20),I=b+(w^k&(y^w))+A[2]+606105819&4294967295,b=k+(I<<17&4294967295|I>>>15),I=w+(y^b&(k^y))+A[3]+3250441966&4294967295,w=b+(I<<22&4294967295|I>>>10),I=y+(k^w&(b^k))+A[4]+4118548399&4294967295,y=w+(I<<7&4294967295|I>>>25),I=k+(b^y&(w^b))+A[5]+1200080426&4294967295,k=y+(I<<12&4294967295|I>>>20),I=b+(w^k&(y^w))+A[6]+2821735955&4294967295,b=k+(I<<17&4294967295|I>>>15),I=w+(y^b&(k^y))+A[7]+4249261313&4294967295,w=b+(I<<22&4294967295|I>>>10),I=y+(k^w&(b^k))+A[8]+1770035416&4294967295,y=w+(I<<7&4294967295|I>>>25),I=k+(b^y&(w^b))+A[9]+2336552879&4294967295,k=y+(I<<12&4294967295|I>>>20),I=b+(w^k&(y^w))+A[10]+4294925233&4294967295,b=k+(I<<17&4294967295|I>>>15),I=w+(y^b&(k^y))+A[11]+2304563134&4294967295,w=b+(I<<22&4294967295|I>>>10),I=y+(k^w&(b^k))+A[12]+1804603682&4294967295,y=w+(I<<7&4294967295|I>>>25),I=k+(b^y&(w^b))+A[13]+4254626195&4294967295,k=y+(I<<12&4294967295|I>>>20),I=b+(w^k&(y^w))+A[14]+2792965006&4294967295,b=k+(I<<17&4294967295|I>>>15),I=w+(y^b&(k^y))+A[15]+1236535329&4294967295,w=b+(I<<22&4294967295|I>>>10),I=y+(b^k&(w^b))+A[1]+4129170786&4294967295,y=w+(I<<5&4294967295|I>>>27),I=k+(w^b&(y^w))+A[6]+3225465664&4294967295,k=y+(I<<9&4294967295|I>>>23),I=b+(y^w&(k^y))+A[11]+643717713&4294967295,b=k+(I<<14&4294967295|I>>>18),I=w+(k^y&(b^k))+A[0]+3921069994&4294967295,w=b+(I<<20&4294967295|I>>>12),I=y+(b^k&(w^b))+A[5]+3593408605&4294967295,y=w+(I<<5&4294967295|I>>>27),I=k+(w^b&(y^w))+A[10]+38016083&4294967295,k=y+(I<<9&4294967295|I>>>23),I=b+(y^w&(k^y))+A[15]+3634488961&4294967295,b=k+(I<<14&4294967295|I>>>18),I=w+(k^y&(b^k))+A[4]+3889429448&4294967295,w=b+(I<<20&4294967295|I>>>12),I=y+(b^k&(w^b))+A[9]+568446438&4294967295,y=w+(I<<5&4294967295|I>>>27),I=k+(w^b&(y^w))+A[14]+3275163606&4294967295,k=y+(I<<9&4294967295|I>>>23),I=b+(y^w&(k^y))+A[3]+4107603335&4294967295,b=k+(I<<14&4294967295|I>>>18),I=w+(k^y&(b^k))+A[8]+1163531501&4294967295,w=b+(I<<20&4294967295|I>>>12),I=y+(b^k&(w^b))+A[13]+2850285829&4294967295,y=w+(I<<5&4294967295|I>>>27),I=k+(w^b&(y^w))+A[2]+4243563512&4294967295,k=y+(I<<9&4294967295|I>>>23),I=b+(y^w&(k^y))+A[7]+1735328473&4294967295,b=k+(I<<14&4294967295|I>>>18),I=w+(k^y&(b^k))+A[12]+2368359562&4294967295,w=b+(I<<20&4294967295|I>>>12),I=y+(w^b^k)+A[5]+4294588738&4294967295,y=w+(I<<4&4294967295|I>>>28),I=k+(y^w^b)+A[8]+2272392833&4294967295,k=y+(I<<11&4294967295|I>>>21),I=b+(k^y^w)+A[11]+1839030562&4294967295,b=k+(I<<16&4294967295|I>>>16),I=w+(b^k^y)+A[14]+4259657740&4294967295,w=b+(I<<23&4294967295|I>>>9),I=y+(w^b^k)+A[1]+2763975236&4294967295,y=w+(I<<4&4294967295|I>>>28),I=k+(y^w^b)+A[4]+1272893353&4294967295,k=y+(I<<11&4294967295|I>>>21),I=b+(k^y^w)+A[7]+4139469664&4294967295,b=k+(I<<16&4294967295|I>>>16),I=w+(b^k^y)+A[10]+3200236656&4294967295,w=b+(I<<23&4294967295|I>>>9),I=y+(w^b^k)+A[13]+681279174&4294967295,y=w+(I<<4&4294967295|I>>>28),I=k+(y^w^b)+A[0]+3936430074&4294967295,k=y+(I<<11&4294967295|I>>>21),I=b+(k^y^w)+A[3]+3572445317&4294967295,b=k+(I<<16&4294967295|I>>>16),I=w+(b^k^y)+A[6]+76029189&4294967295,w=b+(I<<23&4294967295|I>>>9),I=y+(w^b^k)+A[9]+3654602809&4294967295,y=w+(I<<4&4294967295|I>>>28),I=k+(y^w^b)+A[12]+3873151461&4294967295,k=y+(I<<11&4294967295|I>>>21),I=b+(k^y^w)+A[15]+530742520&4294967295,b=k+(I<<16&4294967295|I>>>16),I=w+(b^k^y)+A[2]+3299628645&4294967295,w=b+(I<<23&4294967295|I>>>9),I=y+(b^(w|~k))+A[0]+4096336452&4294967295,y=w+(I<<6&4294967295|I>>>26),I=k+(w^(y|~b))+A[7]+1126891415&4294967295,k=y+(I<<10&4294967295|I>>>22),I=b+(y^(k|~w))+A[14]+2878612391&4294967295,b=k+(I<<15&4294967295|I>>>17),I=w+(k^(b|~y))+A[5]+4237533241&4294967295,w=b+(I<<21&4294967295|I>>>11),I=y+(b^(w|~k))+A[12]+1700485571&4294967295,y=w+(I<<6&4294967295|I>>>26),I=k+(w^(y|~b))+A[3]+2399980690&4294967295,k=y+(I<<10&4294967295|I>>>22),I=b+(y^(k|~w))+A[10]+4293915773&4294967295,b=k+(I<<15&4294967295|I>>>17),I=w+(k^(b|~y))+A[1]+2240044497&4294967295,w=b+(I<<21&4294967295|I>>>11),I=y+(b^(w|~k))+A[8]+1873313359&4294967295,y=w+(I<<6&4294967295|I>>>26),I=k+(w^(y|~b))+A[15]+4264355552&4294967295,k=y+(I<<10&4294967295|I>>>22),I=b+(y^(k|~w))+A[6]+2734768916&4294967295,b=k+(I<<15&4294967295|I>>>17),I=w+(k^(b|~y))+A[13]+1309151649&4294967295,w=b+(I<<21&4294967295|I>>>11),I=y+(b^(w|~k))+A[4]+4149444226&4294967295,y=w+(I<<6&4294967295|I>>>26),I=k+(w^(y|~b))+A[11]+3174756917&4294967295,k=y+(I<<10&4294967295|I>>>22),I=b+(y^(k|~w))+A[2]+718787259&4294967295,b=k+(I<<15&4294967295|I>>>17),I=w+(k^(b|~y))+A[9]+3951481745&4294967295,R.g[0]=R.g[0]+y&4294967295,R.g[1]=R.g[1]+(b+(I<<21&4294967295|I>>>11))&4294967295,R.g[2]=R.g[2]+b&4294967295,R.g[3]=R.g[3]+k&4294967295}s.prototype.u=function(R,y){y===void 0&&(y=R.length);for(var w=y-this.blockSize,A=this.B,b=this.h,k=0;k<y;){if(b==0)for(;k<=w;)r(this,R,k),k+=this.blockSize;if(typeof R=="string"){for(;k<y;)if(A[b++]=R.charCodeAt(k++),b==this.blockSize){r(this,A),b=0;break}}else for(;k<y;)if(A[b++]=R[k++],b==this.blockSize){r(this,A),b=0;break}}this.h=b,this.o+=y},s.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var y=1;y<R.length-8;++y)R[y]=0;var w=8*this.o;for(y=R.length-8;y<R.length;++y)R[y]=w&255,w/=256;for(this.u(R),R=Array(16),y=w=0;4>y;++y)for(var A=0;32>A;A+=8)R[w++]=this.g[y]>>>A&255;return R};function i(R,y){var w=a;return Object.prototype.hasOwnProperty.call(w,R)?w[R]:w[R]=y(R)}function o(R,y){this.h=y;for(var w=[],A=!0,b=R.length-1;0<=b;b--){var k=R[b]|0;A&&k==y||(w[b]=k,A=!1)}this.g=w}var a={};function c(R){return-128<=R&&128>R?i(R,function(y){return new o([y|0],0>y?-1:0)}):new o([R|0],0>R?-1:0)}function u(R){if(isNaN(R)||!isFinite(R))return f;if(0>R)return S(u(-R));for(var y=[],w=1,A=0;R>=w;A++)y[A]=R/w|0,w*=4294967296;return new o(y,0)}function h(R,y){if(R.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(R.charAt(0)=="-")return S(h(R.substring(1),y));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=u(Math.pow(y,8)),A=f,b=0;b<R.length;b+=8){var k=Math.min(8,R.length-b),I=parseInt(R.substring(b,b+k),y);8>k?(k=u(Math.pow(y,k)),A=A.j(k).add(u(I))):(A=A.j(w),A=A.add(u(I)))}return A}var f=c(0),g=c(1),m=c(16777216);n=o.prototype,n.m=function(){if(C(this))return-S(this).m();for(var R=0,y=1,w=0;w<this.g.length;w++){var A=this.i(w);R+=(0<=A?A:4294967296+A)*y,y*=4294967296}return R},n.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(v(this))return"0";if(C(this))return"-"+S(this).toString(R);for(var y=u(Math.pow(R,6)),w=this,A="";;){var b=L(w,y).g;w=D(w,b.j(y));var k=((0<w.g.length?w.g[0]:w.h)>>>0).toString(R);if(w=b,v(w))return k+A;for(;6>k.length;)k="0"+k;A=k+A}},n.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function v(R){if(R.h!=0)return!1;for(var y=0;y<R.g.length;y++)if(R.g[y]!=0)return!1;return!0}function C(R){return R.h==-1}n.l=function(R){return R=D(this,R),C(R)?-1:v(R)?0:1};function S(R){for(var y=R.g.length,w=[],A=0;A<y;A++)w[A]=~R.g[A];return new o(w,~R.h).add(g)}n.abs=function(){return C(this)?S(this):this},n.add=function(R){for(var y=Math.max(this.g.length,R.g.length),w=[],A=0,b=0;b<=y;b++){var k=A+(this.i(b)&65535)+(R.i(b)&65535),I=(k>>>16)+(this.i(b)>>>16)+(R.i(b)>>>16);A=I>>>16,k&=65535,I&=65535,w[b]=I<<16|k}return new o(w,w[w.length-1]&-2147483648?-1:0)};function D(R,y){return R.add(S(y))}n.j=function(R){if(v(this)||v(R))return f;if(C(this))return C(R)?S(this).j(S(R)):S(S(this).j(R));if(C(R))return S(this.j(S(R)));if(0>this.l(m)&&0>R.l(m))return u(this.m()*R.m());for(var y=this.g.length+R.g.length,w=[],A=0;A<2*y;A++)w[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<R.g.length;b++){var k=this.i(A)>>>16,I=this.i(A)&65535,St=R.i(b)>>>16,Gt=R.i(b)&65535;w[2*A+2*b]+=I*Gt,j(w,2*A+2*b),w[2*A+2*b+1]+=k*Gt,j(w,2*A+2*b+1),w[2*A+2*b+1]+=I*St,j(w,2*A+2*b+1),w[2*A+2*b+2]+=k*St,j(w,2*A+2*b+2)}for(A=0;A<y;A++)w[A]=w[2*A+1]<<16|w[2*A];for(A=y;A<2*y;A++)w[A]=0;return new o(w,0)};function j(R,y){for(;(R[y]&65535)!=R[y];)R[y+1]+=R[y]>>>16,R[y]&=65535,y++}function x(R,y){this.g=R,this.h=y}function L(R,y){if(v(y))throw Error("division by zero");if(v(R))return new x(f,f);if(C(R))return y=L(S(R),y),new x(S(y.g),S(y.h));if(C(y))return y=L(R,S(y)),new x(S(y.g),y.h);if(30<R.g.length){if(C(R)||C(y))throw Error("slowDivide_ only works with positive integers.");for(var w=g,A=y;0>=A.l(R);)w=ne(w),A=ne(A);var b=re(w,1),k=re(A,1);for(A=re(A,2),w=re(w,2);!v(A);){var I=k.add(A);0>=I.l(R)&&(b=b.add(w),k=I),A=re(A,1),w=re(w,1)}return y=D(R,b.j(y)),new x(b,y)}for(b=f;0<=R.l(y);){for(w=Math.max(1,Math.floor(R.m()/y.m())),A=Math.ceil(Math.log(w)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),k=u(w),I=k.j(y);C(I)||0<I.l(R);)w-=A,k=u(w),I=k.j(y);v(k)&&(k=g),b=b.add(k),R=D(R,I)}return new x(b,R)}n.A=function(R){return L(this,R).h},n.and=function(R){for(var y=Math.max(this.g.length,R.g.length),w=[],A=0;A<y;A++)w[A]=this.i(A)&R.i(A);return new o(w,this.h&R.h)},n.or=function(R){for(var y=Math.max(this.g.length,R.g.length),w=[],A=0;A<y;A++)w[A]=this.i(A)|R.i(A);return new o(w,this.h|R.h)},n.xor=function(R){for(var y=Math.max(this.g.length,R.g.length),w=[],A=0;A<y;A++)w[A]=this.i(A)^R.i(A);return new o(w,this.h^R.h)};function ne(R){for(var y=R.g.length+1,w=[],A=0;A<y;A++)w[A]=R.i(A)<<1|R.i(A-1)>>>31;return new o(w,R.h)}function re(R,y){var w=y>>5;y%=32;for(var A=R.g.length-w,b=[],k=0;k<A;k++)b[k]=0<y?R.i(k+w)>>>y|R.i(k+w+1)<<32-y:R.i(k+w);return new o(b,R.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Uv=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,sr=o}).apply(typeof Zg<"u"?Zg:typeof self<"u"?self:typeof window<"u"?window:{});var Aa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bv,$i,$v,$a,nh,jv,qv,Wv;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,p){return l==Array.prototype||l==Object.prototype||(l[d]=p.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Aa=="object"&&Aa];for(var d=0;d<l.length;++d){var p=l[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var s=t(this);function r(l,d){if(d)e:{var p=s;l=l.split(".");for(var _=0;_<l.length-1;_++){var N=l[_];if(!(N in p))break e;p=p[N]}l=l[l.length-1],_=p[l],d=d(_),d!=_&&d!=null&&e(p,l,{configurable:!0,writable:!0,value:d})}}function i(l,d){l instanceof String&&(l+="");var p=0,_=!1,N={next:function(){if(!_&&p<l.length){var O=p++;return{value:d(O,l[O]),done:!1}}return _=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}r("Array.prototype.values",function(l){return l||function(){return i(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function u(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,p){return l.call.apply(l.bind,arguments)}function f(l,d,p){if(!l)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,_),l.apply(d,N)}}return function(){return l.apply(d,arguments)}}function g(l,d,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,g.apply(null,arguments)}function m(l,d){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function v(l,d){function p(){}p.prototype=d.prototype,l.aa=d.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(_,N,O){for(var z=Array(arguments.length-2),De=2;De<arguments.length;De++)z[De-2]=arguments[De];return d.prototype[N].apply(_,z)}}function C(l){const d=l.length;if(0<d){const p=Array(d);for(let _=0;_<d;_++)p[_]=l[_];return p}return[]}function S(l,d){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(c(_)){const N=l.length||0,O=_.length||0;l.length=N+O;for(let z=0;z<O;z++)l[N+z]=_[z]}else l.push(_)}}class D{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function j(l){return/^[\s\xa0]*$/.test(l)}function x(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function L(l){return L[" "](l),l}L[" "]=function(){};var ne=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function re(l,d,p){for(const _ in l)d.call(p,l[_],_,l)}function R(l,d){for(const p in l)d.call(void 0,l[p],p,l)}function y(l){const d={};for(const p in l)d[p]=l[p];return d}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(l,d){let p,_;for(let N=1;N<arguments.length;N++){_=arguments[N];for(p in _)l[p]=_[p];for(let O=0;O<w.length;O++)p=w[O],Object.prototype.hasOwnProperty.call(_,p)&&(l[p]=_[p])}}function b(l){var d=1;l=l.split(":");const p=[];for(;0<d&&l.length;)p.push(l.shift()),d--;return l.length&&p.push(l.join(":")),p}function k(l){a.setTimeout(()=>{throw l},0)}function I(){var l=Ft;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class St{constructor(){this.h=this.g=null}add(d,p){const _=Gt.get();_.set(d,p),this.h?this.h.next=_:this.g=_,this.h=_}}var Gt=new D(()=>new Ge,l=>l.reset());class Ge{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let ve,me=!1,Ft=new St,sn=()=>{const l=a.Promise.resolve(void 0);ve=()=>{l.then(Qt)}};var Qt=()=>{for(var l;l=I();){try{l.h.call(l.g)}catch(p){k(p)}var d=Gt;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}me=!1};function je(){this.s=this.s,this.C=this.C}je.prototype.s=!1,je.prototype.ma=function(){this.s||(this.s=!0,this.N())},je.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function qe(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}qe.prototype.h=function(){this.defaultPrevented=!0};var cs=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return l}();function yn(l,d){if(qe.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(ne){e:{try{L(d.nodeName);var N=!0;break e}catch{}N=!1}N||(d=null)}}else p=="mouseover"?d=l.fromElement:p=="mouseout"&&(d=l.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:xt[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&yn.aa.h.call(this)}}v(yn,qe);var xt={2:"touch",3:"pen",4:"mouse"};yn.prototype.h=function(){yn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var M="closure_listenable_"+(1e6*Math.random()|0),X=0;function Q(l,d,p,_,N){this.listener=l,this.proxy=null,this.src=d,this.type=p,this.capture=!!_,this.ha=N,this.key=++X,this.da=this.fa=!1}function ee(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Ae(l){this.src=l,this.g={},this.h=0}Ae.prototype.add=function(l,d,p,_,N){var O=l.toString();l=this.g[O],l||(l=this.g[O]=[],this.h++);var z=T(l,d,_,N);return-1<z?(d=l[z],p||(d.fa=!1)):(d=new Q(d,this.src,O,!!_,N),d.fa=p,l.push(d)),d};function E(l,d){var p=d.type;if(p in l.g){var _=l.g[p],N=Array.prototype.indexOf.call(_,d,void 0),O;(O=0<=N)&&Array.prototype.splice.call(_,N,1),O&&(ee(d),l.g[p].length==0&&(delete l.g[p],l.h--))}}function T(l,d,p,_){for(var N=0;N<l.length;++N){var O=l[N];if(!O.da&&O.listener==d&&O.capture==!!p&&O.ha==_)return N}return-1}var P="closure_lm_"+(1e6*Math.random()|0),V={};function $(l,d,p,_,N){if(Array.isArray(d)){for(var O=0;O<d.length;O++)$(l,d[O],p,_,N);return null}return p=le(p),l&&l[M]?l.K(d,p,u(_)?!!_.capture:!1,N):F(l,d,p,!1,_,N)}function F(l,d,p,_,N,O){if(!d)throw Error("Invalid event type");var z=u(N)?!!N.capture:!!N,De=Y(l);if(De||(l[P]=De=new Ae(l)),p=De.add(d,p,_,z,O),p.proxy)return p;if(_=K(),p.proxy=_,_.src=l,_.listener=p,l.addEventListener)cs||(N=z),N===void 0&&(N=!1),l.addEventListener(d.toString(),_,N);else if(l.attachEvent)l.attachEvent(q(d.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function K(){function l(p){return d.call(l.src,l.listener,p)}const d=ie;return l}function H(l,d,p,_,N){if(Array.isArray(d))for(var O=0;O<d.length;O++)H(l,d[O],p,_,N);else _=u(_)?!!_.capture:!!_,p=le(p),l&&l[M]?(l=l.i,d=String(d).toString(),d in l.g&&(O=l.g[d],p=T(O,p,_,N),-1<p&&(ee(O[p]),Array.prototype.splice.call(O,p,1),O.length==0&&(delete l.g[d],l.h--)))):l&&(l=Y(l))&&(d=l.g[d.toString()],l=-1,d&&(l=T(d,p,_,N)),(p=-1<l?d[l]:null)&&W(p))}function W(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[M])E(d.i,l);else{var p=l.type,_=l.proxy;d.removeEventListener?d.removeEventListener(p,_,l.capture):d.detachEvent?d.detachEvent(q(p),_):d.addListener&&d.removeListener&&d.removeListener(_),(p=Y(d))?(E(p,l),p.h==0&&(p.src=null,d[P]=null)):ee(l)}}}function q(l){return l in V?V[l]:V[l]="on"+l}function ie(l,d){if(l.da)l=!0;else{d=new yn(d,this);var p=l.listener,_=l.ha||l.src;l.fa&&W(l),l=p.call(_,d)}return l}function Y(l){return l=l[P],l instanceof Ae?l:null}var te="__closure_events_fn_"+(1e9*Math.random()>>>0);function le(l){return typeof l=="function"?l:(l[te]||(l[te]=function(d){return l.handleEvent(d)}),l[te])}function oe(){je.call(this),this.i=new Ae(this),this.M=this,this.F=null}v(oe,je),oe.prototype[M]=!0,oe.prototype.removeEventListener=function(l,d,p,_){H(this,l,d,p,_)};function pe(l,d){var p,_=l.F;if(_)for(p=[];_;_=_.F)p.push(_);if(l=l.M,_=d.type||d,typeof d=="string")d=new qe(d,l);else if(d instanceof qe)d.target=d.target||l;else{var N=d;d=new qe(_,l),A(d,N)}if(N=!0,p)for(var O=p.length-1;0<=O;O--){var z=d.g=p[O];N=Te(z,_,!0,d)&&N}if(z=d.g=l,N=Te(z,_,!0,d)&&N,N=Te(z,_,!1,d)&&N,p)for(O=0;O<p.length;O++)z=d.g=p[O],N=Te(z,_,!1,d)&&N}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var p=l.g[d],_=0;_<p.length;_++)ee(p[_]);delete l.g[d],l.h--}}this.F=null},oe.prototype.K=function(l,d,p,_){return this.i.add(String(l),d,!1,p,_)},oe.prototype.L=function(l,d,p,_){return this.i.add(String(l),d,!0,p,_)};function Te(l,d,p,_){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var N=!0,O=0;O<d.length;++O){var z=d[O];if(z&&!z.da&&z.capture==p){var De=z.listener,lt=z.ha||z.src;z.fa&&E(l.i,z),N=De.call(lt,_)!==!1&&N}}return N&&!_.defaultPrevented}function pt(l,d,p){if(typeof l=="function")p&&(l=g(l,p));else if(l&&typeof l.handleEvent=="function")l=g(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function ot(l){l.g=pt(()=>{l.g=null,l.i&&(l.i=!1,ot(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class Yt extends je{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:ot(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gt(l){je.call(this),this.h=l,this.g={}}v(gt,je);var us=[];function _i(l){re(l.g,function(d,p){this.g.hasOwnProperty(p)&&W(d)},l),l.g={}}gt.prototype.N=function(){gt.aa.N.call(this),_i(this)},gt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var at=a.JSON.stringify,Xt=a.JSON.parse,ea=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Cc(){}Cc.prototype.h=null;function pf(l){return l.h||(l.h=l.i())}function gf(){}var yi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function bc(){qe.call(this,"d")}v(bc,qe);function Sc(){qe.call(this,"c")}v(Sc,qe);var Ws={},mf=null;function ta(){return mf=mf||new oe}Ws.La="serverreachability";function _f(l){qe.call(this,Ws.La,l)}v(_f,qe);function Ei(l){const d=ta();pe(d,new _f(d))}Ws.STAT_EVENT="statevent";function yf(l,d){qe.call(this,Ws.STAT_EVENT,l),this.stat=d}v(yf,qe);function Pt(l){const d=ta();pe(d,new yf(d,l))}Ws.Ma="timingevent";function Ef(l,d){qe.call(this,Ws.Ma,l),this.size=d}v(Ef,qe);function vi(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function Ti(){this.g=!0}Ti.prototype.xa=function(){this.g=!1};function CI(l,d,p,_,N,O){l.info(function(){if(l.g)if(O)for(var z="",De=O.split("&"),lt=0;lt<De.length;lt++){var Ce=De[lt].split("=");if(1<Ce.length){var mt=Ce[0];Ce=Ce[1];var _t=mt.split("_");z=2<=_t.length&&_t[1]=="type"?z+(mt+"="+Ce+"&"):z+(mt+"=redacted&")}}else z=null;else z=O;return"XMLHTTP REQ ("+_+") [attempt "+N+"]: "+d+`
`+p+`
`+z})}function bI(l,d,p,_,N,O,z){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+N+"]: "+d+`
`+p+`
`+O+" "+z})}function vr(l,d,p,_){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+PI(l,p)+(_?" "+_:"")})}function SI(l,d){l.info(function(){return"TIMEOUT: "+d})}Ti.prototype.info=function(){};function PI(l,d){if(!l.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var _=p[l];if(!(2>_.length)){var N=_[1];if(Array.isArray(N)&&!(1>N.length)){var O=N[0];if(O!="noop"&&O!="stop"&&O!="close")for(var z=1;z<N.length;z++)N[z]=""}}}}return at(p)}catch{return d}}var na={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Pc;function sa(){}v(sa,Cc),sa.prototype.g=function(){return new XMLHttpRequest},sa.prototype.i=function(){return{}},Pc=new sa;function hs(l,d,p,_){this.j=l,this.i=d,this.l=p,this.R=_||1,this.U=new gt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Tf}function Tf(){this.i=null,this.g="",this.h=!1}var If={},kc={};function Nc(l,d,p){l.L=1,l.v=aa(jn(d)),l.m=p,l.P=!0,wf(l,null)}function wf(l,d){l.F=Date.now(),ra(l),l.A=jn(l.v);var p=l.A,_=l.R;Array.isArray(_)||(_=[String(_)]),Lf(p.i,"t",_),l.C=0,p=l.j.J,l.h=new Tf,l.g=tp(l.j,p?d:null,!l.m),0<l.O&&(l.M=new Yt(g(l.Y,l,l.g),l.O)),d=l.U,p=l.g,_=l.ca;var N="readystatechange";Array.isArray(N)||(N&&(us[0]=N.toString()),N=us);for(var O=0;O<N.length;O++){var z=$(p,N[O],_||d.handleEvent,!1,d.h||d);if(!z)break;d.g[z.key]=z}d=l.H?y(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),Ei(),CI(l.i,l.u,l.A,l.l,l.R,l.m)}hs.prototype.ca=function(l){l=l.target;const d=this.M;d&&qn(l)==3?d.j():this.Y(l)},hs.prototype.Y=function(l){try{if(l==this.g)e:{const _t=qn(this.g);var d=this.g.Ba();const wr=this.g.Z();if(!(3>_t)&&(_t!=3||this.g&&(this.h.h||this.g.oa()||Wf(this.g)))){this.J||_t!=4||d==7||(d==8||0>=wr?Ei(3):Ei(2)),Oc(this);var p=this.g.Z();this.X=p;t:if(Rf(this)){var _=Wf(this.g);l="";var N=_.length,O=qn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Hs(this),Ii(this);var z="";break t}this.h.i=new a.TextDecoder}for(d=0;d<N;d++)this.h.h=!0,l+=this.h.i.decode(_[d],{stream:!(O&&d==N-1)});_.length=0,this.h.g+=l,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=p==200,bI(this.i,this.u,this.A,this.l,this.R,_t,p),this.o){if(this.T&&!this.K){t:{if(this.g){var De,lt=this.g;if((De=lt.g?lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(De)){var Ce=De;break t}}Ce=null}if(p=Ce)vr(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Dc(this,p);else{this.o=!1,this.s=3,Pt(12),Hs(this),Ii(this);break e}}if(this.P){p=!0;let rn;for(;!this.J&&this.C<z.length;)if(rn=kI(this,z),rn==kc){_t==4&&(this.s=4,Pt(14),p=!1),vr(this.i,this.l,null,"[Incomplete Response]");break}else if(rn==If){this.s=4,Pt(15),vr(this.i,this.l,z,"[Invalid Chunk]"),p=!1;break}else vr(this.i,this.l,rn,null),Dc(this,rn);if(Rf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_t!=4||z.length!=0||this.h.h||(this.s=1,Pt(16),p=!1),this.o=this.o&&p,!p)vr(this.i,this.l,z,"[Invalid Chunked Response]"),Hs(this),Ii(this);else if(0<z.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Uc(mt),mt.M=!0,Pt(11))}}else vr(this.i,this.l,z,null),Dc(this,z);_t==4&&Hs(this),this.o&&!this.J&&(_t==4?Xf(this.j,this):(this.o=!1,ra(this)))}else KI(this.g),p==400&&0<z.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),Hs(this),Ii(this)}}}catch{}finally{}};function Rf(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function kI(l,d){var p=l.C,_=d.indexOf(`
`,p);return _==-1?kc:(p=Number(d.substring(p,_)),isNaN(p)?If:(_+=1,_+p>d.length?kc:(d=d.slice(_,_+p),l.C=_+p,d)))}hs.prototype.cancel=function(){this.J=!0,Hs(this)};function ra(l){l.S=Date.now()+l.I,Af(l,l.I)}function Af(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=vi(g(l.ba,l),d)}function Oc(l){l.B&&(a.clearTimeout(l.B),l.B=null)}hs.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(SI(this.i,this.A),this.L!=2&&(Ei(),Pt(17)),Hs(this),this.s=2,Ii(this)):Af(this,this.S-l)};function Ii(l){l.j.G==0||l.J||Xf(l.j,l)}function Hs(l){Oc(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,_i(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function Dc(l,d){try{var p=l.j;if(p.G!=0&&(p.g==l||xc(p.h,l))){if(!l.K&&xc(p.h,l)&&p.G==3){try{var _=p.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var N=_;if(N[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)fa(p),ha(p);else break e;Fc(p),Pt(18)}}else p.za=N[1],0<p.za-p.T&&37500>N[2]&&p.F&&p.v==0&&!p.C&&(p.C=vi(g(p.Za,p),6e3));if(1>=Sf(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Ks(p,11)}else if((l.K||p.g==l)&&fa(p),!j(d))for(N=p.Da.g.parse(d),d=0;d<N.length;d++){let Ce=N[d];if(p.T=Ce[0],Ce=Ce[1],p.G==2)if(Ce[0]=="c"){p.K=Ce[1],p.ia=Ce[2];const mt=Ce[3];mt!=null&&(p.la=mt,p.j.info("VER="+p.la));const _t=Ce[4];_t!=null&&(p.Aa=_t,p.j.info("SVER="+p.Aa));const wr=Ce[5];wr!=null&&typeof wr=="number"&&0<wr&&(_=1.5*wr,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const rn=l.g;if(rn){const ga=rn.g?rn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ga){var O=_.h;O.g||ga.indexOf("spdy")==-1&&ga.indexOf("quic")==-1&&ga.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Mc(O,O.h),O.h=null))}if(_.D){const Bc=rn.g?rn.g.getResponseHeader("X-HTTP-Session-Id"):null;Bc&&(_.ya=Bc,Le(_.I,_.D,Bc))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var z=l;if(_.qa=ep(_,_.J?_.ia:null,_.W),z.K){Pf(_.h,z);var De=z,lt=_.L;lt&&(De.I=lt),De.B&&(Oc(De),ra(De)),_.g=z}else Qf(_);0<p.i.length&&da(p)}else Ce[0]!="stop"&&Ce[0]!="close"||Ks(p,7);else p.G==3&&(Ce[0]=="stop"||Ce[0]=="close"?Ce[0]=="stop"?Ks(p,7):Lc(p):Ce[0]!="noop"&&p.l&&p.l.ta(Ce),p.v=0)}}Ei(4)}catch{}}var NI=class{constructor(l,d){this.g=l,this.map=d}};function Cf(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function bf(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Sf(l){return l.h?1:l.g?l.g.size:0}function xc(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function Mc(l,d){l.g?l.g.add(d):l.h=d}function Pf(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}Cf.prototype.cancel=function(){if(this.i=kf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function kf(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const p of l.g.values())d=d.concat(p.D);return d}return C(l.i)}function OI(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var d=[],p=l.length,_=0;_<p;_++)d.push(l[_]);return d}d=[],p=0;for(_ in l)d[p++]=l[_];return d}function DI(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var d=[];l=l.length;for(var p=0;p<l;p++)d.push(p);return d}d=[],p=0;for(const _ in l)d[p++]=_;return d}}}function Nf(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var p=DI(l),_=OI(l),N=_.length,O=0;O<N;O++)d.call(void 0,_[O],p&&p[O],l)}var Of=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xI(l,d){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var _=l[p].indexOf("="),N=null;if(0<=_){var O=l[p].substring(0,_);N=l[p].substring(_+1)}else O=l[p];d(O,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function zs(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof zs){this.h=l.h,ia(this,l.j),this.o=l.o,this.g=l.g,oa(this,l.s),this.l=l.l;var d=l.i,p=new Ai;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),Df(this,p),this.m=l.m}else l&&(d=String(l).match(Of))?(this.h=!1,ia(this,d[1]||"",!0),this.o=wi(d[2]||""),this.g=wi(d[3]||"",!0),oa(this,d[4]),this.l=wi(d[5]||"",!0),Df(this,d[6]||"",!0),this.m=wi(d[7]||"")):(this.h=!1,this.i=new Ai(null,this.h))}zs.prototype.toString=function(){var l=[],d=this.j;d&&l.push(Ri(d,xf,!0),":");var p=this.g;return(p||d=="file")&&(l.push("//"),(d=this.o)&&l.push(Ri(d,xf,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(Ri(p,p.charAt(0)=="/"?LI:VI,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",Ri(p,UI)),l.join("")};function jn(l){return new zs(l)}function ia(l,d,p){l.j=p?wi(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function oa(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function Df(l,d,p){d instanceof Ai?(l.i=d,BI(l.i,l.h)):(p||(d=Ri(d,FI)),l.i=new Ai(d,l.h))}function Le(l,d,p){l.i.set(d,p)}function aa(l){return Le(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function wi(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Ri(l,d,p){return typeof l=="string"?(l=encodeURI(l).replace(d,MI),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function MI(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var xf=/[#\/\?@]/g,VI=/[#\?:]/g,LI=/[#\?]/g,FI=/[#\?@]/g,UI=/#/g;function Ai(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function ds(l){l.g||(l.g=new Map,l.h=0,l.i&&xI(l.i,function(d,p){l.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}n=Ai.prototype,n.add=function(l,d){ds(this),this.i=null,l=Tr(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(d),this.h+=1,this};function Mf(l,d){ds(l),d=Tr(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function Vf(l,d){return ds(l),d=Tr(l,d),l.g.has(d)}n.forEach=function(l,d){ds(this),this.g.forEach(function(p,_){p.forEach(function(N){l.call(d,N,_,this)},this)},this)},n.na=function(){ds(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let _=0;_<d.length;_++){const N=l[_];for(let O=0;O<N.length;O++)p.push(d[_])}return p},n.V=function(l){ds(this);let d=[];if(typeof l=="string")Vf(this,l)&&(d=d.concat(this.g.get(Tr(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)d=d.concat(l[p])}return d},n.set=function(l,d){return ds(this),this.i=null,l=Tr(this,l),Vf(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},n.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function Lf(l,d,p){Mf(l,d),0<p.length&&(l.i=null,l.g.set(Tr(l,d),C(p)),l.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var _=d[p];const O=encodeURIComponent(String(_)),z=this.V(_);for(_=0;_<z.length;_++){var N=O;z[_]!==""&&(N+="="+encodeURIComponent(String(z[_]))),l.push(N)}}return this.i=l.join("&")};function Tr(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function BI(l,d){d&&!l.j&&(ds(l),l.i=null,l.g.forEach(function(p,_){var N=_.toLowerCase();_!=N&&(Mf(this,_),Lf(this,N,p))},l)),l.j=d}function $I(l,d){const p=new Ti;if(a.Image){const _=new Image;_.onload=m(fs,p,"TestLoadImage: loaded",!0,d,_),_.onerror=m(fs,p,"TestLoadImage: error",!1,d,_),_.onabort=m(fs,p,"TestLoadImage: abort",!1,d,_),_.ontimeout=m(fs,p,"TestLoadImage: timeout",!1,d,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else d(!1)}function jI(l,d){const p=new Ti,_=new AbortController,N=setTimeout(()=>{_.abort(),fs(p,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:_.signal}).then(O=>{clearTimeout(N),O.ok?fs(p,"TestPingServer: ok",!0,d):fs(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(N),fs(p,"TestPingServer: error",!1,d)})}function fs(l,d,p,_,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),_(p)}catch{}}function qI(){this.g=new ea}function WI(l,d,p){const _=p||"";try{Nf(l,function(N,O){let z=N;u(N)&&(z=at(N)),d.push(_+O+"="+encodeURIComponent(z))})}catch(N){throw d.push(_+"type="+encodeURIComponent("_badmap")),N}}function la(l){this.l=l.Ub||null,this.j=l.eb||!1}v(la,Cc),la.prototype.g=function(){return new ca(this.l,this.j)},la.prototype.i=function(l){return function(){return l}}({});function ca(l,d){oe.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}v(ca,oe),n=ca.prototype,n.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,bi(this)},n.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ci(this)),this.readyState=0},n.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,bi(this)),this.g&&(this.readyState=3,bi(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ff(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ff(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}n.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?Ci(this):bi(this),this.readyState==3&&Ff(this)}},n.Ra=function(l){this.g&&(this.response=this.responseText=l,Ci(this))},n.Qa=function(l){this.g&&(this.response=l,Ci(this))},n.ga=function(){this.g&&Ci(this)};function Ci(l){l.readyState=4,l.l=null,l.j=null,l.v=null,bi(l)}n.setRequestHeader=function(l,d){this.u.append(l,d)},n.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=d.next();return l.join(`\r
`)};function bi(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(ca.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Uf(l){let d="";return re(l,function(p,_){d+=_,d+=":",d+=p,d+=`\r
`}),d}function Vc(l,d,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=Uf(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):Le(l,d,p))}function He(l){oe.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}v(He,oe);var HI=/^https?$/i,zI=["POST","PUT"];n=He.prototype,n.Ha=function(l){this.J=l},n.ea=function(l,d,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pc.g(),this.v=this.o?pf(this.o):pf(Pc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(O){Bf(this,O);return}if(l=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var N in _)p.set(N,_[N]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const O of _.keys())p.set(O,_.get(O));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(O=>O.toLowerCase()=="content-type"),N=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(zI,d,void 0))||_||N||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,z]of p)this.g.setRequestHeader(O,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{qf(this),this.u=!0,this.g.send(l),this.u=!1}catch(O){Bf(this,O)}};function Bf(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,$f(l),ua(l)}function $f(l){l.A||(l.A=!0,pe(l,"complete"),pe(l,"error"))}n.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,pe(this,"complete"),pe(this,"abort"),ua(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ua(this,!0)),He.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?jf(this):this.bb())},n.bb=function(){jf(this)};function jf(l){if(l.h&&typeof o<"u"&&(!l.v[1]||qn(l)!=4||l.Z()!=2)){if(l.u&&qn(l)==4)pt(l.Ea,0,l);else if(pe(l,"readystatechange"),qn(l)==4){l.h=!1;try{const z=l.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var _;if(_=z===0){var N=String(l.D).match(Of)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),_=!HI.test(N?N.toLowerCase():"")}p=_}if(p)pe(l,"complete"),pe(l,"success");else{l.m=6;try{var O=2<qn(l)?l.g.statusText:""}catch{O=""}l.l=O+" ["+l.Z()+"]",$f(l)}}finally{ua(l)}}}}function ua(l,d){if(l.g){qf(l);const p=l.g,_=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||pe(l,"ready");try{p.onreadystatechange=_}catch{}}}function qf(l){l.I&&(a.clearTimeout(l.I),l.I=null)}n.isActive=function(){return!!this.g};function qn(l){return l.g?l.g.readyState:0}n.Z=function(){try{return 2<qn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),Xt(d)}};function Wf(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function KI(l){const d={};l=(l.g&&2<=qn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(j(l[_]))continue;var p=b(l[_]);const N=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const O=d[N]||[];d[N]=O,O.push(p)}R(d,function(_){return _.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Si(l,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||d}function Hf(l){this.Aa=0,this.i=[],this.j=new Ti,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Si("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Si("baseRetryDelayMs",5e3,l),this.cb=Si("retryDelaySeedMs",1e4,l),this.Wa=Si("forwardChannelMaxRetries",2,l),this.wa=Si("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Cf(l&&l.concurrentRequestLimit),this.Da=new qI,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Hf.prototype,n.la=8,n.G=1,n.connect=function(l,d,p,_){Pt(0),this.W=l,this.H=d||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=ep(this,null,this.W),da(this)};function Lc(l){if(zf(l),l.G==3){var d=l.U++,p=jn(l.I);if(Le(p,"SID",l.K),Le(p,"RID",d),Le(p,"TYPE","terminate"),Pi(l,p),d=new hs(l,l.j,d),d.L=2,d.v=aa(jn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=tp(d.j,null),d.g.ea(d.v)),d.F=Date.now(),ra(d)}Zf(l)}function ha(l){l.g&&(Uc(l),l.g.cancel(),l.g=null)}function zf(l){ha(l),l.u&&(a.clearTimeout(l.u),l.u=null),fa(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function da(l){if(!bf(l.h)&&!l.s){l.s=!0;var d=l.Ga;ve||sn(),me||(ve(),me=!0),Ft.add(d,l),l.B=0}}function GI(l,d){return Sf(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=vi(g(l.Ga,l,d),Jf(l,l.B)),l.B++,!0)}n.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const N=new hs(this,this.j,l);let O=this.o;if(this.S&&(O?(O=y(O),A(O,this.S)):O=this.S),this.m!==null||this.O||(N.H=O,O=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=Gf(this,N,d),p=jn(this.I),Le(p,"RID",l),Le(p,"CVER",22),this.D&&Le(p,"X-HTTP-Session-Id",this.D),Pi(this,p),O&&(this.O?d="headers="+encodeURIComponent(String(Uf(O)))+"&"+d:this.m&&Vc(p,this.m,O)),Mc(this.h,N),this.Ua&&Le(p,"TYPE","init"),this.P?(Le(p,"$req",d),Le(p,"SID","null"),N.T=!0,Nc(N,p,null)):Nc(N,p,d),this.G=2}}else this.G==3&&(l?Kf(this,l):this.i.length==0||bf(this.h)||Kf(this))};function Kf(l,d){var p;d?p=d.l:p=l.U++;const _=jn(l.I);Le(_,"SID",l.K),Le(_,"RID",p),Le(_,"AID",l.T),Pi(l,_),l.m&&l.o&&Vc(_,l.m,l.o),p=new hs(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),d&&(l.i=d.D.concat(l.i)),d=Gf(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Mc(l.h,p),Nc(p,_,d)}function Pi(l,d){l.H&&re(l.H,function(p,_){Le(d,_,p)}),l.l&&Nf({},function(p,_){Le(d,_,p)})}function Gf(l,d,p){p=Math.min(l.i.length,p);var _=l.l?g(l.l.Na,l.l,l):null;e:{var N=l.i;let O=-1;for(;;){const z=["count="+p];O==-1?0<p?(O=N[0].g,z.push("ofs="+O)):O=0:z.push("ofs="+O);let De=!0;for(let lt=0;lt<p;lt++){let Ce=N[lt].g;const mt=N[lt].map;if(Ce-=O,0>Ce)O=Math.max(0,N[lt].g-100),De=!1;else try{WI(mt,z,"req"+Ce+"_")}catch{_&&_(mt)}}if(De){_=z.join("&");break e}}}return l=l.i.splice(0,p),d.D=l,_}function Qf(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;ve||sn(),me||(ve(),me=!0),Ft.add(d,l),l.v=0}}function Fc(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=vi(g(l.Fa,l),Jf(l,l.v)),l.v++,!0)}n.Fa=function(){if(this.u=null,Yf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=vi(g(this.ab,this),l)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pt(10),ha(this),Yf(this))};function Uc(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Yf(l){l.g=new hs(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=jn(l.qa);Le(d,"RID","rpc"),Le(d,"SID",l.K),Le(d,"AID",l.T),Le(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&Le(d,"TO",l.ja),Le(d,"TYPE","xmlhttp"),Pi(l,d),l.m&&l.o&&Vc(d,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=aa(jn(d)),p.m=null,p.P=!0,wf(p,l)}n.Za=function(){this.C!=null&&(this.C=null,ha(this),Fc(this),Pt(19))};function fa(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Xf(l,d){var p=null;if(l.g==d){fa(l),Uc(l),l.g=null;var _=2}else if(xc(l.h,d))p=d.D,Pf(l.h,d),_=1;else return;if(l.G!=0){if(d.o)if(_==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var N=l.B;_=ta(),pe(_,new Ef(_,p)),da(l)}else Qf(l);else if(N=d.s,N==3||N==0&&0<d.X||!(_==1&&GI(l,d)||_==2&&Fc(l)))switch(p&&0<p.length&&(d=l.h,d.i=d.i.concat(p)),N){case 1:Ks(l,5);break;case 4:Ks(l,10);break;case 3:Ks(l,6);break;default:Ks(l,2)}}}function Jf(l,d){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*d}function Ks(l,d){if(l.j.info("Error code "+d),d==2){var p=g(l.fb,l),_=l.Xa;const N=!_;_=new zs(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||ia(_,"https"),aa(_),N?$I(_.toString(),p):jI(_.toString(),p)}else Pt(2);l.G=0,l.l&&l.l.sa(d),Zf(l),zf(l)}n.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function Zf(l){if(l.G=0,l.ka=[],l.l){const d=kf(l.h);(d.length!=0||l.i.length!=0)&&(S(l.ka,d),S(l.ka,l.i),l.h.i.length=0,C(l.i),l.i.length=0),l.l.ra()}}function ep(l,d,p){var _=p instanceof zs?jn(p):new zs(p);if(_.g!="")d&&(_.g=d+"."+_.g),oa(_,_.s);else{var N=a.location;_=N.protocol,d=d?d+"."+N.hostname:N.hostname,N=+N.port;var O=new zs(null);_&&ia(O,_),d&&(O.g=d),N&&oa(O,N),p&&(O.l=p),_=O}return p=l.D,d=l.ya,p&&d&&Le(_,p,d),Le(_,"VER",l.la),Pi(l,_),_}function tp(l,d,p){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new He(new la({eb:p})):new He(l.pa),d.Ha(l.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function np(){}n=np.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function pa(){}pa.prototype.g=function(l,d){return new Ut(l,d)};function Ut(l,d){oe.call(this),this.g=new Hf(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!j(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!j(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new Ir(this)}v(Ut,oe),Ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ut.prototype.close=function(){Lc(this.g)},Ut.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=at(l),l=p);d.i.push(new NI(d.Ya++,l)),d.G==3&&da(d)},Ut.prototype.N=function(){this.g.l=null,delete this.j,Lc(this.g),delete this.g,Ut.aa.N.call(this)};function sp(l){bc.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const p in d){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}v(sp,bc);function rp(){Sc.call(this),this.status=1}v(rp,Sc);function Ir(l){this.g=l}v(Ir,np),Ir.prototype.ua=function(){pe(this.g,"a")},Ir.prototype.ta=function(l){pe(this.g,new sp(l))},Ir.prototype.sa=function(l){pe(this.g,new rp)},Ir.prototype.ra=function(){pe(this.g,"b")},pa.prototype.createWebChannel=pa.prototype.g,Ut.prototype.send=Ut.prototype.o,Ut.prototype.open=Ut.prototype.m,Ut.prototype.close=Ut.prototype.close,Wv=function(){return new pa},qv=function(){return ta()},jv=Ws,nh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},na.NO_ERROR=0,na.TIMEOUT=8,na.HTTP_ERROR=6,$a=na,vf.COMPLETE="complete",$v=vf,gf.EventType=yi,yi.OPEN="a",yi.CLOSE="b",yi.ERROR="c",yi.MESSAGE="d",oe.prototype.listen=oe.prototype.K,$i=gf,He.prototype.listenOnce=He.prototype.L,He.prototype.getLastError=He.prototype.Ka,He.prototype.getLastErrorCode=He.prototype.Ba,He.prototype.getStatus=He.prototype.Z,He.prototype.getResponseJson=He.prototype.Oa,He.prototype.getResponseText=He.prototype.oa,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Ha,Bv=He}).apply(typeof Aa<"u"?Aa:typeof self<"u"?self:typeof window<"u"?window:{});const em="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Et.UNAUTHENTICATED=new Et(null),Et.GOOGLE_CREDENTIALS=new Et("google-credentials-uid"),Et.FIRST_PARTY=new Et("first-party-uid"),Et.MOCK_USER=new Et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let di="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=new Do("@firebase/firestore");function Cr(){return hr.logLevel}function J(n,...e){if(hr.logLevel<=ge.DEBUG){const t=e.map(Cd);hr.debug(`Firestore (${di}): ${n}`,...t)}}function is(n,...e){if(hr.logLevel<=ge.ERROR){const t=e.map(Cd);hr.error(`Firestore (${di}): ${n}`,...t)}}function Yr(n,...e){if(hr.logLevel<=ge.WARN){const t=e.map(Cd);hr.warn(`Firestore (${di}): ${n}`,...t)}}function Cd(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(n="Unexpected state"){const e=`FIRESTORE (${di}) INTERNAL ASSERTION FAILED: `+n;throw is(e),new Error(e)}function Ne(n,e){n||ce()}function fe(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends Bn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Et.UNAUTHENTICATED))}shutdown(){}}class NN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ON{constructor(e){this.t=e,this.currentUser=Et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ne(this.o===void 0);let s=this.i;const r=c=>this.i!==s?(s=this.i,t(c)):Promise.resolve();let i=new ns;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ns,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ns)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ne(typeof s.accessToken=="string"),new Hv(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string"),new Et(e)}}class DN{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Et.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class xN{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new DN(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class MN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class VN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Ne(this.o===void 0);const s=i=>{i.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,J("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?r(i):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ne(typeof t.token=="string"),this.R=t.token,new MN(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LN(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=LN(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%e.length))}return s}}function ye(n,e){return n<e?-1:n>e?1:0}function Xr(n,e,t){return n.length===e.length&&n.every((s,r)=>t(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new Xe(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Z(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Z(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Z(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{static fromTimestamp(e){return new he(e)}static min(){return new he(new Xe(0,0))}static max(){return new he(new Xe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,t,s){t===void 0?t=0:t>e.length&&ce(),s===void 0?s=e.length-t:s>e.length-t&&ce(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ao.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ao?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=e.get(r),o=t.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Be extends Ao{construct(e,t,s){return new Be(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new Z(B.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(r=>r.length>0))}return new Be(t)}static emptyPath(){return new Be([])}}const FN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends Ao{construct(e,t,s){return new dt(e,t,s)}static isValidIdentifier(e){return FN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new dt(["__name__"])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new Z(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new Z(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Z(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new Z(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new dt(t)}static emptyPath(){return new dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(Be.fromString(e))}static fromName(e){return new se(Be.fromString(e).popFirst(5))}static empty(){return new se(Be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Be.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new Be(e.slice()))}}function UN(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=he.fromTimestamp(s===1e9?new Xe(t+1,0):new Xe(t,s));return new Os(r,se.empty(),e)}function BN(n){return new Os(n.readTime,n.key,-1)}class Os{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Os(he.min(),se.empty(),-1)}static max(){return new Os(he.max(),se.empty(),-1)}}function $N(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=se.comparator(n.documentKey,e.documentKey),t!==0?t:ye(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fi(n){if(n.code!==B.FAILED_PRECONDITION||n.message!==jN)throw n;J("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ce(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new U((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof U?t:U.resolve(t)}catch(t){return U.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):U.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):U.reject(t)}static resolve(e){return new U((t,s)=>{t(e)})}static reject(e){return new U((t,s)=>{s(e)})}static waitFor(e){return new U((t,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&t()},c=>s(c))}),o=!0,i===r&&t()})}static or(e){let t=U.resolve(!1);for(const s of e)t=t.next(r=>r?U.resolve(r):s());return t}static forEach(e,t){const s=[];return e.forEach((r,i)=>{s.push(t.call(this,r,i))}),this.waitFor(s)}static mapArray(e,t){return new U((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next(h=>{o[u]=h,++a,a===i&&s(o)},h=>r(h))}})}static doWhile(e,t){return new U((s,r)=>{const i=()=>{e()===!0?t().next(()=>{i()},r):s()};i()})}}function WN(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function pi(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ic.oe=-1;function oc(n){return n==null}function Il(n){return n===0&&1/n==-1/0}function HN(n){return typeof n=="number"&&Number.isInteger(n)&&!Il(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zN(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=tm(e)),e=KN(n.get(t),e);return tm(e)}function KN(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function tm(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function js(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Kv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,t){this.comparator=e,this.root=t||ct.EMPTY}insert(e,t){return new We(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(e){return new We(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ct.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ca(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ca(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ca(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ca(this.root,e,this.comparator,!0)}}class Ca{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ct{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??ct.RED,this.left=r??ct.EMPTY,this.right=i??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new ct(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return ct.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ce();const e=this.left.check();if(e!==this.right.check())throw ce();return e+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw ce()}get value(){throw ce()}get color(){throw ce()}get left(){throw ce()}get right(){throw ce()}copy(e,t,s,r,i){return this}insert(e,t,s){return new ct(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.comparator=e,this.data=new We(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new sm(this.data.getIterator())}getIteratorFrom(e){return new sm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new et(this.comparator);return t.data=e,t}}class sm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.fields=e,e.sort(dt.comparator)}static empty(){return new Wt([])}unionWith(e){let t=new et(dt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Wt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Xr(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Gv("Invalid base64 string: "+i):i}}(e);return new ft(t)}static fromUint8Array(e){const t=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new ft(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const GN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ds(n){if(Ne(!!n),typeof n=="string"){let e=0;const t=GN.exec(n);if(Ne(!!t),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ke(n.seconds),nanos:Ke(n.nanos)}}function Ke(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function xs(n){return typeof n=="string"?ft.fromBase64String(n):ft.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ac(n){const e=n.mapValue.fields.__previous_value__;return bd(e)?ac(e):e}function Co(n){const e=Ds(n.mapValue.fields.__local_write_time__.timestampValue);return new Xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e,t,s,r,i,o,a,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class bo{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new bo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof bo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ms(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?bd(n)?4:XN(n)?9007199254740991:YN(n)?10:11:ce()}function Fn(n,e){if(n===e)return!0;const t=Ms(n);if(t!==Ms(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Co(n).isEqual(Co(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=Ds(r.timestampValue),a=Ds(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return xs(r.bytesValue).isEqual(xs(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return Ke(r.geoPointValue.latitude)===Ke(i.geoPointValue.latitude)&&Ke(r.geoPointValue.longitude)===Ke(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ke(r.integerValue)===Ke(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=Ke(r.doubleValue),a=Ke(i.doubleValue);return o===a?Il(o)===Il(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return Xr(n.arrayValue.values||[],e.arrayValue.values||[],Fn);case 10:case 11:return function(r,i){const o=r.mapValue.fields||{},a=i.mapValue.fields||{};if(nm(o)!==nm(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Fn(o[c],a[c])))return!1;return!0}(n,e);default:return ce()}}function So(n,e){return(n.values||[]).find(t=>Fn(t,e))!==void 0}function Jr(n,e){if(n===e)return 0;const t=Ms(n),s=Ms(e);if(t!==s)return ye(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return ye(n.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ke(i.integerValue||i.doubleValue),c=Ke(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,e);case 3:return rm(n.timestampValue,e.timestampValue);case 4:return rm(Co(n),Co(e));case 5:return ye(n.stringValue,e.stringValue);case 6:return function(i,o){const a=xs(i),c=xs(o);return a.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const h=ye(a[u],c[u]);if(h!==0)return h}return ye(a.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ye(Ke(i.latitude),Ke(o.latitude));return a!==0?a:ye(Ke(i.longitude),Ke(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return im(n.arrayValue,e.arrayValue);case 10:return function(i,o){var a,c,u,h;const f=i.fields||{},g=o.fields||{},m=(a=f.value)===null||a===void 0?void 0:a.arrayValue,v=(c=g.value)===null||c===void 0?void 0:c.arrayValue,C=ye(((u=m==null?void 0:m.values)===null||u===void 0?void 0:u.length)||0,((h=v==null?void 0:v.values)===null||h===void 0?void 0:h.length)||0);return C!==0?C:im(m,v)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===ba.mapValue&&o===ba.mapValue)return 0;if(i===ba.mapValue)return 1;if(o===ba.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const g=ye(c[f],h[f]);if(g!==0)return g;const m=Jr(a[c[f]],u[h[f]]);if(m!==0)return m}return ye(c.length,h.length)}(n.mapValue,e.mapValue);default:throw ce()}}function rm(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ye(n,e);const t=Ds(n),s=Ds(e),r=ye(t.seconds,s.seconds);return r!==0?r:ye(t.nanos,s.nanos)}function im(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const i=Jr(t[r],s[r]);if(i)return i}return ye(t.length,s.length)}function Zr(n){return sh(n)}function sh(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=Ds(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return xs(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return se.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",r=!0;for(const i of t.values||[])r?r=!1:s+=",",s+=sh(i);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${sh(t.fields[o])}`;return r+"}"}(n.mapValue):ce()}function ja(n){switch(Ms(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ac(n);return e?16+ja(e):16;case 5:return 2*n.stringValue.length;case 6:return xs(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((r,i)=>r+ja(i),0)}(n.arrayValue);case 10:case 11:return function(s){let r=0;return js(s.fields,(i,o)=>{r+=i.length+ja(o)}),r}(n.mapValue);default:throw ce()}}function om(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function rh(n){return!!n&&"integerValue"in n}function Sd(n){return!!n&&"arrayValue"in n}function am(n){return!!n&&"nullValue"in n}function lm(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function qa(n){return!!n&&"mapValue"in n}function YN(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function ro(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return js(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=ro(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ro(n.arrayValue.values[t]);return e}return Object.assign({},n)}function XN(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.value=e}static empty(){return new Vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!qa(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ro(t)}setAll(e){let t=dt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,s,r),s={},r=[],t=a.popLast()}o?s[a.lastSegment()]=ro(o):r.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());qa(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Fn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];qa(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){js(t,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Vt(ro(this.value))}}function Qv(n){const e=[];return js(n.fields,(t,s)=>{const r=new dt([t]);if(qa(s)){const i=Qv(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Wt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,t,s,r,i,o,a){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Rt(e,0,he.min(),he.min(),he.min(),Vt.empty(),0)}static newFoundDocument(e,t,s,r){return new Rt(e,1,t,he.min(),s,r,0)}static newNoDocument(e,t){return new Rt(e,2,t,he.min(),he.min(),Vt.empty(),0)}static newUnknownDocument(e,t){return new Rt(e,3,t,he.min(),he.min(),Vt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,t){this.position=e,this.inclusive=t}}function cm(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],o=n.position[r];if(i.field.isKeyField()?s=se.comparator(se.fromName(o.referenceValue),t.key):s=Jr(o,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function um(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Fn(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,t="asc"){this.field=e,this.dir=t}}function JN(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{}class Ye extends Yv{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new eO(e,t,s):t==="array-contains"?new sO(e,s):t==="in"?new rO(e,s):t==="not-in"?new iO(e,s):t==="array-contains-any"?new oO(e,s):new Ye(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new tO(e,s):new nO(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Jr(t,this.value)):t!==null&&Ms(this.value)===Ms(t)&&this.matchesComparison(Jr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class mn extends Yv{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new mn(e,t)}matches(e){return Xv(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Xv(n){return n.op==="and"}function Jv(n){return ZN(n)&&Xv(n)}function ZN(n){for(const e of n.filters)if(e instanceof mn)return!1;return!0}function ih(n){if(n instanceof Ye)return n.field.canonicalString()+n.op.toString()+Zr(n.value);if(Jv(n))return n.filters.map(e=>ih(e)).join(",");{const e=n.filters.map(t=>ih(t)).join(",");return`${n.op}(${e})`}}function Zv(n,e){return n instanceof Ye?function(s,r){return r instanceof Ye&&s.op===r.op&&s.field.isEqual(r.field)&&Fn(s.value,r.value)}(n,e):n instanceof mn?function(s,r){return r instanceof mn&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,a)=>i&&Zv(o,r.filters[a]),!0):!1}(n,e):void ce()}function eT(n){return n instanceof Ye?function(t){return`${t.field.canonicalString()} ${t.op} ${Zr(t.value)}`}(n):n instanceof mn?function(t){return t.op.toString()+" {"+t.getFilters().map(eT).join(" ,")+"}"}(n):"Filter"}class eO extends Ye{constructor(e,t,s){super(e,t,s),this.key=se.fromName(s.referenceValue)}matches(e){const t=se.comparator(e.key,this.key);return this.matchesComparison(t)}}class tO extends Ye{constructor(e,t){super(e,"in",t),this.keys=tT("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class nO extends Ye{constructor(e,t){super(e,"not-in",t),this.keys=tT("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function tT(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>se.fromName(s.referenceValue))}class sO extends Ye{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Sd(t)&&So(t.arrayValue,this.value)}}class rO extends Ye{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&So(this.value.arrayValue,t)}}class iO extends Ye{constructor(e,t){super(e,"not-in",t)}matches(e){if(So(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!So(this.value.arrayValue,t)}}class oO extends Ye{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Sd(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>So(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e,t=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function hm(n,e=null,t=[],s=[],r=null,i=null,o=null){return new aO(n,e,t,s,r,i,o)}function Pd(n){const e=fe(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>ih(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),oc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Zr(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Zr(s)).join(",")),e.ue=t}return e.ue}function kd(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!JN(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Zv(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!um(n.startAt,e.startAt)&&um(n.endAt,e.endAt)}function oh(n){return se.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,t=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function lO(n,e,t,s,r,i,o,a){return new Go(n,e,t,s,r,i,o,a)}function lc(n){return new Go(n)}function dm(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function nT(n){return n.collectionGroup!==null}function io(n){const e=fe(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new et(dt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Rl(i,s))}),t.has(dt.keyField().canonicalString())||e.ce.push(new Rl(dt.keyField(),s))}return e.ce}function On(n){const e=fe(n);return e.le||(e.le=cO(e,io(n))),e.le}function cO(n,e){if(n.limitType==="F")return hm(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new Rl(r.field,i)});const t=n.endAt?new wl(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new wl(n.startAt.position,n.startAt.inclusive):null;return hm(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function ah(n,e){const t=n.filters.concat([e]);return new Go(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function lh(n,e,t){return new Go(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function cc(n,e){return kd(On(n),On(e))&&n.limitType===e.limitType}function sT(n){return`${Pd(On(n))}|lt:${n.limitType}`}function br(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(r=>eT(r)).join(", ")}]`),oc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(r=>Zr(r)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(r=>Zr(r)).join(",")),`Target(${s})`}(On(n))}; limitType=${n.limitType})`}function uc(n,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):se.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(n,e)&&function(s,r){for(const i of io(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(n,e)&&function(s,r){return!(s.startAt&&!function(o,a,c){const u=cm(o,a,c);return o.inclusive?u<=0:u<0}(s.startAt,io(s),r)||s.endAt&&!function(o,a,c){const u=cm(o,a,c);return o.inclusive?u>=0:u>0}(s.endAt,io(s),r))}(n,e)}function uO(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function rT(n){return(e,t)=>{let s=!1;for(const r of io(n)){const i=hO(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function hO(n,e,t){const s=n.field.isKeyField()?se.comparator(e.key,t.key):function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?Jr(c,u):ce()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return ce()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){js(this.inner,(t,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Kv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO=new We(se.comparator);function os(){return dO}const iT=new We(se.comparator);function ji(...n){let e=iT;for(const t of n)e=e.insert(t.key,t);return e}function oT(n){let e=iT;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function tr(){return oo()}function aT(){return oo()}function oo(){return new _r(n=>n.toString(),(n,e)=>n.isEqual(e))}const fO=new We(se.comparator),pO=new et(se.comparator);function _e(...n){let e=pO;for(const t of n)e=e.add(t);return e}const gO=new et(ye);function mO(){return gO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Il(e)?"-0":e}}function lT(n){return{integerValue:""+n}}function _O(n,e){return HN(e)?lT(e):Nd(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(){this._=void 0}}function yO(n,e,t){return n instanceof Al?function(r,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&bd(i)&&(i=ac(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):n instanceof Po?uT(n,e):n instanceof ko?hT(n,e):function(r,i){const o=cT(r,i),a=fm(o)+fm(r.Pe);return rh(o)&&rh(r.Pe)?lT(a):Nd(r.serializer,a)}(n,e)}function EO(n,e,t){return n instanceof Po?uT(n,e):n instanceof ko?hT(n,e):t}function cT(n,e){return n instanceof Cl?function(s){return rh(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class Al extends hc{}class Po extends hc{constructor(e){super(),this.elements=e}}function uT(n,e){const t=dT(e);for(const s of n.elements)t.some(r=>Fn(r,s))||t.push(s);return{arrayValue:{values:t}}}class ko extends hc{constructor(e){super(),this.elements=e}}function hT(n,e){let t=dT(e);for(const s of n.elements)t=t.filter(r=>!Fn(r,s));return{arrayValue:{values:t}}}class Cl extends hc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function fm(n){return Ke(n.integerValue||n.doubleValue)}function dT(n){return Sd(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function vO(n,e){return n.field.isEqual(e.field)&&function(s,r){return s instanceof Po&&r instanceof Po||s instanceof ko&&r instanceof ko?Xr(s.elements,r.elements,Fn):s instanceof Cl&&r instanceof Cl?Fn(s.Pe,r.Pe):s instanceof Al&&r instanceof Al}(n.transform,e.transform)}class TO{constructor(e,t){this.version=e,this.transformResults=t}}class fn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new fn}static exists(e){return new fn(void 0,e)}static updateTime(e){return new fn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wa(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class dc{}function fT(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Od(n.key,fn.none()):new Qo(n.key,n.data,fn.none());{const t=n.data,s=Vt.empty();let r=new et(dt.comparator);for(let i of e.fields)if(!r.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new qs(n.key,s,new Wt(r.toArray()),fn.none())}}function IO(n,e,t){n instanceof Qo?function(r,i,o){const a=r.value.clone(),c=gm(r.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof qs?function(r,i,o){if(!Wa(r.precondition,i))return void i.convertToUnknownDocument(o.version);const a=gm(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(pT(r)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function ao(n,e,t,s){return n instanceof Qo?function(i,o,a,c){if(!Wa(i.precondition,o))return a;const u=i.value.clone(),h=mm(i.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,s):n instanceof qs?function(i,o,a,c){if(!Wa(i.precondition,o))return a;const u=mm(i.fieldTransforms,c,o),h=o.data;return h.setAll(pT(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(n,e,t,s):function(i,o,a){return Wa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function wO(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=cT(s.transform,r||null);i!=null&&(t===null&&(t=Vt.empty()),t.set(s.field,i))}return t||null}function pm(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Xr(s,r,(i,o)=>vO(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Qo extends dc{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class qs extends dc{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function pT(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function gm(n,e,t){const s=new Map;Ne(n.length===t.length);for(let r=0;r<t.length;r++){const i=n[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,EO(o,a,t[r]))}return s}function mm(n,e,t){const s=new Map;for(const r of n){const i=r.transform,o=t.data.field(r.field);s.set(r.field,yO(i,o,e))}return s}class Od extends dc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class RO extends dc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&IO(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ao(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ao(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=aT();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(r.key)?null:a;const c=fT(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(he.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),_e())}isEqual(e){return this.batchId===e.batchId&&Xr(this.mutations,e.mutations,(t,s)=>pm(t,s))&&Xr(this.baseMutations,e.baseMutations,(t,s)=>pm(t,s))}}class Dd{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){Ne(e.mutations.length===s.length);let r=function(){return fO}();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Dd(e,t,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qe,Ie;function SO(n){switch(n){default:return ce();case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0}}function gT(n){if(n===void 0)return is("GRPC error has no .code"),B.UNKNOWN;switch(n){case Qe.OK:return B.OK;case Qe.CANCELLED:return B.CANCELLED;case Qe.UNKNOWN:return B.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return B.INTERNAL;case Qe.UNAVAILABLE:return B.UNAVAILABLE;case Qe.UNAUTHENTICATED:return B.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case Qe.NOT_FOUND:return B.NOT_FOUND;case Qe.ALREADY_EXISTS:return B.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return B.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case Qe.ABORTED:return B.ABORTED;case Qe.OUT_OF_RANGE:return B.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return B.UNIMPLEMENTED;case Qe.DATA_LOSS:return B.DATA_LOSS;default:return ce()}}(Ie=Qe||(Qe={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PO(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kO=new sr([4294967295,4294967295],0);function _m(n){const e=PO().encode(n),t=new Uv;return t.update(e),new Uint8Array(t.digest())}function ym(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new sr([t,s],0),new sr([r,i],0)]}class xd{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new qi(`Invalid padding: ${t}`);if(s<0)throw new qi(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new qi(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new qi(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=sr.fromNumber(this.Te)}Ee(e,t,s){let r=e.add(t.multiply(sr.fromNumber(s)));return r.compare(kO)===1&&(r=new sr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=_m(e),[s,r]=ym(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(s,r,i);if(!this.de(o))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new xd(i,r,t);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const t=_m(e),[s,r]=ym(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(s,r,i);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class qi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,Yo.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new fc(he.min(),r,new We(ye),os(),_e())}}class Yo{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Yo(s,t,_e(),_e(),_e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,t,s,r){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=r}}class mT{constructor(e,t){this.targetId=e,this.me=t}}class _T{constructor(e,t,s=ft.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class Em{constructor(){this.fe=0,this.ge=vm(),this.pe=ft.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=_e(),t=_e(),s=_e();return this.ge.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:ce()}}),new Yo(this.pe,this.ye,e,t,s)}Ce(){this.we=!1,this.ge=vm()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ne(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class NO{constructor(e){this.Le=e,this.Be=new Map,this.ke=os(),this.qe=Sa(),this.Qe=Sa(),this.Ke=new We(ye)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const s=this.ze(t);switch(e.state){case 0:this.je(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.je(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),s.De(e.resumeToken));break;default:ce()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((s,r)=>{this.je(r)&&t(r)})}Je(e){const t=e.targetId,s=e.me.count,r=this.Ye(t);if(r){const i=r.target;if(oh(i))if(s===0){const o=new se(i.path);this.We(t,o,Rt.newNoDocument(o,he.min()))}else Ne(s===1);else{const o=this.Ze(t);if(o!==s){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,u)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=t;let o,a;try{o=xs(s).toUint8Array()}catch(c){if(c instanceof Gv)return Yr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new xd(o,r,i)}catch(c){return Yr(c instanceof qi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,t,s){return t.me.count===s-this.rt(e,t.targetId)?0:2}rt(e,t){const s=this.Le.getRemoteKeysForTarget(t);let r=0;return s.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(t,i,null),r++)}),r}it(e){const t=new Map;this.Be.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&oh(a.target)){const c=new se(a.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,Rt.newNoDocument(c,e))}i.be&&(t.set(o,i.ve()),i.Ce())}});let s=_e();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const r=new fc(e,t,this.Ke,this.ke,s);return this.ke=os(),this.qe=Sa(),this.Qe=Sa(),this.Ke=new We(ye),r}Ue(e,t){if(!this.je(e))return;const s=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,s){if(!this.je(e))return;const r=this.ze(e);this.ot(e,t)?r.Fe(t,1):r.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new Em,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new et(ye),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new et(ye),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||J("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Em),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Sa(){return new We(se.comparator)}function vm(){return new We(se.comparator)}const OO={asc:"ASCENDING",desc:"DESCENDING"},DO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xO={and:"AND",or:"OR"};class MO{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ch(n,e){return n.useProto3Json||oc(e)?e:{value:e}}function bl(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yT(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function VO(n,e){return bl(n,e.toTimestamp())}function Dn(n){return Ne(!!n),he.fromTimestamp(function(t){const s=Ds(t);return new Xe(s.seconds,s.nanos)}(n))}function Md(n,e){return uh(n,e).canonicalString()}function uh(n,e){const t=function(r){return new Be(["projects",r.projectId,"databases",r.database])}(n).child("documents");return e===void 0?t:t.child(e)}function ET(n){const e=Be.fromString(n);return Ne(RT(e)),e}function hh(n,e){return Md(n.databaseId,e.path)}function uu(n,e){const t=ET(e);if(t.get(1)!==n.databaseId.projectId)throw new Z(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new Z(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new se(TT(t))}function vT(n,e){return Md(n.databaseId,e)}function LO(n){const e=ET(n);return e.length===4?Be.emptyPath():TT(e)}function dh(n){return new Be(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function TT(n){return Ne(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Tm(n,e,t){return{name:hh(n,e),fields:t.value.mapValue.fields}}function FO(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ce()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(Ne(h===void 0||typeof h=="string"),ft.fromBase64String(h||"")):(Ne(h===void 0||h instanceof Buffer||h instanceof Uint8Array),ft.fromUint8Array(h||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?B.UNKNOWN:gT(u.code);return new Z(h,u.message||"")}(o);t=new _T(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=uu(n,s.document.name),i=Dn(s.document.updateTime),o=s.document.createTime?Dn(s.document.createTime):he.min(),a=new Vt({mapValue:{fields:s.document.fields}}),c=Rt.newFoundDocument(r,i,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];t=new Ha(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=uu(n,s.document),i=s.readTime?Dn(s.readTime):he.min(),o=Rt.newNoDocument(r,i),a=s.removedTargetIds||[];t=new Ha([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=uu(n,s.document),i=s.removedTargetIds||[];t=new Ha([],i,r,null)}else{if(!("filter"in e))return ce();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new bO(r,i),a=s.targetId;t=new mT(a,o)}}return t}function UO(n,e){let t;if(e instanceof Qo)t={update:Tm(n,e.key,e.value)};else if(e instanceof Od)t={delete:hh(n,e.key)};else if(e instanceof qs)t={update:Tm(n,e.key,e.data),updateMask:GO(e.fieldMask)};else{if(!(e instanceof RO))return ce();t={verify:hh(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(i,o){const a=o.transform;if(a instanceof Al)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Po)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ko)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Cl)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ce()}(0,s))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:VO(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ce()}(n,e.precondition)),t}function BO(n,e){return n&&n.length>0?(Ne(e!==void 0),n.map(t=>function(r,i){let o=r.updateTime?Dn(r.updateTime):Dn(i);return o.isEqual(he.min())&&(o=Dn(i)),new TO(o,r.transformResults||[])}(t,e))):[]}function $O(n,e){return{documents:[vT(n,e.path)]}}function jO(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=vT(n,r);const i=function(u){if(u.length!==0)return wT(mn.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(g){return{field:Sr(g.field),direction:HO(g.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=ch(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:t,parent:r}}function qO(n){let e=LO(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){Ne(s===1);const h=t.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=function(f){const g=IT(f);return g instanceof mn&&Jv(g)?g.getFilters():[g]}(t.where));let o=[];t.orderBy&&(o=function(f){return f.map(g=>function(v){return new Rl(Pr(v.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(g))}(t.orderBy));let a=null;t.limit&&(a=function(f){let g;return g=typeof f=="object"?f.value:f,oc(g)?null:g}(t.limit));let c=null;t.startAt&&(c=function(f){const g=!!f.before,m=f.values||[];return new wl(m,g)}(t.startAt));let u=null;return t.endAt&&(u=function(f){const g=!f.before,m=f.values||[];return new wl(m,g)}(t.endAt)),lO(e,r,o,i,a,"F",c,u)}function WO(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function IT(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Pr(t.unaryFilter.field);return Ye.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Pr(t.unaryFilter.field);return Ye.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Pr(t.unaryFilter.field);return Ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Pr(t.unaryFilter.field);return Ye.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ce()}}(n):n.fieldFilter!==void 0?function(t){return Ye.create(Pr(t.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ce()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return mn.create(t.compositeFilter.filters.map(s=>IT(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return ce()}}(t.compositeFilter.op))}(n):ce()}function HO(n){return OO[n]}function zO(n){return DO[n]}function KO(n){return xO[n]}function Sr(n){return{fieldPath:n.canonicalString()}}function Pr(n){return dt.fromServerFormat(n.fieldPath)}function wT(n){return n instanceof Ye?function(t){if(t.op==="=="){if(lm(t.value))return{unaryFilter:{field:Sr(t.field),op:"IS_NAN"}};if(am(t.value))return{unaryFilter:{field:Sr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(lm(t.value))return{unaryFilter:{field:Sr(t.field),op:"IS_NOT_NAN"}};if(am(t.value))return{unaryFilter:{field:Sr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Sr(t.field),op:zO(t.op),value:t.value}}}(n):n instanceof mn?function(t){const s=t.getFilters().map(r=>wT(r));return s.length===1?s[0]:{compositeFilter:{op:KO(t.op),filters:s}}}(n):ce()}function GO(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function RT(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,t,s,r,i=he.min(),o=he.min(),a=ft.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new ws(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ws(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ws(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ws(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{constructor(e){this.ht=e}}function YO(n){const e=qO({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?lh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{constructor(){this.ln=new JO}addToCollectionParentIndex(e,t){return this.ln.add(t),U.resolve()}getCollectionParents(e,t){return U.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return U.resolve()}deleteFieldIndex(e,t){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,t){return U.resolve()}getDocumentsMatchingTarget(e,t){return U.resolve(null)}getIndexType(e,t){return U.resolve(0)}getFieldIndexes(e,t){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,t){return U.resolve(Os.min())}getMinOffsetFromCollectionGroup(e,t){return U.resolve(Os.min())}updateCollectionGroup(e,t,s){return U.resolve()}updateIndexEntries(e,t){return U.resolve()}}class JO{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new et(Be.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new et(Be.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Mt{static withCacheSize(e){return new Mt(e,Mt.DEFAULT_COLLECTION_PERCENTILE,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt.DEFAULT_COLLECTION_PERCENTILE=10,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Mt.DEFAULT=new Mt(41943040,Mt.DEFAULT_COLLECTION_PERCENTILE,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Mt.DISABLED=new Mt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new ei(0)}static Qn(){return new ei(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm([n,e],[t,s]){const r=ye(n,t);return r===0?ye(e,s):r}class ZO{constructor(e){this.Gn=e,this.buffer=new et(wm),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();wm(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class eD{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){J("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){pi(t)?J("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await fi(t)}await this.Yn(3e5)})}}class tD{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return U.resolve(ic.oe);const s=new ZO(t);return this.Zn.forEachTarget(e,r=>s.Hn(r.sequenceNumber)).next(()=>this.Zn.er(e,r=>s.Hn(r))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Zn.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(J("LruGarbageCollector","Garbage collection skipped; disabled"),U.resolve(Im)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(J("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Im):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let s,r,i,o,a,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(J("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),r=this.params.maximumSequenceNumbersToCollect):r=f,o=Date.now(),this.nthSequenceNumber(e,r))).next(f=>(s=f,a=Date.now(),this.removeTargets(e,s,t))).next(f=>(i=f,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(f=>(u=Date.now(),Cr()<=ge.DEBUG&&J("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${f} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),U.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:f})))}}function nD(n,e){return new tD(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(){this.changes=new _r(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Rt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?U.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(s!==null&&ao(s.mutation,r,Wt.empty(),Xe.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,_e()).next(()=>s))}getLocalViewOfDocuments(e,t,s=_e()){const r=tr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,s).next(i=>{let o=ji();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const s=tr();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,_e()))}populateOverlays(e,t,s){const r=[];return s.forEach(i=>{t.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,s,r){let i=os();const o=oo(),a=function(){return oo()}();return t.forEach((c,u)=>{const h=s.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof qs)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),ao(h.mutation,u,h.mutation.getFieldMask(),Xe.now())):o.set(u.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),t.forEach((u,h)=>{var f;return a.set(u,new rD(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,t){const s=oo();let r=new We((o,a)=>o-a),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let h=s.get(c)||Wt.empty();h=a.applyToLocalView(u,h),s.set(c,h);const f=(r.get(a.batchId)||_e()).add(c);r=r.insert(a.batchId,f)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,f=aT();h.forEach(g=>{if(!i.has(g)){const m=fT(t.get(g),s.get(g));m!==null&&f.set(g,m),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return U.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,r){return function(o){return se.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):nT(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):U.resolve(tr());let a=-1,c=i;return o.next(u=>U.forEach(u,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(h)?U.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{c=c.insert(h,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,_e())).next(h=>({batchId:a,changes:oT(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new se(t)).next(s=>{let r=ji();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const i=t.collectionGroup;let o=ji();return this.indexManager.getCollectionParents(e,i).next(a=>U.forEach(a,c=>{const u=function(f,g){return new Go(g,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s,r).next(h=>{h.forEach((f,g)=>{o=o.insert(f,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r))).next(o=>{i.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Rt.newInvalidDocument(h)))});let a=ji();return o.forEach((c,u)=>{const h=i.get(c);h!==void 0&&ao(h.mutation,u,Wt.empty(),Xe.now()),uc(t,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return U.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(r){return{id:r.id,version:r.version,createTime:Dn(r.createTime)}}(t)),U.resolve()}getNamedQuery(e,t){return U.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(r){return{name:r.name,query:YO(r.bundledQuery),readTime:Dn(r.readTime)}}(t)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(){this.overlays=new We(se.comparator),this.Er=new Map}getOverlay(e,t){return U.resolve(this.overlays.get(t))}getOverlays(e,t){const s=tr();return U.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((r,i)=>{this.Tt(e,t,i)}),U.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Er.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(s)),U.resolve()}getOverlaysForCollection(e,t,s){const r=tr(),i=t.length+1,o=new se(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return U.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new We((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>s){let h=i.get(u.largestBatchId);h===null&&(h=tr(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=tr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=r)););return U.resolve(a)}Tt(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Er.get(r.largestBatchId).delete(s.key);this.Er.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new CO(t,s));let i=this.Er.get(t);i===void 0&&(i=_e(),this.Er.set(t,i)),this.Er.set(t,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(){this.dr=new et(nt.Ar),this.Rr=new et(nt.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const s=new nt(e,t);this.dr=this.dr.add(s),this.Rr=this.Rr.add(s)}mr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.gr(new nt(e,t))}pr(e,t){e.forEach(s=>this.removeReference(s,t))}yr(e){const t=new se(new Be([])),s=new nt(t,e),r=new nt(t,e+1),i=[];return this.Rr.forEachInRange([s,r],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new se(new Be([])),s=new nt(t,e),r=new nt(t,e+1);let i=_e();return this.Rr.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new nt(e,0),s=this.dr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class nt{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return se.comparator(e.key,t.key)||ye(e.br,t.br)}static Vr(e,t){return ye(e.br,t.br)||se.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new et(nt.Ar)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new AO(i,t,s,r);this.mutationQueue.push(o);for(const a of r)this.vr=this.vr.add(new nt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,t){return U.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.Fr(s),i=r<0?0:r;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new nt(t,0),r=new nt(t,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([s,r],o=>{const a=this.Cr(o.br);i.push(a)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new et(ye);return t.forEach(r=>{const i=new nt(r,0),o=new nt(r,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],a=>{s=s.add(a.br)})}),U.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;se.isDocumentKey(i)||(i=i.child(""));const o=new nt(new se(i),0);let a=new et(ye);return this.vr.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.br)),!0)},o),U.resolve(this.Mr(a))}Mr(e){const t=[];return e.forEach(s=>{const r=this.Cr(s);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){Ne(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.vr;return U.forEach(t.mutations,r=>{const i=new nt(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.vr=s})}Ln(e){}containsKey(e,t){const s=new nt(t,0),r=this.vr.firstAfterOrEqual(s);return U.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(e){this.Nr=e,this.docs=function(){return new We(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,o=this.Nr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return U.resolve(s?s.document.mutableCopy():Rt.newInvalidDocument(t))}getEntries(e,t){let s=os();return t.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Rt.newInvalidDocument(r))}),U.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let i=os();const o=t.path,a=new se(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||$N(BN(h),s)<=0||(r.has(h.key)||uc(t,h))&&(i=i.insert(h.key,h.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,t,s,r){ce()}Lr(e,t){return U.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new hD(this)}getSize(e){return U.resolve(this.size)}}class hD extends sD{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?t.push(this.hr.addEntry(e,r)):this.hr.removeEntry(s)}),U.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD{constructor(e){this.persistence=e,this.Br=new _r(t=>Pd(t),kd),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.kr=0,this.qr=new Vd,this.targetCount=0,this.Qr=ei.qn()}forEachTarget(e,t){return this.Br.forEach((s,r)=>t(r)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.kr&&(this.kr=t),U.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new ei(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,U.resolve()}updateTargetData(e,t){return this.Un(t),U.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.Br.forEach((o,a)=>{a.sequenceNumber<=t&&s.get(a.targetId)===null&&(this.Br.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),U.waitFor(i).next(()=>r)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,t){const s=this.Br.get(t)||null;return U.resolve(s)}addMatchingKeys(e,t,s){return this.qr.mr(t,s),U.resolve()}removeMatchingKeys(e,t,s){this.qr.pr(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),U.resolve()}getMatchingKeysForTargetId(e,t){const s=this.qr.Sr(t);return U.resolve(s)}containsKey(e,t){return U.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(e,t){this.Kr={},this.overlays={},this.$r=new ic(0),this.Ur=!1,this.Ur=!0,this.Wr=new lD,this.referenceDelegate=e(this),this.Gr=new dD(this),this.indexManager=new XO,this.remoteDocumentCache=function(r){return new uD(r)}(s=>this.referenceDelegate.zr(s)),this.serializer=new QO(t),this.jr=new oD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new aD,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Kr[e.toKey()];return s||(s=new cD(t,this.referenceDelegate),this.Kr[e.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,s){J("MemoryPersistence","Starting transaction:",e);const r=new fD(this.$r.next());return this.referenceDelegate.Hr(),s(r).next(i=>this.referenceDelegate.Jr(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Yr(e,t){return U.or(Object.values(this.Kr).map(s=>()=>s.containsKey(e,t)))}}class fD extends qN{constructor(e){super(),this.currentSequenceNumber=e}}class Ld{constructor(e){this.persistence=e,this.Zr=new Vd,this.Xr=null}static ei(e){return new Ld(e)}get ti(){if(this.Xr)return this.Xr;throw ce()}addReference(e,t,s){return this.Zr.addReference(s,t),this.ti.delete(s.toString()),U.resolve()}removeReference(e,t,s){return this.Zr.removeReference(s,t),this.ti.add(s.toString()),U.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),U.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(r=>this.ti.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(i=>this.ti.add(i.toString()))}).next(()=>s.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.ti,s=>{const r=se.fromPath(s);return this.ni(e,r).next(i=>{i||t.removeEntry(r,he.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(s=>{s?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return U.or([()=>U.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Sl{constructor(e,t){this.persistence=e,this.ri=new _r(s=>zN(s.path),(s,r)=>s.isEqual(r)),this.garbageCollector=nD(this,t)}static ei(e,t){return new Sl(e,t)}Hr(){}Jr(e){return U.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(r=>s+r))}nr(e){let t=0;return this.er(e,s=>{t++}).next(()=>t)}er(e,t){return U.forEach(this.ri,(s,r)=>this.ir(e,s,r).next(i=>i?U.resolve():t(r)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.Lr(e,o=>this.ir(e,o,t).next(a=>{a||(s++,i.removeEntry(o,he.min()))})).next(()=>i.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),U.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),U.resolve()}removeReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),U.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),U.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ja(e.data.value)),t}ir(e,t,s){return U.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.ri.get(t);return U.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Wi=s,this.Gi=r}static zi(e,t){let s=_e(),r=_e();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Fd(e,t.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return uw()?8:WN(Ct())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,s,r){const i={result:null};return this.Xi(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,t,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new pD;return this.ts(e,t,o).next(a=>{if(i.result=a,this.Hi)return this.ns(e,t,o,a.size)})}).next(()=>i.result)}ns(e,t,s,r){return s.documentReadCount<this.Ji?(Cr()<=ge.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",br(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),U.resolve()):(Cr()<=ge.DEBUG&&J("QueryEngine","Query:",br(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.Yi*r?(Cr()<=ge.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",br(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,On(t))):U.resolve())}Xi(e,t){if(dm(t))return U.resolve(null);let s=On(t);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=lh(t,null,"F"),s=On(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=_e(...i);return this.Zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.rs(t,a);return this.ss(t,u,o,c.readTime)?this.Xi(e,lh(t,null,"F")):this.os(e,u,t,c)}))})))}es(e,t,s,r){return dm(t)||r.isEqual(he.min())?U.resolve(null):this.Zi.getDocuments(e,s).next(i=>{const o=this.rs(t,i);return this.ss(t,o,s,r)?U.resolve(null):(Cr()<=ge.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),br(t)),this.os(e,o,t,UN(r,-1)).next(a=>a))})}rs(e,t){let s=new et(rT(e));return t.forEach((r,i)=>{uc(e,i)&&(s=s.add(i))}),s}ss(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ts(e,t,s){return Cr()<=ge.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",br(t)),this.Zi.getDocumentsMatchingQuery(e,t,Os.min(),s)}os(e,t,s,r){return this.Zi.getDocumentsMatchingQuery(e,s,r).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(e,t,s,r){this.persistence=e,this._s=t,this.serializer=r,this.us=new We(ye),this.cs=new _r(i=>Pd(i),kd),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(s)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new iD(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function _D(n,e,t,s){return new mD(n,e,t,s)}async function CT(n,e){const t=fe(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,t.Ps(e),t.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=_e();for(const u of r){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return t.localDocuments.getDocuments(s,c).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function yD(n,e){const t=fe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=t.hs.newChangeBuffer({trackRemovals:!0});return function(a,c,u,h){const f=u.batch,g=f.keys();let m=U.resolve();return g.forEach(v=>{m=m.next(()=>h.getEntry(c,v)).next(C=>{const S=u.docVersions.get(v);Ne(S!==null),C.version.compareTo(S)<0&&(f.applyToRemoteDocument(C,u),C.isValidDocument()&&(C.setReadTime(u.commitVersion),h.addEntry(C)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,f))}(t,s,e,i).next(()=>i.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let c=_e();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(s,r))})}function bT(n){const e=fe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function ED(n,e){const t=fe(n),s=e.snapshotVersion;let r=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.hs.newChangeBuffer({trackRemovals:!0});r=t.us;const a=[];e.targetChanges.forEach((h,f)=>{const g=r.get(f);if(!g)return;a.push(t.Gr.removeMatchingKeys(i,h.removedDocuments,f).next(()=>t.Gr.addMatchingKeys(i,h.addedDocuments,f)));let m=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?m=m.withResumeToken(ft.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,s)),r=r.insert(f,m),function(C,S,D){return C.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(g,m,h)&&a.push(t.Gr.updateTargetData(i,m))});let c=os(),u=_e();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(vD(i,o,e.documentUpdates).next(h=>{c=h.Is,u=h.Es})),!s.isEqual(he.min())){const h=t.Gr.getLastRemoteSnapshotVersion(i).next(f=>t.Gr.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(h)}return U.waitFor(a).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(t.us=r,i))}function vD(n,e,t){let s=_e(),r=_e();return t.forEach(i=>s=s.add(i)),e.getEntries(n,s).next(i=>{let o=os();return t.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(he.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):J("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Is:o,Es:r}})}function TD(n,e){const t=fe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function ID(n,e){const t=fe(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return t.Gr.getTargetData(s,e).next(i=>i?(r=i,U.resolve(r)):t.Gr.allocateTargetId(s).next(o=>(r=new ws(e,o,"TargetPurposeListen",s.currentSequenceNumber),t.Gr.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=t.us.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.us=t.us.insert(s.targetId,s),t.cs.set(e,s.targetId)),s})}async function fh(n,e,t){const s=fe(n),r=s.us.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!pi(o))throw o;J("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.us=s.us.remove(e),s.cs.delete(r.target)}function Rm(n,e,t){const s=fe(n);let r=he.min(),i=_e();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const f=fe(c),g=f.cs.get(h);return g!==void 0?U.resolve(f.us.get(g)):f.Gr.getTargetData(u,h)}(s,o,On(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Gr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s._s.getDocumentsMatchingQuery(o,e,t?r:he.min(),t?i:_e())).next(a=>(wD(s,uO(e),a),{documents:a,ds:i})))}function wD(n,e,t){let s=n.ls.get(e)||he.min();t.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),n.ls.set(e,s)}class Am{constructor(){this.activeTargetIds=mO()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class RD{constructor(){this._o=new Am,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,s){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Am,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AD{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){J("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){J("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pa=null;function hu(){return Pa===null?Pa=function(){return 268435456+Math.round(2147483648*Math.random())}():Pa++,"0x"+Pa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="WebChannelConnection";class SD extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=s+"://"+t.host,this.Mo=`projects/${r}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Oo(t,s,r,i,o){const a=hu(),c=this.No(t,s.toUriEncodedString());J("RestConnection",`Sending RPC '${t}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(u,i,o),this.Bo(t,c,u,r).then(h=>(J("RestConnection",`Received RPC '${t}' ${a}: `,h),h),h=>{throw Yr("RestConnection",`RPC '${t}' ${a} failed with error: `,h,"url: ",c,"request:",r),h})}ko(t,s,r,i,o,a){return this.Oo(t,s,r,i,o)}Lo(t,s,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+di}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((i,o)=>t[o]=i),r&&r.headers.forEach((i,o)=>t[o]=i)}No(t,s){const r=CD[t];return`${this.Fo}/v1/${s}:${r}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,s,r){const i=hu();return new Promise((o,a)=>{const c=new Bv;c.setWithCredentials(!0),c.listenOnce($v.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case $a.NO_ERROR:const h=c.getResponseJson();J(yt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case $a.TIMEOUT:J(yt,`RPC '${e}' ${i} timed out`),a(new Z(B.DEADLINE_EXCEEDED,"Request time out"));break;case $a.HTTP_ERROR:const f=c.getStatus();if(J(yt,`RPC '${e}' ${i} failed with status:`,f,"response text:",c.getResponseText()),f>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const m=g==null?void 0:g.error;if(m&&m.status&&m.message){const v=function(S){const D=S.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(D)>=0?D:B.UNKNOWN}(m.status);a(new Z(v,m.message))}else a(new Z(B.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new Z(B.UNAVAILABLE,"Connection failed."));break;default:ce()}}finally{J(yt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(r);J(yt,`RPC '${e}' ${i} sending request:`,r),c.send(t,"POST",u,s,15)})}qo(e,t,s){const r=hu(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Wv(),a=qv(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,t,s),c.encodeInitMessageHeaders=!0;const h=i.join("");J(yt,`Creating RPC '${e}' stream ${r}: ${h}`,c);const f=o.createWebChannel(h,c);let g=!1,m=!1;const v=new bD({Eo:S=>{m?J(yt,`Not sending because RPC '${e}' stream ${r} is closed:`,S):(g||(J(yt,`Opening RPC '${e}' stream ${r} transport.`),f.open(),g=!0),J(yt,`RPC '${e}' stream ${r} sending:`,S),f.send(S))},Ao:()=>f.close()}),C=(S,D,j)=>{S.listen(D,x=>{try{j(x)}catch(L){setTimeout(()=>{throw L},0)}})};return C(f,$i.EventType.OPEN,()=>{m||(J(yt,`RPC '${e}' stream ${r} transport opened.`),v.So())}),C(f,$i.EventType.CLOSE,()=>{m||(m=!0,J(yt,`RPC '${e}' stream ${r} transport closed`),v.Do())}),C(f,$i.EventType.ERROR,S=>{m||(m=!0,Yr(yt,`RPC '${e}' stream ${r} transport errored:`,S),v.Do(new Z(B.UNAVAILABLE,"The operation could not be completed")))}),C(f,$i.EventType.MESSAGE,S=>{var D;if(!m){const j=S.data[0];Ne(!!j);const x=j,L=(x==null?void 0:x.error)||((D=x[0])===null||D===void 0?void 0:D.error);if(L){J(yt,`RPC '${e}' stream ${r} received error:`,L);const ne=L.status;let re=function(w){const A=Qe[w];if(A!==void 0)return gT(A)}(ne),R=L.message;re===void 0&&(re=B.INTERNAL,R="Unknown error status: "+ne+" with message "+L.message),m=!0,v.Do(new Z(re,R)),f.close()}else J(yt,`RPC '${e}' stream ${r} received:`,j),v.vo(j)}}),C(a,jv.STAT_EVENT,S=>{S.stat===nh.PROXY?J(yt,`RPC '${e}' stream ${r} detected buffering proxy`):S.stat===nh.NOPROXY&&J(yt,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{v.bo()},0),v}}function du(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(n){return new MO(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e,t,s=1e3,r=1.5,i=6e4){this.li=e,this.timerId=t,this.Qo=s,this.Ko=r,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),r=Math.max(0,t-s);r>0&&J("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,r,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e,t,s,r,i,o,a,c){this.li=e,this.Yo=s,this.Zo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new ST(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===B.RESOURCE_EXHAUSTED?(is(t.toString()),is("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Xo===t&&this.I_(s,r)},s=>{e(()=>{const r=new Z(B.UNKNOWN,"Fetching auth token failed: "+s.message);return this.E_(r)})})}I_(e,t){const s=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{s(()=>this.listener.Ro())}),this.stream.mo(()=>{s(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(r=>{s(()=>this.E_(r))}),this.stream.onMessage(r=>{s(()=>++this.n_==1?this.A_(r):this.onNext(r))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return J("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(J("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class PD extends PT{constructor(e,t,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,o),this.serializer=i}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=FO(this.serializer,e),s=function(i){if(!("targetChange"in i))return he.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?Dn(o.readTime):he.min()}(e);return this.listener.R_(t,s)}V_(e){const t={};t.database=dh(this.serializer),t.addTarget=function(i,o){let a;const c=o.target;if(a=oh(c)?{documents:$O(i,c)}:{query:jO(i,c).ct},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=yT(i,o.resumeToken);const u=ch(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(he.min())>0){a.readTime=bl(i,o.snapshotVersion.toTimestamp());const u=ch(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const s=WO(this.serializer,e);s&&(t.labels=s),this.c_(t)}m_(e){const t={};t.database=dh(this.serializer),t.removeTarget=e,this.c_(t)}}class kD extends PT{constructor(e,t,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,Ne(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=BO(e.writeResults,e.commitTime),s=Dn(e.commitTime);return this.listener.y_(s,t)}w_(){const e={};e.database=dh(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>UO(this.serializer,s))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND extends class{}{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.S_=!1}b_(){if(this.S_)throw new Z(B.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,s,r){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,uh(t,s),r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Z(B.UNKNOWN,i.toString())})}ko(e,t,s,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.ko(e,uh(t,s),r,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Z(B.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class OD{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(is(t),this.C_=!1):J("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{s.enqueueAndForget(async()=>{yr(this)&&(J("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=fe(c);u.k_.add(4),await Xo(u),u.K_.set("Unknown"),u.k_.delete(4),await gc(u)}(this))})}),this.K_=new OD(s,r)}}async function gc(n){if(yr(n))for(const e of n.q_)await e(!0)}async function Xo(n){for(const e of n.q_)await e(!1)}function kT(n,e){const t=fe(n);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),jd(t)?$d(t):gi(t).s_()&&Bd(t,e))}function Ud(n,e){const t=fe(n),s=gi(t);t.B_.delete(e),s.s_()&&NT(t,e),t.B_.size===0&&(s.s_()?s.a_():yr(t)&&t.K_.set("Unknown"))}function Bd(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}gi(n).V_(e)}function NT(n,e){n.U_.xe(e),gi(n).m_(e)}function $d(n){n.U_=new NO({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.B_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),gi(n).start(),n.K_.F_()}function jd(n){return yr(n)&&!gi(n).i_()&&n.B_.size>0}function yr(n){return fe(n).k_.size===0}function OT(n){n.U_=void 0}async function xD(n){n.K_.set("Online")}async function MD(n){n.B_.forEach((e,t)=>{Bd(n,e)})}async function VD(n,e){OT(n),jd(n)?(n.K_.O_(e),$d(n)):n.K_.set("Unknown")}async function LD(n,e,t){if(n.K_.set("Online"),e instanceof _T&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const a of i.targetIds)r.B_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.B_.delete(a),r.U_.removeTarget(a))}(n,e)}catch(s){J("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Pl(n,s)}else if(e instanceof Ha?n.U_.$e(e):e instanceof mT?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(he.min()))try{const s=await bT(n.localStore);t.compareTo(s)>=0&&await function(i,o){const a=i.U_.it(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=i.B_.get(u);h&&i.B_.set(u,h.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const h=i.B_.get(c);if(!h)return;i.B_.set(c,h.withResumeToken(ft.EMPTY_BYTE_STRING,h.snapshotVersion)),NT(i,c);const f=new ws(h.target,c,u,h.sequenceNumber);Bd(i,f)}),i.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(s){J("RemoteStore","Failed to raise snapshot:",s),await Pl(n,s)}}async function Pl(n,e,t){if(!pi(e))throw e;n.k_.add(1),await Xo(n),n.K_.set("Offline"),t||(t=()=>bT(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{J("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await gc(n)})}function DT(n,e){return e().catch(t=>Pl(n,t,e))}async function mc(n){const e=fe(n),t=Vs(e);let s=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;FD(e);)try{const r=await TD(e.localStore,s);if(r===null){e.L_.length===0&&t.a_();break}s=r.batchId,UD(e,r)}catch(r){await Pl(e,r)}xT(e)&&MT(e)}function FD(n){return yr(n)&&n.L_.length<10}function UD(n,e){n.L_.push(e);const t=Vs(n);t.s_()&&t.f_&&t.g_(e.mutations)}function xT(n){return yr(n)&&!Vs(n).i_()&&n.L_.length>0}function MT(n){Vs(n).start()}async function BD(n){Vs(n).w_()}async function $D(n){const e=Vs(n);for(const t of n.L_)e.g_(t.mutations)}async function jD(n,e,t){const s=n.L_.shift(),r=Dd.from(s,e,t);await DT(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await mc(n)}async function qD(n,e){e&&Vs(n).f_&&await async function(s,r){if(function(o){return SO(o)&&o!==B.ABORTED}(r.code)){const i=s.L_.shift();Vs(s).__(),await DT(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await mc(s)}}(n,e),xT(n)&&MT(n)}async function bm(n,e){const t=fe(n);t.asyncQueue.verifyOperationInProgress(),J("RemoteStore","RemoteStore received new credentials");const s=yr(t);t.k_.add(3),await Xo(t),s&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await gc(t)}async function WD(n,e){const t=fe(n);e?(t.k_.delete(2),await gc(t)):e||(t.k_.add(2),await Xo(t),t.K_.set("Unknown"))}function gi(n){return n.W_||(n.W_=function(t,s,r){const i=fe(t);return i.b_(),new PD(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Ro:xD.bind(null,n),mo:MD.bind(null,n),po:VD.bind(null,n),R_:LD.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),jd(n)?$d(n):n.K_.set("Unknown")):(await n.W_.stop(),OT(n))})),n.W_}function Vs(n){return n.G_||(n.G_=function(t,s,r){const i=fe(t);return i.b_(),new kD(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:BD.bind(null,n),po:qD.bind(null,n),p_:$D.bind(null,n),y_:jD.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await mc(n)):(await n.G_.stop(),n.L_.length>0&&(J("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new ns,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){const o=Date.now()+s,a=new qd(e,t,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wd(n,e){if(is("AsyncQueue",`${e}: ${n}`),pi(n))return new Z(B.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{static emptySet(e){return new qr(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||se.comparator(t.key,s.key):(t,s)=>se.comparator(t.key,s.key),this.keyedMap=ji(),this.sortedSet=new We(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof qr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new qr;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(){this.z_=new We(se.comparator)}track(e){const t=e.doc.key,s=this.z_.get(t);s?e.type!==0&&s.type===3?this.z_=this.z_.insert(t,e):e.type===3&&s.type!==1?this.z_=this.z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.z_=this.z_.remove(t):e.type===1&&s.type===2?this.z_=this.z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):ce():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class ti{constructor(e,t,s,r,i,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,s,r,i){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new ti(e,t,qr.emptySet(t),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&cc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class zD{constructor(){this.queries=Pm(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,s){const r=fe(t),i=r.queries;r.queries=Pm(),i.forEach((o,a)=>{for(const c of a.J_)c.onError(s)})})(this,new Z(B.ABORTED,"Firestore shutting down"))}}function Pm(){return new _r(n=>sT(n),cc)}async function Hd(n,e){const t=fe(n);let s=3;const r=e.query;let i=t.queries.get(r);i?!i.Y_()&&e.Z_()&&(s=2):(i=new HD,s=e.Z_()?0:1);try{switch(s){case 0:i.H_=await t.onListen(r,!0);break;case 1:i.H_=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(o){const a=Wd(o,`Initialization of query '${br(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,i),i.J_.push(e),e.ea(t.onlineState),i.H_&&e.ta(i.H_)&&Kd(t)}async function zd(n,e){const t=fe(n),s=e.query;let r=3;const i=t.queries.get(s);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?r=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function KD(n,e){const t=fe(n);let s=!1;for(const r of e){const i=r.query,o=t.queries.get(i);if(o){for(const a of o.J_)a.ta(r)&&(s=!0);o.H_=r}}s&&Kd(t)}function GD(n,e,t){const s=fe(n),r=s.queries.get(e);if(r)for(const i of r.J_)i.onError(t);s.queries.delete(e)}function Kd(n){n.X_.forEach(e=>{e.next()})}var ph,km;(km=ph||(ph={})).na="default",km.Cache="cache";class Gd{constructor(e,t,s){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=s||{}}ta(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new ti(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const s=t!=="Offline";return(!this.options.ua||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=ti.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==ph.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e){this.key=e}}class LT{constructor(e){this.key=e}}class QD{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=_e(),this.mutatedKeys=_e(),this.Va=rT(e),this.ma=new qr(this.Va)}get fa(){return this.da}ga(e,t){const s=t?t.pa:new Sm,r=t?t.ma:this.ma;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((h,f)=>{const g=r.get(h),m=uc(this.query,f)?f:null,v=!!g&&this.mutatedKeys.has(g.key),C=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let S=!1;g&&m?g.data.isEqual(m.data)?v!==C&&(s.track({type:3,doc:m}),S=!0):this.ya(g,m)||(s.track({type:2,doc:m}),S=!0,(c&&this.Va(m,c)>0||u&&this.Va(m,u)<0)&&(a=!0)):!g&&m?(s.track({type:0,doc:m}),S=!0):g&&!m&&(s.track({type:1,doc:g}),S=!0,(c||u)&&(a=!0)),S&&(m?(o=o.add(m),i=C?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{ma:o,pa:s,ss:a,mutatedKeys:i}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((h,f)=>function(m,v){const C=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce()}};return C(m)-C(v)}(h.type,f.type)||this.Va(h.doc,f.doc)),this.wa(s),r=r!=null&&r;const a=t&&!r?this.Sa():[],c=this.Ra.size===0&&this.current&&!r?1:0,u=c!==this.Aa;return this.Aa=c,o.length!==0||u?{snapshot:new ti(this.query,e.ma,i,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),ba:a}:{ba:a}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Sm,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=_e(),this.ma.forEach(s=>{this.Da(s.key)&&(this.Ra=this.Ra.add(s.key))});const t=[];return e.forEach(s=>{this.Ra.has(s)||t.push(new LT(s))}),this.Ra.forEach(s=>{e.has(s)||t.push(new VT(s))}),t}va(e){this.da=e.ds,this.Ra=_e();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return ti.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class YD{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class XD{constructor(e){this.key=e,this.Fa=!1}}class JD{constructor(e,t,s,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new _r(a=>sT(a),cc),this.Oa=new Map,this.Na=new Set,this.La=new We(se.comparator),this.Ba=new Map,this.ka=new Vd,this.qa={},this.Qa=new Map,this.Ka=ei.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function ZD(n,e,t=!0){const s=qT(n);let r;const i=s.xa.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.Ca()):r=await FT(s,e,t,!0),r}async function ex(n,e){const t=qT(n);await FT(t,e,!0,!1)}async function FT(n,e,t,s){const r=await ID(n.localStore,On(e)),i=r.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let a;return s&&(a=await tx(n,e,i,o==="current",r.resumeToken)),n.isPrimaryClient&&t&&kT(n.remoteStore,r),a}async function tx(n,e,t,s,r){n.Ua=(f,g,m)=>async function(C,S,D,j){let x=S.view.ga(D);x.ss&&(x=await Rm(C.localStore,S.query,!1).then(({documents:R})=>S.view.ga(R,x)));const L=j&&j.targetChanges.get(S.targetId),ne=j&&j.targetMismatches.get(S.targetId)!=null,re=S.view.applyChanges(x,C.isPrimaryClient,L,ne);return Om(C,S.targetId,re.ba),re.snapshot}(n,f,g,m);const i=await Rm(n.localStore,e,!0),o=new QD(e,i.ds),a=o.ga(i.documents),c=Yo.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),u=o.applyChanges(a,n.isPrimaryClient,c);Om(n,t,u.ba);const h=new YD(e,t,o);return n.xa.set(e,h),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),u.snapshot}async function nx(n,e,t){const s=fe(n),r=s.xa.get(e),i=s.Oa.get(r.targetId);if(i.length>1)return s.Oa.set(r.targetId,i.filter(o=>!cc(o,e))),void s.xa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await fh(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),t&&Ud(s.remoteStore,r.targetId),gh(s,r.targetId)}).catch(fi)):(gh(s,r.targetId),await fh(s.localStore,r.targetId,!0))}async function sx(n,e){const t=fe(n),s=t.xa.get(e),r=t.Oa.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Ud(t.remoteStore,s.targetId))}async function rx(n,e,t){const s=hx(n);try{const r=await function(o,a){const c=fe(o),u=Xe.now(),h=a.reduce((m,v)=>m.add(v.key),_e());let f,g;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let v=os(),C=_e();return c.hs.getEntries(m,h).next(S=>{v=S,v.forEach((D,j)=>{j.isValidDocument()||(C=C.add(D))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,v)).next(S=>{f=S;const D=[];for(const j of a){const x=wO(j,f.get(j.key).overlayedDocument);x!=null&&D.push(new qs(j.key,x,Qv(x.value.mapValue),fn.exists(!0)))}return c.mutationQueue.addMutationBatch(m,u,D,a)}).next(S=>{g=S;const D=S.applyToLocalDocumentSet(f,C);return c.documentOverlayCache.saveOverlays(m,S.batchId,D)})}).then(()=>({batchId:g.batchId,changes:oT(f)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(o,a,c){let u=o.qa[o.currentUser.toKey()];u||(u=new We(ye)),u=u.insert(a,c),o.qa[o.currentUser.toKey()]=u}(s,r.batchId,t),await Jo(s,r.changes),await mc(s.remoteStore)}catch(r){const i=Wd(r,"Failed to persist write");t.reject(i)}}async function UT(n,e){const t=fe(n);try{const s=await ED(t.localStore,e);e.targetChanges.forEach((r,i)=>{const o=t.Ba.get(i);o&&(Ne(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Fa=!0:r.modifiedDocuments.size>0?Ne(o.Fa):r.removedDocuments.size>0&&(Ne(o.Fa),o.Fa=!1))}),await Jo(t,s,e)}catch(s){await fi(s)}}function Nm(n,e,t){const s=fe(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.xa.forEach((i,o)=>{const a=o.view.ea(e);a.snapshot&&r.push(a.snapshot)}),function(o,a){const c=fe(o);c.onlineState=a;let u=!1;c.queries.forEach((h,f)=>{for(const g of f.J_)g.ea(a)&&(u=!0)}),u&&Kd(c)}(s.eventManager,e),r.length&&s.Ma.R_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function ix(n,e,t){const s=fe(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Ba.get(e),i=r&&r.key;if(i){let o=new We(se.comparator);o=o.insert(i,Rt.newNoDocument(i,he.min()));const a=_e().add(i),c=new fc(he.min(),new Map,new We(ye),o,a);await UT(s,c),s.La=s.La.remove(i),s.Ba.delete(e),Qd(s)}else await fh(s.localStore,e,!1).then(()=>gh(s,e,t)).catch(fi)}async function ox(n,e){const t=fe(n),s=e.batch.batchId;try{const r=await yD(t.localStore,e);$T(t,s,null),BT(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Jo(t,r)}catch(r){await fi(r)}}async function ax(n,e,t){const s=fe(n);try{const r=await function(o,a){const c=fe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,a).next(f=>(Ne(f!==null),h=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(s.localStore,e);$T(s,e,t),BT(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Jo(s,r)}catch(r){await fi(r)}}function BT(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function $T(n,e,t){const s=fe(n);let r=s.qa[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.qa[s.currentUser.toKey()]=r}}function gh(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Oa.get(e))n.xa.delete(s),t&&n.Ma.Wa(s,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(s=>{n.ka.containsKey(s)||jT(n,s)})}function jT(n,e){n.Na.delete(e.path.canonicalString());const t=n.La.get(e);t!==null&&(Ud(n.remoteStore,t),n.La=n.La.remove(e),n.Ba.delete(t),Qd(n))}function Om(n,e,t){for(const s of t)s instanceof VT?(n.ka.addReference(s.key,e),lx(n,s)):s instanceof LT?(J("SyncEngine","Document no longer in limbo: "+s.key),n.ka.removeReference(s.key,e),n.ka.containsKey(s.key)||jT(n,s.key)):ce()}function lx(n,e){const t=e.key,s=t.path.canonicalString();n.La.get(t)||n.Na.has(s)||(J("SyncEngine","New document in limbo: "+t),n.Na.add(s),Qd(n))}function Qd(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new se(Be.fromString(e)),s=n.Ka.next();n.Ba.set(s,new XD(t)),n.La=n.La.insert(t,s),kT(n.remoteStore,new ws(On(lc(t.path)),s,"TargetPurposeLimboResolution",ic.oe))}}async function Jo(n,e,t){const s=fe(n),r=[],i=[],o=[];s.xa.isEmpty()||(s.xa.forEach((a,c)=>{o.push(s.Ua(c,e,t).then(u=>{var h;if((u||t)&&s.isPrimaryClient){const f=u?!u.fromCache:(h=t==null?void 0:t.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;s.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){r.push(u);const f=Fd.zi(c.targetId,u);i.push(f)}}))}),await Promise.all(o),s.Ma.R_(r),await async function(c,u){const h=fe(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>U.forEach(u,g=>U.forEach(g.Wi,m=>h.persistence.referenceDelegate.addReference(f,g.targetId,m)).next(()=>U.forEach(g.Gi,m=>h.persistence.referenceDelegate.removeReference(f,g.targetId,m)))))}catch(f){if(!pi(f))throw f;J("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const g=f.targetId;if(!f.fromCache){const m=h.us.get(g),v=m.snapshotVersion,C=m.withLastLimboFreeSnapshotVersion(v);h.us=h.us.insert(g,C)}}}(s.localStore,i))}async function cx(n,e){const t=fe(n);if(!t.currentUser.isEqual(e)){J("SyncEngine","User change. New user:",e.toKey());const s=await CT(t.localStore,e);t.currentUser=e,function(i,o){i.Qa.forEach(a=>{a.forEach(c=>{c.reject(new Z(B.CANCELLED,o))})}),i.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Jo(t,s.Ts)}}function ux(n,e){const t=fe(n),s=t.Ba.get(e);if(s&&s.Fa)return _e().add(s.key);{let r=_e();const i=t.Oa.get(e);if(!i)return r;for(const o of i){const a=t.xa.get(o);r=r.unionWith(a.view.fa)}return r}}function qT(n){const e=fe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=UT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ux.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ix.bind(null,e),e.Ma.R_=KD.bind(null,e.eventManager),e.Ma.Wa=GD.bind(null,e.eventManager),e}function hx(n){const e=fe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ox.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ax.bind(null,e),e}class kl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=pc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return _D(this.persistence,new gD,e.initialUser,this.serializer)}ja(e){return new AT(Ld.ei,this.serializer)}za(e){return new RD}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}kl.provider={build:()=>new kl};class dx extends kl{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Ne(this.persistence.referenceDelegate instanceof Sl);const s=this.persistence.referenceDelegate.garbageCollector;return new eD(s,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Mt.withCacheSize(this.cacheSizeBytes):Mt.DEFAULT;return new AT(s=>Sl.ei(s,t),this.serializer)}}class mh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Nm(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=cx.bind(null,this.syncEngine),await WD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new zD}()}createDatastore(e){const t=pc(e.databaseInfo.databaseId),s=function(i){return new SD(i)}(e.databaseInfo);return function(i,o,a,c){return new ND(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,r,i,o,a){return new DD(s,r,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>Nm(this.syncEngine,t,0),function(){return Cm.p()?new Cm:new AD}())}createSyncEngine(e,t){return function(r,i,o,a,c,u,h){const f=new JD(r,i,o,a,c,u);return h&&(f.$a=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(r){const i=fe(r);J("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await Xo(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}mh.provider={build:()=>new mh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):is("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=Et.UNAUTHENTICATED,this.clientId=zv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async o=>{J("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(J("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ns;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Wd(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function fu(n,e){n.asyncQueue.verifyOperationInProgress(),J("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await CT(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Dm(n,e){n.asyncQueue.verifyOperationInProgress();const t=await px(n);J("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>bm(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,r)=>bm(e.remoteStore,r)),n._onlineComponents=e}async function px(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){J("FirestoreClient","Using user provided OfflineComponentProvider");try{await fu(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(r){return r.name==="FirebaseError"?r.code===B.FAILED_PRECONDITION||r.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(t))throw t;Yr("Error using user provided cache. Falling back to memory cache: "+t),await fu(n,new kl)}}else J("FirestoreClient","Using default OfflineComponentProvider"),await fu(n,new dx(void 0));return n._offlineComponents}async function WT(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(J("FirestoreClient","Using user provided OnlineComponentProvider"),await Dm(n,n._uninitializedComponentsProvider._online)):(J("FirestoreClient","Using default OnlineComponentProvider"),await Dm(n,new mh))),n._onlineComponents}function gx(n){return WT(n).then(e=>e.syncEngine)}async function Nl(n){const e=await WT(n),t=e.eventManager;return t.onListen=ZD.bind(null,e.syncEngine),t.onUnlisten=nx.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ex.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=sx.bind(null,e.syncEngine),t}function mx(n,e,t={}){const s=new ns;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const h=new Yd({next:g=>{h.eu(),o.enqueueAndForget(()=>zd(i,f));const m=g.docs.has(a);!m&&g.fromCache?u.reject(new Z(B.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&g.fromCache&&c&&c.source==="server"?u.reject(new Z(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),f=new Gd(lc(a.path),h,{includeMetadataChanges:!0,ua:!0});return Hd(i,f)}(await Nl(n),n.asyncQueue,e,t,s)),s.promise}function _x(n,e,t={}){const s=new ns;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const h=new Yd({next:g=>{h.eu(),o.enqueueAndForget(()=>zd(i,f)),g.fromCache&&c.source==="server"?u.reject(new Z(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),f=new Gd(a,h,{includeMetadataChanges:!0,ua:!0});return Hd(i,f)}(await Nl(n),n.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HT(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(n,e,t){if(!t)throw new Z(B.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function yx(n,e,t,s){if(e===!0&&s===!0)throw new Z(B.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Mm(n){if(!se.isDocumentKey(n))throw new Z(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Vm(n){if(se.isDocumentKey(n))throw new Z(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function _c(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ce()}function en(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Z(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=_c(n);throw new Z(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Z(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}yx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=HT((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Z(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Z(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Z(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class yc{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lm({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lm(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new kN;switch(s.type){case"firstParty":return new xN(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new Z(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=xm.get(t);s&&(J("ComponentProvider","Removing Datastore"),xm.delete(t),s.terminate())}(this),Promise.resolve()}}function Ex(n,e,t,s={}){var r;const i=(n=en(n,yc))._getSettings(),o=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Yr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=Et.MOCK_USER;else{a=rw(s.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new Z(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Et(u)}n._authCredentials=new NN(new Hv(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Er(this.firestore,e,this._query)}}class Dt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ks(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Dt(this.firestore,e,this._key)}}class ks extends Er{constructor(e,t,s){super(e,t,lc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Dt(this.firestore,null,new se(e))}withConverter(e){return new ks(this.firestore,e,this._path)}}function _h(n,e,...t){if(n=it(n),zT("collection","path",e),n instanceof yc){const s=Be.fromString(e,...t);return Vm(s),new ks(n,null,s)}{if(!(n instanceof Dt||n instanceof ks))throw new Z(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Be.fromString(e,...t));return Vm(s),new ks(n.firestore,null,s)}}function Wi(n,e,...t){if(n=it(n),arguments.length===1&&(e=zv.newId()),zT("doc","path",e),n instanceof yc){const s=Be.fromString(e,...t);return Mm(s),new Dt(n,null,new se(s))}{if(!(n instanceof Dt||n instanceof ks))throw new Z(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Be.fromString(e,...t));return Mm(s),new Dt(n.firestore,n instanceof ks?n.converter:null,new se(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new ST(this,"async_queue_retry"),this.fu=()=>{const s=du();s&&J("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const t=du();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=du();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new ns;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!pi(e))throw e;J("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(s=>{this.Au=s,this.Ru=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw is("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Ru=!1,s))));return this.gu=t,t}enqueueAfterDelay(e,t,s){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const r=qd.createAndSchedule(this,e,t,s,i=>this.Su(i));return this.du.push(r),r}pu(){this.Au&&ce()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}function Um(n){return function(t,s){if(typeof t!="object"||t===null)return!1;const r=t;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1}(n,["next","error","complete"])}class Ls extends yc{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new Fm,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Fm(e),this._firestoreClient=void 0,await e}}}function KT(n,e){const t=typeof n=="object"?n:Sh(),s=typeof n=="string"?n:"(default)",r=bh(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=sw("firestore");i&&Ex(r,...i)}return r}function Ec(n){if(n._terminated)throw new Z(B.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||vx(n),n._firestoreClient}function vx(n){var e,t,s;const r=n._freezeSettings(),i=function(a,c,u,h){return new QN(a,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,HT(h.experimentalLongPollingOptions),h.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,r);n._componentsProvider||!((t=r.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),n._firestoreClient=new fx(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ni(ft.fromBase64String(e))}catch(t){throw new Z(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ni(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Z(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Z(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Z(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx=/^__.*__$/;class Ix{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new qs(e,this.data,this.fieldMask,t,this.fieldTransforms):new Qo(e,this.data,t,this.fieldTransforms)}}class GT{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new qs(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function QT(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce()}}class Zd{constructor(e,t,s,r,i,o){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Zd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.xu({path:s,Nu:!1});return r.Lu(e),r}Bu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.xu({path:s,Nu:!1});return r.Fu(),r}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Ol(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(QT(this.Mu)&&Tx.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class wx{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||pc(e)}$u(e,t,s,r=!1){return new Zd({Mu:e,methodName:t,Ku:s,path:dt.emptyPath(),Nu:!1,Qu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ef(n){const e=n._freezeSettings(),t=pc(n._databaseId);return new wx(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Rx(n,e,t,s,r,i={}){const o=n.$u(i.merge||i.mergeFields?2:0,e,t,r);tf("Data must be an object, but it was:",o,s);const a=YT(s,o);let c,u;if(i.merge)c=new Wt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const g=yh(e,f,t);if(!o.contains(g))throw new Z(B.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);JT(h,g)||h.push(g)}c=new Wt(h),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new Ix(new Vt(a),c,u)}class Ic extends Xd{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ic}}function Ax(n,e,t,s){const r=n.$u(1,e,t);tf("Data must be an object, but it was:",r,s);const i=[],o=Vt.empty();js(s,(c,u)=>{const h=nf(e,c,t);u=it(u);const f=r.Bu(h);if(u instanceof Ic)i.push(h);else{const g=Zo(u,f);g!=null&&(i.push(h),o.set(h,g))}});const a=new Wt(i);return new GT(o,a,r.fieldTransforms)}function Cx(n,e,t,s,r,i){const o=n.$u(1,e,t),a=[yh(e,s,t)],c=[r];if(i.length%2!=0)throw new Z(B.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)a.push(yh(e,i[g])),c.push(i[g+1]);const u=[],h=Vt.empty();for(let g=a.length-1;g>=0;--g)if(!JT(u,a[g])){const m=a[g];let v=c[g];v=it(v);const C=o.Bu(m);if(v instanceof Ic)u.push(m);else{const S=Zo(v,C);S!=null&&(u.push(m),h.set(m,S))}}const f=new Wt(u);return new GT(h,f,o.fieldTransforms)}function bx(n,e,t,s=!1){return Zo(t,n.$u(s?4:3,e))}function Zo(n,e){if(XT(n=it(n)))return tf("Unsupported field value:",e,n),YT(n,e);if(n instanceof Xd)return function(s,r){if(!QT(r.Mu))throw r.qu(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.qu(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const a of s){let c=Zo(a,r.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(n,e)}return function(s,r){if((s=it(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return _O(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=Xe.fromDate(s);return{timestampValue:bl(r.serializer,i)}}if(s instanceof Xe){const i=new Xe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:bl(r.serializer,i)}}if(s instanceof Tc)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof ni)return{bytesValue:yT(r.serializer,s._byteString)};if(s instanceof Dt){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Md(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Jd)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.qu("VectorValues must only contain numeric values.");return Nd(a.serializer,c)})}}}}}}(s,r);throw r.qu(`Unsupported field value: ${_c(s)}`)}(n,e)}function YT(n,e){const t={};return Kv(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):js(n,(s,r)=>{const i=Zo(r,e.Ou(s));i!=null&&(t[s]=i)}),{mapValue:{fields:t}}}function XT(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Xe||n instanceof Tc||n instanceof ni||n instanceof Dt||n instanceof Xd||n instanceof Jd)}function tf(n,e,t){if(!XT(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const s=_c(t);throw s==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+s)}}function yh(n,e,t){if((e=it(e))instanceof vc)return e._internalPath;if(typeof e=="string")return nf(n,e);throw Ol("Field path arguments must be of type string or ",n,!1,void 0,t)}const Sx=new RegExp("[~\\*/\\[\\]]");function nf(n,e,t){if(e.search(Sx)>=0)throw Ol(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new vc(...e.split("."))._internalPath}catch{throw Ol(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ol(n,e,t,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new Z(B.INVALID_ARGUMENT,a+n+c)}function JT(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Px(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(sf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Px extends ZT{data(){return super.data()}}function sf(n,e){return typeof e=="string"?nf(n,e):e instanceof vc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new Z(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class rf{}class kx extends rf{}function Nx(n,e,...t){let s=[];e instanceof rf&&s.push(e),s=s.concat(t),function(i){const o=i.filter(c=>c instanceof of).length,a=i.filter(c=>c instanceof wc).length;if(o>1||o>0&&a>0)throw new Z(B.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)n=r._apply(n);return n}class wc extends kx{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new wc(e,t,s)}_apply(e){const t=this._parse(e);return tI(e._query,t),new Er(e.firestore,e.converter,ah(e._query,t))}_parse(e){const t=ef(e.firestore);return function(i,o,a,c,u,h,f){let g;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new Z(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){$m(f,h);const m=[];for(const v of f)m.push(Bm(c,i,v));g={arrayValue:{values:m}}}else g=Bm(c,i,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||$m(f,h),g=bx(a,o,f,h==="in"||h==="not-in");return Ye.create(u,h,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Ox(n,e,t){const s=e,r=sf("where",n);return wc._create(r,s,t)}class of extends rf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new of(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:mn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,i){let o=r;const a=i.getFlattenedFilters();for(const c of a)tI(o,c),o=ah(o,c)}(e._query,t),new Er(e.firestore,e.converter,ah(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Bm(n,e,t){if(typeof(t=it(t))=="string"){if(t==="")throw new Z(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nT(e)&&t.indexOf("/")!==-1)throw new Z(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Be.fromString(t));if(!se.isDocumentKey(s))throw new Z(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return om(n,new se(s))}if(t instanceof Dt)return om(n,t._key);throw new Z(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_c(t)}.`)}function $m(n,e){if(!Array.isArray(n)||n.length===0)throw new Z(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function tI(n,e){const t=function(r,i){for(const o of r)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new Z(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Z(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Dx{convertValue(e,t="none"){switch(Ms(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(xs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ce()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return js(e,(r,i)=>{s[r]=this.convertValue(i,t)}),s}convertVectorValue(e){var t,s,r;const i=(r=(s=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||s===void 0?void 0:s.values)===null||r===void 0?void 0:r.map(o=>Ke(o.doubleValue));return new Jd(i)}convertGeoPoint(e){return new Tc(Ke(e.latitude),Ke(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=ac(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Co(e));default:return null}}convertTimestamp(e){const t=Ds(e);return new Xe(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Be.fromString(e);Ne(RT(s));const r=new bo(s.get(1),s.get(3)),i=new se(s.popFirst(5));return r.isEqual(t)||is(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xx(n,e,t){let s;return s=n?n.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nI extends ZT{constructor(e,t,s,r,i,o){super(e,t,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new za(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(sf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class za extends nI{data(e={}){return super.data(e)}}class sI{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Hi(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new za(this._firestore,this._userDataWriter,s.key,s,new Hi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Z(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const c=new za(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Hi(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new za(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Hi(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:Mx(a.type),doc:c,oldIndex:u,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Mx(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(n){n=en(n,Dt);const e=en(n.firestore,Ls);return mx(Ec(e),n._key).then(t=>iI(e,n,t))}class af extends Dx{constructor(e){super(),this.firestore=e}convertBytes(e){return new ni(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Dt(this.firestore,null,t)}}function Vx(n){n=en(n,Er);const e=en(n.firestore,Ls),t=Ec(e),s=new af(e);return eI(n._query),_x(t,n._query).then(r=>new sI(e,s,n,r))}function Lx(n,e,t,...s){n=en(n,Dt);const r=en(n.firestore,Ls),i=ef(r);let o;return o=typeof(e=it(e))=="string"||e instanceof vc?Cx(i,"updateDoc",n._key,e,t,s):Ax(i,"updateDoc",n._key,e),cf(r,[o.toMutation(n._key,fn.exists(!0))])}function jm(n){return cf(en(n.firestore,Ls),[new Od(n._key,fn.none())])}function Fx(n,e){const t=en(n.firestore,Ls),s=Wi(n),r=xx(n.converter,e);return cf(t,[Rx(ef(n.firestore),"addDoc",s._key,r,n.converter!==null,{}).toMutation(s._key,fn.exists(!1))]).then(()=>s)}function lf(n,...e){var t,s,r;n=it(n);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Um(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Um(e[o])){const f=e[o];e[o]=(t=f.next)===null||t===void 0?void 0:t.bind(f),e[o+1]=(s=f.error)===null||s===void 0?void 0:s.bind(f),e[o+2]=(r=f.complete)===null||r===void 0?void 0:r.bind(f)}let c,u,h;if(n instanceof Dt)u=en(n.firestore,Ls),h=lc(n._key.path),c={next:f=>{e[o]&&e[o](iI(u,n,f))},error:e[o+1],complete:e[o+2]};else{const f=en(n,Er);u=en(f.firestore,Ls),h=f._query;const g=new af(u);c={next:m=>{e[o]&&e[o](new sI(u,g,f,m))},error:e[o+1],complete:e[o+2]},eI(n._query)}return function(g,m,v,C){const S=new Yd(C),D=new Gd(m,S,v);return g.asyncQueue.enqueueAndForget(async()=>Hd(await Nl(g),D)),()=>{S.eu(),g.asyncQueue.enqueueAndForget(async()=>zd(await Nl(g),D))}}(Ec(u),h,a,c)}function cf(n,e){return function(s,r){const i=new ns;return s.asyncQueue.enqueueAndForget(async()=>rx(await gx(s),r,i)),i.promise}(Ec(n),e)}function iI(n,e,t){const s=t.docs.get(e._key),r=new af(n);return new nI(n,r,e._key,s,new Hi(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(r){di=r})(Fs),xn(new pn("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),a=new Ls(new ON(s.getProvider("auth-internal")),new VN(s.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Z(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bo(u.options.projectId,h)}(o,r),o);return i=Object.assign({useFetchStreams:t},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Ht(em,"4.7.5",e),Ht(em,"4.7.5","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI="firebasestorage.googleapis.com",Ux="storageBucket",Bx=2*60*1e3,$x=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Bn{constructor(e,t,s=0){super(pu(e),`Firebase Storage: ${t} (${pu(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,$n.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return pu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Un;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Un||(Un={}));function pu(n){return"storage/"+n}function jx(){const n="An unknown error occurred, please check the error payload for server response.";return new $n(Un.UNKNOWN,n)}function qx(){return new $n(Un.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Wx(){return new $n(Un.CANCELED,"User canceled the upload/download.")}function Hx(n){return new $n(Un.INVALID_URL,"Invalid URL '"+n+"'.")}function zx(n){return new $n(Un.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function qm(n){return new $n(Un.INVALID_ARGUMENT,n)}function aI(){return new $n(Un.APP_DELETED,"The Firebase app was deleted.")}function Kx(n){return new $n(Un.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=ln.makeFromUrl(e,t)}catch{return new ln(e,"")}if(s.path==="")return s;throw zx(e)}static makeFromUrl(e,t){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(L){L.path_=decodeURIComponent(L.path)}const h="v[A-Za-z0-9_]+",f=t.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",m=new RegExp(`^https?://${f}/${h}/b/${r}/o${g}`,"i"),v={bucket:1,path:3},C=t===oI?"(?:storage.googleapis.com|storage.cloud.google.com)":t,S="([^?#]*)",D=new RegExp(`^https?://${C}/${r}/${S}`,"i"),x=[{regex:a,indices:c,postModify:i},{regex:m,indices:v,postModify:u},{regex:D,indices:{bucket:1,path:2},postModify:u}];for(let L=0;L<x.length;L++){const ne=x[L],re=ne.regex.exec(e);if(re){const R=re[ne.indices.bucket];let y=re[ne.indices.path];y||(y=""),s=new ln(R,y),ne.postModify(s);break}}if(s==null)throw Hx(e);return s}}class Gx{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qx(n,e,t){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function h(...S){u||(u=!0,e.apply(null,S))}function f(S){r=setTimeout(()=>{r=null,n(m,c())},S)}function g(){i&&clearTimeout(i)}function m(S,...D){if(u){g();return}if(S){g(),h.call(null,S,...D);return}if(c()||o){g(),h.call(null,S,...D);return}s<64&&(s*=2);let x;a===1?(a=2,x=0):x=(s+Math.random())*1e3,f(x)}let v=!1;function C(S){v||(v=!0,g(),!u&&(r!==null?(S||(a=2),clearTimeout(r),f(0)):S||(a=1)))}return f(0),i=setTimeout(()=>{o=!0,C(!0)},t),C}function Yx(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xx(n){return n!==void 0}function Wm(n,e,t,s){if(s<e)throw qm(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw qm(`Invalid value for '${n}'. Expected ${t} or less.`)}function Jx(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const r=e(s)+"="+e(n[s]);t=t+r+"&"}return t=t.slice(0,-1),t}var Dl;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Dl||(Dl={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zx(n,e){const t=n>=500&&n<600,r=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{constructor(e,t,s,r,i,o,a,c,u,h,f,g=!0){this.url_=e,this.method_=t,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=f,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,v)=>{this.resolve_=m,this.reject_=v,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new ka(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Dl.NO_ERROR,c=i.getStatus();if(!a||Zx(c,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===Dl.ABORT;s(!1,new ka(!1,null,h));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new ka(u,i))})},t=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Xx(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=jx();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?aI():Wx();o(c)}else{const c=qx();o(c)}};this.canceled_?t(!1,new ka(!1,null,!0)):this.backoffId_=Qx(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Yx(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ka{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function tM(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function nM(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function sM(n,e){e&&(n["X-Firebase-GMPID"]=e)}function rM(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function iM(n,e,t,s,r,i,o=!0){const a=Jx(n.urlParams),c=n.url+a,u=Object.assign({},n.headers);return sM(u,e),tM(u,t),nM(u,i),rM(u,s),new eM(c,n.method,u,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oM(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function aM(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,t){this._service=e,t instanceof ln?this._location=t:this._location=ln.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new xl(e,t)}get root(){const e=new ln(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return aM(this._location.path)}get storage(){return this._service}get parent(){const e=oM(this._location.path);if(e===null)return null;const t=new ln(this._location.bucket,e);return new xl(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Kx(e)}}function Hm(n,e){const t=e==null?void 0:e[Ux];return t==null?null:ln.makeFromBucketSpec(t,n)}class lM{constructor(e,t,s,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=oI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Bx,this._maxUploadRetryTime=$x,this._requests=new Set,r!=null?this._bucket=ln.makeFromBucketSpec(r,this._host):this._bucket=Hm(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ln.makeFromBucketSpec(this._url,e):this._bucket=Hm(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Wm("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Wm("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new xl(this,e)}_makeRequest(e,t,s,r,i=!0){if(this._deleted)return new Gx(aI());{const o=iM(e,this._appId,s,r,t,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,r).getPromise()}}const zm="@firebase/storage",Km="0.13.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cM="storage";function uM(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),r=n.getProvider("app-check-internal");return new lM(t,s,r,e,Fs)}function hM(){xn(new pn(cM,uM,"PUBLIC").setMultipleInstances(!0)),Ht(zm,Km,""),Ht(zm,Km,"esm2017")}hM();const gu=new WeakMap;function lI(n,e){return gu.has(e)||gu.set(e,{f:{},r:{},s:{},u:{}}),gu.get(e)}function dM(n,e,t,s){if(!n)return t;const[r,i]=cI(n);if(!r)return t;const o=lI(void 0,s)[r]||{},a=e||i;return a&&a in o?o[a]:t}function fM(n,e,t,s){if(!n)return;const[r,i]=cI(n);if(!r)return;const o=lI(void 0,s)[r],a=e||i;if(a)return t.then(c=>{o[a]=c}).catch(Rn),a}function cI(n){return MP(n)||VP(n)?["f",n.path]:LP(n)?["r",n.toString()]:FP(n)?["s",n.toString()]:[]}const mu=new WeakMap;function pM(n,e,t){const s=jo();mu.has(s)||mu.set(s,new Map);const r=mu.get(s),i=fM(e,t,n,s);return i&&r.set(i,n),i?()=>r.delete(i):Rn}const gM={toFirestore(n){return n},fromFirestore(n,e){return n.exists()?Object.defineProperties(n.data(e),{id:{value:n.id}}):null}};function Eh(n,e,t,s){if(!DP(n))return[n,{}];const r=[{},{}],i=Object.keys(t).reduce((a,c)=>{const u=t[c];return a[u.path]=u.data(),a},{});function o(a,c,u,h){c=c||{};const[f,g]=h;Object.getOwnPropertyNames(a).forEach(m=>{const v=Object.getOwnPropertyDescriptor(a,m);v&&!v.enumerable&&Object.defineProperty(f,m,v)});for(const m in a){const v=a[m];if(v==null||v instanceof Date||v instanceof Xe||v instanceof Tc)f[m]=v;else if(rd(v)){const C=u+m;f[m]=C in t?c[m]:v.path,g[C]=v.converter?v:v.withConverter(s.converter)}else if(Array.isArray(v)){f[m]=Array(v.length);for(let C=0;C<v.length;C++){const S=v[C];S&&S.path in i&&(f[m][C]=i[S.path])}o(v,c[m]||f[m],u+m+".",[f[m],g])}else pr(v)?(f[m]={},o(v,c[m],u+m+".",[f[m],g])):f[m]=v}}return o(n,e,"",r),r}const uf={reset:!1,wait:!0,maxRefDepth:2,converter:gM,snapshotOptions:{serverTimestamps:"estimate"}};function Ml(n){for(const e in n)n[e].unsub()}function vh(n,e,t,s,r,i,o,a,c){const[u,h]=Eh(s.data(n.snapshotOptions),sd(e,t),r,n);i.set(e,t,u),Th(n,e,t,r,h,i,o,a,c)}function mM({ref:n,target:e,path:t,depth:s,resolve:r,reject:i,ops:o},a){const c=Object.create(null);let u=Rn;return a.once?rI(n).then(h=>{h.exists()?vh(a,e,t,h,c,o,s,r,i):(o.set(e,t,null),r())}).catch(i):u=lf(n,h=>{h.exists()?vh(a,e,t,h,c,o,s,r,i):(o.set(e,t,null),r())},i),()=>{u(),Ml(c)}}function Th(n,e,t,s,r,i,o,a,c){const u=Object.keys(r);if(Object.keys(s).filter(C=>u.indexOf(C)<0).forEach(C=>{s[C].unsub(),delete s[C]}),!u.length||++o>n.maxRefDepth)return a(t);let f=0;const g=u.length,m=Object.create(null);function v(C){C in m&&++f>=g&&a(t)}u.forEach(C=>{const S=s[C],D=r[C],j=`${t}.${C}`;if(m[j]=!0,S)if(S.path!==D.path)S.unsub();else return;s[C]={data:()=>sd(e,j),unsub:mM({ref:D,target:e,path:j,depth:o,ops:i,resolve:v.bind(null,j),reject:c},n),path:D.path}})}function _M(n,e,t,s,r,i){const o=Object.assign({},uf,i),{snapshotListenOptions:a,snapshotOptions:c,wait:u,once:h}=o,f="value";let g=Ss(u?[]:n.value);u||t.set(n,f,[]);const m=s;let v,C=Rn;const S=[],D={added:({newIndex:x,doc:L})=>{S.splice(x,0,Object.create(null));const ne=S[x],[re,R]=Eh(L.data(c),void 0,ne,o);t.add(zn(g),x,re),Th(o,g,`${f}.${x}`,ne,R,t,0,s.bind(null,L),r)},modified:({oldIndex:x,newIndex:L,doc:ne})=>{const re=zn(g),R=S[x],y=re[x],[w,A]=Eh(ne.data(c),y,R,o);S.splice(L,0,R),t.remove(re,x),t.add(re,L,w),Th(o,g,`${f}.${L}`,R,A,t,0,s,r)},removed:({oldIndex:x})=>{const L=zn(g);t.remove(L,x),Ml(S.splice(x,1)[0])}};function j(x){const L=x.docChanges(a);if(!v&&L.length){v=!0;let ne=0;const re=L.length,R=Object.create(null);for(let y=0;y<re;y++)R[L[y].doc.id]=!0;s=y=>{y&&y.id in R&&++ne>=re&&(u&&(t.set(n,f,zn(g)),g=n),m(zn(g)),s=Rn)}}L.forEach(ne=>{D[ne.type](ne)}),L.length||(u&&(t.set(n,f,zn(g)),g=n),s(zn(g)))}return h?Vx(e).then(j).catch(r):C=lf(e,j,r),x=>{if(C(),x){const L=typeof x=="function"?x():[];t.set(n,f,L)}S.forEach(Ml)}}function yM(n,e,t,s,r,i){const o=Object.assign({},uf,i),a="value",c=Object.create(null);s=UP(s,()=>sd(n,a));let u=Rn;function h(f){f.exists()?vh(o,n,a,f,c,t,0,s,r):(t.set(n,a,null),s(null))}return o.once?rI(e).then(h).catch(r):u=lf(e,h,r),f=>{if(u(),f){const g=typeof f=="function"?f():null;t.set(n,a,g)}Ml(c)}}const Gm=Symbol();function EM(n,e){let t=Rn;const s=Object.assign({},uf,e),r=zn(n),i=s.target||Ss();$P()&&(s.once=!0);const o=dM(r,s.ssrKey,Gm,jo()),a=o!==Gm;a&&(i.value=o);let c=!a;const u=Ss(!1),h=Ss(),f=Vy(),g=Ey();let m=Rn;function v(){let D=zn(n);const j=new Promise((x,L)=>{if(t(s.reset),!D)return t=Rn,x(null);u.value=c,c=!0,D.converter||(D=D.withConverter(s.converter)),t=(rd(D)?yM:_M)(i,D,vM,x,L,s)}).catch(x=>(f.value===j&&(h.value=x),Promise.reject(x))).finally(()=>{f.value===j&&(u.value=!1)});f.value=j}let C=Rn;(rt(n)||typeof n=="function")&&(C=Ji(n,v)),v(),r&&(m=pM(f.value,r,s.ssrKey)),mE()&&Qy(()=>f.value),g&&zC(S);function S(D=s.reset){C(),m(),t(D)}return Object.defineProperties(i,{error:{get:()=>h},data:{get:()=>i},pending:{get:()=>u},promise:{get:()=>f},stop:{get:()=>S}})}const vM={set:(n,e,t)=>NP(n,e,t),add:(n,e,t)=>n.splice(e,0,t),remove:(n,e)=>n.splice(e,1)};function TM(n,e){return EM(n,{target:Ss([]),...e})}function IM(n){return KT(jo(n))}function wM(n){return RM({initialUser:n,dependencies:{popupRedirectResolver:uy,persistence:[oy,ey,Vh]}})}const uI=Symbol("VueFireAuth");function RM({dependencies:n,initialUser:e}){return(t,s)=>{const[r,i]=AM(t,s,e,n);WP(r,i)}}function AM(n,e,t,s,r=K_(n,s)){const i=jP(n,e).run(()=>Ss(t));return AE.set(n,i),e.provide(uI,r),[i,r]}function hI(n){return kP?zt(uI):null}function CM(n,{firebaseApp:e,modules:t=[]}){n.provide(RE,e);for(const s of t)s(e,n)}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const kr=typeof document<"u";function dI(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function bM(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&dI(n.default)}const be=Object.assign;function _u(n,e){const t={};for(const s in e){const r=e[s];t[s]=_n(r)?r.map(n):n(r)}return t}const lo=()=>{},_n=Array.isArray,fI=/#/g,SM=/&/g,PM=/\//g,kM=/=/g,NM=/\?/g,pI=/\+/g,OM=/%5B/g,DM=/%5D/g,gI=/%5E/g,xM=/%60/g,mI=/%7B/g,MM=/%7C/g,_I=/%7D/g,VM=/%20/g;function hf(n){return encodeURI(""+n).replace(MM,"|").replace(OM,"[").replace(DM,"]")}function LM(n){return hf(n).replace(mI,"{").replace(_I,"}").replace(gI,"^")}function Ih(n){return hf(n).replace(pI,"%2B").replace(VM,"+").replace(fI,"%23").replace(SM,"%26").replace(xM,"`").replace(mI,"{").replace(_I,"}").replace(gI,"^")}function FM(n){return Ih(n).replace(kM,"%3D")}function UM(n){return hf(n).replace(fI,"%23").replace(NM,"%3F")}function BM(n){return n==null?"":UM(n).replace(PM,"%2F")}function No(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const $M=/\/$/,jM=n=>n.replace($M,"");function yu(n,e,t="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=n(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=zM(s??e,t),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:No(o)}}function qM(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Qm(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function WM(n,e,t){const s=e.matched.length-1,r=t.matched.length-1;return s>-1&&s===r&&si(e.matched[s],t.matched[r])&&yI(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function si(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function yI(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!HM(n[t],e[t]))return!1;return!0}function HM(n,e){return _n(n)?Ym(n,e):_n(e)?Ym(e,n):n===e}function Ym(n,e){return _n(e)?n.length===e.length&&n.every((t,s)=>t===e[s]):n.length===1&&n[0]===e}function zM(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),s=n.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=t.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return t.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const gs={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Oo;(function(n){n.pop="pop",n.push="push"})(Oo||(Oo={}));var co;(function(n){n.back="back",n.forward="forward",n.unknown=""})(co||(co={}));function KM(n){if(!n)if(kr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),jM(n)}const GM=/^[^#]+#/;function QM(n,e){return n.replace(GM,"#")+e}function YM(n,e){const t=document.documentElement.getBoundingClientRect(),s=n.getBoundingClientRect();return{behavior:e.behavior,left:s.left-t.left-(e.left||0),top:s.top-t.top-(e.top||0)}}const Rc=()=>({left:window.scrollX,top:window.scrollY});function XM(n){let e;if("el"in n){const t=n.el,s=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?s?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=YM(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Xm(n,e){return(history.state?history.state.position-e:-1)+n}const wh=new Map;function JM(n,e){wh.set(n,e)}function ZM(n){const e=wh.get(n);return wh.delete(n),e}let eV=()=>location.protocol+"//"+location.host;function EI(n,e){const{pathname:t,search:s,hash:r}=e,i=n.indexOf("#");if(i>-1){let a=r.includes(n.slice(i))?n.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Qm(c,"")}return Qm(t,n)+s+r}function tV(n,e,t,s){let r=[],i=[],o=null;const a=({state:g})=>{const m=EI(n,location),v=t.value,C=e.value;let S=0;if(g){if(t.value=m,e.value=g,o&&o===v){o=null;return}S=C?g.position-C.position:0}else s(m);r.forEach(D=>{D(t.value,v,{delta:S,type:Oo.pop,direction:S?S>0?co.forward:co.back:co.unknown})})};function c(){o=t.value}function u(g){r.push(g);const m=()=>{const v=r.indexOf(g);v>-1&&r.splice(v,1)};return i.push(m),m}function h(){const{history:g}=window;g.state&&g.replaceState(be({},g.state,{scroll:Rc()}),"")}function f(){for(const g of i)g();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function Jm(n,e,t,s=!1,r=!1){return{back:n,current:e,forward:t,replaced:s,position:window.history.length,scroll:r?Rc():null}}function nV(n){const{history:e,location:t}=window,s={value:EI(n,t)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,h){const f=n.indexOf("#"),g=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+c:eV()+n+c;try{e[h?"replaceState":"pushState"](u,"",g),r.value=u}catch(m){console.error(m),t[h?"replace":"assign"](g)}}function o(c,u){const h=be({},e.state,Jm(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,h,!0),s.value=c}function a(c,u){const h=be({},r.value,e.state,{forward:c,scroll:Rc()});i(h.current,h,!0);const f=be({},Jm(s.value,c,null),{position:h.position+1},u);i(c,f,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function sV(n){n=KM(n);const e=nV(n),t=tV(n,e.state,e.location,e.replace);function s(i,o=!0){o||t.pauseListeners(),history.go(i)}const r=be({location:"",base:n,go:s,createHref:QM.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function rV(n){return typeof n=="string"||n&&typeof n=="object"}function vI(n){return typeof n=="string"||typeof n=="symbol"}const TI=Symbol("");var Zm;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Zm||(Zm={}));function ri(n,e){return be(new Error,{type:n,[TI]:!0},e)}function Hn(n,e){return n instanceof Error&&TI in n&&(e==null||!!(n.type&e))}const e_="[^/]+?",iV={sensitive:!1,strict:!1,start:!0,end:!0},oV=/[.+*?^${}()[\]/\\]/g;function aV(n,e){const t=be({},iV,e),s=[];let r=t.start?"^":"";const i=[];for(const u of n){const h=u.length?[]:[90];t.strict&&!u.length&&(r+="/");for(let f=0;f<u.length;f++){const g=u[f];let m=40+(t.sensitive?.25:0);if(g.type===0)f||(r+="/"),r+=g.value.replace(oV,"\\$&"),m+=40;else if(g.type===1){const{value:v,repeatable:C,optional:S,regexp:D}=g;i.push({name:v,repeatable:C,optional:S});const j=D||e_;if(j!==e_){m+=10;try{new RegExp(`(${j})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${v}" (${j}): `+L.message)}}let x=C?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;f||(x=S&&u.length<2?`(?:/${x})`:"/"+x),S&&(x+="?"),r+=x,m+=20,S&&(m+=-8),C&&(m+=-20),j===".*"&&(m+=-50)}h.push(m)}s.push(h)}if(t.strict&&t.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(u){const h=u.match(o),f={};if(!h)return null;for(let g=1;g<h.length;g++){const m=h[g]||"",v=i[g-1];f[v.name]=m&&v.repeatable?m.split("/"):m}return f}function c(u){let h="",f=!1;for(const g of n){(!f||!h.endsWith("/"))&&(h+="/"),f=!1;for(const m of g)if(m.type===0)h+=m.value;else if(m.type===1){const{value:v,repeatable:C,optional:S}=m,D=v in u?u[v]:"";if(_n(D)&&!C)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const j=_n(D)?D.join("/"):D;if(!j)if(S)g.length<2&&(h.endsWith("/")?h=h.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);h+=j}}return h||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function lV(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=e[t]-n[t];if(s)return s;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function II(n,e){let t=0;const s=n.score,r=e.score;for(;t<s.length&&t<r.length;){const i=lV(s[t],r[t]);if(i)return i;t++}if(Math.abs(r.length-s.length)===1){if(t_(s))return 1;if(t_(r))return-1}return r.length-s.length}function t_(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const cV={type:0,value:""},uV=/[a-zA-Z0-9_]/;function hV(n){if(!n)return[[]];if(n==="/")return[[cV]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(m){throw new Error(`ERR (${t})/"${u}": ${m}`)}let t=0,s=t;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",h="";function f(){u&&(t===0?i.push({type:0,value:u}):t===1||t===2||t===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&t!==2){s=t,t=4;continue}switch(t){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),t=1):g();break;case 4:g(),t=s;break;case 1:c==="("?t=2:uV.test(c)?g():(f(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:t=3:h+=c;break;case 3:f(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),r}function dV(n,e,t){const s=aV(hV(n.path),t),r=be(s,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function fV(n,e){const t=[],s=new Map;e=i_({strict:!1,end:!0,sensitive:!1},e);function r(f){return s.get(f)}function i(f,g,m){const v=!m,C=s_(f);C.aliasOf=m&&m.record;const S=i_(e,f),D=[C];if("alias"in f){const L=typeof f.alias=="string"?[f.alias]:f.alias;for(const ne of L)D.push(s_(be({},C,{components:m?m.record.components:C.components,path:ne,aliasOf:m?m.record:C})))}let j,x;for(const L of D){const{path:ne}=L;if(g&&ne[0]!=="/"){const re=g.record.path,R=re[re.length-1]==="/"?"":"/";L.path=g.record.path+(ne&&R+ne)}if(j=dV(L,g,S),m?m.alias.push(j):(x=x||j,x!==j&&x.alias.push(j),v&&f.name&&!r_(j)&&o(f.name)),wI(j)&&c(j),C.children){const re=C.children;for(let R=0;R<re.length;R++)i(re[R],j,m&&m.children[R])}m=m||j}return x?()=>{o(x)}:lo}function o(f){if(vI(f)){const g=s.get(f);g&&(s.delete(f),t.splice(t.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=t.indexOf(f);g>-1&&(t.splice(g,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function c(f){const g=mV(f,t);t.splice(g,0,f),f.record.name&&!r_(f)&&s.set(f.record.name,f)}function u(f,g){let m,v={},C,S;if("name"in f&&f.name){if(m=s.get(f.name),!m)throw ri(1,{location:f});S=m.record.name,v=be(n_(g.params,m.keys.filter(x=>!x.optional).concat(m.parent?m.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),f.params&&n_(f.params,m.keys.map(x=>x.name))),C=m.stringify(v)}else if(f.path!=null)C=f.path,m=t.find(x=>x.re.test(C)),m&&(v=m.parse(C),S=m.record.name);else{if(m=g.name?s.get(g.name):t.find(x=>x.re.test(g.path)),!m)throw ri(1,{location:f,currentLocation:g});S=m.record.name,v=be({},g.params,f.params),C=m.stringify(v)}const D=[];let j=m;for(;j;)D.unshift(j.record),j=j.parent;return{name:S,path:C,params:v,matched:D,meta:gV(D)}}n.forEach(f=>i(f));function h(){t.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:r}}function n_(n,e){const t={};for(const s of e)s in n&&(t[s]=n[s]);return t}function s_(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:pV(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function pV(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const s in n.components)e[s]=typeof t=="object"?t[s]:t;return e}function r_(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function gV(n){return n.reduce((e,t)=>be(e,t.meta),{})}function i_(n,e){const t={};for(const s in n)t[s]=s in e?e[s]:n[s];return t}function mV(n,e){let t=0,s=e.length;for(;t!==s;){const i=t+s>>1;II(n,e[i])<0?s=i:t=i+1}const r=_V(n);return r&&(s=e.lastIndexOf(r,s-1)),s}function _V(n){let e=n;for(;e=e.parent;)if(wI(e)&&II(n,e)===0)return e}function wI({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function yV(n){const e={};if(n===""||n==="?")return e;const s=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(pI," "),o=i.indexOf("="),a=No(o<0?i:i.slice(0,o)),c=o<0?null:No(i.slice(o+1));if(a in e){let u=e[a];_n(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function o_(n){let e="";for(let t in n){const s=n[t];if(t=FM(t),s==null){s!==void 0&&(e+=(e.length?"&":"")+t);continue}(_n(s)?s.map(i=>i&&Ih(i)):[s&&Ih(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+t,i!=null&&(e+="="+i))})}return e}function EV(n){const e={};for(const t in n){const s=n[t];s!==void 0&&(e[t]=_n(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const vV=Symbol(""),a_=Symbol(""),Ac=Symbol(""),RI=Symbol(""),Rh=Symbol("");function Li(){let n=[];function e(s){return n.push(s),()=>{const r=n.indexOf(s);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function ys(n,e,t,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,c)=>{const u=g=>{g===!1?c(ri(4,{from:t,to:e})):g instanceof Error?c(g):rV(g)?c(ri(2,{from:e,to:g})):(o&&s.enterCallbacks[r]===o&&typeof g=="function"&&o.push(g),a())},h=i(()=>n.call(s&&s.instances[r],e,t,u));let f=Promise.resolve(h);n.length<3&&(f=f.then(u)),f.catch(g=>c(g))})}function Eu(n,e,t,s,r=i=>i()){const i=[];for(const o of n)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(dI(c)){const h=(c.__vccOpts||c)[e];h&&i.push(ys(h,t,s,o,a,r))}else{let u=c();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=bM(h)?h.default:h;o.mods[a]=h,o.components[a]=f;const m=(f.__vccOpts||f)[e];return m&&ys(m,t,s,o,a,r)()}))}}return i}function l_(n){const e=zt(Ac),t=zt(RI),s=jt(()=>{const c=kn(n.to);return e.resolve(c)}),r=jt(()=>{const{matched:c}=s.value,{length:u}=c,h=c[u-1],f=t.matched;if(!h||!f.length)return-1;const g=f.findIndex(si.bind(null,h));if(g>-1)return g;const m=c_(c[u-2]);return u>1&&c_(h)===m&&f[f.length-1].path!==m?f.findIndex(si.bind(null,c[u-2])):g}),i=jt(()=>r.value>-1&&AV(t.params,s.value.params)),o=jt(()=>r.value>-1&&r.value===t.matched.length-1&&yI(t.params,s.value.params));function a(c={}){if(RV(c)){const u=e[kn(n.replace)?"replace":"push"](kn(n.to)).catch(lo);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:jt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}function TV(n){return n.length===1?n[0]:n}const IV=Wy({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:l_,setup(n,{slots:e}){const t=Gl(l_(n)),{options:s}=zt(Ac),r=jt(()=>({[u_(n.activeClass,s.linkActiveClass,"router-link-active")]:t.isActive,[u_(n.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const i=e.default&&TV(e.default(t));return n.custom?i:EE("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},i)}}}),wV=IV;function RV(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function AV(n,e){for(const t in e){const s=e[t],r=n[t];if(typeof s=="string"){if(s!==r)return!1}else if(!_n(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function c_(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const u_=(n,e,t)=>n??e??t,CV=Wy({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const s=zt(Rh),r=jt(()=>n.route||s.value),i=zt(a_,0),o=jt(()=>{let u=kn(i);const{matched:h}=r.value;let f;for(;(f=h[u])&&!f.components;)u++;return u}),a=jt(()=>r.value.matched[o.value]);Va(a_,jt(()=>o.value+1)),Va(vV,a),Va(Rh,r);const c=Ss();return Ji(()=>[c.value,a.value,n.name],([u,h,f],[g,m,v])=>{h&&(h.instances[f]=u,m&&m!==h&&u&&u===g&&(h.leaveGuards.size||(h.leaveGuards=m.leaveGuards),h.updateGuards.size||(h.updateGuards=m.updateGuards))),u&&h&&(!m||!si(h,m)||!g)&&(h.enterCallbacks[f]||[]).forEach(C=>C(u))},{flush:"post"}),()=>{const u=r.value,h=n.name,f=a.value,g=f&&f.components[h];if(!g)return h_(t.default,{Component:g,route:u});const m=f.props[h],v=m?m===!0?u.params:typeof m=="function"?m(u):m:null,S=EE(g,be({},v,e,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(f.instances[h]=null)},ref:c}));return h_(t.default,{Component:S,route:u})||S}}});function h_(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const bV=CV;function SV(n){const e=fV(n.routes,n),t=n.parseQuery||yV,s=n.stringifyQuery||o_,r=n.history,i=Li(),o=Li(),a=Li(),c=Vy(gs);let u=gs;kr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=_u.bind(null,M=>""+M),f=_u.bind(null,BM),g=_u.bind(null,No);function m(M,X){let Q,ee;return vI(M)?(Q=e.getRecordMatcher(M),ee=X):ee=M,e.addRoute(ee,Q)}function v(M){const X=e.getRecordMatcher(M);X&&e.removeRoute(X)}function C(){return e.getRoutes().map(M=>M.record)}function S(M){return!!e.getRecordMatcher(M)}function D(M,X){if(X=be({},X||c.value),typeof M=="string"){const P=yu(t,M,X.path),V=e.resolve({path:P.path},X),$=r.createHref(P.fullPath);return be(P,V,{params:g(V.params),hash:No(P.hash),redirectedFrom:void 0,href:$})}let Q;if(M.path!=null)Q=be({},M,{path:yu(t,M.path,X.path).path});else{const P=be({},M.params);for(const V in P)P[V]==null&&delete P[V];Q=be({},M,{params:f(P)}),X.params=f(X.params)}const ee=e.resolve(Q,X),Ae=M.hash||"";ee.params=h(g(ee.params));const E=qM(s,be({},M,{hash:LM(Ae),path:ee.path})),T=r.createHref(E);return be({fullPath:E,hash:Ae,query:s===o_?EV(M.query):M.query||{}},ee,{redirectedFrom:void 0,href:T})}function j(M){return typeof M=="string"?yu(t,M,c.value.path):be({},M)}function x(M,X){if(u!==M)return ri(8,{from:X,to:M})}function L(M){return R(M)}function ne(M){return L(be(j(M),{replace:!0}))}function re(M){const X=M.matched[M.matched.length-1];if(X&&X.redirect){const{redirect:Q}=X;let ee=typeof Q=="function"?Q(M):Q;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=j(ee):{path:ee},ee.params={}),be({query:M.query,hash:M.hash,params:ee.path!=null?{}:M.params},ee)}}function R(M,X){const Q=u=D(M),ee=c.value,Ae=M.state,E=M.force,T=M.replace===!0,P=re(Q);if(P)return R(be(j(P),{state:typeof P=="object"?be({},Ae,P.state):Ae,force:E,replace:T}),X||Q);const V=Q;V.redirectedFrom=X;let $;return!E&&WM(s,ee,Q)&&($=ri(16,{to:V,from:ee}),Qt(ee,ee,!0,!1)),($?Promise.resolve($):A(V,ee)).catch(F=>Hn(F)?Hn(F,2)?F:sn(F):me(F,V,ee)).then(F=>{if(F){if(Hn(F,2))return R(be({replace:T},j(F.to),{state:typeof F.to=="object"?be({},Ae,F.to.state):Ae,force:E}),X||V)}else F=k(V,ee,!0,T,Ae);return b(V,ee,F),F})}function y(M,X){const Q=x(M,X);return Q?Promise.reject(Q):Promise.resolve()}function w(M){const X=cs.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(M):M()}function A(M,X){let Q;const[ee,Ae,E]=PV(M,X);Q=Eu(ee.reverse(),"beforeRouteLeave",M,X);for(const P of ee)P.leaveGuards.forEach(V=>{Q.push(ys(V,M,X))});const T=y.bind(null,M,X);return Q.push(T),xt(Q).then(()=>{Q=[];for(const P of i.list())Q.push(ys(P,M,X));return Q.push(T),xt(Q)}).then(()=>{Q=Eu(Ae,"beforeRouteUpdate",M,X);for(const P of Ae)P.updateGuards.forEach(V=>{Q.push(ys(V,M,X))});return Q.push(T),xt(Q)}).then(()=>{Q=[];for(const P of E)if(P.beforeEnter)if(_n(P.beforeEnter))for(const V of P.beforeEnter)Q.push(ys(V,M,X));else Q.push(ys(P.beforeEnter,M,X));return Q.push(T),xt(Q)}).then(()=>(M.matched.forEach(P=>P.enterCallbacks={}),Q=Eu(E,"beforeRouteEnter",M,X,w),Q.push(T),xt(Q))).then(()=>{Q=[];for(const P of o.list())Q.push(ys(P,M,X));return Q.push(T),xt(Q)}).catch(P=>Hn(P,8)?P:Promise.reject(P))}function b(M,X,Q){a.list().forEach(ee=>w(()=>ee(M,X,Q)))}function k(M,X,Q,ee,Ae){const E=x(M,X);if(E)return E;const T=X===gs,P=kr?history.state:{};Q&&(ee||T?r.replace(M.fullPath,be({scroll:T&&P&&P.scroll},Ae)):r.push(M.fullPath,Ae)),c.value=M,Qt(M,X,Q,T),sn()}let I;function St(){I||(I=r.listen((M,X,Q)=>{if(!yn.listening)return;const ee=D(M),Ae=re(ee);if(Ae){R(be(Ae,{replace:!0,force:!0}),ee).catch(lo);return}u=ee;const E=c.value;kr&&JM(Xm(E.fullPath,Q.delta),Rc()),A(ee,E).catch(T=>Hn(T,12)?T:Hn(T,2)?(R(be(j(T.to),{force:!0}),ee).then(P=>{Hn(P,20)&&!Q.delta&&Q.type===Oo.pop&&r.go(-1,!1)}).catch(lo),Promise.reject()):(Q.delta&&r.go(-Q.delta,!1),me(T,ee,E))).then(T=>{T=T||k(ee,E,!1),T&&(Q.delta&&!Hn(T,8)?r.go(-Q.delta,!1):Q.type===Oo.pop&&Hn(T,20)&&r.go(-1,!1)),b(ee,E,T)}).catch(lo)}))}let Gt=Li(),Ge=Li(),ve;function me(M,X,Q){sn(M);const ee=Ge.list();return ee.length?ee.forEach(Ae=>Ae(M,X,Q)):console.error(M),Promise.reject(M)}function Ft(){return ve&&c.value!==gs?Promise.resolve():new Promise((M,X)=>{Gt.add([M,X])})}function sn(M){return ve||(ve=!M,St(),Gt.list().forEach(([X,Q])=>M?Q(M):X()),Gt.reset()),M}function Qt(M,X,Q,ee){const{scrollBehavior:Ae}=n;if(!kr||!Ae)return Promise.resolve();const E=!Q&&ZM(Xm(M.fullPath,0))||(ee||!Q)&&history.state&&history.state.scroll||null;return Jh().then(()=>Ae(M,X,E)).then(T=>T&&XM(T)).catch(T=>me(T,M,X))}const je=M=>r.go(M);let qe;const cs=new Set,yn={currentRoute:c,listening:!0,addRoute:m,removeRoute:v,clearRoutes:e.clearRoutes,hasRoute:S,getRoutes:C,resolve:D,options:n,push:L,replace:ne,go:je,back:()=>je(-1),forward:()=>je(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ge.add,isReady:Ft,install(M){const X=this;M.component("RouterLink",wV),M.component("RouterView",bV),M.config.globalProperties.$router=X,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>kn(c)}),kr&&!qe&&c.value===gs&&(qe=!0,L(r.location).catch(Ae=>{}));const Q={};for(const Ae in gs)Object.defineProperty(Q,Ae,{get:()=>c.value[Ae],enumerable:!0});M.provide(Ac,X),M.provide(RI,xy(Q)),M.provide(Rh,c);const ee=M.unmount;cs.add(M),M.unmount=function(){cs.delete(M),cs.size<1&&(u=gs,I&&I(),I=null,c.value=gs,qe=!1,ve=!1),ee()}}};function xt(M){return M.reduce((X,Q)=>X.then(()=>w(Q)),Promise.resolve())}return yn}function PV(n,e){const t=[],s=[],r=[],i=Math.max(e.matched.length,n.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(n.matched.find(u=>si(u,a))?s.push(a):t.push(a));const c=n.matched[o];c&&(e.matched.find(u=>si(u,c))||r.push(c))}return[t,s,r]}function df(){return zt(Ac)}const mi=(n,e)=>{const t=n.__vccOpts||n;for(const[s,r]of e)t[s]=r;return t},kV={class:"auth-container"},NV={__name:"Login",setup(n){new In;const e=CE(),t=hI(),s=df();function r(){wA(t).then(()=>{s.push("/")})}return(i,o)=>{const a=cl("router-link");return hn(),Nn("div",kV,[kn(e)?(hn(),Nn("button",{key:0,onClick:r,class:"auth-btn logout-btn"},"Cerrar Sesión")):(hn(),fS(a,{key:1,to:"/login",class:"auth-btn login-btn",tag:"button"},{default:yo(()=>o[0]||(o[0]=[zr("Iniciar Sesion")])),_:1}))])}}},OV=mi(NV,[["__scopeId","data-v-733ef927"]]),DV={__name:"App",setup(n){return df().beforeEach(async(t,s)=>{if(t.fullPath=="/recordatorios")return!!await qP()}),(t,s)=>{const r=cl("RouterLink"),i=cl("RouterView");return hn(),Nn(on,null,[ze("nav",null,[Ze(r,{to:"/"},{default:yo(()=>s[0]||(s[0]=[zr("Home")])),_:1}),Ze(r,{to:"/recordatorios"},{default:yo(()=>s[1]||(s[1]=[zr("Recordatorios")])),_:1}),Ze(OV)]),Ze(i)],64)}}},xV=mi(DV,[["__scopeId","data-v-8a3def72"]]),MV={apiKey:"AIzaSyBS-OlUEPJzRXD5joWk2DeiMEgvCtAGDhs",authDomain:"proyectovue-fa0d0.firebaseapp.com",projectId:"proyectovue-fa0d0",storageBucket:"proyectovue-fa0d0.firebasestorage.app",messagingSenderId:"757690805909",appId:"1:757690805909:web:6260b4bf1d3cde0b23759c"},VV=MV,AI=R_(VV),LV=KT(AI);_h(LV,"Recordatorios");const FV={};function UV(n,e){return hn(),Nn("h1",null,"Empieza a guardar tus notas con nosotros")}const BV=mi(FV,[["render",UV]]),$V={class:"input-container"},jV={__name:"Cabecera",emits:["nota-creada"],setup(n,{emit:e}){let t=Ss("");const s=e;function r(){t.value!==""&&(s("nota-creada",t.value),console.log(t.value),t.value="")}return(i,o)=>(hn(),Nn("div",$V,[xu(ze("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>rt(t)?t.value=a:t=a),class:"note-input",placeholder:"Escribe una nueva nota y presiona Enter",onKeydown:JS(r,["enter"])},null,544),[[GS,kn(t)]])]))}},qV=mi(jV,[["__scopeId","data-v-8ce55621"]]),WV={class:"page-container"},HV={class:"notes-list"},zV={class:"note-content"},KV={class:"note-actions"},GV=["onClick"],QV=["onUpdate:modelValue","onChange"],YV=["onUpdate:modelValue","onChange"],XV={__name:"Recordatorios",setup(n){const e=IM(),t=CE(),s=Nx(_h(e,"Recordatorios"),Ox("user","==",t.value.uid)),r=TM(s),i=["alta","normal","baja"],o=jt(()=>[...r.value].sort((v,C)=>i.indexOf(v.prioridad)-i.indexOf(C.prioridad)));async function a(v,C){if(v&&v.trim()!==""){const S={nombre:v,prioridad:C||"normal",fechacreacion:Date.now(),completado:!1,user:t.value.uid},D=await Fx(_h(e,"Recordatorios"),S);console.log("Documento escrito con ID",D.id)}}async function c(v){const C=Wi(e,"Recordatorios",v);await jm(C),console.log("Documento eliminado con ID",v)}async function u(){const v=r.value.filter(C=>C.completado);for(const C of v){const S=Wi(e,"Recordatorios",C.id);await jm(S),console.log("Tarea completada eliminada con ID",C.id)}}async function h(v,C){Wi(e,"Recordatorios",v)}async function f(v,C){const S=Wi(e,"Recordatorios",v);await Lx(S,{prioridad:C})}function g(){return r.value.filter(C=>C.completado).length}const m=jt(()=>g());return(v,C)=>(hn(),Nn("div",WV,[Ze(qV,{onNotaCreada:a}),C[1]||(C[1]=ze("h1",{class:"title"},"Mis Recordatorios",-1)),ze("h4",null,rl(m.value)+" tareas completadas.",1),ze("button",{class:"delete-all-btn",onClick:u}," Eliminar todas las tareas completadas "),ze("ol",HV,[(hn(!0),Nn(on,null,Lb(o.value,S=>(hn(),Nn("li",{key:S.id,class:"note-item"},[ze("div",zV,[ze("p",{class:zl([{strikethrough:S.completado},"note-text"])},rl(S.nombre),3),ze("div",KV,[ze("button",{class:"delete-btn",onClick:D=>c(S.id)},"Eliminar",8,GV),xu(ze("select",{"onUpdate:modelValue":D=>S.prioridad=D,onChange:D=>f(S.id,S.prioridad),class:"priority-select"},C[0]||(C[0]=[ze("option",{value:"alta"},"Alta",-1),ze("option",{value:"normal"},"Normal",-1),ze("option",{value:"baja"},"Baja",-1)]),40,QV),[[YS,S.prioridad]]),xu(ze("input",{type:"checkbox","onUpdate:modelValue":D=>S.completado=D,onChange:D=>h(S.id,S.completado)},null,40,YV),[[QS,S.completado]])])])]))),128))])]))}},JV=mi(XV,[["__scopeId","data-v-924cf29f"]]),ZV="/assets/googleIco-36H9x2jH.png",eL={__name:"PagLogin",setup(n){const e=new In,t=hI(),s=df();function r(){$A(t,e).then(()=>{s.push("/recordatorios")})}return(i,o)=>{const a=cl("router-link");return hn(),Nn("div",null,[o[2]||(o[2]=ze("h1",null,"Iniciar Sesion",-1)),ze("img",{src:ZV,width:"30vh",height:"30vh",onClick:o[0]||(o[0]=c=>r())}),Ze(a,{to:"/register",tag:"h3"},{default:yo(()=>o[1]||(o[1]=[zr("Registrate ahora")])),_:1})])}}},tL=mi(eL,[["__scopeId","data-v-f769a888"]]),nL={class:"register"},sL={__name:"PagRegister",setup(n){const e=NC();return Ap(e,email,password,nombre,apellidos).then(t=>{t.user}),(t,s)=>(hn(),Nn("div",nL,[s[1]||(s[1]=ze("h2",null,"Registrarse",-1)),ze("form",null,[s[0]||(s[0]=mS('<div class="register-input"><input type="nombre" required><label>Nombre</label></div><div class="register-input"><input type="apellidos" required><label>apellidos</label></div><div class="register-input"><input type="email" required><label>Email</label></div><div class="register-input"><input type="password" required><label>Contraseña</label></div><button class="register-submit" type="submit">Registrarse</button>',5)),zr(" "+rl(kn(Ap)(t.email,t.password,t.nombre,t.apellidos)),1)])]))}},rL=[{path:"/",component:BV},{path:"/recordatorios",component:JV},{path:"/login",component:tL},{path:"/register",component:sL}],iL=SV({history:sV(),routes:rL}),ff=tP(xV);ff.use(CM,{firebaseApp:AI,modules:[wM()]});ff.use(iL);ff.mount("#app");
