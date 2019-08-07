export default  {
    changecitys (state, value) {
      state.city = value
      try {
        localStorage.city = value
      }
      catch (e) {}
    }
  }