const { response } = require("express");
const { Db, ObjectID, ObjectId } = require("mongodb");
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

    getUserDetails: (userId)=>{
        return new Promise(async(resolve,reject)=>{
            db.get().collection(collection.USER_COLLECTION).findOne({_id: ObjectId(userId)}).then((user)=>{
                resolve(user)
            })
        })
    },

    updateUser: (userId, userDetails) => {
        return new Promise((resolve, reject) => {
            db.get().collection(collection.USER_COLLECTION)
                .updateOne({ _id: objectId(userId) }, {
                    $set: {
                        name: userDetails.name,
                       email: userDetails.email
                    }
                }).then((response)=>{
                    resolve()
                })
        })
    },

    deleteUser: (userId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.USER_COLLECTION).removeOne({_id:ObjectId(userId)}).then((response)=>{
                console.log(response);
                resolve(response)
            })
        })
    }
}