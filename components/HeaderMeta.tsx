import Head from "next/head";

interface HeadMetaProps {
    title?:string;
    description?:string;
    url?:string;
}

function HeadMeta({ title, description, url }:HeadMetaProps){
  return (
    <Head>
      <title>{title || "i-hate-scales"}</title>
      <meta
        name="description"
        content={
          description ||
          "메트로놈과 스케일로 당신의 기타 연주 실력을 늘려보세요"
        }
      />
      <meta name="naver-site-verification" content="77b95540d0de7dd36954dfc23b263766fe14cc62" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || "i-hate-scales"} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || "https://i-hate-scales"} />
      <meta property="og:image" content="https://i-hate-scales/_next/image?url=%2Flogo.jpg&w=1080&q=75" />
      <meta property="og:article:author" content="i-hate-scales" />
    </Head>
  );
};

export default HeadMeta;