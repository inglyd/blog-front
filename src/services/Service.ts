import axios from "axios";

const api = axios.create({
  baseURL: "https://blog-pessoal-r0v6.onrender.com/",
});

export const cadastrarUsuario = async (
  url: string,
  dados: Object,
  setData: Function
) => {
  //aonde vai, quem vai, como vai receber a resposta
  const resposta = await api.post(url, dados);
  setData(resposta.data);
};

export const login = async (url: string, dados: Object, setData: Function) => {
  //aonde vai, quem vai, como vai receber a resposta
  const resposta = await api.post(url, dados);
  setData(resposta.data);
};

export default api;
