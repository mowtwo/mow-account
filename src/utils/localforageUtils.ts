import localforage from "localforage";

export default async function initDB() {
  await localforage.ready()
  return localforage
}