/*
 * POST /api/subscribe
 * Subscribe form. Sends you one notification email per new subscriber.
 * Tip: in Gmail, filter subject "New subscriber" into a label to keep the list in one place.
 * Body (JSON): { email, website (honeypot), _t (form open time), lang }
 */
import {
  send, readBody, originAllowed, clientIp, rateLimited, looksLikeBot,
  oneLine, isEmail, escapeHtml, jakartaTime, emailHtml, sendMail
} from './_lib/mail.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return send(res, 405, { ok: false, error: 'method_not_allowed' });
  }
  if (!originAllowed(req)) return send(res, 403, { ok: false, error: 'forbidden' });

  let body;
  try {
    body = await readBody(req);
  } catch (err) {
    return send(res, err.status || 400, { ok: false, error: 'bad_request' });
  }

  if (looksLikeBot(body)) return send(res, 200, { ok: true });
  if (rateLimited('subscribe:' + clientIp(req), 3)) return send(res, 429, { ok: false, error: 'rate_limited' });

  const email = oneLine(body.email, 254).toLowerCase();
  const lang = body.lang === 'id' ? 'Indonesia' : 'English';
  if (!isEmail(email)) return send(res, 422, { ok: false, error: 'invalid' });

  const time = jakartaTime();

  try {
    await sendMail({
      subject: `New subscriber: ${email}`,
      replyTo: email,
      text: `New subscriber\n\nEmail: ${email}\nLanguage: ${lang}\nTime: ${time}\n`,
      html: emailHtml(
        'New subscriber',
        [
          ['Email', `<a href="mailto:${escapeHtml(email)}" style="color:#141414">${escapeHtml(email)}</a>`],
          ['Language', escapeHtml(lang)],
          ['Time', escapeHtml(time)]
        ],
        'Sent from the subscribe form on your bio link.'
      )
    });
    return send(res, 200, { ok: true });
  } catch (err) {
    console.error('[subscribe] send failed:', err.message);
    return send(res, 500, { ok: false, error: 'send_failed' });
  }
}
