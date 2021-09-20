import { Layout, Menu } from 'antd';
import React, { Component, PureComponent } from 'react';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import style from './style.less';
import routes from './routes';
import { MenuDataItem } from '../schame/route';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import NotificationOutlined from '@ant-design/icons/lib/icons/NotificationOutlined';

const { Sider, Header, Content } = Layout;

interface Props extends RouteComponentProps {

}

interface State {
  collapsed: boolean,
  selectedMenu?: MenuDataItem,
}

export default class mainLayout extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  componentDidMount() {
    this.selectMenuByUrl();
  }

  toggle = () => {
    this.setState({ collapsed: !this.state.collapsed });
  }

  selectMenuByUrl = () => {
    const { match, location } = this.props;
    const urlPath = location.pathname;
    const prefix = `${match.path}`;
    let selectedMenu: MenuDataItem = routes.find(d => `${prefix}${d.path}` === urlPath);
    this.setState({ selectedMenu });
  };

  handleClickMenu = (menu: MenuDataItem) => {
    const { match } = this.props;
    const prefix = `${match.path}`;
    this.setState({ selectedMenu: menu });
    this.props.history.push(`${prefix}${menu.path}`);
  }

  render() {
    const { match } = this.props;
    const { selectedMenu } = this.state;
    const selectedKeys = selectedMenu ? [selectedMenu.path] : undefined;
    const prefix = `${match.path}`;

    return (
      <Layout className={style.mainLayout}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} className={style.mainSider}>
          <div className={style.logo} />
          <Menu theme="light" mode="inline" selectedKeys={selectedKeys}>
            {
              routes.map(d => (
                <Menu.Item key={d.path} icon={d.icon} onClick={() => this.handleClickMenu(d)}>
                  {d.name}
                </Menu.Item>
              ))
            }
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className={style.mainHeader}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className={style.mainContent}
          >
            <Switch>
              {
                routes.map((d) => {
                  const path = `${prefix}${d.path}`;
                  return <Route path={path} key={path} component={d.component} />
                })
              }
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
