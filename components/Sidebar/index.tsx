// import Image from "next/image";
// import { RichText } from "prismic-reactjs";
// import { useEffect, useState } from "react";
// import { Document as PrismicDoc } from "prismic-javascript/types/documents";
// import { Client } from "../../prismic-configuration";

// const Sidebar: React.FC = () => {
//   const [sidebarData, setSidebarData] = useState<PrismicDoc | null>(null);

//   useEffect(() => {
//     const fetchSidebarData = async () => {
//       const client = Client();
//       const sidebarDoc = await client.getSingle("sidebar", {});
//       return {
//         props: {
//           sidebarDoc,
//         },
//       };
//     };

//     fetchSidebarData();
//   }, [sidebarData]);

//   console.log(sidebarData);

//   return (
//     <div className="sidebar">
//       {/* <h2>{data.title[0].text}</h2>
//       <Image
//         src={data.sidebar_img.url}
//         width={data.sidebar_img.dimensions.width}
//         height={data.sidebar_img.dimensions.height}
//       />
//       <RichText render={data.sidebar_text_content} /> */}
//     </div>
//   );
// };

// export default Sidebar;
