import { Info } from "../types/Info";

export function getInfo(path: string, setInfo: (info: Info) => void) {
  fetch(path, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      setInfo(res);
    })
    .catch((error) => console.log(error));
}
