
import CustomImage from "./CustomImage"

export default function RecipeCard({recipe}){

    return(
        <div className="recipe-card">
            <CustomImage ImgSrc={recipe.image} pt="65%"/>
            <div className="recipe-card-info">
                <img className="author-name" src={recipe.authorImg} alt=""/>
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">Lorem Ipsum is simply a dummy text of the prinnting and typesetting industry</p>
                <a className="view-btn" href="#!">VIEW RECIPE</a>
            </div>
        </div>
    )
}