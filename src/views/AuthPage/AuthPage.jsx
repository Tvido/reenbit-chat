import React, { useState } from 'react';
import { Section } from '../../components/Section/Section';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { SignUpForm } from '../../components/SignUpForm/SignUpForm';

export const AuthPage = () => {
  const [view, setView] = useState('login');
  return (
    <Section title="Auth Section">
      <nav>
        <h3
          onClick={() => setView('login')}
          style={{ color: view === 'login' ? '#2798ab' : '' }}
        >
          Login
        </h3>
        <h3
          onClick={() => setView('signup')}
          style={{ color: view === 'signup' ? '#2798ab' : '' }}
        >
          Sign Up
        </h3>
      </nav>
      {view === 'signup' ? <SignUpForm /> : <LoginForm />}
    </Section>
  );
};
