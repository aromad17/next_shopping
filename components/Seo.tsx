import Head from "next/head";

export interface TitleName {
  title: string;
}

export default function Seo({ title }: TitleName) {
  return (
    <Head>
      {title ? <title>JJAPAO | {title}</title> : <title>SPAO | HOME</title>}
    </Head>
  );
}
