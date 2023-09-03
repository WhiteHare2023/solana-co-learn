"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[645],{3905:(e,a,n)=>{n.d(a,{Zo:()=>m,kt:()=>c});var l=n(67294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,l,t=function(e,a){if(null==e)return{};var n,l,t={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var p=l.createContext({}),s=function(e){var a=l.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},m=function(e){var a=s(e.components);return l.createElement(p.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},k=l.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(n),k=t,c=d["".concat(p,".").concat(k)]||d[k]||u[k]||o;return n?l.createElement(c,r(r({ref:a},m),{},{components:n})):l.createElement(c,r({ref:a},m))}));function c(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,r=new Array(o);r[0]=k;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[d]="string"==typeof e?e:t,r[1]=i;for(var s=2;s<o;s++)r[s]=n[s];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8255:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var l=n(87462),t=(n(67294),n(3905));const o={sidebar_position:7,sidebar_label:"\u672c\u5730\u5f00\u53d1\u73af\u5883\u914d\u7f6e",sidebar_class_name:"green",tags:["local-development","solana","program"]},r="\u672c\u5730\u5f00\u53d1\u73af\u5883\u914d\u7f6e",i={unversionedId:"module1/local_program_development/local_program_development",id:"module1/local_program_development/local_program_development",title:"\u672c\u5730\u5f00\u53d1\u73af\u5883\u914d\u7f6e",description:"\u6982\u8ff0",source:"@site/docs/Solana-Co-Learn/module1/local_program_development/local_program_development.md",sourceDirName:"module1/local_program_development",slug:"/module1/local_program_development/",permalink:"/all-in-one-solana/Solana-Co-Learn/module1/local_program_development/",draft:!1,editUrl:"https://github.com/CreatorsDAO/all-in-one-solana/tree/main/docs/Solana-Co-Learn/module1/local_program_development/local_program_development.md",tags:[{label:"local-development",permalink:"/all-in-one-solana/Solana-Co-Learn/tags/local-development"},{label:"solana",permalink:"/all-in-one-solana/Solana-Co-Learn/tags/solana"},{label:"program",permalink:"/all-in-one-solana/Solana-Co-Learn/tags/program"}],version:"current",lastUpdatedBy:"Davirain",lastUpdatedAt:1693736064,formattedLastUpdatedAt:"Sep 3, 2023",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"\u672c\u5730\u5f00\u53d1\u73af\u5883\u914d\u7f6e",sidebar_class_name:"green",tags:["local-development","solana","program"]},sidebar:"tutorialSidebar",previous:{title:"\u533a\u5757\u94fe\u57fa\u672c\u6982\u5ff5\u4ecb\u7ecd",permalink:"/all-in-one-solana/Solana-Co-Learn/module1/block-chain-basic/"},next:{title:"Native Solana\u5408\u7ea6\u5b9e\u73b0 - hello, World",permalink:"/all-in-one-solana/Solana-Co-Learn/module1/local_program_development/native_program_hello"}},p={},s=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u672c\u5730\u73af\u5883\u914d\u7f6e",id:"\u672c\u5730\u73af\u5883\u914d\u7f6e",level:2},{value:"\u5728Windows\u4e0a\u8bbe\u7f6e\uff08\u5e26\u6709Linux\uff09",id:"\u5728windows\u4e0a\u8bbe\u7f6e\u5e26\u6709linux",level:3},{value:"\u4e0b\u8f7dWindows\u5b50\u7cfb\u7edfLinux\uff08WSL\uff09",id:"\u4e0b\u8f7dwindows\u5b50\u7cfb\u7edflinuxwsl",level:4},{value:"\u4e0b\u8f7dUbuntu",id:"\u4e0b\u8f7dubuntu",level:4},{value:"\u4e0b\u8f7d Rust\uff08\u9002\u7528\u4e8e WSL\uff09",id:"\u4e0b\u8f7d-rust\u9002\u7528\u4e8e-wsl",level:4},{value:"\u4e0b\u8f7d Solana CLI",id:"\u4e0b\u8f7d-solana-cli",level:4},{value:"\u5728 macOS \u4e0a\u8fdb\u884c\u8bbe\u7f6e",id:"\u5728-macos-\u4e0a\u8fdb\u884c\u8bbe\u7f6e",level:3},{value:"\u4e0b\u8f7d Rust",id:"\u4e0b\u8f7d-rust",level:4},{value:"\u4e0b\u8f7dSolana CLI",id:"\u4e0b\u8f7dsolana-cli",level:4},{value:"Solana CLI\u57fa\u7840",id:"solana-cli\u57fa\u7840",level:2},{value:"Solana CLI \u914d\u7f6e",id:"solana-cli-\u914d\u7f6e",level:3},{value:"\u6d4b\u8bd5\u9a8c\u8bc1\u5668",id:"\u6d4b\u8bd5\u9a8c\u8bc1\u5668",level:3},{value:"Stream program logs",id:"stream-program-logs",level:3},{value:"\u5bc6\u94a5\u76f8\u5173",id:"\u5bc6\u94a5\u76f8\u5173",level:3},{value:"hello world \u7a0b\u5e8f",id:"hello-world-\u7a0b\u5e8f",level:2},{value:"\u6311\u6218",id:"\u6311\u6218",level:2},{value:"\u5b98\u65b9\u53c2\u8003\u6587\u6863",id:"\u5b98\u65b9\u53c2\u8003\u6587\u6863",level:2}],m={toc:s},d="wrapper";function u(e){let{components:a,...n}=e;return(0,t.kt)(d,(0,l.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"\u672c\u5730\u5f00\u53d1\u73af\u5883\u914d\u7f6e"},"\u672c\u5730\u5f00\u53d1\u73af\u5883\u914d\u7f6e"),(0,t.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,t.kt)("p",null,"\u672c\u5730\u5f00\u53d1\u7684\u57fa\u672c\u6d41\u7a0b\u5982\u4e0b"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"\u5b89\u88c5 ",(0,t.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/tools/install"},"Rust")," \u548c ",(0,t.kt)("a",{parentName:"li",href:"https://docs.solana.com/cli/install-solana-cli-tools"},"Solana CLI")),(0,t.kt)("li",{parentName:"ol"},"\u4f7f\u7528",(0,t.kt)("inlineCode",{parentName:"li"},"Solana CLI"),"\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,t.kt)("strong",{parentName:"li"},(0,t.kt)("inlineCode",{parentName:"strong"},"solana-test-validator")),"\u547d\u4ee4\u8fd0\u884c\u672c\u5730\u6d4b\u8bd5\u9a8c\u8bc1\u5668\uff0c\u521d\u59cb\u5316\u8d26\u6237\u7b49\u57fa\u672c\u64cd\u4f5c"),(0,t.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,t.kt)("inlineCode",{parentName:"li"},"cargo build-sbf")," \u548c ",(0,t.kt)("inlineCode",{parentName:"li"},"solana program deploy")," \u547d\u4ee4\u5728\u672c\u5730\u6784\u5efa\u548c\u90e8\u7f72\u7a0b\u5e8f"),(0,t.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,t.kt)("inlineCode",{parentName:"li"},"solana logs")," \u547d\u4ee4\u67e5\u770b\u7a0b\u5e8f\u65e5\u5fd7")),(0,t.kt)("h2",{id:"\u672c\u5730\u73af\u5883\u914d\u7f6e"},"\u672c\u5730\u73af\u5883\u914d\u7f6e"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"Solana Program")," \u4f7f\u7528",(0,t.kt)("inlineCode",{parentName:"p"},"Rust")," \u7f16\u5199\uff0c\u8c03\u8bd5\u8fd0\u884c\u3002\u5efa\u8bae\u4f7f\u7528",(0,t.kt)("inlineCode",{parentName:"p"},"Unix")," \u7cfb\u5217\u7cfb\u7edf: ",(0,t.kt)("inlineCode",{parentName:"p"},"Mac")," , ",(0,t.kt)("inlineCode",{parentName:"p"},"Linux")," \u7b49\u3002\n\u5982\u679c\u5f88\u4e0d\u5e78\u4f60\u4f7f\u7528\u7684\u662f",(0,t.kt)("inlineCode",{parentName:"p"},"Windows"),",\u5efa\u8bae\u4f7f\u7528 ",(0,t.kt)("inlineCode",{parentName:"p"},"WSL")," \u4e0b\u8f7d",(0,t.kt)("inlineCode",{parentName:"p"},"Ubuntu")," ,\u5e76\u5728\u5176\u4e2d\u5b8c\u6210\u8fd0\u884c\u3002"),(0,t.kt)("h3",{id:"\u5728windows\u4e0a\u8bbe\u7f6e\u5e26\u6709linux"},"\u5728Windows\u4e0a\u8bbe\u7f6e\uff08\u5e26\u6709Linux\uff09"),(0,t.kt)("h4",{id:"\u4e0b\u8f7dwindows\u5b50\u7cfb\u7edflinuxwsl"},"\u4e0b\u8f7dWindows\u5b50\u7cfb\u7edfLinux\uff08WSL\uff09"),(0,t.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f",(0,t.kt)("inlineCode",{parentName:"p"},"Windows"),"\u7535\u8111\uff0c\u5efa\u8bae\u4f7f\u7528",(0,t.kt)("inlineCode",{parentName:"p"},"Windows"),"\u5b50\u7cfb\u7edf",(0,t.kt)("inlineCode",{parentName:"p"},"Linux\uff08WSL\uff09"),"\u6765\u6784\u5efa\u4f60\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"Solana"),"\u7a0b\u5e8f\u3002"),(0,t.kt)("p",null,"\u6253\u5f00",(0,t.kt)("strong",{parentName:"p"},"\u7ba1\u7406\u5458"),"\u6743\u9650\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"PowerShell"),"\u6216",(0,t.kt)("inlineCode",{parentName:"p"},"Windows"),"\u547d\u4ee4\u63d0\u793a\u7b26\uff0c\u68c0\u67e5",(0,t.kt)("inlineCode",{parentName:"p"},"Windows"),"\u7248\u672c"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"winver\n")),(0,t.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f",(0,t.kt)("inlineCode",{parentName:"p"},"Windows 10"),"\u7248\u672c",(0,t.kt)("inlineCode",{parentName:"p"},"2004"),"\u53ca\u66f4\u9ad8\u7248\u672c\uff08",(0,t.kt)("inlineCode",{parentName:"p"},"Build 19041"),"\u53ca\u66f4\u9ad8\u7248\u672c\uff09\u6216",(0,t.kt)("inlineCode",{parentName:"p"},"Windows 11"),"\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"wsl --install\n")),(0,t.kt)("p",null,"\u5982\u679c\u4f60\u6b63\u5728\u4f7f\u7528\u8f83\u65e7\u7248\u672c\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"Windows"),"\uff0c\u8bf7\u6309\u7167",(0,t.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install-manual"},"\u8fd9\u91cc"),"\u7684\u8bf4\u660e\u8fdb\u884c\u64cd\u4f5c\u3002"),(0,t.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728",(0,t.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/wsl/install"},"\u8fd9\u91cc"),"\u9605\u8bfb\u66f4\u591a\u5173\u4e8e\u5b89\u88c5",(0,t.kt)("inlineCode",{parentName:"p"},"WS"),"L\u7684\u4fe1\u606f\u3002"),(0,t.kt)("h4",{id:"\u4e0b\u8f7dubuntu"},"\u4e0b\u8f7dUbuntu"),(0,t.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u5728\u8fd9\u91cc",(0,t.kt)("a",{parentName:"p",href:"https://apps.microsoft.com/store/detail/ubuntu-2004/9N6SVWS3RX71?hl=en-us&gl=US"},"\u4e0b\u8f7d",(0,t.kt)("inlineCode",{parentName:"a"},"Ubuntu")),"\u3002",(0,t.kt)("inlineCode",{parentName:"p"},"Ubuntu"),"\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7ec8\u7aef\uff0c\u53ef\u4ee5\u8ba9\u4f60\u5728",(0,t.kt)("inlineCode",{parentName:"p"},"Windows"),"\u7535\u8111\u4e0a\u8fd0\u884c",(0,t.kt)("inlineCode",{parentName:"p"},"Linux"),"\u3002\u8fd9\u5c31\u662f\u4f60\u5c06\u8fd0\u884c",(0,t.kt)("inlineCode",{parentName:"p"},"Solana CLI"),"\u547d\u4ee4\u7684\u5730\u65b9\u3002"),(0,t.kt)("h4",{id:"\u4e0b\u8f7d-rust\u9002\u7528\u4e8e-wsl"},"\u4e0b\u8f7d Rust\uff08\u9002\u7528\u4e8e WSL\uff09"),(0,t.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6253\u5f00",(0,t.kt)("inlineCode",{parentName:"p"},"Ubuntu"),"\u7ec8\u7aef\u5e76\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u4e0b\u8f7d\u9002\u7528\u4e8e",(0,t.kt)("inlineCode",{parentName:"p"},"WSL"),"\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"Rust"),"\u3002\u4f60\u53ef\u4ee5\u5728",(0,t.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/learn/get-started"},"\u6b64\u5904"),"\u9605\u8bfb\u6709\u5173\u4e0b\u8f7d",(0,t.kt)("inlineCode",{parentName:"p"},"Rust"),"\u7684\u66f4\u591a\u4fe1\u606f\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,t.kt)("h4",{id:"\u4e0b\u8f7d-solana-cli"},"\u4e0b\u8f7d Solana CLI"),(0,t.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u51c6\u5907\u4e0b\u8f7d\u9002\u7528\u4e8e",(0,t.kt)("inlineCode",{parentName:"p"},"Linux"),"\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"Solana CLI"),"\u3002\u8bf7\u5728",(0,t.kt)("inlineCode",{parentName:"p"},"Ubuntu"),"\u7ec8\u7aef\u4e2d\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u3002\u4f60\u53ef\u4ee5",(0,t.kt)("a",{parentName:"p",href:"https://docs.solana.com/cli/install-solana-cli-tools"},"\u5728\u6b64\u5904\u9605\u8bfb"),"\u6709\u5173\u4e0b\u8f7d",(0,t.kt)("inlineCode",{parentName:"p"},"Solana CLI"),"\u7684\u66f4\u591a\u4fe1\u606f\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},'sh -c "$(curl -sSfL https://release.solana.com/v1.16.10/install)"\n')),(0,t.kt)("h3",{id:"\u5728-macos-\u4e0a\u8fdb\u884c\u8bbe\u7f6e"},"\u5728 macOS \u4e0a\u8fdb\u884c\u8bbe\u7f6e"),(0,t.kt)("h4",{id:"\u4e0b\u8f7d-rust"},"\u4e0b\u8f7d Rust"),(0,t.kt)("p",null,"\u9996\u5148\uff0c\u6309\u7167",(0,t.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"\u8fd9\u91cc"),"\u7684\u8bf4\u660e\u4e0b\u8f7d",(0,t.kt)("inlineCode",{parentName:"p"},"Rust"),"\u3002"),(0,t.kt)("h4",{id:"\u4e0b\u8f7dsolana-cli"},"\u4e0b\u8f7dSolana CLI"),(0,t.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u5728\u7ec8\u7aef\u4e2d\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u4e0b\u8f7d",(0,t.kt)("inlineCode",{parentName:"p"},"Solana CLI"),"\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},'sh -c "$(curl -sSfL https://release.solana.com/v1.16.10/install)"\n')),(0,t.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728",(0,t.kt)("a",{parentName:"p",href:"https://docs.solana.com/cli/install-solana-cli-tools"},"\u8fd9\u91cc"),"\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u4e0b\u8f7d",(0,t.kt)("inlineCode",{parentName:"p"},"Solana CLI"),"\u7684\u4fe1\u606f\u3002"),(0,t.kt)("h2",{id:"solana-cli\u57fa\u7840"},"Solana CLI\u57fa\u7840"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"Solana CLI"),"\u662f\u4e00\u4e2a\u547d\u4ee4\u884c\u754c\u9762\u5de5\u5177\uff0c\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u547d\u4ee4\uff0c\u7528\u4e8e\u4e0e",(0,t.kt)("inlineCode",{parentName:"p"},"Solana"),"\u96c6\u7fa4\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,t.kt)("p",null,"\u5728\u672c\u8bfe\u7a0b\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u4e00\u4e9b\u6700\u5e38\u89c1\u7684\u547d\u4ee4\uff0c\u4f46\u4f60\u59cb\u7ec8\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c",(0,t.kt)("inlineCode",{parentName:"p"},"solana --help"),"\u6765\u67e5\u770b\u6240\u6709\u53ef\u80fd\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"Solana CLI"),"\u547d\u4ee4\u5217\u8868\u3002"),(0,t.kt)("h3",{id:"solana-cli-\u914d\u7f6e"},"Solana CLI \u914d\u7f6e"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"Solana CLI"),"\u5b58\u50a8\u4e86\u4e00\u4e9b\u914d\u7f6e\u8bbe\u7f6e\uff0c\u8fd9\u4e9b\u8bbe\u7f6e\u4f1a\u5f71\u54cd\u67d0\u4e9b\u547d\u4ee4\u7684\u884c\u4e3a\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u5f53\u524d\u7684\u914d\u7f6e\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"solana config get\n")),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"solana config get"),"\u547d\u4ee4\u5c06\u8fd4\u56de\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u6587\u4ef6 - ",(0,t.kt)("inlineCode",{parentName:"li"},"Solana CLI"),"\u6240\u5728\u7684\u6587\u4ef6\u4f4d\u4e8e\u4f60\u7684\u8ba1\u7b97\u673a\u4e0a"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"RPC URL")," - \u4f60\u6b63\u5728\u4f7f\u7528\u7684\u7aef\u70b9\uff0c\u5c06\u4f60\u8fde\u63a5\u5230\u672c\u5730\u4e3b\u673a\u3001\u5f00\u53d1\u7f51\u7edc\u6216\u4e3b\u7f51\u7edc"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"WebSocket URL")," - \u76d1\u542c\u6765\u81ea\u76ee\u6807\u96c6\u7fa4\u7684\u4e8b\u4ef6\u7684",(0,t.kt)("inlineCode",{parentName:"li"},"WebSocket"),"\uff08\u5728\u8bbe\u7f6e",(0,t.kt)("inlineCode",{parentName:"li"},"RPC URL"),"\u65f6\u8ba1\u7b97\uff09"),(0,t.kt)("li",{parentName:"ul"},"\u5bc6\u94a5\u5bf9\u8def\u5f84 - \u5728\u8fd0\u884c",(0,t.kt)("inlineCode",{parentName:"li"},"Solana CLI"),"\u5b50\u547d\u4ee4\u65f6\u4f7f\u7528\u7684\u5bc6\u94a5\u5bf9\u8def\u5f84"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Commitment")," - \u63d0\u4f9b\u4e86\u7f51\u7edc\u786e\u8ba4\u7684\u5ea6\u91cf\uff0c\u5e76\u63cf\u8ff0\u4e86\u4e00\u4e2a\u533a\u5757\u5728\u7279\u5b9a\u65f6\u95f4\u70b9\u4e0a\u7684\u6700\u7ec8\u6027\u7a0b\u5ea6")),(0,t.kt)("p",null,"\u4f60\u53ef\u4ee5\u968f\u65f6\u4f7f\u7528",(0,t.kt)("inlineCode",{parentName:"p"},"solana config set"),"\u547d\u4ee4\u66f4\u6539\u4f60\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"Solana CLI"),"\u914d\u7f6e\uff0c\u7136\u540e\u8ddf\u4e0a\u4f60\u60f3\u8981\u66f4\u65b0\u7684\u8bbe\u7f6e\u3002"),(0,t.kt)("p",null,"\u6700\u5e38\u89c1\u7684\u66f4\u6539\u5c06\u662f\u4f60\u8981\u5b9a\u4f4d\u7684\u96c6\u7fa4\u3002\u4f7f\u7528",(0,t.kt)("inlineCode",{parentName:"p"},"solana config set --url"),"\u547d\u4ee4\u66f4\u6539",(0,t.kt)("inlineCode",{parentName:"p"},"RPC URL"),"\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"# localhost\nsolana config set --url localhost\n\n# devnet\nsolana config set --url devnet\n\n# mainnet-beta\nsolana config set --url mainnet-beta\n\n")),(0,t.kt)("admonition",{type:"caution"},(0,t.kt)("p",{parentName:"admonition"},"\u7531\u4e8e\u67d0\u4e9b\u4f60\u77e5\u9053\u7684\u539f\u56e0\uff0cdevnet \u6216\u8005 mainnet \u53ef\u80fd\u8bbf\u95ee\u4e0d\u4f73\u3002\u5efa\u8bae\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u4f7f\u7528 localhost \u7f51\u7edc\u3002\u6700\u540e\u9700\u8981\u90e8\u7f72\u5e94\u7528\u7684\u4f7f\u7528\uff0c\u5efa\u8bae\u4f7f\u7528 ",(0,t.kt)("a",{parentName:"p",href:"https://www.quicknode.com/"},"quicknode")," \u7684rpc \u8282\u70b9\u3002")),(0,t.kt)("p",null,"\u540c\u6837\u5730\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,t.kt)("inlineCode",{parentName:"p"},"solana config set --keypair"),"\u547d\u4ee4\u6765\u66f4\u6539\u5bc6\u94a5\u5bf9\u8def\u5f84\u3002\u5f53\u8fd0\u884c\u547d\u4ee4\u65f6\uff0c",(0,t.kt)("inlineCode",{parentName:"p"},"Solana CLI"),"\u5c06\u4f7f\u7528\u6307\u5b9a\u8def\u5f84\u4e0b\u7684\u5bc6\u94a5\u5bf9\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"solana config set --keypair ~/<FILE_PATH>\n")),(0,t.kt)("h3",{id:"\u6d4b\u8bd5\u9a8c\u8bc1\u5668"},"\u6d4b\u8bd5\u9a8c\u8bc1\u5668"),(0,t.kt)("p",null,"\u4f60\u4f1a\u53d1\u73b0\u5728\u6d4b\u8bd5\u548c\u8c03\u8bd5\u65f6\u8fd0\u884c\u672c\u5730\u9a8c\u8bc1\u5668\u6bd4\u90e8\u7f72\u5230\u5f00\u53d1\u7f51\u7edc\u66f4\u6709\u5e2e\u52a9\u3002"),(0,t.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,t.kt)("inlineCode",{parentName:"p"},"solana-test-validator"),"\u547d\u4ee4\u8fd0\u884c\u672c\u5730\u6d4b\u8bd5\u9a8c\u8bc1\u5668\u3002\u8be5\u547d\u4ee4\u4f1a\u521b\u5efa\u4e00\u4e2a\u6301\u7eed\u8fd0\u884c\u7684\u8fdb\u7a0b\uff0c\u9700\u8981\u5355\u72ec\u7684\u547d\u4ee4\u884c\u7a97\u53e3\u3002"),(0,t.kt)("h3",{id:"stream-program-logs"},"Stream program logs"),(0,t.kt)("p",null,"\u901a\u5e38\u5728\u6253\u5f00\u4e00\u4e2a\u65b0\u7684\u63a7\u5236\u53f0\u5e76\u5728\u6d4b\u8bd5\u9a8c\u8bc1\u5668\u65c1\u8fb9\u8fd0\u884c",(0,t.kt)("inlineCode",{parentName:"p"},"solana logs"),"\u547d\u4ee4\u4f1a\u5f88\u6709\u5e2e\u52a9\u3002\u8fd9\u5c06\u521b\u5efa\u53e6\u4e00\u4e2a\u6301\u7eed\u8fdb\u884c\u7684\u8fdb\u7a0b\uff0c\u7528\u4e8e\u6d41\u5f0f\u4f20\u8f93\u4e0e\u4f60\u914d\u7f6e\u7684\u96c6\u7fa4\u76f8\u5173\u7684\u65e5\u5fd7\u3002"),(0,t.kt)("p",null,"\u5982\u679c\u4f60\u7684CLI\u914d\u7f6e\u6307\u5411\u672c\u5730\u4e3b\u673a\uff0c\u5219\u65e5\u5fd7\u5c06\u59cb\u7ec8\u4e0e\u4f60\u521b\u5efa\u7684\u6d4b\u8bd5\u9a8c\u8bc1\u5668\u76f8\u5173\u8054\uff0c\u4f46\u4f60\u4e5f\u53ef\u4ee5\u4ece\u5176\u4ed6\u96c6\u7fa4\uff08\u5982",(0,t.kt)("inlineCode",{parentName:"p"},"Devnet"),"\u548c",(0,t.kt)("inlineCode",{parentName:"p"},"Mainnet Beta"),"\uff09\u6d41\u5f0f\u4f20\u8f93\u65e5\u5fd7\u3002\u5f53\u4ece\u5176\u4ed6\u96c6\u7fa4\u6d41\u5f0f\u4f20\u8f93\u65e5\u5fd7\u65f6\uff0c\u4f60\u9700\u8981\u5728\u547d\u4ee4\u4e2d\u5305\u542b\u4e00\u4e2a\u7a0b\u5e8f",(0,t.kt)("inlineCode",{parentName:"p"},"ID"),"\uff0c\u4ee5\u9650\u5236\u4f60\u6240\u770b\u5230\u7684\u65e5\u5fd7\u4ec5\u9488\u5bf9\u4f60\u7684\u7279\u5b9a\u7a0b\u5e8f\u3002"),(0,t.kt)("h3",{id:"\u5bc6\u94a5\u76f8\u5173"},"\u5bc6\u94a5\u76f8\u5173"),(0,t.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,t.kt)("inlineCode",{parentName:"p"},"solana-keygen new --outfile"),"\u547d\u4ee4\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u5bc6\u94a5\u5bf9\uff0c\u5e76\u6307\u5b9a\u6587\u4ef6\u8def\u5f84\u4ee5\u5b58\u50a8\u8be5\u5bc6\u94a5\u5bf9\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"solana-keygen new --outfile ~/<FILE_PATH>\n")),(0,t.kt)("p",null,"\u6709\u65f6\u5019\u4f60\u53ef\u80fd\u9700\u8981\u68c0\u67e5\u4f60\u7684\u914d\u7f6e\u6307\u5411\u54ea\u4e2a\u5bc6\u94a5\u5bf9\u3002\u8981\u67e5\u770b\u5f53\u524d\u5728",(0,t.kt)("inlineCode",{parentName:"p"},"solana config"),"\u4e2d\u8bbe\u7f6e\u7684\u5bc6\u94a5\u5bf9\u7684\u516c\u94a5\uff0c\u8bf7\u4f7f\u7528",(0,t.kt)("inlineCode",{parentName:"p"},"solana address"),"\u547d\u4ee4\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"solana address\n")),(0,t.kt)("p",null,"\u8981\u67e5\u770b\u5728",(0,t.kt)("inlineCode",{parentName:"p"},"Solana"),"\u914d\u7f6e\u4e2d\u8bbe\u7f6e\u7684\u5f53\u524d\u5bc6\u94a5\u5bf9\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"SOL"),"\u4f59\u989d\uff0c\u8bf7\u4f7f\u7528",(0,t.kt)("inlineCode",{parentName:"p"},"solana balance"),"\u547d\u4ee4\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"solana balance\n")),(0,t.kt)("p",null,"\u8981\u5728",(0,t.kt)("inlineCode",{parentName:"p"},"Devnet"),"\u6216",(0,t.kt)("inlineCode",{parentName:"p"},"localhost"),"\u4e0a\u8fdb\u884c",(0,t.kt)("inlineCode",{parentName:"p"},"SOL"),"\u7684\u7a7a\u6295\uff0c\u8bf7\u4f7f\u7528",(0,t.kt)("inlineCode",{parentName:"p"},"solana airdrop"),"\u547d\u4ee4\u3002\u8bf7\u6ce8\u610f\uff0c\u5728",(0,t.kt)("inlineCode",{parentName:"p"},"Devnet"),"\u4e0a\uff0c\u6bcf\u6b21\u7a7a\u6295\u9650\u5236\u4e3a2\u4e2aSOL\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"solana airdrop 2\n")),(0,t.kt)("p",null,"\u5728\u4f60\u5f00\u53d1\u548c\u6d4b\u8bd5\u672c\u5730\u73af\u5883\u4e2d\u7684\u7a0b\u5e8f\u65f6\uff0c\u5f88\u53ef\u80fd\u4f1a\u9047\u5230\u7531\u4ee5\u4e0b\u539f\u56e0\u5f15\u8d77\u7684\u9519\u8bef\uff1a"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u9519\u8bef\u7684\u5bc6\u94a5\u5bf9"),(0,t.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u8db3\u591f\u7684SOL\u6765\u90e8\u7f72\u4f60\u7684\u7a0b\u5e8f\u6216\u6267\u884c\u4ea4\u6613"),(0,t.kt)("li",{parentName:"ul"},"\u6307\u5411\u9519\u8bef\u7684\u96c6\u7fa4")),(0,t.kt)("p",null,"\u5230\u76ee\u524d\u4e3a\u6b62\uff0c\u6211\u4eec\u5df2\u7ecf\u4ecb\u7ecd\u4e86\u4e00\u4e9b",(0,t.kt)("inlineCode",{parentName:"p"},"CLI"),"\u547d\u4ee4\uff0c\u8fd9\u4e9b\u547d\u4ee4\u5e94\u8be5\u80fd\u5e2e\u52a9\u4f60\u5feb\u901f\u89e3\u51b3\u90a3\u4e9b\u95ee\u9898\u3002"),(0,t.kt)("h2",{id:"hello-world-\u7a0b\u5e8f"},"hello world \u7a0b\u5e8f"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/all-in-one-solana/Solana-Co-Learn/module1/local_program_development/native_program_hello"},"Native Solana\u5408\u7ea6\u5b9e\u73b0 - hello, World")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/all-in-one-solana/Solana-Co-Learn/module1/local_program_development/anchor_program_hello"},"Anchor \u5408\u7ea6\u6846\u67b6\u5b9e\u73b0 - hello, World \ud83c\udf0d With PDA\n")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/all-in-one-solana/Solana-Co-Learn/module1/local_program_development/solang_program_hello"},"Solang solidity\u5408\u7ea6\u5b9e\u73b0 - hello, World"))),(0,t.kt)("h2",{id:"\u6311\u6218"},"\u6311\u6218"),(0,t.kt)("p",null,"\u73b0\u5728\u8f6e\u5230\u4f60\u72ec\u7acb\u6784\u5efa\u4e00\u4e9b\u4e1c\u897f\u4e86\u3002\u5c1d\u8bd5\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u7a0b\u5e8f\uff0c\u5c06\u4f60\u81ea\u5df1\u7684\u6d88\u606f\u6253\u5370\u5230\u7a0b\u5e8f\u65e5\u5fd7\u4e2d\u3002\u8fd9\u6b21\u5c06\u4f60\u7684\u7a0b\u5e8f\u90e8\u7f72\u5230",(0,t.kt)("inlineCode",{parentName:"p"},"Devnet"),"\u800c\u4e0d\u662f\u672c\u5730\u4e3b\u673a\u3002"),(0,t.kt)("p",null,"\u8bb0\u5f97\u4f7f\u7528",(0,t.kt)("inlineCode",{parentName:"p"},"solana config set --url"),"\u547d\u4ee4\u5c06\u4f60\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"RPC URL"),"\u66f4\u65b0\u4e3a",(0,t.kt)("inlineCode",{parentName:"p"},"Devnet"),"\u3002"),(0,t.kt)("p",null,"\u53ea\u8981\u4f60\u5c06\u8fde\u63a5\u548c",(0,t.kt)("a",{parentName:"p",href:"https://explorer.solana.com"},"Solana Explorer"),"\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"URL"),"\u66f4\u65b0\u4e3a\u6307\u5411",(0,t.kt)("inlineCode",{parentName:"p"},"Devnet"),"\u800c\u4e0d\u662f",(0,t.kt)("inlineCode",{parentName:"p"},"localhost"),"\uff0c\u4f60\u5c31\u53ef\u4ee5\u4f7f\u7528\u4e0e\u6f14\u793a\u4e2d\u76f8\u540c\u7684\u5ba2\u6237\u7aef\u811a\u672c\u6765\u8c03\u7528\u8be5\u7a0b\u5e8f\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},'let connection = new web3.Connection(web3.clusterApiUrl("devnet"));\n')),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"console.log(\n    `Transaction: https://explorer.solana.com/tx/${transactionSignature}?cluster=devnet`\n);\n")),(0,t.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u6253\u5f00\u4e00\u4e2a\u5355\u72ec\u7684\u547d\u4ee4\u884c\u7a97\u53e3\uff0c\u5e76\u4f7f\u7528",(0,t.kt)("inlineCode",{parentName:"p"},'solana logs | grep " invoke" -A')," \u3002\u5728",(0,t.kt)("inlineCode",{parentName:"p"},"Devnet"),"\u4e0a\u4f7f\u7528",(0,t.kt)("inlineCode",{parentName:"p"},"solana logs"),"\u65f6\uff0c\u4f60\u5fc5\u987b\u6307\u5b9a\u7a0b\u5e8f",(0,t.kt)("inlineCode",{parentName:"p"},"ID"),"\u3002\u5426\u5219\uff0c",(0,t.kt)("inlineCode",{parentName:"p"},"solana logs"),"\u547d\u4ee4\u5c06\u8fd4\u56de\u6765\u81ea",(0,t.kt)("inlineCode",{parentName:"p"},"Devnet"),"\u7684\u6301\u7eed\u65e5\u5fd7\u6d41\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u76d1\u89c6\u5bf9",(0,t.kt)("inlineCode",{parentName:"p"},"Token"),"\u7a0b\u5e8f\u7684\u8c03\u7528\uff0c\u5e76\u663e\u793a\u6bcf\u4e2a\u8c03\u7528\u7684\u524d5\u884c\u65e5\u5fd7\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},'solana logs | grep "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke" -A 5\n')),(0,t.kt)("h2",{id:"\u5b98\u65b9\u53c2\u8003\u6587\u6863"},"\u5b98\u65b9\u53c2\u8003\u6587\u6863"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/tools/install"},"\u5b89\u88c5Rust")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://docs.solana.com/cli/install-solana-cli-tools"},"\u5b89\u88c5Solana\u5de5\u5177\u5957\u4ef6"))))}u.isMDXComponent=!0}}]);