import { Document as PrismicDoc } from "prismic-javascript/types/documents";
import { RichText } from "prismic-reactjs";

export interface InstructionsProps {
    post: PrismicDoc;
}

const Instructions: React.FC<InstructionsProps> = ({ post }) => {
    return (
        <div className="instructions">
            <h3>Instructions: </h3>
            <RichText render={post.data.instructions} />
        </div>
    );
};

export default Instructions;
