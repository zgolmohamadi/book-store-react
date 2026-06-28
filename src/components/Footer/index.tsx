import { Instagram, LinkedIn, Twitter, WhatsApp } from '@mui/icons-material';

export default function Footer() {
  return (
    <div className='max-w-375 w-full mx-auto border-t border-t-[#3751ff] flex justify-between p-5'>
      <span className='text-gray-600'>
        © کلیه حقوق این سایت محفوظ و متعلق به فروشگاه اینترنتی کتاب ...است.
      </span>
      <span className='flex gap-2'>
        <WhatsApp color='action' />
        <Instagram color='action' />
        <Twitter color='action' />
        <LinkedIn color='action' />
      </span>
    </div>
  );
}
