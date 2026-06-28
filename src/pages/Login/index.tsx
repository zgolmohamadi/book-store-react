import React, { useState, type JSX } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/books-colors.png';
import { useAuth } from '../../context/AuthContext';

export default function Login(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Placeholder: replace with real auth call
    console.log('Submit', { email, password });
    setTimeout(() => {
      login({
        email,
        password,
      });

      setLoading(false);
      navigate('/');
    }, 600);
  }

  function handleGoogleSignIn() {
    // Placeholder for Google OAuth flow
    console.log('Sign in with Google clicked');
  }

  function handleForgotPassword() {
    if (!email) {
      // prefer guiding user to enter email first
      alert('لطفاً ایمیل خود را وارد کنید تا لینک بازیابی ارسال شود.');
      return;
    }
    // Placeholder: call password-reset API
    console.log('Request password reset for', email);
    alert('درخواست بازیابی رمز برای ' + email + ' ثبت شد .');
  }

  return (
    <div className='ltr flex items-center flex-col justify-center min-h-screen p-6 bg-gray-50'>
      <img src={Logo} alt='Logo' className='w-20 h-20 mx-auto mb-10 -mt-8' />
      <div className='w-full max-w-md bg-white rounded-lg shadow-md p-6'>
        <h2 className='text-2xl  mb-4 text-center font-medium'>ورود</h2>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='block text-sm font-medium mb-1'>ایمیل</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200'
              placeholder='you@example.com'
            />
          </div>

          <div>
            <label className='block text-sm font-medium mb-1'>رمز عبور</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200'
              placeholder='••••••••'
            />
          </div>

          <div className='flex items-center justify-between'>
            <button
              type='submit'
              disabled={loading}
              className='inline-flex  cursor-pointer items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-60'
            >
              {loading ? 'در حال ورود...' : 'ورود'}
            </button>

            <button
              type='button'
              onClick={handleForgotPassword}
              className='text-sm text-indigo-600 hover:underline cursor-pointer'
            >
              فراموشی رمز؟
            </button>
          </div>
        </form>

        <div className='my-4 border-t pt-4 text-center cursor-pointer'>
          <p className='text-sm text-gray-500 mb-3'>یا ورود با</p>
          <button
            onClick={handleGoogleSignIn}
            className='inline-flex items-center justify-center w-full gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100'
          >
            <svg
              width='18'
              height='18'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M21.35 11.1H12v2.8h5.35c-.23 1.4-1.02 2.58-2.17 3.37v2.8h3.5c2.05-1.88 3.22-4.7 3.22-8.97 0-.6-.05-1.18-.15-1.75z'
                fill='#4285F4'
              />
              <path
                d='M12 22c2.7 0 4.97-.88 6.63-2.38l-3.5-2.8c-.97.65-2.22 1.03-3.13 1.03-2.4 0-4.44-1.62-5.17-3.8H2.24v2.39C3.9 19.9 7.74 22 12 22z'
                fill='#34A853'
              />
              <path
                d='M6.83 13.05A6.98 6.98 0 016.5 12c0-.33.03-.66.09-.98V8.63H2.24A9.98 9.98 0 002 12c0 1.6.38 3.12 1.06 4.47l3.77-3.42z'
                fill='#FBBC05'
              />
              <path
                d='M12 6.5c1.47 0 2.79.5 3.83 1.48l2.87-2.86C16.94 3.5 14.67 2.5 12 2.5 7.74 2.5 3.9 4.6 2.24 8.63l4.35 3.39C7.56 8.12 9.6 6.5 12 6.5z'
                fill='#EA4335'
              />
            </svg>
            ورود با گوگل
          </button>
        </div>
      </div>
    </div>
  );
}
