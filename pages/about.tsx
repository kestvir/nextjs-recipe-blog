import Image from "next/image";
import { RichText } from "prismic-reactjs";
import { Document as PrismicDoc } from "prismic-javascript/types/documents";
import { Client } from "../prismic-configuration";
import Sidebar from "../components/Sidebar";

export async function getStaticProps({ params }) {
  const client = Client();

  const aboutDoc = await client.getSingle("about", {});
  console.log(aboutDoc);
  return {
    props: {
      aboutDoc,
    },
  };
}

export interface AboutProps {
  aboutDoc: PrismicDoc;
}

const About: React.FC<AboutProps> = ({ aboutDoc }) => {
  const { data } = aboutDoc;

  return (
    <div className="about">
      <div className="gridWithSidebar">
        <div className="about-inner">
          <h2>{data.title[0].text}</h2>
          <Image
            src={data.about_me_img.url}
            width={data.about_me_img.dimensions.width}
            height={data.about_me_img.dimensions.height}
          />
          <RichText render={data.about_me_text} />
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default About;
