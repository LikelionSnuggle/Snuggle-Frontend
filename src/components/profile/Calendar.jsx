import { useState } from "react";

import IconPrev from "../../assets/All-icon-prev";
import IconNext from "../../assets/All-icon-next";

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [onClickDate, setOnClickDate] = useState("");
  // eslint-disable-next-line
  const [events, setEvents] = useState([
    { date: "2023-11-07", event: "라이브잼 콘서트" },
    { date: "2023-11-19", event: "스페이스 공연장" },
    { date: "2023-11-27", event: "블루포트 라이브 무대" },
  ]);
  const colors = ["#F29D38", "#FF6B00", "#F2BE38"];

  const getCalendarData = (year, month) => {
    // 현재 달의 첫 날과 마지막 날
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    // 달력 시작 날짜: 현재 달의 첫 날보다 이전의 가장 가까운 일요일
    const startDay = new Date(firstDayOfMonth);
    startDay.setDate(startDay.getDate() - startDay.getDay());

    // 달력 끝 날짜: 현재 달의 마지막 날 다음의 가장 가까운 토요일
    const endDay = new Date(lastDayOfMonth);
    endDay.setDate(endDay.getDate() + (6 - endDay.getDay()));

    // 날짜 데이터를 담을 배열
    const dates = [];

    // 시작 날짜부터 끝 날짜까지 순회하며 날짜 배열에 추가
    for (
      let date = new Date(startDay);
      date <= endDay;
      date.setDate(date.getDate() + 1)
    ) {
      dates.push(new Date(date));
    }

    return dates;
  };

  const isCurrentMonth = (date) => {
    if (date.getMonth() === currentDate.getMonth()) {
      return "current";
    } else if (date.getMonth() < currentDate.getMonth()) {
      return "prev";
    } else {
      return "next";
    }
  };

  const clickDate = (date) => {
    const dateString = formatDate(date);
    if (isCurrentMonth(date) === "prev") {
      handlePrevMonth();
    } else if (isCurrentMonth(date) === "next") {
      handleNextMonth();
    }
    setOnClickDate(dateString);
  };

  function formatDate(date) {
    const d = new Date(date);
    let month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  const getEventForDate = (date) => {
    const dateString = formatDate(date);
    const eventIndex = events.findIndex((e) => e.date === dateString);
    return eventIndex >= 0
      ? {
          event: events[eventIndex].event,
          color: colors[eventIndex % colors.length],
        }
      : null;
  };

  const handlePrevMonth = () => {
    // 이전 달로 이동
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    // 다음 달로 이동
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const dates = getCalendarData(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );

  // 주 단위로 날짜를 그룹화하기 위한 함수
  function getWeeks(dates) {
    const weeks = [];
    let week = [];

    dates.forEach((date) => {
      if (week.length < 7) {
        week.push(date);
      } else {
        weeks.push(week);
        week = [date];
      }
    });

    if (week.length) {
      weeks.push(week); // 마지막 주 추가
    }

    return weeks;
  }

  const weeks = getWeeks(dates);

  const CurrentMonth =
    currentDate.getMonth() + 1 >= 10
      ? currentDate.getMonth() + 1
      : "0" + (currentDate.getMonth() + 1);

  return (
    <>
      <div className="h-[80px] flex justify-center items-center gap-2">
        <button onClick={handlePrevMonth}>
          <IconPrev width={24} height={24} fill="#323232" />
        </button>
        <p className="font-medium text-[16px] text-darkGrey">
          {currentDate.getFullYear()}.{CurrentMonth}.
        </p>
        <button onClick={handleNextMonth}>
          <IconNext width={24} height={24} fill="#323232" />
        </button>
      </div>

      <div className="border-b-background border-b-[0.5px] pb-[7px]">
        <div className="px-4 w-full grid grid-cols-7">
          {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
            <p
              className="w-full text-center font-medium text-[12px] text-lightGrey"
              key={day}
            >
              {day}
            </p>
          ))}
        </div>
      </div>
      {weeks.map((week, index) => (
        <div
          key={index}
          className="h-[80px] px-4 grid grid-cols-7 border-b-background border-b"
        >
          {week.map((date) => {
            const eventInfo = getEventForDate(date);
            const dateString = formatDate(date);
            return (
              <button
                key={dateString}
                className={`flex flex-col items-center pt-[12px] ${
                  onClickDate === dateString ? "bg-[#EFEFEF]" : ""
                } `}
                onClick={() => clickDate(date)}
              >
                <p
                  className={`font-medium text-[12px] ${
                    isCurrentMonth(date) === "current"
                      ? "text-lightGrey"
                      : "text-[#D4D4D4]"
                  }`}
                >
                  {date.getDate()}
                </p>
                {eventInfo && (
                  <p
                    className="h-[16px] text-[12px] font-medium w-full px-[2px] whitespace-nowrap overflow-hidden text-white"
                    style={{ backgroundColor: eventInfo.color }}
                  >
                    {eventInfo.event}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      ))}
      <div className="pt-[17px] px-4">
        <p className="font-medium text-[18px]">공연 일정</p>
      </div>
    </>
  );
}

export default Calendar;
