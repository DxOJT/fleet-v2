export const displayFulllName = (firstName, middleName = '', lastName = '', extension = '') => {
  let middleNameString = ' ';
  let extensionString = ' ';
  if (middleName) middleNameString = ' ' + middleName.charAt(0) + '. ';
  if (extension) extensionString = ', ' + extension;
  return firstName + middleNameString + lastName + extensionString;
};
