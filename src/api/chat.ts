import axios from "axios";
export const getChatContent = async (prompt: any) => {
  const ans = await axios.post('http://server.vinky.com.cn/chat', { prompt: JSON.stringify(prompt) })
  return ans;
}