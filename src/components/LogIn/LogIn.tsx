import { FormEvent, useContext, useState } from 'react';
import { Btn } from '../common/Btn/Btn';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../context/context';
import './LogIn.css';

interface formType {
  email: string;
  password: string;
}

interface UserResponse {
  id: string;
  role: number;
}

export const LogIn = () => {
  const user = useContext(UserContext);
  const [response, setResponse] = useState<UserResponse | null>(null);
  const [form, setForm] = useState<formType>({
    email: '',
    password: '',
  });

  const updateForm = async (key: string, value: any) => {
    setForm(form => ({
      ...form,
      [key]: value,
    }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (
      res.status === 400 ||
      res.status === 401 ||
      res.status === 404 ||
      res.status === 500
    ) {
      alert('Błędny login lub hasło.');
      return;
    } else {
      setResponse(data);
      user.setUser(data);
    }
  };

  if (user) {
    if (response?.role === 1) {
      return <Navigate replace to="/admin" />;
    } else if (response?.role === 2) {
      return <Navigate replace to="/student" />;
    } else if (response?.role === 3) {
      return <Navigate replace to="/hr" />;
    }
  }

  return (
    <div className="authorization_container">
      <div className="authorization_wrapper">
        <img src="/assets/megak.png" alt="MegaK logo" />
        <form onSubmit={onSubmit}>
          <input
            type="email"
            placeholder="E-mail"
            onChange={e => updateForm('email', e.target.value)}
          />
          <input
            type="password"
            placeholder="Hasło"
            onChange={e => updateForm('password', e.target.value)}
          />
          <a href="/reset-password">Zapomniałeś hasła?</a>
          <Btn text="Zaloguj się"></Btn>
        </form>
      </div>
    </div>
  );
};
