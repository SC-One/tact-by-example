var m=Object.defineProperty;var p=(s,e,t)=>e in s?m(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var i=(s,e,t)=>(p(s,typeof e!="symbol"?e+"":e,t),t);import{S as w,i as C,s as B,I,ac as f}from"../../../../chunks/index-1d4083c1.js";import{d as a,g,s as d}from"../../../../chunks/helpers-e86371c8.js";import{d as h}from"../../../../chunks/index-7e0e6ef9.js";const b="# The Deployable Trait\n\nTact doesn't support classical class inheritance, but contracts can implement *traits*. One of the commonly used traits is `Deployable`. It implements a simple receiver for the `Deploy` message which helps deploy contracts in a standard way.\n\nAll contracts are deployed by sending them a message. This can be any message, but best practice is to designate the special `Deploy` message for this purpose.\n\nThis message has a single field, `queryId`, which is provided by the deployer. If the deploy succeeds, the contract will reply with the message `DeployOk` and echo the same `queryId` in the response.\n\nIf you're using TypeScript to deploy, sending the deploy message should look like:\n\n```ts\nconst msg = { $$type: \"Deploy\", queryId: 0n };\n await contract.send(sender, { value: toNano(1) }, msg);\n```\n",v=`// this trait has to be imported
import "@stdlib/deploy";

// the Deployable trait adds a default receiver for the "Deploy" message
contract Counter with Deployable {
 
    val: Int as uint32;
 
    init() {
        self.val = 0;
    }
 
    receive("increment") {
        self.val = self.val + 1;
    }
 
    get fun value(): Int {
        return self.val;
    }
}`;function D(s){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(s.queryId,64)}}async function u(){const s=a.Cell.fromBase64("te6ccgECCwEAAlkAART/APSkE/S88sgLAQIBYgIDAubQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gABlNMfATGOjjD4KNcLCoMJuvLgids84lnbPDDI+EMBzH8BygABAcsfye1UCgQCAVgICQHw7aLt+3Ah10nCH5UwINcLH94Cklt/4CGCEJRqmLa6jqMx0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yds8f+ABwACOK/kBgvDE+NcjEu3971t77HgzvbsWLRURvXipEq7Q8mN69lVyrrqUpH/bMeCRMOJwBQEaf/hCcFgDgEIBbW3bPAYBzshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCDCbohgQT/urHy4IiDCbry4InPFlAD+gJwAcpoI26zJW6zsZczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAHAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMALm7vRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgBRbmsDtRNDUAfhj0gABlNMfATGOjjD4KNcLCoMJuvLgids84oCgACcA=="),e=a.Cell.fromBase64("te6cckECDQEAAmMAAQHAAQEFoendAgEU/wD0pBP0vPLICwMCAWIHBAIBWAYFAUW5rA7UTQ1AH4Y9IAAZTTHwExjo4w+CjXCwqDCbry4InbPOKAwAubu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSALm0AHQ0wMBcbDAAZF/kXDiAfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiVRQUwNvBPhhAvhi7UTQ1AH4Y9IAAZTTHwExjo4w+CjXCwqDCbry4InbPOJZ2zwwyPhDAcx/AcoAAQHLH8ntVAwIAfDtou37cCHXScIflTAg1wsf3gKSW3/gIYIQlGqYtrqOozHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J2zx/4AHAAI4r+QGC8MT41yMS7f3vW3vseDO9uxYtFRG9eKkSrtDyY3r2VXKuupSkf9sx4JEw4nAJARp/+EJwWAOAQgFtbds8CgHOyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgic8WUAP6AnABymgjbrMlbrOxlzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAsAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwAAnDNymzJ");let t=a.beginCell();t.storeRef(e),t.storeUint(0,1);const o=t.endCell();return{code:s,data:o}}const H={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class l{constructor(e,t){i(this,"address");i(this,"init");i(this,"abi",{errors:H});this.address=e,this.init=t}static async init(){return await u()}static async fromInit(){const e=await u(),t=a.contractAddress(0,e);return new l(t,e)}static fromAddress(e){return new l(e)}async send(e,t,o,n){let r=null;if(n==="increment"&&(r=a.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof a.Slice)&&n.$$type==="Deploy"&&(r=a.beginCell().store(D(n)).endCell()),r===null)throw new Error("Invalid message type");await e.internal(t,{...o,body:r})}async getValue(e){let t=new a.TupleBuilder;return(await e.get("value",t.build())).stack.readBigNumber()}}function M(s,e,t){let o;I(s,d,c=>t(2,o=c));let n,r;return f(d,o={markdown:b,tactCode:v,deploy:async()=>{const c=await h.Blockchain.create(),A=await c.treasury("deployer");n=A.getSender(),r=c.openContract(await l.fromInit());const y={[A.address.toString()]:"deployer",[r.address.toString()]:"contract"};return[r,y,[await r.send(A.getSender(),{value:a.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{increment:async()=>[await r.send(n,{value:a.toNano(1)},"increment")]},getters:{value:async()=>await r.getValue()},prev:g(import.meta.url).prev,next:g(import.meta.url).next},o),[]}class J extends w{constructor(e){super(),C(this,e,M,null,B,{})}}export{J as default};
