import {allSettled, fork, serialize} from "effector";
import {searchUsersFx} from "@/features/table/model";
import {UsersTableWrapper} from "@/components/UsersTable";

export default async function Home() {
    const scope = fork();

    await allSettled(searchUsersFx, {
        scope,
        params: {_start: '0', _end: '20'}
    });

    const initialState = serialize(scope);
    return <UsersTableWrapper initialState={initialState}/>;
}