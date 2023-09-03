"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[2976],{3905:(n,e,t)=>{t.d(e,{Zo:()=>s,kt:()=>m});var o=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,o,a=function(n,e){if(null==n)return{};var t,o,a={},c=Object.keys(n);for(o=0;o<c.length;o++)t=c[o],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(o=0;o<c.length;o++)t=c[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var r=o.createContext({}),u=function(n){var e=o.useContext(r),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},s=function(n){var e=u(n.components);return o.createElement(r.Provider,{value:e},n.children)},p="mdxType",k={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},y=o.forwardRef((function(n,e){var t=n.components,a=n.mdxType,c=n.originalType,r=n.parentName,s=l(n,["components","mdxType","originalType","parentName"]),p=u(t),y=a,m=p["".concat(r,".").concat(y)]||p[y]||k[y]||c;return t?o.createElement(m,i(i({ref:e},s),{},{components:t})):o.createElement(m,i({ref:e},s))}));function m(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var c=t.length,i=new Array(c);i[0]=y;var l={};for(var r in e)hasOwnProperty.call(e,r)&&(l[r]=e[r]);l.originalType=n,l[p]="string"==typeof n?n:a,i[1]=l;for(var u=2;u<c;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}y.displayName="MDXCreateElement"},73546:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>i,default:()=>k,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var o=t(87462),a=(t(67294),t(3905));const c={title:"\u4ee3\u5e01",sidebar_position:20,tags:["solana-cook-book","token"]},i="\u4ee3\u5e01",l={unversionedId:"references/token",id:"references/token",title:"\u4ee3\u5e01",description:"\u6211\u9700\u8981\u4ec0\u4e48\u624d\u80fd\u5f00\u59cb\u4f7f\u7528SPL\u4ee3\u5e01\uff1f",source:"@site/docs/cookbook-zh/references/token.md",sourceDirName:"references",slug:"/references/token",permalink:"/all-in-one-solana/cookbook-zh/references/token",draft:!1,editUrl:"https://github.com/CreatorsDAO/all-in-one-solana/tree/main/docs/cookbook-zh/references/token.md",tags:[{label:"solana-cook-book",permalink:"/all-in-one-solana/cookbook-zh/tags/solana-cook-book"},{label:"token",permalink:"/all-in-one-solana/cookbook-zh/tags/token"}],version:"current",lastUpdatedBy:"Davirain",lastUpdatedAt:1693736064,formattedLastUpdatedAt:"Sep 3, 2023",sidebarPosition:20,frontMatter:{title:"\u4ee3\u5e01",sidebar_position:20,tags:["solana-cook-book","token"]},sidebar:"tutorialSidebar",previous:{title:"\u7f16\u5199\u7a0b\u5e8f",permalink:"/all-in-one-solana/cookbook-zh/references/programs"},next:{title:"\u8d28\u62bc",permalink:"/all-in-one-solana/cookbook-zh/references/staking"}},r={},u=[{value:"\u6211\u9700\u8981\u4ec0\u4e48\u624d\u80fd\u5f00\u59cb\u4f7f\u7528SPL\u4ee3\u5e01\uff1f",id:"\u6211\u9700\u8981\u4ec0\u4e48\u624d\u80fd\u5f00\u59cb\u4f7f\u7528spl\u4ee3\u5e01",level:2},{value:"\u5982\u4f55\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u4ee3\u5e01",id:"\u5982\u4f55\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u4ee3\u5e01",level:2},{value:"\u5982\u4f55\u83b7\u5f97\u4e00\u4e2a\u4ee3\u5e01\u94f8\u5e01\u8d26\u6237",id:"\u5982\u4f55\u83b7\u5f97\u4e00\u4e2a\u4ee3\u5e01\u94f8\u5e01\u8d26\u6237",level:2},{value:"\u5982\u4f55\u521b\u5efa\u4e00\u4e2a\u4ee3\u5e01\u8d26\u6237",id:"\u5982\u4f55\u521b\u5efa\u4e00\u4e2a\u4ee3\u5e01\u8d26\u6237",level:2},{value:"\u5982\u4f55\u83b7\u5f97\u4e00\u4e2a\u4ee3\u5e01\u8d26\u6237",id:"\u5982\u4f55\u83b7\u5f97\u4e00\u4e2a\u4ee3\u5e01\u8d26\u6237",level:2},{value:"\u5982\u4f55\u83b7\u5f97\u4e00\u4e2a\u4ee3\u5e01\u8d26\u6237\u7684\u4f59\u989d",id:"\u5982\u4f55\u83b7\u5f97\u4e00\u4e2a\u4ee3\u5e01\u8d26\u6237\u7684\u4f59\u989d",level:2},{value:"\u5982\u4f55\u94f8\u9020(mint)\u4ee3\u5e01",id:"\u5982\u4f55\u94f8\u9020mint\u4ee3\u5e01",level:2},{value:"\u5982\u4f55\u8f6c\u79fb\u4ee3\u5e01",id:"\u5982\u4f55\u8f6c\u79fb\u4ee3\u5e01",level:2},{value:"\u5982\u4f55\u9500\u4ee3\u5e01",id:"\u5982\u4f55\u9500\u4ee3\u5e01",level:2},{value:"\u5982\u4f55\u5173\u95ed\u4ee3\u5e01\u8d26\u6237",id:"\u5982\u4f55\u5173\u95ed\u4ee3\u5e01\u8d26\u6237",level:2},{value:"\u5982\u4f55\u5728\u4ee3\u5e01\u8d26\u6237\u6216\u94f8\u5e01\u8d26\u6237\u4e0a\u8bbe\u7f6e\u6743\u9650",id:"\u5982\u4f55\u5728\u4ee3\u5e01\u8d26\u6237\u6216\u94f8\u5e01\u8d26\u6237\u4e0a\u8bbe\u7f6e\u6743\u9650",level:2},{value:"\u5982\u4f55\u6279\u51c6\u4ee3\u5e01\u59d4\u6258",id:"\u5982\u4f55\u6279\u51c6\u4ee3\u5e01\u59d4\u6258",level:2},{value:"\u5982\u4f55\u64a4\u9500\u4ee3\u5e01\u59d4\u6258",id:"\u5982\u4f55\u64a4\u9500\u4ee3\u5e01\u59d4\u6258",level:2},{value:"\u5982\u4f55\u7ba1\u7406\u5305\u88c5\u7684SOL",id:"\u5982\u4f55\u7ba1\u7406\u5305\u88c5\u7684sol",level:2},{value:"\u521b\u5efa\u4ee3\u5e01\u8d26\u6237",id:"\u521b\u5efa\u4ee3\u5e01\u8d26\u6237",level:3},{value:"\u589e\u52a0\u4f59\u989d",id:"\u589e\u52a0\u4f59\u989d",level:3},{value:"1. \u901a\u8fc7 SOL \u8f6c\u8d26\u65b9\u5f0f",id:"1-\u901a\u8fc7-sol-\u8f6c\u8d26\u65b9\u5f0f",level:4},{value:"2. \u901a\u8fc7\u4ee3\u5e01\u8f6c\u8d26\u65b9\u5f0f",id:"2-\u901a\u8fc7\u4ee3\u5e01\u8f6c\u8d26\u65b9\u5f0f",level:4},{value:"\u5982\u4f55\u901a\u8fc7\u6240\u6709\u8005\u83b7\u53d6\u6240\u6709\u4ee3\u5e01\u8d26\u6237",id:"\u5982\u4f55\u901a\u8fc7\u6240\u6709\u8005\u83b7\u53d6\u6240\u6709\u4ee3\u5e01\u8d26\u6237",level:2}],s={toc:u},p="wrapper";function k(n){let{components:e,...t}=n;return(0,a.kt)(p,(0,o.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4ee3\u5e01"},"\u4ee3\u5e01"),(0,a.kt)("h2",{id:"\u6211\u9700\u8981\u4ec0\u4e48\u624d\u80fd\u5f00\u59cb\u4f7f\u7528spl\u4ee3\u5e01"},"\u6211\u9700\u8981\u4ec0\u4e48\u624d\u80fd\u5f00\u59cb\u4f7f\u7528SPL\u4ee3\u5e01\uff1f"),(0,a.kt)("p",null,"\u6bcf\u5f53\u4f60\u5728Solana\u4e0a\u4e0e\u4ee3\u5e01\u8fdb\u884c\u4ea4\u4e92\u65f6\uff0c\u5b9e\u9645\u4e0a\u4f60\u6b63\u5728\u4e0eSolana\u7a0b\u5e8f\u5e93\u4ee3\u5e01\uff08SPL-Token\uff09\u6216SPL\u4ee3\u5e01\u6807\u51c6\u4ea4\u4e92\u3002SPL\u4ee3\u5e01\u6807\u51c6\u9700\u8981\u4f7f\u7528\u7279\u5b9a\u7684\u5e93\uff0c\u4f60\u53ef\u4ee5\u6839\u636e\u4f60\u4f7f\u7528\u7684\u7f16\u7a0b\u8bed\u8a00\u5728\u4e0b\u9762\u627e\u5230\u76f8\u5e94\u7684\u5e93\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'"@solana/spl-token": "^0.2.0"\n')),(0,a.kt)("h2",{id:"\u5982\u4f55\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u4ee3\u5e01"},"\u5982\u4f55\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u4ee3\u5e01"),(0,a.kt)("p",null,"\u521b\u5efa\u4ee3\u5e01\u662f\u901a\u8fc7\u521b\u5efa\u6240\u8c13\u7684\u201c\u94f8\u5e01\u8d26\u6237\u201d\u6765\u5b8c\u6210\u7684\u3002\u8fd9\u4e2a\u94f8\u5e01\u8d26\u6237\u968f\u540e\u7528\u4e8e\u5411\u7528\u6237\u7684\u4ee3\u5e01\u8d26\u6237\u94f8\u9020\u4ee3\u5e01\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// 1) use build-in function\nlet mintPubkey = await createMint(\n  connection, // conneciton\n  feePayer, // fee payer\n  alice.publicKey, // mint authority\n  alice.publicKey, // freeze authority (you can use `null` to disable it. when you disable it, you can't turn it on again)\n  8 // decimals\n);\n\n// or\n\n// 2) compose by yourself\nlet tx = new Transaction().add(\n  // create mint account\n  SystemProgram.createAccount({\n    fromPubkey: feePayer.publicKey,\n    newAccountPubkey: mint.publicKey,\n    space: MINT_SIZE,\n    lamports: await getMinimumBalanceForRentExemptMint(connection),\n    programId: TOKEN_PROGRAM_ID,\n  }),\n  // init mint account\n  createInitializeMintInstruction(\n    mint.publicKey, // mint pubkey\n    8, // decimals\n    alice.publicKey, // mint authority\n    alice.publicKey // freeze authority (you can use `null` to disable it. when you disable it, you can't turn it on again)\n  )\n);\n\n")),(0,a.kt)("h2",{id:"\u5982\u4f55\u83b7\u5f97\u4e00\u4e2a\u4ee3\u5e01\u94f8\u5e01\u8d26\u6237"},"\u5982\u4f55\u83b7\u5f97\u4e00\u4e2a\u4ee3\u5e01\u94f8\u5e01\u8d26\u6237"),(0,a.kt)("p",null,"\u4e3a\u4e86\u83b7\u5f97\u4ee3\u5e01\u7684\u5f53\u524d\u4f9b\u5e94\u91cf\u3001\u6388\u6743\u4fe1\u606f\u6216\u5c0f\u6570\u4f4d\u6570\uff0c\u4f60\u9700\u8981\u83b7\u53d6\u4ee3\u5e01\u94f8\u5e01\u8d26\u6237\u7684\u8d26\u6237\u4fe1\u606f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let mintAccount = await getMint(connection, mintAccountPublicKey);\n")),(0,a.kt)("h2",{id:"\u5982\u4f55\u521b\u5efa\u4e00\u4e2a\u4ee3\u5e01\u8d26\u6237"},"\u5982\u4f55\u521b\u5efa\u4e00\u4e2a\u4ee3\u5e01\u8d26\u6237"),(0,a.kt)("p",null,"\u7528\u6237\u9700\u8981\u4e00\u4e2a\u4ee3\u5e01\u8d26\u6237\u6765\u6301\u6709\u4ee3\u5e01\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u7528\u6237\u6240\u62e5\u6709\u7684\u6bcf\u79cd\u7c7b\u578b\u7684\u4ee3\u5e01\uff0c\u4ed6\u4eec\u5c06\u81f3\u5c11\u62e5\u6709\u4e00\u4e2a\u4ee3\u5e01\u8d26\u6237\u3002"),(0,a.kt)("p",null,"\u5173\u8054\u4ee3\u5e01\u8d26\u6237(Associated Token Accounts, ATA) \u662f\u6839\u636e\u6bcf\u4e2a\u5bc6\u94a5\u5bf9\u786e\u5b9a\u6027\u5730\u521b\u5efa\u7684\u8d26\u6237\u3002\u5173\u8054\u4ee3\u5e01\u8d26\u6237\u662f\u7ba1\u7406\u4ee3\u5e01\u8d26\u6237\u7684\u63a8\u8350\u65b9\u6cd5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// 1) use build-in function\n{\n  let ata = await createAssociatedTokenAccount(\n    connection, // connection\n    feePayer, // fee payer\n    mintPubkey, // mint\n    alice.publicKey // owner,\n  );\n}\n\n// or\n\n// 2) composed by yourself\n{\n  let tx = new Transaction().add(\n    createAssociatedTokenAccountInstruction(\n      feePayer.publicKey, // payer\n      ata, // ata\n      alice.publicKey, // owner\n      mintPubkey // mint\n    )\n  );\n}\n\n")),(0,a.kt)("h2",{id:"\u5982\u4f55\u83b7\u5f97\u4e00\u4e2a\u4ee3\u5e01\u8d26\u6237"},"\u5982\u4f55\u83b7\u5f97\u4e00\u4e2a\u4ee3\u5e01\u8d26\u6237"),(0,a.kt)("p",null,"\u6bcf\u4e2a\u4ee3\u5e01\u8d26\u6237\u90fd\u5305\u542b\u6709\u5173\u4ee3\u5e01\u7684\u4fe1\u606f\uff0c\u4f8b\u5982\u6240\u6709\u8005\u3001\u94f8\u5e01\u8d26\u6237\u3001\u6570\u91cf\uff08\u4f59\u989d\uff09\u548c\u5c0f\u6570\u4f4d\u6570\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let tokenAccount = await getAccount(connection, tokenAccountPubkey);\n")),(0,a.kt)("h2",{id:"\u5982\u4f55\u83b7\u5f97\u4e00\u4e2a\u4ee3\u5e01\u8d26\u6237\u7684\u4f59\u989d"},"\u5982\u4f55\u83b7\u5f97\u4e00\u4e2a\u4ee3\u5e01\u8d26\u6237\u7684\u4f59\u989d"),(0,a.kt)("p",null,"\u6bcf\u4e2a\u4ee3\u5e01\u8d26\u6237\u90fd\u5305\u542b\u6709\u5173\u4ee3\u5e01\u7684\u4fe1\u606f\uff0c\u4f8b\u5982\u6240\u6709\u8005\u3001\u94f8\u5e01\u8d26\u6237\u3001\u6570\u91cf\uff08\u4f59\u989d\uff09\u548c\u5c0f\u6570\u4f4d\u6570\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let tokenAmount = await connection.getTokenAccountBalance(tokenAccount);\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"\u8d34\u58eb"),"\n\u4e00\u4e2a\u4ee3\u5e01\u8d26\u6237\u53ea\u80fd\u6301\u6709\u4e00\u79cd\u94f8\u5e01\u3002\u5f53\u60a8\u6307\u5b9a\u4e00\u4e2a\u4ee3\u5e01\u8d26\u6237\u65f6\uff0c\u60a8\u4e5f\u9700\u8981\u6307\u5b9a\u4e00\u4e2a\u94f8\u5e01\u3002")),(0,a.kt)("h2",{id:"\u5982\u4f55\u94f8\u9020mint\u4ee3\u5e01"},"\u5982\u4f55\u94f8\u9020(mint)\u4ee3\u5e01"),(0,a.kt)("p",null,"\u5f53\u4f60\u94f8\u9020\u4ee3\u5e01\u65f6\uff0c\u4f60\u4f1a\u589e\u52a0\u4f9b\u5e94\u91cf\u5e76\u5c06\u65b0\u4ee3\u5e01\u8f6c\u79fb\u5230\u7279\u5b9a\u7684\u4ee3\u5e01\u8d26\u6237\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// 1) use build-in function\n{\n  let txhash = await mintToChecked(\n    connection, // connection\n    feePayer, // fee payer\n    mintPubkey, // mint\n    tokenAccountPubkey, // receiver (sholud be a token account)\n    alice, // mint authority\n    1e8, // amount. if your decimals is 8, you mint 10^8 for 1 token.\n    8 // decimals\n  );\n}\n\n// or\n\n// 2) compose by yourself\n{\n  let tx = new Transaction().add(\n    createMintToCheckedInstruction(\n      mintPubkey, // mint\n      tokenAccountPubkey, // receiver (sholud be a token account)\n      alice.publicKey, // mint authority\n      1e8, // amount. if your decimals is 8, you mint 10^8 for 1 token.\n      8 // decimals\n      // [signer1, signer2 ...], // only multisig account will use\n    )\n  );\n}\n\n")),(0,a.kt)("h2",{id:"\u5982\u4f55\u8f6c\u79fb\u4ee3\u5e01"},"\u5982\u4f55\u8f6c\u79fb\u4ee3\u5e01"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5c06\u4ee3\u5e01\u4ece\u4e00\u4e2a\u4ee3\u5e01\u8d26\u6237\u8f6c\u79fb\u5230\u53e6\u4e00\u4e2a\u4ee3\u5e01\u8d26\u6237\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// 1) use build-in function\n{\n  let txhash = await transferChecked(\n    connection, // connection\n    feePayer, // payer\n    tokenAccountXPubkey, // from (should be a token account)\n    mintPubkey, // mint\n    tokenAccountYPubkey, // to (should be a token account)\n    alice, // from's owner\n    1e8, // amount, if your deciamls is 8, send 10^8 for 1 token\n    8 // decimals\n  );\n}\n\n// or\n\n// 2) compose by yourself\n{\n  let tx = new Transaction().add(\n    createTransferCheckedInstruction(\n      tokenAccountXPubkey, // from (should be a token account)\n      mintPubkey, // mint\n      tokenAccountYPubkey, // to (should be a token account)\n      alice.publicKey, // from's owner\n      1e8, // amount, if your deciamls is 8, send 10^8 for 1 token\n      8 // decimals\n    )\n  );\n}\n")),(0,a.kt)("h2",{id:"\u5982\u4f55\u9500\u4ee3\u5e01"},"\u5982\u4f55\u9500\u4ee3\u5e01"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u662f\u4ee3\u5e01\u7684\u6240\u6709\u8005\uff0c\u4f60\u53ef\u4ee5\u9500\u6bc1\u4ee3\u5e01\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// 1) use build-in function\n{\n  let txhash = await burnChecked(\n    connection, // connection\n    feePayer, // payer\n    tokenAccountPubkey, // token account\n    mintPubkey, // mint\n    alice, // owner\n    1e8, // amount, if your deciamls is 8, 10^8 for 1 token\n    8\n  );\n}\n\n// or\n\n// 2) compose by yourself\n{\n  let tx = new Transaction().add(\n    createBurnCheckedInstruction(\n      tokenAccountPubkey, // token account\n      mintPubkey, // mint\n      alice.publicKey, // owner of token account\n      1e8, // amount, if your deciamls is 8, 10^8 for 1 token\n      8 // decimals\n    )\n  );\n}\n\n")),(0,a.kt)("h2",{id:"\u5982\u4f55\u5173\u95ed\u4ee3\u5e01\u8d26\u6237"},"\u5982\u4f55\u5173\u95ed\u4ee3\u5e01\u8d26\u6237"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u4e0d\u518d\u9700\u8981\u4f7f\u7528\u67d0\u4e2a\u4ee3\u5e01\u8d26\u6237\uff0c\u4f60\u53ef\u4ee5\u5173\u95ed\u5b83\u3002\u6709\u4e24\u79cd\u60c5\u51b5\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5305\u88c5\u7684 SOL\uff08Wrapped SOL\uff09- \u5173\u95ed\u64cd\u4f5c\u4f1a\u5c06\u5305\u88c5\u7684 SOL \u8f6c\u6362\u4e3a SOL\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5176\u4ed6\u4ee3\u5e01\uff08Other Tokens\uff09- \u53ea\u6709\u5f53\u4ee3\u5e01\u8d26\u6237\u7684\u4f59\u989d\u4e3a0\u65f6\uff0c\u4f60\u624d\u80fd\u5173\u95ed\u5b83\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// 1) use build-in function\n{\n  let txhash = await closeAccount(\n    connection, // connection\n    feePayer, // payer\n    tokenAccountPubkey, // token account which you want to close\n    alice.publicKey, // destination\n    alice // owner of token account\n  );\n}\n\n// or\n\n// 2) compose by yourself\n{\n  let tx = new Transaction().add(\n    createCloseAccountInstruction(\n      tokenAccountPubkey, // token account which you want to close\n      alice.publicKey, // destination\n      alice.publicKey // owner of token account\n    )\n  );\n}\n")),(0,a.kt)("h2",{id:"\u5982\u4f55\u5728\u4ee3\u5e01\u8d26\u6237\u6216\u94f8\u5e01\u8d26\u6237\u4e0a\u8bbe\u7f6e\u6743\u9650"},"\u5982\u4f55\u5728\u4ee3\u5e01\u8d26\u6237\u6216\u94f8\u5e01\u8d26\u6237\u4e0a\u8bbe\u7f6e\u6743\u9650"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u8bbe\u7f6e/\u66f4\u65b0\u6743\u9650\u3002\u6709\u56db\u79cd\u7c7b\u578b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"MintTokens\uff08\u94f8\u5e01\u8d26\u6237\uff09\uff1a\u7528\u4e8e\u63a7\u5236\u5728\u94f8\u5e01\u8d26\u6237\u4e0a\u94f8\u9020\u4ee3\u5e01\u7684\u6743\u9650\u3002"),(0,a.kt)("li",{parentName:"ol"},"FreezeAccount\uff08\u94f8\u5e01\u8d26\u6237\uff09\uff1a\u7528\u4e8e\u51bb\u7ed3\u6216\u89e3\u51bb\u94f8\u5e01\u8d26\u6237\u7684\u6743\u9650\u3002"),(0,a.kt)("li",{parentName:"ol"},"AccountOwner\uff08\u4ee3\u5e01\u8d26\u6237\uff09\uff1a\u7528\u4e8e\u63a7\u5236\u4ee3\u5e01\u8d26\u6237\u6240\u6709\u6743\u7684\u6743\u9650\u3002"),(0,a.kt)("li",{parentName:"ol"},"CloseAccount\uff08\u4ee3\u5e01\u8d26\u6237\uff09\uff1a\u7528\u4e8e\u5173\u95ed\u4ee3\u5e01\u8d26\u6237\u7684\u6743\u9650\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// 1) use build-in function\n{\n  let txhash = await setAuthority(\n    connection, // connection\n    feePayer, // payer\n    mintPubkey, // mint account || token account\n    alice, // current authority\n    AuthorityType.MintTokens, // authority type\n    randomGuy.publicKey // new authority (you can pass `null` to close it)\n  );\n}\n\n// or\n\n// 2) compose by yourself\n{\n  let tx = new Transaction().add(\n    createSetAuthorityInstruction(\n      mintPubkey, // mint acocunt || token account\n      alice.publicKey, // current auth\n      AuthorityType.MintTokens, // authority type\n      randomGuy.publicKey // new auth (you can pass `null` to close it)\n    )\n  );\n}\n")),(0,a.kt)("h2",{id:"\u5982\u4f55\u6279\u51c6\u4ee3\u5e01\u59d4\u6258"},"\u5982\u4f55\u6279\u51c6\u4ee3\u5e01\u59d4\u6258"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u8bbe\u7f6e\u4e00\u4e2a\u59d4\u6258\u4ee3\u7406\uff0c\u5e76\u6307\u5b9a\u4e00\u4e2a\u5141\u8bb8\u7684\u4ee3\u5e01\u6570\u91cf\u3002\u8bbe\u7f6e\u540e\uff0c\u59d4\u6258\u4ee3\u7406\u5c31\u50cf\u4ee3\u5e01\u8d26\u6237\u7684\u53e6\u4e00\u4e2a\u6240\u6709\u8005\u3002\u4e00\u4e2a\u4ee3\u5e01\u8d26\u6237\u5728\u540c\u4e00\u65f6\u95f4\u53ea\u80fd\u59d4\u6258\u7ed9\u4e00\u4e2a\u8d26\u6237\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// 1) use build-in function\n{\n  let txhash = await approveChecked(\n    connection, // connection\n    feePayer, // fee payer\n    mintPubkey, // mint\n    tokenAccountPubkey, // token account\n    randomGuy.publicKey, // delegate\n    alice, // owner of token account\n    1e8, // amount, if your deciamls is 8, 10^8 for 1 token\n    8 // decimals\n  );\n}\n// or\n\n// 2) compose by yourself\n{\n  let tx = new Transaction().add(\n    createApproveCheckedInstruction(\n      tokenAccountPubkey, // token account\n      mintPubkey, // mint\n      randomGuy.publicKey, // delegate\n      alice.publicKey, // owner of token account\n      1e8, // amount, if your deciamls is 8, 10^8 for 1 token\n      8 // decimals\n    )\n  );\n}\n")),(0,a.kt)("h2",{id:"\u5982\u4f55\u64a4\u9500\u4ee3\u5e01\u59d4\u6258"},"\u5982\u4f55\u64a4\u9500\u4ee3\u5e01\u59d4\u6258"),(0,a.kt)("p",null,"\u64a4\u9500\u64cd\u4f5c\u5c06\u628a\u4ee3\u5e01\u59d4\u6258\u8bbe\u7f6e\u4e3a\u7a7a\uff0c\u5e76\u5c06\u59d4\u6258\u7684\u4ee3\u5e01\u6570\u91cf\u8bbe\u7f6e\u4e3a0\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// 1) use build-in function\n{\n  let txhash = await revoke(\n    connection, // connection\n    feePayer, // payer\n    tokenAccountPubkey, // token account\n    alice // owner of token account\n  );\n}\n\n// or\n\n// 2) compose by yourself\n{\n  let tx = new Transaction().add(\n    createRevokeInstruction(\n      tokenAccountPubkey, // token account\n      alice.publicKey // owner of token account\n    )\n  );\n}\n")),(0,a.kt)("h2",{id:"\u5982\u4f55\u7ba1\u7406\u5305\u88c5\u7684sol"},"\u5982\u4f55\u7ba1\u7406\u5305\u88c5\u7684SOL"),(0,a.kt)("p",null,"\u5305\u88c5\u7684 SOL\u4e0e\u5176\u4ed6\u4ee3\u5e01\u94f8\u5e01\u7c7b\u4f3c\uff0c\u533a\u522b\u5728\u4e8e\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"syncNative")," \u5e76\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"NATIVE_MINT")," \u5730\u5740\u4e0a\u4e13\u95e8\u521b\u5efa\u4ee3\u5e01\u8d26\u6237\u3002"),(0,a.kt)("h3",{id:"\u521b\u5efa\u4ee3\u5e01\u8d26\u6237"},"\u521b\u5efa\u4ee3\u5e01\u8d26\u6237"),(0,a.kt)("p",null,"\u4e0e ",(0,a.kt)("a",{parentName:"p",href:"#create-token-account"},"\u521b\u5efa\u4ee3\u5e01\u8d26\u6237")," \u4f46\u5c06mint\u66ff\u6362\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"NATIVE_MINT"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { NATIVE_MINT } from "@solana/spl-token";\n')),(0,a.kt)("h3",{id:"\u589e\u52a0\u4f59\u989d"},"\u589e\u52a0\u4f59\u989d"),(0,a.kt)("p",null,"\u6709\u4e24\u79cd\u65b9\u6cd5\u53ef\u4ee5\u589e\u52a0\u5305\u88c5\u7684 SOL \u7684\u4f59\u989d\uff1a"),(0,a.kt)("h4",{id:"1-\u901a\u8fc7-sol-\u8f6c\u8d26\u65b9\u5f0f"},"1. \u901a\u8fc7 SOL \u8f6c\u8d26\u65b9\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let tx = new Transaction().add(\n  // trasnfer SOL\n  SystemProgram.transfer({\n    fromPubkey: alice.publicKey,\n    toPubkey: ata,\n    lamports: amount,\n  }),\n  // sync wrapped SOL balance\n  createSyncNativeInstruction(ata)\n);\n")),(0,a.kt)("h4",{id:"2-\u901a\u8fc7\u4ee3\u5e01\u8f6c\u8d26\u65b9\u5f0f"},"2. \u901a\u8fc7\u4ee3\u5e01\u8f6c\u8d26\u65b9\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let tx = new Transaction().add(\n  // create token account\n  SystemProgram.createAccount({\n    fromPubkey: alice.publicKey,\n    newAccountPubkey: auxAccount.publicKey,\n    space: ACCOUNT_SIZE,\n    lamports:\n      (await getMinimumBalanceForRentExemptAccount(connection)) + amount, // rent + amount\n    programId: TOKEN_PROGRAM_ID,\n  }),\n  // init token account\n  createInitializeAccountInstruction(\n    auxAccount.publicKey,\n    NATIVE_MINT,\n    alice.publicKey\n  ),\n  // transfer WSOL\n  createTransferInstruction(auxAccount.publicKey, ata, alice.publicKey, amount),\n  // close aux account\n  createCloseAccountInstruction(\n    auxAccount.publicKey,\n    alice.publicKey,\n    alice.publicKey\n  )\n);\n")),(0,a.kt)("h2",{id:"\u5982\u4f55\u901a\u8fc7\u6240\u6709\u8005\u83b7\u53d6\u6240\u6709\u4ee3\u5e01\u8d26\u6237"},"\u5982\u4f55\u901a\u8fc7\u6240\u6709\u8005\u83b7\u53d6\u6240\u6709\u4ee3\u5e01\u8d26\u6237"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u6240\u6709\u8005\u83b7\u53d6\u4ee3\u5e01\u8d26\u6237\u3002\u6709\u4e24\u79cd\u65b9\u6cd5\u53ef\u4ee5\u5b9e\u73b0\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u83b7\u53d6\u6240\u6709\u4ee3\u5e01\u8d26\u6237")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let response = await connection.getParsedTokenAccountsByOwner(owner, {\n  programId: TOKEN_PROGRAM_ID,\n});\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u6309\u7167\u94f8\u5e01\u8fdb\u884c\u8fc7\u6ee4")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let response = await connection.getParsedTokenAccountsByOwner(owner, {\n  mint: mint,\n});\n")))}k.isMDXComponent=!0}}]);