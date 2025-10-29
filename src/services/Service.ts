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

export const buscar = async (
  url: string,
  setDados: Function,
  header: Object
) => {
  const resposta = await api.get(url, header);
  setDados(resposta.data);
};

export const cadastrar = async (
  url: string,
  dados: Object,
  setDados: Function,
  header: Object
) => {
  const resposta = await api.post(url, dados, header);
  setDados(resposta.data);
};

export const atualizar = async (
  url: string,
  dados: Object,
  setDados: Function,
  header: Object
) => {
  const resposta = await api.put(url, dados, header);
  setDados(resposta.data);
};

export const deletar = async (url: string, header: Object) => {
  await api.delete(url, header);
};

export default api;
