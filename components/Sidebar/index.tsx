import Image from "next/image";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import useSWR from "swr";
import StyledSidebar from "../../styled/layout/Sidebar";
import NewsletterForm from "./NewsletterForm";

const { NEXT_PUBLIC_API_ENDPOINT } = process.env;

export const apiEndpoint = NEXT_PUBLIC_API_ENDPOINT;

const Sidebar: React.FC = () => {
  const fetchSidebarData = async (apiEndpoint: string) => {
    const client = Prismic.client(apiEndpoint);
    const doc = await client.getSingle("sidebar", {});
    return doc;
  };

  const { data, error } = useSWR(apiEndpoint, fetchSidebarData);

  let sidebarData;

  if (data) sidebarData = { ...data.data };

  if (error) return <div>failed to load</div>;
  if (!data) return <div>{""}</div>;

  return (
    <StyledSidebar>
      <Image src={sidebarData.sidebar_img.url} width={300} height={300} />
      <RichText render={sidebarData.sidebar_text_content} />
      <NewsletterForm />
    </StyledSidebar>
  );
};

export default Sidebar;
