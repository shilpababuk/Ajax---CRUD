const { response } = require("express");
const { Db, ObjectID } = require("mongodb");
var db = require('../config/connection')
var collection = require('../config/collection')
module.exports = {
    addUser: (userData)=>{
        //console.log(userData);
        return new Promise(async (resolve,reject)=>{
            db.get().collection(collection.USER_COLLECTION).insertOne(userData).then((response)=>{
                resolve(response.ops[0])
            })
        })
    },
    getAllUsers: ()=>{
        return new Promise(async (resolve,reject)=>{
            let users = await db.get().collection(collection.USER_COLLECTION).find().toArray()
            resolve(users)
        })
    },
}