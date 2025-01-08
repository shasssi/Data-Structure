var floodFill = function (image, sr, sc, color) {
  const imageSize = image.length;
  const rowSize = image[0].length;
  const prevColor = image[sr][sc];
  // if prevColor == newColor, then no need to fill anything
  // hence return
  // or else it will go into infinte recursion
  if (prevColor === color) return image;
  dfsRecursive(image, sr, sc, imageSize, rowSize, color, prevColor);
  return image;
};

/*    
    - check adjacent vertex whether it is "1"
    - if "1" then we include the land and mark it 0

                 1 [i-1][j]
                 ^
                 |
[i][j-1] 1 <---- 1 ----> 1 [i][j+1]
                 |
                 v
                 1 [i+1][j]
*/
function isValid(image, i, j, imageSize, rowSize, prevColor) {
  if (
    i >= 0 &&
    i < imageSize &&
    j >= 0 &&
    j < rowSize &&
    image[i][j] == prevColor
  ) {
    return true;
  }
  return false;
}

function dfsRecursive(image, i, j, imageSize, rowSize, color, prevColor) {
  image[i][j] = color;
  // top adjcaent
  if (isValid(image, i - 1, j, imageSize, rowSize, prevColor)) {
    dfsRecursive(image, i - 1, j, imageSize, rowSize, color, prevColor);
  }
  // left adjcaent
  if (isValid(image, i, j - 1, imageSize, rowSize, prevColor)) {
    dfsRecursive(image, i, j - 1, imageSize, rowSize, color, prevColor);
  }
  // right adjcaent
  if (isValid(image, i, j + 1, imageSize, rowSize, prevColor)) {
    dfsRecursive(image, i, j + 1, imageSize, rowSize, color, prevColor);
  }
  // bottom adjcaent
  if (isValid(image, i + 1, j, imageSize, rowSize, prevColor)) {
    dfsRecursive(image, i + 1, j, imageSize, rowSize, color, prevColor);
  }
}

(function main() {
  const image = [
    [0, 0, 0],
    [0, 0, 0],
  ];
  const sr = 1,
    sc = 0,
    color = 2;
  console.log(floodFill(image, sr, sc, color));
  console.log(
    floodFill(
      [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
      ],
      1,
      1,
      2
    )
  );
})();
