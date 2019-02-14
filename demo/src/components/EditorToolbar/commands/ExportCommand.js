import React from 'react';
import { RegisterCommand } from '@src';

class ExportCommand extends React.Component {
  render() {
    const config = {
      queue: true, // 命令是否进入队列，默认是 true
      // 命令是否可用
      enable(/* editor */) {
        return true;
      },
      // 正向命令
      execute(editor) {
        const page = editor.getCurrentPage();
        const data = page.save();
        const { nodes, edges, groups } = data;

        console.log(JSON.stringify(data, null, '\t'));
        alert("data:" + JSON.stringify(data, null, '\t'));
        alert("nodes:" + JSON.stringify(nodes, null, '\t'));
        alert("edges:" + JSON.stringify(edges, null, '\t'));
        alert("groups:" + JSON.stringify(groups, null, '\t'));
        
      },
      // 反向命令
      back(/* editor */) {

      },
    };

    return <RegisterCommand name="export" config={config} />;
  }
}

export default ExportCommand;
