var pgp = require('pg-promise')();
var db = pgp('postgres://postgres:123@localhost:5433/kara');
let data = require('./data.json');

for(let count in data){
    data[count].forEach((item) => {
        db.any('insert into kara(room, name, size, star, price,status) values ($(room), ${name},${size},${star},${price},${status})', item)
            .then(()=>{
                    console.log('add data succees');
            })
            .catch(error => {
                console.log(error);
                });
    })
}