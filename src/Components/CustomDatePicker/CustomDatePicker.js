import React, { useState } from "react";

import {
  Button,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from "react-native";

import DatePicker from "react-native-date-picker";

const CustomDatePicker = () => {
  // const [date, setDate] = useState(moment);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <TouchableHighlight
      underlayColor="#FFFFF7"
      activeOpacity={0}
      onPress={() => {
        console.log("open DatePicker");
        setOpen(true);
        console.log(open);
      }}
    >
      <View>
        {/* <Text>
          {date.format("MMM Do :YYYY")}
        </Text> */}
        <Text>
          {date.toDateString()}
        </Text>
        <DatePicker
          mode="date"
          modal
          open={open}
          date={date}
          onConfirm={date => {
            // date={date.toDate()}
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>
    </TouchableHighlight>
  );
};

export default CustomDatePicker;
