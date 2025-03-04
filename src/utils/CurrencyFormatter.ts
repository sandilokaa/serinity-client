const currencyCode: string = 'Rp '; // IDR or USD
const currencyPosition: 'left' | 'right' = 'left'; // left or right
const maxFractionDigits: number = 2;
const thousandSeparator: string = '.';

type CurrencyPosition = 'left' | 'right';

function position(currencyPosition: CurrencyPosition, value: string | number): string {
    return currencyPosition === 'left' ? `${currencyCode}${value}` : `${value}${currencyCode}`;
}

const CurrencyFormatter = (value: number | string | null | undefined): string => {
    if (value === 0 || value === null || value === undefined || value === '0' || typeof value === 'string' && isNaN(Number(value))) {
        return position(currencyPosition, 0);
    }

    let numericValue = typeof value === 'string' ? parseFloat(value) : value;

    const currencyCheck = currencyCode.replace(/\s/g, '').toLowerCase();
    if (currencyCheck === 'idr' || currencyCheck === 'rp') {
        numericValue = Math.ceil(numericValue);
    }

    const valueFixed = numericValue.toFixed(maxFractionDigits);
    const valueSplit = valueFixed.split('.');
    const firstValue = valueSplit[0];
    const secondValue = valueSplit[1];
    const valueReal = firstValue.replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);

    return Number(secondValue) > 0
        ? position(currencyPosition, `${valueReal}${thousandSeparator}${secondValue}`)
        : position(currencyPosition, valueReal);
}

export default CurrencyFormatter;
