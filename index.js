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
  
}