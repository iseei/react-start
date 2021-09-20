import { MenuDataItem as AntdMenuDataItem } from '@ant-design/pro-layout';
import { RouteProps } from 'react-router';

export type MenuDataItem = Pick<AntdMenuDataItem, 'name' | 'icon' | 'path'> & Pick<RouteProps, 'component'> & { default?: boolean, showInMenu?: boolean, children?: MenuDataItem[] }
