export const increment = (Number) => {
  return {
    type: "INC",
    payload: Number,
  };
};

export const decrement = (Number) => {
  return {
    type: "DEC",
    payload: Number,
  };
};

export const accRights = (rts) => {
  return {
    type: "ACC",
    payload: rts,
  };
};

export const addReminder = (text) => ({
  type: "ADD_DAT",
  payload: text,
});
