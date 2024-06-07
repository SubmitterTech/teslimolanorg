import React from 'react';
import { Input, Button, Form } from 'antd';

const SocialMedia = () => {
  const handleUpdate = (type) => {
    // Update logic for each social media platform
    console.log(`Updating ${type}`);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <Form layout="vertical">
        <Form.Item label="Email">
          <Input placeholder="E-mail" addonAfter={<Button onClick={() => handleUpdate('Email')}>Güncelle</Button>} />
        </Form.Item>
        <Form.Item label="Youtube">
          <Input placeholder="https://" addonAfter={<Button onClick={() => handleUpdate('Youtube')}>Güncelle</Button>} />
        </Form.Item>
        <Form.Item label="TikTok">
          <Input placeholder="https://" addonAfter={<Button onClick={() => handleUpdate('TikTok')}>Güncelle</Button>} />
        </Form.Item>
        <Form.Item label="Instagram">
          <Input placeholder="https://" addonAfter={<Button onClick={() => handleUpdate('Instagram')}>Güncelle</Button>} />
        </Form.Item>
        <Form.Item label="Facebook">
          <Input placeholder="https://" addonAfter={<Button onClick={() => handleUpdate('Facebook')}>Güncelle</Button>} />
        </Form.Item>
        <Form.Item label="X">
          <Input placeholder="https://" addonAfter={<Button onClick={() => handleUpdate('X')}>Güncelle</Button>} />
        </Form.Item>
        <Form.Item label="Discord">
          <Input placeholder="https://" addonAfter={<Button onClick={() => handleUpdate('Discord')}>Güncelle</Button>} />
        </Form.Item>
      </Form>
    </div>
  );
};

export default SocialMedia;