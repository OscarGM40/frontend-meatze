const token = localStorage.getItem("token") || false;

export const API = {
  protocol: "http",
  dominio: "127.0.0.1",
  port: "4000",
  raiz: "api",
  _url: "pantallas",
  integrate: (url) => API.protocol+"://"+API.dominio+":"+API.port+"/"+API.raiz+"/"+(url || API._url),
};

export const option_GET = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: token,
  },
};

export const option_POST = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: token,
  },
  body: {},
};

export const option_PUT = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    Authorization: token,
  },
  body: {},
};

export const option_DELETE = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
    Authorization: token,
  }
};
