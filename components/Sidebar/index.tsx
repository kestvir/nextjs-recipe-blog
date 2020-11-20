import Image from "next/image";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import useSWR from "swr";

const { NEXT_PUBLIC_API_ENDPOINT } = process.env;

export const apiEndpoint = NEXT_PUBLIC_API_ENDPOINT;

const Sidebar: React.FC = () => {
  const fetchSidebarData = async (apiEndpoint: string) => {
    const client = Prismic.client(apiEndpoint);
    const doc = await client.getSingle("sidebar", {});
    console.log(doc);
    return doc;
  };

  const { data, error } = useSWR(apiEndpoint, fetchSidebarData);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>{""}</div>;

  return (
    <div className="sidebar">
      <Image
        src={data.data.sidebar_img.url}
        width={data.data.sidebar_img.dimensions.width}
        height={data.data.sidebar_img.dimensions.height}
      />
      <RichText render={data.data.sidebar_text_content} />
    </div>
  );
};

export default Sidebar;
