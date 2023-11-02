const logout = (req, res) => {
    res.clearCookie('userEmail');
    req.session.destroy();
    return res.redirect('/');
}

module.exports = logout;