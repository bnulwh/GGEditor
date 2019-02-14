import React from 'react';
import { Row, Col } from 'antd';
import GGEditor, { Flow } from '@src';
import EditorMinimap from '../../components/EditorMinimap';
import { FlowContextMenu } from '../../components/EditorContextMenu';
import { FlowToolbar } from '../../components/EditorToolbar';
import { FlowItemPanel } from '../../components/EditorItemPanel';
import { FlowDetailPanel } from '../../components/EditorDetailPanel';
import FlowCustomNode from './shape/nodes/FlowCustomNode';
import FlowCacheNode from './shape/nodes/FlowCacheNode';
import FlowDatabaseNode from './shape/nodes/FlowDatabaseNode';
import FlowIngressNode from './shape/nodes/FlowIngressNode';
import FlowLogicNode from './shape/nodes/FlowLogicNode';
import FlowModelNode from './shape/nodes/FlowModelNode';

import styles from './index.less';
import data from '../../mock/flow-data.json';

class FlowPage extends React.Component {
  renderFlow() {
    return (
      <Flow
        data={data}
        className={styles.flow}
      />
    );
  }

  render() {
    return (
      <GGEditor className={styles.editor}>
        <Row type="flex" className={styles.editorHd}>
          <Col span={24}>
            <FlowToolbar />
          </Col>
        </Row>
        <Row type="flex" className={styles.editorBd}>
          <Col span={4} className={styles.editorSidebar}>
            <FlowItemPanel />
          </Col>
          <Col span={16} className={styles.editorContent}>
            {this.renderFlow()}
          </Col>
          <Col span={4} className={styles.editorSidebar}>
            <FlowDetailPanel />
            <EditorMinimap />
          </Col>
        </Row>
        <FlowCustomNode />
        <FlowCacheNode />
        <FlowDatabaseNode />
        <FlowIngressNode />
        <FlowLogicNode />
        <FlowModelNode />
        <FlowContextMenu />
      </GGEditor>
    );
  }
}

export default FlowPage;
