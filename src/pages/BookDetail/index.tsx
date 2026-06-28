import {
  AccountCircleOutlined,
  BookmarkAddOutlined,
  CardGiftcardRounded,
  ShareRounded,
  StarBorderRounded,
  StarHalfRounded,
  StarRounded,
} from '@mui/icons-material';
import { Box, Button, Tab, Tabs } from '@mui/material';
import { useState } from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BookDetail() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className='max-w-375 w-full mx-auto px-2 mt-4'>
      <h1 className='mb-5 text-2xl font-black'>عنوان کتاب</h1>
      <div className='flex justify-between flex-wrap'>
        <div className='flex items-center'>
          <div className='flex gap-0.5 ml-1'>
            <StarRounded />
            <StarRounded />
            <StarRounded />
            <StarHalfRounded />
            <StarBorderRounded />
          </div>
          <span className='text-xs'>
            <span className='font-bold'>4.5</span> (امتیاز 16 نفر)
          </span>
        </div>
        <div className='flex gap-3'>
          <BookmarkAddOutlined />
          <CardGiftcardRounded />
          <ShareRounded />
        </div>
      </div>

      <hr className='border-b border-t-0  border-b-gray-200 my-2.5 mb-6'></hr>
      <div className='flex justify-between items-start  flex-col md:flex-row flex-wrap gap-5'>
        <div className='flex gap-5 flex-wrap'>
          <div className='shadow-[0_4px_15px_0_rgba(0,0,0,0.2)] p-4 rounded-2xl'>
            <img
              src='https://placehold.co/260x386/png'
              alt='book-detail'
              className=' block'
            />
          </div>

          <div className='flex flex-col gap-2 pt-2'>
            <div className='flex gap-1 items-center '>
              <span className='text-lg font-medium'>نویسنده: </span>
              <span>نام نویسنده</span>
            </div>
            <div className='flex gap-1 items-center'>
              <span className='text-lg font-medium'>مترجم: </span>
              <span>...</span>
            </div>
            <div className='flex gap-1 items-center'>
              <span className='text-lg font-medium'>ناشر:</span>
              <span>...</span>
            </div>
          </div>
        </div>
        <div className='md:w-80 rounded-2xl bg-blue-50  p-4 flex-1 lg:flex-initial w-full'>
          <div className='flex justify-between items-center mb-5'>
            {' '}
            <span>قیمت</span>
            <span>199,000</span>
          </div>
          <div className='flex flex-col gap-3'>
            <Button className='w-full ' variant='contained' color='success'>
              خرید کتاب الکترونیک
            </Button>
            <Button className='w-full' variant='outlined' color='success'>
              نسخه نمونه رایگان
            </Button>
            <span className='text-center mt-3'>
              {' '}
              ۵۰٪ تخفیف اولین خرید با کد ....
            </span>
          </div>
        </div>
      </div>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: '30px' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab label='معرفی' {...a11yProps(0)} />
          <Tab label='مشخصات' {...a11yProps(1)} />
          <Tab label='نظرات' {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        معرفی کتاب ...
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        مشخصات کتاب الکترونیک ...
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3.5'>
            <div className='flex gap-1'>
              <AccountCircleOutlined fontSize='large' />
              <div className='flex flex-col gap-1 text-xs'>
                <label className='pr-1'>نام کاربر</label>
                <div className='flex -space-x-1'>
                  <StarRounded fontSize='small' color='info' />
                  <StarRounded fontSize='small' color='info' />
                  <StarRounded fontSize='small' color='info' />
                  <StarHalfRounded fontSize='small' color='info' />
                  <StarBorderRounded fontSize='small' color='info' />
                </div>
                <label className='pr-1'>۱۴۰۵/۰۲/۳۰</label>
              </div>
            </div>
            <p className='mt-2 text-sm leading-5'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
          <div>
            <div className='flex gap-1'>
              <AccountCircleOutlined fontSize='large' />
              <div className='flex flex-col gap-1 text-xs'>
                <label className='pr-1'>نام کاربر</label>
                <div className='flex -space-x-1'>
                  <StarRounded fontSize='small' color='info' />
                  <StarRounded fontSize='small' color='info' />
                  <StarRounded fontSize='small' color='info' />
                  <StarHalfRounded fontSize='small' color='info' />
                  <StarBorderRounded fontSize='small' color='info' />
                </div>
                <label className='pr-1'>۱۴۰۵/۰۲/۳۰</label>
              </div>
            </div>
            <p className='mt-2 text-sm leading-5'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
        </div>
      </CustomTabPanel>
    </div>
  );
}
