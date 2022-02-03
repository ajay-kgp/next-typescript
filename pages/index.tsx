import type { NextPage } from "next";
import Head from "next/head";
import Layout from "antd/lib/layout/layout";
import { Header, Content, Footer } from "antd/lib/layout/layout";
import { Typography } from 'antd';
import AgPlayground from "../comps/AgPlayground"

const Home: NextPage = () => {
  const { Title } = Typography;
  return (
    <>
    <Head>
      <title>NextJs + TypeScript</title>
    </Head>
    <Layout>
    <Header style={{color:'#fff'}}>Next+TypeScript Playground</Header>
    <Content style={{ padding: '50px' }}>
      <div className="site-layout-content">
        <Title>Exploring Ant Design, ag-grid and TypeScript</Title>
      </div>
    <AgPlayground/>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design Practice | Ajay Yadav</Footer>
  </Layout>
    </>
  );
};

export default Home;
