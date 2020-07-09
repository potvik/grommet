import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grommet, Box, DateInput } from 'grommet';
import { grommet } from 'grommet/themes';
var now = new Date();
var lastWeek = new Date(now);
lastWeek.setDate(lastWeek.getDate() - 7);
var dateFormat = new Intl.DateTimeFormat(undefined, {
  month: 'short',
  day: 'numeric'
});

var Example = function Example() {
  var _React$useState = React.useState([lastWeek.toISOString(), now.toISOString()]),
      value = _React$useState[0],
      setValue = _React$useState[1];

  var onChange = function onChange(event) {
    var nextValue = event.value;
    console.log('onChange', nextValue);
    setValue(nextValue);
  };

  return /*#__PURE__*/React.createElement(Grommet, {
    theme: grommet
  }, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/React.createElement(Box, {
    width: "medium"
  }, /*#__PURE__*/React.createElement(DateInput, {
    value: value,
    format: "mm/dd/yyyy-mm/dd/yyyy",
    buttonProps: {
      label: dateFormat.format(new Date(value[0])) + " - " + dateFormat.format(new Date(value[1]))
    },
    onChange: onChange
  }))));
};

storiesOf('DateInput', module).add('Range format', function () {
  return /*#__PURE__*/React.createElement(Example, null);
});