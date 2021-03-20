import axios from "axios";
import {useState, useEffect} from 'react'
import {albumType} from '../type'

export const albums:string = "albums"
export const users:string = "users"
export const photo:string = "photos"

const HTTP = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 3000,
});

export const useFetch = (url:string, ref:any) => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (ref.current) {
      (async () => {
        try {
          let res = await HTTP.get(url);
          setData(res);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      })();
    }
    return () => {
      ref.current = false;
    };
  }, [url, ref]);
  return { loading, data, error };
};

export const useFetchAlbum = (ref:any) => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (ref.current) {
      (async () => {
        try {
          let [responseAlbum, responseUser] = await Promise.all([
              HTTP.get(albums),
              HTTP.get(users)
          ])
          responseAlbum.data.map((album:albumType) => {
            album.userName = responseUser.data[album.userId-1].name.toLocaleLowerCase()
          })
          setData(responseAlbum);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      })();
    }
    return () => {
      ref.current = false;
    };
  }, [ref]);
  return { loading, data, error };
};