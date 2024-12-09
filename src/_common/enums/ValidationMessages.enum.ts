export enum DtoPrefix {
    NAME = 'NAME',
    PRICE = 'PRICE',
    AVAILIBILITY = 'AVAILIBILITY',
    SALE = 'SALE',
}

export enum ValidationType {
    IS_NOT_EMPTY = 'IS_NOT_EMPTY',
    MUST_BE_NUMBER = 'MUST_BE_NUMBER',
    MUST_BE_STRING = 'MUST_BE_STRING',
    MUST_BE_BOOLEAN = 'MUST_BE_BOOLEAN',
    MAX_LENGTH = 'MAX_LENGTH',
    MIN_LENGTH = 'MIN_LENGTH',
    NOT_STRONG = 'NOT_STRONG',
    NOT_VALID = 'NOT_VALID',
    MUST_BE_ENUM = "MUST_BE_ENUM"
}


export function getValidationMessage(dtoPrefix: DtoPrefix, validationType: ValidationType, ...args: any): string {
    const message = `${dtoPrefix}_${validationType}${args.length > 0 ? '|' + args.join('|') : ''}`;
    return message;
}