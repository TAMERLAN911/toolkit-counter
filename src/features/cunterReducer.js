import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

export const inc = createAction("inc");
export const dec = createAction("dec");
export const res = createAction('res')
const counterReducer = createReducer(initialState, (builder) => {
  builder.addCase(inc, (state) => {
    state.counter += 1;
  });
  builder.addCase(dec, (state) => {
      if(state.counter !== 0)
    state.counter -= 1
  });

  builder.addCase(res, (state) => {
    state.counter = 0;
  });
});

export default counterReducer;
