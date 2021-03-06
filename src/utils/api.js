import { AsyncStorage } from "react-native";

class Api {
  static token = null;
  static host = 'https://virtserver.swaggerhub.com/martkrisz/sssl-app-mock/1.0.0'; // TODO mock lecserélése';

  static setApiToken(apiToken) {
    console.log("api token initalized");
    this.token = apiToken;
  }

  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };
  }

  static get(route) {
    return this.xhr(route, null, {
      method: "GET"
    });
  }

  static getErrorString(err) {
    return err.error_string ? err.error_string : err.message;
  }

  static put(route, params) {
    return this.xhr(route, params, {
      method: "PUT"
    });
  }

  static post(route, params) {
    return this.xhr(route, params, {
      method: "POST",
    });
  }

  static getApiToken() {
    return this.token;
  }

  static clearApiToken() {
    this.token = null;
}

  static delete(route, params) {
    return this.xhr(route, params, {
      method: "DELETE"
    });
  }

  static xhr(route, params, verb) {
    const url = `${this.host}${route}`;

    if (params != null) {
    }

    let options = Object.assign(
      verb,
      params ? { body: JSON.stringify(params) } : null
    );

    options.headers = Api.headers();

    var token = this.getApiToken();
    if (token != null) {
      options.headers["Authorization"] = `Bearer ${token}`;
    }

    return fetch(url, options)
      .then(resp => {
        let json = resp.json();
        if (resp.ok) {
          return json;
        }

        return json.then(err => {

          err.message = json.error_string;
          {
            throw err;
          }
        });
      })
      .then(json => json);
  }
}

export default Api;