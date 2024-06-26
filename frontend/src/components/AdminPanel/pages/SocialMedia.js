import React, { useEffect, useState } from 'react';
import { Input, Button, Form, message } from 'antd';

const SocialMedia = () => {
  const [config, setConfig] = useState({});
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch(`${API_URL}/api/admin/ayarlar/sosyalmedya`);
        const data = await response.json();
        setConfig(data);
      } catch (error) {
        message.error('Failed to load configuration');
      }
    };

    fetchConfig();
  }, [API_URL]);

  const handleUpdate = async (type, value) => {
    try {
      const response = await fetch(`${API_URL}/api/admin/ayarlar/guncelle/sosyalmedya`, { 
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ [type]: value }),
      });

      if (response.ok) {
        message.success(`${type} bağlantısı güncellendi.`);
        setConfig({ ...config, [type]: value });
      } else {
        message.error(`${type} güncelleme işlemi başarısız.`);
      }
    } catch (error) {
      message.error(`Bir hata oluştu. ${error.message}`);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Sosyal Medya Bağlantıları</h2>
      <Form layout="vertical">
        <Form.Item label="Email">
          <Input
            placeholder="E-mail"
            value={config.email || ''}
            onChange={(e) => setConfig({ ...config, email: e.target.value })}
            addonAfter={<Button onClick={() => handleUpdate('email', config.email)}>Güncelle</Button>}
          />
        </Form.Item>
        <Form.Item label="Youtube">
          <Input
            placeholder="https://"
            value={config.youtube || ''}
            onChange={(e) => setConfig({ ...config, youtube: e.target.value })}
            addonAfter={<Button onClick={() => handleUpdate('youtube', config.youtube)}>Güncelle</Button>}
          />
        </Form.Item>
        <Form.Item label="TikTok">
          <Input
            placeholder="https://"
            value={config.tiktok || ''}
            onChange={(e) => setConfig({ ...config, tiktok: e.target.value })}
            addonAfter={<Button onClick={() => handleUpdate('tiktok', config.tiktok)}>Güncelle</Button>}
          />
        </Form.Item>
        <Form.Item label="Instagram">
          <Input
            placeholder="https://"
            value={config.instagram || ''}
            onChange={(e) => setConfig({ ...config, instagram: e.target.value })}
            addonAfter={<Button onClick={() => handleUpdate('instagram', config.instagram)}>Güncelle</Button>}
          />
        </Form.Item>
        <Form.Item label="Facebook">
          <Input
            placeholder="https://"
            value={config.facebook || ''}
            onChange={(e) => setConfig({ ...config, facebook: e.target.value })}
            addonAfter={<Button onClick={() => handleUpdate('facebook', config.facebook)}>Güncelle</Button>}
          />
        </Form.Item>
        <Form.Item label="X">
          <Input
            placeholder="https://"
            value={config.x || ''}
            onChange={(e) => setConfig({ ...config, x: e.target.value })}
            addonAfter={<Button onClick={() => handleUpdate('x', config.x)}>Güncelle</Button>}
          />
        </Form.Item>
        <Form.Item label="Discord">
          <Input
            placeholder="https://"
            value={config.discord || ''}
            onChange={(e) => setConfig({ ...config, discord: e.target.value })}
            addonAfter={<Button onClick={() => handleUpdate('discord', config.discord)}>Güncelle</Button>}
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default SocialMedia;