import jwtAxios from '../auth/jwt-auth';
import {serialize} from '@crema/utility/Utils';

export async function getBanner() {
  const param = {
    offset: 0,
    limit: 100,
    skip: 0,
    order: 'string',
    where: {
      additionalProp1: {},
    },
    fields: {
      id: true,
      image: true,
      link: true,
      created_at: true,
    },
  };

  // const urlParam = serialize(param).toString();

  try {
    // const urlParam = new URLSearchParams(param);
    const urlParam = encodeURIComponent(JSON.stringify(param));
    const response = await jwtAxios.get(`/banners?filter=${urlParam}`);
    //diisini olah datanya.
    //   const loadedTasks = [];

    //   for (const taskKey in tasksObj) {
    //     loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
    //   }
    //   for (const bannerkey of tasksObj.arBannerTop) {
    //     console.log(bannerkey.title);
    //   }
    // const dt = await response.json();
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e);
    throw new Error('Request failed!');
  }

  //   const response = await fetch(
  //     'https://bintango-backend-dev-ppsx2miuyq-as.a.run.app/home/get',
  //     requestOptions,
  //   );

  // if (!response.ok) {
  //   throw new Error('Request failed!');
  // }
}
