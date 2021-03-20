import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dataFromSnapshot } from "../firestore/firestoreService";
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError,
} from "../async/asyncReducer";

export default function useFirestoreDoc({
  query,
  data,
  deps,
  shouldExecute = true,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!shouldExecute) return;
    dispatch(asyncActionStart());
    const unsubscribe = query().onSnapshot(
      (snapshot) => {
        if (!snapshot.exists) {
          dispatch(
            asyncActionError({
              code: "not-found",
              message: "Could not find the event.",
            })
          );
          return;
        }
        data(dataFromSnapshot(snapshot));
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
