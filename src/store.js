import Vue from 'vue';
import Vuex from 'vuex';
import recordingsdata from "./assets/sound_recordings.csv"

import inputsdata from "./assets/sound_recordings_input_report.csv"
Vue.use(Vuex);
export const store = new Vuex.Store({
	state: {
		recordings: recordingsdata,
		inputs: inputsdata,
		results:recordingsdata
	},
	mutations: {
		set() {
			
		}
	}
})