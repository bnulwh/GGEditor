import React from 'react';
// import ColorPicker from 'rc-color-picker';
// import 'rc-color-picker/assets/index.css';
import { Card, Form, Input } from 'antd';
import { withPropsAPI } from '@src';

const { Item } = Form;

const inlineFormItemLayout = {
  labelCol: {
    sm: { span: 6 },
  },
  wrapperCol: {
    sm: { span: 18 },
  },
};

class NodeDetail extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const { form, propsAPI } = this.props;
    const { getSelected, executeCommand, update } = propsAPI;

    form.validateFieldsAndScroll((err, values) => {
      if (err) {
        return;
      }

      const item = getSelected()[0];

      if (!item) {
        return;
      }
      console.log(JSON.stringify(values));
      executeCommand(() => {
        update(item, {
          ...values,
        });
      });
    });
  }

  render() {
    const { form, propsAPI } = this.props;
    const { getFieldDecorator } = form;
    const { getSelected } = propsAPI;
    const item = getSelected()[0];

    if (!item) {
      return null;
    }

    console.log(JSON.stringify(item.getModel()));
    const { label } = item.getModel();
    return (
      <Card type="inner" title="节点属性" bordered={false}>
        <Form onSubmit={this.handleSubmit}>
          <Item
            label="名称"
            {...inlineFormItemLayout}
          >
            {
              getFieldDecorator('label', {
                initialValue: label,
              })(<Input onBlur={this.handleSubmit} />)
            }
          </Item>
          {/* <Item
            label="颜色"
            {...inlineFormItemLayout}
          >
            {
              getFieldDecorator('label', {
                initialValue: color,
              })(<ColorPicker onChange={this.handleSubmit} />)
            }
          </Item>
          <div>
          颜色:
            <ColorPicker
              animation="slide-up"
              color={color}
              className="color-picker"
              onClose={ev =>{
                this.handleSubmit({'color': ev.color});
                }}
              >
              <span className="react-custom-trigger"> __  </span>
            </ColorPicker>
          </div> */}
        </Form>
      </Card>
    );
  }
}

export default Form.create()(withPropsAPI(NodeDetail));
