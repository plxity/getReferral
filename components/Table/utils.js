export const getTotalExp = (jobs) => {
  const expInMonths = jobs.reduce((prevValue, currentValue) => {
    return prevValue + findDiff(currentValue);
  }, 0);
  return Number((expInMonths / 12).toFixed(2));
};

export const findDiff = (job) => {
  const { endDate, startDate, current } = job;

  if (!endDate && !startDate) {
    return 0;
  }
  if (current) {
    return new Date().getMonth() - new Date(startDate).getMonth();
  }
  return (
    new Date(endDate).getMonth() -
    new Date(startDate).getMonth() +
    12 * (new Date(endDate).getFullYear() - new Date(startDate).getFullYear())
  );
};

export const getCurrentCompany = (exp) => {
  return exp.find((e) => e.current === true)?.company;
};

export const findUniqueResponses = (responses = []) => {
  const userName = new Set();
  const filteredArray = responses.filter((res) => {
    const { peerlistUserName } = res;
    if (userName.has(peerlistUserName)) {
      return false;
    }
    userName.add(peerlistUserName);
    return true;
  });
  return filteredArray;
};

export const restrictedDropDown = [
  'Skills',
  'PreviousCompanies',
  'fullName',
  'email',
  'Peerlist Username',
];
