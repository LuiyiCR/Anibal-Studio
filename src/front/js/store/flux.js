const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      theme: localStorage.getItem('theme') || 'dark-theme',
    },
    actions: {
      toggleTheme: () => {
        const currentTheme = getStore().theme;
        const newTheme =
          currentTheme === 'dark-theme' ? 'light-theme' : 'dark-theme';
        localStorage.setItem('theme', newTheme);
        setStore({ theme: newTheme });
      },
    },
  };
};

export default getState;
