import React from 'react';

function generateCalendar(year, month) {
  const firstDayOfMonth = new Date(year, month - 1, 1);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const lastDayOfMonth = new Date(year, month, 0);
  const numDays = lastDayOfMonth.getDate();
  
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const headerRow = daysOfWeek.map(day => <th key={day}>{day}</th>);
  
  let calendarRows = [];
  let day = 1;
  for (let i = 0; i < 6; i++) {
    let cells = [];
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDayOfWeek) {
        cells.push(<td key={`${i}-${j}`} ></td>);
      } else if (day > numDays) {
        break;
      } else {
        cells.push(
          <td key={`${i}-${j}`} className="cell">
            {day === 2 ? <div className="highlight">{day}</div> : day}
          </td>); // 날짜 선택은 여기서!!!
        day++;
      }
    }
    calendarRows.push(<tr key={i}>{cells}</tr>);
  }
  
  return (
    <table className='cal'>
      <thead>
        <tr>{headerRow}</tr>
      </thead>
      <tbody>{calendarRows}</tbody>
    </table>
  );
}

const Calendar = () => {
  const year = new Date().getFullYear() - 1; // 연도는 요기서!!
  const month = 12; // 월은 요기서!!
  const calendarJSX = generateCalendar(year, month);

  return (
    <div id="calendar-container">
      {calendarJSX}
    </div>
  );
};

export default Calendar;
