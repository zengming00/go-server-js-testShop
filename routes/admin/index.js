var res = require('./lib/resp.js');

if (session.get("isAdmin")) {
  return res.htmlFile('./views/admin/static/index.html');
}

res.redirect('/routes/admin/login.js');