import { Button, DatePicker } from "antd";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
import localeData from "dayjs/plugin/localeData";
import weekOfYear from "dayjs/plugin/weekOfYear";
import weekYear from "dayjs/plugin/weekYear";
import weekday from "dayjs/plugin/weekday";
import { useState } from "react";
import InfoCard from "../InfoCard/InfoCard";

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);

export default function Overview() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const { RangePicker } = DatePicker;

  const handleChangeDebut = (range: any) => {
    setStartDate(range[0].format());
    setEndDate(range[1].format());
  };

  const cardInfo = [
    {
      title: "Gold Bought",
      img: "img",
      gold: "0 gms",
      worth: "worth ₹ 0",
      txn: "0 txns",
    },
    {
      title: "Gold Sold",
      img: "img",
      gold: "0 gms",
      worth: "worth ₹ 0",
      txn: "0 txns",
    },
    {
      title: "Gold Delivered",
      img: "img",
      gold: "0 gms",
      worth: "worth ₹ 0",
      txn: "0 txns",
    },
    {
      title: "User Registered",
      img: "img",
      gold: "0 gms",
      worth: "worth ₹ 0",
      txn: "0 txns",
    },
    {
      title: "Active users",
      img: "img",
      gold: "0 gms",
      worth: "worth ₹ 0",
      txn: "0 txns",
    },
    {
      title: "Average ticket size",
      img: "img",
      gold: "0 gms",
      worth: "worth ₹ 0",
      txn: "0 txns",
    },
  ];

  return (
    <div className="flex flex-col gap-12 px-24 py-12">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-3">
          <Button className="flex justify-center items-center bg-[#5F38CD] text-white px-8 py-5">
            Today
          </Button>
          <Button className="flex justify-center items-center bg-[#5F38CD] text-white px-8 py-5">
            Today
          </Button>

          <Button className="flex justify-center items-center bg-[#5F38CD] text-white px-8 py-5">
            Today
          </Button>
        </div>
        <div className="flex flex-row gap-3">
          <RangePicker onChange={handleChangeDebut} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button
              className="flex justify-center items-center bg-[#5F38CD] text-white px-8 py-5"
              onClick={async () => {
                const parsedStartDate = dayjs(startDate);
                const formattedStartDate = parsedStartDate.format("YYYY-MM-DD");
                const parsedEndDate = dayjs(endDate);
                const formattedEndDate = parsedEndDate.format("YYYY-MM-DD");
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {cardInfo.map((item, index) => {
          return (
            <div key={index}>
              <InfoCard />
            </div>
          );
        })}
      </div>
    </div>
  );
}
