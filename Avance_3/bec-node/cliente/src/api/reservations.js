import axios from "./axios";

export const getReservationsRequest = async () => axios.get("/reservations");

export const getUserReservationsRequest = async (id) => {
    try {
        const response = await axios.get('/reservations');
        const filteredData = response.data.filter((item) => item.user._id === id);
        return filteredData;
    } catch (error) {
      throw error;
    }
  };
  
export const createReservationRequest = async (reservation) => axios.post("/reservations", reservation);

export const updateReservationRequest = async (id, reservation) => axios.put(`/reservations/${id}`, reservation); 

export const deleteReservationRequest = async (id) => axios.delete(`/reservations/${id}`);

export const getReservationRequest = async (id) => axios.get(`/reservations/${id}`);