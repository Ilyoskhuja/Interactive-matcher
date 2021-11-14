import Vue from "vue";
import Vuex from "vuex";
import recordingsdata from "./assets/sound_recordings.csv";

import inputsdata from "./assets/sound_recordings_input_report.csv";
Vue.use(Vuex);

const appendId = (tempArray) => {
  return tempArray.map((item) => ({
    id: Math.random().toString().slice(2),
    ...item,
  }));
};

const postRecordingsData = appendId(recordingsdata);
const postInputs = appendId(inputsdata);

export const store = new Vuex.Store({
  state: {
    // origin
    recordings: postRecordingsData,

    // left aside list
    inputs: postInputs,

    // right aside list
    results: postRecordingsData,

    selectedInputsItem: {},
    selectedResultsItem: {},
  },
  mutations: {
    SET_STATE(state, payload) {
      Object.keys(payload).forEach((key) => {
        if (key in state) {
          state[key] = payload[key];
        }
      });
    },
    S_INPUT(state, payload) {
      state.selectedInputsItem = payload;
    },
    addInput(state) {
        console.log("state.selectedInputsItem:", state.selectedInputsItem);
	state.recordings.push(state.selectedInputsItem.item);
	state.results.push(state.selectedInputsItem.item)
	console.log("state:",state);    
    },
  },
});
