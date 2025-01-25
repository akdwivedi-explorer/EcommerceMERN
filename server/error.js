export const createError = (status, error) => {
    const err = new Error();
    err.status = status;
    err.message = message;
    return err;
};