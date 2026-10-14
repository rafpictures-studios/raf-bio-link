# RAF Pictures bio link

Static bio link site (no build step). Rebuilt from `bio-link-main/` with the look of the RAF Scatter docs.

## Files

| Path | What it is |
|---|---|
| `index.html` | Links and Assets tabs, all dialogs (course discount, commission, subscribe, video, portfolio) |
| `renderfarm.html` | Render price calculator and price table |
| `css/tokens.css` | Colours, type, radius, motion tokens (dark default, light via `data-theme="light"`) |
| `css/main.css` | Layout and components |
| `css/fonts.css` | Self-hosted Geist and Geist Mono |
| `css/icons.css` | Phosphor icons, subset to the glyphs in use |
| `js/config.js` | **Edit here:** text (EN / ID), video data, prices, WhatsApp number, discount code |
| `js/app.js` | Language, theme, menu, tabs, dialogs, forms, video and portfolio |
| `api/contact.js` | Open commission form endpoint, sends the message to Gmail |
| `api/subscribe.js` | Subscribe form endpoint, sends a "New subscriber" email to Gmail |
| `api/_lib/mail.js` | Shared code: Gmail SMTP, validation, spam protection, email layout |
| `package.json` | Only dependency: `nodemailer` (Vercel installs it on deploy) |
| `.env.example` | List of environment variables to set in Vercel |

## Design rules (from the docs site)

- Off-black `#111111` / off-white `#fcfcfb`, neutral greys, dot grid background.
- One accent (violet `#a48be0` / `#6f49bb`), only for small tags and one soft wash.
- Geist for text, Geist Mono for numbers and codes. Sentence-case labels.
- Radius: 12px containers, 8px controls, 6px tags. Nothing pill-shaped.
- Image wells stay dark in both themes. No status colours.
- No em or en dashes in visible text.
- Motion: hero fades in, hover nudges, page cross-fade between the two pages. All off under reduced motion.

## Adding a new icon

`css/icons.css` only contains the icons used now. To use any Phosphor icon without re-subsetting, replace the
`css/icons.css` link in both HTML files with:

```html
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css">
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/fill/style.css">
```

## Forms: own backend, straight to Gmail (no Formspree)

The two forms post JSON to Vercel serverless functions in `api/`. They send the email from your own
Gmail account through Gmail SMTP using a Google App Password.

### Setup (once)

1. Push this folder to GitHub and import the repo in Vercel (Framework preset: **Other**, no build command).
2. In Vercel: **Project > Settings > Environment Variables**, add:
   - `GMAIL_USER` = your Gmail address
   - `GMAIL_APP_PASSWORD` = the 16-character App Password
   - optional `MAIL_TO` = another inbox for notifications (defaults to `GMAIL_USER`)
   - optional `ALLOWED_ORIGIN` = your site URL, e.g. `https://your-site.vercel.app` (blocks posts from other sites)
3. **Redeploy** (Deployments > ... > Redeploy). Environment variables only apply to new deployments.
4. Test both forms on the live site. Mail arrives from yourself, subject "Commission inquiry from ..." or "New subscriber: ...".

Never put the App Password in any file in the repo. If it ever leaks, revoke it at
myaccount.google.com/apppasswords and create a new one.

### What happens

| Form | Endpoint | Email you get |
|---|---|---|
| Open commission | `POST /api/contact` | Name, email, phone (WhatsApp link), message. **Reply** goes to the sender. |
| Subscribe | `POST /api/subscribe` | Subscriber email, language, time. |

Tip: create a Gmail filter for subject `New subscriber` that applies a label, so all subscribers sit in one place.

### Spam protection

- Hidden honeypot field and a 2 second minimum fill time (bots get a fake "ok").
- Server-side validation and length limits; all text is HTML-escaped in the email.
- Rate limit per IP: 5 messages / 3 subscribes per 10 minutes (best effort, per server instance).
- Optional `ALLOWED_ORIGIN`.

### Limits

- Gmail sends about 500 emails per day per account, far above what a bio link needs.
- There is no database: the subscriber list lives in your Gmail. For newsletters later, export the
  addresses or add a database.

### Debugging

Vercel > Project > **Logs** shows `[contact] send failed: ...` if Gmail rejects the login
(usually a wrong App Password, or 2-Step Verification turned off).

Local test without sending: `npm i -g vercel`, then `vercel dev` with a `.env` file, or set `MAIL_DRY_RUN=1`
to print the email instead of sending it.
