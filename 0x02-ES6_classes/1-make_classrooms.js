import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const arr = [];
  const class1 = new ClassRoom(19);
  const class2 = new ClassRoom(20);
  const class3 = new ClassRoom(34);
  arr.push(class1);
  arr.push(class2);
  arr.push(class3);
  return arr;
}
