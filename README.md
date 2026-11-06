# 🏪 Arshad Kiryana Store: Web App (PWA)

QR scan → menu → order. Install karna **optional** hai (phone ki home screen par ایپ بن جاتی ہے).
Yeh ek static site hai: koi build ya server nahi chahiye.

## Files
| File | Kaam |
|---|---|
| `index.html` | Poori app (customer menu + admin panel) |
| `manifest.webmanifest` | Install ke liye: naam, rang, icons, shortcuts |
| `sw.js` | Service worker: offline chalna aur tez khulna |
| `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png`, `favicon.svg` | Icons |
| `_headers` | Cloudflare ke cache/security headers |

## GitHub + Cloudflare Pages par live karna
1. **GitHub:** github.com → New repository (`arshad-kiryana`) → *uploading an existing file* → zip kholne ke baad **saari files** (folder nahi, files) drag karen → Commit.
2. **Cloudflare:** dash.cloudflare.com → *Workers & Pages* → *Create* → *Pages* → *Connect to Git* → apni repo chunen.
3. Settings: **Framework preset: None · Build command: (khali) · Build output directory: `/`** → *Save and Deploy*.
4. 1 minute mein link milega: `https://arshad-kiryana.pages.dev`. Yahi link har device par chalta hai (https ki wajah se install bhi chalta hai).
5. Apna domain: Pages project → *Custom domains*.
6. Naya link milne ke baad admin → **QR** tab mein woh link likh kar QR poster print karen.

## Install kaise hota hai
- **Android (Chrome):** menu par "ایپ کی طرح انسٹال کریں" ka card aata hai → *Install*. (Ya Chrome menu → *Install app*.)
- **iPhone (Safari):** Share → *Add to Home Screen*.
- **Computer (Chrome/Edge):** address bar mein install ka nishan.

## Update dena
GitHub mein `index.html` badal kar Commit karen → Cloudflare khud nayi version laga deta hai. Agar purani version phone par atki rahe to `sw.js` mein `const V = "kq-v1"` ko `"kq-v2"` kar den.

## ⚠️ Ahem: yeh abhi demo hai
- Saman, qeematein aur **orders har phone/browser ke andar alag save hote hain** (localStorage). Customer ke phone se diya hua order malik ke phone ke admin panel mein **nahi** aayega.
- Admin PIN `1234` hai aur sirf dikhawe ka hai (index.html mein `1234` dhoondh kar badlen). Asli security ke liye Firebase login chahiye.
- Asli order system (Firebase, har device se live orders, awaaz ka alert) pehle wale project `kiryana-qr-menu.zip` mein hai.
- Tasveerain file ke andar embed hain. Admin mein har item ki photo camera ke nishan se badli ja sakti hai.
