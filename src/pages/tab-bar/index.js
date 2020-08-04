import { TabBar } from 'antd-mobile';
import React from "react";
// import assets
import cooker from "assets/app-tab-bar/cooker.png";
import cookerActive from "assets/app-tab-bar/cooker-active.png";
import location from "assets/app-tab-bar/location.png";
import locationActive from "assets/app-tab-bar/location-active.png";
import menu from "assets/app-tab-bar/menu.png";
import menuActive from "assets/app-tab-bar/menu-active.png";
import more from "assets/app-tab-bar/more.png";
import moreActive from "assets/app-tab-bar/more-active.png";

class AppTabBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: true,
    };
  }



  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#666"
          tintColor="#000"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="美食大全"
            key="cooker"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${cooker}) center center /  21px 21px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${cookerActive}) center center /  21px 21px no-repeat` }}
            />
            }
            selected={this.state.selectedTab === 'cooker'}
            onPress={() => {
              this.setState({
                selectedTab: 'cooker',
              });
            }}
          >

          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${location}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${locationActive}) center center /  21px 21px no-repeat` }}
              />
            }
            title="地图"
            key="map"
            selected={this.state.selectedTab === 'map'}
            onPress={() => {
              this.setState({
                selectedTab: 'map',
              });
            }}

          >

          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${menu}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${menuActive}) center center /  21px 21px no-repeat` }}
              />
            }
            title="菜单"
            key="menu"

            selected={this.state.selectedTab === 'menu'}
            onPress={() => {
              this.setState({
                selectedTab: 'menu',
              });
            }}
          >

          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: `${more}` }}
            selectedIcon={{ uri: `${moreActive}` }}
            title="分类"
            key="category"
            selected={this.state.selectedTab === 'category'}
            onPress={() => {
              this.setState({
                selectedTab: 'category',
              });
            }}
          >

          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
export default AppTabBar