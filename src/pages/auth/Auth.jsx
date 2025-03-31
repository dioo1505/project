import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import samsung from "../../assets/samsung.png";
import visma from "../../assets/visma.png";
import bolt from "../../assets/bolt.png";
import aws from "../../assets/aws.png";
import accenture from "../../assets/accenture.png";
import at from "../../assets/at&t.png";
import devias from "../../assets/MuiBox-root.png";
import { FaArrowLeft } from "react-icons/fa6";

const Auth = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const change = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password) {
      navigate("/Analytics");
    } else {
      alert("Complete all fields 😶‍🌫️");
    }
  };

  return (
    <div className="w-[100%] max-w-[1512px] h-[100vh] flex items-center">
      <div className="flex items-center justify-center max-w-[912px] w-[70%] bg-[#1C2536] px-[64px] h-[100%]">
        <div>
          <h1 className="font-jakarta text-amber-50 text-[33.3px] font-bold leading-[40px] mb-[9px]">
            Welcome to Devias Kit PRO
          </h1>
          <p className="max-w-[771px] text-[16px] font-inter text-[#6C737F] mb-[36px] font-normal leading-[24px]">
            A professional kit that comes with ready-to-use MUI components
            developed with one common goal in mind, help you build faster & beautiful applications.
          </p>
          <Link className="font-inter text-[14px] leading-[21.98px] text-[#FFFFFF] font-medium">
            Join 6,000+ forward-thinking companies:
          </Link>
          <div className="images flex items-center gap-[32px] mt-[23px]">
            <img src={samsung} alt="samsung" />
            <img src={visma} alt="visma" />
            <img src={bolt} alt="bolt" />
            <img src={aws} alt="aws" />
            <img src={accenture} alt="accenture" />
            <img src={at} alt="at&t" />
          </div>
        </div>
      </div>
      <div className="w-[30%]">
        <div className="px-[64px]">
          <img src={devias} alt="devias" />
          <form onSubmit={submit} className="mt-[32px]">
            <div className="flex items-center gap-[8px] mb-[40.98px]">
              <FaArrowLeft />
              <h3 className="text-[#111927] font-inter font-medium text-[14px] leading-[21.98px]">
                Dashboard
              </h3>
            </div>
            <h2 className="font-jakarta text-[23.3px] text-[#111927] leading-[28px] font-bold">
              Register
            </h2>
            <p className="mb-[34.97px] mt-[9.99px] font-inter font-normal text-[14px] leading-[21.98px] text-[#6C737F]">
              Already have an account?  
              <Link to="/auth" className="font-medium text-[#6366F1] pl-[10px]">
                Log in
              </Link>
            </p>

            <input
              onChange={change}
              name="name"
              value={formData.name}
              className="border outline-0 rounded-[8px] border-[#E5E7EB] indent-[12px] w-[472px] h-[55.13px] font-inter font-medium text-[#6C737F] text-[14px] leading-[20.13px] mb-[23.99px]"
              type="text"
              placeholder="Name"
            />
            <input
              onChange={change}
              name="email"
              value={formData.email}
              className="border outline-0 rounded-[8px] border-[#E5E7EB] indent-[12px] w-[472px] h-[55.13px] font-inter font-medium text-[#6C737F] text-[14px] leading-[20.13px] mb-[23.99px]"
              type="text"
              placeholder="Email Address"
            />
            <input
              onChange={change}
              name="password"
              value={formData.password}
              className="border outline-0 rounded-[8px] border-[#E5E7EB] indent-[12px] w-[472px] h-[55.13px] font-inter font-medium text-[#6C737F] text-[14px] leading-[20.13px] mb-[23.99px]"
              type="password"
              placeholder="Password"
            />
            <div className="flex items-center gap-[13px]">
              <input
                required
                name="dio"
                type="checkbox"
                className="w-[16px] outline-0 h-[16px] border-[2px] border-[#6C737F] block"
              />
              <label className="text-[#6C737F] font-inter font-normal text-[14px] leading-[21.98px]" htmlFor="dio">
                I have read the{" "}
                <Link to="/auth" className="text-[#6366F1]">
                  Terms and Conditions
                </Link>
              </label>
            </div>
            <button type="submit" className="w-[472px] h-[48.25px] bg-[#6366F1] rounded-[12px] mt-[36.98px] font-inter text-[15px] leading-[26.25px] font-semibold text-[#FFFFFF]">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
