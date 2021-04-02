import { url } from "../../assets/url";
import { fetchSubmitError } from "../../redux/shipment/shipmentAction";

export const submit = async (values, dispatch, props) => {
    const ordering = {
      order: props.order,
      first_name: values.firstName,
      last_name: values.lastName,
      city: values.city,
      zip_code: values.zipCode,
    };
    
    try {
        return fetch(`${url}order`, {
            method: "post",
            body: JSON.stringify(ordering),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((res) => res.json())
            .then((data) => console.log(data));        
    } catch (error) {
        dispatch(fetchSubmitError(error))
    }

};