import Image from "next/image";
import { RichText } from "prismic-reactjs";
import { Document as PrismicDoc } from "prismic-javascript/types/documents";
import { Client } from "../prismic-configuration";
import StyledAbout from "../styled/pages/About";
import { StyledTitle } from "../styled/components/Title";

export async function getStaticProps({ params }) {
  const client = Client();

  const aboutDoc = await client.getSingle("about", {});
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
    <StyledAbout>
      <div className="about-inner">
        <StyledTitle>Apie mane:</StyledTitle>
        <Image
          src={data.about_me_img.url}
          width={data.about_me_img.dimensions.width}
          height={data.about_me_img.dimensions.height}
        />
        <RichText render={data.about_me_text} />
      </div>
    </StyledAbout>
  );
};

export default About;
