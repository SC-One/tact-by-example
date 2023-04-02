var A=Object.defineProperty;var w=(s,e,t)=>e in s?A(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var l=(s,e,t)=>(w(s,typeof e!="symbol"?e+"":e,t),t);import{S as p,i as h,s as f,I as y,ac as b}from"../chunks/index.9fe14626.js";import{d as o,g as d,s as g}from"../chunks/store.380869d4.js";import{d as C}from"../chunks/index.b268dd33.js";const I=`# Hello World

This is probably the simplest possible Tact program. It will provide callers with the classic output "hello world".

Tact lets you write smart contracts. This code defines a single contract named \`HelloWorld\`. Smart contracts must be deployed to the blockchain network to be usable, try to deploy this contract by pressing the <span class="mdButton blue">Deploy</span> button.

Contract deployments usually cost gas. This website deploys to an [emulator](https://github.com/tact-lang/tact-emulator) of TON blockchain, so gas is emulated TON coin (which is free).

If you're unfamilar with terms like *contract*, *deployment* and *gas*, please [read this post](https://blog.ton.org/what_is_blockchain) first. It's a great introduction to all blockchain terminology you will need to learn Tact.

## A simple interaction

Contracts can have *getters* like \`greeting()\`. Getters are special external interface functions that allow users to query information from the contract. Try to call the getter by pressing the <span class="mdButton teal">Get greeting</span> button. Calling getters is free and does not cost gas.

Don't worry if some things aren't clear now, we will dive into getters in more detail later.`,B=`contract HelloWorld {

    get fun greeting(): String {
        return "hello world";
    }

}`;async function u(){const s=o.Cell.fromBase64("te6ccgECCQEAAT8AART/APSkE/S88sgLAQIBYgIDAtjQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gAwkW2Ojfgo1wsKgwm68uCJ2zziWds8MDDI+EMBzH8BygDJ7VQHBAIBIAUGAD5wIddJwh+VMCDXCx/eApJbf+ABwAAB10nBIbCRf+BwAkG9jVdqJoagD8MekAGEi2x0b8FGuFhUGE3XlwRO2ecW2eQHCAC5vd6ME4LnYerpZXPY9CdhzrJUKNs0E4TusalpWyPlmRadeW/vixHME4ECrgDcAzscpnLB1XI5LZYcE4DepO98qiy3jjqenvAqzhk0E4TsunLVmnZbmdB0s2yjN0UkAAJtABwwi7aGVsbG8gd29ybGSA=="),e=o.Cell.fromBase64("te6cckECCwEAAUkAAQHAAQEFoPYVAgEU/wD0pBP0vPLICwMCAWIIBAIBIAYFALm93owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQCQb2NV2omhqAPwx6QAYSLbHRvwUa4WFQYTdeXBE7Z5xbZ5AoHABwwi7aGVsbG8gd29ybGSALY0AHQ0wMBcbDAAZF/kXDiAfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiVRQUwNvBPhhAvhi7UTQ1AH4Y9IAMJFtjo34KNcLCoMJuvLgids84lnbPDAwyPhDAcx/AcoAye1UCgkAPnAh10nCH5UwINcLH94Cklt/4AHAAAHXScEhsJF/4HAAAm1cS1Ld");let t=o.beginCell();t.storeRef(e),t.storeUint(0,1);const n=t.endCell();return{code:s,data:n}}const k={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class i{constructor(e,t){l(this,"address");l(this,"init");l(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]}],errors:k});this.address=e,this.init=t}static async init(){return await u()}static async fromInit(){const e=await u(),t=o.contractAddress(0,e);return new i(t,e)}static fromAddress(e){return new i(e)}async send(e,t,n,a){let r=null;if(a===null&&(r=new o.Cell),r===null)throw new Error("Invalid message type");await e.internal(t,{...n,body:r})}async getGreeting(e){let t=new o.TupleBuilder;return(await e.get("greeting",t.build())).stack.readString()}}function v(s,e,t){let n;y(s,g,r=>t(2,n=r));let a;return b(g,n={markdown:I,tactCode:B,deploy:async()=>{const r=await C.Blockchain.create(),c=await r.treasury("deployer");c.getSender(),a=r.openContract(await i.fromInit());const m={[c.address.toString()]:"deployer",[a.address.toString()]:"contract"};return[[a],m,[await a.send(c.getSender(),{value:o.toNano(1)},null)]]},messages:{},getters:{greeting:async()=>await a.getGreeting()},prev:d(import.meta.url).prev,next:d(import.meta.url).next},n),[]}class x extends p{constructor(e){super(),h(this,e,v,null,f,{})}}export{x as default};