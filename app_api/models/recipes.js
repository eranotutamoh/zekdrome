var mongoose = require( 'mongoose' );

var ingredientsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    method: String,
    quantity: String
});

var recipeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    ingredients: [ingredientsSchema],
    instructions: String
});


mongoose.model('Recipe', recipeSchema);



