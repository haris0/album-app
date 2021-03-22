import axios from "axios";
import {useState, useEffect} from 'react'
import {albumType} from '../types'

export const albums:string = "albums"
export const users:string = "users"
export const photos:string = "photos"

const HTTP = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 3000,
});

export const useFetchAlbum = (ref:any) => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (ref.current) {
      (async () => {
        try {
          let [responseAlbums, responseUser] = await Promise.all([
              HTTP.get(albums),
              HTTP.get(users)
          ])
          responseAlbums.data.map((album:albumType) => {
            album.userName = responseUser.data[album.userId-1].name.toLocaleLowerCase()
          })
          setData(responseAlbums);
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

export const useFetchUser = (id:string, ref:any) => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (ref.current) {
      (async () => {
        try {
          let [responseUser, responseAlbums] = await Promise.all([
            HTTP.get(users+'/'+id),
            HTTP.get(users+'/'+id+'/'+albums)
          ])
          responseUser.data.userAlbum = responseAlbums.data
          setData(responseUser);
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
  }, [id, ref]);
  return { loading, data, error };
};

export const useFetchAlbumPhotos = (id:string, ref:any) => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (ref.current) {
      (async () => {
        try {
          let [responsePhotos, responseAlbum] = await Promise.all([
            HTTP.get(albums+'/'+id+'/'+photos),
            HTTP.get(albums+'/'+id)
          ])
          let responseUser = await HTTP.get(users+'/'+responseAlbum.data.userId)
          responseAlbum.data.photos = responsePhotos.data
          responseAlbum.data.userData = responseUser.data
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
  }, [id, ref]);
  return { loading, data, error };
};

export const useFetchPhoto = (id:string, ref:any) => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (ref.current) {
      (async () => {
        try {
          let res = await HTTP.get(photos+'/'+id);
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
  }, [id, ref]);
  return { loading, data, error };
};