const { db, } = require('../pgp');

exports.home = (req, res)=>{
    db.any('SELECT * FROM kara ')
    .then( data =>{
        // console.log(data);
        res.render('home', {
            // title: '',
            // kara: data
        })
    })
}

exports.manage = (req, res)=>{
    db.any('SELECT * FROM kara ')
    .then( data =>{
        // console.log(data);
        res.render('manage', {
            // title: '',
            kara: data
        })
    })
}


exports.room = (req, res)=>{
    db.any('SELECT * FROM kara WHERE status = 0')
    .then(data =>{
        // console.log(data);
        res.render('room',{
            kara:data
        })
    })
}
exports.staff = (req, res)=>{
    let episode_number = req.params.episode_number;
    db.any('SELECT * FROM staff ORDER BY time ASC;')
    .then(data =>{
        // console.log(data)
        res.render('staff',{
            staff: data
        })
    })
}