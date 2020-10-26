import firebase from 'firebase/app';
import 'firebase/firestore';

export default class DatabaseWrapper {
  db = firebase.firestore();

  cache = {
    experience: null,
    education: null,
    skills: null
  };

  /**
   * Retrieve data from Firestore and add it to a cache.
   * If data is present in the cache, cached data will be used.
   * 
   * @param collectionName The Firestore collection name
   * @param useCache Optionally disable caching
   */
  async retrieveCollectionDocuments(collectionName, useCache = true) {
    if (useCache && this.cache[collectionName]) {
      return this.cache[collectionName];
    } else {
      const data = (await this.db.collection(collectionName)
        .where('visible', '==', true)
        .get()).docs.map(doc => doc.data());
      this.cache[collectionName] = data;
      return data;
    }
  }
}