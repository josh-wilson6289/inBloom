import axios from "axios";

export default {
  searchPlants: function() {
    return axios.get("/search/:plantName");
  },
  plantDetail: function(id) {
    return axios.get("/plant/" + id);
  }
};
