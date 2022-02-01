import * as api from "../../api/services";
import { getServices } from "../services";

export const ActionFetchServices = () => async (dispatch) => {
  try {
    const { data } = await api.fetchServicesRequest();

    dispatch({ type: getServices.type, payload: data });
  } catch (error) {
    console.log(error);
  }
};
