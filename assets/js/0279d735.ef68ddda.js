"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[9673],{3905:(e,a,n)=>{n.d(a,{Zo:()=>m,kt:()=>f});var t=n(67294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},m=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(n),c=l,f=u["".concat(s,".").concat(c)]||u[c]||d[c]||r;return n?t.createElement(f,o(o({ref:a},m),{},{components:n})):t.createElement(f,o({ref:a},m))}));function f(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=c;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},90827:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var t=n(87462),l=(n(67294),n(3905));const r={sidebar_position:26,sidebar_label:"Solana \u8fdb\u9636 (SPL token\u4e0eNFT)",sidebar_class_name:"green"},o="Solana \u8fdb\u9636 (SPL token\u4e0eNFT)",i={unversionedId:"module2/README",id:"module2/README",title:"Solana \u8fdb\u9636 (SPL token\u4e0eNFT)",description:"SPL\u4ee3\u5e01",source:"@site/docs/Solana-Co-Learn/module2/README.md",sourceDirName:"module2",slug:"/module2/",permalink:"/all-in-one-solana/Solana-Co-Learn/module2/",draft:!1,editUrl:"https://github.com/CreatorsDAO/all-in-one-solana/tree/main/docs/Solana-Co-Learn/module2/README.md",tags:[],version:"current",lastUpdatedBy:"Davirain",lastUpdatedAt:1693736064,formattedLastUpdatedAt:"Sep 3, 2023",sidebarPosition:26,frontMatter:{sidebar_position:26,sidebar_label:"Solana \u8fdb\u9636 (SPL token\u4e0eNFT)",sidebar_class_name:"green"},sidebar:"tutorialSidebar",previous:{title:"Solana\u94b1\u5305\u4f7f\u7528 - Backpack \ud83c\udf92",permalink:"/all-in-one-solana/Solana-Co-Learn/module1/wallet-usage/"},next:{title:"SPL token",permalink:"/all-in-one-solana/Solana-Co-Learn/module2/spl-token/"}},s={},p=[{value:"SPL\u4ee3\u5e01",id:"spl\u4ee3\u5e01",level:2},{value:"NFTS + METAPLEX\u94f8\u9020",id:"nfts--metaplex\u94f8\u9020",level:2},{value:"\u5728\u7528\u6237\u754c\u9762\u4e2d\u5c55\u793aNFTS",id:"\u5728\u7528\u6237\u754c\u9762\u4e2d\u5c55\u793anfts",level:2},{value:"\u521b\u9020\u795e\u5947\u7684\u4e92\u8054\u7f51\u8d27\u5e01\u5e76\u51fa\u552eJPEG\u56fe\u7247",id:"\u521b\u9020\u795e\u5947\u7684\u4e92\u8054\u7f51\u8d27\u5e01\u5e76\u51fa\u552ejpeg\u56fe\u7247",level:2}],m={toc:p},u="wrapper";function d(e){let{components:a,...n}=e;return(0,l.kt)(u,(0,t.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"solana-\u8fdb\u9636-spl-token\u4e0enft"},"Solana \u8fdb\u9636 (SPL token\u4e0eNFT)"),(0,l.kt)("h2",{id:"spl\u4ee3\u5e01"},"SPL\u4ee3\u5e01"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/all-in-one-solana/Solana-Co-Learn/module2/spl-token/the-token-program/"},"\ud83d\udcb5 ",(0,l.kt)("inlineCode",{parentName:"a"},"The Token Program"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/all-in-one-solana/Solana-Co-Learn/module2/spl-token/mint-token-on-solana/"},"\ud83c\udfe7 \u5728",(0,l.kt)("inlineCode",{parentName:"a"},"Solana"),"\u4e0a\u94f8\u9020\u4ee3\u5e01")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/all-in-one-solana/Solana-Co-Learn/module2/spl-token/token-metadata/"},"\ud83e\uddee \u4ee4\u724c\u5143\u6570\u636e")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/all-in-one-solana/Solana-Co-Learn/module2/spl-token/give-your-token-an-identity/"}," \ud83e\uddec \u4e3a\u4f60\u7684\u4ee3\u5e01\u8d4b\u4e88\u8eab\u4efd"))),(0,l.kt)("h2",{id:"nfts--metaplex\u94f8\u9020"},"NFTS + METAPLEX\u94f8\u9020"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/all-in-one-solana/Solana-Co-Learn/module2/nfts-and-minting-with-metaplex/nfts-one-solana/"},"\ud83c\udfa8 ",(0,l.kt)("inlineCode",{parentName:"a"},"Solana"),"\u4e0a\u7684",(0,l.kt)("inlineCode",{parentName:"a"},"NFT"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/all-in-one-solana/Solana-Co-Learn/module2/nfts-and-minting-with-metaplex/nft-your-face/"},"\ud83e\udd28 ",(0,l.kt)("inlineCode",{parentName:"a"},"NFT"),"\u4f60\u7684\u8138")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/all-in-one-solana/Solana-Co-Learn/module2/nfts-and-minting-with-metaplex/candy-machine-and-the-sugar-cli/"},"\ud83c\udf6d \u7cd6\u679c\u673a\u548cSugar CLI"))),(0,l.kt)("h2",{id:"\u5728\u7528\u6237\u754c\u9762\u4e2d\u5c55\u793anfts"},"\u5728\u7528\u6237\u754c\u9762\u4e2d\u5c55\u793aNFTS"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/all-in-one-solana/Solana-Co-Learn/module2/displayings-nfts-in-a-ui/displaying-nfts/"},"\u5c55\u793a",(0,l.kt)("inlineCode",{parentName:"a"},"NFTs")," \ud83d\udc83")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/all-in-one-solana/Solana-Co-Learn/module2/displayings-nfts-in-a-ui/displaying-nfts-from-a-wallet/"},"\ud83d\udcf1 \u5728\u94b1\u5305\u4e2d\u5c55\u793a",(0,l.kt)("inlineCode",{parentName:"a"},"NFTs"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/all-in-one-solana/Solana-Co-Learn/module2/displayings-nfts-in-a-ui/displaying-nfts-from-a-candy-machine/"},"\ud83d\uddbc \u4ece\u7cd6\u679c\u673a\u5c55\u793a",(0,l.kt)("inlineCode",{parentName:"a"},"NFTs")))),(0,l.kt)("h2",{id:"\u521b\u9020\u795e\u5947\u7684\u4e92\u8054\u7f51\u8d27\u5e01\u5e76\u51fa\u552ejpeg\u56fe\u7247"},"\u521b\u9020\u795e\u5947\u7684\u4e92\u8054\u7f51\u8d27\u5e01\u5e76\u51fa\u552eJPEG\u56fe\u7247"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/all-in-one-solana/Solana-Co-Learn/module2/make-magic-internet-money-and-sell-jepgs/create-reward-tokens/"},"\ud83c\udfa8 \u521b\u5efa\u5956\u52b1\u4ee3\u5e01")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/all-in-one-solana/Solana-Co-Learn/module2/make-magic-internet-money-and-sell-jepgs/create-candy-machine/"},"\ud83c\udf6c \u521b\u9020\u7cd6\u679c\u673a")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/all-in-one-solana/Solana-Co-Learn/module2/make-magic-internet-money-and-sell-jepgs/create-the-minting-ui/"},"\ud83c\udfa8 \u521b\u5efa\u94f8\u5e01\u7528\u6237\u754c\u9762"))))}d.isMDXComponent=!0}}]);