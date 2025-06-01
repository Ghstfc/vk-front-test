'use client'

import React, {useRef} from 'react';
import {fork, Scope} from "effector";
import {Provider} from "effector-react";
import {UsersTable} from "@/components/UsersTable/UsersTable";

export const UsersTableWrapper = ({initialState}: { initialState: any }) => {

    const scopeRef = useRef<Scope>(null);

    if (!scopeRef.current) {
        scopeRef.current = fork({
            values: initialState
        });
    }

    return (
        <Provider value={scopeRef.current}>
            <UsersTable/>
        </Provider>

    );
};
