import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LogoIcon from '../../assets/books-logo-white.svg';
import { useAuth } from '../../context/AuthContext';
import Search from '../Search';

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };
  return (
    <header className='gap-4 flex-wrap px-6 py-5 xl:py-2  bg-[#3751ff] text-center text-xl font-bold min-h-18 my-2.5 rounded-xl flex justify-between items-center max-w-375 mx-1 xl:mx-auto'>
      <h1 className='text-amber-50 flex flex-col items-start justify-center -mt-1 relative pl-9'>
        {' '}
        کتاب آنلاین
        <img
          src={LogoIcon}
          alt='Logo'
          className='w-12 h-12  absolute -top-2.5 -left-1'
        />
        <span className='font-extralight text-xs tracking-wide relative'>
          فروش اینترنتی کتاب{' '}
        </span>
      </h1>
      <Search />
      <div className='text-white ltr gap-3.5 flex items-center order-1'>
        {user ? (
          <>
            <span className='text-xs font-light'>{user.email}</span>

            <Button
              variant='outlined'
              color='inherit'
              size='small'
              onClick={logout}
              sx={{
                px: '12px',
                lineHeight: 1.5,
                fontWeight: 300,
                minWidth: 'auto',
              }}
            >
              خروج
            </Button>
          </>
        ) : (
          <Button
            variant='outlined'
            color='inherit'
            sx={{ minWidth: 'auto', whiteSpace: 'nowrap' }}
            onClick={goToLogin}
          >
            ورود / ثبت نام
          </Button>
        )}
      </div>
    </header>
  );
}
