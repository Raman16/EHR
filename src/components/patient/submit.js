//import { SubmissionError } from "redux-form";
import { request } from "../../helpers";
//import SelectGroup from "./SelectGroup.js";

var formvalues;
const savePatient = params => {
  return new Promise((resolve, reject) => {
    request
      .post("patient", params)
      .then(response => {
        //resolve(response.data);
        console.log(response);

        // reject(new SubmissionError(response.errors));
      })
      .catch(error => error.response);
  });
};

const submit = values => {
  console.log(JSON.stringify(values));
  let grouparray = [];
  let bloodgroup;
  let occupation;
  let language;
  let referrer;
  let medicalhisarray = [];

  formvalues = JSON.parse(JSON.stringify(values));

  for (let i = 0; i < values.groups.length; i++) {
    grouparray.push(values.groups[i].id.toString());
  }
  bloodgroup = values.blood_group.label;
  occupation = values.occupation.label;
  language = values.language.label;
  referrer = values.referrer.label;

  for (let i = 0; i < values.medical_histories.length; i++) {
    medicalhisarray.push(values.medical_histories[i].id.toString());
  }

  formvalues.blood_group = bloodgroup;
  formvalues.occupation = occupation;
  formvalues.language = language;
  formvalues.referrer = referrer;

  formvalues.groups = grouparray;
  formvalues.medical_histories = medicalhisarray;
  console.log(JSON.stringify(formvalues));
  return savePatient(formvalues);
};

export default submit;
