import Vue from 'vue';
import Vuex from 'vuex';



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      {
        _id: "5e14d6b160b49cfbd40725e2",
        fullName: "Melissa Good",
        email: "melissagood@peticular.com",
        isFavorite: false,
        numbers: [
          {
            id: 0,
            place: "Spokane",
            phone: "+1 (872) 477-2065"
          },
          {
            id: 1,
            place: "Fairforest",
            phone: "+1 (936) 446-2344"
          },
          {
            id: 2,
            place: "Whitestone",
            phone: "+1 (996) 465-2610"
          }
        ]
      },
      {
        _id: "5e14d6b18ecf24e0caacfdad",
        fullName: "Addie Brennan",
        email: "addiebrennan@peticular.com",
        isFavorite: true,
        numbers: [
          {
            id: 0,
            place: "Fresno",
            phone: "+1 (910) 589-2207"
          },
          {
            id: 1,
            place: "Gilgo",
            phone: "+1 (916) 582-3752"
          },
          {
            id: 2,
            place: "Trucksville",
            phone: "+1 (996) 554-3548"
          }
        ]
      },
      {
        _id: "5e14d6b1c72d11efd0ee9679",
        fullName: "Pearl Russell",
        email: "pearlrussell@peticular.com",
        isFavorite: false,
        numbers: [
          {
            id: 0,
            place: "Faxon",
            phone: "+1 (979) 402-2357"
          },
          {
            id: 1,
            place: "Hendersonville",
            phone: "+1 (991) 444-3653"
          },
          {
            id: 2,
            place: "Eden",
            phone: "+1 (971) 455-3856"
          }
        ]
      },
      {
        _id: "5e14d6b1881ae7e20f8c10e4",
        fullName: "Shepard Madden",
        email: "shepardmadden@peticular.com",
        isFavorite: true,
        numbers: [
          {
            id: 0,
            place: "Hartsville/Hartley",
            phone: "+1 (874) 511-2187"
          },
          {
            id: 1,
            place: "Norris",
            phone: "+1 (825) 580-3770"
          },
          {
            id: 2,
            place: "Bainbridge",
            phone: "+1 (822) 592-2394"
          }
        ]
      },
      {
        _id: "5e14d6b1758df34237a4854b",
        fullName: "Clements Jenkins",
        email: "clementsjenkins@peticular.com",
        isFavorite: false,
        numbers: [
          {
            id: 0,
            place: "Motley",
            phone: "+1 (806) 402-3857"
          },
          {
            id: 1,
            place: "Eagleville",
            phone: "+1 (911) 515-3276"
          },
          {
            id: 2,
            place: "Adamstown",
            phone: "+1 (971) 481-2955"
          }
        ]
      },
      {
        _id: "5e14d6b1d7023011338b5637",
        fullName: "Juliette Yates",
        email: "julietteyates@peticular.com",
        isFavorite: false,
        numbers: [
          {
            id: 0,
            place: "Forestburg",
            phone: "+1 (991) 400-3891"
          },
          {
            id: 1,
            place: "Accoville",
            phone: "+1 (900) 554-2542"
          },
          {
            id: 2,
            place: "Williston",
            phone: "+1 (899) 572-3755"
          }
        ]
      },
      {
        _id: "5e14d6b14f1d6dc193220986",
        fullName: "Charity Wolf",
        email: "charitywolf@peticular.com",
        isFavorite: false,
        numbers: [
          {
            id: 0,
            place: "Worton",
            phone: "+1 (813) 410-3515"
          },
          {
            id: 1,
            place: "Abiquiu",
            phone: "+1 (896) 558-2420"
          },
          {
            id: 2,
            place: "Teasdale",
            phone: "+1 (900) 486-2361"
          }
        ]
      }
    ]
  },
  getters: {
    getSingleUser: (state) => (id) => {
      return state.users.find(user => user._id === id)
    },
    getFavUsers: (state) => {
      return state.users.filter(user => user.isFavorite);
    }
  },
  mutations: {
    toggleFavorite (state, payload) {
      state.users.filter(x => {
        if (x._id === payload) {
          x.isFavorite = !x.isFavorite;
        }
      })
    },
    deleteUser (state, payload) {
      state.users = state.users.filter(x => {
        return x._id != payload;
      })
    },
    saveUser (state, payload) {
      state.users.push(payload);
    },
    saveEditedUser (state, payload) {

      state.users.forEach((x, index) => {
        if (x._id === payload._id) {
          console.log('index ', state.users[index]);
          state.users[index] = { ...payload };
          console.log('opaca ', state.users[index])
        }
      });


      // state.users = state.users.filter(x => {
      //   // console.log('eo1 ', x);
      //   // console.log('eo2 ', payload);

      //   if (x._id === payload._id) {
      //     // state.users[_id]
      //     console.log('jos to ', x);
      //   }
      // })
    }
  },
  actions: {
  },
  modules: {
  }
})
