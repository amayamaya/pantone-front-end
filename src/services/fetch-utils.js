import { client } from '.client';

export async function getPantones() {
  const response = await client.from('pantone').select('*');

  return response.body;
}

export async function getPantone() {
  const response = await client.from('pantone').select('*');

  return response.body;
}
