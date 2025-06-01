'use client'

import React, {useEffect, useState} from 'react';
import {Form} from 'react-final-form';
import {DynamicField, dynamicConfig} from '@gravity-ui/dynamic-forms';
import {defaultUserFormValues, userSpec} from './lib/config'
import styles from './page.module.css'
import {Button} from "@gravity-ui/uikit";
import {User} from "@/shared/types";
import {useUnit} from "effector-react/effector-react.umd";
import {
    $creatingNewNoteError,
    $isCreatingNewNote,
    createNewNoteEvent,
    openNewNotePageEvent
} from "@/features/createNewNote/model";

export default function Page() {

    // костылик для обновления формы
    const [formKey, setFormKey] = useState(0);

    const [submitError, setSubmitError] = useState('');
    const createNewNote = useUnit(createNewNoteEvent)
    const pending = useUnit($isCreatingNewNote)
    const effectError = useUnit($creatingNewNoteError)
    const openPage = useUnit(openNewNotePageEvent)

    useEffect(() => {
        openPage()
    }, [openPage]);

    const onSubmit = async (values: { user: User }) => {
        const userFields = values.user
        const minFields = 5

        const filledFields = Object.values(userFields || {})
            .filter(value => value).length

        if (filledFields < minFields) {
            console.log(filledFields)
            setSubmitError(`Please fill at least ${minFields} fields`)
            return
        }

        setSubmitError('')
        createNewNote(userFields)
        if (!effectError) {
            setFormKey(prev => prev + 1);
        }
    };

    return (
        <div className={styles.form}>
            <Form
                key={formKey}
                onSubmit={onSubmit}
                initialValues={defaultUserFormValues}
            >
                {({handleSubmit}) => (
                    <fieldset disabled={pending} style={{border: 'none', padding: 0}}>
                        {pending && (
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                zIndex: 1,
                                borderRadius: '4px'
                            }}/>
                        )}
                        <form onSubmit={handleSubmit}>
                            <DynamicField name="user" spec={userSpec} config={dynamicConfig}/>
                            <Button type="submit" disabled={pending}>Submit</Button>
                            {submitError && <div style={{color: 'red', marginTop: '10px'}}>{submitError}</div>}
                            {effectError && <div style={{color: 'red', marginTop: '10px'}}>{effectError}</div>}
                        </form>
                    </fieldset>
                )}
            </Form>
        </div>
    );
};