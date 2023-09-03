"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[3355],{3905:(n,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>m});var a=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var c=a.createContext({}),u=function(n){var e=a.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},l=function(n){var e=u(n.components);return a.createElement(c.Provider,{value:e},n.children)},p="mdxType",_={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,c=n.parentName,l=i(n,["components","mdxType","originalType","parentName"]),p=u(t),k=r,m=p["".concat(c,".").concat(k)]||p[k]||_[k]||o;return t?a.createElement(m,s(s({ref:e},l),{},{components:t})):a.createElement(m,s({ref:e},l))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,s=new Array(o);s[0]=k;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=n,i[p]="string"==typeof n?n:r,s[1]=i;for(var u=2;u<o;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},53583:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>_,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=t(87462),r=(t(67294),t(3905));const o={sidebar_position:63,sidebar_label:"\ud83d\udee0\ufe0f \u6784\u5efaNFT\u8d28\u62bc\u7a0b\u5e8f",sidebar_class_name:"green",tags:["nft-staking","solana","native-solana-program","program"]},s="\ud83d\udee0\ufe0f \u6784\u5efaNFT\u8d28\u62bc\u7a0b\u5e8f",i={unversionedId:"module3/nft-staking/build-an-nft-staking-program/README",id:"module3/nft-staking/build-an-nft-staking-program/README",title:"\ud83d\udee0\ufe0f \u6784\u5efaNFT\u8d28\u62bc\u7a0b\u5e8f",description:"\u4eca\u5929\uff0c\u6211\u4eec\u5c06\u7f16\u5199\u8d28\u62bc\u7a0b\u5e8f\uff0c\u5e76\u5b9e\u73b0\u6240\u6709\u5fc5\u8981\u7684\u8d28\u62bc\u529f\u80fd\uff0c\u6682\u65f6\u4e0d\u6d89\u53ca\u4efb\u4f55\u4ee3\u5e01\u8f6c\u8d26\u3002\u6211\u5c06\u966a\u4f34\u4f60\uff0c\u4e00\u6b65\u4e00\u6b65\u8bb2\u89e3\u6574\u4e2a\u8fc7\u7a0b\uff0c\u89e3\u91ca\u6bcf\u4e2a\u73af\u8282\uff0c\u4ee5\u4fbf\u4f60\u4e86\u89e3\u6b63\u5728\u8fdb\u884c\u7684\u64cd\u4f5c\u3002\u9996\u5148\uff0c\u8ba9\u6211\u4eec\u8fdb\u5165Solana Playground\uff0c\u70b9\u51fbcreate a new project\uff0c\u5e76\u521b\u5efa\u4e00\u4e2a\u540d\u4e3asrc\u7684\u65b0\u6587\u4ef6\u5939\uff0c\u5176\u4e2d\u5305\u62ec\u4e00\u4e2a\u540d\u4e3alib.rs\u7684\u6587\u4ef6\u3002",source:"@site/docs/Solana-Co-Learn/module3/nft-staking/build-an-nft-staking-program/README.md",sourceDirName:"module3/nft-staking/build-an-nft-staking-program",slug:"/module3/nft-staking/build-an-nft-staking-program/",permalink:"/all-in-one-solana/Solana-Co-Learn/module3/nft-staking/build-an-nft-staking-program/",draft:!1,editUrl:"https://github.com/CreatorsDAO/all-in-one-solana/tree/main/docs/Solana-Co-Learn/module3/nft-staking/build-an-nft-staking-program/README.md",tags:[{label:"nft-staking",permalink:"/all-in-one-solana/Solana-Co-Learn/tags/nft-staking"},{label:"solana",permalink:"/all-in-one-solana/Solana-Co-Learn/tags/solana"},{label:"native-solana-program",permalink:"/all-in-one-solana/Solana-Co-Learn/tags/native-solana-program"},{label:"program",permalink:"/all-in-one-solana/Solana-Co-Learn/tags/program"}],version:"current",lastUpdatedBy:"Davirain",lastUpdatedAt:1693736064,formattedLastUpdatedAt:"Sep 3, 2023",sidebarPosition:63,frontMatter:{sidebar_position:63,sidebar_label:"\ud83d\udee0\ufe0f \u6784\u5efaNFT\u8d28\u62bc\u7a0b\u5e8f",sidebar_class_name:"green",tags:["nft-staking","solana","native-solana-program","program"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd52 \u8d28\u62bc\u5de5\u4f5c\u673a\u5236\u8be6\u89e3",permalink:"/all-in-one-solana/Solana-Co-Learn/module3/nft-staking/how-staking-works/"},next:{title:"PDAs \u4e0eCPIs",permalink:"/all-in-one-solana/Solana-Co-Learn/module4/"}},c={},u=[{value:"\ud83d\udeab \u81ea\u5b9a\u4e49\u9519\u8bef",id:"-\u81ea\u5b9a\u4e49\u9519\u8bef",level:2},{value:"\ud83e\uded9 \u5b8c\u5584\u4ee3\u7801",id:"-\u5b8c\u5584\u4ee3\u7801",level:2}],l={toc:u},p="wrapper";function _(n){let{components:e,...o}=n;return(0,r.kt)(p,(0,a.Z)({},l,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\ufe0f-\u6784\u5efanft\u8d28\u62bc\u7a0b\u5e8f"},"\ud83d\udee0\ufe0f \u6784\u5efaNFT\u8d28\u62bc\u7a0b\u5e8f"),(0,r.kt)("p",null,"\u4eca\u5929\uff0c\u6211\u4eec\u5c06\u7f16\u5199\u8d28\u62bc\u7a0b\u5e8f\uff0c\u5e76\u5b9e\u73b0\u6240\u6709\u5fc5\u8981\u7684\u8d28\u62bc\u529f\u80fd\uff0c\u6682\u65f6\u4e0d\u6d89\u53ca\u4efb\u4f55\u4ee3\u5e01\u8f6c\u8d26\u3002\u6211\u5c06\u966a\u4f34\u4f60\uff0c\u4e00\u6b65\u4e00\u6b65\u8bb2\u89e3\u6574\u4e2a\u8fc7\u7a0b\uff0c\u89e3\u91ca\u6bcf\u4e2a\u73af\u8282\uff0c\u4ee5\u4fbf\u4f60\u4e86\u89e3\u6b63\u5728\u8fdb\u884c\u7684\u64cd\u4f5c\u3002\u9996\u5148\uff0c\u8ba9\u6211\u4eec\u8fdb\u5165",(0,r.kt)("a",{parentName:"p",href:"https://beta.solpg.io/?utm_source=buildspace.so&utm_medium=buildspace_project"},(0,r.kt)("inlineCode",{parentName:"a"},"Solana Playground")),"\uff0c\u70b9\u51fb",(0,r.kt)("inlineCode",{parentName:"p"},"create a new project"),"\uff0c\u5e76\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"src"),"\u7684\u65b0\u6587\u4ef6\u5939\uff0c\u5176\u4e2d\u5305\u62ec\u4e00\u4e2a\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"lib.rs"),"\u7684\u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u8fd9\u5c31\u662f\u4f60\u7684\u96c6\u6210\u5f00\u53d1\u73af\u5883\u5e94\u8be5\u5448\u73b0\u7684\u6837\u5b50\u3002"),(0,r.kt)("p",null,"\u76ee\u524d\uff0c\u4e3b\u8981\u76ee\u6807\u662f\u7f16\u5199\u4e00\u4e2a\u7a0b\u5e8f\uff0c\u8ddf\u8e2a\u6bcf\u4e2a\u7528\u6237\u7684\u8d28\u62bc\u72b6\u6001\u3002\u4e0b\u9762\u662f\u4e00\u4e9b\u57fa\u672c\u6b65\u9aa4\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(38088).Z,width:"1503",height:"917"})),(0,r.kt)("p",null,"\u51c6\u5907\u5c31\u7eea\u540e\uff0c\u6211\u4eec\u5c06\u7ee7\u7eed\u521b\u5efa\u5269\u4f59\u7684\u6587\u4ef6\uff0c\u5c31\u50cf\u6211\u4eec\u5728\u4e4b\u524d\u7684\u8bfe\u7a0b\u4e2d\u6240\u505a\u7684\u90a3\u6837\u3002\u8ba9\u6211\u4eec\u7ee7\u7eed\u5728\u4f60\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"src"),"\u6587\u4ef6\u5939\u4e2d\u521b\u5efa\u4ee5\u4e0b5\u4e2a\u6587\u4ef6\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"entrypoint.rs"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"error.rs"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"instruction.rs"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"processor.rs"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"state.rs"),"\u3002"),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u6587\u4ef6\u7ed3\u6784\u5e94\u8be5\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(53294).Z,width:"185",height:"236"})),(0,r.kt)("p",null,"\u6211\u4eec\u5df2\u7ecf\u51c6\u5907\u597d\u4e86\uff01\u73b0\u5728\u8ba9\u6211\u4eec\u7528\u4ee5\u4e0b\u4ee3\u7801\u586b\u5145\u6211\u4eec\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"lib.rs"),"\u6587\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// Lib.rs\npub mod entrypoint;\npub mod error;\npub mod instruction;\npub mod processor;\npub mod state;\n")),(0,r.kt)("p",null,"\u63a5\u7740\uff0c\u8fdb\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"entrypoint.rs"),"\u5e76\u6dfb\u52a0\u4ee5\u4e0b\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// Entrypoint.rs\nuse solana_program::{\n    account_info::AccountInfo,\n    entrypoint,\n    entrypoint::ProgramResult,\n    pubkey::Pubkey\n};\nuse crate::processor;\n\n// This macro will help process all incoming instructions\nentrypoint!(process_instruction);\n\npub fn process_instruction(\n    program_id: &Pubkey,\n    accounts: &[AccountInfo],\n    instruction_data: &[u8]\n) -> ProgramResult {\n    processor::process_instruction(program_id, accounts, instruction_data)?;\n    Ok(())\n}\n")),(0,r.kt)("p",null,"\u5f53\u4f60\u8fd0\u884c\u4ee3\u7801\u65f6\uff0c\u4f1a\u6ce8\u610f\u5230\u4e00\u4e2a\u9519\u8bef\uff0c\u56e0\u4e3a\u6211\u4eec\u8fd8\u6ca1\u6709\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"processor.rs"),"\u4e2d\u5b9a\u4e49",(0,r.kt)("inlineCode",{parentName:"p"},"process_instruction"),"\u51fd\u6570\u3002\u73b0\u5728\u8ba9\u6211\u4eec\u521b\u5efa\u8fd9\u4e2a\u51fd\u6570\u3002\u8f6c\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"processor.rs"),"\u5e76\u6dfb\u52a0\u4ee5\u4e0b\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// Processor.rs\nuse solana_program::{\n    account_info::AccountInfo,\n    entrypoint::ProgramResult,\n    pubkey::Pubkey\n};\n\npub fn process_instruction(\n    program_id: &Pubkey,\n    accounts: &[AccountInfo],\n    instruction_data: &[u8]\n) -> ProgramResult {\n    Ok(())\n}\n")),(0,r.kt)("p",null,"\u4fee\u590d\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"processor.rs"),"\u7684\u9519\u8bef\u540e\uff0c\u4f60\u53ef\u80fd\u4f1a\u6ce8\u610f\u5230\u7f16\u8bd1\u4ee3\u7801\u65f6\u4ecd\u6709\u4e00\u4e9b\u9519\u8bef\u3002\u8fd9\u662f\u56e0\u4e3a\u5728\u4f60\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"lib.rs"),"\u4e2d\uff0c\u6211\u4eec\u5bfc\u5165\u4e86\u4e00\u4e9b\u7a7a\u6a21\u5757\u3002\u4e0d\u8fc7\u522b\u62c5\u5fc3\uff0c\u6211\u4eec\u4f1a\u5728\u4e0b\u4e00\u8282\u4e2d\u4fee\u590d\u5b83\u4eec \ud83d\ude0a \u5728\u5f00\u59cb\u5904\u7406",(0,r.kt)("inlineCode",{parentName:"p"},"process_instruction"),"\u4e2d\u7684\u4efb\u4f55\u5185\u5bb9\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"instruction.rs"),"\u4e2d\u7f16\u5199\u6211\u4eec\u7684\u6307\u4ee4\uff0c\u6240\u4ee5\u8ba9\u6211\u4eec\u5f00\u59cb\u5b9a\u4e49\u6211\u4eec\u7684\u6307\u4ee4\u3002"),(0,r.kt)("p",null,"\u7ee7\u7eed\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"StakeInstruction"),"\u7684\u679a\u4e3e\uff0c\u5e76\u5411\u5176\u4e2d\u6dfb\u52a0\u56db\u4e2a\u6307\u4ee4\u3002\u57fa\u672c\u4e0a\uff0c\u8fd9\u662f\u5b9a\u4e49\u6211\u4eec\u7684\u6307\u4ee4\u5e94\u6267\u884c\u4ec0\u4e48\u64cd\u4f5c\u7684\u5730\u65b9\u3002\u5c06\u4e0b\u9762\u7684\u4ee3\u7801\u590d\u5236\u7c98\u8d34\u5230\u4f60\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"instruction.rs"),"\u4e2d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// Instruction.rs\nuse solana_program::{ program_error::ProgramError };\n\npub enum StakeInstruction {\n    InitializeStakeAccount,\n    Stake,\n    Redeem,\n    Unstake\n}\n\nimpl StakeInstruction {\n    pub fn unpack(input: &[u8]) -> Result<Self, ProgramError> {\n        let (&variant, _rest) = input.split_first().ok_or(ProgramError::InvalidInstructionData)?;\n        Ok(match variant {\n            0 => Self::InitializeStakeAccount,\n            1 => Self::Stake,\n            2 => Self::Redeem,\n            3 => Self::Unstake,\n            _ => return Err(ProgramError::InvalidInstructionData)\n        })\n    }\n}\n")),(0,r.kt)("p",null,"\u73b0\u5728\u8ba9\u6211\u4eec\u6df1\u5165\u4e86\u89e3\u4e00\u4e0b\u6211\u4eec\u5728\u8fd9\u91cc\u505a\u7684\u4e8b\u60c5\u3002\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"instruction.rs"),"\u4e2d\uff0c\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2a\u679a\u4e3e\uff0c\u7528\u6765\u8868\u793a\u6bcf\u4e2a\u79bb\u6563\u7684\u6307\u4ee4\uff0c\u5e76\u521b\u5efa\u4e86\u4e00\u4e2a\u89e3\u5305\u51fd\u6570\u6765\u53cd\u5e8f\u5217\u5316\u6570\u636e\uff0c\u8fd9\u91cc\u7684\u6570\u636e\u662f\u4e00\u4e2a\u6574\u6570\u3002"),(0,r.kt)("p",null,"\u8ba9\u6211\u4eec\u8fd4\u56de\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"processor.rs")," \u6587\u4ef6\u5e76\u5b9a\u4e49\u6211\u4eec\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"process_instruction")," \u51fd\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// processor.rs\nuse solana_program::{\n    account_info::{AccountInfo, next_account_info},\n    entrypoint::ProgramResult,\n    pubkey::Pubkey,\n};\nuse crate::instruction::StakeInstruction;\n\npub fn process_instruction(\n    program_id: &Pubkey,\n    accounts: &[AccountInfo],\n    instruction_data: &[u8]\n) -> ProgramResult {\n    let instruction = StakeInstruction::unpack(instruction_data)?;\n\n    match instruction {\n        StakeInstruction::InitializeStakeAccount => process_initialize_stake_account(program_id, accounts),\n        StakeInstruction::Stake => process_stake(program_id, accounts),\n        StakeInstruction::Redeem => process_redeem(program_id, accounts),\n        StakeInstruction::Unstake => process_unstake(program_id, accounts),\n    }\n}\n\n/**\n\u6b64\u51fd\u6570\u7684\u4f5c\u7528\u662f\u521b\u5efa\u4e00\u4e2a\u5c5e\u4e8e\u60a8\u548c\u60a8\u7684NFT\u7684\u72ec\u7279PDA\u8d26\u6237\u3002\n\u8fd9\u5c06\u5b58\u50a8\u6709\u5173\u7a0b\u5e8f\u72b6\u6001\u7684\u4fe1\u606f\uff0c\u4ece\u800c\u51b3\u5b9a\u5b83\u662f\u5426\u5df2\u8d28\u62bc\u3002\n**/\nfn process_initialize_stake_account(\n    program_id: &Pubkey,\n    accounts: &[AccountInfo]\n) -> ProgramResult {\n    let account_info_iter = &mut accounts.iter();\n    let user = next_account_info(account_info_iter)?;\n    let nft_token = next_account_info(account_info_iter)?;\n    let stake_state = next_account_info(account_info_iter)?;\n    let system_program = next_account_info(account_info_iter)?;\n\n    Ok(())\n}\n\nfn process_stake(\n    program_id: &Pubkey,\n    accounts: &[AccountInfo]\n) -> ProgramResult {\n    Ok(())\n}\n\nfn process_redeem(\n    program_id: &Pubkey,\n    accounts: &[AccountInfo]\n) -> ProgramResult {\n    Ok(())\n}\n\nfn process_unstake(\n    program_id: &Pubkey,\n    accounts: &[AccountInfo]\n) -> ProgramResult {\n    Ok(())\n}\n")),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u6211\u4eec\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"process_initialize_stake_account")," \u51fd\u6570\u4e2d\u5b9a\u4e49\u4e86\u4e00\u4e9b\u53d8\u91cf\uff0c\u4f46\u5b83\u4eec\u5728\u4efb\u4f55\u5730\u65b9\u90fd\u6ca1\u6709\u88ab\u4f7f\u7528\u3002\u8fd9\u662f\u56e0\u4e3a\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u7ed3\u6784\u4f53\u6765\u8868\u793a\u7a0b\u5e8f\u7684\u5f53\u524d\u72b6\u6001\u3002\u56e0\u6b64\uff0c\u8ba9\u6211\u4eec\u8f6c\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"state.rs")," \u6587\u4ef6\u5e76\u5b9a\u4e49\u6211\u4eec\u7684\u7ed3\u6784\u4f53\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// state.rs\nuse borsh::{BorshSerialize, BorshDeserialize};\nuse solana_program::{\n    program_pack::{IsInitialized, Sealed},\n    pubkey::Pubkey,\n    clock::UnixTimestamp,\n};\n\n#[derive(BorshSerialize, BorshDeserialize, Debug)]\npub struct UserStakeInfo {\n    pub is_initialized: bool,\n    pub token_account: Pubkey,\n    pub stake_start_time: UnixTimestamp,\n    pub last_stake_redeem: UnixTimestamp,\n    pub user_pubkey: Pubkey,\n    pub stake_state: StakeState,\n}\n\nimpl Sealed for UserStakeInfo {}\nimpl IsInitialized for UserStakeInfo {\n    fn is_initialized(&self) -> bool {\n        self.is_initialized\n    }\n}\n\n#[derive(BorshSerialize, BorshDeserialize, Debug, PartialEq)]\npub enum StakeState {\n    Staked,\n    Unstaked,\n}\n")),(0,r.kt)("h2",{id:"-\u81ea\u5b9a\u4e49\u9519\u8bef"},"\ud83d\udeab \u81ea\u5b9a\u4e49\u9519\u8bef"),(0,r.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u6765\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"error.rs")," \u6587\u4ef6\uff0c\u4e3a\u6211\u4eec\u7684\u7a0b\u5e8f\u5b9a\u4e49\u4e00\u4e9b\u81ea\u5b9a\u4e49\u7684\u9519\u8bef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// error.rs\nuse solana_program::{program_error::ProgramError};\nuse thiserror::Error;\n\n#[derive(Debug, Error)]\npub enum StakeError {\n    #[error("\u8d26\u6237\u5c1a\u672a\u521d\u59cb\u5316")]\n    UninitializedAccount,\n\n    #[error("\u6d3e\u751f\u7684PDA\u4e0e\u4f20\u5165\u7684PDA\u4e0d\u7b26")]\n    InvalidPda,\n\n    #[error("\u65e0\u6548\u7684\u4ee3\u5e01\u8d26\u6237")]\n    InvalidTokenAccount,\n\n    #[error("\u65e0\u6548\u7684\u8d28\u62bc\u8d26\u6237")]\n    InvalidStakeAccount,\n}\n\nimpl From<StakeError> for ProgramError {\n    fn from(e: StakeError) -> Self {\n        ProgramError::Custom(e as u32)\n    }\n}\n')),(0,r.kt)("p",null,"\u592a\u68d2\u4e86\uff0c\u73b0\u5728\u60a8\u5df2\u7ecf\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"error.rs")," \u6587\u4ef6\u4e2d\u521b\u5efa\u4e86\u81ea\u5b9a\u4e49\u9519\u8bef\u7684\u679a\u4e3e\u3002\u5f53\u60a8\u8fd0\u884c\u7a0b\u5e8f\u65f6\uff0c\u4e0d\u5e94\u518d\u51fa\u73b0\u4efb\u4f55\u9519\u8bef\u3002"),(0,r.kt)("h2",{id:"-\u5b8c\u5584\u4ee3\u7801"},"\ud83e\uded9 \u5b8c\u5584\u4ee3\u7801"),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u8ba9\u6211\u4eec\u8fd4\u56de\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"processor.rs")," \u6587\u4ef6\uff0c\u5e76\u5b8c\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"process_initialize_stake_account")," \u51fd\u6570\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// processor.rs\nuse solana_program::{\n    account_info::{ AccountInfo, next_account_info },\n    entrypoint::ProgramResult,\n    pubkey::Pubkey,\n    msg,\n    sysvar::{ rent::Rent, Sysvar },\n    clock::Clock,\n    program_pack::IsInitialized,\n    system_instruction,\n    program::invoke_signed,\n    borsh::try_from_slice_unchecked,\n    program_error::ProgramError\n};\nuse borsh::BorshSerialize;\nuse crate::instruction::StakeInstruction;\nuse crate::error::StakeError;\nuse crate::state::{ UserStakeInfo, StakeState };\n\nfn process_initialize_stake_account(\n    program_id: &Pubkey,\n    accounts: &[AccountInfo]\n) -> ProgramResult {\n    let account_info_iter = &mut accounts.iter();\n    let user = next_account_info(account_info_iter)?;\n    let nft_token_account = next_account_info(account_info_iter)?;\n    let stake_state = next_account_info(account_info_iter)?;\n    let system_program = next_account_info(account_info_iter)?;\n\n    let (stake_state_pda, bump_seed) = Pubkey::find_program_address(\n        &[user.key.as_ref(), nft_token_account.key.as_ref()],\n        program_id\n    );\n\n    // Check to ensure that you\'re using the right PDA\n    if stake_state_pda != *stake_state.key {\n        msg!("Invalid seeds for PDA");\n        return Err(StakeError::InvalidPda.into());\n    }\n\n    let rent = Rent::get()?;\n    let rent_lamports = rent.minimum_balance(UserStakeInfo::SIZE);\n\n    msg!("Creating state account at {:?}", stake_state_pda);\n    invoke_signed(\n        &system_instruction::create_account(\n            user.key,\n            stake_state.key,\n            rent_lamports,\n            UserStakeInfo::SIZE.try_into().unwrap(),\n            program_id\n        ),\n        &[user.clone(), stake_state.clone(), system_program.clone()],\n        &[&[\n            user.key.as_ref(),\n            nft_token_account.key.as_ref(),\n            &[bump_seed],\n        ]],\n    )?;\n\n    // Let\'s create account\n    let mut account_data = try_from_slice_unchecked::<UserStakeInfo>(&stake_state.data.borrow()).unwrap();\n\n    if account_data.is_initialized() {\n        msg!("Account already initialized");\n        return Err(ProgramError::AccountAlreadyInitialized);\n    }\n\n    account_data.token_account = *nft_token_account.key;\n    account_data.user_pubkey = *user.key;\n    account_data.stake_state = StakeState::Unstaked;\n    account_data.is_initialized = true;\n\n    account_data.serialize(&mut &mut stake_state.data.borrow_mut()[..])?;\n\n    Ok(())\n}\n')),(0,r.kt)("p",null,"\u8ba9\u6211\u4eec\u8f6c\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"state.rs")," \u6587\u4ef6\uff0c\u5e76\u5b58\u50a8\u7528\u6237\u7684\u8d28\u62bc\u4fe1\u606f\uff0c\u4f7f\u7528\u9002\u5f53\u7684\u6570\u636e\u5927\u5c0f\u3002\u60a8\u53ef\u4ee5\u5c06\u6b64\u4ee3\u7801\u6bb5\u653e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"impl Sealed")," \u4e4b\u4e0a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// state.rs\n\nimpl UserStakeInfo {\n    /**\n        \u8fd9\u91cc\u662f\u6211\u4eec\u5982\u4f55\u786e\u5b9a\u6570\u636e\u5927\u5c0f\u7684\u65b9\u6cd5\u3002\u5728\u60a8\u7684UserStakeInfo\u7ed3\u6784\u4f53\u4e2d\uff0c\u6211\u4eec\u6709\u4ee5\u4e0b\u6570\u636e\uff1a\n\n        pub is_initialized: bool,                 // 1\u5b57\u8282\n        pub token_account: Pubkey,                // 32\u5b57\u8282\n        pub stake_start_time: UnixTimestamp,      // 64\u5b57\u8282\n        pub last_stake_redeem: UnixTimestamp,     // 64\u5b57\u8282\n        pub user_pubkey: Pubkey,                  // 32\u5b57\u8282\n        pub stake_state: StakeState,              // 1\u5b57\u8282\n    **/\n    pub const SIZE: usize = 1 + 32 + 64 + 64 + 32 + 1;\n}\n")),(0,r.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u521a\u521a\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"process_initialize_stake_account")," \u5199\u4e86\u8bb8\u591a\u4ee3\u7801\u3002\u5982\u679c\u60a8\u8fd8\u4e0d\u660e\u767d\uff0c\u8bf7\u4e0d\u8981\u62c5\u5fc3\u3002\u6211\u4eec\u5c06\u7ee7\u7eed\u6dfb\u52a0\u66f4\u591a\u7684\u4ee3\u7801\u6765\u5b9e\u73b0\u5176\u4ed6\u529f\u80fd\u3002\u73b0\u5728\u8ba9\u6211\u4eec\u8fdb\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"process_stake")," \u51fd\u6570\u5e76\u4f7f\u7528\u8fd9\u6bb5\u4ee3\u7801\u3002\u8bf7\u8bb0\u4f4f\uff0c\u8fd9\u53ea\u662f\u4ee3\u7801\u7684\u4e00\u90e8\u5206\uff0c\u4e0d\u8981\u76f2\u76ee\u5730\u590d\u5236\u7c98\u8d34\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// processor.rs\n\nfn process_stake(\n    program_id: &Pubkey,\n    accounts: &[AccountInfo]\n) -> ProgramResult {\n    let account_info_iter = &mut accounts.iter();\n    let user = next_account_info(account_info_iter)?;\n    let nft_token_account = next_account_info(account_info_iter)?;\n    let stake_state = next_account_info(account_info_iter)?;\n\n    let (stake_state_pda, _bump_seed) = Pubkey::find_program_address(\n        &[user.key.as_ref(), nft_token_account.key.as_ref()],\n        program_id,\n    );\n\n    if stake_state_pda != *stake_state.key {\n        msg!("PDA\u79cd\u5b50\u65e0\u6548");\n        return Err(StakeError::InvalidPda.into());\n    }\n\n     // \u521b\u5efa\u8d26\u6237\n    let mut account_data = try_from_slice_unchecked::<UserStakeInfo>(&stake_state.data.borrow()).unwrap();\n\n    if !account_data.is_initialized() {\n        msg!("\u8d26\u6237\u5c1a\u672a\u521d\u59cb\u5316");\n        return Err(ProgramError::UninitializedAccount.into());\n    }\n\n    let clock = Clock::get()?;\n\n    account_data.token_account = *nft_token_account.key;\n    account_data.user_pubkey = *user.key;\n    account_data.stake_state = StakeState::Staked;\n    account_data.stake_start_time = clock.unix_timestamp;\n    account_data.last_stake_redeem = clock.unix_timestamp;\n    account_data.is_initialized = true;\n\n    account_data.serialize(&mut &mut stake_state.data.borrow_mut()[..])?;\n\n    Ok(())\n}\n')),(0,r.kt)("p",null,"\u5c31\u662f\u8fd9\u6837\uff01\u6211\u4eec\u73b0\u5728\u5df2\u7ecf\u5b8c\u6210\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"process_stake")," \u51fd\u6570\u3002\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u7ee7\u7eed ",(0,r.kt)("inlineCode",{parentName:"p"},"process_redeem")," \u51fd\u6570\u3002\u8be5\u90e8\u5206\u7684\u4ee3\u7801\u5c06\u4e0e\u524d\u4e24\u4e2a\u51fd\u6570\u975e\u5e38\u76f8\u4f3c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// process.rs\n\nfn process_redeem(\n    program_id: &Pubkey,\n    accounts: &[AccountInfo]\n) -> ProgramResult {\n    let account_info_iter = &mut accounts.iter();\n    let user = next_account_info(account_info_iter)?;\n    let nft_token_account = next_account_info(account_info_iter)?;\n    let stake_state = next_account_info(account_info_iter)?;\n\n    let (stake_state_pda, _bump_seed) = Pubkey::find_program_address(\n        &[user.key.as_ref(), nft_token_account.key.as_ref()],\n        program_id,\n    );\n\n    if stake_state_pda != *stake_state.key {\n        msg!("Invalid seeds for PDA");\n        return Err(StakeError::InvalidPda.into());\n    }\n\n    // For verification, we need to make sure it\'s the right signer\n    if !user.is_signer {\n        msg!("Missing required signature");\n        return Err(ProgramError::MissingRequiredSignature);\n    }\n\n     // Let\'s create account\n    let mut account_data = try_from_slice_unchecked::<UserStakeInfo>(&stake_state.data.borrow()).unwrap();\n\n    if !account_data.is_initialized() {\n        msg!("Account not initialized");\n        return Err(ProgramError::UninitializedAccount.into());\n    }\n\n    if account_data.stake_state != StakeState::Staked {\n        msg!("Stake account is not staking anything");\n        return Err(ProgramError::InvalidArgument);\n    }\n\n    if *user.key != account_data.user_pubkey {\n        msg!("Incorrect stake account for user");\n        return Err(StakeError::InvalidStakeAccount.into());\n    }\n\n    if *nft_token_account.key != account_data.token_account {\n        msg!("NFT Token account do not match");\n        return Err(StakeError::InvalidTokenAccount.into());\n    }\n\n    let clock = Clock::get()?;\n    let unix_time = clock.unix_timestamp - account_data.last_stake_redeem;\n    let redeem_amount = unix_time;\n    msg!("Redeeming {} tokens", redeem_amount);\n\n    account_data.last_stake_redeem = clock.unix_timestamp;\n    account_data.serialize(&mut &mut stake_state.data.borrow_mut()[..])?;\n\n    Ok(())\n}\n')),(0,r.kt)("p",null,"\u592a\u68d2\u4e86\uff01\u6211\u4eec\u73b0\u5728\u5c31\u5feb\u5230\u4e86\u3002\u63a5\u4e0b\u6765\u8fdb\u5165\u6700\u540e\u4e00\u4e2a\u529f\u80fd ",(0,r.kt)("inlineCode",{parentName:"p"},"process_unstake")," \u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// process.rs\n\nfn process_unstake(\n    program_id: &Pubkey,\n    accounts: &[AccountInfo]\n) -> ProgramResult {\n    let account_info_iter = &mut accounts.iter();\n    let user = next_account_info(account_info_iter)?;\n    let nft_token_account = next_account_info(account_info_iter)?;\n    let stake_state = next_account_info(account_info_iter)?;\n\n    let (stake_state_pda, _bump_seed) = Pubkey::find_program_address(\n        &[user.key.as_ref(), nft_token_account.key.as_ref()],\n        program_id,\n    );\n\n    if stake_state_pda != *stake_state.key {\n        msg!("Invalid seeds for PDA");\n        return Err(StakeError::InvalidPda.into());\n    }\n\n    // For verification, we need to make sure it\'s the right signer\n    if !user.is_signer {\n        msg!("Missing required signature");\n        return Err(ProgramError::MissingRequiredSignature);\n    }\n\n     // Let\'s create account\n    let mut account_data = try_from_slice_unchecked::<UserStakeInfo>(&stake_state.data.borrow()).unwrap();\n\n    if !account_data.is_initialized() {\n        msg!("Account not initialized");\n        return Err(ProgramError::UninitializedAccount.into());\n    }\n\n    if account_data.stake_state != StakeState::Staked {\n        msg!("Stake account is not staking anything");\n        return Err(ProgramError::InvalidArgument)\n    }\n\n    let clock = Clock::get()?;\n    let unix_time = clock.unix_timestamp - account_data.last_stake_redeem;\n    let redeem_amount = unix_time;\n    msg!("Redeeming {} tokens", redeem_amount);\n\n    msg!("Setting stake state to unstaked");\n    account_data.stake_state = StakeState::Unstaked;\n    account_data.serialize(&mut &mut stake_state.data.borrow_mut()[..]);\n\n    Ok(())\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"LFG\uff08Let's Go\uff09"),"!!! \u6211\u4eec\u7ec8\u4e8e\u5b8c\u6210\u4e86\u6240\u6709\u7684\u51fd\u6570\u5b9a\u4e49\u3002\u73b0\u5728\u5982\u679c\u4f60\u8fd0\u884c\u7a0b\u5e8f\uff0c\u5b83\u5e94\u8be5\u4f1a\u663e\u793a\u201c\u6784\u5efa\u6210\u529f\u201d\u3002\u592a\u68d2\u4e86\uff01\u6211\u4eec\u5df2\u7ecf\u5b8c\u6210\u4e86\u7b2c\u4e09\u5468\u7684\u4efb\u52a1\uff0c\u5df2\u7ecf\u8fc7\u534a\u4e86\uff01\u52a0\u6cb9\uff0c\u7ee7\u7eed\u4fdd\u6301\u8fd9\u6837\u7684\u52bf\u5934\uff0c\u6211\u4eec\u4e00\u8d77\u671d\u7740\u6700\u7ec8\u76ee\u6807\u524d\u8fdb\uff01\u5982\u679c\u4f60\u6709\u4efb\u4f55\u95ee\u9898\u6216\u9700\u8981\u8fdb\u4e00\u6b65\u7684\u5e2e\u52a9\uff0c\u8bf7\u968f\u65f6\u8054\u7cfb\u6211\u3002"))}_.isMDXComponent=!0},38088:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/Pn7GlMD-bd0cf0ba002868d9f34864e390e3c200.png"},53294:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/file-structure-b1f9a3c0450b7af05b1a5f4036b31416.png"}}]);