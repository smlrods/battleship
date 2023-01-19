export default function Ship(length) {

  let _length = length;
  let _timesHit = 0;

  const hit = () => {
    if (!isSunk()) {
      return ++_timesHit;
    }
    return null;
  };

  const isSunk = () => {
    return _timesHit === _length;
  }

  const getLength = () => {
    return _length;
  }

  return { hit, isSunk, getLength }
}
