import React from 'react';
import { Card } from 'antd';
import { ItemPanel, Item } from '@src';
import styles from './index.less';

class FlowItemPanel extends React.Component {
  render() {
    return (
      <ItemPanel className={styles.itemPanel}>
        <Card bordered={false}>
          <Item
            type="node"
            size = "65"
            shape = "flow-custom-node"
            model={{
              color: '#FA8C16',
              label: '逻辑层',
              labelOffsetY: 40,
              icon: "http://localhost:8080/files/yingyongrongqi-xietongshengchan-.svg",
            }}
            src = "http://localhost:8080/files/yingyongrongqi-xietongshengchan-.svg"
          />
          <Item
            type = "node"
            size = "65"
            shape = "flow-custom-node"
            model = {{
                color: '#1890FF',
                label: '数据库',
                labelOffsetY: 40,
                icon: "http://localhost:8080/files/database.svg",
              }}
            src = "http://localhost:8080/files/database.svg" 
          />
          <Item
          type = "node"
          size = "65"
          shape = "flow-custom-node"
          model = {
            {
              color: '#13C2C2',
              label: '缓存层',
              labelOffsetY: 40,
              icon: "http://localhost:8080/files/redis.svg",
            }
          }
          src = "http://localhost:8080/files/redis.svg" 
            />
          < Item
          type = "node"
          size = "65"
          shape = "flow-custom-node"
          model = {
            {
              color: '#722ED1',
              label: '模型层',
              labelOffsetY: 40,
              icon: "http://localhost:8080/files/model.svg",
            }
          }
          src = "http://localhost:8080/files/model.svg" 
            />
        </Card>
      </ItemPanel>
    );
  }
}

export default FlowItemPanel;
