"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[7522],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(a),c=o,k=u["".concat(p,".").concat(c)]||u[c]||d[c]||r;return a?n.createElement(k,l(l({ref:t},m),{},{components:a})):n.createElement(k,l({ref:t},m))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},21881:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=a(87462),o=(a(67294),a(3905));const r={title:"\u8c03\u8bd5 Solana \u7a0b\u5e8f",sidebar_position:12,tags:["solana-cook-book","debug"]},l="\u8c03\u8bd5 Solana \u7a0b\u5e8f",i={unversionedId:"guides/debugging-solana-programs",id:"guides/debugging-solana-programs",title:"\u8c03\u8bd5 Solana \u7a0b\u5e8f",description:"\u6709\u8bb8\u591a\u9009\u9879\u548c\u652f\u6301\u5de5\u5177\u53ef\u7528\u4e8e\u6d4b\u8bd5\u548c\u8c03\u8bd5Solana\u7a0b\u5e8f\u3002",source:"@site/docs/cookbook-zh/guides/debugging-solana-programs.md",sourceDirName:"guides",slug:"/guides/debugging-solana-programs",permalink:"/all-in-one-solana/cookbook-zh/guides/debugging-solana-programs",draft:!1,editUrl:"https://github.com/CreatorsDAO/all-in-one-solana/tree/main/docs/cookbook-zh/guides/debugging-solana-programs.md",tags:[{label:"solana-cook-book",permalink:"/all-in-one-solana/cookbook-zh/tags/solana-cook-book"},{label:"debug",permalink:"/all-in-one-solana/cookbook-zh/tags/debug"}],version:"current",lastUpdatedBy:"Davirain",lastUpdatedAt:1693736064,formattedLastUpdatedAt:"Sep 3, 2023",sidebarPosition:12,frontMatter:{title:"\u8c03\u8bd5 Solana \u7a0b\u5e8f",sidebar_position:12,tags:["solana-cook-book","debug"]},sidebar:"tutorialSidebar",previous:{title:"\u91cd\u8bd5\u4ea4\u6613",permalink:"/all-in-one-solana/cookbook-zh/guides/retrying-transactions"},next:{title:"\u529f\u80fd\u76f8\u7b49\u6d4b\u8bd5",permalink:"/all-in-one-solana/cookbook-zh/guides/feature-parity-testing"}},p={},s=[{value:"\u5728\u7f16\u8f91\u5668\u4e2d\u8fdb\u884c\u8fd0\u884c\u65f6\u6d4b\u8bd5\u548c\u8c03\u8bd5",id:"\u5728\u7f16\u8f91\u5668\u4e2d\u8fdb\u884c\u8fd0\u884c\u65f6\u6d4b\u8bd5\u548c\u8c03\u8bd5",level:2},{value:"\u5728\u7f16\u8f91\u5668\u4e2d\u8fdb\u884c\u672c\u5730\u9a8c\u8bc1\u8282\u70b9\u6d4b\u8bd5",id:"\u5728\u7f16\u8f91\u5668\u4e2d\u8fdb\u884c\u672c\u5730\u9a8c\u8bc1\u8282\u70b9\u6d4b\u8bd5",level:2},{value:"\u4ece\u5ba2\u6237\u7aef\u5e94\u7528\u7a0b\u5e8f\u8fdb\u884c\u672c\u5730\u9a8c\u8bc1\u8282\u70b9\u6d4b\u8bd5",id:"\u4ece\u5ba2\u6237\u7aef\u5e94\u7528\u7a0b\u5e8f\u8fdb\u884c\u672c\u5730\u9a8c\u8bc1\u8282\u70b9\u6d4b\u8bd5",level:2},{value:"\u8d44\u6599",id:"\u8d44\u6599",level:2}],m={toc:s},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8c03\u8bd5-solana-\u7a0b\u5e8f"},"\u8c03\u8bd5 Solana \u7a0b\u5e8f"),(0,o.kt)("p",null,"\u6709\u8bb8\u591a\u9009\u9879\u548c\u652f\u6301\u5de5\u5177\u53ef\u7528\u4e8e\u6d4b\u8bd5\u548c\u8c03\u8bd5Solana\u7a0b\u5e8f\u3002"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"tip \u4e8b\u5b9e\u8868")),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"solana-program-test"),"  \u5305\u53ef\u4ee5\u4f7f\u7528\u57fa\u672c\u7684\u672c\u5730\u8fd0\u884c\u65f6\uff0c\u5728\u5176\u4e2d\u53ef\u4ee5\u4ea4\u4e92\u5f0f\u5730\u6d4b\u8bd5\u548c\u8c03\u8bd5\u7a0b\u5e8f\uff08\u4f8b\u5982\u5728 vscode \u4e2d\uff09\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"solana-validator")," \u5305\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"li"},"solana-test-validator"),"\u5b9e\u73b0\u8fdb\u884c\u66f4\u53ef\u9760\u7684\u6d4b\u8bd5\uff0c\u8be5\u6d4b\u8bd5\u53d1\u751f\u5728\u672c\u5730\u9a8c\u8bc1\u5668\u8282\u70b9\u4e0a\u3002\u4f60\u53ef\u4ee5\u4ece\u7f16\u8f91\u5668\u4e2d\u8fd0\u884c\uff0c\u4f46\u662f\u7a0b\u5e8f\u4e2d\u7684\u65ad\u70b9\u5c06\u88ab\u5ffd\u7565\u3002"),(0,o.kt)("li",{parentName:"ul"},"CLI\u5de5\u5177",(0,o.kt)("inlineCode",{parentName:"li"},"solana-test-validator")," \u53ef\u4ee5\u4ece\u547d\u4ee4\u884c\u8fd0\u884c\u548c\u52a0\u8f7d\u4f60\u7684\u7a0b\u5e8f\uff0c\u5e76\u5904\u7406\u6765\u81ea\u547d\u4ee4\u884c Rust \u5e94\u7528\u7a0b\u5e8f\u6216\u4f7f\u7528 web3 \u7684 JavaScript/TypeScript \u5e94\u7528\u7a0b\u5e8f\u7684\u4e8b\u52a1\u6267\u884c\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u4e0a\u8ff0\u6240\u6709\u60c5\u51b5\uff0c\u5efa\u8bae\u5728\u5f00\u59cb\u65f6\u5927\u91cf\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"li"},"msg!"),"\u5b8f\u8fdb\u884c\u8f93\u51fa\uff0c\u7136\u540e\u5728\u6d4b\u8bd5\u548c\u786e\u4fdd\u884c\u4e3a\u7a33\u5b9a\u540e\u5c06\u5176\u79fb\u9664\u3002\u8bf7\u8bb0\u4f4f\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"msg!")," \u4f1a\u6d88\u8017\u8ba1\u7b97\u5355\u4f4d\uff0c\u5982\u679c\u8fbe\u5230\u8ba1\u7b97\u5355\u4f4d\u7684\u9884\u7b97\u9650\u5236\uff0c\u6700\u7ec8\u53ef\u80fd\u5bfc\u81f4\u7a0b\u5e8f\u5931\u8d25\u3002"))),(0,o.kt)("p",null,"\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"#resources"},"solana-program-bpf-template"),"\u3002\u5c06\u5176\u514b\u9686\u5230\u4f60\u7684\u8ba1\u7b97\u673a\u4e0a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:mvines/solana-bpf-program-template.git\ncd solana-bpf-program-template\ncode .\n")),(0,o.kt)("h2",{id:"\u5728\u7f16\u8f91\u5668\u4e2d\u8fdb\u884c\u8fd0\u884c\u65f6\u6d4b\u8bd5\u548c\u8c03\u8bd5"},"\u5728\u7f16\u8f91\u5668\u4e2d\u8fdb\u884c\u8fd0\u884c\u65f6\u6d4b\u8bd5\u548c\u8c03\u8bd5"),(0,o.kt)("p",null,"\u6253\u5f00\u6587\u4ef6 ",(0,o.kt)("inlineCode",{parentName:"p"},"src/lib.rs")),(0,o.kt)("p",null,"\u4f60\u4f1a\u770b\u5230\u8be5\u7a0b\u5e8f\u975e\u5e38\u7b80\u5355\uff0c\u57fa\u672c\u4e0a\u53ea\u662f\u8bb0\u5f55\u7a0b\u5e8f\u5165\u53e3\u51fd\u6570",(0,o.kt)("inlineCode",{parentName:"p"},"process_instruction"),"\u63a5\u6536\u5230\u7684\u5185\u5bb9\u3002"),(0,o.kt)("p",null,"1.\u8f6c\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"#[cfg(test)]")," \u90e8\u5206\uff0c\u5e76\u70b9\u51fb",(0,o.kt)("inlineCode",{parentName:"p"},"Run Tests"),"\u3002\u8fd9\u5c06\u6784\u5efa\u7a0b\u5e8f\uff0c\u7136\u540e\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"async fn test_transaction()")," \u6d4b\u8bd5\u3002\u4f60\u5c06\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"vscode")," \u7ec8\u7aef\u4e2d\u770b\u5230\u7b80\u5316\u7684\u65e5\u5fd7\u6d88\u606f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'running 1 test\n"bpf_program_template" program loaded as native code\nProgram 4uQeVj5tqViQh7yWWGStvkEG1Zmhx6uasJtWCJziofM invoke [1]\nProgram log: process_instruction: 4uQeVj5tqViQh7yWWGStvkEG1Zmhx6uasJtWCJziofM: 1 accounts, data=[1, 2, 3]\nProgram 4uQeVj5tqViQh7yWWGStvkEG1Zmhx6uasJtWCJziofM success\ntest test::test_transaction ... ok\ntest result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 33.41s\n')),(0,o.kt)("p",null,"2.\u5728\u7a0b\u5e8f\u7684\u7b2c11\u884c\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"msg!"),"\u884c\uff09\u4e0a\u8bbe\u7f6e\u4e00\u4e2a\u65ad\u70b9\u3002\n3. \u8fd4\u56de\u6d4b\u8bd5\u6a21\u5757\uff0c\u70b9\u51fb",(0,o.kt)("inlineCode",{parentName:"p"},"Debug"),"\uff0c\u51e0\u79d2\u949f\u540e\u8c03\u8bd5\u5668\u4f1a\u5728\u65ad\u70b9\u5904\u505c\u4e0b\uff0c\u73b0\u5728\u4f60\u53ef\u4ee5\u68c0\u67e5\u6570\u636e\u3001\u9010\u6b65\u6267\u884c\u51fd\u6570\u7b49\u7b49\u3002"),(0,o.kt)("p",null,"\u8fd9\u4e9b\u6d4b\u8bd5\u4e5f\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\u884c\u8fd0\u884c\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"cargo test")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo test-bpf"),"\u3002\u5f53\u7136\uff0c\u4efb\u4f55\u65ad\u70b9\u90fd\u4f1a\u88ab\u5ffd\u7565\u3002"),(0,o.kt)("p",null,"\u591a\u9177\u554a\uff01"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"tip \u8bf7\u6ce8\u610f"),"\n\u4f60\u5e76\u6ca1\u6709\u4f7f\u7528\u9a8c\u8bc1\u8282\u70b9\uff0c\u56e0\u6b64\u9ed8\u8ba4\u7684\u7a0b\u5e8f\u3001\u533a\u5757\u54c8\u5e0c\u7b49\u5728\u9a8c\u8bc1\u8282\u70b9\u4e2d\u7684\u884c\u4e3a\u53ef\u80fd\u4e0e\u4f60\u7684\u8fd0\u884c\u7ed3\u679c\u4e0d\u540c\u3002\u8fd9\u5c31\u662fSolana \u56e2\u961f\u4e3a\u6211\u4eec\u63d0\u4f9b\u672c\u5730\u9a8c\u8bc1\u8282\u70b9\u6d4b\u8bd5\u7684\u539f\u56e0\uff01")),(0,o.kt)("h2",{id:"\u5728\u7f16\u8f91\u5668\u4e2d\u8fdb\u884c\u672c\u5730\u9a8c\u8bc1\u8282\u70b9\u6d4b\u8bd5"},"\u5728\u7f16\u8f91\u5668\u4e2d\u8fdb\u884c\u672c\u5730\u9a8c\u8bc1\u8282\u70b9\u6d4b\u8bd5"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"tests/integration.rs")," \u6587\u4ef6\u4e2d\uff0c\u5b9a\u4e49\u4e86\u4f7f\u7528\u7a0b\u5e8f\u52a0\u8f7d\u672c\u5730\u9a8c\u8bc1\u8282\u70b9\u8fdb\u884c\u96c6\u6210\u6d4b\u8bd5\u3002"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6a21\u677f\u4ed3\u5e93\u7684\u96c6\u6210\u6d4b\u8bd5\u53ea\u80fd\u901a\u8fc7\u547d\u4ee4\u884c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo test-bpf")," \u8fd0\u884c\u3002\u4ee5\u4e0b\u6b65\u9aa4\u5c06\u4f7f\u4f60\u80fd\u591f\u5728\u7f16\u8f91\u5668\u4e2d\u8fd0\u884c\u6d4b\u8bd5\uff0c\u5e76\u663e\u793a\u7a0b\u5e8f\u7684\u9a8c\u8bc1\u8282\u70b9\u65e5\u5fd7\u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"msg!")," \u8f93\u51fa\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u4ed3\u5e93\u76ee\u5f55\u4e2d\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"li"},"cargo build-bpf")," \u6765\u6784\u5efa\u793a\u4f8b\u7a0b\u5e8f"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u7f16\u8f91\u5668\u4e2d\u6253\u5f00 ",(0,o.kt)("inlineCode",{parentName:"li"},"tests/integration.rs")," \u6587\u4ef6"),(0,o.kt)("li",{parentName:"ol"},"\u5c06\u7b2c 1 \u884c\u6ce8\u91ca\u6389 -> ",(0,o.kt)("inlineCode",{parentName:"li"},'// #![cfg(feature = "test-bpf")]')),(0,o.kt)("li",{parentName:"ol"},"\u5728\u7b2c 19 \u884c\u5c06\u5176\u4fee\u6539\u4e3a\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},'.add_program("target/deploy/bpf_program_template", program_id)')),(0,o.kt)("li",{parentName:"ol"},"\u5728\u7b2c 22 \u884c\u63d2\u5165\u4ee5\u4e0b\u5185\u5bb9",(0,o.kt)("inlineCode",{parentName:"li"},'solana_logger::setup_with_default("solana_runtime::message=debug");')),(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u5728 ",(0,o.kt)("inlineCode",{parentName:"li"},"test_validator_transaction()")," \u51fd\u6570\u4e0a\u65b9\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"Run Test"))),(0,o.kt)("p",null,"\u8fd9\u5c06\u52a0\u8f7d\u9a8c\u8bc1\u8282\u70b9\uff0c\u7136\u540e\u5141\u8bb8\u60a8\u6784\u5efa\u4e00\u4e2a\u4ea4\u6613\uff08\u6309\u7167 Rust \u7684\u65b9\u5f0f\uff09\uff0c\u5e76\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"RpcClient"),"\u63d0\u4ea4\u7ed9\u8282\u70b9\u3002"),(0,o.kt)("p",null,"\u7a0b\u5e8f\u7684\u8f93\u51fa\u4e5f\u5c06\u6253\u5370\u5728\u7f16\u8f91\u5668\u7684\u7ec8\u7aef\u4e2d\u3002\u4f8b\u5982\uff08\u7b80\u5316\uff09\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"running 1 test\nWaiting for fees to stabilize 1...\nWaiting for fees to stabilize 2...\nProgram 4uQeVj5tqViQh7yWWGStvkEG1Zmhx6uasJtWCJziofM invoke [1]\nProgram log: process_instruction: 4uQeVj5tqViQh7yWWGStvkEG1Zmhx6uasJtWCJziofM: 1 accounts, data=[1, 2, 3]\nProgram 4uQeVj5tqViQh7yWWGStvkEG1Zmhx6uasJtWCJziofM consumed 13027 of 200000 compute units\nProgram 4uQeVj5tqViQh7yWWGStvkEG1Zmhx6uasJtWCJziofM success\n\ntest test_validator_transaction ... ok\ntest result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 6.40s\n")),(0,o.kt)("p",null,"\u5728\u8fd9\u91cc\u8fdb\u884c\u8c03\u8bd5\u5c06\u5141\u8bb8\u4f60\u8c03\u8bd5\u6d4b\u8bd5\u4e3b\u4f53\u4e2d\u4f7f\u7528\u7684\u51fd\u6570\u548c\u65b9\u6cd5\uff0c\u4f46\u4e0d\u4f1a\u5728\u4f60\u7684\u7a0b\u5e8f\u4e2d\u8bbe\u7f6e\u65ad\u70b9\u3002"),(0,o.kt)("p",null,"\u975e\u5e38\u51fa\u8272\uff0c\u4e0d\u662f\u5417\uff1f"),(0,o.kt)("h2",{id:"\u4ece\u5ba2\u6237\u7aef\u5e94\u7528\u7a0b\u5e8f\u8fdb\u884c\u672c\u5730\u9a8c\u8bc1\u8282\u70b9\u6d4b\u8bd5"},"\u4ece\u5ba2\u6237\u7aef\u5e94\u7528\u7a0b\u5e8f\u8fdb\u884c\u672c\u5730\u9a8c\u8bc1\u8282\u70b9\u6d4b\u8bd5"),(0,o.kt)("p",null,"\u6700\u540e\uff0c\u4f60\u53ef\u4ee5\u4ece\u547d\u4ee4\u884c\u542f\u52a8\u4e00\u4e2a\u672c\u5730\u9a8c\u8bc1\u8282\u70b9\uff0c\u5e76\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"solana-test-validator"),"\u52a0\u8f7d\u4f60\u7684\u7a0b\u5e8f\u548c\u4efb\u4f55\u8d26\u6237\u3002"),(0,o.kt)("p",null,"\u5728\u8fd9\u79cd\u65b9\u6cd5\u4e2d\uff0c\u4f60\u9700\u8981\u4e00\u4e2a\u5ba2\u6237\u7aef\u5e94\u7528\u7a0b\u5e8f\uff0c\u53ef\u4ee5\u4f7f\u7528Rust\u7684 ",(0,o.kt)("a",{parentName:"p",href:"#resources"},"RcpClient"),"\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\n",(0,o.kt)("a",{parentName:"p",href:"#resources"},"JavaScript or Typescript clients"),"\u7684\u5ba2\u6237\u7aef\u3002"),(0,o.kt)("p",null,"\u6709\u5173\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u548c\u9009\u9879\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("inlineCode",{parentName:"p"},"solana-test-validator --help"),"\u3002\u5bf9\u4e8e\u8fd9\u4e2a\u793a\u4f8b\u7a0b\u5e8f\uff0c\u4ee5\u4e0b\u662f\u57fa\u672c\u8bbe\u7f6e\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u5b58\u50a8\u5e93\u6587\u4ef6\u5939\u4e2d\u6253\u5f00\u4e00\u4e2a\u7ec8\u7aef"),(0,o.kt)("li",{parentName:"ol"},"\u8fd0\u884c",(0,o.kt)("inlineCode",{parentName:"li"},"solana config set -ul"),"\u547d\u4ee4\uff0c\u5c06\u914d\u7f6e\u8bbe\u7f6e\u4e3a\u6307\u5411\u672c\u5730"),(0,o.kt)("li",{parentName:"ol"},"\u8fd0\u884c",(0,o.kt)("inlineCode",{parentName:"li"},"solana-test-validator --bpf-program target/deploy/bpf_program_template-keypair.json target/deploy/bpf_program_template.so")),(0,o.kt)("li",{parentName:"ol"},"\u6253\u5f00\u53e6\u4e00\u4e2a\u7ec8\u7aef\u5e76\u8fd0\u884c",(0,o.kt)("inlineCode",{parentName:"li"},"solana logs"),"\u4ee5\u542f\u52a8\u65e5\u5fd7\u6d41"),(0,o.kt)("li",{parentName:"ol"},"\u7136\u540e\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c\u5ba2\u6237\u7aef\u7a0b\u5e8f\uff0c\u5e76\u5728\u60a8\u542f\u52a8\u65e5\u5fd7\u6d41\u7684\u7ec8\u7aef\u4e2d\u89c2\u5bdf\u7a0b\u5e8f\u8f93\u51fa")),(0,o.kt)("p",null,"\u90a3\u53ef\u771f\u662f\u592a\u68d2\u4e86\uff01"),(0,o.kt)("h2",{id:"\u8d44\u6599"},"\u8d44\u6599"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mvines/solana-bpf-program-template"},"solana-program-bpf-template")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/solana-client/latest/solana_client/rpc_client/struct.RpcClient.html"},"RcpClient")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://solana-labs.github.io/solana-web3.js/"},"JavaScript/Typescript Library")))}d.isMDXComponent=!0}}]);