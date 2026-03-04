const getAppIdFromLS = () => {
  const appIdsString = localStorage.getItem("installApp");
  if (appIdsString) {
    const appIds = JSON.parse(appIdsString);
    return appIds;
  }
  return [];
};

const removeAppIdFromLS = (id) => {
  const storedAppIds = getAppIdFromLS();
  const remainingAppIds = storedAppIds.filter((appId) => appId !== id);
  localStorage.setItem("installApp", JSON.stringify(remainingAppIds));
};

const addAppIdToLS = (id) => {
  const storedAppIds = getAppIdFromLS();
  storedAppIds.push(id);
  localStorage.setItem("installApp", JSON.stringify(storedAppIds));
};

export { addAppIdToLS, getAppIdFromLS, removeAppIdFromLS };
