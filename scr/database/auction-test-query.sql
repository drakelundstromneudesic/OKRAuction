
SELECT * FROM bids b 
JOIN users u ON u.id = b.Bidder_id 
WHERE item_id = 1 
ORDER BY bid_timestamp DESC;