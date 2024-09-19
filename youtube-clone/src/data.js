export const API_KEY = "AIzaSyArzqYj8OXO1K1mk_xhPt93OMLW8sCr0EI";

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "k";
  } else {
    return value;
  }
};
