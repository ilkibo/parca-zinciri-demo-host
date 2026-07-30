/* ============================================================
   PARÇA ZİNCİRİ — parca-zinciri-app
   Self-contained V6 homepage for Wix Studio custom element.
   ============================================================ */
(function () {
  "use strict";

  if (typeof customElements === "undefined") return;
  if (customElements.get("parca-zinciri-app")) return;

  var FONT_HREF =
    "https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@125,600;125,700&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap";

  var WORDMARK = "<svg class=\"pz-wordmark\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 610.92 84\" role=\"img\" aria-label=\"Parça Zinciri\"><g transform=\"translate(-15,-18)\"><path fill=\"#FF6B00\" fill-rule=\"evenodd\" d=\"M65,18 L77,30 L77,48 L93,48 L105,60 L105,90 L93,102 L55,102 L43,90 L43,72 L27,72 L15,60 L15,30 L27,18ZM69,45 L51,45 L45,51 L45,69 L51,75 L69,75 L75,69 L75,51Z\"/></g>\n  <path fill=\"#FFFFFF\" d=\"M109.69 59.5V24.45H135.97Q139.39 24.45 141.94 25.93Q144.49 27.41 145.92 30.04Q147.35 32.66 147.35 36.08Q147.35 39.5 145.89 42.18Q144.44 44.86 141.84 46.34Q139.23 47.82 135.82 47.82H118.52V59.5ZM118.52 40.83H133.37Q135.92 40.83 137.3 39.6Q138.67 38.38 138.67 36.13Q138.67 34.65 138.06 33.61Q137.45 32.56 136.25 31.97Q135.05 31.39 133.37 31.39H118.52ZM165.2,26.18 L166.94,24.45 L173.37,24.45 L175.1,26.18 L175.1,24.45 L192.5,59.5 L182.91,59.5 L179.85,53.17 L159.9,53.17 L156.84,59.5 L147.81,59.5 L165.2,24.45ZM172.91,38.38 L172.87,38.29 L172.83,38.19 L172.79,38.09 L172.74,37.98 L172.69,37.86 L172.64,37.74 L172.58,37.61 L172.52,37.47 L172.46,37.33 L172.39,37.17 L172.32,37.01 L172.24,36.85 L172.17,36.68 L172.09,36.51 L172.02,36.33 L171.94,36.16 L171.87,35.99 L171.79,35.81 L171.72,35.64 L171.64,35.46 L171.57,35.29 L171.5,35.11 L171.42,34.93 L171.35,34.76 L171.28,34.58 L171.21,34.4 L171.14,34.23 L171.07,34.06 L171,33.9 L170.94,33.73 L170.87,33.57 L170.81,33.42 L170.74,33.26 L170.68,33.11 L170.62,32.96 L170.56,32.82 L170.5,32.68 L170.45,32.55 L170.4,32.42 L170.35,32.31 L170.31,32.21 L170.27,32.11 L170.23,32.03 L170.2,31.95 L170.17,31.89 L170.14,31.83 L170.12,31.78 L170.1,31.74 L169.69,31.74 L169.62,31.92 L169.55,32.09 L169.48,32.27 L169.4,32.45 L169.33,32.64 L169.25,32.83 L169.17,33.02 L169.08,33.22 L169,33.42 L168.91,33.62 L168.82,33.83 L168.72,34.04 L168.63,34.25 L168.54,34.46 L168.45,34.67 L168.36,34.88 L168.27,35.09 L168.18,35.3 L168.1,35.5 L168.01,35.71 L167.93,35.91 L167.84,36.11 L167.76,36.31 L167.68,36.52 L167.6,36.71 L167.52,36.9 L167.44,37.08 L167.37,37.26 L167.3,37.43 L167.23,37.59 L167.16,37.75 L167.09,37.9 L167.02,38.04 L166.96,38.18 L166.9,38.31 L166.84,38.43 L163.11,46.39 L176.63,46.39ZM199.8 59.5V24.45H228.11Q231.89 24.45 234.31 25.98Q236.73 27.51 237.96 30.01Q239.18 32.51 239.18 35.57Q239.18 38.73 237.58 41.46Q235.97 44.19 232.7 45.78L240 59.5H230.1L223.93 47.36H208.62V59.5ZM208.62 40.42H225.51Q227.65 40.42 228.9 39.12Q230.15 37.82 230.15 35.78Q230.15 34.35 229.59 33.38Q229.03 32.41 228.01 31.9Q226.99 31.39 225.51 31.39H208.62ZM268.72 60.11Q261.53 60.11 256.68 58.05Q251.84 55.98 249.41 51.92Q246.99 47.87 246.99 41.95Q246.99 33.28 252.55 28.56Q258.11 23.84 268.67 23.84Q274.64 23.84 279.18 25.57Q283.72 27.31 286.28 30.52Q288.83 33.73 288.83 38.17H280.2Q280.2 35.83 278.75 34.17Q277.3 32.51 274.67 31.64Q272.04 30.78 268.52 30.78Q264.64 30.78 261.84 32.05Q259.03 33.33 257.55 35.67Q256.07 38.02 256.07 41.29V42.56Q256.07 45.83 257.55 48.2Q259.03 50.57 261.84 51.85Q264.64 53.12 268.52 53.12Q272.24 53.12 274.9 52.31Q277.55 51.49 279.01 49.86Q280.46 48.22 280.46 45.88H288.88Q288.88 50.21 286.38 53.43Q283.88 56.64 279.36 58.38Q274.85 60.11 268.72 60.11ZM268.98 69.6Q267.14 69.6 265.18 69.45Q263.21 69.3 261.94 68.99V66.44H268.72Q269.74 66.44 270.36 66.21Q270.97 65.98 270.97 65.16Q270.97 64.45 270.48 64.19Q270 63.94 268.83 63.94H265.51L266.68 57.97H271.02L270.41 61.18Q271.89 61.23 273.14 61.64Q274.39 62.05 275.15 62.92Q275.92 63.79 275.92 65.37Q275.92 66.64 275.28 67.51Q274.64 68.38 273.6 68.81Q272.55 69.24 271.33 69.42Q270.1 69.6 268.98 69.6ZM311.63,26.18 L313.37,24.45 L319.8,24.45 L321.53,26.18 L321.53,24.45 L338.93,59.5 L329.34,59.5 L326.28,53.17 L306.33,53.17 L303.27,59.5 L294.23,59.5 L311.63,24.45ZM319.34,38.38 L319.3,38.29 L319.26,38.19 L319.22,38.09 L319.17,37.98 L319.12,37.86 L319.07,37.74 L319.01,37.61 L318.95,37.47 L318.89,37.33 L318.82,37.17 L318.75,37.01 L318.67,36.85 L318.6,36.68 L318.52,36.51 L318.45,36.33 L318.37,36.16 L318.3,35.99 L318.22,35.81 L318.15,35.64 L318.07,35.46 L318,35.29 L317.93,35.11 L317.85,34.93 L317.78,34.76 L317.71,34.58 L317.64,34.4 L317.57,34.23 L317.5,34.06 L317.43,33.9 L317.37,33.73 L317.3,33.57 L317.24,33.42 L317.17,33.26 L317.11,33.11 L317.05,32.96 L316.99,32.82 L316.93,32.68 L316.88,32.55 L316.83,32.42 L316.78,32.31 L316.74,32.21 L316.7,32.11 L316.66,32.03 L316.63,31.95 L316.6,31.89 L316.57,31.83 L316.55,31.78 L316.53,31.74 L316.12,31.74 L316.05,31.92 L315.98,32.09 L315.91,32.27 L315.83,32.45 L315.76,32.64 L315.68,32.83 L315.59,33.02 L315.51,33.22 L315.42,33.42 L315.34,33.62 L315.25,33.83 L315.15,34.04 L315.06,34.25 L314.97,34.46 L314.88,34.67 L314.79,34.88 L314.7,35.09 L314.61,35.3 L314.52,35.5 L314.44,35.71 L314.35,35.91 L314.27,36.11 L314.19,36.31 L314.11,36.52 L314.03,36.71 L313.95,36.9 L313.87,37.08 L313.8,37.26 L313.73,37.43 L313.65,37.59 L313.59,37.75 L313.52,37.9 L313.45,38.04 L313.39,38.18 L313.33,38.31 L313.27,38.43 L309.54,46.39 L323.06,46.39ZM383.93,31.39 L362.7,31.39 L362.7,24.45 L397.04,24.45 L398.78,26.18 L398.78,27.97 L375.87,52.51 L399.03,52.51 L399.03,59.5 L362.86,59.5 L361.12,57.77 L361.12,55.93ZM408.27 59.5V24.45H417.09V59.5ZM409.03 21.03V14.7H416.33V21.03ZM428.01 59.5V24.45H436.12L454.9 42.05Q455.46 42.51 456.3 43.38Q457.14 44.24 458.06 45.19Q458.98 46.13 459.64 46.85H460.1Q460.05 45.83 459.97 44.3Q459.9 42.77 459.9 41.74V24.45H468.32V59.5H460.36L441.73 41.9Q440.41 40.67 438.98 39.19Q437.55 37.71 436.68 36.8H436.28Q436.33 37.46 436.38 39.04Q436.43 40.62 436.43 42.61V59.5ZM499.44 60.11Q492.24 60.11 487.4 58.05Q482.55 55.98 480.13 51.92Q477.7 47.87 477.7 41.95Q477.7 33.28 483.27 28.56Q488.83 23.84 499.39 23.84Q505.36 23.84 509.9 25.57Q514.44 27.31 516.99 30.52Q519.54 33.73 519.54 38.17H510.92Q510.92 35.83 509.46 34.17Q508.01 32.51 505.38 31.64Q502.76 30.78 499.23 30.78Q495.36 30.78 492.55 32.05Q489.74 33.33 488.27 35.67Q486.79 38.02 486.79 41.29V42.56Q486.79 45.83 488.27 48.2Q489.74 50.57 492.55 51.85Q495.36 53.12 499.23 53.12Q502.96 53.12 505.61 52.31Q508.27 51.49 509.72 49.86Q511.17 48.22 511.17 45.88H519.59Q519.59 50.21 517.09 53.43Q514.59 56.64 510.08 58.38Q505.56 60.11 499.44 60.11ZM528.93 59.5V24.45H537.76V59.5ZM529.69 21.03V14.7H536.99V21.03ZM548.67 59.5V24.45H576.99Q580.77 24.45 583.19 25.98Q585.61 27.51 586.84 30.01Q588.06 32.51 588.06 35.57Q588.06 38.73 586.45 41.46Q584.85 44.19 581.58 45.78L588.88 59.5H578.98L572.81 47.36H557.5V59.5ZM557.5 40.42H574.39Q576.53 40.42 577.78 39.12Q579.03 37.82 579.03 35.78Q579.03 34.35 578.47 33.38Q577.91 32.41 576.89 31.9Q575.87 31.39 574.39 31.39H557.5ZM597.4 59.5V24.45H606.22V59.5ZM598.16 21.03V14.7H605.46V21.03Z\"/></svg>";
  var MARK = "<svg class=\"pz-mark\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 90 84\" role=\"img\" aria-label=\"Parça Zinciri\"><g transform=\"translate(-15,-18)\"><path fill=\"#FF6B00\" fill-rule=\"evenodd\" d=\"M65,18 L77,30 L77,48 L93,48 L105,60 L105,90 L93,102 L55,102 L43,90 L43,72 L27,72 L15,60 L15,30 L27,18ZM69,45 L51,45 L45,51 L45,69 L51,75 L69,75 L75,69 L75,51Z\"/></g></svg>";
  /* WhatsApp: ülke kodu, +/boşluk/tire yok. Tek merkezi sabit. */
  var WHATSAPP_NUMBER = "905351089690";
  /* Geçici staging portal — Wix site prefix (my-site-1) zorunlu. Attribute override eder. */
  var DEFAULT_SUPPLIER_PORTAL_URL =
    "https://degerkaybi.wixstudio.com/my-site-1/tedarikci";
  /* Asset root = JS file directory + /assets (tunnel / Pages / local). Hostname hardcode yok. */
  var ASSET_BASE = (function () {
    function fromSrc(src) {
      if (!src) return "";
      try {
        var u = new URL(src, (typeof location !== "undefined" && location.href) || undefined);
        var dir = u.pathname.replace(/\/[^/]*$/, "");
        if (dir === "/") dir = "";
        return u.origin + dir + "/assets";
      } catch (e) {
        return "";
      }
    }
    try {
      if (typeof document !== "undefined") {
        if (document.currentScript && document.currentScript.src) {
          var a = fromSrc(document.currentScript.src);
          if (a) return a;
        }
        var scripts = document.getElementsByTagName("script");
        for (var i = scripts.length - 1; i >= 0; i--) {
          var s = scripts[i] && scripts[i].src;
          if (s && /parca-zinciri-app\.js/i.test(s)) {
            var b = fromSrc(s);
            if (b) return b;
          }
        }
      }
    } catch (e2) {}
    try {
      var h = location && location.hostname;
      if (h === "127.0.0.1" || h === "localhost") return location.origin + "/assets";
    } catch (e3) {}
    return "/assets";
  })();
  var HERO_IMG = ASSET_BASE + "/hero/hero-mobile.webp";
  var SEQ_BASE = ASSET_BASE + "/hero-sequence/";
  var CINE_BASE = ASSET_BASE + "/hero-cinematic/";
  var CINE_WEBM = CINE_BASE + "parca-zinciri-hero.webm";
  var CINE_MP4 = CINE_BASE + "parca-zinciri-hero.mp4";
  var CINE_POSTER = CINE_BASE + "poster.webp";
  var SEQ_COUNT = 108;
  var SEQ_LAST = 107;
  var CINE_FPS = 24;
  var CINE_PATH = [8,8,9,9,10,10,11,11,12,12,12,13,13,14,15,16,16,17,18,18,19,20,21,21,22,23,23,24,25,26,26,27,28,28,29,30,30,31,32,33,33,34,35,35,36,37,38,38,39,40,40,41,42,43,43,44,44,46,48,49,51,53,55,56,58,60,62,63,65,67,69,70,72,74,74,75,76,77,77,78,79,80,81,82,82,83,84,85,86,87,88,88,89,90,91,92,93,93,94,95,96,97,98,99,99,100,101,102,103,104,104,105,106,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,107,105,103,101,100,98,96,94,92,90,88,87,85,83,81,79,77,75,74,72,70,68];
  var CINE_DURATION = 7;

  var CSS_TEXT = `
:host {
  display: block;
  width: 100%;
  color: var(--text);
  background: var(--void);
  font-family: var(--body);
  font-size: 16px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
  box-sizing: border-box;
}
*, *::before, *::after { box-sizing: border-box; }
:host, .root {
  --void:#0F0F0F;
  --plate:#1A1A1A;
  --raise:#202020;
  --line:#242424;
  --line-2:#363636;
  --line-3:#4A4A4A;
  --text:#F2F2F2;
  --mid:#A8A8A8;
  --dim:#8A8A8A;
  --accent:#FF6B00;
  --accent-soft:rgba(255,107,0,.10);
  --accent-line:rgba(255,107,0,.42);
  --display:"Archivo","Arial Narrow",system-ui,sans-serif;
  --body:"IBM Plex Sans",system-ui,sans-serif;
  --mono:"IBM Plex Mono",ui-monospace,monospace;
  --gutter:clamp(20px,4vw,64px);
  --maxw:1440px;
  --ease:cubic-bezier(.2,.7,.2,1);
  --hdr-h:76px;
  --hdr-h-stuck:62px;
}
.root {
  margin:0;
  background:var(--void);
  color:var(--text);
  font-family:var(--body);
  overflow-x:hidden;
}
a { color:inherit; text-decoration:none; }
button,input,select,textarea { font:inherit; color:inherit; }
:focus-visible { outline:2px solid var(--accent); outline-offset:2px; }
h1,h2,h3,h4,p { overflow-wrap:break-word; margin:0; }
.shell { max-width:var(--maxw); margin:0 auto; padding-inline:var(--gutter); }
.display {
  font-family:var(--display);
  font-variation-settings:"wdth" 125,"wght" 700;
  font-weight:700;
  text-transform:uppercase;
  line-height:.96;
  letter-spacing:-.01em;
}
.eyebrow {
  font-family:var(--mono);
  font-size:11px;
  font-weight:500;
  letter-spacing:.2em;
  text-transform:uppercase;
  color:var(--dim);
}
.skip {
  position:absolute; left:var(--gutter); top:0; z-index:100;
  transform:translateY(-140%);
  background:var(--accent); color:#0F0F0F;
  font-family:var(--mono); font-size:11px; letter-spacing:.14em; text-transform:uppercase;
  padding:12px 16px; min-height:44px;
}
.skip:focus { transform:none; }
.brand { display:flex; align-items:center; }
.brand svg { display:block; width:auto; flex:none; transition:height .35s var(--ease), transform .4s var(--ease); }
.brand .lock-h, .brand .pz-wordmark { height:30px; }
.brand .lock-i, .brand .pz-mark { height:30px; display:none; }
.brand:hover svg { transform:translate(1px,-1px); }
.hdr {
  position:sticky; top:0; z-index:60; height:var(--hdr-h);
  display:flex; align-items:center;
  background:rgba(15,15,15,.94);
  backdrop-filter:blur(8px);
  border-bottom:1px solid var(--line);
  transition:height .35s var(--ease);
}
.hdr.stuck { height:var(--hdr-h-stuck); }
.hdr.stuck .brand .lock-h, .hdr.stuck .brand .lock-i,
.hdr.stuck .brand .pz-wordmark, .hdr.stuck .brand .pz-mark { height:25px; }
.hdr .shell { display:flex; align-items:center; gap:28px; width:100%; }
.hdr .brand { margin-right:auto; }
.nav { display:flex; align-items:center; gap:26px; }
.nav a {
  font-size:13px; color:var(--mid); position:relative; padding-block:8px;
  transition:color .25s var(--ease);
}
.nav a::after {
  content:""; position:absolute; left:0; bottom:2px; height:1px; width:0;
  background:var(--accent); transition:width .3s var(--ease);
}
.nav a:hover { color:var(--text); }
.nav a:hover::after { width:100%; }
.btn-cta {
  font-family:var(--mono); font-size:11px; font-weight:600; letter-spacing:.16em;
  text-transform:uppercase; padding:0 16px; min-height:40px; min-width:44px;
  border:1px solid var(--accent); background:var(--accent); color:#0F0F0F; cursor:pointer;
  display:inline-flex; align-items:center; justify-content:center;
  transition:filter .2s var(--ease), transform .15s var(--ease);
}
.btn-cta:hover { filter:brightness(1.1); }
.btn-cta:active { transform:scale(.98); }

.brand-lockup { display:flex; flex-direction:column; gap:4px; align-items:flex-start; }
.brand-lockup .brand-row { display:flex; align-items:center; }
.brand-tag {
  font-family:var(--mono); font-size:9px; letter-spacing:.16em; text-transform:uppercase;
  color:var(--dim); line-height:1.2;
}
.hdr-actions { display:flex; align-items:center; gap:10px; flex:none; }
.btn-b2b {
  font-family:var(--mono); font-size:11px; font-weight:600; letter-spacing:.14em;
  text-transform:uppercase; padding:0 14px; min-height:40px; min-width:44px;
  border:1px solid var(--line-2); background:var(--void); color:var(--text); cursor:pointer;
  display:inline-flex; align-items:center; justify-content:center;
  transition:border-color .2s var(--ease), color .2s var(--ease), background .2s var(--ease);
}
.btn-b2b:hover { border-color:var(--accent); color:var(--accent); }
.mnav .mnav-b2b {
  margin-top:18px; display:inline-flex; align-self:flex-start; min-height:48px; padding:0 18px;
  border:1px solid var(--line-2); background:var(--plate); font-family:var(--mono);
  font-size:12px; letter-spacing:.16em; text-transform:uppercase; color:var(--text); cursor:pointer;
}
.mnav .mnav-b2b:hover { border-color:var(--accent); color:var(--accent); }
.mnav .mnav-cta { color:var(--accent) !important; }
.b2b-split {
  display:grid; grid-template-columns:1fr 1fr; gap:clamp(20px,3vw,36px); margin-top:28px;
}
.b2b-col {
  background:var(--plate); border:1px solid var(--line); padding:clamp(22px,3vw,32px);
  position:relative; overflow:hidden;
}
.b2b-col::before {
  content:""; position:absolute; inset:0; pointer-events:none;
  background-image:linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px);
  background-size:28px 28px; opacity:.35;
}
.b2b-col > * { position:relative; z-index:1; }
.b2b-col h3 {
  font-family:var(--display); font-variation-settings:"wdth" 125,"wght" 700;
  font-size:clamp(18px,2vw,24px); text-transform:uppercase; margin-bottom:16px;
}
.b2b-col ul { list-style:none; padding:0; margin:0 0 22px; }
.b2b-col li {
  position:relative; padding:10px 0 10px 18px; border-bottom:1px solid var(--line);
  font-size:14px; color:var(--mid);
}
.b2b-col li::before {
  content:""; position:absolute; left:0; top:18px; width:8px; height:1px; background:var(--accent);
}
.b2b-modal {
  position:fixed; inset:0; z-index:200; display:none; align-items:center; justify-content:center;
  padding:clamp(12px,3vw,28px);
}
.b2b-modal.open { display:flex; }
.b2b-scrim { position:absolute; inset:0; background:rgba(8,8,8,.78); backdrop-filter:blur(4px); }
.b2b-panel {
  position:relative; z-index:1; width:min(560px,100%); max-height:min(92vh,820px);
  overflow:auto; overscroll-behavior:contain; background:var(--void);
  border:1px solid var(--line-2); box-shadow:0 24px 80px rgba(0,0,0,.55);
}
.b2b-panel.wide { width:min(920px,100%); }
.b2b-head {
  display:flex; align-items:flex-start; gap:14px; padding:20px 22px 16px;
  border-bottom:1px solid var(--line); position:sticky; top:0; background:var(--void); z-index:2;
}
.b2b-head .txt { flex:1; min-width:0; }
.b2b-head .kick {
  font-family:var(--mono); font-size:10px; letter-spacing:.2em; text-transform:uppercase; color:var(--dim);
  display:block; margin-bottom:8px;
}
.b2b-head h3 {
  font-family:var(--display); font-variation-settings:"wdth" 125,"wght" 700;
  font-size:clamp(18px,2.4vw,24px); text-transform:uppercase; line-height:1.05;
}
.b2b-head p { margin-top:8px; font-size:13px; color:var(--mid); max-width:42ch; }
.b2b-x {
  flex:none; width:44px; height:44px; border:1px solid var(--line-2); background:none;
  color:var(--mid); cursor:pointer; font-size:18px; line-height:1;
}
.b2b-x:hover { border-color:var(--line-3); color:var(--text); }
.b2b-tabs {
  display:flex; border-bottom:1px solid var(--line); padding:0 8px; gap:4px;
}
.b2b-tabs button {
  flex:1; border:0; background:none; color:var(--dim); cursor:pointer;
  font-family:var(--mono); font-size:11px; letter-spacing:.14em; text-transform:uppercase;
  padding:14px 10px; border-bottom:2px solid transparent; min-height:48px;
}
.b2b-tabs button.active { color:var(--text); border-bottom-color:var(--accent); }
.b2b-body { padding:22px; }
.b2b-pane { display:none; }
.b2b-pane.active { display:block; }
.b2b-form .field { margin-bottom:14px; }
.b2b-form .field label {
  display:block; font-family:var(--mono); font-size:10px; letter-spacing:.14em;
  text-transform:uppercase; color:var(--dim); margin-bottom:7px;
}
.b2b-form .field input[type="email"],
.b2b-form .field input[type="password"] {
  width:100%; background:var(--plate); border:1px solid var(--line-2); color:var(--text);
  padding:12px 13px; min-height:46px; border-radius:0;
}
.b2b-form .field input:focus { border-color:var(--accent-line); outline:none; }
.b2b-form .field.err input { border-color:var(--accent); }
.b2b-form .ferr { display:none; margin-top:6px; font-size:12px; color:var(--text); }
.b2b-form .field.err .ferr { display:block; }
.b2b-row {
  display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;
  margin:8px 0 18px; font-size:13px; color:var(--mid);
}
.b2b-row label { display:flex; align-items:center; gap:8px; cursor:pointer; }
.b2b-row input { accent-color:var(--accent); width:18px; height:18px; }
.b2b-row a { color:var(--text); text-decoration:underline; text-underline-offset:3px; }
.b2b-form .btn { width:100%; }
.b2b-extra { margin-top:16px; font-size:13px; color:var(--mid); text-align:center; }
.b2b-extra button {
  border:0; background:none; color:var(--accent); cursor:pointer; font:inherit;
  text-decoration:underline; text-underline-offset:3px; padding:0;
}
.b2b-loading {
  display:none; text-align:center; padding:40px 20px; font-family:var(--mono);
  font-size:12px; letter-spacing:.16em; text-transform:uppercase; color:var(--mid);
}
.b2b-loading.on { display:block; }
.b2b-loading .spin {
  width:28px; height:28px; margin:0 auto 16px; border:1px solid var(--line-2);
  border-top-color:var(--accent); border-radius:50%;
  animation:pzspin .8s linear infinite;
}
@keyframes pzspin { to { transform:rotate(360deg); } }
.portal { display:none; }
.portal.on { display:block; }
.portal-top {
  display:flex; align-items:flex-start; justify-content:space-between; gap:16px; flex-wrap:wrap;
  margin-bottom:22px;
}
.portal-top h4 {
  font-family:var(--display); font-variation-settings:"wdth" 125,"wght" 700;
  font-size:clamp(18px,2vw,22px); text-transform:uppercase;
}
.portal-top p { font-size:13px; color:var(--mid); margin-top:6px; }
.portal-grid {
  display:grid; grid-template-columns:repeat(2,1fr); gap:14px; margin-bottom:18px;
}
.portal-card {
  background:var(--plate); border:1px solid var(--line); padding:16px 16px 14px;
}
.portal-card .lab {
  font-family:var(--mono); font-size:9px; letter-spacing:.16em; text-transform:uppercase; color:var(--dim);
  margin-bottom:10px;
}
.portal-card h5 { font-size:15px; color:var(--text); margin-bottom:8px; font-weight:500; }
.portal-card p { font-size:13px; color:var(--mid); }
.portal-card .status {
  display:inline-block; margin-top:12px; font-family:var(--mono); font-size:9px;
  letter-spacing:.14em; text-transform:uppercase; border:1px solid var(--line-2);
  padding:4px 8px; color:var(--mid);
}
.portal-card .status.on { border-color:var(--accent-line); color:var(--text); }
.portal-list { border:1px solid var(--line); background:var(--plate); }
.portal-list .item {
  display:flex; justify-content:space-between; gap:12px; align-items:center;
  padding:12px 14px; border-bottom:1px solid var(--line); font-size:13px;
}
.portal-list .item:last-child { border-bottom:0; }
.portal-list .item span { color:var(--mid); font-family:var(--mono); font-size:11px; }
@media (max-width:820px) {
  .hdr-actions .btn-b2b.desk, .hdr-actions .btn-cta.desk { display:none; }
  .b2b-split { grid-template-columns:1fr; }
  .b2b-modal { align-items:stretch; padding:0; }
  .b2b-panel, .b2b-panel.wide {
    width:100%; max-height:none; height:100%; border:0; border-radius:0;
  }
  .portal-grid { grid-template-columns:1fr; }
}
@media (max-width:1120px) {
  .nav { gap:16px; }
  .hdr .shell { gap:16px; }
}

.burger {
  display:none; width:44px; height:44px; border:1px solid var(--line-2);
  background:none; cursor:pointer; align-items:center; justify-content:center; padding:0;
}
.burger i { display:block; width:18px; height:1px; background:var(--text); position:relative; }
.burger i::before, .burger i::after {
  content:""; position:absolute; left:0; width:18px; height:1px; background:var(--text);
}
.burger i::before { top:-6px; } .burger i::after { top:6px; }
.mnav {
  position:fixed; inset:0; z-index:55; background:var(--void);
  display:none; flex-direction:column; justify-content:center; gap:4px;
  padding:calc(var(--hdr-h) + 12px) var(--gutter) 40px;
  overflow-y:auto;
}
.mnav.open { display:flex; }
.mnav a {
  font-family:var(--display); font-variation-settings:"wdth" 125,"wght" 700;
  font-size:clamp(24px,7vw,32px); text-transform:uppercase;
  padding:16px 0; border-bottom:1px solid var(--line); min-height:44px;
}
.mnav a .n { font-family:var(--mono); font-size:11px; color:var(--accent); margin-right:12px; vertical-align:super; }
.main { position:relative; }
.sec {
  position:relative; border-top:1px solid var(--line);
  padding-block:clamp(72px,9vw,132px);
}
.sec-head {
  display:flex; align-items:baseline; gap:18px;
  margin-bottom:clamp(32px,4vw,56px); flex-wrap:wrap;
}
.sec-head h2 { font-size:clamp(26px,3.4vw,46px); }
.sec-rule { flex:1; height:1px; background:var(--line); min-width:40px; }
.sec-sub { font-size:15px; color:var(--mid); max-width:52ch; margin-top:12px; }
.btn {
  font-family:var(--mono); font-size:11px; font-weight:500; letter-spacing:.14em; text-transform:uppercase;
  padding:12px 18px; cursor:pointer; border:1px solid var(--line-2); background:transparent; color:var(--text);
  min-height:44px; display:inline-flex; align-items:center; justify-content:center; gap:8px;
  transition:border-color .25s var(--ease), background .25s var(--ease), transform .15s var(--ease);
}
.btn:hover { border-color:var(--line-3); background:rgba(255,255,255,.03); }
.btn:active { transform:scale(.98); }
.btn.primary { background:var(--accent); border-color:var(--accent); color:#0F0F0F; }
.btn.primary:hover { filter:brightness(1.1); background:var(--accent); }
.actions { display:flex; gap:10px; flex-wrap:wrap; }
.hero-grid {
  display:grid; grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);
  gap:clamp(28px,4vw,56px); align-items:center;
}
.hero .eyebrow { margin-bottom:18px; }
h1.hero-h { font-size:clamp(34px,5vw,68px); margin-bottom:22px; }
h1.hero-h .l2 { display:block; color:var(--accent); margin-top:.08em; }
.hero-sub {
  font-size:clamp(15px,1.4vw,18px); color:var(--mid); max-width:42ch; margin:0 0 28px; line-height:1.6;
}
.hero { border-top:0; padding-block:0; }
.hero-pin {
  position:relative; height:auto; border-top:0;
}
.hero-sticky {
  position:relative; min-height:0;
  display:block;
  padding-block:clamp(36px,5vw,72px) clamp(40px,5vw,72px);
  background:var(--void);
  border-bottom:1px solid var(--line);
}
.hero-vis {
  position:relative; aspect-ratio:1.2 / 1; max-height:min(70vh,580px); width:100%; justify-self:center;
  background:var(--plate); border:1px solid var(--line); overflow:hidden;
  transform-style:preserve-3d; perspective:1200px;
}
.hero-vis[data-mode="sequence"] .seq-canvas,
.hero-vis[data-mode="video"] .seq-video { cursor:grab; touch-action:none; }
.hero-vis.is-dragging .seq-canvas,
.hero-vis.is-dragging .seq-video { cursor:grabbing; }
.hero-vis .shadow-floor {
  position:absolute; left:10%; right:10%; bottom:8%; height:18%; z-index:1; pointer-events:none;
  background:radial-gradient(ellipse at center, rgba(0,0,0,.58) 0%, transparent 72%);
  opacity:.7; will-change:transform,opacity;
}
.hero-vis .seq-canvas,
.hero-vis .seq-poster,
.hero-vis .seq-fallback-img,
.hero-vis .seq-video {
  position:absolute; inset:0; width:100%; height:100%; display:none;
}
.hero-vis .seq-video {
  object-fit:contain; object-position:center 48%; background:#0a0a0a; opacity:0;
  transition:opacity .28s var(--ease); z-index:2; padding:7% 9%;
}
.hero-vis .seq-canvas {
  opacity:0; transition:opacity .28s var(--ease); will-change:transform; z-index:2;
}
.hero-vis .seq-poster,
.hero-vis .seq-fallback-img {
  object-fit:contain; object-position:center 48%; padding:7% 9%; z-index:1;
}
.hero-vis[data-mode="video"] .seq-video,
.hero-vis[data-mode="sequence"] .seq-video { display:block; }
.hero-vis[data-mode="video"].ready .seq-video { opacity:1; }
.hero-vis[data-mode="sequence"] .seq-video { opacity:0; pointer-events:none; }
.hero-vis[data-mode="sequence"] .seq-canvas { display:block; }
.hero-vis[data-mode="sequence"].ready .seq-canvas { opacity:1; }
.hero-vis[data-mode="poster"] .seq-poster { display:block; }
.hero-vis[data-mode="fallback"] .seq-fallback-img { display:block; object-fit:cover; }
.hero-vis[data-mode="video"].ready .seq-fallback-img,
.hero-vis[data-mode="sequence"].ready .seq-fallback-img,
.hero-vis[data-mode="poster"].ready .seq-fallback-img { visibility:hidden; }
.hero-vis[data-mode="poster"] .seq-poster {
  animation:pzPosterBreathe 5.2s ease-in-out infinite;
}
@keyframes pzPosterBreathe {
  0%,100% { transform:scale(1); }
  50% { transform:scale(1.04); }
}
.hero-vis .vignette {
  position:absolute; inset:0; z-index:2; pointer-events:none;
  background:radial-gradient(ellipse at center, transparent 42%, rgba(0,0,0,.42) 100%);
  opacity:.85;
}
.hero-vis .glow {
  position:absolute; inset:-18% -8% auto auto; width:62%; height:62%; pointer-events:none; z-index:1;
  background:radial-gradient(circle at 65% 35%, rgba(255,107,0,.22), transparent 64%);
  mix-blend-mode:screen; opacity:.8; will-change:transform,opacity;
  animation:pzGlowPulse 4.8s ease-in-out infinite;
}
.hero-vis .overlay {
  position:absolute; inset:0; pointer-events:none; z-index:2;
  background:
    linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px);
  background-size:24px 24px;
  opacity:.5; will-change:transform;
  animation:pzGridDrift 18s linear infinite;
}
.hero-vis .tech-lines {
  position:absolute; inset:0; pointer-events:none; z-index:3;
}
.hero-vis .tech-lines line { stroke:var(--line-2); stroke-width:1; opacity:.5; }
.hero-vis .corner {
  position:absolute; width:28px; height:28px; border-color:var(--accent-line); border-style:solid; opacity:.75; z-index:4;
}
.hero-vis .corner.tl { top:12px; left:12px; border-width:1px 0 0 1px; }
.hero-vis .corner.br { bottom:12px; right:12px; border-width:0 1px 1px 0; }
.hero-vis .badge {
  position:absolute; bottom:16px; left:16px; z-index:5;
  font-family:var(--mono); font-size:10px; letter-spacing:.16em; text-transform:uppercase;
  color:var(--dim); background:rgba(15,15,15,.75); border:1px solid var(--line-2); padding:6px 10px;
}
.hero-vis .stage-rail {
  position:absolute; top:12px; left:12px; right:12px; z-index:5;
  display:flex; gap:6px; pointer-events:none;
}
.hero-vis .stage-rail span {
  flex:1; text-align:center; padding:7px 4px;
  font-family:var(--mono); font-size:9px; letter-spacing:.12em; text-transform:uppercase;
  color:var(--dim); border:1px solid var(--line); background:rgba(15,15,15,.55);
}
.hero-vis .stage-rail span.on {
  color:var(--accent); border-color:var(--accent-line); background:var(--accent-soft);
}
.hero-vis .callouts { position:absolute; inset:0; z-index:4; pointer-events:none; }
.hero-vis .callout {
  position:absolute; max-width:180px; opacity:0; transform:translateY(6px);
  transition:opacity .45s var(--ease), transform .45s var(--ease);
}
.hero-vis .callout.on { opacity:1; transform:translateY(0); }
.hero-vis .callout .dot {
  width:6px; height:6px; border-radius:50%; background:var(--accent); display:inline-block; margin-right:8px;
  box-shadow:0 0 0 1px rgba(255,107,0,.35);
}
.hero-vis .callout .line {
  display:inline-block; width:28px; height:1px; background:var(--accent-line); vertical-align:middle; margin-right:8px;
}
.hero-vis .callout .txt {
  display:inline-block; font-family:var(--mono); font-size:10px; letter-spacing:.14em; text-transform:uppercase;
  color:var(--text); background:rgba(15,15,15,.72); border:1px solid var(--line); padding:6px 8px;
}
.hero-vis .callout.c0 { top:22%; left:6%; }
.hero-vis .callout.c1 { top:48%; right:5%; text-align:right; }
.hero-vis .callout.c2 { bottom:22%; left:10%; }
@keyframes pzGlowPulse {
  0%,100% { opacity:.72; }
  50% { opacity:.95; }
}
@keyframes pzGridDrift {
  0% { background-position:0 0; }
  100% { background-position:24px 12px; }
}
@media (prefers-reduced-motion:reduce) {
  .hero-vis .glow, .hero-vis .overlay,
  .hero-vis[data-mode="poster"] .seq-poster { animation:none !important; }
}
.mnav .mnav-wa {
  margin-top:12px; display:inline-flex; align-self:flex-start; min-height:48px; padding:0 18px;
  border:1px solid var(--accent); background:var(--accent); color:#0F0F0F; font-family:var(--mono);
  font-size:12px; letter-spacing:.16em; text-transform:uppercase; cursor:pointer; text-decoration:none;
}
.mnav .mnav-wa:hover { filter:brightness(1.08); }
.search-panel {
  width:100%; max-width:580px; border:1px solid var(--line-2); background:var(--plate);
  margin-top:8px;
}
.search-tabs { display:flex; border-bottom:1px solid var(--line); }
.search-tabs button {
  flex:1; padding:14px 12px; border:0; background:none; cursor:pointer;
  font-family:var(--mono); font-size:10px; letter-spacing:.18em; text-transform:uppercase;
  color:var(--dim); border-bottom:2px solid transparent; transition:color .2s, border-color .2s;
}
.search-tabs button.active { color:var(--text); border-bottom-color:var(--accent); }
.search-tabs button:hover { color:var(--text); }
.search-body { padding:18px 16px 16px; }
.search-pane { display:none; }
.search-pane.active { display:block; }
.field-grid { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
.field { display:flex; flex-direction:column; gap:6px; }
.field.full { grid-column:1/-1; }
.field label {
  font-family:var(--mono); font-size:10px; letter-spacing:.14em; text-transform:uppercase; color:var(--dim);
}
.field input, .field select {
  width:100%; padding:12px 14px; background:var(--raise); border:1px solid var(--line);
  min-height:44px; transition:border-color .2s;
}
.field input:focus, .field select:focus { border-color:var(--line-2); outline:none; }
.field input::placeholder { color:var(--dim); opacity:.7; }
.search-submit {
  width:100%; margin-top:14px; border:0; background:var(--accent); color:#0F0F0F;
  font-family:var(--mono); font-weight:600; font-size:11px; letter-spacing:.18em; text-transform:uppercase;
  padding:14px; min-height:48px; cursor:pointer; transition:filter .2s, transform .15s;
}
.search-submit:hover { filter:brightness(1.1); }
.search-submit:active { transform:scale(.99); }
.search-status {
  margin-top:12px; padding:12px 14px; border:1px solid var(--line-2); background:var(--raise);
  font-size:13px; color:var(--mid); display:none;
}
.search-status.show { display:block; }
.search-status strong { color:var(--text); font-weight:500; }
.value-strip {
  border-top:1px solid var(--line); border-bottom:1px solid var(--line);
  background:var(--plate);
}
.value-strip .shell { display:grid; grid-template-columns:repeat(4,1fr); gap:0; }
.value-item {
  padding:clamp(24px,3vw,36px) clamp(16px,2vw,28px);
  border-right:1px solid var(--line); position:relative;
}
.value-item:last-child { border-right:0; }
.value-item .ico {
  width:36px; height:36px; margin-bottom:14px; position:relative;
  border:1px solid var(--line-2); background:var(--raise);
}
.value-item:nth-child(1) .ico::before { content:""; position:absolute; width:14px; height:2px; top:11px; left:11px; background:var(--accent); }
.value-item:nth-child(1) .ico::after { content:""; position:absolute; width:2px; height:14px; top:11px; left:17px; background:var(--accent); }
.value-item:nth-child(2) .ico::before { content:""; position:absolute; width:16px; height:16px; top:10px; left:10px; border:2px solid var(--accent); background:none; }
.value-item:nth-child(2) .ico::after { content:""; position:absolute; width:6px; height:6px; top:15px; left:15px; border-radius:50%; background:var(--accent); }
.value-item:nth-child(3) .ico::before { content:""; position:absolute; width:18px; height:2px; top:12px; left:9px; background:var(--accent); box-shadow:0 6px 0 var(--accent), 0 12px 0 var(--accent); }
.value-item:nth-child(4) .ico::before { content:""; position:absolute; width:14px; height:10px; top:13px; left:11px; border:1px solid var(--accent); background:none; }
.value-item:nth-child(4) .ico::after { content:""; position:absolute; width:8px; height:2px; top:19px; left:14px; background:var(--accent); }
.value-item h3 {
  font-family:var(--display); font-variation-settings:"wdth" 125,"wght" 700;
  font-size:clamp(13px,1.2vw,16px); text-transform:uppercase; margin-bottom:8px;
}
.value-item p { font-size:13px; color:var(--mid); line-height:1.5; }
.steps { display:grid; grid-template-columns:repeat(4,1fr); gap:clamp(16px,2vw,24px); }
.step {
  background:var(--plate); border:1px solid var(--line); padding:clamp(20px,2.5vw,28px);
  transition:border-color .25s, transform .25s;
}
.step:hover { border-color:var(--line-2); transform:translateY(-2px); }
.step-n { font-family:var(--mono); font-size:11px; letter-spacing:.2em; color:var(--accent); margin-bottom:16px; }
.step h3 {
  font-family:var(--display); font-variation-settings:"wdth" 125,"wght" 700;
  font-size:clamp(14px,1.3vw,18px); text-transform:uppercase; margin-bottom:10px;
}
.step p { font-size:13px; color:var(--mid); line-height:1.55; }
.mockup { border:1px solid var(--line-2); background:var(--plate); overflow:hidden; }
.mockup-bar {
  display:flex; align-items:center; gap:12px; padding:14px 18px;
  border-bottom:1px solid var(--line); background:var(--raise);
  font-family:var(--mono); font-size:10px; letter-spacing:.16em; text-transform:uppercase; color:var(--dim);
}
.mockup-bar .dot { width:8px; height:8px; border-radius:50%; background:var(--line-2); }
.mockup-bar .dot.on { background:var(--accent); }
.mockup-body { display:grid; grid-template-columns:220px 1fr; min-height:320px; }
.mockup-filter {
  border-right:1px solid var(--line); padding:18px 16px;
  font-family:var(--mono); font-size:10px; letter-spacing:.12em; text-transform:uppercase; color:var(--dim);
}
.mockup-filter .fg { margin-bottom:18px; }
.mockup-filter .fg label { display:block; margin-bottom:8px; color:var(--dim); }
.mockup-filter .chip {
  display:inline-block; padding:6px 10px; margin:0 4px 6px 0;
  border:1px solid var(--line); font-size:10px; color:var(--mid);
}
.mockup-filter .chip.on { border-color:var(--accent); color:var(--accent); background:var(--accent-soft); }
.mockup-result { padding:20px; }
.result-card {
  border:1px solid var(--line-2); background:var(--raise); padding:18px;
  display:grid; grid-template-columns:auto 1fr auto; gap:16px; align-items:start;
}
.result-thumb {
  width:72px; height:72px; background:var(--plate); border:1px solid var(--line);
  display:flex; align-items:center; justify-content:center;
}
.result-thumb .geo {
  width:36px; height:36px; border:2px solid var(--line-2); border-radius:50%; position:relative;
}
.result-thumb .geo::after {
  content:""; position:absolute; inset:8px; border:1px solid var(--accent); border-radius:50%; opacity:.6;
}
.result-meta h4 {
  font-family:var(--display); font-variation-settings:"wdth" 125,"wght" 700;
  font-size:15px; text-transform:uppercase; margin-bottom:6px;
}
.result-meta .code { font-family:var(--mono); font-size:12px; color:var(--accent); margin-bottom:8px; }
.result-meta .tags { display:flex; flex-wrap:wrap; gap:6px; margin-bottom:8px; }
.result-meta .tag {
  font-family:var(--mono); font-size:9px; letter-spacing:.12em; text-transform:uppercase;
  padding:4px 8px; border:1px solid var(--line); color:var(--dim);
}
.result-meta .tag.match { border-color:var(--accent-line); color:var(--accent); background:var(--accent-soft); }
.result-meta .detail { font-size:13px; color:var(--mid); }
.result-side { text-align:right; }
.stock {
  font-family:var(--mono); font-size:10px; letter-spacing:.14em; text-transform:uppercase;
  padding:6px 10px; border:1px solid var(--line-2); color:var(--mid); margin-bottom:12px; display:inline-block;
}
.stock.ok { border-color:rgba(76,175,80,.4); color:#7BC67E; }
.result-side .btn { font-size:10px; padding:10px 14px; }
.supplier-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:clamp(16px,2vw,24px); }
.supplier-card {
  background:var(--plate); border:1px solid var(--line); padding:clamp(20px,2.5vw,28px);
  transition:border-color .25s, transform .25s;
}
.supplier-card:hover { border-color:var(--line-2); transform:translateY(-2px); }
.supplier-head { display:flex; align-items:center; gap:12px; margin-bottom:16px; }
.supplier-avatar {
  width:44px; height:44px; background:var(--raise); border:1px solid var(--line-2);
  display:flex; align-items:center; justify-content:center;
  font-family:var(--mono); font-size:14px; color:var(--dim);
}
.supplier-head h4 {
  font-family:var(--display); font-variation-settings:"wdth" 125,"wght" 700;
  font-size:14px; text-transform:uppercase;
}
.supplier-head .verified {
  font-family:var(--mono); font-size:9px; letter-spacing:.12em; text-transform:uppercase;
  color:var(--accent); display:flex; align-items:center; gap:4px; margin-top:2px;
}
.supplier-head .verified::before { content:""; width:6px; height:6px; background:var(--accent); border-radius:50%; }
.supplier-card .row { font-size:13px; color:var(--mid); margin-bottom:8px; display:flex; gap:8px; }
.supplier-card .row strong {
  color:var(--dim); font-family:var(--mono); font-size:10px; letter-spacing:.1em;
  text-transform:uppercase; min-width:72px;
}
.supplier-card .fast {
  display:inline-block; margin-top:12px;
  font-family:var(--mono); font-size:9px; letter-spacing:.14em; text-transform:uppercase;
  padding:5px 10px; border:1px solid var(--accent-line); color:var(--accent); background:var(--accent-soft);
}
.rfq-grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; max-width:720px; }
.rfq-grid .field.full { grid-column:1/-1; }
.rfq-grid textarea {
  width:100%; padding:12px 14px; background:var(--raise); border:1px solid var(--line);
  min-height:100px; resize:vertical;
}
.rfq-grid textarea:focus { border-color:var(--line-2); outline:none; }
.file-zone {
  border:1px dashed var(--line-2); background:var(--raise); padding:28px 20px; text-align:center;
  cursor:pointer; transition:border-color .2s, background .2s;
}
.file-zone:hover { border-color:var(--accent); background:var(--accent-soft); }
.file-zone p { font-size:13px; color:var(--mid); }
.file-zone span {
  font-family:var(--mono); font-size:10px; letter-spacing:.12em; text-transform:uppercase;
  color:var(--dim); display:block; margin-top:8px;
}
.rfq-success {
  display:none; max-width:720px; padding:24px; border:1px solid var(--accent-line);
  background:var(--accent-soft); margin-top:20px;
}
.rfq-success.show { display:block; }
.rfq-success h4 {
  font-family:var(--display); font-variation-settings:"wdth" 125,"wght" 700;
  font-size:16px; text-transform:uppercase; color:var(--text); margin-bottom:8px;
}
.rfq-success p { font-size:14px; color:var(--mid); }
.wa-toast {
  position:fixed; left:50%; bottom:24px; transform:translateX(-50%);
  z-index:300; max-width:min(420px, calc(100% - 32px));
  padding:12px 16px; border:1px solid var(--line-2); border-radius:8px;
  background:#1A1A1A; color:var(--text); font-size:13px; line-height:1.4;
  box-shadow:0 12px 32px rgba(0,0,0,.45); opacity:0; pointer-events:none;
  transition:opacity .2s ease;
}
.wa-toast.show { opacity:1; pointer-events:auto; }
.wa-toast.err { border-color:rgba(255,107,0,.55); }
.trust-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:clamp(16px,2vw,24px); }
.trust-card { background:var(--plate); border:1px solid var(--line); padding:clamp(20px,2.5vw,28px); }
.trust-ico {
  width:40px; height:40px; margin-bottom:16px; border:1px solid var(--line-2);
  background:var(--raise); position:relative;
}
.trust-card:nth-child(1) .trust-ico::before {
  content:""; position:absolute; width:16px; height:16px; top:12px; left:12px;
  border:2px solid var(--accent); border-radius:50%;
}
.trust-card:nth-child(1) .trust-ico::after {
  content:""; position:absolute; width:6px; height:10px; top:14px; left:18px;
  border:solid var(--accent); border-width:0 2px 2px 0; transform:rotate(45deg);
}
.trust-card:nth-child(2) .trust-ico::before {
  content:""; position:absolute; width:18px; height:12px; top:14px; left:11px;
  border:1px solid var(--accent); background:none;
}
.trust-card:nth-child(2) .trust-ico::after {
  content:""; position:absolute; width:8px; height:2px; top:18px; left:16px; background:var(--accent);
}
.trust-card:nth-child(3) .trust-ico::before {
  content:""; position:absolute; width:14px; height:14px; top:13px; left:13px;
  border:1px solid var(--accent); transform:rotate(45deg);
}
.trust-card:nth-child(4) .trust-ico::before {
  content:""; position:absolute; width:18px; height:2px; top:14px; left:11px; background:var(--accent);
  box-shadow:0 6px 0 var(--accent), 0 12px 0 var(--line-2);
}
.trust-card h3 {
  font-family:var(--display); font-variation-settings:"wdth" 125,"wght" 700;
  font-size:clamp(13px,1.2vw,16px); text-transform:uppercase; margin-bottom:8px;
}
.trust-card p { font-size:13px; color:var(--mid); line-height:1.55; }
.final-cta {
  text-align:center; padding-block:clamp(64px,8vw,100px);
  background:linear-gradient(180deg, var(--void) 0%, var(--plate) 50%, var(--void) 100%);
  border-top:1px solid var(--line);
}
.final-cta h2 { font-size:clamp(24px,3.5vw,40px); max-width:22ch; margin:0 auto 24px; }
.final-cta .actions { justify-content:center; }
.ftr { border-top:1px solid var(--line); padding-block:48px 34px; }
.ftr-top { display:flex; gap:36px; justify-content:space-between; flex-wrap:wrap; margin-bottom:40px; }
.ftr-col { min-width:140px; }
.ftr-col h5 {
  font-family:var(--mono); font-size:10px; letter-spacing:.18em; text-transform:uppercase;
  color:var(--dim); margin:0 0 14px;
}
.ftr-col a { display:block; font-size:13px; color:var(--mid); padding:7px 0; min-height:34px; }
.ftr-col a:hover { color:var(--text); }
.ftr .brand .lock-h { height:27px; }
.ftr-bot {
  display:flex; justify-content:space-between; gap:20px; flex-wrap:wrap;
  border-top:1px solid var(--line); padding-top:20px;
  font-family:var(--mono); font-size:10px; letter-spacing:.1em; text-transform:uppercase; color:var(--dim);
}
@media (max-width:1120px) {
  .hero-vis { max-height:min(58vh,480px); aspect-ratio:1.18 / 1; }
  .steps, .trust-grid { grid-template-columns:repeat(2,1fr); }
  .supplier-grid { grid-template-columns:repeat(2,1fr); }
  .value-strip .shell { grid-template-columns:repeat(2,1fr); }
  .value-item:nth-child(2) { border-right:0; }
  .value-item:nth-child(1), .value-item:nth-child(2) { border-bottom:1px solid var(--line); }
}
@media (max-width:820px) {
  .nav, .btn-cta.desk, .btn-b2b.desk { display:none; }
  .burger { display:flex; }
  .hdr .brand .lock-h, .hdr .brand .pz-wordmark { display:none; }
  .hdr .brand .lock-i, .hdr .brand .pz-mark { display:block; height:32px; }
  .hdr.stuck .brand .lock-i, .hdr.stuck .brand .pz-mark { height:28px; }
  .hero-pin { height:auto; }
  .hero-sticky { position:relative; min-height:0; padding-block:clamp(28px,6vw,48px) clamp(40px,6vw,64px); }
  .hero-grid { grid-template-columns:1fr; }
  .hero-vis { aspect-ratio:3/2; max-height:300px; order:-1; padding:0; }
  .hero-vis .seq-video,
  .hero-vis .seq-poster,
  .hero-vis .seq-fallback-img { padding:5% 6%; }
  .hero-vis .stage-rail,
  .hero-vis .callouts { display:none; }
  h1.hero-h { font-size:clamp(30px,8.4vw,44px); }
  .mockup-body { grid-template-columns:1fr; }
  .mockup-filter { border-right:0; border-bottom:1px solid var(--line); display:flex; flex-wrap:wrap; gap:12px; }
  .mockup-filter .fg { margin-bottom:0; margin-right:16px; }
  .result-card { grid-template-columns:1fr; }
  .result-side { text-align:left; display:flex; align-items:center; gap:12px; flex-wrap:wrap; }
}
@media (max-width:560px) {
  .steps, .trust-grid, .supplier-grid { grid-template-columns:1fr; }
  .value-strip .shell { grid-template-columns:1fr; }
  .value-item { border-right:0; border-bottom:1px solid var(--line); }
  .value-item:last-child { border-bottom:0; }
  .field-grid, .rfq-grid { grid-template-columns:1fr; }
  .ftr-col { min-width:42%; }
}
@media (max-width:390px) {
  h1.hero-h { font-size:30px; }
}
@media (prefers-reduced-motion:reduce) {
  *, *::before, *::after {
    animation-duration:.001ms !important;
    animation-iteration-count:1 !important;
    transition-duration:.001ms !important;
  }
  .hero-pin { height:auto; }
  .hero-sticky { position:relative; min-height:0; }
}
`;

  function ensureFonts() {
    if (document.getElementById("pz-fonts-parca-app")) return;
    var link = document.createElement("link");
    link.id = "pz-fonts-parca-app";
    link.rel = "stylesheet";
    link.href = FONT_HREF;
    document.head.appendChild(link);
  }

  function year() {
    try { return String(new Date().getFullYear()); } catch (e) { return "2026"; }
  }

  function buildHtml() {
    return (
      '<div class="root">' +
      '<a class="skip" href="#pz-main">İçeriğe geç</a>' +
      '<header class="hdr" id="pz-hdr">' +
      '  <div class="shell">' +
      '    <a href="#pz-top" class="brand brand-lockup" aria-label="Parça Zinciri ana sayfa">' +
      '      <span class="brand-row">' + WORDMARK + MARK + '</span>' +
      '      <span class="brand-tag">B2B Yedek Parça Platformu</span>' +
      '    </a>' +
      '    <nav class="nav" aria-label="Ana navigasyon">' +
      '      <a href="#pz-nasil">Nasıl Çalışır</a>' +
      '      <a href="#pz-arama">Parça Ara</a>' +
      '      <a href="#pz-tedarik">Tedarikçiler</a>' +
      '      <a href="#pz-guven">Hakkımızda</a>' +
      '    </nav>' +
      '    <div class="hdr-actions">' +
      '      <button type="button" class="btn-b2b desk" data-supplier-open>Tedarikçi Girişi</button>' +
      '      <button type="button" class="btn-cta desk" data-wa>Stok ve Fiyat Sor</button>' +
      '    </div>' +
      '    <button class="burger" type="button" id="pz-burger" aria-label="Menüyü aç" aria-controls="pz-mnav" aria-expanded="false"><i aria-hidden="true"></i></button>' +
      '  </div>' +
      '</header>' +
      '<div class="mnav" id="pz-mnav" hidden>' +
      '  <a href="#pz-nasil"><span class="n">01</span>Nasıl Çalışır</a>' +
      '  <a href="#pz-arama"><span class="n">02</span>Parça Ara</a>' +
      '  <a href="#pz-tedarik"><span class="n">03</span>Tedarikçiler</a>' +
      '  <a href="#pz-guven"><span class="n">04</span>Hakkımızda</a>' +
      '  <button type="button" class="mnav-b2b" data-supplier-open>Tedarikçi Girişi</button>' +
      '  <button type="button" class="mnav-wa" data-wa>Stok ve Fiyat Sor</button>' +
      '</div>' +
      '<main class="main" id="pz-main">' +
      '  <div id="pz-top"></div>' +
      '  <div class="hero-pin" id="pz-hero-pin">' +
      '  <div class="hero-sticky">' +
      '  <section class="hero" id="pz-hero" aria-labelledby="pz-hero-title">' +
      '    <div class="shell hero-grid">' +
      '      <div class="hero-copy">' +
      '        <p class="eyebrow">OTOMOTİV YEDEK PARÇA TEDARİK PLATFORMU</p>' +
      '        <h1 class="display hero-h" id="pz-hero-title">DOĞRU PARÇAYA<span class="l2">GİDEN EN KISA YOL</span></h1>' +
      '        <p class="hero-sub">Aradığınız parçayı OEM veya parça koduyla bulun; stok ve fiyat bilgisini WhatsApp üzerinden alın.</p>' +
      '        <div class="actions">' +
      '          <button type="button" class="btn primary" data-wa data-wa-from-search>Parça Ara</button>' +
      '          <button type="button" class="btn" data-wa>Stok ve Fiyat Sor</button>' +
      '        </div>' +
      '        <form class="search-panel" id="pz-hero-search" aria-label="Parça arama">' +
      '          <div class="search-tabs" role="tablist">' +
      '            <button type="button" class="active" role="tab" aria-selected="true" data-tab="oem">OEM / Parça Kodu</button>' +
      '            <button type="button" role="tab" aria-selected="false" data-tab="vehicle">Araç Bilgileri</button>' +
      '          </div>' +
      '          <div class="search-body">' +
      '            <div class="search-pane active" data-pane="oem">' +
      '              <div class="field-grid">' +
      '                <div class="field full"><label for="pz-part-code">Parça Kodu / OEM</label><input id="pz-part-code" name="partCode" type="text" placeholder="Örn. 123-456-78" autocomplete="off"></div>' +
      '                <div class="field"><label for="pz-brand">Marka</label><input id="pz-brand" name="brand" type="text" placeholder="Marka"></div>' +
      '                <div class="field"><label for="pz-category">Kategori</label><select id="pz-category" name="category"><option value="">Seçiniz</option><option>Motor</option><option>Mekanik</option><option>Elektrik</option><option>Sızdırmazlık</option></select></div>' +
      '              </div>' +
      '            </div>' +
      '            <div class="search-pane" data-pane="vehicle">' +
      '              <div class="field-grid">' +
      '                <div class="field"><label for="pz-model">Model</label><input id="pz-model" name="model" type="text" placeholder="Model"></div>' +
      '                <div class="field"><label for="pz-year">Yıl</label><input id="pz-year" name="year" type="text" placeholder="Örn. 2019" inputmode="numeric"></div>' +
      '                <div class="field full"><label for="pz-vbrand">Marka</label><input id="pz-vbrand" name="vbrand" type="text" placeholder="Araç markası"></div>' +
      '              </div>' +
      '            </div>' +
      '            <button type="submit" class="search-submit">Stok ve Fiyat Sor</button>' +
      '            <div class="search-status" id="pz-search-status" role="status" aria-live="polite"></div>' +
      '          </div>' +
      '        </form>' +
      '      </div>' +
      '      <div class="hero-vis" id="pz-hero-vis" aria-hidden="true" data-mode="fallback">' +
      '        <video class="seq-video" id="pz-seq-video" muted playsinline autoplay preload="auto" poster="' + CINE_POSTER + '">' +
      '          <source src="' + CINE_WEBM + '" type="video/webm">' +
      '          <source src="' + CINE_MP4 + '" type="video/mp4">' +
      '        </video>' +
      '        <canvas class="seq-canvas" id="pz-seq-canvas"></canvas>' +
      '        <img class="seq-poster" id="pz-seq-poster" alt="" decoding="async">' +
      '        <img class="seq-fallback-img" src="' + CINE_POSTER + '" alt="" loading="eager" decoding="async">' +
      '        <div class="glow" id="pz-hero-glow" aria-hidden="true"></div>' +
      '        <div class="vignette" aria-hidden="true"></div>' +
      '        <div class="overlay" id="pz-hero-grid"></div>' +
      '        <svg class="tech-lines" id="pz-tech-lines" viewBox="0 0 400 400" preserveAspectRatio="none" aria-hidden="true">' +
      '          <line x1="0" y1="120" x2="400" y2="120" stroke-dasharray="4 8"/>' +
      '          <line x1="280" y1="0" x2="280" y2="400" stroke-dasharray="4 8"/>' +
      '          <line x1="40" y1="320" x2="360" y2="80" stroke-dasharray="2 6" opacity=".3"/>' +
      '        </svg>' +
      '        <div class="callouts" id="pz-callouts">' +
      '          <div class="callout c0" data-call="0"><span class="dot"></span><span class="line"></span><span class="txt">OEM / Parça Kodu Doğrulama</span></div>' +
      '          <div class="callout c1" data-call="1"><span class="txt">Tedarikçi Eşleştirme</span><span class="line"></span><span class="dot"></span></div>' +
      '          <div class="callout c2" data-call="2"><span class="dot"></span><span class="line"></span><span class="txt">Stok ve Fiyat Akışı</span></div>' +
      '        </div>' +
      '        <div class="stage-rail" id="pz-stage-rail" aria-hidden="true">' +
      '          <span data-stage="0">Tanımla</span><span data-stage="1">Eşleştir</span><span data-stage="2">Karşılaştır</span><span data-stage="3">Sonuçlandır</span>' +
      '        </div>' +
      '        <span class="corner tl"></span><span class="corner br"></span>' +
      '        <span class="shadow-floor" id="pz-hero-shadow" aria-hidden="true"></span>' +
      '        <span class="badge">Parça Zinciri</span>' +
      '      </div>' +
      '    </div>' +
      '  </section>' +
      '  </div>' +
      '  </div>' +
      '  <div class="value-strip" aria-label="Platform değerleri">' +
      '    <div class="shell">' +
      '      <div class="value-item"><div class="ico" aria-hidden="true"></div><h3>Doğru Parçayı Bul</h3><p>OEM ve referans kodlarıyla katalogda hızlı eşleşme.</p></div>' +
      '      <div class="value-item"><div class="ico" aria-hidden="true"></div><h3>Güvenilir Tedarikçiye Ulaş</h3><p>Doğrulanmış tedarikçi ağı üzerinden iletişim.</p></div>' +
      '      <div class="value-item"><div class="ico" aria-hidden="true"></div><h3>Teklifleri Karşılaştır</h3><p>Birden fazla teklifi yan yana değerlendirin.</p></div>' +
      '      <div class="value-item"><div class="ico" aria-hidden="true"></div><h3>Süreci Tek Yerden Yönet</h3><p>Arama, teklif ve takip tek platformda.</p></div>' +
      '    </div>' +
      '  </div>' +
      '  <section class="sec" id="pz-nasil" aria-labelledby="pz-nasil-title">' +
      '    <div class="shell">' +
      '      <div class="sec-head"><h2 class="display" id="pz-nasil-title">Nasıl çalışır</h2><div class="sec-rule" aria-hidden="true"></div></div>' +
      '      <div class="steps">' +
      '        <article class="step"><div class="step-n">01</div><h3>Parçayı Tanımla</h3><p>OEM kodu, araç bilgileri veya görsel ile aradığın parçayı belirt.</p></article>' +
      '        <article class="step"><div class="step-n">02</div><h3>Talebini Oluştur</h3><p>Adet, teslim süresi ve diğer ihtiyaçlarını ekle.</p></article>' +
      '        <article class="step"><div class="step-n">03</div><h3>Teklifleri Al</h3><p>Uygun tedarikçilerin tekliflerini tek yerde görüntüle.</p></article>' +
      '        <article class="step"><div class="step-n">04</div><h3>Karşılaştır ve Karar Ver</h3><p>Fiyat, teslimat ve tedarikçi bilgilerini karşılaştır.</p></article>' +
      '      </div>' +
      '    </div>' +
      '  </section>' +
      '  <section class="sec" id="pz-arama" aria-labelledby="pz-arama-title">' +
      '    <div class="shell">' +
      '      <div class="sec-head"><h2 class="display" id="pz-arama-title">Parça arama</h2><div class="sec-rule" aria-hidden="true"></div></div>' +
      '      <p class="sec-sub">Katalogda parça kodu veya OEM ile arama yapın; stok ve fiyat bilgisini WhatsApp üzerinden alın.</p>' +
      '      <div class="mockup" role="img" aria-label="Parça arama paneli önizlemesi">' +
      '        <div class="mockup-bar"><span class="dot on"></span><span class="dot"></span><span class="dot"></span><span>Parça arama paneli</span></div>' +
      '        <div class="mockup-body">' +
      '          <div class="mockup-filter">' +
      '            <div class="fg"><label>Filtre</label><span class="chip on">Tümü</span><span class="chip">Stokta</span></div>' +
      '            <div class="fg"><label>Marka</label><span class="chip">Marka A</span><span class="chip">Marka B</span></div>' +
      '            <div class="fg"><label>Model</label><span class="chip">Seri X</span></div>' +
      '          </div>' +
      '          <div class="mockup-result">' +
      '            <div class="result-card">' +
      '              <div class="result-thumb" aria-hidden="true"><div class="geo"></div></div>' +
      '              <div class="result-meta">' +
      '                <h4>Rulman Taşıyıcı Gövdesi</h4>' +
      '                <div class="code">REF-4821-A</div>' +
      '                <div class="tags"><span class="tag match">Eşleşme</span><span class="tag">Marka A · Seri X</span><span class="tag">Mekanik</span></div>' +
      '                <p class="detail">OEM uyumlu rulman taşıyıcı; montaj ölçüleri teknik dökümanda doğrulanır.</p>' +
      '              </div>' +
      '              <div class="result-side">' +
      '                <span class="stock ok">Stokta</span>' +
      '                <button type="button" class="btn primary" data-wa data-wa-part="REF-4821-A">Stok ve Fiyat Sor</button>' +
      '              </div>' +
      '            </div>' +
      '          </div>' +
      '        </div>' +
      '      </div>' +
      '    </div>' +
      '  </section>' +
      '  <section class="sec" id="pz-tedarik" aria-labelledby="pz-tedarik-title">' +
      '    <div class="shell">' +
      '      <div class="sec-head"><h2 class="display" id="pz-tedarik-title">Tedarikçi ağı</h2><div class="sec-rule" aria-hidden="true"></div></div>' +
      '      <p class="sec-sub">Doğrulanmış tedarikçilerden oluşan ağ; uzmanlık alanı ve bölge bilgisiyle listelenir.</p>' +
      '      <div class="supplier-grid">' +
      '        <article class="supplier-card"><div class="supplier-head"><div class="supplier-avatar" aria-hidden="true">T1</div><div><h4>Tedarikçi #1042</h4><span class="verified">Doğrulanmış</span></div></div><p class="row"><strong>Uzmanlık</strong><span>Mekanik bileşenler</span></p><p class="row"><strong>Bölge</strong><span>Marmara</span></p><span class="fast">Hızlı Yanıt</span></article>' +
      '        <article class="supplier-card"><div class="supplier-head"><div class="supplier-avatar" aria-hidden="true">T2</div><div><h4>Tedarikçi #2087</h4><span class="verified">Doğrulanmış</span></div></div><p class="row"><strong>Uzmanlık</strong><span>Sızdırmazlık elemanları</span></p><p class="row"><strong>Bölge</strong><span>İç Anadolu</span></p><span class="fast">Hızlı Yanıt</span></article>' +
      '        <article class="supplier-card"><div class="supplier-head"><div class="supplier-avatar" aria-hidden="true">T3</div><div><h4>Tedarikçi #3156</h4><span class="verified">Doğrulanmış</span></div></div><p class="row"><strong>Uzmanlık</strong><span>Elektrik / tesisat</span></p><p class="row"><strong>Bölge</strong><span>Ege</span></p></article>' +
      '      </div>' +
      '      <div class="actions" style="margin-top:28px"><button type="button" class="btn" data-supplier-open>Tedarikçi Girişi</button></div>' +
      '    </div>' +
      '  </section>' +
      '  <section class="sec" id="pz-rfq" aria-labelledby="pz-rfq-title">' +
      '    <div class="shell">' +
      '      <div class="sec-head"><h2 class="display" id="pz-rfq-title">Stok ve fiyat sor</h2><div class="sec-rule" aria-hidden="true"></div></div>' +
      '      <p class="sec-sub">Parça bilgilerinizi girin; WhatsApp üzerinden stok ve fiyat bilgisi alın.</p>' +
      '      <form id="pz-rfq-form" novalidate>' +
      '        <div class="rfq-grid">' +
      '          <div class="field"><label for="rfq-brand">Marka</label><input id="rfq-brand" name="brand" type="text" placeholder="Araç / parça markası"></div>' +
      '          <div class="field"><label for="rfq-model">Model</label><input id="rfq-model" name="model" type="text" placeholder="Model"></div>' +
      '          <div class="field"><label for="rfq-year">Yıl</label><input id="rfq-year" name="year" type="text" placeholder="Örn. 2020" inputmode="numeric"></div>' +
      '          <div class="field"><label for="rfq-qty">Adet</label><input id="rfq-qty" name="qty" type="number" min="1" placeholder="1"></div>' +
      '          <div class="field"><label for="rfq-category">Parça Kategorisi</label><select id="rfq-category" name="category"><option value="">Seçiniz</option><option>Motor</option><option>Mekanik</option><option>Elektrik</option><option>Sızdırmazlık</option></select></div>' +
      '          <div class="field full"><label for="rfq-part">OEM / Parça Kodu</label><input id="rfq-part" name="part" type="text" placeholder="Örn. 03L115562"></div>' +
      '          <div class="field full"><label for="rfq-part-name">Parça Adı</label><input id="rfq-part-name" name="partName" type="text" placeholder="Parça adı"></div>' +
      '          <div class="field full"><label for="rfq-urgency">Aciliyet</label><select id="rfq-urgency" name="urgency"><option value="">Seçiniz</option><option>Normal</option><option>Acil</option><option>Planlı</option></select></div>' +
      '          <div class="field full"><label for="rfq-desc">Not</label><textarea id="rfq-desc" name="description" placeholder="Ek bilgi, montaj detayı veya alternatif kodlar..."></textarea></div>' +
      '          <div class="field full"><label>Dosya ekle</label><div class="file-zone" tabindex="0" role="button" aria-label="Dosya yükle"><p>Fotoğraf veya teknik döküman sürükleyin</p><span>PNG, JPG, PDF · Maks. 10 MB</span></div></div>' +
      '        </div>' +
      '        <div class="actions" style="margin-top:20px"><button type="submit" class="btn primary">WhatsApp’tan Sor</button></div>' +
      '      </form>' +
      '      <div class="rfq-success" id="pz-rfq-success" role="alert">' +
      '        <h4>WhatsApp hazır</h4>' +
      '        <p>Mesajınız hazırlandı. Açılan pencereden iletişime devam edebilirsiniz.</p>' +
      '      </div>' +
      '    </div>' +
      '  </section>' +
      '  <section class="sec" id="pz-b2b" aria-labelledby="pz-b2b-title">' +
      '    <div class="shell">' +
      '      <div class="sec-head"><h2 class="display" id="pz-b2b-title">İki tarafı tek zincirde buluşturan B2B altyapı</h2><div class="sec-rule" aria-hidden="true"></div></div>' +
      '      <div class="b2b-split">' +
      '        <div class="b2b-col">' +
      '          <h3>Parça arayan işletmeler için</h3>' +
      '          <ul>' +
      '            <li>OEM veya parça koduyla talep oluşturun</li>' +
      '            <li>Stok ve fiyat bilgisini WhatsApp üzerinden alın</li>' +
      '            <li>Uygun seçenekleri karşılaştırın</li>' +
      '            <li>Satın alma sürecinizi hızlandırın</li>' +
      '          </ul>' +
      '          <button type="button" class="btn primary" data-wa>Stok ve Fiyat Sor</button>' +
      '        </div>' +
      '        <div class="b2b-col">' +
      '          <h3>Tedarikçiler için</h3>' +
      '          <ul>' +
      '            <li>Güncel parça taleplerine ulaşın</li>' +
      '            <li>Tekliflerinizi hızlıca hazırlayın</li>' +
      '            <li>Kurumsal müşterilerle bağlantı kurun</li>' +
      '            <li>Talepleri tek panelden yönetin</li>' +
      '          </ul>' +
      '          <button type="button" class="btn" data-supplier-open>Tedarikçi Girişi</button>' +
      '        </div>' +
      '      </div>' +
      '    </div>' +
      '  </section>' +
      '  <section class="sec" id="pz-guven" aria-labelledby="pz-guven-title">' +
      '    <div class="shell">' +
      '      <div class="sec-head"><h2 class="display" id="pz-guven-title">Güven ve şeffaflık</h2><div class="sec-rule" aria-hidden="true"></div></div>' +
      '      <div class="trust-grid">' +
      '        <article class="trust-card"><div class="trust-ico" aria-hidden="true"></div><h3>Doğrulanabilir tedarikçi</h3><p>Her tedarikçi doğrulama sürecinden geçer; profil bilgileri şeffaf sunulur.</p></article>' +
      '        <article class="trust-card"><div class="trust-ico" aria-hidden="true"></div><h3>Merkezi teklif</h3><p>Tüm teklifler tek panelde toplanır; karşılaştırma kolaylaşır.</p></article>' +
      '        <article class="trust-card"><div class="trust-ico" aria-hidden="true"></div><h3>Parça uyumluluğu</h3><p>OEM ve alternatif kod eşleştirmesi ile doğru parça seçimi desteklenir.</p></article>' +
      '        <article class="trust-card"><div class="trust-ico" aria-hidden="true"></div><h3>Şeffaf karşılaştırma</h3><p>Fiyat, stok ve teslimat bilgileri yan yana görüntülenir.</p></article>' +
      '      </div>' +
      '    </div>' +
      '  </section>' +
      '  <section class="final-cta" aria-labelledby="pz-final-cta">' +
      '    <div class="shell">' +
      '      <h2 class="display" id="pz-final-cta">Aradığınız parçaya ulaşmak için süreci bugün başlatın.</h2>' +
      '      <div class="actions"><button type="button" class="btn primary" data-wa>Stok ve Fiyat Sor</button></div>' +
      '    </div>' +
      '  </section>' +
      '</main>' +
      '<footer class="ftr">' +
      '  <div class="shell">' +
      '    <div class="ftr-top">' +
      '      <div class="ftr-col"><a href="#pz-top" class="brand" aria-label="Parça Zinciri">' + WORDMARK + '</a></div>' +
      '      <div class="ftr-col"><h5>Platform</h5><a href="#pz-hero">Ana Sayfa</a><a href="#pz-nasil">Nasıl Çalışır</a><a href="#pz-arama">Parça Ara</a></div>' +
      '      <div class="ftr-col"><h5>Tedarikçiler</h5><a href="#pz-tedarik">Tedarikçi Ağı</a><a href="' + DEFAULT_SUPPLIER_PORTAL_URL + '" data-supplier-open>Tedarikçi Girişi</a></div>' +
      '      <div class="ftr-col"><h5>Hakkımızda</h5><a href="#pz-guven">Güven</a><a href="#pz-guven">İletişim</a></div>' +
      '      <div class="ftr-col"><h5>Yasal</h5><a href="#">Gizlilik</a><a href="#">Kullanım Koşulları</a></div>' +
      '    </div>' +
      '    <div class="ftr-bot"><span>© ' + year() + ' Parça Zinciri</span></div>' +
      '  </div>' +
      '</footer>' +
      '<div class="b2b-modal" id="pz-b2b-modal" hidden aria-hidden="true">' +
      '  <div class="b2b-scrim" data-b2b-close></div>' +
      '  <div class="b2b-panel" id="pz-b2b-panel" role="dialog" aria-modal="true" aria-labelledby="pz-b2b-modal-title" tabindex="-1">' +
      '    <div class="b2b-head">' +
      '      <div class="txt">' +
      '        <span class="kick">Tedarikçi erişimi</span>' +
      '        <h3 id="pz-b2b-modal-title">Parça Zinciri Tedarikçi Portalı</h3>' +
      '        <p>Parça taleplerini görüntüleyin, tekliflerinizi hazırlayın ve süreçlerinizi tek panelden yönetin.</p>' +
      '      </div>' +
      '      <button type="button" class="b2b-x" data-b2b-close aria-label="Kapat">×</button>' +
      '    </div>' +
      '    <div id="pz-b2b-auth">' +
      '      <div class="b2b-body">' +
      '        <form class="b2b-form" id="pz-b2b-supplier" novalidate>' +
      '          <div class="field"><label for="b2b-sup-email">Kurumsal e-posta</label><input id="b2b-sup-email" name="email" type="email" autocomplete="username" required><div class="ferr">Geçerli bir kurumsal e-posta girin.</div></div>' +
      '          <div class="field"><label for="b2b-sup-pass">Şifre</label><input id="b2b-sup-pass" name="password" type="password" autocomplete="current-password" required minlength="6"><div class="ferr">Şifre en az 6 karakter olmalı.</div></div>' +
      '          <div class="b2b-row"><label><input type="checkbox" name="remember"> Beni hatırla</label><a href="#pz-b2b">Şifremi unuttum</a></div>' +
      '          <button type="submit" class="btn primary">Tedarikçi Paneline Gir</button>' +
      '          <p class="b2b-extra"><button type="button" data-supplier-apply>Tedarikçi başvurusu yap</button></p>' +
      '        </form>' +
      '        <div class="b2b-loading" id="pz-b2b-loading" aria-live="polite"><div class="spin" aria-hidden="true"></div>B2B paneli hazırlanıyor...</div>' +
      '      </div>' +
      '    </div>' +
      '    <div class="b2b-body portal" id="pz-portal-supplier">' +
      '      <div class="portal-top"><div><h4>Hoş geldiniz</h4><p>Tedarikçi paneli — talepler ve teklif hazırlığı</p></div><button type="button" class="btn primary" data-b2b-close>Yeni Teklif Hazırla</button></div>' +
      '      <div class="portal-grid">' +
      '        <article class="portal-card"><div class="lab">Kuyruk</div><h5>Yeni Talepler</h5><p>Uzmanlık alanınıza uygun kayıtlar</p><span class="status on">Hızlı Yanıt</span></article>' +
      '        <article class="portal-card"><div class="lab">Kuyruk</div><h5>Teklif Verilen Talepler</h5><p>Gönderilmiş teklifler</p><span class="status">İletildi</span></article>' +
      '        <article class="portal-card"><div class="lab">Kuyruk</div><h5>Yanıt Bekleyenler</h5><p>Alıcı değerlendirmesi bekleniyor</p><span class="status">Beklemede</span></article>' +
      '        <article class="portal-card"><div class="lab">Katalog</div><h5>Ürün Kategorileri</h5><p>Mekanik · Elektrik · Sızdırmazlık</p><span class="status on">Güncel</span></article>' +
      '      </div>' +
      '      <div class="portal-list" aria-label="Son aktiviteler">' +
      '        <div class="item"><strong>Yeni talep eşleşmesi</strong><span>Bugün</span></div>' +
      '        <div class="item"><strong>Teklif taslağı kaydedildi</strong><span>Dün</span></div>' +
      '        <div class="item"><strong>Kategori güncellendi</strong><span>3 gün önce</span></div>' +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '</div>' +
      '<div class="wa-toast" id="pz-wa-toast" role="status" aria-live="polite"></div>' +
      '</div>'
    );
  }

  function waDigits(raw) {
    return String(raw || "").replace(/\D+/g, "");
  }

  function resolveWhatsAppNumber() {
    var n = waDigits(WHATSAPP_NUMBER);
    return n.length >= 10 ? n : "";
  }

  function buildWhatsAppMessage(fields) {
    var lines = ["Merhaba, Parça Zinciri üzerinden stok ve fiyat bilgisi almak istiyorum."];
    var f = fields || {};
    var map = [
      ["OEM / Parça Kodu", f.partCode || f.part],
      ["Marka", f.brand || f.vbrand],
      ["Model", f.model],
      ["Model Yılı", f.year],
      ["Parça Kategorisi", f.category],
      ["Parça Adı", f.partName],
      ["Adet", f.qty],
      ["Aciliyet", f.urgency],
      ["Not", f.note || f.description]
    ];
    map.forEach(function (pair) {
      var v = String(pair[1] == null ? "" : pair[1]).trim();
      if (v) lines.push(pair[0] + ": " + v);
    });
    return lines.join("\n");
  }

  function showWhatsAppError(host) {
    var root = host && host.shadowRoot;
    if (!root) return;
    var toast = root.querySelector("#pz-wa-toast");
    if (!toast) return;
    toast.textContent = "WhatsApp şu anda açılamadı. Lütfen tekrar deneyin.";
    toast.classList.add("show", "err");
    clearTimeout(showWhatsAppError._t);
    showWhatsAppError._t = setTimeout(function () {
      toast.classList.remove("show", "err");
    }, 4200);
  }

  function openWhatsApp(host, fields) {
    var num = resolveWhatsAppNumber();
    if (!num) {
      showWhatsAppError(host);
      return false;
    }
    var message = buildWhatsAppMessage(fields);
    var url = "https://wa.me/" + num + "?text=" + encodeURIComponent(message);
    var win = null;
    try {
      win = window.open(url, "_blank", "noopener,noreferrer");
    } catch (e) {
      win = null;
    }
    if (!win) {
      showWhatsAppError(host);
      return false;
    }
    try {
      win.opener = null;
    } catch (e2) {}
    return true;
  }

  function collectSearchFields(root) {
    var g = function (sel) {
      var el = root.querySelector(sel);
      return el ? String(el.value || "").trim() : "";
    };
    return {
      partCode: g("#pz-part-code"),
      brand: g("#pz-brand") || g("#pz-vbrand"),
      category: g("#pz-category"),
      model: g("#pz-model"),
      year: g("#pz-year"),
      vbrand: g("#pz-vbrand")
    };
  }

  function collectRfqFields(form) {
    if (!form) return {};
    var fd = new FormData(form);
    return {
      brand: String(fd.get("brand") || "").trim(),
      model: String(fd.get("model") || "").trim(),
      year: String(fd.get("year") || "").trim(),
      qty: String(fd.get("qty") || "").trim(),
      partCode: String(fd.get("part") || "").trim(),
      partName: String(fd.get("partName") || "").trim(),
      category: String(fd.get("category") || "").trim(),
      urgency: String(fd.get("urgency") || "").trim(),
      note: String(fd.get("description") || "").trim()
    };
  }

  function bindHeroSequence(root, host) {
    var pin = root.querySelector("#pz-hero-pin");
    var wrap = root.querySelector("#pz-hero-vis");
    var canvas = root.querySelector("#pz-seq-canvas");
    var video = root.querySelector("#pz-seq-video");
    var poster = root.querySelector("#pz-seq-poster");
    var glow = root.querySelector("#pz-hero-glow");
    var grid = root.querySelector("#pz-hero-grid");
    var shadow = root.querySelector("#pz-hero-shadow");
    var stageRail = root.querySelector("#pz-stage-rail");
    var callouts = root.querySelectorAll(".callout");
    var corners = wrap ? wrap.querySelectorAll(".corner") : [];
    var tech = root.querySelector("#pz-tech-lines");
    if (!wrap || !canvas) return;

    var ctx = canvas.getContext ? canvas.getContext("2d", { alpha: true }) : null;
    var frames = new Array(SEQ_COUNT);
    var loaded = 0;
    var inflight = 0;
    var current = 10;
    var drawn = -1;
    var mode = "fallback";
    var running = false;
    var rafId = 0;
    var concurrency = 6;
    var DEFAULT_START = 10;
    var STRONG_EXPLODE = 72;
    var IDLE_LO = 66;
    var IDLE_HI = 74;
    var FINAL_FRAME = SEQ_LAST;
    var BASE_ZOOM = 0.98;
    var mobileMQ = window.matchMedia("(max-width:820px)");
    var reduceMQ = window.matchMedia("(prefers-reduced-motion: reduce)");
    var conn = navigator.connection || {};
    var thin = conn.saveData === true ||
      /(^|-)2g$/.test(conn.effectiveType || "") ||
      (navigator.deviceMemory && navigator.deviceMemory < 4);

    var mx = 0, my = 0, smx = 0, smy = 0;
    var dragActive = false;
    var dragStartX = 0;
    var dragStartFrame = 0;
    var lastInteract = 0;
    var idleOn = false;
    var idleT0 = 0;
    var hoverOrigin = STRONG_EXPLODE;
    var hoverLocked = false;
    var camScale = 1;
    var videoDone = false;
    var handoffDone = false;
    var videoEngaged = false;
    var attractGuard = false;
    var booted = false;
    var diagnostics = { firstMoveAt: 0, explodeAt: 0, finalAt: 0, autoplayStart: 0 };

    function clamp(v, a, b) {
      if (a == null) { a = 0; b = 1; }
      return v < a ? a : v > b ? b : v;
    }
    function lerp(a, b, t) { return a + (b - a) * t; }
    function frameName(i) {
      return "frame-" + String(i).padStart(3, "0") + ".webp";
    }
    function videoTimeToFrame(t) {
      var idx = Math.round(t * CINE_FPS);
      idx = clamp(idx, 0, CINE_PATH.length - 1);
      return CINE_PATH[idx];
    }
    function cameraScaleFor(f) {
      var t = clamp(f / SEQ_LAST);
      if (t < 0.35) return lerp(0.94, 1.06, t / 0.35);
      if (t < 0.65) return lerp(1.06, 1.12, (t - 0.35) / 0.3);
      return lerp(1.12, 1.05, (t - 0.65) / 0.35);
    }
    function stageFor(f) {
      if (f < 38) return 0;
      if (f < 70) return 1;
      if (f < 95) return 2;
      return 3;
    }
    function updateStages(f) {
      if (!stageRail) return;
      var st = stageFor(f);
      stageRail.querySelectorAll("[data-stage]").forEach(function (el) {
        el.classList.toggle("on", Number(el.getAttribute("data-stage")) === st);
      });
      if (callouts && callouts.length) {
        callouts.forEach(function (c) {
          var id = Number(c.getAttribute("data-call"));
          var on = false;
          if (id === 0) on = f >= 20 && f <= 38;
          if (id === 1) on = f >= 45 && f <= 70;
          if (id === 2) on = f >= 72 && f <= 107;
          c.classList.toggle("on", on);
        });
      }
      if (!diagnostics.firstMoveAt && f > 14) diagnostics.firstMoveAt = performance.now();
      if (!diagnostics.explodeAt && f >= 70) diagnostics.explodeAt = performance.now();
      if (!diagnostics.finalAt && f >= 100) diagnostics.finalAt = performance.now();
    }

    function sizeCanvas() {
      if (!ctx) return;
      var r = wrap.getBoundingClientRect();
      if (!r.width || !r.height) return;
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      var w = r.width * dpr, h = r.height * dpr;
      var cap = 1600, k = Math.min(1, cap / Math.max(w, h));
      var nw = Math.round(w * k), nh = Math.round(h * k);
      if (nw !== canvas.width || nh !== canvas.height) {
        canvas.width = nw;
        canvas.height = nh;
        drawn = -1;
      }
    }

    function paint(img) {
      if (!ctx || !img || !(img.naturalWidth || img.width)) return;
      var iw = img.naturalWidth || img.width;
      var ih = img.naturalHeight || img.height;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      camScale = cameraScaleFor(current);
      var contain = Math.min(canvas.width / iw, canvas.height / ih);
      var s = contain * BASE_ZOOM * camScale;
      var w = iw * s, h = ih * s;
      var ox = (smx * 6) * (canvas.width / Math.max(wrap.clientWidth, 1));
      var oy = (smy * 4) * (canvas.height / Math.max(wrap.clientHeight, 1));
      ctx.drawImage(img, (canvas.width - w) / 2 + ox, (canvas.height - h) / 2 + oy, w, h);
      wrap.classList.add("ready");
      if (shadow) {
        var explode = current / SEQ_LAST;
        shadow.style.opacity = String(0.48 + explode * 0.32);
      }
      if (canvas) {
        canvas.style.transform =
          "perspective(1200px) rotateX(" + (-smy * 3) + "deg) rotateY(" + (smx * 3) + "deg) translate(" + (smx * 5) + "px," + (smy * 4) + "px)";
      }
    }

    function nearest(i) {
      i = clamp(Math.round(i), 0, SEQ_LAST);
      if (frames[i] && frames[i].ok) return i;
      for (var d = 1; d < SEQ_COUNT; d++) {
        var a = i - d, b = i + d;
        if (a >= 0 && frames[a] && frames[a].ok) return a;
        if (b < SEQ_COUNT && frames[b] && frames[b].ok) return b;
      }
      return -1;
    }

    function pickNext() {
      var priority = [DEFAULT_START, 28, 44, STRONG_EXPLODE, 90, FINAL_FRAME, 0, IDLE_LO, IDLE_HI];
      for (var p = 0; p < priority.length; p++) {
        if (!frames[priority[p]]) return priority[p];
      }
      var best = -1, bestScore = Infinity;
      for (var i = 0; i < SEQ_COUNT; i++) {
        if (frames[i]) continue;
        var score = Math.abs(i - current);
        if (score < bestScore) { bestScore = score; best = i; }
      }
      return best;
    }

    function pump() {
      if (!running) return;
      while (inflight < concurrency) {
        var i = pickNext();
        if (i < 0) return;
        request(i);
      }
    }

    function request(i) {
      var img = new Image();
      img.decoding = "async";
      frames[i] = img;
      inflight++;
      img.onload = function () {
        img.ok = true; loaded++; inflight--;
        pump(); schedule();
      };
      img.onerror = function () {
        inflight--;
        frames[i].ok = false;
        pump(); schedule();
      };
      img.src = SEQ_BASE + frameName(i);
    }

    function showFrame(idx, force) {
      idx = clamp(Math.round(idx), 0, SEQ_LAST);
      current = idx;
      updateStages(idx);
      var n = nearest(idx);
      if (n < 0) return;
      if (!force && n === drawn) return;
      paint(frames[n]);
      drawn = n;
    }

    function setMode(next) {
      mode = next;
      wrap.setAttribute("data-mode", next);
    }

    function applyParallax() {
      smx = lerp(smx, mx, 0.12);
      smy = lerp(smy, my, 0.12);
      if (glow) glow.style.transform = "translate(" + (smx * 12) + "px," + (smy * 10) + "px)";
      if (grid) grid.style.transform = "translate(" + (-smx * 5) + "px," + (-smy * 4) + "px)";
      if (tech) tech.style.transform = "translate(" + (-smx * 3) + "px," + (-smy * 2) + "px)";
      corners.forEach(function (c, idx) {
        var dir = idx === 0 ? 1 : -1;
        c.style.transform = "translate(" + (smx * 2.5 * dir) + "px," + (smy * 2.5 * dir) + "px)";
      });
      if (shadow) shadow.style.transform = "translateX(" + (smx * 3) + "px)";
    }

    function tick(ts) {
      rafId = 0;
      applyParallax();

      if (mode === "video" && video && !video.paused) {
        var f = videoTimeToFrame(video.currentTime || 0);
        current = f;
        updateStages(f);
        schedule();
        return;
      }

      if (mode !== "sequence") {
        schedule();
        return;
      }

      var now = ts || performance.now();
      if (!dragActive && Math.abs(smx) + Math.abs(smy) > 0.02) {
        if (!hoverLocked) {
          hoverOrigin = idleOn ? STRONG_EXPLODE : current;
          hoverLocked = true;
        }
        idleOn = false;
        showFrame(hoverOrigin + smx * 6);
      } else if (!dragActive && idleOn) {
        hoverLocked = false;
        var u = ((now - idleT0) / 5200) % 2;
        var wave = u < 1 ? u : 2 - u;
        var ease = wave < 0.5 ? 2 * wave * wave : 1 - Math.pow(-2 * wave + 2, 2) / 2;
        showFrame(lerp(IDLE_LO, IDLE_HI, ease));
      } else if (!dragActive && handoffDone && now - lastInteract > 2600) {
        hoverLocked = false;
        idleOn = true;
        idleT0 = now;
        showFrame(lerp(current, STRONG_EXPLODE, 0.18));
      } else if (!dragActive) {
        hoverLocked = false;
        if (drawn < 0) showFrame(current, true);
        else showFrame(current);
      } else if (drawn < 0) {
        showFrame(current, true);
      } else {
        showFrame(current);
      }
      schedule();
    }

    function schedule() {
      if (!rafId) rafId = requestAnimationFrame(tick);
    }

    function showPoster(preferExplode) {
      var src = preferExplode ? CINE_POSTER : HERO_IMG;
      var img = new Image();
      img.onload = function () {
        poster.src = img.src;
        setMode("poster");
        wrap.classList.add("ready");
      };
      img.onerror = function () {
        setMode("fallback");
        wrap.classList.add("ready");
      };
      img.src = src;
    }

    function handoffToCanvas(fromFrame, force) {
      if (!force && handoffDone && mode === "sequence") return;
      handoffDone = true;
      attractGuard = true;
      idleOn = false;
      lastInteract = performance.now();
      sizeCanvas();
      var target = fromFrame != null ? fromFrame : current;
      current = clamp(Math.round(target), 0, SEQ_LAST);
      /* Paint before mode switch so first canvas frame matches video composition */
      var n = nearest(current);
      if (n >= 0) paint(frames[n]);
      else {
        var boot = new Image();
        frames[current] = boot;
        boot.onload = function () {
          boot.ok = true; loaded++;
          paint(boot); drawn = current;
        };
        boot.src = SEQ_BASE + frameName(current);
      }
      if (video) {
        try {
          video.pause();
          video.removeAttribute("autoplay");
        } catch (e) {}
      }
      setMode("sequence");
      showFrame(current, true);
      pump();
      schedule();
    }

    function startVideo() {
      if (!video || reduceMQ.matches || mobileMQ.matches || thin) {
        startCanvasAttract();
        return;
      }
      if (handoffDone || attractGuard) return;
      running = true;
      diagnostics.autoplayStart = performance.now();
      setMode("video");
      try {
        video.muted = true;
        video.defaultMuted = true;
        video.playsInline = true;
        video.setAttribute("muted", "");
        video.setAttribute("playsinline", "");
        video.setAttribute("webkit-playsinline", "");
        video.preload = "auto";
        /* do not force seek-to-0 on every call; booted guard prevents re-entry */
      } catch (e) {}
      [DEFAULT_START, 28, 44, STRONG_EXPLODE, 90, FINAL_FRAME, IDLE_LO, IDLE_HI].forEach(function (i) {
        if (!frames[i]) request(i);
      });
      var play = video.play();
      if (play && play.then) {
        play.then(function () {
          if (handoffDone) return;
          wrap.classList.add("ready");
          videoEngaged = true;
          schedule();
        }).catch(function () {
          if (!handoffDone && !attractGuard) startCanvasAttract();
        });
      } else {
        wrap.classList.add("ready");
        schedule();
      }
      setTimeout(function () {
        if (handoffDone || attractGuard || videoEngaged) return;
        if (!video || video.paused || video.currentTime < 0.05) {
          startCanvasAttract();
        }
      }, 1100);
      video.addEventListener("playing", function () {
        if (handoffDone) {
          try { video.pause(); } catch (e) {}
          return;
        }
        videoEngaged = true;
        wrap.classList.add("ready");
      });
      video.addEventListener("timeupdate", function onTu() {
        if (handoffDone) return;
        if (video.currentTime > 0.08) {
          videoEngaged = true;
          wrap.classList.add("ready");
          if (!diagnostics.firstMoveAt) diagnostics.firstMoveAt = performance.now();
          updateStages(videoTimeToFrame(video.currentTime));
        }
        if (video.currentTime > 2.9 && !diagnostics.explodeAt) {
          diagnostics.explodeAt = performance.now();
        }
        if (video.currentTime > 4.7 && !diagnostics.finalAt) {
          diagnostics.finalAt = performance.now();
        }
      });
      video.addEventListener("ended", function () {
        if (handoffDone) return;
        videoDone = true;
        handoffToCanvas(videoTimeToFrame(CINE_DURATION), true);
        idleOn = true;
        idleT0 = performance.now();
      });
      video.addEventListener("error", function () {
        if (!handoffDone && !attractGuard) startCanvasAttract();
      });
    }

    function startCanvasAttract() {
      if (attractGuard || handoffDone) return;
      attractGuard = true;
      if (!ctx) { showPoster(true); return; }
      running = true;
      if (!diagnostics.autoplayStart) diagnostics.autoplayStart = performance.now();
      if (video) {
        try { video.pause(); video.removeAttribute("autoplay"); } catch (e) {}
      }
      setMode("sequence");
      sizeCanvas();
      var probe = new Image();
      frames[DEFAULT_START] = probe;
      inflight++;
      probe.onload = function () {
        probe.ok = true; loaded++; inflight--;
        showFrame(DEFAULT_START, true);
        wrap.classList.add("ready");
        pump();
        var t0 = null;
        var DUR = 7200;
        function step(ts) {
          if (mode !== "sequence") return;
          if (dragActive) return;
          if (t0 == null) t0 = ts;
          var u = clamp((ts - t0) / DUR);
          var frame;
          if (u < 0.12) frame = lerp(8, 12, u / 0.12);
          else if (u < 0.38) frame = lerp(12, 44, (u - 0.12) / 0.26);
          else if (u < 0.55) frame = lerp(44, 74, (u - 0.38) / 0.17);
          else if (u < 0.78) frame = lerp(74, 107, (u - 0.55) / 0.23);
          else if (u < 0.9) frame = 107;
          else frame = lerp(107, 70, (u - 0.9) / 0.1);
          showFrame(frame, true);
          if (u < 1) requestAnimationFrame(step);
          else {
            handoffDone = true;
            idleOn = true;
            idleT0 = performance.now();
            schedule();
          }
        }
        requestAnimationFrame(step);
        schedule();
      };
      probe.onerror = function () {
        inflight--;
        showPoster(true);
      };
      probe.src = SEQ_BASE + frameName(DEFAULT_START);
    }

    function decide() {
      if (booted) return;
      booted = true;
      if (reduceMQ.matches) { showPoster(true); return; }
      if (mobileMQ.matches) {
        showPoster(true);
        wrap.addEventListener("pointermove", function (e) {
          var r = wrap.getBoundingClientRect();
          mx = (e.clientX - r.left) / r.width - 0.5;
          my = (e.clientY - r.top) / r.height - 0.5;
          applyParallax();
        });
        return;
      }
      if (thin) { showPoster(true); return; }
      if (!ctx) { startVideo(); return; }
      startVideo();
    }

    function markInteract() {
      lastInteract = performance.now();
      idleOn = false;
    }

    function onPointerMove(e) {
      if (mobileMQ.matches || reduceMQ.matches) return;
      var r = wrap.getBoundingClientRect();
      mx = clamp((e.clientX - r.left) / r.width - 0.5, -0.5, 0.5) * 2;
      my = clamp((e.clientY - r.top) / r.height - 0.5, -0.5, 0.5) * 2;
      markInteract();
      /* Allow video to establish cinematic motion before hover handoff */
      var played = video && video.currentTime ? video.currentTime : 0;
      if (mode === "video" && !handoffDone && (played >= 0.85 || videoDone)) {
        handoffToCanvas(videoTimeToFrame(played));
      }
      if (dragActive) {
        var delta = (e.clientX - dragStartX) / Math.max(r.width, 1);
        showFrame(dragStartFrame + delta * 56, true);
      }
      schedule();
    }

    wrap.addEventListener("pointermove", onPointerMove);
    wrap.addEventListener("pointerdown", function (e) {
      if (reduceMQ.matches || mobileMQ.matches) return;
      if (e.button != null && e.button !== 0) return;
      markInteract();
      if (mode === "video") handoffToCanvas(videoTimeToFrame(video ? video.currentTime : 0));
      dragActive = true;
      dragStartX = e.clientX;
      dragStartFrame = current;
      wrap.classList.add("is-dragging");
      try { wrap.setPointerCapture(e.pointerId); } catch (err) {}
    });
    function endDrag(e) {
      if (!dragActive) return;
      dragActive = false;
      wrap.classList.remove("is-dragging");
      try { if (e) wrap.releasePointerCapture(e.pointerId); } catch (err) {}
      markInteract();
    }
    wrap.addEventListener("pointerup", endDrag);
    wrap.addEventListener("pointercancel", endDrag);
    wrap.addEventListener("pointerleave", function () {
      mx = 0; my = 0;
      hoverLocked = false;
      markInteract();
    });
    wrap.addEventListener("wheel", function (e) {
      if (reduceMQ.matches || mobileMQ.matches) return;
      markInteract();
      if (mode === "video") handoffToCanvas(videoTimeToFrame(video ? video.currentTime : 0));
      else if (mode === "sequence") {
        handoffDone = true;
        showFrame(current + (e.deltaY > 0 ? 2 : -2), true);
      }
    }, { passive: true });

    window.addEventListener("scroll", function () {
      if (mode === "sequence" && handoffDone && !dragActive) {
        /* gentle scroll influence without runway */
        if (!pin) return;
        var r = pin.getBoundingClientRect();
        var vh = window.innerHeight || 800;
        var p = clamp((-r.top) / Math.max(r.height * 0.8, vh * 0.35));
        if (performance.now() - lastInteract > 400) {
          showFrame(lerp(STRONG_EXPLODE, FINAL_FRAME, p * 0.35));
        }
      }
    }, { passive: true });

    var rT = 0;
    window.addEventListener("resize", function () {
      clearTimeout(rT);
      rT = setTimeout(function () {
        sizeCanvas();
        drawn = -1;
        if (mode === "sequence") showFrame(current, true);
      }, 150);
    }, { passive: true });

    if (mobileMQ.addEventListener) mobileMQ.addEventListener("change", decide);
    if (reduceMQ.addEventListener) reduceMQ.addEventListener("change", decide);

    wrap.__pzSeq = function () {
      return {
        mode: mode,
        current: current,
        drawn: drawn,
        loaded: loaded,
        idleOn: idleOn,
        handoffDone: handoffDone,
        diagnostics: diagnostics
      };
    };
    wrap.__pzSeek = function (idx) {
      idleOn = false;
      lastInteract = performance.now();
      if (mode === "video") handoffToCanvas(idx, true);
      else {
        handoffDone = true;
        setMode("sequence");
        showFrame(idx, true);
      }
      return wrap.__pzSeq();
    };

    decide();
    schedule();
  }


  function bind(root, host) {
    var hdr = root.querySelector("#pz-hdr");
    var burger = root.querySelector("#pz-burger");
    var mnav = root.querySelector("#pz-mnav");
    var heroSearch = root.querySelector("#pz-hero-search");
    var searchStatus = root.querySelector("#pz-search-status");
    var rfqForm = root.querySelector("#pz-rfq-form");
    var rfqSuccess = root.querySelector("#pz-rfq-success");

    function setOpen(open) {
      if (!burger || !mnav) return;
      mnav.hidden = !open;
      mnav.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.setAttribute("aria-label", open ? "Menüyü kapat" : "Menüyü aç");
    }

    if (burger && mnav) {
      mnav.hidden = true;
      burger.addEventListener("click", function () {
        setOpen(!mnav.classList.contains("open"));
      });
      mnav.addEventListener("click", function (e) {
        if (e.target.closest("a") || e.target.closest("button")) setOpen(false);
      });
      root.addEventListener("keydown", function (e) {
        if (e.key === "Escape") setOpen(false);
      });
    }

    function onScroll() {
      if (!hdr) return;
      var top = 0;
      try {
        var r = host.getBoundingClientRect();
        top = -r.top;
      } catch (err) {}
      hdr.classList.toggle("stuck", top > 8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (heroSearch) {
      var tabs = heroSearch.querySelectorAll(".search-tabs button");
      var panes = heroSearch.querySelectorAll(".search-pane");
      tabs.forEach(function (tab) {
        tab.addEventListener("click", function () {
          var key = tab.getAttribute("data-tab");
          tabs.forEach(function (t) {
            var on = t === tab;
            t.classList.toggle("active", on);
            t.setAttribute("aria-selected", on ? "true" : "false");
          });
          panes.forEach(function (p) {
            p.classList.toggle("active", p.getAttribute("data-pane") === key);
          });
        });
      });
      heroSearch.addEventListener("submit", function (e) {
        e.preventDefault();
        var fields = collectSearchFields(root);
        var ok = openWhatsApp(host, fields);
        if (searchStatus) {
          searchStatus.classList.add("show");
          searchStatus.innerHTML = ok
            ? "<strong>WhatsApp açılıyor.</strong> Stok ve fiyat talebiniz hazırlandı."
            : "<strong>WhatsApp şu anda açılamadı.</strong> Lütfen tekrar deneyin.";
        }
      });
    }

    root.querySelectorAll("[data-wa]").forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        setOpen(false);
        var fields = {};
        if (el.hasAttribute("data-wa-from-search") || el.classList.contains("search-submit")) {
          fields = collectSearchFields(root);
        }
        if (el.getAttribute("data-wa-part")) {
          fields.partCode = el.getAttribute("data-wa-part");
        }
        openWhatsApp(host, fields);
      });
    });

    if (rfqForm) {
      rfqForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var fields = collectRfqFields(rfqForm);
        var ok = openWhatsApp(host, fields);
        if (rfqSuccess) {
          rfqSuccess.classList.add("show");
          rfqSuccess.querySelector("p").textContent = ok
            ? "Mesajınız hazırlandı. Açılan pencereden iletişime devam edebilirsiniz."
            : "WhatsApp şu anda açılamadı. Lütfen tekrar deneyin.";
        }
      });
    }

    root.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var id = (a.getAttribute("href") || "").slice(1);
        if (!id) return;
        var target = root.getElementById(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        setOpen(false);
      });
    });

    /* ---- Supplier modal / portal ---- */
    var b2bModal = root.querySelector("#pz-b2b-modal");
    var b2bPanel = root.querySelector("#pz-b2b-panel");
    var b2bAuth = root.querySelector("#pz-b2b-auth");
    var b2bLoading = root.querySelector("#pz-b2b-loading");
    var portalSupplier = root.querySelector("#pz-portal-supplier");
    var supplierForm = root.querySelector("#pz-b2b-supplier");
    var lastFocus = null;

    function resetSupplierView() {
      if (b2bAuth) b2bAuth.style.display = "";
      if (b2bLoading) b2bLoading.classList.remove("on");
      if (portalSupplier) portalSupplier.classList.remove("on");
      if (b2bPanel) b2bPanel.classList.remove("wide");
      if (supplierForm) {
        supplierForm.style.display = "";
        supplierForm.querySelectorAll(".field").forEach(function (f) { f.classList.remove("err"); });
      }
    }

    function resolveSupplierPortalUrl() {
      try {
        var raw = (host.getAttribute("supplier-portal-url") || "").trim();
        if (raw) return raw;
      } catch (e) {}
      return DEFAULT_SUPPLIER_PORTAL_URL;
    }

    function openSupplierModal() {
      if (!b2bModal) return;
      lastFocus = document.activeElement;
      resetSupplierView();
      b2bModal.hidden = false;
      b2bModal.classList.add("open");
      b2bModal.setAttribute("aria-hidden", "false");
      document.documentElement.style.overflow = "hidden";
      setOpen(false);
      setTimeout(function () { if (b2bPanel) b2bPanel.focus(); }, 10);
    }

    function openSupplier() {
      var portalUrl = resolveSupplierPortalUrl();
      if (portalUrl) {
        try {
          window.open(portalUrl, "_top");
          return;
        } catch (e) {}
        try {
          if (window.top && window.top.location) {
            window.top.location.assign(portalUrl);
            return;
          }
        } catch (e2) {}
        try {
          window.location.assign(portalUrl);
          return;
        } catch (e3) {}
      }
      openSupplierModal();
    }

    function closeSupplier() {
      if (!b2bModal) return;
      b2bModal.classList.remove("open");
      b2bModal.hidden = true;
      b2bModal.setAttribute("aria-hidden", "true");
      document.documentElement.style.overflow = "";
      resetSupplierView();
      if (lastFocus && lastFocus.focus) {
        try { lastFocus.focus(); } catch (e) {}
      }
    }

    function showSupplierPortal() {
      if (b2bAuth) b2bAuth.style.display = "none";
      if (b2bLoading) b2bLoading.classList.remove("on");
      if (b2bPanel) b2bPanel.classList.add("wide");
      if (portalSupplier) portalSupplier.classList.add("on");
    }

    function validateSupplierForm(form) {
      var ok = true;
      var email = form.querySelector('input[type="email"]');
      var pass = form.querySelector('input[type="password"]');
      var emailField = email && email.closest(".field");
      var passField = pass && pass.closest(".field");
      if (emailField) emailField.classList.remove("err");
      if (passField) passField.classList.remove("err");
      var emailOk = email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email.value || "").trim());
      var passOk = pass && String(pass.value || "").length >= 6;
      if (!emailOk && emailField) { emailField.classList.add("err"); ok = false; }
      if (!passOk && passField) { passField.classList.add("err"); ok = false; }
      return ok;
    }

    root.querySelectorAll("[data-supplier-open]").forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        openSupplier();
      });
    });
    root.querySelectorAll("[data-b2b-close]").forEach(function (el) {
      el.addEventListener("click", function () { closeSupplier(); });
    });
    root.querySelectorAll("[data-supplier-apply]").forEach(function (el) {
      el.addEventListener("click", function () { openSupplier(); });
    });
    if (supplierForm) {
      supplierForm.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!validateSupplierForm(supplierForm)) return;
        if (b2bLoading) b2bLoading.classList.add("on");
        supplierForm.style.display = "none";
        setTimeout(function () {
          supplierForm.style.display = "";
          showSupplierPortal();
        }, 900);
      });
    }
    root.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && b2bModal && b2bModal.classList.contains("open")) {
        closeSupplier();
      }
    });

    bindHeroSequence(root, host);
  }

  class ParcaZinciriApp extends HTMLElement {
    connectedCallback() {
      if (this.__pzMounted) return;
      this.__pzMounted = true;
      ensureFonts();
      var shadow = this.attachShadow({ mode: "open" });
      var style = document.createElement("style");
      style.textContent = CSS_TEXT;
      shadow.appendChild(style);
      var wrap = document.createElement("div");
      wrap.innerHTML = buildHtml();
      shadow.appendChild(wrap.firstChild);
      bind(shadow, this);
    }
  }

  customElements.define("parca-zinciri-app", ParcaZinciriApp);
})();
