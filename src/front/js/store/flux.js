const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      theme: localStorage.getItem('theme') || 'dark-theme',
    },
    actions: {
      ...getActions(),
      setUser: (user) => {
        setStore({ user });
      },
      toggleTheme: () => {
        const currentTheme = getStore().theme;
        const newTheme =
          currentTheme === 'dark-theme' ? 'light-theme' : 'dark-theme';
        localStorage.setItem('theme', newTheme);
        setStore({ theme: newTheme });
      },
      handleOpenWhatsApp: () => {
        setStore({ showModal: true });
      },
      handleCloseWhatsApp: () => {
        setStore({ showModal: false });
      },
      handleConfirmWhatsApp: () => {
        window.location.href = 'https://wa.me/50672362847';
      },
    },
  };
};

export default getState;
