-- Task:
-- Write a SQL query to find details of the latest purchase for each customer. Assume you have a Purchases table with PurchaseID, CustomerID, PurchaseDate, and Amount.

-- Hints:

-- Use a subquery to identify the latest purchase date for each customer.
-- Join this result with the main Purchases table to get the details of these purchases.

WITH LatestPurchases AS (
    SELECT 
        CustomerID, 
        MAX(PurchaseDate) AS LatestPurchaseDate
    FROM 
        Purchases
    GROUP BY 
        CustomerID
)
SELECT 
    p.PurchaseID, 
    p.CustomerID, 
    p.PurchaseDate, 
    p.Amount
FROM 
    Purchases p
INNER JOIN 
    LatestPurchases lp ON p.CustomerID = lp.CustomerID AND p.PurchaseDate = lp.LatestPurchaseDate;
