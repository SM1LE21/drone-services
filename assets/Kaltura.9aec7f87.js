import{r as y,u as f,p as _}from"./index.fd10c2c1.js";function m(r,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const a in s)if(a!=="default"&&!(a in r)){const l=Object.getOwnPropertyDescriptor(s,a);l&&Object.defineProperty(r,a,l.get?l:{enumerable:!0,get:()=>s[a]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var P=Object.create,n=Object.defineProperty,g=Object.getOwnPropertyDescriptor,b=Object.getOwnPropertyNames,v=Object.getPrototypeOf,O=Object.prototype.hasOwnProperty,w=(r,e,t)=>e in r?n(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,j=(r,e)=>{for(var t in e)n(r,t,{get:e[t],enumerable:!0})},h=(r,e,t,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of b(e))!O.call(r,a)&&a!==t&&n(r,a,{get:()=>e[a],enumerable:!(s=g(e,a))||s.enumerable});return r},L=(r,e,t)=>(t=r!=null?P(v(r)):{},h(e||!r||!r.__esModule?n(t,"default",{value:r,enumerable:!0}):t,r)),K=r=>h(n({},"__esModule",{value:!0}),r),o=(r,e,t)=>(w(r,typeof e!="symbol"?e+"":e,t),t),d={};j(d,{default:()=>i});var u=K(d),p=L(y.exports),c=f,D=_;const S="https://cdn.embed.ly/player-0.1.0.min.js",T="playerjs";class i extends p.Component{constructor(){super(...arguments),o(this,"callPlayer",c.callPlayer),o(this,"duration",null),o(this,"currentTime",null),o(this,"secondsLoaded",null),o(this,"mute",()=>{this.callPlayer("mute")}),o(this,"unmute",()=>{this.callPlayer("unmute")}),o(this,"ref",e=>{this.iframe=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){(0,c.getSDK)(S,T).then(t=>{!this.iframe||(this.player=new t.Player(this.iframe),this.player.on("ready",()=>{setTimeout(()=>{this.player.isReady=!0,this.player.setLoop(this.props.loop),this.props.muted&&this.player.mute(),this.addListeners(this.player,this.props),this.props.onReady()},500)}))},this.props.onError)}addListeners(e,t){e.on("play",t.onPlay),e.on("pause",t.onPause),e.on("ended",t.onEnded),e.on("error",t.onError),e.on("timeupdate",({duration:s,seconds:a})=>{this.duration=s,this.currentTime=a})}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("setCurrentTime",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.secondsLoaded}render(){const e={width:"100%",height:"100%"};return p.default.createElement("iframe",{ref:this.ref,src:this.props.url,frameBorder:"0",scrolling:"no",style:e,allow:"encrypted-media; autoplay; fullscreen;",referrerPolicy:"no-referrer-when-downgrade"})}}o(i,"displayName","Kaltura");o(i,"canPlay",D.canPlay.kaltura);const x=m({__proto__:null,default:u},[u]);export{x as K};
