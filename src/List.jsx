import { useState, useEffect } from "react";

const URL = "https://openholidaysapi.org/PublicHolidays";
// countryIsoCode=DE&validFrom=2023-01-01&validTo=2023-12-31&languageIsoCode=EN";

function getYear() {
  const currentYear = new Date().getFullYear();
  return currentYear;
}

function List({ country }) {
  const [holidays, setHolidays] = useState([]);
  useEffect(() => {
    if (country == "") {
      return;
    }
    const year = getYear();
    const validFrom = year + "-01-01";
    const validTo = year + "-12-31";
    fetch(
      `${URL}?countryIsoCode=${country}&validFrom=${validFrom}&validTo=${validTo}&languageIsoCode=EN`
    )
      .then((response) => response.json())
      .then((data) => {
        setHolidays(data);
      })
      .catch((err) => console.log(err.message));
  }, [country]);

  const holidayList = holidays.map((holiday) => {
    const formatted = new Date(holiday.startDate).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
    return (
      <li key={holiday.id} class="flex py-1 w-full">
        <div class="text-gray-600 w-1/4">{formatted}</div>
        <div>{holiday.name[0].text}</div>
      </li>
    );
  });

  return (
    <ul class="divide-y divide-gray-200 w-full">
      {console.log(holidayList)}
      {holidays.length == 0 ? "Loading..." : holidayList}
    </ul>
  );
}

export default List;
