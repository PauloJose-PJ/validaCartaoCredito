const cardPrefixes = {
    visa: ['4'],
    mastercard: ['51', '52', '53', '54', '55'],
    amex: ['34', '37'],
    discover: ['6011', '65'],
    diners: ['36', '38', '39'],
    jcb: ['35'],
    unionpay: ['62'],
    maestro: ['50', '56', '57', '58'],
    mir: ['2200', '2201', '2202', '2203', '2204'],
    enroute: ['2014', '2149'],
    voyager: ['8699'],
    hipercard: ['606282', '384100', '384140', '384160'],
    aura: ['50']
};

function luhnAlgorithm(cardNumber) {
    const digits = cardNumber.split('').map(Number);
    let sum = 0;
    let alternate = false;
    
    for (let i = digits.length - 1; i >= 0; i--) {
        let digit = digits[i];
        if (alternate) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }
        sum += digit;
        alternate = !alternate;
    }
    return sum % 10 === 0;
}

function getCardType(cardNumber) {
    for (const [cardType, prefixes] of Object.entries(cardPrefixes)) {
        for (const prefix of prefixes) {
            if (cardNumber.startsWith(prefix)) {
                return cardType;
            }
        }
    }
    return 'unknown';
}

function validateCreditCard(cardNumber) {
    const isValid = luhnAlgorithm(cardNumber);
    const cardType = getCardType(cardNumber);
    if (isValid) {
        console.log(`Card Number: ${cardNumber}, Card Type: ${cardType}`);
    }
}

// Exemplo de uso
const cardNumber = "5205009042627961";
validateCreditCard(cardNumber);

/* https://www.4devs.com.br/gerador_de_numero_cartao_credito */
