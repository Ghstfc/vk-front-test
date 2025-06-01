import {createAbortEffect} from "@/shared/createAbortEffect";
import axios from "axios";
import {User} from "@/shared/types";
import {createEvent, createStore, sample} from "effector";
import {toast} from "react-toastify";

export const createNewNoteFx = createAbortEffect({
    handler: async (params: User, signal?: AbortSignal) => {
        console.log('Запрос начался с параметрами:', params); // Логируем начало запроса

        try {
            const response = await axios.post('http://localhost:3001/users', params, {
                signal,
            });

            return response.data as User[];
        } catch (error) {
            throw error;
        }
    }
});
export const createNewNoteEvent = createEvent<User>();
export const openNewNotePageEvent = createEvent();

export const $isCreatingNewNote = createStore<boolean>(false)
export const $creatingNewNoteError = createStore<string>('')

sample({
    clock: createNewNoteEvent,
    target: createNewNoteFx
})

sample({
    clock: createNewNoteFx.pending,
    target: $isCreatingNewNote
})
sample({
    clock: createNewNoteFx.doneData,
    fn: () => {
        toast.success('New user created')
    },
})

sample({
    clock: createNewNoteFx.failData,
    fn: (error) => {
        toast.error(error.message)
    },
})

sample({
    clock: openNewNotePageEvent,
    fn: () => false,
    target: $isCreatingNewNote
});

sample({
    clock: openNewNotePageEvent,
    fn: () => '',
    target: $creatingNewNoteError
});