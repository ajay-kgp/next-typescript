import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Button } from "antd";
import Layout from "antd/lib/layout/layout";
import { Header, Content, Footer } from "antd/lib/layout/layout";
import { Typography } from 'antd';

const Home: NextPage = () => {
  const { Title } = Typography;
  return (
    <>
    <Head>
      <title>NextJs + TypeScript</title>
    </Head>
    <Layout style={{height:'100vh'}}>
    <Header style={{color:'#fff'}}>Next+TypeScript Playground</Header>
    <Content style={{ padding: '50px' }}>
      <div className="site-layout-content">
        <Title>Exploring Ant Design, ag-grid and TypeScript</Title>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design Practice | Ajay Yadav</Footer>
  </Layout>
    </>
  );
};

export default Home;
