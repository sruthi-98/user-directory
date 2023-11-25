import { ChangeEvent, useEffect, useRef, useState } from "react";

import { fetchCountries, fetchCountryTime } from "endpoints";
import { useFetchData } from "hooks/useFetchData";
import { formatTime, getNewTime } from "utils";

export const SelectCountry = () => {
  const [timerPaused, setTimerPaused] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [time, setTime] = useState<{
    hour: number;
    minute: number;
    second: number;
  } | null>(null);
  const timerRef = useRef<number | null>(null);

  const {
    isLoading: isCountryListLoading,
    isError: isCountryListError,
    data: countryList,
  } = useFetchData(fetchCountries);

  const startTimer = () => {
    setTimerPaused(false);
    timerRef.current = setInterval(() => {
      setTime((prevTime) => {
        if (!prevTime) return prevTime;

        const { hour, minute, second } = prevTime;
        const { newHour, newMinute, newSecond } = getNewTime({
          hour,
          minute,
          second,
        });
        return { hour: newHour, minute: newMinute, second: newSecond };
      });
    }, 1000);
  };

  const resetTimer = () => {
    if (!timerRef.current) return;

    clearInterval(timerRef.current as number);
    timerRef.current = null;
  };

  const pauseTimer = () => {
    if (!timerRef.current) return;

    setTimerPaused(true);
    clearInterval(timerRef.current as number);
    timerRef.current = null;
  };

  const handleTimerOnClick = () => {
    if (timerPaused) startTimer();
    else pauseTimer();
  };

  const getSelectedCountryTime = () => {
    if (!selectedCountry) return;

    // If current timer is running, remove timer
    resetTimer();
    setTime(null);

    fetchCountryTime(selectedCountry).then((data) => {
      const dateTime = new Date(
        new Date(data?.datetime).toLocaleString("en-US", {
          timeZone: selectedCountry,
        })
      );
      setTime({
        hour: dateTime.getHours(),
        minute: dateTime.getMinutes(),
        second: dateTime.getSeconds(),
      });
      startTimer();
    });
  };

  useEffect(() => {
    getSelectedCountryTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountry]);

  return (
    <div className="flex flex-wrap gap-5">
      <select
        className="py-2 px-5 rounded-[5px] max-w-[250px] disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-50"
        disabled={isCountryListLoading || isCountryListError}
        onChange={(event: ChangeEvent<HTMLSelectElement>) => {
          setSelectedCountry(event.target.value.toString());
        }}
      >
        <option value="">Select country</option>
        {countryList?.map((country: string) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
      <div className="bg-black text-white font-bold py-2 px-5 rounded-[5px]">
        {time === null ? (
          "00 : 00 : 00"
        ) : (
          <>
            {formatTime(time.hour)} : {formatTime(time.minute)} :{" "}
            {formatTime(time.second)}
          </>
        )}
      </div>
      <button
        className={`py-2 px-5 w-[130px] ${
          timerPaused ? "bg-green-200" : "bg-yellow-200"
        } rounded-[5px] disabled:cursor-not-allowed disabled:opacity-50`}
        disabled={time === null}
        onClick={handleTimerOnClick}
      >
        {timerPaused ? "Start" : "Pause"} timer
      </button>
    </div>
  );
};
