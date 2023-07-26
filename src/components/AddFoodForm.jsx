import {Input, Button, Form } from "antd";

function AddFoodForm({ addFood }) {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      addFood(values);
      form.resetFields();
    });
  };

  return (
    <Form form={form} onFinish={handleSubmit}>
      <h2>Add Food Entry</h2>

      <Form.Item label="Name" name="name">
        <Input />
      </Form.Item>

      <Form.Item label="Image" name="image" >
        <Input />
      </Form.Item>

      <Form.Item label="Calories" name="calories" >
        <Input type="number" />
      </Form.Item>

      <Form.Item label="Servings" name="servings" >
        <Input type="number" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AddFoodForm;

  