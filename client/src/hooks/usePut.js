import { useEffect, useState, useCallback } from "react";
import axios from "axios";

export function put(url) {
  const baseUrl = "http://localhost:5000/";

  axios
    .put(baseUrl + url, { params: { validate: true, id: 2 } })
    .then((r) => setData(r.data))
    .catch((e) => "exc " + e.toString());

  return true;
}
