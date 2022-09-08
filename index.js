function isATheLargest(a, b, c) {
  if (a > b && a > c) {
    return true;
  } else {
    return false;
  }
}

function isBTheLargest(a, b, c) {
  if (b > a && b > c) {
    return true;
  } else {
    return false;
  }
}

function isCTheLargest(a, b, c) {
  if (c > a && c > b) {
    return true;
  } else {
    return false;
  }
}

function isAequalBandbiggerthanC(a, b, c) {
  if (a == b && a > c) {
    return true;
  } else {
    return false;
  }
}

function isAequalCandbiggerthanB(a, b, c) {
  if (a == c && a > b) {
    return true;
  } else {
    return false;
  }
}

function isBequalCandbiggerthanA(a, b, c) {
  if (b == c && b > a) {
    return true;
  } else {
    return false;
  }
}


export function TheLargestNumber(a1, b1, c1) {
  let a = parseFloat(a1);
  let b = parseFloat(b1);
  let c = parseFloat(c1);

  if (isATheLargest(a, b, c)) {
    return "The 1st number is largest and equal: " + a;
  } else if (isBTheLargest(a, b, c)) {
    return "The 2nd number is largest and equal: " + b;
  } else if (isCTheLargest(a, b, c)) {
    return "The 3rd number is largest and equal: " + c;
  } else if (isAequalBandbiggerthanC(a, b, c)) {
    return "The 1st and the 2nd number are lagest and equal: " + a;
  } else if (isAequalCandbiggerthanB(a, b, c)) {
    return "The 1st and the 3d number are lagest and equal: " + a;
  } else if (isBequalCandbiggerthanA(a, b, c)) {
    return "The 2nd and the 3d number are lagest and equal: " + b;
  } else {
    return "All three numbers are equal. And equal: " + a;
  }
}
