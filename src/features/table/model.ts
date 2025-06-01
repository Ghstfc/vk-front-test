import {createStore, sample} from "effector";
import {User} from "@/shared/types";
import {createAbortEffect} from "@/shared/createAbortEffect";
import axios from "axios";


export const searchUsersFx = createAbortEffect({
    handler: async (params: { [key: string]: unknown }, signal?: AbortSignal) => {
        const response = await axios.get('http://localhost:3001/users', {
            signal,
            params
        })
        if (response.status !== 200) throw new Error(response.statusText);

        return response.data as User[];

    }
});

export const $users = createStore<User[]>([], {
    sid: "users-store"
})

export const $currentFirst = createStore<number>(0, {
    sid: "current-first",
})

export const $allLoaded = createStore(false, {
    sid: "all-loaded",
})


sample({
    source: $users,
    clock: searchUsersFx.doneData,
    fn: (users, data) => [...users, ...data],
    target: $users
});

sample({
    clock: searchUsersFx.doneData,
    fn: (data) => data.length !== 20,
    target: $allLoaded
});


sample({
    source: $currentFirst,
    clock: searchUsersFx.doneData,
    fn: (a) => {
        return a + 20
    },
    target: $currentFirst
});