import createPersistedState from 'vuex-persistedstate';

export default ({ store }) => {
  createPersistedState({
    key: 'mndldb',
    paths: ['project.projects']
  })(store);
};