'use client'

import React, {useEffect, useRef} from 'react';
import styles from "@/app/page.module.css";
import {Table, TableColumnConfig} from "@gravity-ui/uikit";
import {useUnit} from "effector-react";
import {$allLoaded, $currentFirst, $users, searchUsersFx} from "@/features/table/model";

const columns: TableColumnConfig<never>[] = [
    {id: "name", name: 'Name'},
    {id: "surname", name: 'Surname'},
    {id: "lastname", name: 'Lastname'},
    {id: "age", name: 'Age'},
    {id: "height", name: 'Height'},
    {id: "weight", name: 'Weight'},
    {id: "eyeColor", name: 'Eye color'},
    {id: "birthDate", name: 'Birth date'},
    {id: "passport", name: 'Passport'},
    {id: "email", name: 'Email'},
    {id: "phoneNumber", name: 'Phone Number'},
    {id: "nationality", name: 'Nationality'},
    {id: "sex", name: 'Sex'},
    {id: "country", name: 'Country'},
    {id: "city", name: 'City'},
]

const cols = columns.map((col: TableColumnConfig<never>) => {
    return {
        ...col,
        className: `${styles.maxWidthColumn}`
    }
})

export const UsersTable = () => {
    const users = useUnit($users)
    const searchUsers = useUnit(searchUsersFx);
    const currentFirst = useUnit($currentFirst);
    const allLoaded = useUnit($allLoaded);

    const tableRef = useRef<HTMLDivElement>(null);
    const isLoadingRef = useRef(false);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            const [entry] = entries;
            if (entry.isIntersecting && !isLoadingRef.current && !allLoaded) {
                isLoadingRef.current = true;
                searchUsers({_start: currentFirst, _end: currentFirst + 20}).finally(() => {
                    isLoadingRef.current = false;
                });
            }
        };

        observerRef.current = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '20px',
            threshold: 0.1,
        });

        const tableElement = tableRef.current;
        if (tableElement) {
            const sentinel = document.createElement('div');
            sentinel.style.height = '1px';
            tableElement.appendChild(sentinel);
            observerRef.current.observe(sentinel);

            return () => {
                observerRef.current?.unobserve(sentinel);
                observerRef.current?.disconnect();
                tableElement.removeChild(sentinel);
            };
        }

        return () => {
            observerRef.current?.disconnect();
        };
    }, [allLoaded, currentFirst, searchUsers, users]);

    return (
        <div ref={tableRef}>
            <Table
                // @ts-expect-error by default it empty
                data={users}
                columns={cols}
                emptyMessage={users.length ? "No data" : "Loading..."}
            />
        </div>
    );
};