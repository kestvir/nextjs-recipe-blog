// import Image from "next/image";
// import Link from "next/link";
// import Prismic from "prismic-javascript";
// import ApiSearchResponse from "prismic-javascript/types/ApiSearchResponse";
// import { Client } from "../../../prismic-configuration";
// import Sidebar from "../../../components/Sidebar";
// import RecipeListItem from "../../../components/RecipeListItem";

// export async function getStaticProps({ params }) {
//   const client = Client();
//   //   params.course.charAt(0).toUpperCase() + params.course.slice(1);
//   const postsData = await client.query(
//     Prismic.Predicates.at("document.tags", [params.course])
//   );

//   const tag = params.course;

//   return {
//     props: {
//       postsData,
//       tag,
//     },
//   };
// }

// export async function getStaticPaths() {
//   // const documents = await queryRepeatableDocuments(
//   //   (doc) => doc.type === "blog_post"
//   // );
//   return {
//     paths: [],
//     fallback: true,
//   };
// }

// export interface CourseRecipesProps {
//   postsData: ApiSearchResponse;
//   tag: string;
// }

// const CourseRecipes: React.FC<CourseRecipesProps> = ({ postsData, tag }) => {
//   return (
//     <div className="course">
//       <div className="gridWithSidebar">
//         <div className="course-inner">
//           <h2 className="course__title">{tag} dishes: </h2>
//           <ul className="grid3">
//             {postsData.results.map((post) => {
//               return (
//                 <RecipeListItem
//                   key={post.uid}
//                   post={post}
//                   linkClassName="course__recipeTitle"
//                 />
//               );
//             })}
//           </ul>
//         </div>
//         <Sidebar />
//       </div>
//     </div>
//   );
// };

// export default CourseRecipes;
export interface CourseProps {}

const Course: React.FC<CourseProps> = () => {
  return <h1>Hello</h1>;
};

export default Course;
