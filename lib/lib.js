
export function currencyFormat(currency, num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' ' + currency;
}

export const color = {
    "white": "#FFFFFF",
    "main": "#56844c" ,
    "greey": "#E9E8EB"
};

export const menuItem = [
    { title: "expenses", route: 'Expenses' },
    { title: "revenue", route: 'Revenue'  },
    { title: "goal", route: 'Goal'  },
    { title: "donation", route: 'Donation'  },
    { title: "info", route: 'Info' }
];

export const languageMenu = [
    { title: "English", value: 'en' },
    { title: "Turkish", value: 'tr'  }
];

export const currencyMenu = [
    { title: "USD", value: '$' },
    { title: "TL", value: 'TL'  }
];

export const infoMenu = [
    { title: "expenses", description: "expensesDesc" },
    { title: "revenue", description: "revenueDesc" },
    { title: "goal", description: "goalDesc" },
    { title: "donation", description: "donationDesc" },
]