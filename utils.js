/// Debounce of input ///
/// start ///
const debounce = (func, delay = 1000) => {
    let timeouId;
    return (...args) => {
      if(timeouId) {
        clearTimeout(timeouId);
      }
      timeouId = setTimeout(() => {
        func.apply(null, args);
      }, delay)
    };
  };
  /// end ///