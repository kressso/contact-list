import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    users: [
      {
        _id: "5e14d6b160b49cfbd40725e2",
        fullName: "Melissa Good",
        email: "melissagood@peticular.com",
        isFavorite: false,
        image: "data:image/webp;base64,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",
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
        image: "data:image/webp;base64,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",
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
    ],
    showModal: false
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
    toggleModal (state) {
      state.showModal = !state.showModal;
    },
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
    saveNewUser (state, payload) {
      state.users.push(payload);
    },
    saveEditedUser (state, payload) {

      state.users.forEach((x, index) => {
        if (x._id === payload._id) {
          state.users[index] = { ...payload };
        }
      });
    }
  },
  actions: {
  },
  modules: {
  }
})
