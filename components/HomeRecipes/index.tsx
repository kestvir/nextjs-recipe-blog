import HomeRecipe from "./HomeRecipe";
import ApiSearchResponse from "prismic-javascript/types/ApiSearchResponse";

export interface HomeRecipesProps {
    postsData: ApiSearchResponse;
}

const HomeRecipes: React.FC<HomeRecipesProps> = ({ postsData }) => {
    return (
        <div >
            <h2 className="home__title">Latest recipes</h2>
            <ul className="grid">
                {postsData.results.map((post) => {
                    console.log(post);
                    return <HomeRecipe key={post.uid} post={post} />;
                })}
            </ul>
        </div>
    );
};

export default HomeRecipes;
