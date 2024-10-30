/**
 * Calculate the position of tooltip
 *
 */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
export default function (target, node, place, desiredPlace, offset) {
  const { width: tipWidth, height: tipHeight } = getDimensions(node);
  const { width: targetWidth, height: targetHeight } = getDimensions(target);

  const { mouseX, mouseY } = getCurrentOffset(target);
  const defaultOffset = getDefaultPosition(
    targetWidth,
    targetHeight,
    tipWidth,
    tipHeight,
  );
  const { extraOffsetX, extraOffsetY } = calculateOffset(offset);

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const { parentTop, parentLeft } = getParent(node);

  // Get the edge offset of the tooltip
  const getTipOffsetLeft = (place): number => {
    const offsetX = defaultOffset[place].l;
    return mouseX + offsetX + extraOffsetX;
  };
  const getTipOffsetRight = (place) => {
    const offsetX = defaultOffset[place].r;
    return mouseX + offsetX + extraOffsetX;
  };
  const getTipOffsetTop = (place) => {
    const offsetY = defaultOffset[place].t;
    return mouseY + offsetY + extraOffsetY;
  };
  const getTipOffsetBottom = (place) => {
    const offsetY = defaultOffset[place].b;
    return mouseY + offsetY + extraOffsetY;
  };

  const outsideLeft = (p) => getTipOffsetLeft(p) < 0;
  const outsideRight = (p) => getTipOffsetRight(p) > windowWidth;
  const outsideTop = (p) => getTipOffsetTop(p) < 0;
  const outsideBottom = (p) => getTipOffsetBottom(p) > windowHeight;

  // Check whether the tooltip with orientation p is completely inside the client window
  const outside = (p) =>
    outsideLeft(p) || outsideRight(p) || outsideTop(p) || outsideBottom(p);
  const inside = (p) => !outside(p);

  const placeIsInside = {
    top: inside('top'),
    bottom: inside('bottom'),
    left: inside('left'),
    right: inside('right'),
  };

  function choose() {
    const allPlaces = desiredPlace
      .split(',')
      .concat(place, ['top', 'bottom', 'left', 'right']);
    for (const d of allPlaces) {
      if (placeIsInside[d]) return d;
    }
    // if nothing is inside, just use the old place.
    return place;
  }

  const chosen = choose();

  let isNewState = false;
  let newPlace;
  if (chosen && chosen !== place) {
    isNewState = true;
    newPlace = chosen;
  }

  if (isNewState) {
    return {
      isNewState: true,
      newState: { place: newPlace },
    };
  }

  return {
    isNewState: false,
    position: {
      left: Number(getTipOffsetLeft(place) - parentLeft),
      top: Number(getTipOffsetTop(place) - parentTop),
    },
  };
}

const getDimensions = (node) => {
  const { height, width } = node.getBoundingClientRect();
  return {
    height: parseInt(height, 10),
    width: parseInt(width, 10),
  };
};

// Get current mouse offset
const getCurrentOffset = (currentTarget) => {
  const boundingClientRect = currentTarget.getBoundingClientRect();
  const targetTop = boundingClientRect.top;
  const targetLeft = boundingClientRect.left;
  const { width: targetWidth, height: targetHeight } =
    getDimensions(currentTarget);

  return {
    mouseX: targetLeft + targetWidth / 2,
    mouseY: targetTop + targetHeight / 2,
  };
};

// List all possibility of tooltip final offset
// This is useful in judging if it is necessary for tooltip to switch position when out of window
const getDefaultPosition = (targetWidth, targetHeight, tipWidth, tipHeight) => {
  const triangleHeight = 2;
  const top = {
    l: -(tipWidth / 2),
    r: tipWidth / 2,
    t: -(targetHeight / 2 + tipHeight + triangleHeight),
    b: -(targetHeight / 2),
  };
  const bottom = {
    l: -(tipWidth / 2),
    r: tipWidth / 2,
    t: targetHeight / 2,
    b: targetHeight / 2 + tipHeight + triangleHeight,
  };
  const left = {
    l: -(tipWidth + targetWidth / 2 + triangleHeight),
    r: -(targetWidth / 2),
    t: -(tipHeight / 2),
    b: tipHeight / 2,
  };
  const right = {
    l: targetWidth / 2,
    r: tipWidth + targetWidth / 2 + triangleHeight,
    t: -(tipHeight / 2),
    b: tipHeight / 2,
  };

  return { top, bottom, left, right };
};

const calculateOffset = (offset) => {
  let extraOffsetX = 0;
  let extraOffsetY = 0;

  if (Object.prototype.toString.apply(offset) === '[object String]') {
    offset = JSON.parse(offset.toString().replace(/'/g, '"'));
  }
  for (const key in offset) {
    if (key === 'top') {
      extraOffsetY -= parseInt(offset[key], 10);
    } else if (key === 'bottom') {
      extraOffsetY += parseInt(offset[key], 10);
    } else if (key === 'left') {
      extraOffsetX -= parseInt(offset[key], 10);
    } else if (key === 'right') {
      extraOffsetX += parseInt(offset[key], 10);
    }
  }

  return { extraOffsetX, extraOffsetY };
};

// Get the offset of the parent elements
const getParent = (currentTarget) => {
  let currentParent = currentTarget;
  while (currentParent) {
    const computedStyle = window.getComputedStyle(currentParent);
    if (
      computedStyle.getPropertyValue('transform') !== 'none' ||
      computedStyle.getPropertyValue('will-change') === 'transform'
    )
      break;
    currentParent = currentParent.parentElement;
  }

  const parentTop =
    (currentParent && currentParent.getBoundingClientRect().top) || 0;
  const parentLeft =
    (currentParent && currentParent.getBoundingClientRect().left) || 0;

  return { parentTop, parentLeft };
};
