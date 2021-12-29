import moment from 'moment';

const toDate = function (dataStr, pattern = 'YYYY-MM-DD') {
  return moment(dataStr).format(pattern);
};

const toTime = function (dataStr, pattern = 'HH:mm:ss') {
  return moment(dataStr).format(pattern);
};

const format = function (val, format) {
  return moment(val).format(format || 'YYYY-MM-DD HH:mm:ss');
};

export { toDate,toTime, format };
