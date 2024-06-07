import React from 'react';
import { Form, Input, Button, message } from 'antd';

const Profile = () => {
  const [emailForm] = Form.useForm();
  const [passwordForm] = Form.useForm();

  const updateEmail = async (values) => {
    if (values.newEmail !== values.confirmEmail) {
      message.error('Email addresses do not match!');
      return;
    }

    try {
      const response = await fetch('http://localhost:5001/api/admin/updateEmail', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currentEmail: values.currentEmail,
          newEmail: values.newEmail,
        }),
      });

      if (response.ok) {
        message.success('Email updated successfully');
        emailForm.resetFields();
      } else {
        message.error('Failed to update email');
      }
    } catch (error) {
      message.error(`An error occurred: ${error.message}`);
    }
  };

  const updatePassword = async (values) => {
    if (values.newPassword !== values.confirmPassword) {
      message.error('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch('http://localhost:5001/api/admin/updatePassword', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currentPassword: values.currentPassword,
          newPassword: values.newPassword,
        }),
      });

      if (response.ok) {
        message.success('Password updated successfully');
        passwordForm.resetFields();
      } else {
        message.error('Failed to update password');
      }
    } catch (error) {
      message.error(`An error occurred: ${error.message}`);
    }
  };

  return (
    <div>
      
      <Form
        form={emailForm}
        layout="vertical"
        onFinish={updateEmail}
        className="mb-8"
      >
        <h3 className="text-xl font-semibold mb-4">E-Posta Güncelle</h3>
        <Form.Item
          label="Varsayılan E-Posta"
          name="currentEmail"
          rules={[
            {
              required: true,
              message: 'Please input your current email!',
            },
            {
              type: 'email',
              message: 'Please enter a valid email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="E-Posta"
          name="newEmail"
          rules={[
            {
              required: true,
              message: 'Please input your new email!',
            },
            {
              type: 'email',
              message: 'Please enter a valid email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="E-Posta Onay"
          name="confirmEmail"
          dependencies={['newEmail']}
          rules={[
            {
              required: true,
              message: 'Please confirm your new email!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('newEmail') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two email addresses do not match!'));
              },
            }),
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            E-Posta Güncelle
          </Button>
        </Form.Item>
      </Form>

      <Form
        form={passwordForm}
        layout="vertical"
        onFinish={updatePassword}
      >
        <h3 className="text-xl font-semibold mb-4">Parola Güncelle</h3>
        <Form.Item
          label="Varsayılan Parola"
          name="currentPassword"
          rules={[
            {
              required: true,
              message: 'Please input your current password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Yeni Parola"
          name="newPassword"
          rules={[
            {
              required: true,
              message: 'Please input your new password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Yeni Parola Onay"
          name="confirmPassword"
          dependencies={['newPassword']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your new password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('newPassword') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords do not match!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Parola Güncelle
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Profile;