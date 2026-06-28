import business from '../../assets/business-economics.png';
import fiction from '../../assets/fiction.png';
import health from '../../assets/health-fitness.png';
import history from '../../assets/history.png';
import science from '../../assets/science.png';
import selfHelp from '../../assets/self-help.png';
import youngAdultFivtion from '../../assets/young-adult-fiction.png';

export default function Category() {
  return (
    <ul className='max-w-375 mx-auto flex justify-center gap-12 mt-10 flex-wrap'>
      <li className='group'>
        <span className='flex gap-2 items-center justify-center flex-col'>
          <img
            src={fiction}
            className='w-16 h-16 transition-all duration-300 group-hover:filter-[drop-shadow(0_.1rem_.4rem_#0003)] group-hover:scale-105'
          />
          <span className='text-sm font-bold'>داستان</span>
        </span>
      </li>
      <li className='group'>
        <span className='flex gap-2 items-center justify-center flex-col'>
          <img
            src={youngAdultFivtion}
            className='w-16 h-16 transition-all duration-300 group-hover:filter-[drop-shadow(0_.1rem_.4rem_#0003)] group-hover:scale-105'
          />
          <span className='text-sm font-bold'>داستان تخیلی</span>
        </span>
      </li>
      <li className='group'>
        <span className='flex gap-2 items-center justify-center flex-col'>
          <img
            src={business}
            className='w-16 h-16 transition-all duration-300 group-hover:filter-[drop-shadow(0_.1rem_.4rem_#0003)] group-hover:scale-105'
          />
          <span className='text-sm font-bold'>تجارت و اقتصاد</span>
        </span>
      </li>
      <li className='group'>
        <span className='flex gap-2 items-center justify-center flex-col'>
          <img
            src={selfHelp}
            className='w-16 h-16 transition-all duration-300 group-hover:filter-[drop-shadow(0_.1rem_.4rem_#0003)] group-hover:scale-105'
          />
          <span className='text-sm font-bold'>خودیاری</span>
        </span>
      </li>
      <li className='group'>
        <span className='flex gap-2 items-center justify-center flex-col'>
          <img
            src={health}
            className='w-16 h-16 transition-all duration-300 group-hover:filter-[drop-shadow(0_.1rem_.4rem_#0003)] group-hover:scale-105'
          />
          <span className='text-sm font-bold'>سلامت و تناسب اندام</span>
        </span>
      </li>
      <li className='group'>
        <span className='flex gap-2 items-center justify-center flex-col'>
          <img
            src={history}
            className='w-16 h-16 transition-all duration-300 group-hover:filter-[drop-shadow(0_.1rem_.4rem_#0003)] group-hover:scale-105'
          />
          <span className='text-sm font-bold'>تاریخ</span>
        </span>
      </li>
      <li className='group block'>
        <span className='flex gap-2 items-center justify-center flex-col'>
          <img
            src={science}
            className='w-16 h-16 transition-all duration-300 group-hover:filter-[drop-shadow(0_.1rem_.4rem_#0003)] group-hover:scale-105'
          />
          <span className='text-sm font-bold'>علمی و پزشکی</span>
        </span>
      </li>
    </ul>
  );
}
