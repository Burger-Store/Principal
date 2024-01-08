const db = require('../../../database/models');

const deleteUser = (req, res) => {
    db.Users.destroy({
        where: {
            idusers: req.params.id
        }
    })
    .then(function() {
        res.redirect('/user/');
    })
    .catch(function (e){
        res.send(e);
    });
}

module.exports = deleteUser;
