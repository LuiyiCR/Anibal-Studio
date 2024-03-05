const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      theme: localStorage.getItem('theme') || 'light-theme',
    },
    actions: {
      toggleTheme: () => {
        const currentTheme = getStore().theme;
        const newTheme =
          currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
        localStorage.setItem('theme', newTheme);
        setStore({ theme: newTheme });
      },
    },
  };
};

export default getState;
