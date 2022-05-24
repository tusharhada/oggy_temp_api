import mongoose from 'mongoose'

const restaurantSchema = mongoose.Schema({
    restaurant_id: String, 
    zomato_id: String, 
    swiggy_id: String, 
    dineout_id: String, 
    magicpin_id: String, 
    restaurant_name: String, 
    address: String, 
    city: String, 
    timing: String, 
    cuisines: String, 
    zomato_rating: String,
    swiggy_rating: String, 
    dineout_rating: String, 
    magicpin_rating: String,  
    zomato_link: String,
    swiggy_link: String,
    dineout_link: String,
    magicpin_link: String,
    zomato_offer: String, 
    swiggy_offer: String, 
    dineout_offer: String, 
    magicpin_offer: String, 
    directions: String, 
    images: String,
    index_image: String},
    {timestamps: true}   //createdAt, updatedAt
    //along with id
)

/*
restaurantSchema.method("toJSON", function() {
    const {_v, _id, ...object } = this.toObject()
    object._id = _id
    return object
})
*/

const model = mongoose.model('model', restaurantSchema)

export default model