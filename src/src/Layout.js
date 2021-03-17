import React from "react";
import { Layout, Menu, Breadcrumb, Input, Space } from "antd";
import { A } from "hookrouter";
import {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
} from "@ant-design/icons";
import { Row, Col, Divider } from 'antd';

const { Search } = Input;

const { Header, Content } = Layout;
const { SubMenu } = Menu;

const onSearch = value => console.log(value);

const Home = (props) => {
    return (
        <Layout style={{ height: "100vh" }}>


            <Layout>
              <Header style={{ height: "100px" }}>
                <Row justify="space-between">
                  <Col className="gutter-row" span={6}>
                <div style={{width:"25vh"}}></div>
                  </Col>
                  <Col className="gutter-row" span={10} >
                <div>
                  <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                    style={{padding:"30px 0"}}
                  />
                </div>
                </Col>
                <Col className="gutter-row" span={6}>
                <div style={{width:"25vh"}}></div>
                </Col>
                </Row>
              </Header>
                <Layout style={{ padding: "0 24px 24px" }}>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {props.children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default Home;
