var db=require('./db');

module.exports={
    get:function (search,callback){
        var sql="select * from appointments " +
            "join patients on appointments.patientId=patients.id" +
            " join users on patients.userId=users.id" +
            " where docId="+search.docId+" and " +
            "name LIKE '"+search.str+"%' or name LIKE '%"+search.str+"' OR " +
            "name LIKE '%_"+search.str+"_%' or patientId = '"+search.str+"'";
        console.log(sql);
        db.getResults(sql,function (result) {
            if(result.length>0){
                callback(result);
            }
            else {
                callback([]);
            }
        });
    },
}
