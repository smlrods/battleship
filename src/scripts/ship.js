export default function Ship(length) {
  const _length = length;
  let _timesHit = 0;

  const hit = () => {
    if (!isSunk()) {
      return ++_timesHit;
    }
    return null;
  };

  const isSunk = () => _timesHit === _length;

  const getLength = () => _length;

  const getTimesHit = () => _timesHit;

  return {
    hit, isSunk, getLength, getTimesHit,
  };
}
