const adminValidator = (userName, password) => {
    if(userName === process.env.ADMIN && password === process.env.ADMINPASSWORD)
        return true;
    return false;
};

module.exports = adminValidator;