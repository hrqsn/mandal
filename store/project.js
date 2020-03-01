export const state = () => ({
  projects: []
})

export const actions = {
  save({state, commit}, {title, data}) {
    commit('SAVE', {
      title: title,
      data: data
    });
  },
  update({state, commit}, {index, title, data}) {
    commit('UPDATE', {
      index: index,
      title: title,
      data: data
    });
  }
}

export const mutations = {
  SAVE(state, payload) {
    const items = state.projects || [];
    const projects = {
      id: items.length,
      title: payload.title,
      data: payload.data
    }
    items.push(projects);
    state.projects = items;
  },
  UPDATE(state, payload) {
    const items = state.projects || [];
    const projects = {
      id: payload.index,
      title: payload.title,
      data: payload.data
    }
    items[payload.index] = projects;
    state.projects = items;
  }
}

export const getters = {
  getItems: state => {
    return state.projects
  }
}