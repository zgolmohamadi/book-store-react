import FormControl from '@mui/material/FormControl';

import InputAdornment from '@mui/material/InputAdornment';

import OutlinedInput from '@mui/material/OutlinedInput';

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Button } from '@mui/material';

export default function Search() {
  return (
    <FormControl
      sx={{ width: { xs: '100%', md: '60ch' } }}
      variant='outlined'
      className='order-3 lg:order-1'
    >
      <div className='flex gap-1 relative '>
        <OutlinedInput
          size='small'
          id='search'
          placeholder='نام کتاب / انتشارات'
          sx={{
            color: 'white', // رنگ متن
            flex: 1,

            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white ', // رنگ border
            },

            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white',
            },

            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white',
            },

            '& input::placeholder': {
              color: 'rgb(255 255 255 / 48%)', // رنگ placeholder

              opacity: 1,
            },
          }}
          startAdornment={
            <InputAdornment position='start' sx={{ color: 'white' }}>
              <SearchRoundedIcon fontSize='medium' color='inherit' />
            </InputAdornment>
          }
          inputProps={{
            'aria-label': 'search',
          }}
        />

        <Button
          variant='outlined'
          sx={{
            color: 'rgba(255,255,255,0.9)',
            fontWeight: '300',
            lineHeight: 1.7,
            borderColor: '#fff',
          }}
        >
          جستجو
        </Button>
      </div>
    </FormControl>
  );
}
