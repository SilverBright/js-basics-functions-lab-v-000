// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
  if (blocks >= 42) {
    return blocks - 42;
  } else {
    return 42 - blocks;
  }
}

function distanceFromHqInFeet(blocks) {
  return (distanceFromHqInBlocks(blocks) * 264)
}

function distanceTravelledInFeet(start, end) {
  if (start > end) {
    return (start - end) * 264
  } else {
    return (end - start) * 264
  }
}

function calculatesFarePrice(start, destination) {
    distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    } else if (distance > 2500) {
        return "cannot travel that far";
    } else if (distance > 2000) {
        return 25;
    } else {
        return distance * 0.02;
    }
}