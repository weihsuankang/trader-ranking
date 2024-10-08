import React, { useState } from 'react';

const LoginPage = () => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 後續接入 API 調用
    console.log('Login Submitted:', { account, password });
  };

  return (
    <div>
      <h1>登入</h1>
      <form onSubmit={handleSubmit}>
        <label>帳號：</label>
        <input type="text" value={account} onChange={(e) => setAccount(e.target.value)} />
        <label>密碼：</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">登入</button>
      </form>
    </div>
  );
};

export default LoginPage;
