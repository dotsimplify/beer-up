export const utilsFunctions = {
  stringClip: (str) => {
    if (str.length > 140) {
      return str.slice(str, 140).concat("...");
    }
    return str;
  },
  performSearchQuery: (array, searchTerm, field) => {
    let searchString = searchTerm.toString();
    if (array !== undefined && array.length > 0) {
      return array.filter((res) =>
        res[field].toLowerCase().includes(searchString.toLowerCase())
      );
    }
    return;
  },
};
