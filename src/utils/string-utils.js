module.exports = {
    passwordValidation(password) {
        const hasSymbol = /[ ^a-zA-Z0-9]/
        const hasCapital = /[A-Z]/
        const hasNumber = /[0-9]/
        const hasLength = 8;

        if (password.match(hasSymbol) && password.match(hasCapital) && password.match(hasNumber) && password.length === 8)
            return true;

        return false;
    }
};
