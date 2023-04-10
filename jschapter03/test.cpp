#include <iostream>
#include <string>
#include <iomanip>

using namespace std;

int main()
{
    string month, year;
    double total_collected, total_sales_tax, sales,
        county_sales_tax_dollars, state_sales_tax_dollar,
        total_sales_tax_dollars; // final dollar amount

    const double STATE_SALES_TAX = 1.04,
                 COUNTY_SALES_TAX = 1.02;

    // input
    cout << "What is the month and year?\n";
    cin >> month >> year;
    cout << "What is the total collected?\n";
    cin >> total_collected;

    // vanity header
    cout << setw(16) << month << " : " << year << endl;
    cout << "---------------------------------" << endl;

    // calculations
    county_sales_tax_dollars = total_collected * COUNTY_SALES_TAX - total_collected;
    state_sales_tax_dollar = total_collected * STATE_SALES_TAX - total_collected;
    total_sales_tax_dollars = county_sales_tax_dollars + state_sales_tax_dollar;
    sales = total_collected - total_sales_tax_dollars;

    // display
    cout << setprecision(2) << fixed;
    cout << "Total collected: " << setw(16) << total_collected << endl;
    cout << "Sales: " << setw(26) << sales << endl;
    cout << "County tax sales: " << setw(15) << county_sales_tax_dollars << endl;
    cout << "State tax sales: " << setw(16) << state_sales_tax_dollar << endl;
    cout << "Total sales tax: " << setw(16) << total_sales_tax_dollars << endl;

    return 0;
}