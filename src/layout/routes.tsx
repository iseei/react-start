import React from "react";
import { MenuDataItem } from "../schame/route";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import Hello from "../page/hello";
import { Demo } from "../page/demo";

const routes: MenuDataItem[] = [
  {
    name: '用户管理',
    icon: <UserOutlined />,
    path: '/user_management',
    component: Hello,
    children: []
  },
  {
    name: '数据中心',
    icon: <VideoCameraOutlined />,
    path: '/data_center',
    component: Demo,
  },
  {
    name: '管理中心',
    icon: <UploadOutlined />,
    path: '/management_center',
    component: Demo,
  }
];

export default routes;