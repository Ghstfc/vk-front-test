import type {Spec} from "@gravity-ui/dynamic-forms/build/esm/lib/core/types";
import {SpecTypes} from "@gravity-ui/dynamic-forms/build/esm/lib/core/constants";

export const userSpec: Spec = {
    type: SpecTypes.Object,
    defaultValue: {},
    required: true,
    "properties": {
        name: {
            "type": SpecTypes.String,
            "viewSpec": {
                "type": "base",
                "layout": "row",
                "layoutTitle": "Name",
                "copy": true,
                "placeholder": 'John'
            },
            "required": false
        },
        surname: {
            "type": SpecTypes.String,
            "viewSpec": {
                "type": "base",
                "layout": "row",
                "layoutTitle": "Surname",
                "copy": true,
                "placeholder": 'Doe'
            },
            "required": false
        },
        lastname: {
            "type": SpecTypes.String,
            "viewSpec": {
                "type": "base",
                "layout": "row",
                "layoutTitle": "Lastname",
                "copy": true,
                "placeholder": 'Alexandrovich'
            },
            "required": false
        },
        age: {
            "type": SpecTypes.Number,
            "viewSpec": {
                "type": "base",
                "layout": "row",
                "layoutTitle": "Age",
                "copy": true,
                "placeholder": '1'
            },
            "required": false
        },
        height: {
            "type": SpecTypes.Number,
            "viewSpec": {
                "type": "base",
                "layout": "row",
                "layoutTitle": "Height",
                "copy": true,
                "placeholder": '123'
            },
            "required": false
        },
        weight: {
            "type": SpecTypes.Number,
            "viewSpec": {
                "type": "base",
                "layout": "row",
                "layoutTitle": "Weight",
                "copy": true,
                "placeholder": '123'
            },
            "required": false
        },
        eyeColor: {
            "type": SpecTypes.String,
            "viewSpec": {
                "type": "base",
                "layout": "row",
                "layoutTitle": "Eye color",
                "copy": true,
                "placeholder": 'blue'
            },
            "required": false
        },
        birthDate: {
            "type": SpecTypes.String,
            "viewSpec": {
                "type": "date_input",
                "layout": "row",
                "layoutTitle": "Birthday",
                "dateInput": {
                    "outputFormat": "timestamp"
                },
                "placeholder": '12.01.1234 12:00'
            },
            "required": false
        },
        passport: {
            "type": SpecTypes.String,
            "viewSpec": {
                "type": "base",
                "layout": "row",
                "layoutTitle": "Passport",
                "copy": true,
                "placeholder": '1234-567891',
            },
            pattern: '^(?:\\d{4}-\\d{6}|)$',
            "required": false
        },
        email: {
            "type": SpecTypes.String,
            "viewSpec": {
                "type": "base",
                "layout": "row",
                "layoutTitle": "Email",
                "copy": true,
                "placeholder": 'abacaba@gmail.com',
            },
            pattern: '^(?:((?!\\.)[\\w-_.]*[^.])(@\\w+)(\\.\\w+(\\.\\w+)?[^.\\W])|)$',
            "required": false
        },
        phoneNumber: {
            "type": SpecTypes.String,
            "viewSpec": {
                "type": "base",
                "layout": "row",
                "layoutTitle": "Phone Number",
                "copy": true,
                "placeholder": '+71234567890'
            },
            "required": false
        },
        nationality: {
            "type": SpecTypes.String,
            "viewSpec": {
                "type": "base",
                "layout": "row",
                "layoutTitle": "Nationality",
                "copy": true,
                "placeholder": 'romanian'
            },
            "required": false
        },
        sex: {
            "type": SpecTypes.String,
            "enum": ["m", "f"],
            "viewSpec": {
                "type": "radio_group",
                "layout": "row",
                "layoutTitle": "Sex",
                "copy": true,
            },
            "required": false
        },
        country: {
            "type": SpecTypes.String,
            "viewSpec": {
                "type": "base",
                "layout": "row",
                "layoutTitle": "Country",
                "copy": true,
                "placeholder": 'russia'
            },
            "required": false
        },
        city: {
            "type": SpecTypes.String,
            "viewSpec": {
                "type": "base",
                "layout": "row",
                "layoutTitle": "City",
                "copy": true,
                "placeholder": 'moscow'
            },
            "required": false
        }
    },
    "viewSpec": {
        "type": "base",
        "layout": "section",
    }
}

export const defaultUserFormValues = {
    user: {
        age: undefined,
        name: undefined,
        surname: undefined,
        lastname: undefined,
        height: undefined,
        weight: undefined,
        eyeColor: undefined,
        birthDate: undefined,
        passport: undefined,
        email: undefined,
        phoneNumber: undefined,
        nationality: undefined,
        sex: '',
        country: undefined,
        city: undefined
    }
};
