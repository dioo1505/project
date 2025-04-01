import devias from "../../assets/devias.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import overview from "../../assets/overview.png"
import account from "../../assets/account.png"
import analytics from "../../assets/analytics.png"
import commerce from "../../assets/e-commerence.png"
import crypto from "../../assets/crypto.png"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="sidebar w-[279px] max-h-[1320px] bg-[#1C2536]">
        <div className='flex items-center justify-between px-[24px] pt-[24px]'>
        <div className='flex items-center gap-[15px]'>
          <img src={devias} alt="devias" />
          <div>
            <h3 className='font-jakarta font-bold text-[16.7px] leading-[20px] text-[#FFFFFF]'>Devias</h3>
            <span className='font-inter text-[14px] font-normal leading-[21.98px] text-[#9DA4AE]'>Production</span>
          </div>
        </div>
          <MdKeyboardArrowDown  className='text-[#6C737F] text-[15px]'/>
        </div>

        {/* routes */}
        <div className='mt-[36.38px] px-[16px] flex flex-col justify-center gap-[20px]'>
        <div className='flex items-center gap-[16px] w-[247.2px] h-[36px] px-[16px]  hover:rounded-[8px] hover:bg-[#252e3e]'>
          <img src={overview} alt="overview" />
          <Link className='font-inter font-semibold text-[14px] leading-[24px] text-[#9DA4AE] hover:text-[#FFFFFF]'>Overview</Link>
        </div>
        <div className='flex items-center gap-[16px] w-[247.2px] h-[36px] px-[16px]  hover:rounded-[8px] hover:bg-[#252e3e]'>
          <img src={analytics} alt="overview" />
          <Link className='font-inter font-semibold text-[14px] leading-[24px] text-[#9DA4AE] hover:text-[#FFFFFF]'>Analytics</Link>
        </div>
        <div className='flex items-center gap-[16px] w-[247.2px] h-[36px] px-[16px]  hover:rounded-[8px] hover:bg-[#252e3e]'>
          <img src={commerce} alt="overview" />
          <Link className='font-inter font-semibold text-[14px] leading-[24px] text-[#9DA4AE] hover:text-[#FFFFFF]'>E-Commerce</Link>
        </div>
        <div className='flex items-center gap-[16px] w-[247.2px] h-[36px] px-[16px]  hover:rounded-[8px] hover:bg-[#252e3e]'>
          <img src={crypto} alt="overview" />
          <Link className='font-inter font-semibold text-[14px] leading-[24px] text-[#9DA4AE] hover:text-[#FFFFFF]'>Crypto</Link>
        </div>
        <div className='flex items-center gap-[16px] w-[247.2px] h-[36px] px-[16px]  hover:rounded-[8px] hover:bg-[#252e3e]'>
          <img src={account} alt="overview" />
          <Link className='font-inter font-semibold text-[14px] leading-[24px] text-[#9DA4AE] hover:text-[#FFFFFF]'>Account</Link>
        </div>
        </div>

        <h3 className='font-bold font-inter text-[12px] leading-[19.92px] text-[#9DA4AE] mt-[26.2px] ml-[23.98px]'>CONCEPTS</h3>
      </div>
      <div className="main">
        <div className="header"></div>
      </div>
    </div>
  );
};

export default Home;
