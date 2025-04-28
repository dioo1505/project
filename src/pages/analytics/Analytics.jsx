import { FaPlus } from "react-icons/fa6";
import { IoArrowForwardOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";
import { ChartContainer } from "@mui/x-charts/ChartContainer";
// import Example from "../../components/pieChart/PieChart";
import Example from "../../components/hightligh/Highligh";

import {
  LinePlot,
  MarkPlot,
  lineElementClasses,
  markElementClasses,
} from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";
import photoUs from "../../assets/us.png";
import photoUk from "../../assets/uk.png";
import photoRu from "../../assets/ru.png";
import photoC from "../../assets/c.png";
import photoG from "../../assets/g.png";
import photoS from "../../assets/flag-de.svg.png";

const pData = [1400, 9808, 2500, 6508, 4800, 9800, 2500];
const aData = [1400, 7508, 2600, 6508, 4500, 4500, 2500];
const bData = [1400, 7208, 4200, 200, 9800, 5600, 2500];

const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

const trafficData = [
  { source: "Source 1", value: 70, fullValue: 80 },
  { source: "Source 2", value: 60, fullValue: 80 },
  { source: "Source 3", value: 50, fullValue: 80 },
  { source: "Source 4", value: 40, fullValue: 80 },
  { source: "Source 5", value: 55, fullValue: 80 },
  { source: "Source 6", value: 65, fullValue: 80 },
  { source: "Source 7", value: 45, fullValue: 80 },
];

const valueFormatter = (value) => `${value}`;

const chartSetting = {
  width: 540,
  height: 300,
};

// Country data
const data = [
  {
    country: "United States",
    value: 31200,
    seo: 40,
    flag: photoUs,
  },
  { country: "United Kingdom", value: 12700, seo: 47, flag: photoUk },
  { country: "Russia", value: 10360, seo: 65, flag: photoRu },
  { country: "Canada", value: 5749, seo: 23, flag: photoC },
  { country: "Germany", value: 2932, seo: 46, flag: photoG },
  { country: "Spain", value: 200, seo: 56, flag: photoS },
];
import link from "../../assets/Link → SVG.png";

const analyticsData = [
  {
    path: "/",
    pageViews: 95847,
    uniqueVisitors: 8584,
    bounceRate: "16%",
    image: link,
  },
  {
    path: "/auth/login",
    pageViews: 7500,
    uniqueVisitors: 648,
    bounceRate: "5%",
    image: link,
  },
  {
    path: "/dashboard",
    pageViews: 85406,
    uniqueVisitors: 568,
    bounceRate: "2%",
    image: link,
  },
  {
    path: "/blog/top-5-react-frameworks",
    pageViews: 75050,
    uniqueVisitors: 12322,
    bounceRate: "12%",
    image: link,
  },
  {
    path: "/blog/understand-programming-principles",
    pageViews: 68003,
    uniqueVisitors: 11645,
    bounceRate: "10%",
    image: link,
  },
  {
    path: "/blog/design-patterns",
    pageViews: 49510,
    uniqueVisitors: 10259,
    bounceRate: "8%",
    image: link,
  },
];

const Analytics = () => {
  return (
    <div>
      <div className="navbar flex items-center justify-between px-[16px]">
        <h1 className="text-[#111927] font-jakarta font-bold text-[33.3px] leading-[40px]">
          Analytics
        </h1>
        <div className="flex items-center gap-[8px] w-[171.72px] h-[40.5px] rounded-[12px] bg-[#6366F1] px-[16px] py-[10.25px] text-[#fff]">
          <FaPlus />
          <button className="border-0 inter font-semibold text-[14px] leading-[24.5px]">
            New Dashboard
          </button>
        </div>
      </div>

      <div className="p-[16px] flex gap-[30px]">
        <div className="flex flex-col items-start w-[370.33px] h-[200.55px] rounded-[20px] border-1 border-blue-200 border-solid">
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-start pl-[24px]">
              <span className="font-inter text-[14px] font-normal leading-[21px] text-[#6C737F]">
                Impressions
              </span>
              <b className="font-jakarta text-[#111927] text-[23px] font-bold leading-[28px] mt-[8px]">
                36,6K
              </b>
            </div>
            <ChartContainer
              width={280}
              height={160}
              series={[{ type: "line", data: pData }]}
              xAxis={[{ scaleType: "point", data: xLabels }]}
              sx={{
                [`& .${lineElementClasses.root}`]: {
                  stroke: "#6366F1",
                  strokeWidth: 3,
                },
                [`& .${markElementClasses.root}`]: {
                  stroke: "#6366F1",
                  scale: "0.1",
                  fill: "#6366F1",
                  strokeWidth: 2,
                },
              }}
              disableAxisListener
            >
              <LinePlot />
              <MarkPlot />
            </ChartContainer>
          </div>
          <div className="flex items-center gap-[8px] pl-[20px]">
            <button className="text-[#111927] font-inter font-semibold leading-[22px] text-[13px]">
              See sources
            </button>
            <IoArrowForwardOutline className="text-[#111927] text-[18px]" />
          </div>
        </div>

        <div className="flex flex-col items-start w-[373.33px] h-[200.55px] rounded-[20px] border-1 border-blue-200 border-solid">
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-start pl-[24px]">
              <span className="font-inter text-[14px] font-normal leading-[21px] text-[#6C737F]">
                Engagements
              </span>
              <b className="font-jakarta text-[#111927] text-[23px] font-bold leading-[28px] mt-[8px]">
                19K
              </b>
            </div>
            <ChartContainer
              width={280}
              height={160}
              series={[{ type: "line", data: aData }]}
              xAxis={[{ scaleType: "point", data: xLabels }]}
              sx={{
                [`& .${lineElementClasses.root}`]: {
                  stroke: "#6366F1",
                  strokeWidth: 3,
                },
                [`& .${markElementClasses.root}`]: {
                  stroke: "#6366F1",
                  scale: "0.1",
                  fill: "#6366F1",
                  strokeWidth: 2,
                },
              }}
              disableAxisListener
            >
              <LinePlot />
              <MarkPlot />
            </ChartContainer>
          </div>
          <div className="flex items-center gap-[8px] pl-[20px]">
            <button className="text-[#111927] font-inter font-semibold leading-[22px] text-[13px]">
              See traffic
            </button>
            <IoArrowForwardOutline className="text-[#111927] text-[18px]" />
          </div>
        </div>

        <div className="flex flex-col items-start w-[373.33px] h-[200.55px] rounded-[20px] border-1 border-blue-200 border-solid">
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-start pl-[24px]">
              <span className="font-inter text-[14px] font-normal leading-[21px] text-[#6C737F]">
                Spent
              </span>
              <b className="font-jakarta text-[#111927] text-[23px] font-bold leading-[28px] mt-[8px]">
                $41.2K
              </b>
            </div>
            <ChartContainer
              width={280}
              height={160}
              series={[{ type: "line", data: bData }]}
              xAxis={[{ scaleType: "point", data: xLabels }]}
              sx={{
                [`& .${lineElementClasses.root}`]: {
                  stroke: "#6366F1",
                  strokeWidth: 3,
                },
                [`& .${markElementClasses.root}`]: {
                  stroke: "#6366F1",
                  scale: "0.1",
                  fill: "#6366F1",
                  strokeWidth: 2,
                },
              }}
              disableAxisListener
            >
              <LinePlot />
              <MarkPlot />
            </ChartContainer>
          </div>
          <div className="flex items-center gap-[8px] pl-[20px]">
            <button className="text-[#111927] font-inter font-semibold leading-[22px] text-[13px]">
              See campaigns
            </button>
            <IoArrowForwardOutline className="text-[#111927] text-[18px]" />
          </div>
        </div>
      </div>

      <div className="traffic px-4 py-4 flex justify-between">
        <div className="sources bg-white p-4 rounded-xl shadow-md w-[778px]">
          <h2 className="font-jakarta text-lg font-bold text-[#111927]">
            Traffic Sources
          </h2>
          <BarChart
            dataset={trafficData}
            yAxis={[
              {
                scaleType: "band",
                dataKey: "source",
              },
            ]}
            xAxis={[
              {
                scaleType: "linear",
                min: 0,
                max: 80,
                tickValues: [0, 20, 40, 60, 80],
                tickMinStep: 20,
              },
            ]}
            series={[
              {
                dataKey: "fullValue",
                color: "#E5E7EB", // Och kulrang background
                stack: "total", // Stack qilish
              },
              {
                dataKey: "value",
                valueFormatter,
                color: "#6366F1", // Ko‘k rang
                stack: "", // Stack qilish
              },
            ]}
            layout="horizontal"
            {...chartSetting}
            sx={{
              "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
                display: "none",
              },
              "& .MuiChartsAxis-left .MuiChartsAxis-tick": { display: "none" },
              "& .MuiChartsAxis-left .MuiChartsAxis-line": { display: "none" },
              "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
                display: "none",
              },
              "& .MuiChartsAxis-bottom .MuiChartsAxis-tick": {
                display: "none",
              },
              "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
                fontSize: "12px",
                fill: "#6C737F",
              },
              "& .MuiBarElement-root": {
                rx: 5,
                ry: 5,
                transform: "scaleY(1.5)", // Barlarni balandroq qilish
              },
              "& .MuiBarElement-root:nth-of-type(odd)": {
                opacity: 1, // Och kulrang qism (fullValue)
              },
              "& .MuiBarElement-root:nth-of-type(even)": {
                opacity: 1, // Ko‘k qism (value)
              },
            }}
          />
        </div>
        <div className="country w-[373.33px] h-[487.8px] px-[24px] py-[32px] rounded-[20px] shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="text-[#111927] font-jakarta font-bold text-[16.7px] leading-[20px]">
              Visits by Country
            </h3>
            <IoIosInformationCircleOutline className="text-[24px]" />
          </div>
          <div className="flex items-center mt-[10px] bg-[#F8F9FA] w-[100%]">
            <div className="w-[188.36px] h-[48px] flex items-center px-[16px] py-[16.4px]">
              <span className="font-inter font-semibold text-[12px] leading-[0.5px] text-[#2F3746]">
                Country
              </span>
            </div>
            <div className="w-[114.68px] h-[48px] px-[16px] py-[16.4px]">
              <div className="value flex items-center gap-[3.66px]">
                <span className="font-inter font-semibold text-[12px] leading-[0.5px] text-[#2F3746]">
                  Value
                </span>
                <IoIosArrowRoundDown />
              </div>
            </div>
            <div className="w-[70.29px] h-[48px] px-[16px] py-[11px] mb-[8px]">
              <span className="font-inter font-semibold text-[12px] leading-[0.5px] text-[#2F3746]">
                SEO
              </span>
            </div>
          </div>
          {/* Data */}
          <div className="mt-4 w-full">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between  border-b border-gray-200"
              >
                <div className="flex items-center w-[150px] h-[50px]">
                  <img
                    src={item.flag}
                    alt={`${item.country} flag`}
                    className="w-5 h-5 mr-2"
                  />
                  <span className="font-inter text-[14px] text-[#111927] truncate">
                    {item.country}
                  </span>
                </div>
                <span className="font-inter text-[14px] text-[#111927] w-[80px] text-right">
                  {item.value.toLocaleString()}
                </span>
                <span className="font-inter text-[14px] text-[#111927] w-[50px] text-right">
                  {item.seo}%
                </span>
              </div>
            ))}
            <button className="mt-4 flex items-center gap-1 text-[#111927] font-inter text-[14px]">
              See more <IoArrowForwardOutline className="text-[#111927]" />
            </button>
          </div>
        </div>
      </div>

      <div className="most px-4 py-4 flex justify-between">
        <div className="visited bg-white p-4 rounded-xl shadow-md w-[778px]">
          <div className="flex items-center justify-between">
            <h3 className="text-[#111927] font-jakarta font-bold text-[16.7px] leading-[20px]">
              Most Visited Pages
            </h3>
            <IoIosInformationCircleOutline className="text-[24px]" />
          </div>

          <div className="flex items-center mt-[10px] bg-[#F8F9FA]">
            <div className="w-[373px] h-[42px] flex items-center px-[16px] py-[13px]">
              <span className="uppercase font-inter font-semibold text-[12px] leading-[0.5px] text-[#2F3746]">
                Page Name
              </span>
            </div>
            <div className="w-[98px] h-[42px] px-[16px] py-[9px]">
              <span className="uppercase font-inter font-semibold text-[12px] leading-[0.5px] text-[#2F3746]">
                Visitors
              </span>
            </div>
            <div className="w-[175px] h-[42px] px-[16px] py-[13px] mb-[8px]">
              <span className="uppercase font-inter font-semibold text-[12px] leading-[0.5px] text-[#2F3746]">
                Unique page visits
              </span>
            </div>
            <div className="w-[131px] h-[42px] px-[16px] py-[13px] mb-[8px]">
              <span className="uppercase font-inter font-semibold text-[12px] leading-[0.5px] text-[#2F3746]">
                Bounce rate
              </span>
            </div>
          </div>

          <div className="w-full">
            {/* Ma'lumot qatorlari */}
            {analyticsData.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-gray-200 py-2"
              >
                <div className="flex items-center w-[373px] h-[50px] pl-[16px]">
                  <img
                    src={item.image}
                    alt={`${item.path} icon`}
                    className="w-5 h-5 mr-2"
                    onError={(e) =>
                      (e.target.src =
                        "https://via.placeholder.com/20?text=Error")
                    }
                  />
                  <span className="font-inter text-[14px] text-[#111927] leading-[21px] pl-[16px]">
                    {item.path}
                  </span>
                </div>
                <span className="font-inter text-[14px] text-[#111927] w-[98px] leading-[21px] text-center pl-[16px]">
                  {item.pageViews.toLocaleString()}
                </span>
                <span className="font-inter text-[14px] text-[#111927] w-[175px] leading-[21px] text-center pl-[16px]">
                  {item.uniqueVisitors.toLocaleString()}
                </span>
                <span className="font-inter text-[14px] text-[#111927] w-[131px] leading-[21px] text-center pl-[16px]">
                  {item.bounceRate}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="social w-[373.33px] h-[375.15px] px-[24px] py-[32px] rounded-[20px] shadow-md">
          <div className="flex items-center justify-between mb-[24px]">
            <h3 className="text-[#111927] font-jakarta font-bold text-[16.7px] leading-[20px]">
              Social Media Sources
            </h3>
            <IoIosInformationCircleOutline className="text-[24px]" />
          </div>
          <div className="flex justify-center mt-4">
            <Example />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
