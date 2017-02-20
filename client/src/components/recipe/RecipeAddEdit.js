import React from 'react'



const RecipeAddEdit = (props) => {
    let lala
    const submission = () => {

        if (!lala.value.trim()) {
            return
        }
        console.log('Nigger!:',lala.value, props.recipe._id)
        lala.value = '';
        if(props.recipe._id) () => {props.saveRecipe()}
        else () => {props.editRecipe()}
    }



    return     (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                submission();
            }}>
                <input ref={node => {
                    lala = node
                }} defaultValue={props.recipe.name} />
                <button type="submit">
                    Save
                </button>
            </form>
        </div>
    )

}
export default RecipeAddEdit
