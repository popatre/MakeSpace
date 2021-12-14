import { Calendar, CalendarList, Agenda } from "react-native-calendars";

import { LocaleConfig } from "react-native-calendars";

import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const CalendarComp = ({ listing, markedDates, setMarkedDates }) => {
  LocaleConfig.locales["eng"] = {
    monthNames: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    monthNamesShort: [
      "Jan.",
      "Feb.",
      "Mar",
      "Apr",
      "May.",
      "Jun.",
      "Jul.",
      "Aug.",
      "Sept.",
      "Oct.",
      "Nov.",
      "Dec.",
    ],
    dayNames: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    dayNamesShort: ["Mon.", "Tue.", "Wed.", "Thur.", "Fri.", "Sat.", "Sun."],
    today: "today",
  };
  LocaleConfig.defaultLocale = "eng";

  // const markedDates = {
  //     "2021-12-10": {
  //         disabled: true,
  //         startingDay: true,
  //         color: "grey",
  //         endingDay: true,
  //     },
  //     "2021-12-02": {
  //         disabled: true,
  //         startingDay: true,
  //         color: "grey",
  //         endingDay: true,
  //     },
  //     "2021-12-21": {
  //         disabled: true,
  //         startingDay: true,
  //         color: "grey",
  //         endingDay: true,
  //     },
  //     "2021-12-23": {
  //         disabled: true,
  //         startingDay: true,
  //         color: "grey",
  //         endingDay: true,
  //     },
  // };

  return (
    <TouchableOpacity>
      <Calendar
        // Initially visible month. Default = now
        current={"2021-12-14"}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={"2021-12-01"}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={"2021-12-31"}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => {
          // console.log("selected day", day);
          // const dateString = day.dateString;
          if (markedDates !== undefined) {
            const markedKeys = Object.keys(markedDates);
            if (markedKeys.includes(day.dateString)) {
              return setMarkedDates((prevDates) => {
                const newObj = { ...prevDates };
                delete newObj[day.dateString];
                return newObj;
              });
            }
          }

          setMarkedDates((prevDates) => {
            return {
              ...prevDates,
              [day.dateString]: {
                disabled: false,
                startingDay: true,
                color: "green",
                endingDay: true,
              },
            };
          });
        }}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={(day) => {
          // console.log("selected day", day);
        }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={"yyyy MM"}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={(month) => {
          // console.log("month changed", month);
        }}
        // Hide month navigation arrows. Default = false
        hideArrows={true}
        // Replace default arrows with custom ones (direction can be 'left' or 'right')
        renderArrow={(direction) => <Arrow />}
        // Do not show days of other months in month page. Default = false
        hideExtraDays={true}
        // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        disableMonthChange={true}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
        firstDay={1}
        // Hide day names. Default = false
        hideDayNames={true}
        // Show week numbers to the left. Default = false
        showWeekNumbers={true}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
        onPressArrowRight={(addMonth) => addMonth()}
        // Disable left arrow. Default = false
        disableArrowLeft={true}
        // Disable right arrow. Default = false
        disableArrowRight={true}
        // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
        disableAllTouchEventsForDisabledDays={true}
        // Replace default month and year title with custom one. the function receive a date as parameter
        renderHeader={(date) => {
          /*Return JSX*/
        }}
        markingType={"period"}
        markedDates={markedDates}
        // Enable the option to swipe between months. Default = false
        enableSwipeMonths={true}
      />
    </TouchableOpacity>
  );
};

export default CalendarComp;

const styles = StyleSheet.create({});
