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

const cardPatterns = {
    Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    MasterCard: /^(?:5[1-5][0-9]{14}|2(?:2[2-9][0-9]{2}|[3-6][0-9]{3}|7[01][0-9]{2}|720[0-9]))$/,
    American: /^3[47][0-9]{13}$/,
    Diners: /^3[689][0-9]{12}$/,
    Discover: /^6(?:011|22|4[4-9]|5[0-9]{2})[0-9]{12}$/,
    EnRoute: /^(?:2014|2149)[0-9]{11}$/,
    JCB: /^(?:35[0-9]{14})$/,
    Voyager: /^(?:8699[0-9]{11})$/,
    HiperCard: /^(?:38|60)[0-9]{14}$/,
    Aura: /^(?:50[0-9]{14})$/,
};

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
    for (const [cardType, pattern] of Object.entries(cardPatterns)) {
        if (pattern.test(cardNumber)) {
            return `Card Number: ${cardNumber}, Card Type: ${cardType}`;
        }
    }
    return `Card Number: ${cardNumber}, Card Type: unknown`;
}

/* APARECEU ISSO POR DEVIDA MODIFICAÇÃO */

const cardNumbers = [
    '4111111111111111',
    '5500000000000004',
    '340000000000009',
    '6011000000000004',
    '30000000000004',
    '3528000000000007',
    '6200000000000005',
    '5000000000000009',
    '2200000000000000',
    '2221000000000009'
];


cardNumbers.forEach(cardNumber => {
    console.log(validateCreditCard(cardNumber));
});

/* https://www.4devs.com.br/gerador_de_numero_cartao_credito */

const cardNumber = "349066449165142";
const result = validateCreditCard(cardNumber);
console.log(result);