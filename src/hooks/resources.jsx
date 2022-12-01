import useSWR from 'swr';
import { useEffect } from 'react';
import axios, { csrf } from '@/utils/axios';

export const useResources = ({ resource, prefix = '/api/v1/', page }) => {
  const { data, error, mutate } = useSWR(`${prefix}${resource}${page}`, () =>
    axios.get(`${prefix}${resource}`).then((res) => res.data)
  );

  const create = async (setErrors, props) => {
    await csrf();

    setErrors([]);

    await axios
      .post(`${prefix}${resource}`, props)
      .then(() => mutate())
      .catch((error) => {
        if (error.response.status !== 422) throw error;
        setErrors(error.response.data.errors);
        throw error;
      });
  };

  const update = async (id, props) => {
    await csrf();

    await axios
      .post(`${prefix}${resource}/${id}`, props)
      .then(() => mutate())
      .catch((error) => {
        throw error;
      });
  };

  const destroy = async (id) => {
    await csrf();

    await axios
      .delete(`${prefix}${resource}/${id}`)
      .then(() => mutate())
      .catch((error) => {
        throw error;
      });
  };

  const logout = async () => {
    if (!error) {
      await axios.post('/logout').then(() => mutate());
    }

    window.location.pathname = '/';
  };

  useEffect(() => {
    if (error) logout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error]);

  return {
    data,
    create,
    update,
    destroy,
  };
};
