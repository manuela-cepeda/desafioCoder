import mongoose from "mongoose";
import config from "../../config/config.js";


mongoose.connect(config.mongo.MONGO_URL
, err=>{
    if (err) throw new Error(`error conexion mongo atlas ${err}`)
    console.log('base conectada')
})

export default class MongoDBContainer{

    constructor(collection, schema){
        this.model =  mongoose.model(collection, schema)
    }
    
    getAll = async () => {      
        let results = await this.model.find();
        return results
  
    }

    getAllPopulated = async () => {      
        let results = await this.model.find().populate('author');
        return results
  
    }
    
    getById = async (id) => {
        let results = await this.model.findOne({   _id : id });
        return results;
    };
  
    save = async (document)=> {
        let results = await this.model.create(document);
        return results;
    }

    update = async ( modifiedItem) => {
        const id = modifiedItem.id
        let results = await this.model.updateOne({_id : id }, {$set: modifiedItem });
        return results;
    };

    deleteById = async (id) => {
        let results = await this.model.deleteOne({ _id : id });
        return results;
    };
  

   
  
}