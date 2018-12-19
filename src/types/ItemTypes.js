// @flow

export type ImageType = {
  thumb: string,
  original: string }

export type ItemType = {
  id: number,
  title: string,
  description: string,
  specification: string,
  price: number,
  images: ImageType[] }
