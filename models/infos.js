let connection=require('../models/config.js');

class Infos{

    static add(nom_user, class_user, etablissement_user, date_inscription, cb)
    {
        connection.query("INSERT INTO inscrit SET nom_user=?, class_user=?, etablissement_user=?, date_inscription=?", 
        [nom_user, class_user, etablissement_user, date_inscription], (err, result)=>{
            if(err)
            {
                throw err;
            }
            else
            {
              cb(result);
            }
        })
    }
    
}

module.exports=Infos;