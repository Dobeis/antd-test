import React, { Component } from 'react'
import { Layout, Menu, Icon, List, Avatar, Card, Row, Col, Divider } from 'antd'
import './App.css'

const { Meta } = Card
const { Header, Content, Footer, Sider } = Layout

class App extends Component {
  render () {
    return (
      <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0
          }}
        >
          <Menu theme='dark' mode='inline' defaultSelectedKeys={['4']}>
            {[...new Array(30)].map((_, index) => (
              <Menu.Item key={index}>
                <Icon type='user' />
                <span className='nav-text'>nav {index}</span>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Header
            style={{
              textAlign: 'center',
              background: '#fff',
              margin: '5px',
              border: '1px solid red'
            }}
          >
            HEADER
          </Header>
          <Content>
            <Row style={{ margin: '5px' }}>
              <Row>
                <Col>
                  <List
                    bordered
                    style={{
                      background: '#fff',
                      overflow: 'auto',
                      height: '70vh'
                    }}
                  >
                    {[...new Array(50)].map((_, index) => (
                      <List.Item key={index}>
                        <List.Item.Meta
                          avatar={
                            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
                          }
                          title={'Item ' + (index + 1)}
                          description='Ant Design, a design language for background applications, is refined by Ant UED Team'
                        />
                      </List.Item>
                    ))}
                  </List>
                </Col>
              </Row>
              <Divider />
              <Row gutter={48}>
                {[...new Array(8)].map((_, index) => (
                  <Col span={6}>
                    <Card
                      hoverable
                      style={{ width: 240, marginBottom: 15 }}
                      cover={
                        <img
                          alt='example'
                          src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                        />
                      }
                    >
                      <Meta
                        title='Europe Street beat'
                        description='www.instagram.com'
                      />
                    </Card>
                  </Col>
                ))}
              </Row>
            </Row>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
              background: '#fff',
              margin: '5px',
              border: '1px solid red'
            }}
          >
            FOOTER
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default App
