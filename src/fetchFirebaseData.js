// src/fetchFirestoreData.js
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export const fetchFirestoreData = async () => {
    const querySnapshot = await getDocs(collection(db, 'blogs'));
    const blogs = [];
    querySnapshot.forEach((doc) => {
        blogs.push({ id: doc.id, ...doc.data() });
    });
    return blogs;
};