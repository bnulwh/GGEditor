import React from 'react';
import { RegisterNode } from '@src';

class FlowCustomNode extends React.Component {
  render() {
    const config = {
      draw(item) {
        const keyShape = this.drawKeyShape(item);

        // draw label
        this.drawLabel(item);

        // draw image
        const group = item.getGraphicGroup();
        const model = item.getModel();

        group.addShape('image', {
          attrs: {
            x: -32,
            y: -32,
            img: model.icon,
          },
        });

        return keyShape;
      },
    };

    return <RegisterNode name="flow-custom-node" config={config} />;
  }
}

export default FlowCustomNode;
