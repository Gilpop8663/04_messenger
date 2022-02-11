import axios from 'axios';

interface IArgsProps {
  url: string;
  method: string;
  params?: object;
}

class HttpUtil {
  async requestApi(args: IArgsProps) {
    function getApi(url: string, method: string, params?: object) {
      const body: object = {
        url: url,
        method: method,
      };
      let data = {};

      if (method === 'GET') {
        data = { data: !params ? {} : params };
      } else {
        // POST 요청
        data = { params: !params ? {} : params };
      }

      // baseURL 옵션을 변경하거나 package.json 의 proxy 옵션을 넣어주면 됨.
      return axios({
        baseURL: 'https://json-server-wanted14.herokuapp.com/',
        ...body,
        ...data,
      })
        .then((res) => res)
        .catch((err) => err.response);
    }

    const response = await getApi(args.url, args.method, args.params);
    let msg: string = '';

    if (!response) msg = '데이터를 로드 할 수 없습니다.';
    if (response.status !== 200)
      msg =
        '네트워크 통신 중 오류가 발생했습니다. 오류 코드 : [' +
        response.status +
        ']';

    return { data: response, msg };
  }
}

export default new HttpUtil();
