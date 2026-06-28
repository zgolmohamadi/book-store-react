export default function Banner() {
  return (
    <div className="bg-[url('/home-banner-bg.jpeg')] bg-cover bg-center h-96 overflow-hidden">
      <div className='max-w-375 mx-auto w-full flex justify-end items-center h-full'>
        <div className='text-white flex flex-col w-117.5'>
          <span className='text-2xl  mb-5 font-medium text-gray-500'>
            به کتاب آنلاین خوش آمدید
          </span>
          <p className='font-bold leading-11 text-black text-2xl '>
            همین حالا به میلیون‌ها کاربر کتاب آنلاین بپیوندید و تجربه‌ای تازه از
            مطالعه را آغاز کنید.
          </p>
        </div>
      </div>
    </div>
  );
}
