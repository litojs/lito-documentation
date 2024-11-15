import{_ as s,c as e,a0 as i,o as t}from"./chunks/framework.CGHvQLJz.js";const k=JSON.parse('{"title":"Create Lito App","description":"","frontmatter":{},"headers":[],"relativePath":"quickstart/create-app.md","filePath":"quickstart/create-app.md"}'),p={name:"quickstart/create-app.md"};function n(o,a,l,r,h,c){return t(),e("div",null,a[0]||(a[0]=[i(`<h1 id="create-lito-app" tabindex="-1">Create Lito App <a class="header-anchor" href="#create-lito-app" aria-label="Permalink to &quot;Create Lito App&quot;">​</a></h1><p>To create project with lito, you can create by this command. It will create the boilerplate for you. Everything would be setuped and you are good to go!</p><div class="caution custom-block github-alert"><p class="custom-block-title">CAUTION</p><p>Not Ready to use. This is still in development.</p></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># bunx create lito</span></span></code></pre></div><p>In project folder there is <code>apps</code> folder where you can see all the <code>app</code>. We do refer this <code>app</code> term to be a services where you can define your app.</p><h3 id="basic-app" tabindex="-1">Basic App <a class="header-anchor" href="#basic-app" aria-label="Permalink to &quot;Basic App&quot;">​</a></h3><p>In the <code>apps/main.ts</code> you would see this App defined.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { App } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;litojs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> app</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  apps: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;core&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p>Inside an <code>App(config)</code> you can register any app inside <code>apps</code> folder to Lito. Where all router, controller and models would be read by Lito.</p>`,9)]))}const u=s(p,[["render",n]]);export{k as __pageData,u as default};
