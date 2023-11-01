import React, { Component } from "react";
import "./Bootstrap.css";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMonth: new Date().getMonth(),
    };
  }

  handleMonthChange = (event) => {
    this.setState({ selectedMonth: parseInt(event.target.value) });
  };

  render() {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentYear = new Date().getFullYear();
    const firstDayOfMonth = new Date(currentYear, this.state.selectedMonth, 1);
    const lastDayOfMonth = new Date(
      currentYear,
      this.state.selectedMonth + 1,
      0
    );
    const daysInMonth = lastDayOfMonth.getDate();
    const firstDayOfWeek = firstDayOfMonth.getDay();
    const numRows = Math.ceil((daysInMonth + firstDayOfWeek) / 7);

    const calendarRows = [];
    let currentDay = 1;

    for (let row = 0; row < numRows; row++) {
      const calendarCells = [];
      for (let col = 0; col < 7; col++) {
        if (row === 0) {
          if (col < firstDayOfWeek) {
            const prevMonthDate = new Date(
              currentYear,
              this.state.selectedMonth,
              0 - (firstDayOfWeek - col)
            );
            calendarCells.push(
              <td
                key={prevMonthDate.getDate()}
                className="days-of-prev-month-cell prevMonthDay"
              >
                {prevMonthDate.getDate()}
              </td>
            );
          } else {
            calendarCells.push(
              <td key={currentDay} className="days-of-month-cell">
                {currentDay}
              </td>
            );
            currentDay++;
          }
        } else {
          if (currentDay <= daysInMonth) {
            if (currentDay === new Date().getDate() && this.state.selectedMonth === new Date().getMonth()) {
              calendarCells.push(
                <td className="today" key={currentDay}>
                  {currentDay}
                </td>
              );
            } else  {
              calendarCells.push(
                <td className="days-of-month-cell" key={currentDay}>
                  {currentDay}
                </td>
              );
            }
            currentDay++;
          } else {
            calendarCells.push(
              <td className="days-of-next-month-cell" key={`${row}-${col}`} />
            );
          }
        }
      }
      calendarRows.push(<tr key={row}>{calendarCells}</tr>);
    }

    const cellWidth = `${1 / 7}%`;
    const dayOfMonthHeight = "10vh";
    const dayOfWeekHeight = "5vh";

    return (
      <div className="parent-calendar" style={{ width: "70%" }}>
        <table>
          <th colSpan="7">
            <div>
              <h3 style={{ color: "color" }}>
                {new Intl.DateTimeFormat("en-US", { month: "long" }).format(
                  firstDayOfMonth
                )}
              </h3>

              <select
                class="btn btn-secondary btn-sm dropdown-toggle"
                onChange={this.handleMonthChange}
                value={this.state.selectedMonth}
              >
                {Array.from(
                  { length: 12 },
                  (_, i) => (
                    <option key={i} value={i}>
                      {new Intl.DateTimeFormat("en-US", {
                        month: "long",
                      }).format(new Date(currentYear, i, 1))}
                    </option>
                  ),
                  this
                )}
              </select>
            </div>
          </th>

          <tbody>
            <tr className="days-of-week-row">
              {daysOfWeek.map(
                (day) => (
                  <td className="days-of-week-cell" key={day}>
                    {day.slice(0, 3)}
                  </td>
                ),
                this
              )}
            </tr>
            {calendarRows}
          </tbody>
        </table>
        <style>{`
          .parent-calendar {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;
            background-color: #f5743e;
            border: 5px solid white;
            border-radius: 15px;
            padding: 10px;
          }
          .days-of-week-row {
            height: ${dayOfWeekHeight};
          }
          th {
            text-align: top;
          }
          th div {
            display: flex;
            align-items: start;
            justify-content: space-between;
          }
          tr {
            margin: 10%;
          }
          select {
            width: 30%;
          }
          .days-of-month-cell {
            align-items: start;
            height: ${dayOfMonthHeight};
            width: ${cellWidth};
            margin: 10%;
            padding: 0.5%;
            background-color: white;
            border-radius: 15px;
          }
          .today {
            background-color: #65cfa7;
            color: white;
            height: ${dayOfMonthHeight};
            width: ${cellWidth};
            margin: 10%;
            padding: 0.5%;
            border-radius: 15px;
          }
        `}</style>
      </div>
    );
  }
}

export default Calendar;
