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

      <Form.Item label="Name" name="name" rules={[{ required: true, message: "Please enter the name of the food" }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Image" name="image" rules={[{ required: true, message: "Please enter the image URL" }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Calories" name="calories" rules={[{ required: true, message: "Please enter the number of calories" }]}>
        <Input type="number" />
      </Form.Item>

      <Form.Item label="Servings" name="servings" rules={[{ required: true, message: "Please enter the number of servings" }]}>
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

  