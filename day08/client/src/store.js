import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    emps:[]
  },
  mutations: {
    addEmp(state,payload){
      state.emps.push(payload.emp);
    },
    setAllEmps(state,payload){
      state.emps = payload.emps
    },
    modifyEmp(state,payload){
      // filter => {empId:xxx}
      let filter = payload.filter;
      // data=> {xx:xx,xx:xx,...}
      let data = payload.data;
      for(let i=0;i<state.emps.length;i++){
        let emp = state.emps[i];
        if(emp.empId==filter.empId){
          state.emps[i] = data;
          break;
        }
      }
    }
  }
})
