import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dataFromSnapshot } from "../firestore/firestoreService";
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError,
} from "../async/asyncReducer";

export default function useFirestoreCollection({ query, data, deps }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncActionStart());
    const unsubscribe = query().onSnapshot(
      (snapshot) => {
        const docs = snapshot.docs.map((doc) => dataFromSnapshot(doc));
        data(docs);
        dispatch(asyncActionFinish());
      },
      () => dispatch(asyncActionError())
    );

    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
