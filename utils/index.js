export const getModifiedDate = (dateWithTimeStamp) => {
  const modifiedDate = new Date(dateWithTimeStamp);
  const month = modifiedDate.getMonth() + 1;
  const date = modifiedDate.getDate();
  const year = modifiedDate.getFullYear();
  return date + '/' + month + '/' + year;
};

export const copyText = (e, fn) => {
  e.preventDefault();
  navigator.clipboard.writeText(e.target.getAttribute('data-link')).then(
    (res) => {
      fn(true);
      console.log('Copied to clipboard');
    },
    () => {
      console.log('Copying to clipboard failed');
    }
  );
};
