function maxProfitWithKTransactions(prices, k) {
    n=prices.length;
    var profit = Array(k+1).fill(0).map
    (x => Array(n+1).fill(0));
 
        profit[i][0] = 0;

    for (j = 0; j <= n; j++)
        profit[0][j] = 0;

    for (i = 1; i <= k; i++)
    {
        for (j = 1; j < n; j++)
        {
            var max_so_far = 0;
 
            for (m = 0; m < j; m++)
            max_so_far = Math.max(max_so_far, prices[j] -
                         prices[m] + profit[i - 1][m]);
 
            profit[i][j] = Math.max(profit[i] [j - 1],
                                          max_so_far);
        }
    }
 
    return profit[k][n - 1];
}

exports.maxProfitWithKTransactions = maxProfitWithKTransactions;