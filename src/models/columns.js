import { attr } from "redux-orm";
import createModel from "./create-model";
import { api } from "../config/api";

export default createModel({
  name: "Columns",
  endpoint: "/columns",
  api: api.mockend,
  fields: {
    name: attr()
  }
});
