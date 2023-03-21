export function getPercents(percent, number) {
    if (isNaN(percent) && isNaN(number)) {
        return 'Percentage and number entered incorrectly';
    } else if (isNaN(percent)) {
        return 'Percentage entered incorrectly';
    } else if (isNaN(number)) {
        return 'Number entered incorrectly';
    } else {
        return number / 100 * percent;
    }
}

